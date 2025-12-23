// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeSpokeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approved learned CIDRs for BGP Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#approved_learned_cidrs EdgeSpoke#approved_learned_cidrs}
  */
  readonly approvedLearnedCidrs?: string[];
  /**
  * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#bgp_hold_time EdgeSpoke#bgp_hold_time}
  */
  readonly bgpHoldTime?: number;
  /**
  * BGP neighbor status polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 1 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#bgp_neighbor_status_polling_time EdgeSpoke#bgp_neighbor_status_polling_time}
  */
  readonly bgpNeighborStatusPollingTime?: number;
  /**
  * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#bgp_polling_time EdgeSpoke#bgp_polling_time}
  */
  readonly bgpPollingTime?: number;
  /**
  * DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#dns_server_ip EdgeSpoke#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enables Edge Active-Standby Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_edge_active_standby EdgeSpoke#enable_edge_active_standby}
  */
  readonly enableEdgeActiveStandby?: boolean | cdktf.IResolvable;
  /**
  * Enables Preemptive Mode for Edge Active-Standby, available only with Active-Standby enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_edge_active_standby_preemptive EdgeSpoke#enable_edge_active_standby_preemptive}
  */
  readonly enableEdgeActiveStandbyPreemptive?: boolean | cdktf.IResolvable;
  /**
  * Enable Edge transitive routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_edge_transitive_routing EdgeSpoke#enable_edge_transitive_routing}
  */
  readonly enableEdgeTransitiveRouting?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_jumbo_frame EdgeSpoke#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_learned_cidrs_approval EdgeSpoke#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Enable management over private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_management_over_private_network EdgeSpoke#enable_management_over_private_network}
  */
  readonly enableManagementOverPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Enable preserve as path when advertising manual summary CIDRs on BGP spoke gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_preserve_as_path EdgeSpoke#enable_preserve_as_path}
  */
  readonly enablePreserveAsPath?: boolean | cdktf.IResolvable;
  /**
  * Edge as a Spoke name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#gw_name EdgeSpoke#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#id EdgeSpoke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The latitude of the Edge as a Spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#latitude EdgeSpoke#latitude}
  */
  readonly latitude?: string;
  /**
  * Local AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#local_as_number EdgeSpoke#local_as_number}
  */
  readonly localAsNumber?: string;
  /**
  * The longitude of the Edge as a Spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#longitude EdgeSpoke#longitude}
  */
  readonly longitude?: string;
  /**
  * Set of management egress gateway IP/prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#management_egress_ip_prefix_list EdgeSpoke#management_egress_ip_prefix_list}
  */
  readonly managementEgressIpPrefixList?: string[];
  /**
  * List of AS numbers to prepend gateway BGP AS_Path field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#prepend_as_path EdgeSpoke#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Ethernet interface RX queue size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#rx_queue_size EdgeSpoke#rx_queue_size}
  */
  readonly rxQueueSize?: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#secondary_dns_server_ip EdgeSpoke#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#site_id EdgeSpoke#site_id}
  */
  readonly siteId: string;
  /**
  * Intended CIDR list to be advertised to external BGP router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#spoke_bgp_manual_advertise_cidrs EdgeSpoke#spoke_bgp_manual_advertise_cidrs}
  */
  readonly spokeBgpManualAdvertiseCidrs?: string[];
  /**
  * The location where the ZTP file will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#ztp_file_download_path EdgeSpoke#ztp_file_download_path}
  */
  readonly ztpFileDownloadPath: string;
  /**
  * ZTP file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#ztp_file_type EdgeSpoke#ztp_file_type}
  */
  readonly ztpFileType: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#interfaces EdgeSpoke#interfaces}
  */
  readonly interfaces: EdgeSpokeInterfaces[] | cdktf.IResolvable;
}
export interface EdgeSpokeInterfaces {
  /**
  * Primary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#dns_server_ip EdgeSpoke#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enable DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#enable_dhcp EdgeSpoke#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#gateway_ip EdgeSpoke#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Interface static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#ip_address EdgeSpoke#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#name EdgeSpoke#name}
  */
  readonly name: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#secondary_dns_server_ip EdgeSpoke#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#type EdgeSpoke#type}
  */
  readonly type: string;
  /**
  * WAN interface public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#wan_public_ip EdgeSpoke#wan_public_ip}
  */
  readonly wanPublicIp?: string;
}

