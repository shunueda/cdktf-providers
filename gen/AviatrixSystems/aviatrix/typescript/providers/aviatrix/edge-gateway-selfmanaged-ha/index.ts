// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeGatewaySelfmanagedHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#dns_server_ip EdgeGatewaySelfmanagedHa#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#id EdgeGatewaySelfmanagedHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of management egress gateway IP/prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#management_egress_ip_prefix_list EdgeGatewaySelfmanagedHa#management_egress_ip_prefix_list}
  */
  readonly managementEgressIpPrefixList?: string[];
  /**
  * Primary gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#primary_gw_name EdgeGatewaySelfmanagedHa#primary_gw_name}
  */
  readonly primaryGwName: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#secondary_dns_server_ip EdgeGatewaySelfmanagedHa#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#site_id EdgeGatewaySelfmanagedHa#site_id}
  */
  readonly siteId: string;
  /**
  * The location where the ZTP file will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#ztp_file_download_path EdgeGatewaySelfmanagedHa#ztp_file_download_path}
  */
  readonly ztpFileDownloadPath: string;
  /**
  * ZTP file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#ztp_file_type EdgeGatewaySelfmanagedHa#ztp_file_type}
  */
  readonly ztpFileType: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#interfaces EdgeGatewaySelfmanagedHa#interfaces}
  */
  readonly interfaces: EdgeGatewaySelfmanagedHaInterfaces[] | cdktf.IResolvable;
}
export interface EdgeGatewaySelfmanagedHaInterfaces {
  /**
  * Primary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#dns_server_ip EdgeGatewaySelfmanagedHa#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enable DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#enable_dhcp EdgeGatewaySelfmanagedHa#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#gateway_ip EdgeGatewaySelfmanagedHa#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Gateway IPv6 IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#gateway_ipv6 EdgeGatewaySelfmanagedHa#gateway_ipv6}
  */
  readonly gatewayIpv6?: string;
  /**
  * Interface static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#ip_address EdgeGatewaySelfmanagedHa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Interface static IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#ipv6_address EdgeGatewaySelfmanagedHa#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#name EdgeGatewaySelfmanagedHa#name}
  */
  readonly name: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#secondary_dns_server_ip EdgeGatewaySelfmanagedHa#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#type EdgeGatewaySelfmanagedHa#type}
  */
  readonly type: string;
  /**
  * WAN interface public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#wan_public_ip EdgeGatewaySelfmanagedHa#wan_public_ip}
  */
  readonly wanPublicIp?: string;
}

export function edgeGatewaySelfmanagedHaInterfacesToTerraform(struct?: EdgeGatewaySelfmanagedHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ip: cdktf.stringToTerraform(struct!.dnsServerIp),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    gateway_ipv6: cdktf.stringToTerraform(struct!.gatewayIpv6),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
    secondary_dns_server_ip: cdktf.stringToTerraform(struct!.secondaryDnsServerIp),
    type: cdktf.stringToTerraform(struct!.type),
    wan_public_ip: cdktf.stringToTerraform(struct!.wanPublicIp),
  }
}


