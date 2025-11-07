// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWtpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#_is_factory_setting ObjectWirelesscontrollerWtpprofile#_is_factory_setting}
  */
  readonly isFactorySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#adom ObjectWirelesscontrollerWtpprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#allowaccess ObjectWirelesscontrollerWtpprofile#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_country ObjectWirelesscontrollerWtpprofile#ap_country}
  */
  readonly apCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_handoff ObjectWirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#apcfg_profile ObjectWirelesscontrollerWtpprofile#apcfg_profile}
  */
  readonly apcfgProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ble_profile ObjectWirelesscontrollerWtpprofile#ble_profile}
  */
  readonly bleProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bonjour_profile ObjectWirelesscontrollerWtpprofile#bonjour_profile}
  */
  readonly bonjourProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#comment ObjectWirelesscontrollerWtpprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#console_login ObjectWirelesscontrollerWtpprofile#console_login}
  */
  readonly consoleLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#control_message_offload ObjectWirelesscontrollerWtpprofile#control_message_offload}
  */
  readonly controlMessageOffload?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtls_in_kernel ObjectWirelesscontrollerWtpprofile#dtls_in_kernel}
  */
  readonly dtlsInKernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtls_policy ObjectWirelesscontrollerWtpprofile#dtls_policy}
  */
  readonly dtlsPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dynamic_sort_subtable ObjectWirelesscontrollerWtpprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#energy_efficient_ethernet ObjectWirelesscontrollerWtpprofile#energy_efficient_ethernet}
  */
  readonly energyEfficientEthernet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ext_info_enable ObjectWirelesscontrollerWtpprofile#ext_info_enable}
  */
  readonly extInfoEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frequency_handoff ObjectWirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#handoff_roaming ObjectWirelesscontrollerWtpprofile#handoff_roaming}
  */
  readonly handoffRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#handoff_rssi ObjectWirelesscontrollerWtpprofile#handoff_rssi}
  */
  readonly handoffRssi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#handoff_sta_thresh ObjectWirelesscontrollerWtpprofile#handoff_sta_thresh}
  */
  readonly handoffStaThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#id ObjectWirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#indoor_outdoor_deployment ObjectWirelesscontrollerWtpprofile#indoor_outdoor_deployment}
  */
  readonly indoorOutdoorDeployment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ip_fragment_preventing ObjectWirelesscontrollerWtpprofile#ip_fragment_preventing}
  */
  readonly ipFragmentPreventing?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#led_schedules ObjectWirelesscontrollerWtpprofile#led_schedules}
  */
  readonly ledSchedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#led_state ObjectWirelesscontrollerWtpprofile#led_state}
  */
  readonly ledState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#lldp ObjectWirelesscontrollerWtpprofile#lldp}
  */
  readonly lldp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#login_passwd ObjectWirelesscontrollerWtpprofile#login_passwd}
  */
  readonly loginPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#login_passwd_change ObjectWirelesscontrollerWtpprofile#login_passwd_change}
  */
  readonly loginPasswdChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_clients ObjectWirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#name ObjectWirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#poe_mode ObjectWirelesscontrollerWtpprofile#poe_mode}
  */
  readonly poeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#scopetype ObjectWirelesscontrollerWtpprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#snmp ObjectWirelesscontrollerWtpprofile#snmp}
  */
  readonly snmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#split_tunneling_acl_local_ap_subnet ObjectWirelesscontrollerWtpprofile#split_tunneling_acl_local_ap_subnet}
  */
  readonly splitTunnelingAclLocalApSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#split_tunneling_acl_path ObjectWirelesscontrollerWtpprofile#split_tunneling_acl_path}
  */
  readonly splitTunnelingAclPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#syslog_profile ObjectWirelesscontrollerWtpprofile#syslog_profile}
  */
  readonly syslogProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#tun_mtu_downlink ObjectWirelesscontrollerWtpprofile#tun_mtu_downlink}
  */
  readonly tunMtuDownlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#tun_mtu_uplink ObjectWirelesscontrollerWtpprofile#tun_mtu_uplink}
  */
  readonly tunMtuUplink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#unii_4_5ghz_band ObjectWirelesscontrollerWtpprofile#unii_4_5ghz_band}
  */
  readonly unii45GhzBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_auth ObjectWirelesscontrollerWtpprofile#wan_port_auth}
  */
  readonly wanPortAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_auth_macsec ObjectWirelesscontrollerWtpprofile#wan_port_auth_macsec}
  */
  readonly wanPortAuthMacsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_auth_methods ObjectWirelesscontrollerWtpprofile#wan_port_auth_methods}
  */
  readonly wanPortAuthMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_auth_password ObjectWirelesscontrollerWtpprofile#wan_port_auth_password}
  */
  readonly wanPortAuthPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_auth_usrname ObjectWirelesscontrollerWtpprofile#wan_port_auth_usrname}
  */
  readonly wanPortAuthUsrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wan_port_mode ObjectWirelesscontrollerWtpprofile#wan_port_mode}
  */
  readonly wanPortMode?: string;
  /**
  * deny_mac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#deny_mac_list ObjectWirelesscontrollerWtpprofile#deny_mac_list}
  */
  readonly denyMacList?: ObjectWirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable;
  /**
  * esl_ses_dongle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#esl_ses_dongle ObjectWirelesscontrollerWtpprofile#esl_ses_dongle}
  */
  readonly eslSesDongle?: ObjectWirelesscontrollerWtpprofileEslSesDongle;
  /**
  * lan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#lan ObjectWirelesscontrollerWtpprofile#lan}
  */
  readonly lan?: ObjectWirelesscontrollerWtpprofileLan;
  /**
  * lbs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#lbs ObjectWirelesscontrollerWtpprofile#lbs}
  */
  readonly lbs?: ObjectWirelesscontrollerWtpprofileLbs;
  /**
  * platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#platform ObjectWirelesscontrollerWtpprofile#platform}
  */
  readonly platform?: ObjectWirelesscontrollerWtpprofilePlatform;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_1 ObjectWirelesscontrollerWtpprofile#radio_1}
  */
  readonly radio1?: ObjectWirelesscontrollerWtpprofileRadio1;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_2 ObjectWirelesscontrollerWtpprofile#radio_2}
  */
  readonly radio2?: ObjectWirelesscontrollerWtpprofileRadio2;
  /**
  * radio_3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_3 ObjectWirelesscontrollerWtpprofile#radio_3}
  */
  readonly radio3?: ObjectWirelesscontrollerWtpprofileRadio3;
  /**
  * radio_4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_4 ObjectWirelesscontrollerWtpprofile#radio_4}
  */
  readonly radio4?: ObjectWirelesscontrollerWtpprofileRadio4;
  /**
  * split_tunneling_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#split_tunneling_acl ObjectWirelesscontrollerWtpprofile#split_tunneling_acl}
  */
  readonly splitTunnelingAcl?: ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerWtpprofileDenyMacListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#id ObjectWirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mac ObjectWirelesscontrollerWtpprofile#mac}
  */
  readonly mac?: string;
}

