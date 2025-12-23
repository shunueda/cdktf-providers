// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeZededaHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compute node UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#compute_node_uuid EdgeZededaHa#compute_node_uuid}
  */
  readonly computeNodeUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#id EdgeZededaHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of management egress gateway IP/prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#management_egress_ip_prefix_list EdgeZededaHa#management_egress_ip_prefix_list}
  */
  readonly managementEgressIpPrefixList?: string[];
  /**
  * Primary gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#primary_gw_name EdgeZededaHa#primary_gw_name}
  */
  readonly primaryGwName: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#interfaces EdgeZededaHa#interfaces}
  */
  readonly interfaces: EdgeZededaHaInterfaces[] | cdktf.IResolvable;
}
export interface EdgeZededaHaInterfaces {
  /**
  * The rate of data can be moved through the interface, requires an integer value. Unit is in Mb/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#bandwidth EdgeZededaHa#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Primary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#dns_server_ip EdgeZededaHa#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enable DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#enable_dhcp EdgeZededaHa#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#gateway_ip EdgeZededaHa#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Interface static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#ip_address EdgeZededaHa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#name EdgeZededaHa#name}
  */
  readonly name: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#secondary_dns_server_ip EdgeZededaHa#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#tag EdgeZededaHa#tag}
  */
  readonly tag?: string;
  /**
  * Interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#type EdgeZededaHa#type}
  */
  readonly type: string;
  /**
  * WAN interface public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#wan_public_ip EdgeZededaHa#wan_public_ip}
  */
  readonly wanPublicIp?: string;
}

export function edgeZededaHaInterfacesToTerraform(struct?: EdgeZededaHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    dns_server_ip: cdktf.stringToTerraform(struct!.dnsServerIp),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    secondary_dns_server_ip: cdktf.stringToTerraform(struct!.secondaryDnsServerIp),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    wan_public_ip: cdktf.stringToTerraform(struct!.wanPublicIp),
  }
}


export function edgeZededaHaInterfacesToHclTerraform(struct?: EdgeZededaHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class EdgeZededaHaInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeZededaHaInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
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
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
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

  public set internalValue(value: EdgeZededaHaInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._dnsServerIp = undefined;
      this._enableDhcp = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._secondaryDnsServerIp = undefined;
      this._tag = undefined;
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
      this._bandwidth = value.bandwidth;
      this._dnsServerIp = value.dnsServerIp;
      this._enableDhcp = value.enableDhcp;
      this._gatewayIp = value.gatewayIp;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._secondaryDnsServerIp = value.secondaryDnsServerIp;
      this._tag = value.tag;
      this._type = value.type;
      this._wanPublicIp = value.wanPublicIp;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

export class EdgeZededaHaInterfacesList extends cdktf.ComplexList {
  public internalValue? : EdgeZededaHaInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EdgeZededaHaInterfacesOutputReference {
    return new EdgeZededaHaInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha aviatrix_edge_zededa_ha}
*/
export class EdgeZededaHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_zededa_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeZededaHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeZededaHa to import
  * @param importFromId The id of the existing EdgeZededaHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeZededaHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_zededa_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_zededa_ha aviatrix_edge_zededa_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeZededaHaConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeZededaHaConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_zededa_ha',
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
    this._computeNodeUuid = config.computeNodeUuid;
    this._id = config.id;
    this._managementEgressIpPrefixList = config.managementEgressIpPrefixList;
    this._primaryGwName = config.primaryGwName;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // compute_node_uuid - computed: false, optional: false, required: true
  private _computeNodeUuid?: string; 
  public get computeNodeUuid() {
    return this.getStringAttribute('compute_node_uuid');
  }
  public set computeNodeUuid(value: string) {
    this._computeNodeUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNodeUuidInput() {
    return this._computeNodeUuid;
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

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new EdgeZededaHaInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EdgeZededaHaInterfaces[] | cdktf.IResolvable) {
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
      compute_node_uuid: cdktf.stringToTerraform(this._computeNodeUuid),
      id: cdktf.stringToTerraform(this._id),
      management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementEgressIpPrefixList),
      primary_gw_name: cdktf.stringToTerraform(this._primaryGwName),
      interfaces: cdktf.listMapper(edgeZededaHaInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_node_uuid: {
        value: cdktf.stringToHclTerraform(this._computeNodeUuid),
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
      interfaces: {
        value: cdktf.listMapperHcl(edgeZededaHaInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeZededaHaInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