export function edgeGatewaySelfmanagedHaInterfacesToHclTerraform(struct?: EdgeGatewaySelfmanagedHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
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
    secondary_dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDnsServerIp),
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
    wan_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.wanPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeGatewaySelfmanagedHaInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeGatewaySelfmanagedHaInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIp = this._dnsServerIp;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._gatewayIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpv6 = this._gatewayIpv6;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondaryDnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDnsServerIp = this._secondaryDnsServerIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wanPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanPublicIp = this._wanPublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeGatewaySelfmanagedHaInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServerIp = undefined;
      this._enableDhcp = undefined;
      this._gatewayIp = undefined;
      this._gatewayIpv6 = undefined;
      this._ipAddress = undefined;
      this._ipv6Address = undefined;
      this._name = undefined;
      this._secondaryDnsServerIp = undefined;
      this._type = undefined;
      this._wanPublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServerIp = value.dnsServerIp;
      this._enableDhcp = value.enableDhcp;
      this._gatewayIp = value.gatewayIp;
      this._gatewayIpv6 = value.gatewayIpv6;
      this._ipAddress = value.ipAddress;
      this._ipv6Address = value.ipv6Address;
      this._name = value.name;
      this._secondaryDnsServerIp = value.secondaryDnsServerIp;
      this._type = value.type;
      this._wanPublicIp = value.wanPublicIp;
    }
  }

  // dns_server_ip - computed: false, optional: true, required: false
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  public resetDnsServerIp() {
    this._dnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // gateway_ipv6 - computed: false, optional: true, required: false
  private _gatewayIpv6?: string; 
  public get gatewayIpv6() {
    return this.getStringAttribute('gateway_ipv6');
  }
  public set gatewayIpv6(value: string) {
    this._gatewayIpv6 = value;
  }
  public resetGatewayIpv6() {
    this._gatewayIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpv6Input() {
    return this._gatewayIpv6;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secondary_dns_server_ip - computed: false, optional: true, required: false
  private _secondaryDnsServerIp?: string; 
  public get secondaryDnsServerIp() {
    return this.getStringAttribute('secondary_dns_server_ip');
  }
  public set secondaryDnsServerIp(value: string) {
    this._secondaryDnsServerIp = value;
  }
  public resetSecondaryDnsServerIp() {
    this._secondaryDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsServerIpInput() {
    return this._secondaryDnsServerIp;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wan_public_ip - computed: false, optional: true, required: false
  private _wanPublicIp?: string; 
  public get wanPublicIp() {
    return this.getStringAttribute('wan_public_ip');
  }
  public set wanPublicIp(value: string) {
    this._wanPublicIp = value;
  }
  public resetWanPublicIp() {
    this._wanPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPublicIpInput() {
    return this._wanPublicIp;
  }
}

export class EdgeGatewaySelfmanagedHaInterfacesList extends cdktf.ComplexList {
  public internalValue? : EdgeGatewaySelfmanagedHaInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EdgeGatewaySelfmanagedHaInterfacesOutputReference {
    return new EdgeGatewaySelfmanagedHaInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha aviatrix_edge_gateway_selfmanaged_ha}
*/
export class EdgeGatewaySelfmanagedHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_gateway_selfmanaged_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeGatewaySelfmanagedHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeGatewaySelfmanagedHa to import
  * @param importFromId The id of the existing EdgeGatewaySelfmanagedHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeGatewaySelfmanagedHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_gateway_selfmanaged_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_gateway_selfmanaged_ha aviatrix_edge_gateway_selfmanaged_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeGatewaySelfmanagedHaConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeGatewaySelfmanagedHaConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_gateway_selfmanaged_ha',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsServerIp = config.dnsServerIp;
    this._id = config.id;
    this._managementEgressIpPrefixList = config.managementEgressIpPrefixList;
    this._primaryGwName = config.primaryGwName;
    this._secondaryDnsServerIp = config.secondaryDnsServerIp;
    this._siteId = config.siteId;
    this._ztpFileDownloadPath = config.ztpFileDownloadPath;
    this._ztpFileType = config.ztpFileType;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_server_ip - computed: false, optional: true, required: false
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  public resetDnsServerIp() {
    this._dnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
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

  // management_egress_ip_prefix_list - computed: false, optional: true, required: false
  private _managementEgressIpPrefixList?: string[]; 
  public get managementEgressIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('management_egress_ip_prefix_list'));
  }
  public set managementEgressIpPrefixList(value: string[]) {
    this._managementEgressIpPrefixList = value;
  }
  public resetManagementEgressIpPrefixList() {
    this._managementEgressIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEgressIpPrefixListInput() {
    return this._managementEgressIpPrefixList;
  }

  // primary_gw_name - computed: false, optional: false, required: true
  private _primaryGwName?: string; 
  public get primaryGwName() {
    return this.getStringAttribute('primary_gw_name');
  }
  public set primaryGwName(value: string) {
    this._primaryGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGwNameInput() {
    return this._primaryGwName;
  }

  // secondary_dns_server_ip - computed: false, optional: true, required: false
  private _secondaryDnsServerIp?: string; 
  public get secondaryDnsServerIp() {
    return this.getStringAttribute('secondary_dns_server_ip');
  }
  public set secondaryDnsServerIp(value: string) {
    this._secondaryDnsServerIp = value;
  }
  public resetSecondaryDnsServerIp() {
    this._secondaryDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsServerIpInput() {
    return this._secondaryDnsServerIp;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // ztp_file_download_path - computed: false, optional: false, required: true
  private _ztpFileDownloadPath?: string; 
  public get ztpFileDownloadPath() {
    return this.getStringAttribute('ztp_file_download_path');
  }
  public set ztpFileDownloadPath(value: string) {
    this._ztpFileDownloadPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ztpFileDownloadPathInput() {
    return this._ztpFileDownloadPath;
  }

  // ztp_file_type - computed: false, optional: false, required: true
  private _ztpFileType?: string; 
  public get ztpFileType() {
    return this.getStringAttribute('ztp_file_type');
  }
  public set ztpFileType(value: string) {
    this._ztpFileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ztpFileTypeInput() {
    return this._ztpFileType;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new EdgeGatewaySelfmanagedHaInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EdgeGatewaySelfmanagedHaInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_server_ip: cdktf.stringToTerraform(this._dnsServerIp),
      id: cdktf.stringToTerraform(this._id),
      management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementEgressIpPrefixList),
      primary_gw_name: cdktf.stringToTerraform(this._primaryGwName),
      secondary_dns_server_ip: cdktf.stringToTerraform(this._secondaryDnsServerIp),
      site_id: cdktf.stringToTerraform(this._siteId),
      ztp_file_download_path: cdktf.stringToTerraform(this._ztpFileDownloadPath),
      ztp_file_type: cdktf.stringToTerraform(this._ztpFileType),
      interfaces: cdktf.listMapper(edgeGatewaySelfmanagedHaInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._dnsServerIp),
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
      management_egress_ip_prefix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementEgressIpPrefixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      primary_gw_name: {
        value: cdktf.stringToHclTerraform(this._primaryGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztp_file_download_path: {
        value: cdktf.stringToHclTerraform(this._ztpFileDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztp_file_type: {
        value: cdktf.stringToHclTerraform(this._ztpFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(edgeGatewaySelfmanagedHaInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeGatewaySelfmanagedHaInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