export function objectWirelesscontrollerWtpprofileDenyMacListStructToTerraform(struct?: ObjectWirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function objectWirelesscontrollerWtpprofileDenyMacListStructToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable): any {
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

export class ObjectWirelesscontrollerWtpprofileDenyMacListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable | undefined) {
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

export class ObjectWirelesscontrollerWtpprofileDenyMacListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerWtpprofileDenyMacListStructOutputReference {
    return new ObjectWirelesscontrollerWtpprofileDenyMacListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerWtpprofileEslSesDongle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#apc_addr_type ObjectWirelesscontrollerWtpprofile#apc_addr_type}
  */
  readonly apcAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#apc_fqdn ObjectWirelesscontrollerWtpprofile#apc_fqdn}
  */
  readonly apcFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#apc_ip ObjectWirelesscontrollerWtpprofile#apc_ip}
  */
  readonly apcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#apc_port ObjectWirelesscontrollerWtpprofile#apc_port}
  */
  readonly apcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#coex_level ObjectWirelesscontrollerWtpprofile#coex_level}
  */
  readonly coexLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#compliance_level ObjectWirelesscontrollerWtpprofile#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#esl_channel ObjectWirelesscontrollerWtpprofile#esl_channel}
  */
  readonly eslChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#output_power ObjectWirelesscontrollerWtpprofile#output_power}
  */
  readonly outputPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#scd_enable ObjectWirelesscontrollerWtpprofile#scd_enable}
  */
  readonly scdEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#tls_cert_verification ObjectWirelesscontrollerWtpprofile#tls_cert_verification}
  */
  readonly tlsCertVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#tls_fqdn_verification ObjectWirelesscontrollerWtpprofile#tls_fqdn_verification}
  */
  readonly tlsFqdnVerification?: string;
}

export function objectWirelesscontrollerWtpprofileEslSesDongleToTerraform(struct?: ObjectWirelesscontrollerWtpprofileEslSesDongleOutputReference | ObjectWirelesscontrollerWtpprofileEslSesDongle): any {
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


export function objectWirelesscontrollerWtpprofileEslSesDongleToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileEslSesDongleOutputReference | ObjectWirelesscontrollerWtpprofileEslSesDongle): any {
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

export class ObjectWirelesscontrollerWtpprofileEslSesDongleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileEslSesDongle | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileEslSesDongle | undefined) {
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
export interface ObjectWirelesscontrollerWtpprofileLan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port1_mode ObjectWirelesscontrollerWtpprofile#port1_mode}
  */
  readonly port1Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port1_ssid ObjectWirelesscontrollerWtpprofile#port1_ssid}
  */
  readonly port1Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port2_mode ObjectWirelesscontrollerWtpprofile#port2_mode}
  */
  readonly port2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port2_ssid ObjectWirelesscontrollerWtpprofile#port2_ssid}
  */
  readonly port2Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port3_mode ObjectWirelesscontrollerWtpprofile#port3_mode}
  */
  readonly port3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port3_ssid ObjectWirelesscontrollerWtpprofile#port3_ssid}
  */
  readonly port3Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port4_mode ObjectWirelesscontrollerWtpprofile#port4_mode}
  */
  readonly port4Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port4_ssid ObjectWirelesscontrollerWtpprofile#port4_ssid}
  */
  readonly port4Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port5_mode ObjectWirelesscontrollerWtpprofile#port5_mode}
  */
  readonly port5Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port5_ssid ObjectWirelesscontrollerWtpprofile#port5_ssid}
  */
  readonly port5Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port6_mode ObjectWirelesscontrollerWtpprofile#port6_mode}
  */
  readonly port6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port6_ssid ObjectWirelesscontrollerWtpprofile#port6_ssid}
  */
  readonly port6Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port7_mode ObjectWirelesscontrollerWtpprofile#port7_mode}
  */
  readonly port7Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port7_ssid ObjectWirelesscontrollerWtpprofile#port7_ssid}
  */
  readonly port7Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port8_mode ObjectWirelesscontrollerWtpprofile#port8_mode}
  */
  readonly port8Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port8_ssid ObjectWirelesscontrollerWtpprofile#port8_ssid}
  */
  readonly port8Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port_esl_mode ObjectWirelesscontrollerWtpprofile#port_esl_mode}
  */
  readonly portEslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port_esl_ssid ObjectWirelesscontrollerWtpprofile#port_esl_ssid}
  */
  readonly portEslSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port_mode ObjectWirelesscontrollerWtpprofile#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#port_ssid ObjectWirelesscontrollerWtpprofile#port_ssid}
  */
  readonly portSsid?: string;
}

export function objectWirelesscontrollerWtpprofileLanToTerraform(struct?: ObjectWirelesscontrollerWtpprofileLanOutputReference | ObjectWirelesscontrollerWtpprofileLan): any {
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


export function objectWirelesscontrollerWtpprofileLanToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileLanOutputReference | ObjectWirelesscontrollerWtpprofileLan): any {
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

export class ObjectWirelesscontrollerWtpprofileLanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileLan | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileLan | undefined) {
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

  // port1_mode - computed: false, optional: true, required: false
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

  // port2_mode - computed: false, optional: true, required: false
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

  // port3_mode - computed: false, optional: true, required: false
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

  // port4_mode - computed: false, optional: true, required: false
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

  // port5_mode - computed: false, optional: true, required: false
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

  // port6_mode - computed: false, optional: true, required: false
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

  // port7_mode - computed: false, optional: true, required: false
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

  // port8_mode - computed: false, optional: true, required: false
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