export function edgeSpokeInterfacesToTerraform(struct?: EdgeSpokeInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ip: cdktf.stringToTerraform(struct!.dnsServerIp),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    secondary_dns_server_ip: cdktf.stringToTerraform(struct!.secondaryDnsServerIp),
    type: cdktf.stringToTerraform(struct!.type),
    wan_public_ip: cdktf.stringToTerraform(struct!.wanPublicIp),
  }
}


export function edgeSpokeInterfacesToHclTerraform(struct?: EdgeSpokeInterfaces | cdktf.IResolvable): any {
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
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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

export class EdgeSpokeInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeSpokeInterfaces | cdktf.IResolvable | undefined {
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
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
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

  public set internalValue(value: EdgeSpokeInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServerIp = undefined;
      this._enableDhcp = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
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
      this._ipAddress = value.ipAddress;
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

export class EdgeSpokeInterfacesList extends cdktf.ComplexList {
  public internalValue? : EdgeSpokeInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EdgeSpokeInterfacesOutputReference {
    return new EdgeSpokeInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke aviatrix_edge_spoke}
*/
export class EdgeSpoke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_spoke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeSpoke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeSpoke to import
  * @param importFromId The id of the existing EdgeSpoke that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeSpoke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_spoke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke aviatrix_edge_spoke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeSpokeConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeSpokeConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_spoke',
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
    this._approvedLearnedCidrs = config.approvedLearnedCidrs;
    this._bgpHoldTime = config.bgpHoldTime;
    this._bgpNeighborStatusPollingTime = config.bgpNeighborStatusPollingTime;
    this._bgpPollingTime = config.bgpPollingTime;
    this._dnsServerIp = config.dnsServerIp;
    this._enableEdgeActiveStandby = config.enableEdgeActiveStandby;
    this._enableEdgeActiveStandbyPreemptive = config.enableEdgeActiveStandbyPreemptive;
    this._enableEdgeTransitiveRouting = config.enableEdgeTransitiveRouting;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._enableManagementOverPrivateNetwork = config.enableManagementOverPrivateNetwork;
    this._enablePreserveAsPath = config.enablePreserveAsPath;
    this._gwName = config.gwName;
    this._id = config.id;
    this._latitude = config.latitude;
    this._localAsNumber = config.localAsNumber;
    this._longitude = config.longitude;
    this._managementEgressIpPrefixList = config.managementEgressIpPrefixList;
    this._prependAsPath = config.prependAsPath;
    this._rxQueueSize = config.rxQueueSize;
    this._secondaryDnsServerIp = config.secondaryDnsServerIp;
    this._siteId = config.siteId;
    this._spokeBgpManualAdvertiseCidrs = config.spokeBgpManualAdvertiseCidrs;
    this._ztpFileDownloadPath = config.ztpFileDownloadPath;
    this._ztpFileType = config.ztpFileType;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_learned_cidrs - computed: false, optional: true, required: false
  private _approvedLearnedCidrs?: string[]; 
  public get approvedLearnedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_learned_cidrs'));
  }
  public set approvedLearnedCidrs(value: string[]) {
    this._approvedLearnedCidrs = value;
  }
  public resetApprovedLearnedCidrs() {
    this._approvedLearnedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedLearnedCidrsInput() {
    return this._approvedLearnedCidrs;
  }

  // bgp_hold_time - computed: false, optional: true, required: false
  private _bgpHoldTime?: number; 
  public get bgpHoldTime() {
    return this.getNumberAttribute('bgp_hold_time');
  }
  public set bgpHoldTime(value: number) {
    this._bgpHoldTime = value;
  }
  public resetBgpHoldTime() {
    this._bgpHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpHoldTimeInput() {
    return this._bgpHoldTime;
  }

  // bgp_neighbor_status_polling_time - computed: false, optional: true, required: false
  private _bgpNeighborStatusPollingTime?: number; 
  public get bgpNeighborStatusPollingTime() {
    return this.getNumberAttribute('bgp_neighbor_status_polling_time');
  }
  public set bgpNeighborStatusPollingTime(value: number) {
    this._bgpNeighborStatusPollingTime = value;
  }
  public resetBgpNeighborStatusPollingTime() {
    this._bgpNeighborStatusPollingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborStatusPollingTimeInput() {
    return this._bgpNeighborStatusPollingTime;
  }

  // bgp_polling_time - computed: false, optional: true, required: false
  private _bgpPollingTime?: number; 
  public get bgpPollingTime() {
    return this.getNumberAttribute('bgp_polling_time');
  }
  public set bgpPollingTime(value: number) {
    this._bgpPollingTime = value;
  }
  public resetBgpPollingTime() {
    this._bgpPollingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPollingTimeInput() {
    return this._bgpPollingTime;
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

  // enable_edge_active_standby - computed: false, optional: true, required: false
  private _enableEdgeActiveStandby?: boolean | cdktf.IResolvable; 
  public get enableEdgeActiveStandby() {
    return this.getBooleanAttribute('enable_edge_active_standby');
  }
  public set enableEdgeActiveStandby(value: boolean | cdktf.IResolvable) {
    this._enableEdgeActiveStandby = value;
  }
  public resetEnableEdgeActiveStandby() {
    this._enableEdgeActiveStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeActiveStandbyInput() {
    return this._enableEdgeActiveStandby;
  }

  // enable_edge_active_standby_preemptive - computed: false, optional: true, required: false
  private _enableEdgeActiveStandbyPreemptive?: boolean | cdktf.IResolvable; 
  public get enableEdgeActiveStandbyPreemptive() {
    return this.getBooleanAttribute('enable_edge_active_standby_preemptive');
  }
  public set enableEdgeActiveStandbyPreemptive(value: boolean | cdktf.IResolvable) {
    this._enableEdgeActiveStandbyPreemptive = value;
  }
  public resetEnableEdgeActiveStandbyPreemptive() {
    this._enableEdgeActiveStandbyPreemptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeActiveStandbyPreemptiveInput() {
    return this._enableEdgeActiveStandbyPreemptive;
  }

  // enable_edge_transitive_routing - computed: false, optional: true, required: false
  private _enableEdgeTransitiveRouting?: boolean | cdktf.IResolvable; 
  public get enableEdgeTransitiveRouting() {
    return this.getBooleanAttribute('enable_edge_transitive_routing');
  }
  public set enableEdgeTransitiveRouting(value: boolean | cdktf.IResolvable) {
    this._enableEdgeTransitiveRouting = value;
  }
  public resetEnableEdgeTransitiveRouting() {
    this._enableEdgeTransitiveRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeTransitiveRoutingInput() {
    return this._enableEdgeTransitiveRouting;
  }

  // enable_jumbo_frame - computed: false, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
  }

  // enable_management_over_private_network - computed: false, optional: true, required: false
  private _enableManagementOverPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get enableManagementOverPrivateNetwork() {
    return this.getBooleanAttribute('enable_management_over_private_network');
  }
  public set enableManagementOverPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._enableManagementOverPrivateNetwork = value;
  }
  public resetEnableManagementOverPrivateNetwork() {
    this._enableManagementOverPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagementOverPrivateNetworkInput() {
    return this._enableManagementOverPrivateNetwork;
  }

  // enable_preserve_as_path - computed: false, optional: true, required: false
  private _enablePreserveAsPath?: boolean | cdktf.IResolvable; 
  public get enablePreserveAsPath() {
    return this.getBooleanAttribute('enable_preserve_as_path');
  }
  public set enablePreserveAsPath(value: boolean | cdktf.IResolvable) {
    this._enablePreserveAsPath = value;
  }
  public resetEnablePreserveAsPath() {
    this._enablePreserveAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreserveAsPathInput() {
    return this._enablePreserveAsPath;
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // local_as_number - computed: true, optional: true, required: false
  private _localAsNumber?: string; 
  public get localAsNumber() {
    return this.getStringAttribute('local_as_number');
  }
  public set localAsNumber(value: string) {
    this._localAsNumber = value;
  }
  public resetLocalAsNumber() {
    this._localAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumberInput() {
    return this._localAsNumber;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
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

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }

  // rx_queue_size - computed: false, optional: true, required: false
  private _rxQueueSize?: string; 
  public get rxQueueSize() {
    return this.getStringAttribute('rx_queue_size');
  }
  public set rxQueueSize(value: string) {
    this._rxQueueSize = value;
  }
  public resetRxQueueSize() {
    this._rxQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxQueueSizeInput() {
    return this._rxQueueSize;
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

  // spoke_bgp_manual_advertise_cidrs - computed: false, optional: true, required: false
  private _spokeBgpManualAdvertiseCidrs?: string[]; 
  public get spokeBgpManualAdvertiseCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('spoke_bgp_manual_advertise_cidrs'));
  }
  public set spokeBgpManualAdvertiseCidrs(value: string[]) {
    this._spokeBgpManualAdvertiseCidrs = value;
  }
  public resetSpokeBgpManualAdvertiseCidrs() {
    this._spokeBgpManualAdvertiseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeBgpManualAdvertiseCidrsInput() {
    return this._spokeBgpManualAdvertiseCidrs;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
  private _interfaces = new EdgeSpokeInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EdgeSpokeInterfaces[] | cdktf.IResolvable) {
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
      approved_learned_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedLearnedCidrs),
      bgp_hold_time: cdktf.numberToTerraform(this._bgpHoldTime),
      bgp_neighbor_status_polling_time: cdktf.numberToTerraform(this._bgpNeighborStatusPollingTime),
      bgp_polling_time: cdktf.numberToTerraform(this._bgpPollingTime),
      dns_server_ip: cdktf.stringToTerraform(this._dnsServerIp),
      enable_edge_active_standby: cdktf.booleanToTerraform(this._enableEdgeActiveStandby),
      enable_edge_active_standby_preemptive: cdktf.booleanToTerraform(this._enableEdgeActiveStandbyPreemptive),
      enable_edge_transitive_routing: cdktf.booleanToTerraform(this._enableEdgeTransitiveRouting),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      enable_management_over_private_network: cdktf.booleanToTerraform(this._enableManagementOverPrivateNetwork),
      enable_preserve_as_path: cdktf.booleanToTerraform(this._enablePreserveAsPath),
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.stringToTerraform(this._latitude),
      local_as_number: cdktf.stringToTerraform(this._localAsNumber),
      longitude: cdktf.stringToTerraform(this._longitude),
      management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementEgressIpPrefixList),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      rx_queue_size: cdktf.stringToTerraform(this._rxQueueSize),
      secondary_dns_server_ip: cdktf.stringToTerraform(this._secondaryDnsServerIp),
      site_id: cdktf.stringToTerraform(this._siteId),
      spoke_bgp_manual_advertise_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
      ztp_file_download_path: cdktf.stringToTerraform(this._ztpFileDownloadPath),
      ztp_file_type: cdktf.stringToTerraform(this._ztpFileType),
      interfaces: cdktf.listMapper(edgeSpokeInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approved_learned_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedLearnedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp_hold_time: {
        value: cdktf.numberToHclTerraform(this._bgpHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_neighbor_status_polling_time: {
        value: cdktf.numberToHclTerraform(this._bgpNeighborStatusPollingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_polling_time: {
        value: cdktf.numberToHclTerraform(this._bgpPollingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._dnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_edge_active_standby: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeActiveStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_active_standby_preemptive: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeActiveStandbyPreemptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_transitive_routing: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeTransitiveRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_management_over_private_network: {
        value: cdktf.booleanToHclTerraform(this._enableManagementOverPrivateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_preserve_as_path: {
        value: cdktf.booleanToHclTerraform(this._enablePreserveAsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_number: {
        value: cdktf.stringToHclTerraform(this._localAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
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
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rx_queue_size: {
        value: cdktf.stringToHclTerraform(this._rxQueueSize),
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
      spoke_bgp_manual_advertise_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(edgeSpokeInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeSpokeInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
