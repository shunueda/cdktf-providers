// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemDhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#adom ObjectSystemDhcpServer#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#auto_configuration ObjectSystemDhcpServer#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#auto_managed_status ObjectSystemDhcpServer#auto_managed_status}
  */
  readonly autoManagedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#conflicted_ip_timeout ObjectSystemDhcpServer#conflicted_ip_timeout}
  */
  readonly conflictedIpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_auth ObjectSystemDhcpServer#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_key ObjectSystemDhcpServer#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_keyname ObjectSystemDhcpServer#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_server_ip ObjectSystemDhcpServer#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_ttl ObjectSystemDhcpServer#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_update ObjectSystemDhcpServer#ddns_update}
  */
  readonly ddnsUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_update_override ObjectSystemDhcpServer#ddns_update_override}
  */
  readonly ddnsUpdateOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ddns_zone ObjectSystemDhcpServer#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#default_gateway ObjectSystemDhcpServer#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dhcp_settings_from_fortiipam ObjectSystemDhcpServer#dhcp_settings_from_fortiipam}
  */
  readonly dhcpSettingsFromFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dns_server1 ObjectSystemDhcpServer#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dns_server2 ObjectSystemDhcpServer#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dns_server3 ObjectSystemDhcpServer#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dns_server4 ObjectSystemDhcpServer#dns_server4}
  */
  readonly dnsServer4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dns_service ObjectSystemDhcpServer#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#domain ObjectSystemDhcpServer#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#dynamic_sort_subtable ObjectSystemDhcpServer#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#filename ObjectSystemDhcpServer#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#forticlient_on_net_status ObjectSystemDhcpServer#forticlient_on_net_status}
  */
  readonly forticlientOnNetStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#fosid ObjectSystemDhcpServer#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#id ObjectSystemDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#interface ObjectSystemDhcpServer#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ip_mode ObjectSystemDhcpServer#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ipsec_lease_hold ObjectSystemDhcpServer#ipsec_lease_hold}
  */
  readonly ipsecLeaseHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#lease_time ObjectSystemDhcpServer#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#mac_acl_default_action ObjectSystemDhcpServer#mac_acl_default_action}
  */
  readonly macAclDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#netmask ObjectSystemDhcpServer#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#next_server ObjectSystemDhcpServer#next_server}
  */
  readonly nextServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ntp_server1 ObjectSystemDhcpServer#ntp_server1}
  */
  readonly ntpServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ntp_server2 ObjectSystemDhcpServer#ntp_server2}
  */
  readonly ntpServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ntp_server3 ObjectSystemDhcpServer#ntp_server3}
  */
  readonly ntpServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ntp_service ObjectSystemDhcpServer#ntp_service}
  */
  readonly ntpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#relay_agent ObjectSystemDhcpServer#relay_agent}
  */
  readonly relayAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#scopetype ObjectSystemDhcpServer#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#server_type ObjectSystemDhcpServer#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#shared_subnet ObjectSystemDhcpServer#shared_subnet}
  */
  readonly sharedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#status ObjectSystemDhcpServer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#tftp_server ObjectSystemDhcpServer#tftp_server}
  */
  readonly tftpServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#timezone ObjectSystemDhcpServer#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#timezone_option ObjectSystemDhcpServer#timezone_option}
  */
  readonly timezoneOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_match ObjectSystemDhcpServer#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_string ObjectSystemDhcpServer#vci_string}
  */
  readonly vciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wifi_ac1 ObjectSystemDhcpServer#wifi_ac1}
  */
  readonly wifiAc1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wifi_ac2 ObjectSystemDhcpServer#wifi_ac2}
  */
  readonly wifiAc2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wifi_ac3 ObjectSystemDhcpServer#wifi_ac3}
  */
  readonly wifiAc3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wifi_ac_service ObjectSystemDhcpServer#wifi_ac_service}
  */
  readonly wifiAcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wins_server1 ObjectSystemDhcpServer#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#wins_server2 ObjectSystemDhcpServer#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#exclude_range ObjectSystemDhcpServer#exclude_range}
  */
  readonly excludeRange?: ObjectSystemDhcpServerExcludeRange[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ip_range ObjectSystemDhcpServer#ip_range}
  */
  readonly ipRange?: ObjectSystemDhcpServerIpRange[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#options ObjectSystemDhcpServer#options}
  */
  readonly options?: ObjectSystemDhcpServerOptions[] | cdktf.IResolvable;
  /**
  * reserved_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#reserved_address ObjectSystemDhcpServer#reserved_address}
  */
  readonly reservedAddress?: ObjectSystemDhcpServerReservedAddress[] | cdktf.IResolvable;
}
export interface ObjectSystemDhcpServerExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#end_ip ObjectSystemDhcpServer#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#id ObjectSystemDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#lease_time ObjectSystemDhcpServer#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#start_ip ObjectSystemDhcpServer#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_match ObjectSystemDhcpServer#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_string ObjectSystemDhcpServer#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_match ObjectSystemDhcpServer#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_string ObjectSystemDhcpServer#vci_string}
  */
  readonly vciString?: string[];
}