  // port_mode - computed: false, optional: true, required: false
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
export interface ObjectWirelesscontrollerWtpprofileLbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout ObjectWirelesscontrollerWtpprofile#aeroscout}
  */
  readonly aeroscout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_ap_mac ObjectWirelesscontrollerWtpprofile#aeroscout_ap_mac}
  */
  readonly aeroscoutApMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_mmu_report ObjectWirelesscontrollerWtpprofile#aeroscout_mmu_report}
  */
  readonly aeroscoutMmuReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_mu ObjectWirelesscontrollerWtpprofile#aeroscout_mu}
  */
  readonly aeroscoutMu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_mu_factor ObjectWirelesscontrollerWtpprofile#aeroscout_mu_factor}
  */
  readonly aeroscoutMuFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_mu_timeout ObjectWirelesscontrollerWtpprofile#aeroscout_mu_timeout}
  */
  readonly aeroscoutMuTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_server_ip ObjectWirelesscontrollerWtpprofile#aeroscout_server_ip}
  */
  readonly aeroscoutServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#aeroscout_server_port ObjectWirelesscontrollerWtpprofile#aeroscout_server_port}
  */
  readonly aeroscoutServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ekahau_blink_mode ObjectWirelesscontrollerWtpprofile#ekahau_blink_mode}
  */
  readonly ekahauBlinkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ekahau_tag ObjectWirelesscontrollerWtpprofile#ekahau_tag}
  */
  readonly ekahauTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#erc_server_ip ObjectWirelesscontrollerWtpprofile#erc_server_ip}
  */
  readonly ercServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#erc_server_port ObjectWirelesscontrollerWtpprofile#erc_server_port}
  */
  readonly ercServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence ObjectWirelesscontrollerWtpprofile#fortipresence}
  */
  readonly fortipresence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_ble ObjectWirelesscontrollerWtpprofile#fortipresence_ble}
  */
  readonly fortipresenceBle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_frequency ObjectWirelesscontrollerWtpprofile#fortipresence_frequency}
  */
  readonly fortipresenceFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_port ObjectWirelesscontrollerWtpprofile#fortipresence_port}
  */
  readonly fortipresencePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_project ObjectWirelesscontrollerWtpprofile#fortipresence_project}
  */
  readonly fortipresenceProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_rogue ObjectWirelesscontrollerWtpprofile#fortipresence_rogue}
  */
  readonly fortipresenceRogue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_secret ObjectWirelesscontrollerWtpprofile#fortipresence_secret}
  */
  readonly fortipresenceSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_server ObjectWirelesscontrollerWtpprofile#fortipresence_server}
  */
  readonly fortipresenceServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_server_addr_type ObjectWirelesscontrollerWtpprofile#fortipresence_server_addr_type}
  */
  readonly fortipresenceServerAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_server_fqdn ObjectWirelesscontrollerWtpprofile#fortipresence_server_fqdn}
  */
  readonly fortipresenceServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#fortipresence_unassoc ObjectWirelesscontrollerWtpprofile#fortipresence_unassoc}
  */
  readonly fortipresenceUnassoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar ObjectWirelesscontrollerWtpprofile#polestar}
  */
  readonly polestar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_accumulation_interval ObjectWirelesscontrollerWtpprofile#polestar_accumulation_interval}
  */
  readonly polestarAccumulationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_asset_addrgrp_list ObjectWirelesscontrollerWtpprofile#polestar_asset_addrgrp_list}
  */
  readonly polestarAssetAddrgrpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_asset_uuid_list1 ObjectWirelesscontrollerWtpprofile#polestar_asset_uuid_list1}
  */
  readonly polestarAssetUuidList1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_asset_uuid_list2 ObjectWirelesscontrollerWtpprofile#polestar_asset_uuid_list2}
  */
  readonly polestarAssetUuidList2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_asset_uuid_list3 ObjectWirelesscontrollerWtpprofile#polestar_asset_uuid_list3}
  */
  readonly polestarAssetUuidList3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_asset_uuid_list4 ObjectWirelesscontrollerWtpprofile#polestar_asset_uuid_list4}
  */
  readonly polestarAssetUuidList4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_protocol ObjectWirelesscontrollerWtpprofile#polestar_protocol}
  */
  readonly polestarProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_reporting_interval ObjectWirelesscontrollerWtpprofile#polestar_reporting_interval}
  */
  readonly polestarReportingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_server_fqdn ObjectWirelesscontrollerWtpprofile#polestar_server_fqdn}
  */
  readonly polestarServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_server_path ObjectWirelesscontrollerWtpprofile#polestar_server_path}
  */
  readonly polestarServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_server_port ObjectWirelesscontrollerWtpprofile#polestar_server_port}
  */
  readonly polestarServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#polestar_server_token ObjectWirelesscontrollerWtpprofile#polestar_server_token}
  */
  readonly polestarServerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#station_locate ObjectWirelesscontrollerWtpprofile#station_locate}
  */
  readonly stationLocate?: string;
}

export function objectWirelesscontrollerWtpprofileLbsToTerraform(struct?: ObjectWirelesscontrollerWtpprofileLbsOutputReference | ObjectWirelesscontrollerWtpprofileLbs): any {
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
    fortipresence_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fortipresenceSecret),
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


export function objectWirelesscontrollerWtpprofileLbsToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileLbsOutputReference | ObjectWirelesscontrollerWtpprofileLbs): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fortipresenceSecret),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectWirelesscontrollerWtpprofileLbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileLbs | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileLbs | undefined) {
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

  // fortipresence_frequency - computed: false, optional: true, required: false
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

  // fortipresence_port - computed: false, optional: true, required: false
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

  // fortipresence_project - computed: false, optional: true, required: false
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

  // fortipresence_rogue - computed: false, optional: true, required: false
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

  // fortipresence_secret - computed: true, optional: true, required: false
  private _fortipresenceSecret?: string[]; 
  public get fortipresenceSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('fortipresence_secret'));
  }
  public set fortipresenceSecret(value: string[]) {
    this._fortipresenceSecret = value;
  }
  public resetFortipresenceSecret() {
    this._fortipresenceSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceSecretInput() {
    return this._fortipresenceSecret;
  }

  // fortipresence_server - computed: false, optional: true, required: false
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

  // fortipresence_server_addr_type - computed: false, optional: true, required: false
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

  // fortipresence_unassoc - computed: false, optional: true, required: false
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
export interface ObjectWirelesscontrollerWtpprofilePlatform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#_local_platform_str ObjectWirelesscontrollerWtpprofile#_local_platform_str}
  */
  readonly localPlatformStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ddscan ObjectWirelesscontrollerWtpprofile#ddscan}
  */
  readonly ddscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mode ObjectWirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#type ObjectWirelesscontrollerWtpprofile#type}
  */
  readonly type?: string;
}

export function objectWirelesscontrollerWtpprofilePlatformToTerraform(struct?: ObjectWirelesscontrollerWtpprofilePlatformOutputReference | ObjectWirelesscontrollerWtpprofilePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _local_platform_str: cdktf.stringToTerraform(struct!.localPlatformStr),
    ddscan: cdktf.stringToTerraform(struct!.ddscan),
    mode: cdktf.stringToTerraform(struct!.mode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectWirelesscontrollerWtpprofilePlatformToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofilePlatformOutputReference | ObjectWirelesscontrollerWtpprofilePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _local_platform_str: {
      value: cdktf.stringToHclTerraform(struct!.localPlatformStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ObjectWirelesscontrollerWtpprofilePlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofilePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPlatformStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPlatformStr = this._localPlatformStr;
    }
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofilePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localPlatformStr = undefined;
      this._ddscan = undefined;
      this._mode = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localPlatformStr = value.localPlatformStr;
      this._ddscan = value.ddscan;
      this._mode = value.mode;
      this._type = value.type;
    }
  }

  // _local_platform_str - computed: false, optional: true, required: false
  private _localPlatformStr?: string; 
  public get localPlatformStr() {
    return this.getStringAttribute('_local_platform_str');
  }
  public set localPlatformStr(value: string) {
    this._localPlatformStr = value;
  }
  public resetLocalPlatformStr() {
    this._localPlatformStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPlatformStrInput() {
    return this._localPlatformStr;
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
export interface ObjectWirelesscontrollerWtpprofileRadio1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#airtime_fairness ObjectWirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#amsdu ObjectWirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_handoff ObjectWirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_addr ObjectWirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_bufsize ObjectWirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_chan ObjectWirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_ctl ObjectWirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_data ObjectWirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#arrp_profile ObjectWirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_high ObjectWirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_level ObjectWirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_low ObjectWirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_target ObjectWirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band ObjectWirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band_5g_type ObjectWirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_admission_control ObjectWirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_capacity ObjectWirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#beacon_interval ObjectWirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color ObjectWirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color_mode ObjectWirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_admission_control ObjectWirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_capacity ObjectWirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel ObjectWirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_bonding ObjectWirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_utilization ObjectWirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#coexistence ObjectWirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#darrp ObjectWirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma ObjectWirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma_sensitivity ObjectWirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtim ObjectWirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frag_threshold ObjectWirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frequency_handoff ObjectWirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_protocol ObjectWirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_server_port ObjectWirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_clients ObjectWirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_distance ObjectWirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mimo_mode ObjectWirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mode ObjectWirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#n80211d ObjectWirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna ObjectWirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna_gain ObjectWirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_level ObjectWirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_mode ObjectWirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_value ObjectWirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#powersave_optimize ObjectWirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#protection_mode ObjectWirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_id ObjectWirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#rts_threshold ObjectWirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_bssid ObjectWirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ca_certificate ObjectWirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_captive_portal ObjectWirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_client_certificate ObjectWirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_failure_string ObjectWirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_match_string ObjectWirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_password ObjectWirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_success_string ObjectWirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_test_url ObjectWirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_username ObjectWirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_eap_method ObjectWirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_password ObjectWirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key ObjectWirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key_password ObjectWirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_report_intv ObjectWirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_security_type ObjectWirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server ObjectWirelesscontrollerWtpprofile#sam_server}
  */
  readonly samServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_fqdn ObjectWirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_ip ObjectWirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_type ObjectWirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ssid ObjectWirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_test ObjectWirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_username ObjectWirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#short_guard_interval ObjectWirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#spectrum_analysis ObjectWirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#transmit_optimize ObjectWirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap1 ObjectWirelesscontrollerWtpprofile#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap2 ObjectWirelesscontrollerWtpprofile#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap3 ObjectWirelesscontrollerWtpprofile#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap4 ObjectWirelesscontrollerWtpprofile#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap5 ObjectWirelesscontrollerWtpprofile#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap6 ObjectWirelesscontrollerWtpprofile#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap7 ObjectWirelesscontrollerWtpprofile#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap8 ObjectWirelesscontrollerWtpprofile#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap_all ObjectWirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vaps ObjectWirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wids_profile ObjectWirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#zero_wait_dfs ObjectWirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
}

export function objectWirelesscontrollerWtpprofileRadio1ToTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio1OutputReference | ObjectWirelesscontrollerWtpprofileRadio1): any {
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
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
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
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server: cdktf.stringToTerraform(struct!.samServer),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transmitOptimize),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.stringToTerraform(struct!.vaps),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
  }
}


