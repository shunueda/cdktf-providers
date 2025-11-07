// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#description VirtualInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#direct_connect_id VirtualInterface#direct_connect_id}
  */
  readonly directConnectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#id VirtualInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#name VirtualInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#region VirtualInterface#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#remote_ep_group VirtualInterface#remote_ep_group}
  */
  readonly remoteEpGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#vgw_id VirtualInterface#vgw_id}
  */
  readonly vgwId: string;
  /**
  * link_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#link_infos VirtualInterface#link_infos}
  */
  readonly linkInfos?: VirtualInterfaceLinkInfos[] | cdktf.IResolvable;
}
export interface VirtualInterfaceLinkInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#bgp_asn VirtualInterface#bgp_asn}
  */
  readonly bgpAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#bgp_asn_dot VirtualInterface#bgp_asn_dot}
  */
  readonly bgpAsnDot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#hosting_id VirtualInterface#hosting_id}
  */
  readonly hostingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#interface_group_id VirtualInterface#interface_group_id}
  */
  readonly interfaceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#local_gateway_v4_ip VirtualInterface#local_gateway_v4_ip}
  */
  readonly localGatewayV4Ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#local_gateway_v6_ip VirtualInterface#local_gateway_v6_ip}
  */
  readonly localGatewayV6Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#remote_gateway_v4_ip VirtualInterface#remote_gateway_v4_ip}
  */
  readonly remoteGatewayV4Ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#remote_gateway_v6_ip VirtualInterface#remote_gateway_v6_ip}
  */
  readonly remoteGatewayV6Ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#vlan VirtualInterface#vlan}
  */
  readonly vlan: number;
}