export function objectSystemDhcpServerExcludeRangeToTerraform(struct?: ObjectSystemDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectSystemDhcpServerExcludeRangeToHclTerraform(struct?: ObjectSystemDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
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
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemDhcpServerExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemDhcpServerExcludeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemDhcpServerExcludeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectSystemDhcpServerExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemDhcpServerExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemDhcpServerExcludeRangeOutputReference {
    return new ObjectSystemDhcpServerExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemDhcpServerIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#end_ip ObjectSystemDhcpServer#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#id ObjectSystemDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#lease_time ObjectSystemDhcpServer#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#start_ip ObjectSystemDhcpServer#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_match ObjectSystemDhcpServer#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_string ObjectSystemDhcpServer#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_match ObjectSystemDhcpServer#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_string ObjectSystemDhcpServer#vci_string}
  */
  readonly vciString?: string[];
}

export function objectSystemDhcpServerIpRangeToTerraform(struct?: ObjectSystemDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectSystemDhcpServerIpRangeToHclTerraform(struct?: ObjectSystemDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
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
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemDhcpServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemDhcpServerIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemDhcpServerIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectSystemDhcpServerIpRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemDhcpServerIpRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemDhcpServerIpRangeOutputReference {
    return new ObjectSystemDhcpServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemDhcpServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#code ObjectSystemDhcpServer#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#id ObjectSystemDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ip ObjectSystemDhcpServer#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#type ObjectSystemDhcpServer#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_match ObjectSystemDhcpServer#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#uci_string ObjectSystemDhcpServer#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#value ObjectSystemDhcpServer#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_match ObjectSystemDhcpServer#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#vci_string ObjectSystemDhcpServer#vci_string}
  */
  readonly vciString?: string[];
}

export function objectSystemDhcpServerOptionsToTerraform(struct?: ObjectSystemDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    value: cdktf.stringToTerraform(struct!.value),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectSystemDhcpServerOptionsToHclTerraform(struct?: ObjectSystemDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemDhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemDhcpServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemDhcpServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._type = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._value = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._id = value.id;
      this._ip = value.ip;
      this._type = value.type;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._value = value.value;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectSystemDhcpServerOptionsList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemDhcpServerOptions[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemDhcpServerOptionsOutputReference {
    return new ObjectSystemDhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemDhcpServerReservedAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#action ObjectSystemDhcpServer#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#circuit_id ObjectSystemDhcpServer#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#circuit_id_type ObjectSystemDhcpServer#circuit_id_type}
  */
  readonly circuitIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#description ObjectSystemDhcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#id ObjectSystemDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#ip ObjectSystemDhcpServer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#mac ObjectSystemDhcpServer#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#remote_id ObjectSystemDhcpServer#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#remote_id_type ObjectSystemDhcpServer#remote_id_type}
  */
  readonly remoteIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#type ObjectSystemDhcpServer#type}
  */
  readonly type?: string;
}

export function objectSystemDhcpServerReservedAddressToTerraform(struct?: ObjectSystemDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    circuit_id_type: cdktf.stringToTerraform(struct!.circuitIdType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_id_type: cdktf.stringToTerraform(struct!.remoteIdType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectSystemDhcpServerReservedAddressToHclTerraform(struct?: ObjectSystemDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdType),
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

export class ObjectSystemDhcpServerReservedAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemDhcpServerReservedAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._circuitIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitIdType = this._circuitIdType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdType = this._remoteIdType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemDhcpServerReservedAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._circuitId = undefined;
      this._circuitIdType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._remoteId = undefined;
      this._remoteIdType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._circuitId = value.circuitId;
      this._circuitIdType = value.circuitIdType;
      this._description = value.description;
      this._id = value.id;
      this._ip = value.ip;
      this._mac = value.mac;
      this._remoteId = value.remoteId;
      this._remoteIdType = value.remoteIdType;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // circuit_id_type - computed: false, optional: true, required: false
  private _circuitIdType?: string; 
  public get circuitIdType() {
    return this.getStringAttribute('circuit_id_type');
  }
  public set circuitIdType(value: string) {
    this._circuitIdType = value;
  }
  public resetCircuitIdType() {
    this._circuitIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdTypeInput() {
    return this._circuitIdType;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_id_type - computed: false, optional: true, required: false
  private _remoteIdType?: string; 
  public get remoteIdType() {
    return this.getStringAttribute('remote_id_type');
  }
  public set remoteIdType(value: string) {
    this._remoteIdType = value;
  }
  public resetRemoteIdType() {
    this._remoteIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdTypeInput() {
    return this._remoteIdType;
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

export class ObjectSystemDhcpServerReservedAddressList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemDhcpServerReservedAddress[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemDhcpServerReservedAddressOutputReference {
    return new ObjectSystemDhcpServerReservedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server fortimanager_object_system_dhcp_server}
*/
export class ObjectSystemDhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemDhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemDhcpServer to import
  * @param importFromId The id of the existing ObjectSystemDhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemDhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_dhcp_server fortimanager_object_system_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemDhcpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemDhcpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_dhcp_server',
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
    this._adom = config.adom;
    this._autoConfiguration = config.autoConfiguration;
    this._autoManagedStatus = config.autoManagedStatus;
    this._conflictedIpTimeout = config.conflictedIpTimeout;
    this._ddnsAuth = config.ddnsAuth;
    this._ddnsKey = config.ddnsKey;
    this._ddnsKeyname = config.ddnsKeyname;
    this._ddnsServerIp = config.ddnsServerIp;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUpdate = config.ddnsUpdate;
    this._ddnsUpdateOverride = config.ddnsUpdateOverride;
    this._ddnsZone = config.ddnsZone;
    this._defaultGateway = config.defaultGateway;
    this._dhcpSettingsFromFortiipam = config.dhcpSettingsFromFortiipam;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._dnsServer3 = config.dnsServer3;
    this._dnsServer4 = config.dnsServer4;
    this._dnsService = config.dnsService;
    this._domain = config.domain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filename = config.filename;
    this._forticlientOnNetStatus = config.forticlientOnNetStatus;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interface = config.interface;
    this._ipMode = config.ipMode;
    this._ipsecLeaseHold = config.ipsecLeaseHold;
    this._leaseTime = config.leaseTime;
    this._macAclDefaultAction = config.macAclDefaultAction;
    this._netmask = config.netmask;
    this._nextServer = config.nextServer;
    this._ntpServer1 = config.ntpServer1;
    this._ntpServer2 = config.ntpServer2;
    this._ntpServer3 = config.ntpServer3;
    this._ntpService = config.ntpService;
    this._relayAgent = config.relayAgent;
    this._scopetype = config.scopetype;
    this._serverType = config.serverType;
    this._sharedSubnet = config.sharedSubnet;
    this._status = config.status;
    this._tftpServer = config.tftpServer;
    this._timezone = config.timezone;
    this._timezoneOption = config.timezoneOption;
    this._vciMatch = config.vciMatch;
    this._vciString = config.vciString;
    this._wifiAc1 = config.wifiAc1;
    this._wifiAc2 = config.wifiAc2;
    this._wifiAc3 = config.wifiAc3;
    this._wifiAcService = config.wifiAcService;
    this._winsServer1 = config.winsServer1;
    this._winsServer2 = config.winsServer2;
    this._excludeRange.internalValue = config.excludeRange;
    this._ipRange.internalValue = config.ipRange;
    this._options.internalValue = config.options;
    this._reservedAddress.internalValue = config.reservedAddress;
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

  // auto_configuration - computed: true, optional: true, required: false
  private _autoConfiguration?: string; 
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }
  public set autoConfiguration(value: string) {
    this._autoConfiguration = value;
  }
  public resetAutoConfiguration() {
    this._autoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationInput() {
    return this._autoConfiguration;
  }

  // auto_managed_status - computed: true, optional: true, required: false
  private _autoManagedStatus?: string; 
  public get autoManagedStatus() {
    return this.getStringAttribute('auto_managed_status');
  }
  public set autoManagedStatus(value: string) {
    this._autoManagedStatus = value;
  }
  public resetAutoManagedStatus() {
    this._autoManagedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoManagedStatusInput() {
    return this._autoManagedStatus;
  }

  // conflicted_ip_timeout - computed: true, optional: true, required: false
  private _conflictedIpTimeout?: number; 
  public get conflictedIpTimeout() {
    return this.getNumberAttribute('conflicted_ip_timeout');
  }
  public set conflictedIpTimeout(value: number) {
    this._conflictedIpTimeout = value;
  }
  public resetConflictedIpTimeout() {
    this._conflictedIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictedIpTimeoutInput() {
    return this._conflictedIpTimeout;
  }

  // ddns_auth - computed: true, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_server_ip - computed: true, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_update - computed: true, optional: true, required: false
  private _ddnsUpdate?: string; 
  public get ddnsUpdate() {
    return this.getStringAttribute('ddns_update');
  }
  public set ddnsUpdate(value: string) {
    this._ddnsUpdate = value;
  }
  public resetDdnsUpdate() {
    this._ddnsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateInput() {
    return this._ddnsUpdate;
  }

  // ddns_update_override - computed: true, optional: true, required: false
  private _ddnsUpdateOverride?: string; 
  public get ddnsUpdateOverride() {
    return this.getStringAttribute('ddns_update_override');
  }
  public set ddnsUpdateOverride(value: string) {
    this._ddnsUpdateOverride = value;
  }
  public resetDdnsUpdateOverride() {
    this._ddnsUpdateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOverrideInput() {
    return this._ddnsUpdateOverride;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dhcp_settings_from_fortiipam - computed: true, optional: true, required: false
  private _dhcpSettingsFromFortiipam?: string; 
  public get dhcpSettingsFromFortiipam() {
    return this.getStringAttribute('dhcp_settings_from_fortiipam');
  }
  public set dhcpSettingsFromFortiipam(value: string) {
    this._dhcpSettingsFromFortiipam = value;
  }
  public resetDhcpSettingsFromFortiipam() {
    this._dhcpSettingsFromFortiipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSettingsFromFortiipamInput() {
    return this._dhcpSettingsFromFortiipam;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_server3 - computed: true, optional: true, required: false
  private _dnsServer3?: string; 
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }
  public set dnsServer3(value: string) {
    this._dnsServer3 = value;
  }
  public resetDnsServer3() {
    this._dnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer3Input() {
    return this._dnsServer3;
  }

  // dns_server4 - computed: true, optional: true, required: false
  private _dnsServer4?: string; 
  public get dnsServer4() {
    return this.getStringAttribute('dns_server4');
  }
  public set dnsServer4(value: string) {
    this._dnsServer4 = value;
  }
  public resetDnsServer4() {
    this._dnsServer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer4Input() {
    return this._dnsServer4;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // forticlient_on_net_status - computed: true, optional: true, required: false
  private _forticlientOnNetStatus?: string; 
  public get forticlientOnNetStatus() {
    return this.getStringAttribute('forticlient_on_net_status');
  }
  public set forticlientOnNetStatus(value: string) {
    this._forticlientOnNetStatus = value;
  }
  public resetForticlientOnNetStatus() {
    this._forticlientOnNetStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOnNetStatusInput() {
    return this._forticlientOnNetStatus;
  }

  // fosid - computed: false, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_mode - computed: false, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // ipsec_lease_hold - computed: false, optional: true, required: false
  private _ipsecLeaseHold?: number; 
  public get ipsecLeaseHold() {
    return this.getNumberAttribute('ipsec_lease_hold');
  }
  public set ipsecLeaseHold(value: number) {
    this._ipsecLeaseHold = value;
  }
  public resetIpsecLeaseHold() {
    this._ipsecLeaseHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLeaseHoldInput() {
    return this._ipsecLeaseHold;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_acl_default_action - computed: true, optional: true, required: false
  private _macAclDefaultAction?: string; 
  public get macAclDefaultAction() {
    return this.getStringAttribute('mac_acl_default_action');
  }
  public set macAclDefaultAction(value: string) {
    this._macAclDefaultAction = value;
  }
  public resetMacAclDefaultAction() {
    this._macAclDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAclDefaultActionInput() {
    return this._macAclDefaultAction;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_server - computed: true, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // ntp_server1 - computed: true, optional: true, required: false
  private _ntpServer1?: string; 
  public get ntpServer1() {
    return this.getStringAttribute('ntp_server1');
  }
  public set ntpServer1(value: string) {
    this._ntpServer1 = value;
  }
  public resetNtpServer1() {
    this._ntpServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1Input() {
    return this._ntpServer1;
  }

  // ntp_server2 - computed: true, optional: true, required: false
  private _ntpServer2?: string; 
  public get ntpServer2() {
    return this.getStringAttribute('ntp_server2');
  }
  public set ntpServer2(value: string) {
    this._ntpServer2 = value;
  }
  public resetNtpServer2() {
    this._ntpServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2Input() {
    return this._ntpServer2;
  }

  // ntp_server3 - computed: true, optional: true, required: false
  private _ntpServer3?: string; 
  public get ntpServer3() {
    return this.getStringAttribute('ntp_server3');
  }
  public set ntpServer3(value: string) {
    this._ntpServer3 = value;
  }
  public resetNtpServer3() {
    this._ntpServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer3Input() {
    return this._ntpServer3;
  }

  // ntp_service - computed: true, optional: true, required: false
  private _ntpService?: string; 
  public get ntpService() {
    return this.getStringAttribute('ntp_service');
  }
  public set ntpService(value: string) {
    this._ntpService = value;
  }
  public resetNtpService() {
    this._ntpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServiceInput() {
    return this._ntpService;
  }

  // relay_agent - computed: true, optional: true, required: false
  private _relayAgent?: string; 
  public get relayAgent() {
    return this.getStringAttribute('relay_agent');
  }
  public set relayAgent(value: string) {
    this._relayAgent = value;
  }
  public resetRelayAgent() {
    this._relayAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInput() {
    return this._relayAgent;
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

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // shared_subnet - computed: true, optional: true, required: false
  private _sharedSubnet?: string; 
  public get sharedSubnet() {
    return this.getStringAttribute('shared_subnet');
  }
  public set sharedSubnet(value: string) {
    this._sharedSubnet = value;
  }
  public resetSharedSubnet() {
    this._sharedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSubnetInput() {
    return this._sharedSubnet;
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

  // tftp_server - computed: true, optional: true, required: false
  private _tftpServer?: string[]; 
  public get tftpServer() {
    return cdktf.Fn.tolist(this.getListAttribute('tftp_server'));
  }
  public set tftpServer(value: string[]) {
    this._tftpServer = value;
  }
  public resetTftpServer() {
    this._tftpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServerInput() {
    return this._tftpServer;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timezone_option - computed: true, optional: true, required: false
  private _timezoneOption?: string; 
  public get timezoneOption() {
    return this.getStringAttribute('timezone_option');
  }
  public set timezoneOption(value: string) {
    this._timezoneOption = value;
  }
  public resetTimezoneOption() {
    this._timezoneOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOptionInput() {
    return this._timezoneOption;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }

  // wifi_ac1 - computed: true, optional: true, required: false
  private _wifiAc1?: string; 
  public get wifiAc1() {
    return this.getStringAttribute('wifi_ac1');
  }
  public set wifiAc1(value: string) {
    this._wifiAc1 = value;
  }
  public resetWifiAc1() {
    this._wifiAc1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc1Input() {
    return this._wifiAc1;
  }

  // wifi_ac2 - computed: true, optional: true, required: false
  private _wifiAc2?: string; 
  public get wifiAc2() {
    return this.getStringAttribute('wifi_ac2');
  }
  public set wifiAc2(value: string) {
    this._wifiAc2 = value;
  }
  public resetWifiAc2() {
    this._wifiAc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc2Input() {
    return this._wifiAc2;
  }

  // wifi_ac3 - computed: true, optional: true, required: false
  private _wifiAc3?: string; 
  public get wifiAc3() {
    return this.getStringAttribute('wifi_ac3');
  }
  public set wifiAc3(value: string) {
    this._wifiAc3 = value;
  }
  public resetWifiAc3() {
    this._wifiAc3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc3Input() {
    return this._wifiAc3;
  }

  // wifi_ac_service - computed: true, optional: true, required: false
  private _wifiAcService?: string; 
  public get wifiAcService() {
    return this.getStringAttribute('wifi_ac_service');
  }
  public set wifiAcService(value: string) {
    this._wifiAcService = value;
  }
  public resetWifiAcService() {
    this._wifiAcService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAcServiceInput() {
    return this._wifiAcService;
  }

  // wins_server1 - computed: true, optional: true, required: false
  private _winsServer1?: string; 
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }
  public set winsServer1(value: string) {
    this._winsServer1 = value;
  }
  public resetWinsServer1() {
    this._winsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer1Input() {
    return this._winsServer1;
  }

  // wins_server2 - computed: true, optional: true, required: false
  private _winsServer2?: string; 
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }
  public set winsServer2(value: string) {
    this._winsServer2 = value;
  }
  public resetWinsServer2() {
    this._winsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer2Input() {
    return this._winsServer2;
  }

  // exclude_range - computed: false, optional: true, required: false
  private _excludeRange = new ObjectSystemDhcpServerExcludeRangeList(this, "exclude_range", false);
  public get excludeRange() {
    return this._excludeRange;
  }
  public putExcludeRange(value: ObjectSystemDhcpServerExcludeRange[] | cdktf.IResolvable) {
    this._excludeRange.internalValue = value;
  }
  public resetExcludeRange() {
    this._excludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRangeInput() {
    return this._excludeRange.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new ObjectSystemDhcpServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: ObjectSystemDhcpServerIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ObjectSystemDhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: ObjectSystemDhcpServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // reserved_address - computed: false, optional: true, required: false
  private _reservedAddress = new ObjectSystemDhcpServerReservedAddressList(this, "reserved_address", false);
  public get reservedAddress() {
    return this._reservedAddress;
  }
  public putReservedAddress(value: ObjectSystemDhcpServerReservedAddress[] | cdktf.IResolvable) {
    this._reservedAddress.internalValue = value;
  }
  public resetReservedAddress() {
    this._reservedAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedAddressInput() {
    return this._reservedAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      auto_configuration: cdktf.stringToTerraform(this._autoConfiguration),
      auto_managed_status: cdktf.stringToTerraform(this._autoManagedStatus),
      conflicted_ip_timeout: cdktf.numberToTerraform(this._conflictedIpTimeout),
      ddns_auth: cdktf.stringToTerraform(this._ddnsAuth),
      ddns_key: cdktf.stringToTerraform(this._ddnsKey),
      ddns_keyname: cdktf.stringToTerraform(this._ddnsKeyname),
      ddns_server_ip: cdktf.stringToTerraform(this._ddnsServerIp),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_update: cdktf.stringToTerraform(this._ddnsUpdate),
      ddns_update_override: cdktf.stringToTerraform(this._ddnsUpdateOverride),
      ddns_zone: cdktf.stringToTerraform(this._ddnsZone),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      dhcp_settings_from_fortiipam: cdktf.stringToTerraform(this._dhcpSettingsFromFortiipam),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      dns_server3: cdktf.stringToTerraform(this._dnsServer3),
      dns_server4: cdktf.stringToTerraform(this._dnsServer4),
      dns_service: cdktf.stringToTerraform(this._dnsService),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filename: cdktf.stringToTerraform(this._filename),
      forticlient_on_net_status: cdktf.stringToTerraform(this._forticlientOnNetStatus),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      ipsec_lease_hold: cdktf.numberToTerraform(this._ipsecLeaseHold),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      mac_acl_default_action: cdktf.stringToTerraform(this._macAclDefaultAction),
      netmask: cdktf.stringToTerraform(this._netmask),
      next_server: cdktf.stringToTerraform(this._nextServer),
      ntp_server1: cdktf.stringToTerraform(this._ntpServer1),
      ntp_server2: cdktf.stringToTerraform(this._ntpServer2),
      ntp_server3: cdktf.stringToTerraform(this._ntpServer3),
      ntp_service: cdktf.stringToTerraform(this._ntpService),
      relay_agent: cdktf.stringToTerraform(this._relayAgent),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_type: cdktf.stringToTerraform(this._serverType),
      shared_subnet: cdktf.stringToTerraform(this._sharedSubnet),
      status: cdktf.stringToTerraform(this._status),
      tftp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tftpServer),
      timezone: cdktf.stringToTerraform(this._timezone),
      timezone_option: cdktf.stringToTerraform(this._timezoneOption),
      vci_match: cdktf.stringToTerraform(this._vciMatch),
      vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vciString),
      wifi_ac1: cdktf.stringToTerraform(this._wifiAc1),
      wifi_ac2: cdktf.stringToTerraform(this._wifiAc2),
      wifi_ac3: cdktf.stringToTerraform(this._wifiAc3),
      wifi_ac_service: cdktf.stringToTerraform(this._wifiAcService),
      wins_server1: cdktf.stringToTerraform(this._winsServer1),
      wins_server2: cdktf.stringToTerraform(this._winsServer2),
      exclude_range: cdktf.listMapper(objectSystemDhcpServerExcludeRangeToTerraform, true)(this._excludeRange.internalValue),
      ip_range: cdktf.listMapper(objectSystemDhcpServerIpRangeToTerraform, true)(this._ipRange.internalValue),
      options: cdktf.listMapper(objectSystemDhcpServerOptionsToTerraform, true)(this._options.internalValue),
      reserved_address: cdktf.listMapper(objectSystemDhcpServerReservedAddressToTerraform, true)(this._reservedAddress.internalValue),
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
      auto_configuration: {
        value: cdktf.stringToHclTerraform(this._autoConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_managed_status: {
        value: cdktf.stringToHclTerraform(this._autoManagedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conflicted_ip_timeout: {
        value: cdktf.numberToHclTerraform(this._conflictedIpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_auth: {
        value: cdktf.stringToHclTerraform(this._ddnsAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_key: {
        value: cdktf.stringToHclTerraform(this._ddnsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_keyname: {
        value: cdktf.stringToHclTerraform(this._ddnsKeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_ip: {
        value: cdktf.stringToHclTerraform(this._ddnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_update: {
        value: cdktf.stringToHclTerraform(this._ddnsUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_update_override: {
        value: cdktf.stringToHclTerraform(this._ddnsUpdateOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_zone: {
        value: cdktf.stringToHclTerraform(this._ddnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_settings_from_fortiipam: {
        value: cdktf.stringToHclTerraform(this._dhcpSettingsFromFortiipam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server3: {
        value: cdktf.stringToHclTerraform(this._dnsServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server4: {
        value: cdktf.stringToHclTerraform(this._dnsServer4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_service: {
        value: cdktf.stringToHclTerraform(this._dnsService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_on_net_status: {
        value: cdktf.stringToHclTerraform(this._forticlientOnNetStatus),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_lease_hold: {
        value: cdktf.numberToHclTerraform(this._ipsecLeaseHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_acl_default_action: {
        value: cdktf.stringToHclTerraform(this._macAclDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_server: {
        value: cdktf.stringToHclTerraform(this._nextServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server1: {
        value: cdktf.stringToHclTerraform(this._ntpServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server2: {
        value: cdktf.stringToHclTerraform(this._ntpServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server3: {
        value: cdktf.stringToHclTerraform(this._ntpServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_service: {
        value: cdktf.stringToHclTerraform(this._ntpService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay_agent: {
        value: cdktf.stringToHclTerraform(this._relayAgent),
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
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_subnet: {
        value: cdktf.stringToHclTerraform(this._sharedSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tftp_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tftpServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone_option: {
        value: cdktf.stringToHclTerraform(this._timezoneOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vci_match: {
        value: cdktf.stringToHclTerraform(this._vciMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vci_string: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vciString),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wifi_ac1: {
        value: cdktf.stringToHclTerraform(this._wifiAc1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_ac2: {
        value: cdktf.stringToHclTerraform(this._wifiAc2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_ac3: {
        value: cdktf.stringToHclTerraform(this._wifiAc3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_ac_service: {
        value: cdktf.stringToHclTerraform(this._wifiAcService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server1: {
        value: cdktf.stringToHclTerraform(this._winsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server2: {
        value: cdktf.stringToHclTerraform(this._winsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_range: {
        value: cdktf.listMapperHcl(objectSystemDhcpServerExcludeRangeToHclTerraform, true)(this._excludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemDhcpServerExcludeRangeList",
      },
      ip_range: {
        value: cdktf.listMapperHcl(objectSystemDhcpServerIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemDhcpServerIpRangeList",
      },
      options: {
        value: cdktf.listMapperHcl(objectSystemDhcpServerOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemDhcpServerOptionsList",
      },
      reserved_address: {
        value: cdktf.listMapperHcl(objectSystemDhcpServerReservedAddressToHclTerraform, true)(this._reservedAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemDhcpServerReservedAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