export function objectWirelesscontrollerWtpprofileRadio1ToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio1OutputReference | ObjectWirelesscontrollerWtpprofileRadio1): any {
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
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.powersaveOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samCwpPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    sam_server: {
      value: cdktf.stringToHclTerraform(struct!.samServer),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transmitOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.stringToHclTerraform(struct!.vaps),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerWtpprofileRadio1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileRadio1 | undefined {
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
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
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
    if (this._samServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServer = this._samServer;
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
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileRadio1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
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
      this._channel = undefined;
      this._channelBonding = undefined;
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
      this._samServer = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
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
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
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
      this._channel = value.channel;
      this._channelBonding = value.channelBonding;
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
      this._samServer = value.samServer;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
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
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
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

  // ap_sniffer_chan - computed: false, optional: true, required: false
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

  // iperf_protocol - computed: false, optional: true, required: false
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

  // iperf_server_port - computed: false, optional: true, required: false
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

  // powersave_optimize - computed: true, optional: true, required: false
  private _powersaveOptimize?: string[]; 
  public get powersaveOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('powersave_optimize'));
  }
  public set powersaveOptimize(value: string[]) {
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

  // sam_bssid - computed: false, optional: true, required: false
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

  // sam_captive_portal - computed: false, optional: true, required: false
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

  // sam_cwp_password - computed: true, optional: true, required: false
  private _samCwpPassword?: string[]; 
  public get samCwpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_cwp_password'));
  }
  public set samCwpPassword(value: string[]) {
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

  // sam_password - computed: true, optional: true, required: false
  private _samPassword?: string[]; 
  public get samPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_password'));
  }
  public set samPassword(value: string[]) {
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

  // sam_private_key_password - computed: true, optional: true, required: false
  private _samPrivateKeyPassword?: string[]; 
  public get samPrivateKeyPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_private_key_password'));
  }
  public set samPrivateKeyPassword(value: string[]) {
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

  // sam_security_type - computed: false, optional: true, required: false
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

  // sam_server - computed: false, optional: true, required: false
  private _samServer?: string; 
  public get samServer() {
    return this.getStringAttribute('sam_server');
  }
  public set samServer(value: string) {
    this._samServer = value;
  }
  public resetSamServer() {
    this._samServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerInput() {
    return this._samServer;
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

  // sam_server_ip - computed: false, optional: true, required: false
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

  // sam_server_type - computed: false, optional: true, required: false
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

  // sam_test - computed: false, optional: true, required: false
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

  // spectrum_analysis - computed: true, optional: true, required: false
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
  private _transmitOptimize?: string[]; 
  public get transmitOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('transmit_optimize'));
  }
  public set transmitOptimize(value: string[]) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
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

  // vaps - computed: false, optional: true, required: false
  private _vaps?: string; 
  public get vaps() {
    return this.getStringAttribute('vaps');
  }
  public set vaps(value: string) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
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
}
export interface ObjectWirelesscontrollerWtpprofileRadio2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#airtime_fairness ObjectWirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#amsdu ObjectWirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_handoff ObjectWirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_addr ObjectWirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_bufsize ObjectWirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_chan ObjectWirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_ctl ObjectWirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_data ObjectWirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#arrp_profile ObjectWirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_high ObjectWirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_level ObjectWirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_low ObjectWirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_target ObjectWirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band ObjectWirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band_5g_type ObjectWirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_admission_control ObjectWirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_capacity ObjectWirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#beacon_interval ObjectWirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color ObjectWirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color_mode ObjectWirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_admission_control ObjectWirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_capacity ObjectWirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel ObjectWirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_bonding ObjectWirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_utilization ObjectWirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#coexistence ObjectWirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#darrp ObjectWirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma ObjectWirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma_sensitivity ObjectWirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtim ObjectWirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frag_threshold ObjectWirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frequency_handoff ObjectWirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_protocol ObjectWirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_server_port ObjectWirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_clients ObjectWirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_distance ObjectWirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mimo_mode ObjectWirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mode ObjectWirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#n80211d ObjectWirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna ObjectWirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna_gain ObjectWirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_level ObjectWirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_mode ObjectWirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_value ObjectWirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#powersave_optimize ObjectWirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#protection_mode ObjectWirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_id ObjectWirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#rts_threshold ObjectWirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_bssid ObjectWirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ca_certificate ObjectWirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_captive_portal ObjectWirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_client_certificate ObjectWirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_failure_string ObjectWirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_match_string ObjectWirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_password ObjectWirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_success_string ObjectWirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_test_url ObjectWirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_username ObjectWirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_eap_method ObjectWirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_password ObjectWirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key ObjectWirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key_password ObjectWirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_report_intv ObjectWirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_security_type ObjectWirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server ObjectWirelesscontrollerWtpprofile#sam_server}
  */
  readonly samServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_fqdn ObjectWirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_ip ObjectWirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_type ObjectWirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ssid ObjectWirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_test ObjectWirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_username ObjectWirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#short_guard_interval ObjectWirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#spectrum_analysis ObjectWirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#transmit_optimize ObjectWirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap1 ObjectWirelesscontrollerWtpprofile#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap2 ObjectWirelesscontrollerWtpprofile#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap3 ObjectWirelesscontrollerWtpprofile#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap4 ObjectWirelesscontrollerWtpprofile#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap5 ObjectWirelesscontrollerWtpprofile#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap6 ObjectWirelesscontrollerWtpprofile#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap7 ObjectWirelesscontrollerWtpprofile#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap8 ObjectWirelesscontrollerWtpprofile#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap_all ObjectWirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vaps ObjectWirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wids_profile ObjectWirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#zero_wait_dfs ObjectWirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
}

export function objectWirelesscontrollerWtpprofileRadio2ToTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio2OutputReference | ObjectWirelesscontrollerWtpprofileRadio2): any {
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
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
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
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server: cdktf.stringToTerraform(struct!.samServer),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transmitOptimize),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.stringToTerraform(struct!.vaps),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
  }
}