export function virtualInterfaceLinkInfosToTerraform(struct?: VirtualInterfaceLinkInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_asn: cdktf.numberToTerraform(struct!.bgpAsn),
    bgp_asn_dot: cdktf.stringToTerraform(struct!.bgpAsnDot),
    hosting_id: cdktf.stringToTerraform(struct!.hostingId),
    interface_group_id: cdktf.stringToTerraform(struct!.interfaceGroupId),
    local_gateway_v4_ip: cdktf.stringToTerraform(struct!.localGatewayV4Ip),
    local_gateway_v6_ip: cdktf.stringToTerraform(struct!.localGatewayV6Ip),
    remote_gateway_v4_ip: cdktf.stringToTerraform(struct!.remoteGatewayV4Ip),
    remote_gateway_v6_ip: cdktf.stringToTerraform(struct!.remoteGatewayV6Ip),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function virtualInterfaceLinkInfosToHclTerraform(struct?: VirtualInterfaceLinkInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_asn: {
      value: cdktf.numberToHclTerraform(struct!.bgpAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_asn_dot: {
      value: cdktf.stringToHclTerraform(struct!.bgpAsnDot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosting_id: {
      value: cdktf.stringToHclTerraform(struct!.hostingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_group_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_gateway_v4_ip: {
      value: cdktf.stringToHclTerraform(struct!.localGatewayV4Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_gateway_v6_ip: {
      value: cdktf.stringToHclTerraform(struct!.localGatewayV6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gateway_v4_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteGatewayV4Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gateway_v6_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteGatewayV6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VirtualInterfaceLinkInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualInterfaceLinkInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsn = this._bgpAsn;
    }
    if (this._bgpAsnDot !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsnDot = this._bgpAsnDot;
    }
    if (this._hostingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostingId = this._hostingId;
    }
    if (this._interfaceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceGroupId = this._interfaceGroupId;
    }
    if (this._localGatewayV4Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.localGatewayV4Ip = this._localGatewayV4Ip;
    }
    if (this._localGatewayV6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.localGatewayV6Ip = this._localGatewayV6Ip;
    }
    if (this._remoteGatewayV4Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGatewayV4Ip = this._remoteGatewayV4Ip;
    }
    if (this._remoteGatewayV6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGatewayV6Ip = this._remoteGatewayV6Ip;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualInterfaceLinkInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpAsn = undefined;
      this._bgpAsnDot = undefined;
      this._hostingId = undefined;
      this._interfaceGroupId = undefined;
      this._localGatewayV4Ip = undefined;
      this._localGatewayV6Ip = undefined;
      this._remoteGatewayV4Ip = undefined;
      this._remoteGatewayV6Ip = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpAsn = value.bgpAsn;
      this._bgpAsnDot = value.bgpAsnDot;
      this._hostingId = value.hostingId;
      this._interfaceGroupId = value.interfaceGroupId;
      this._localGatewayV4Ip = value.localGatewayV4Ip;
      this._localGatewayV6Ip = value.localGatewayV6Ip;
      this._remoteGatewayV4Ip = value.remoteGatewayV4Ip;
      this._remoteGatewayV6Ip = value.remoteGatewayV6Ip;
      this._vlan = value.vlan;
    }
  }

  // bgp_asn - computed: false, optional: true, required: false
  private _bgpAsn?: number; 
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // bgp_asn_dot - computed: false, optional: true, required: false
  private _bgpAsnDot?: string; 
  public get bgpAsnDot() {
    return this.getStringAttribute('bgp_asn_dot');
  }
  public set bgpAsnDot(value: string) {
    this._bgpAsnDot = value;
  }
  public resetBgpAsnDot() {
    this._bgpAsnDot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnDotInput() {
    return this._bgpAsnDot;
  }

  // hosting_id - computed: false, optional: false, required: true
  private _hostingId?: string; 
  public get hostingId() {
    return this.getStringAttribute('hosting_id');
  }
  public set hostingId(value: string) {
    this._hostingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingIdInput() {
    return this._hostingId;
  }

  // interface_group_id - computed: false, optional: false, required: true
  private _interfaceGroupId?: string; 
  public get interfaceGroupId() {
    return this.getStringAttribute('interface_group_id');
  }
  public set interfaceGroupId(value: string) {
    this._interfaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceGroupIdInput() {
    return this._interfaceGroupId;
  }

  // local_gateway_v4_ip - computed: false, optional: false, required: true
  private _localGatewayV4Ip?: string; 
  public get localGatewayV4Ip() {
    return this.getStringAttribute('local_gateway_v4_ip');
  }
  public set localGatewayV4Ip(value: string) {
    this._localGatewayV4Ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayV4IpInput() {
    return this._localGatewayV4Ip;
  }

  // local_gateway_v6_ip - computed: false, optional: true, required: false
  private _localGatewayV6Ip?: string; 
  public get localGatewayV6Ip() {
    return this.getStringAttribute('local_gateway_v6_ip');
  }
  public set localGatewayV6Ip(value: string) {
    this._localGatewayV6Ip = value;
  }
  public resetLocalGatewayV6Ip() {
    this._localGatewayV6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayV6IpInput() {
    return this._localGatewayV6Ip;
  }

  // remote_gateway_v4_ip - computed: false, optional: false, required: true
  private _remoteGatewayV4Ip?: string; 
  public get remoteGatewayV4Ip() {
    return this.getStringAttribute('remote_gateway_v4_ip');
  }
  public set remoteGatewayV4Ip(value: string) {
    this._remoteGatewayV4Ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayV4IpInput() {
    return this._remoteGatewayV4Ip;
  }

  // remote_gateway_v6_ip - computed: false, optional: true, required: false
  private _remoteGatewayV6Ip?: string; 
  public get remoteGatewayV6Ip() {
    return this.getStringAttribute('remote_gateway_v6_ip');
  }
  public set remoteGatewayV6Ip(value: string) {
    this._remoteGatewayV6Ip = value;
  }
  public resetRemoteGatewayV6Ip() {
    this._remoteGatewayV6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayV6IpInput() {
    return this._remoteGatewayV6Ip;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VirtualInterfaceLinkInfosList extends cdktf.ComplexList {
  public internalValue? : VirtualInterfaceLinkInfos[] | cdktf.IResolvable

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
  public get(index: number): VirtualInterfaceLinkInfosOutputReference {
    return new VirtualInterfaceLinkInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface hcs_virtual_interface}
*/
export class VirtualInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_virtual_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualInterface to import
  * @param importFromId The id of the existing VirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_virtual_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/resources/virtual_interface hcs_virtual_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._directConnectId = config.directConnectId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._remoteEpGroup = config.remoteEpGroup;
    this._vgwId = config.vgwId;
    this._linkInfos.internalValue = config.linkInfos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // direct_connect_id - computed: false, optional: false, required: true
  private _directConnectId?: string; 
  public get directConnectId() {
    return this.getStringAttribute('direct_connect_id');
  }
  public set directConnectId(value: string) {
    this._directConnectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectIdInput() {
    return this._directConnectId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_ep_group - computed: false, optional: false, required: true
  private _remoteEpGroup?: string[]; 
  public get remoteEpGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_ep_group'));
  }
  public set remoteEpGroup(value: string[]) {
    this._remoteEpGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteEpGroupInput() {
    return this._remoteEpGroup;
  }

  // remote_ep_group_id - computed: true, optional: false, required: false
  public get remoteEpGroupId() {
    return this.getStringAttribute('remote_ep_group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vgw_id - computed: false, optional: false, required: true
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }

  // link_infos - computed: false, optional: true, required: false
  private _linkInfos = new VirtualInterfaceLinkInfosList(this, "link_infos", true);
  public get linkInfos() {
    return this._linkInfos;
  }
  public putLinkInfos(value: VirtualInterfaceLinkInfos[] | cdktf.IResolvable) {
    this._linkInfos.internalValue = value;
  }
  public resetLinkInfos() {
    this._linkInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInfosInput() {
    return this._linkInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direct_connect_id: cdktf.stringToTerraform(this._directConnectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      remote_ep_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteEpGroup),
      vgw_id: cdktf.stringToTerraform(this._vgwId),
      link_infos: cdktf.listMapper(virtualInterfaceLinkInfosToTerraform, true)(this._linkInfos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_id: {
        value: cdktf.stringToHclTerraform(this._directConnectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ep_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteEpGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vgw_id: {
        value: cdktf.stringToHclTerraform(this._vgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_infos: {
        value: cdktf.listMapperHcl(virtualInterfaceLinkInfosToHclTerraform, true)(this._linkInfos.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualInterfaceLinkInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