export function objectWirelesscontrollerWtpprofileRadio2ToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio2OutputReference | ObjectWirelesscontrollerWtpprofileRadio2): any {
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
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.powersaveOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samCwpPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    sam_server: {
      value: cdktf.stringToHclTerraform(struct!.samServer),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transmitOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.stringToHclTerraform(struct!.vaps),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerWtpprofileRadio2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileRadio2 | undefined {
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
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
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
    if (this._samServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServer = this._samServer;
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
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileRadio2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
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
      this._channel = undefined;
      this._channelBonding = undefined;
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
      this._samServer = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
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
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
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
      this._channel = value.channel;
      this._channelBonding = value.channelBonding;
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
      this._samServer = value.samServer;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
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
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
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

  // ap_sniffer_bufsize - computed: false, optional: true, required: false
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

  // ap_sniffer_chan - computed: false, optional: true, required: false
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

  // iperf_protocol - computed: false, optional: true, required: false
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

  // iperf_server_port - computed: false, optional: true, required: false
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

  // powersave_optimize - computed: true, optional: true, required: false
  private _powersaveOptimize?: string[]; 
  public get powersaveOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('powersave_optimize'));
  }
  public set powersaveOptimize(value: string[]) {
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

  // sam_bssid - computed: false, optional: true, required: false
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

  // sam_captive_portal - computed: false, optional: true, required: false
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

  // sam_cwp_password - computed: true, optional: true, required: false
  private _samCwpPassword?: string[]; 
  public get samCwpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_cwp_password'));
  }
  public set samCwpPassword(value: string[]) {
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

  // sam_password - computed: true, optional: true, required: false
  private _samPassword?: string[]; 
  public get samPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_password'));
  }
  public set samPassword(value: string[]) {
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

  // sam_private_key_password - computed: true, optional: true, required: false
  private _samPrivateKeyPassword?: string[]; 
  public get samPrivateKeyPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_private_key_password'));
  }
  public set samPrivateKeyPassword(value: string[]) {
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

  // sam_security_type - computed: false, optional: true, required: false
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

  // sam_server - computed: false, optional: true, required: false
  private _samServer?: string; 
  public get samServer() {
    return this.getStringAttribute('sam_server');
  }
  public set samServer(value: string) {
    this._samServer = value;
  }
  public resetSamServer() {
    this._samServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerInput() {
    return this._samServer;
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

  // sam_server_ip - computed: false, optional: true, required: false
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

  // sam_server_type - computed: false, optional: true, required: false
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

  // sam_test - computed: false, optional: true, required: false
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

  // spectrum_analysis - computed: true, optional: true, required: false
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
  private _transmitOptimize?: string[]; 
  public get transmitOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('transmit_optimize'));
  }
  public set transmitOptimize(value: string[]) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
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

  // vaps - computed: false, optional: true, required: false
  private _vaps?: string; 
  public get vaps() {
    return this.getStringAttribute('vaps');
  }
  public set vaps(value: string) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
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
}
export interface ObjectWirelesscontrollerWtpprofileRadio3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#airtime_fairness ObjectWirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#amsdu ObjectWirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_handoff ObjectWirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_addr ObjectWirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_bufsize ObjectWirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_chan ObjectWirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_ctl ObjectWirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_data ObjectWirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#arrp_profile ObjectWirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_high ObjectWirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_level ObjectWirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_low ObjectWirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_target ObjectWirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band ObjectWirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band_5g_type ObjectWirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_admission_control ObjectWirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_capacity ObjectWirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#beacon_interval ObjectWirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color ObjectWirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color_mode ObjectWirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_admission_control ObjectWirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_capacity ObjectWirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel ObjectWirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_bonding ObjectWirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_utilization ObjectWirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#coexistence ObjectWirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#darrp ObjectWirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma ObjectWirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma_sensitivity ObjectWirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtim ObjectWirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frag_threshold ObjectWirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frequency_handoff ObjectWirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_protocol ObjectWirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_server_port ObjectWirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_clients ObjectWirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_distance ObjectWirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mimo_mode ObjectWirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mode ObjectWirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#n80211d ObjectWirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna ObjectWirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna_gain ObjectWirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_level ObjectWirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_mode ObjectWirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_value ObjectWirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#powersave_optimize ObjectWirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#protection_mode ObjectWirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_id ObjectWirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#rts_threshold ObjectWirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_bssid ObjectWirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ca_certificate ObjectWirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_captive_portal ObjectWirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_client_certificate ObjectWirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_failure_string ObjectWirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_match_string ObjectWirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_password ObjectWirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_success_string ObjectWirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_test_url ObjectWirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_username ObjectWirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_eap_method ObjectWirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_password ObjectWirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key ObjectWirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key_password ObjectWirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_report_intv ObjectWirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_security_type ObjectWirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server ObjectWirelesscontrollerWtpprofile#sam_server}
  */
  readonly samServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_fqdn ObjectWirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_ip ObjectWirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_type ObjectWirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ssid ObjectWirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_test ObjectWirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_username ObjectWirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#short_guard_interval ObjectWirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#spectrum_analysis ObjectWirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#transmit_optimize ObjectWirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap1 ObjectWirelesscontrollerWtpprofile#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap2 ObjectWirelesscontrollerWtpprofile#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap3 ObjectWirelesscontrollerWtpprofile#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap4 ObjectWirelesscontrollerWtpprofile#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap5 ObjectWirelesscontrollerWtpprofile#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap6 ObjectWirelesscontrollerWtpprofile#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap7 ObjectWirelesscontrollerWtpprofile#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap8 ObjectWirelesscontrollerWtpprofile#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap_all ObjectWirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vaps ObjectWirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wids_profile ObjectWirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#zero_wait_dfs ObjectWirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
}

export function objectWirelesscontrollerWtpprofileRadio3ToTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio3OutputReference | ObjectWirelesscontrollerWtpprofileRadio3): any {
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
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
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
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server: cdktf.stringToTerraform(struct!.samServer),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transmitOptimize),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.stringToTerraform(struct!.vaps),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
  }
}


export function objectWirelesscontrollerWtpprofileRadio3ToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio3OutputReference | ObjectWirelesscontrollerWtpprofileRadio3): any {
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
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.powersaveOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samCwpPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    sam_server: {
      value: cdktf.stringToHclTerraform(struct!.samServer),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transmitOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.stringToHclTerraform(struct!.vaps),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerWtpprofileRadio3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileRadio3 | undefined {
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
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
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
    if (this._samServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServer = this._samServer;
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
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileRadio3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
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
      this._channel = undefined;
      this._channelBonding = undefined;
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
      this._samServer = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
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
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
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
      this._channel = value.channel;
      this._channelBonding = value.channelBonding;
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
      this._samServer = value.samServer;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
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
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
    }
  }

  // airtime_fairness - computed: false, optional: true, required: false
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

  // amsdu - computed: false, optional: true, required: false
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

  // ap_sniffer_addr - computed: false, optional: true, required: false
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

  // ap_sniffer_bufsize - computed: false, optional: true, required: false
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

  // ap_sniffer_chan - computed: false, optional: true, required: false
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

  // ap_sniffer_ctl - computed: false, optional: true, required: false
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

  // ap_sniffer_data - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_beacon - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_other - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_probe - computed: false, optional: true, required: false
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

  // auto_power_target - computed: false, optional: true, required: false
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

  // band_5g_type - computed: false, optional: true, required: false
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

  // bandwidth_admission_control - computed: false, optional: true, required: false
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

  // bandwidth_capacity - computed: false, optional: true, required: false
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

  // beacon_interval - computed: false, optional: true, required: false
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

  // bss_color_mode - computed: false, optional: true, required: false
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

  // call_admission_control - computed: false, optional: true, required: false
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

  // call_capacity - computed: false, optional: true, required: false
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

  // channel_bonding - computed: false, optional: true, required: false
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

  // channel_utilization - computed: false, optional: true, required: false
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

  // coexistence - computed: false, optional: true, required: false
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

  // darrp - computed: false, optional: true, required: false
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

  // drma - computed: false, optional: true, required: false
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

  // drma_sensitivity - computed: false, optional: true, required: false
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

  // dtim - computed: false, optional: true, required: false
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

  // frag_threshold - computed: false, optional: true, required: false
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

  // iperf_protocol - computed: false, optional: true, required: false
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

  // iperf_server_port - computed: false, optional: true, required: false
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

  // mimo_mode - computed: false, optional: true, required: false
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

  // n80211d - computed: false, optional: true, required: false
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

  // optional_antenna - computed: false, optional: true, required: false
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

  // optional_antenna_gain - computed: false, optional: true, required: false
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

  // power_mode - computed: false, optional: true, required: false
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

  // powersave_optimize - computed: true, optional: true, required: false
  private _powersaveOptimize?: string[]; 
  public get powersaveOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('powersave_optimize'));
  }
  public set powersaveOptimize(value: string[]) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: false, optional: true, required: false
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

  // rts_threshold - computed: false, optional: true, required: false
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

  // sam_bssid - computed: false, optional: true, required: false
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

  // sam_captive_portal - computed: false, optional: true, required: false
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

  // sam_cwp_password - computed: true, optional: true, required: false
  private _samCwpPassword?: string[]; 
  public get samCwpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_cwp_password'));
  }
  public set samCwpPassword(value: string[]) {
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

  // sam_eap_method - computed: false, optional: true, required: false
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

  // sam_password - computed: true, optional: true, required: false
  private _samPassword?: string[]; 
  public get samPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_password'));
  }
  public set samPassword(value: string[]) {
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

  // sam_private_key_password - computed: true, optional: true, required: false
  private _samPrivateKeyPassword?: string[]; 
  public get samPrivateKeyPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_private_key_password'));
  }
  public set samPrivateKeyPassword(value: string[]) {
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

  // sam_security_type - computed: false, optional: true, required: false
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

  // sam_server - computed: false, optional: true, required: false
  private _samServer?: string; 
  public get samServer() {
    return this.getStringAttribute('sam_server');
  }
  public set samServer(value: string) {
    this._samServer = value;
  }
  public resetSamServer() {
    this._samServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerInput() {
    return this._samServer;
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

  // sam_server_ip - computed: false, optional: true, required: false
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

  // sam_server_type - computed: false, optional: true, required: false
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

  // sam_test - computed: false, optional: true, required: false
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

  // short_guard_interval - computed: false, optional: true, required: false
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
  private _transmitOptimize?: string[]; 
  public get transmitOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('transmit_optimize'));
  }
  public set transmitOptimize(value: string[]) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
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

  // vaps - computed: false, optional: true, required: false
  private _vaps?: string; 
  public get vaps() {
    return this.getStringAttribute('vaps');
  }
  public set vaps(value: string) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
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

  // zero_wait_dfs - computed: false, optional: true, required: false
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
}
export interface ObjectWirelesscontrollerWtpprofileRadio4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#airtime_fairness ObjectWirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#amsdu ObjectWirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_handoff ObjectWirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_addr ObjectWirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_bufsize ObjectWirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_chan ObjectWirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_ctl ObjectWirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_data ObjectWirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe ObjectWirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#arrp_profile ObjectWirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_high ObjectWirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_level ObjectWirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_low ObjectWirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#auto_power_target ObjectWirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band ObjectWirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#band_5g_type ObjectWirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_admission_control ObjectWirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bandwidth_capacity ObjectWirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#beacon_interval ObjectWirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color ObjectWirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#bss_color_mode ObjectWirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_admission_control ObjectWirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#call_capacity ObjectWirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel ObjectWirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_bonding ObjectWirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#channel_utilization ObjectWirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#coexistence ObjectWirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#darrp ObjectWirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma ObjectWirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#drma_sensitivity ObjectWirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dtim ObjectWirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frag_threshold ObjectWirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#frequency_handoff ObjectWirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_protocol ObjectWirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#iperf_server_port ObjectWirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_clients ObjectWirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#max_distance ObjectWirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mimo_mode ObjectWirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#mode ObjectWirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#n80211d ObjectWirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna ObjectWirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#optional_antenna_gain ObjectWirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_level ObjectWirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_mode ObjectWirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#power_value ObjectWirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#powersave_optimize ObjectWirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#protection_mode ObjectWirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#radio_id ObjectWirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#rts_threshold ObjectWirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_bssid ObjectWirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ca_certificate ObjectWirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_captive_portal ObjectWirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_client_certificate ObjectWirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_failure_string ObjectWirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_match_string ObjectWirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_password ObjectWirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_success_string ObjectWirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_test_url ObjectWirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_cwp_username ObjectWirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_eap_method ObjectWirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_password ObjectWirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key ObjectWirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_private_key_password ObjectWirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_report_intv ObjectWirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_security_type ObjectWirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server ObjectWirelesscontrollerWtpprofile#sam_server}
  */
  readonly samServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_fqdn ObjectWirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_ip ObjectWirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_server_type ObjectWirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_ssid ObjectWirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_test ObjectWirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#sam_username ObjectWirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#short_guard_interval ObjectWirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#spectrum_analysis ObjectWirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#transmit_optimize ObjectWirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap1 ObjectWirelesscontrollerWtpprofile#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap2 ObjectWirelesscontrollerWtpprofile#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap3 ObjectWirelesscontrollerWtpprofile#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap4 ObjectWirelesscontrollerWtpprofile#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap5 ObjectWirelesscontrollerWtpprofile#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap6 ObjectWirelesscontrollerWtpprofile#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap7 ObjectWirelesscontrollerWtpprofile#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap8 ObjectWirelesscontrollerWtpprofile#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vap_all ObjectWirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#vaps ObjectWirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#wids_profile ObjectWirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#zero_wait_dfs ObjectWirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
}

export function objectWirelesscontrollerWtpprofileRadio4ToTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio4OutputReference | ObjectWirelesscontrollerWtpprofileRadio4): any {
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
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
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
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server: cdktf.stringToTerraform(struct!.samServer),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transmitOptimize),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.stringToTerraform(struct!.vaps),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
  }
}


export function objectWirelesscontrollerWtpprofileRadio4ToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileRadio4OutputReference | ObjectWirelesscontrollerWtpprofileRadio4): any {
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
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.powersaveOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samCwpPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    sam_server: {
      value: cdktf.stringToHclTerraform(struct!.samServer),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transmitOptimize),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.stringToHclTerraform(struct!.vaps),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerWtpprofileRadio4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectWirelesscontrollerWtpprofileRadio4 | undefined {
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
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
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
    if (this._samServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServer = this._samServer;
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
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileRadio4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
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
      this._channel = undefined;
      this._channelBonding = undefined;
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
      this._samServer = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
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
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
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
      this._channel = value.channel;
      this._channelBonding = value.channelBonding;
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
      this._samServer = value.samServer;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
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
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
    }
  }

  // airtime_fairness - computed: false, optional: true, required: false
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

  // amsdu - computed: false, optional: true, required: false
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

  // ap_sniffer_addr - computed: false, optional: true, required: false
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

  // ap_sniffer_bufsize - computed: false, optional: true, required: false
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

  // ap_sniffer_chan - computed: false, optional: true, required: false
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

  // ap_sniffer_ctl - computed: false, optional: true, required: false
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

  // ap_sniffer_data - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_beacon - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_other - computed: false, optional: true, required: false
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

  // ap_sniffer_mgmt_probe - computed: false, optional: true, required: false
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

  // auto_power_target - computed: false, optional: true, required: false
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

  // band_5g_type - computed: false, optional: true, required: false
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

  // bandwidth_admission_control - computed: false, optional: true, required: false
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

  // bandwidth_capacity - computed: false, optional: true, required: false
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

  // beacon_interval - computed: false, optional: true, required: false
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

  // bss_color_mode - computed: false, optional: true, required: false
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

  // call_admission_control - computed: false, optional: true, required: false
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

  // call_capacity - computed: false, optional: true, required: false
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

  // channel_bonding - computed: false, optional: true, required: false
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

  // channel_utilization - computed: false, optional: true, required: false
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

  // coexistence - computed: false, optional: true, required: false
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

  // darrp - computed: false, optional: true, required: false
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

  // drma - computed: false, optional: true, required: false
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

  // drma_sensitivity - computed: false, optional: true, required: false
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

  // dtim - computed: false, optional: true, required: false
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

  // frag_threshold - computed: false, optional: true, required: false
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

  // iperf_protocol - computed: false, optional: true, required: false
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

  // iperf_server_port - computed: false, optional: true, required: false
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

  // mimo_mode - computed: false, optional: true, required: false
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

  // n80211d - computed: false, optional: true, required: false
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

  // optional_antenna - computed: false, optional: true, required: false
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

  // optional_antenna_gain - computed: false, optional: true, required: false
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

  // power_mode - computed: false, optional: true, required: false
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

  // powersave_optimize - computed: true, optional: true, required: false
  private _powersaveOptimize?: string[]; 
  public get powersaveOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('powersave_optimize'));
  }
  public set powersaveOptimize(value: string[]) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: false, optional: true, required: false
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

  // rts_threshold - computed: false, optional: true, required: false
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

  // sam_bssid - computed: false, optional: true, required: false
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

  // sam_captive_portal - computed: false, optional: true, required: false
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

  // sam_cwp_password - computed: true, optional: true, required: false
  private _samCwpPassword?: string[]; 
  public get samCwpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_cwp_password'));
  }
  public set samCwpPassword(value: string[]) {
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

  // sam_eap_method - computed: false, optional: true, required: false
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

  // sam_password - computed: true, optional: true, required: false
  private _samPassword?: string[]; 
  public get samPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_password'));
  }
  public set samPassword(value: string[]) {
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

  // sam_private_key_password - computed: true, optional: true, required: false
  private _samPrivateKeyPassword?: string[]; 
  public get samPrivateKeyPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_private_key_password'));
  }
  public set samPrivateKeyPassword(value: string[]) {
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

  // sam_security_type - computed: false, optional: true, required: false
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

  // sam_server - computed: false, optional: true, required: false
  private _samServer?: string; 
  public get samServer() {
    return this.getStringAttribute('sam_server');
  }
  public set samServer(value: string) {
    this._samServer = value;
  }
  public resetSamServer() {
    this._samServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerInput() {
    return this._samServer;
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

  // sam_server_ip - computed: false, optional: true, required: false
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

  // sam_server_type - computed: false, optional: true, required: false
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

  // sam_test - computed: false, optional: true, required: false
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

  // short_guard_interval - computed: false, optional: true, required: false
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
  private _transmitOptimize?: string[]; 
  public get transmitOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('transmit_optimize'));
  }
  public set transmitOptimize(value: string[]) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
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

  // vaps - computed: false, optional: true, required: false
  private _vaps?: string; 
  public get vaps() {
    return this.getStringAttribute('vaps');
  }
  public set vaps(value: string) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
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

  // zero_wait_dfs - computed: false, optional: true, required: false
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
}
export interface ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#dest_ip ObjectWirelesscontrollerWtpprofile#dest_ip}
  */
  readonly destIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#id ObjectWirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function objectWirelesscontrollerWtpprofileSplitTunnelingAclToTerraform(struct?: ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function objectWirelesscontrollerWtpprofileSplitTunnelingAclToHclTerraform(struct?: ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable): any {
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

export class ObjectWirelesscontrollerWtpprofileSplitTunnelingAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable | undefined) {
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

export class ObjectWirelesscontrollerWtpprofileSplitTunnelingAclList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerWtpprofileSplitTunnelingAclOutputReference {
    return new ObjectWirelesscontrollerWtpprofileSplitTunnelingAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile fortimanager_object_wirelesscontroller_wtpprofile}
*/
export class ObjectWirelesscontrollerWtpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_wtpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWtpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWtpprofile to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWtpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWtpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_wtpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile fortimanager_object_wirelesscontroller_wtpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWtpprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWtpprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_wtpprofile',
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
    this._isFactorySetting = config.isFactorySetting;
    this._adom = config.adom;
    this._allowaccess = config.allowaccess;
    this._apCountry = config.apCountry;
    this._apHandoff = config.apHandoff;
    this._apcfgProfile = config.apcfgProfile;
    this._bleProfile = config.bleProfile;
    this._bonjourProfile = config.bonjourProfile;
    this._comment = config.comment;
    this._consoleLogin = config.consoleLogin;
    this._controlMessageOffload = config.controlMessageOffload;
    this._dtlsInKernel = config.dtlsInKernel;
    this._dtlsPolicy = config.dtlsPolicy;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._energyEfficientEthernet = config.energyEfficientEthernet;
    this._extInfoEnable = config.extInfoEnable;
    this._frequencyHandoff = config.frequencyHandoff;
    this._handoffRoaming = config.handoffRoaming;
    this._handoffRssi = config.handoffRssi;
    this._handoffStaThresh = config.handoffStaThresh;
    this._id = config.id;
    this._indoorOutdoorDeployment = config.indoorOutdoorDeployment;
    this._ipFragmentPreventing = config.ipFragmentPreventing;
    this._ledSchedules = config.ledSchedules;
    this._ledState = config.ledState;
    this._lldp = config.lldp;
    this._loginPasswd = config.loginPasswd;
    this._loginPasswdChange = config.loginPasswdChange;
    this._maxClients = config.maxClients;
    this._name = config.name;
    this._poeMode = config.poeMode;
    this._scopetype = config.scopetype;
    this._snmp = config.snmp;
    this._splitTunnelingAclLocalApSubnet = config.splitTunnelingAclLocalApSubnet;
    this._splitTunnelingAclPath = config.splitTunnelingAclPath;
    this._syslogProfile = config.syslogProfile;
    this._tunMtuDownlink = config.tunMtuDownlink;
    this._tunMtuUplink = config.tunMtuUplink;
    this._unii45GhzBand = config.unii45GhzBand;
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
  private _controlMessageOffload?: string[]; 
  public get controlMessageOffload() {
    return cdktf.Fn.tolist(this.getListAttribute('control_message_offload'));
  }
  public set controlMessageOffload(value: string[]) {
    this._controlMessageOffload = value;
  }
  public resetControlMessageOffload() {
    this._controlMessageOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlMessageOffloadInput() {
    return this._controlMessageOffload;
  }

  // dtls_in_kernel - computed: false, optional: true, required: false
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
  private _dtlsPolicy?: string[]; 
  public get dtlsPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('dtls_policy'));
  }
  public set dtlsPolicy(value: string[]) {
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

  // led_schedules - computed: true, optional: true, required: false
  private _ledSchedules?: string[]; 
  public get ledSchedules() {
    return cdktf.Fn.tolist(this.getListAttribute('led_schedules'));
  }
  public set ledSchedules(value: string[]) {
    this._ledSchedules = value;
  }
  public resetLedSchedules() {
    this._ledSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledSchedulesInput() {
    return this._ledSchedules;
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

  // snmp - computed: false, optional: true, required: false
  private _snmp?: string; 
  public get snmp() {
    return this.getStringAttribute('snmp');
  }
  public set snmp(value: string) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
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

  // wan_port_auth_macsec - computed: false, optional: true, required: false
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

  // wan_port_auth_password - computed: true, optional: true, required: false
  private _wanPortAuthPassword?: string[]; 
  public get wanPortAuthPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('wan_port_auth_password'));
  }
  public set wanPortAuthPassword(value: string[]) {
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

  // deny_mac_list - computed: false, optional: true, required: false
  private _denyMacList = new ObjectWirelesscontrollerWtpprofileDenyMacListStructList(this, "deny_mac_list", false);
  public get denyMacList() {
    return this._denyMacList;
  }
  public putDenyMacList(value: ObjectWirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable) {
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
  private _eslSesDongle = new ObjectWirelesscontrollerWtpprofileEslSesDongleOutputReference(this, "esl_ses_dongle");
  public get eslSesDongle() {
    return this._eslSesDongle;
  }
  public putEslSesDongle(value: ObjectWirelesscontrollerWtpprofileEslSesDongle) {
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
  private _lan = new ObjectWirelesscontrollerWtpprofileLanOutputReference(this, "lan");
  public get lan() {
    return this._lan;
  }
  public putLan(value: ObjectWirelesscontrollerWtpprofileLan) {
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
  private _lbs = new ObjectWirelesscontrollerWtpprofileLbsOutputReference(this, "lbs");
  public get lbs() {
    return this._lbs;
  }
  public putLbs(value: ObjectWirelesscontrollerWtpprofileLbs) {
    this._lbs.internalValue = value;
  }
  public resetLbs() {
    this._lbs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbsInput() {
    return this._lbs.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new ObjectWirelesscontrollerWtpprofilePlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: ObjectWirelesscontrollerWtpprofilePlatform) {
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
  private _radio1 = new ObjectWirelesscontrollerWtpprofileRadio1OutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: ObjectWirelesscontrollerWtpprofileRadio1) {
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
  private _radio2 = new ObjectWirelesscontrollerWtpprofileRadio2OutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: ObjectWirelesscontrollerWtpprofileRadio2) {
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
  private _radio3 = new ObjectWirelesscontrollerWtpprofileRadio3OutputReference(this, "radio_3");
  public get radio3() {
    return this._radio3;
  }
  public putRadio3(value: ObjectWirelesscontrollerWtpprofileRadio3) {
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
  private _radio4 = new ObjectWirelesscontrollerWtpprofileRadio4OutputReference(this, "radio_4");
  public get radio4() {
    return this._radio4;
  }
  public putRadio4(value: ObjectWirelesscontrollerWtpprofileRadio4) {
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
  private _splitTunnelingAcl = new ObjectWirelesscontrollerWtpprofileSplitTunnelingAclList(this, "split_tunneling_acl", false);
  public get splitTunnelingAcl() {
    return this._splitTunnelingAcl;
  }
  public putSplitTunnelingAcl(value: ObjectWirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable) {
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
      _is_factory_setting: cdktf.stringToTerraform(this._isFactorySetting),
      adom: cdktf.stringToTerraform(this._adom),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      ap_country: cdktf.stringToTerraform(this._apCountry),
      ap_handoff: cdktf.stringToTerraform(this._apHandoff),
      apcfg_profile: cdktf.stringToTerraform(this._apcfgProfile),
      ble_profile: cdktf.stringToTerraform(this._bleProfile),
      bonjour_profile: cdktf.stringToTerraform(this._bonjourProfile),
      comment: cdktf.stringToTerraform(this._comment),
      console_login: cdktf.stringToTerraform(this._consoleLogin),
      control_message_offload: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlMessageOffload),
      dtls_in_kernel: cdktf.stringToTerraform(this._dtlsInKernel),
      dtls_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dtlsPolicy),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      energy_efficient_ethernet: cdktf.stringToTerraform(this._energyEfficientEthernet),
      ext_info_enable: cdktf.stringToTerraform(this._extInfoEnable),
      frequency_handoff: cdktf.stringToTerraform(this._frequencyHandoff),
      handoff_roaming: cdktf.stringToTerraform(this._handoffRoaming),
      handoff_rssi: cdktf.numberToTerraform(this._handoffRssi),
      handoff_sta_thresh: cdktf.numberToTerraform(this._handoffStaThresh),
      id: cdktf.stringToTerraform(this._id),
      indoor_outdoor_deployment: cdktf.stringToTerraform(this._indoorOutdoorDeployment),
      ip_fragment_preventing: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipFragmentPreventing),
      led_schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ledSchedules),
      led_state: cdktf.stringToTerraform(this._ledState),
      lldp: cdktf.stringToTerraform(this._lldp),
      login_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginPasswd),
      login_passwd_change: cdktf.stringToTerraform(this._loginPasswdChange),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      name: cdktf.stringToTerraform(this._name),
      poe_mode: cdktf.stringToTerraform(this._poeMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      snmp: cdktf.stringToTerraform(this._snmp),
      split_tunneling_acl_local_ap_subnet: cdktf.stringToTerraform(this._splitTunnelingAclLocalApSubnet),
      split_tunneling_acl_path: cdktf.stringToTerraform(this._splitTunnelingAclPath),
      syslog_profile: cdktf.stringToTerraform(this._syslogProfile),
      tun_mtu_downlink: cdktf.numberToTerraform(this._tunMtuDownlink),
      tun_mtu_uplink: cdktf.numberToTerraform(this._tunMtuUplink),
      unii_4_5ghz_band: cdktf.stringToTerraform(this._unii45GhzBand),
      wan_port_auth: cdktf.stringToTerraform(this._wanPortAuth),
      wan_port_auth_macsec: cdktf.stringToTerraform(this._wanPortAuthMacsec),
      wan_port_auth_methods: cdktf.stringToTerraform(this._wanPortAuthMethods),
      wan_port_auth_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wanPortAuthPassword),
      wan_port_auth_usrname: cdktf.stringToTerraform(this._wanPortAuthUsrname),
      wan_port_mode: cdktf.stringToTerraform(this._wanPortMode),
      deny_mac_list: cdktf.listMapper(objectWirelesscontrollerWtpprofileDenyMacListStructToTerraform, true)(this._denyMacList.internalValue),
      esl_ses_dongle: objectWirelesscontrollerWtpprofileEslSesDongleToTerraform(this._eslSesDongle.internalValue),
      lan: objectWirelesscontrollerWtpprofileLanToTerraform(this._lan.internalValue),
      lbs: objectWirelesscontrollerWtpprofileLbsToTerraform(this._lbs.internalValue),
      platform: objectWirelesscontrollerWtpprofilePlatformToTerraform(this._platform.internalValue),
      radio_1: objectWirelesscontrollerWtpprofileRadio1ToTerraform(this._radio1.internalValue),
      radio_2: objectWirelesscontrollerWtpprofileRadio2ToTerraform(this._radio2.internalValue),
      radio_3: objectWirelesscontrollerWtpprofileRadio3ToTerraform(this._radio3.internalValue),
      radio_4: objectWirelesscontrollerWtpprofileRadio4ToTerraform(this._radio4.internalValue),
      split_tunneling_acl: cdktf.listMapper(objectWirelesscontrollerWtpprofileSplitTunnelingAclToTerraform, true)(this._splitTunnelingAcl.internalValue),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlMessageOffload),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dtls_in_kernel: {
        value: cdktf.stringToHclTerraform(this._dtlsInKernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dtlsPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipFragmentPreventing),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      led_schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ledSchedules),
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
      lldp: {
        value: cdktf.stringToHclTerraform(this._lldp),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp: {
        value: cdktf.stringToHclTerraform(this._snmp),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wanPortAuthPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(objectWirelesscontrollerWtpprofileDenyMacListStructToHclTerraform, true)(this._denyMacList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileDenyMacListStructList",
      },
      esl_ses_dongle: {
        value: objectWirelesscontrollerWtpprofileEslSesDongleToHclTerraform(this._eslSesDongle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileEslSesDongleList",
      },
      lan: {
        value: objectWirelesscontrollerWtpprofileLanToHclTerraform(this._lan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileLanList",
      },
      lbs: {
        value: objectWirelesscontrollerWtpprofileLbsToHclTerraform(this._lbs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileLbsList",
      },
      platform: {
        value: objectWirelesscontrollerWtpprofilePlatformToHclTerraform(this._platform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofilePlatformList",
      },
      radio_1: {
        value: objectWirelesscontrollerWtpprofileRadio1ToHclTerraform(this._radio1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileRadio1List",
      },
      radio_2: {
        value: objectWirelesscontrollerWtpprofileRadio2ToHclTerraform(this._radio2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileRadio2List",
      },
      radio_3: {
        value: objectWirelesscontrollerWtpprofileRadio3ToHclTerraform(this._radio3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileRadio3List",
      },
      radio_4: {
        value: objectWirelesscontrollerWtpprofileRadio4ToHclTerraform(this._radio4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileRadio4List",
      },
      split_tunneling_acl: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerWtpprofileSplitTunnelingAclToHclTerraform, true)(this._splitTunnelingAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerWtpprofileSplitTunnelingAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
