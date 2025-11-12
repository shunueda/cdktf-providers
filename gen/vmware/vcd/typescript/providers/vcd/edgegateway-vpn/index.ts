// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgegatewayVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#description EdgegatewayVpn#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#edge_gateway EdgegatewayVpn#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#encryption_protocol EdgegatewayVpn#encryption_protocol}
  */
  readonly encryptionProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#id EdgegatewayVpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_id EdgegatewayVpn#local_id}
  */
  readonly localId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_ip_address EdgegatewayVpn#local_ip_address}
  */
  readonly localIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#mtu EdgegatewayVpn#mtu}
  */
  readonly mtu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#name EdgegatewayVpn#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#org EdgegatewayVpn#org}
  */
  readonly org?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_id EdgegatewayVpn#peer_id}
  */
  readonly peerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_ip_address EdgegatewayVpn#peer_ip_address}
  */
  readonly peerIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#shared_secret EdgegatewayVpn#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#vdc EdgegatewayVpn#vdc}
  */
  readonly vdc?: string;
  /**
  * local_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_subnets EdgegatewayVpn#local_subnets}
  */
  readonly localSubnets?: EdgegatewayVpnLocalSubnets[] | cdktf.IResolvable;
  /**
  * peer_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_subnets EdgegatewayVpn#peer_subnets}
  */
  readonly peerSubnets?: EdgegatewayVpnPeerSubnets[] | cdktf.IResolvable;
}
export interface EdgegatewayVpnLocalSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_subnet_gateway EdgegatewayVpn#local_subnet_gateway}
  */
  readonly localSubnetGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_subnet_mask EdgegatewayVpn#local_subnet_mask}
  */
  readonly localSubnetMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#local_subnet_name EdgegatewayVpn#local_subnet_name}
  */
  readonly localSubnetName: string;
}

export function edgegatewayVpnLocalSubnetsToTerraform(struct?: EdgegatewayVpnLocalSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_subnet_gateway: cdktf.stringToTerraform(struct!.localSubnetGateway),
    local_subnet_mask: cdktf.stringToTerraform(struct!.localSubnetMask),
    local_subnet_name: cdktf.stringToTerraform(struct!.localSubnetName),
  }
}


export function edgegatewayVpnLocalSubnetsToHclTerraform(struct?: EdgegatewayVpnLocalSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_subnet_gateway: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgegatewayVpnLocalSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgegatewayVpnLocalSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSubnetGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetGateway = this._localSubnetGateway;
    }
    if (this._localSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetMask = this._localSubnetMask;
    }
    if (this._localSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetName = this._localSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgegatewayVpnLocalSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localSubnetGateway = undefined;
      this._localSubnetMask = undefined;
      this._localSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localSubnetGateway = value.localSubnetGateway;
      this._localSubnetMask = value.localSubnetMask;
      this._localSubnetName = value.localSubnetName;
    }
  }

  // local_subnet_gateway - computed: false, optional: false, required: true
  private _localSubnetGateway?: string; 
  public get localSubnetGateway() {
    return this.getStringAttribute('local_subnet_gateway');
  }
  public set localSubnetGateway(value: string) {
    this._localSubnetGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetGatewayInput() {
    return this._localSubnetGateway;
  }

  // local_subnet_mask - computed: false, optional: false, required: true
  private _localSubnetMask?: string; 
  public get localSubnetMask() {
    return this.getStringAttribute('local_subnet_mask');
  }
  public set localSubnetMask(value: string) {
    this._localSubnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetMaskInput() {
    return this._localSubnetMask;
  }

  // local_subnet_name - computed: false, optional: false, required: true
  private _localSubnetName?: string; 
  public get localSubnetName() {
    return this.getStringAttribute('local_subnet_name');
  }
  public set localSubnetName(value: string) {
    this._localSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetNameInput() {
    return this._localSubnetName;
  }
}

export class EdgegatewayVpnLocalSubnetsList extends cdktf.ComplexList {
  public internalValue? : EdgegatewayVpnLocalSubnets[] | cdktf.IResolvable

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
  public get(index: number): EdgegatewayVpnLocalSubnetsOutputReference {
    return new EdgegatewayVpnLocalSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgegatewayVpnPeerSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_subnet_gateway EdgegatewayVpn#peer_subnet_gateway}
  */
  readonly peerSubnetGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_subnet_mask EdgegatewayVpn#peer_subnet_mask}
  */
  readonly peerSubnetMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#peer_subnet_name EdgegatewayVpn#peer_subnet_name}
  */
  readonly peerSubnetName: string;
}

export function edgegatewayVpnPeerSubnetsToTerraform(struct?: EdgegatewayVpnPeerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_subnet_gateway: cdktf.stringToTerraform(struct!.peerSubnetGateway),
    peer_subnet_mask: cdktf.stringToTerraform(struct!.peerSubnetMask),
    peer_subnet_name: cdktf.stringToTerraform(struct!.peerSubnetName),
  }
}


export function edgegatewayVpnPeerSubnetsToHclTerraform(struct?: EdgegatewayVpnPeerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_subnet_gateway: {
      value: cdktf.stringToHclTerraform(struct!.peerSubnetGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.peerSubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.peerSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgegatewayVpnPeerSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgegatewayVpnPeerSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerSubnetGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnetGateway = this._peerSubnetGateway;
    }
    if (this._peerSubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnetMask = this._peerSubnetMask;
    }
    if (this._peerSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnetName = this._peerSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgegatewayVpnPeerSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerSubnetGateway = undefined;
      this._peerSubnetMask = undefined;
      this._peerSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerSubnetGateway = value.peerSubnetGateway;
      this._peerSubnetMask = value.peerSubnetMask;
      this._peerSubnetName = value.peerSubnetName;
    }
  }

  // peer_subnet_gateway - computed: false, optional: false, required: true
  private _peerSubnetGateway?: string; 
  public get peerSubnetGateway() {
    return this.getStringAttribute('peer_subnet_gateway');
  }
  public set peerSubnetGateway(value: string) {
    this._peerSubnetGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetGatewayInput() {
    return this._peerSubnetGateway;
  }

  // peer_subnet_mask - computed: false, optional: false, required: true
  private _peerSubnetMask?: string; 
  public get peerSubnetMask() {
    return this.getStringAttribute('peer_subnet_mask');
  }
  public set peerSubnetMask(value: string) {
    this._peerSubnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetMaskInput() {
    return this._peerSubnetMask;
  }

  // peer_subnet_name - computed: false, optional: false, required: true
  private _peerSubnetName?: string; 
  public get peerSubnetName() {
    return this.getStringAttribute('peer_subnet_name');
  }
  public set peerSubnetName(value: string) {
    this._peerSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetNameInput() {
    return this._peerSubnetName;
  }
}

export class EdgegatewayVpnPeerSubnetsList extends cdktf.ComplexList {
  public internalValue? : EdgegatewayVpnPeerSubnets[] | cdktf.IResolvable

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
  public get(index: number): EdgegatewayVpnPeerSubnetsOutputReference {
    return new EdgegatewayVpnPeerSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn vcd_edgegateway_vpn}
*/
export class EdgegatewayVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_edgegateway_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgegatewayVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgegatewayVpn to import
  * @param importFromId The id of the existing EdgegatewayVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgegatewayVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_edgegateway_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway_vpn vcd_edgegateway_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgegatewayVpnConfig
  */
  public constructor(scope: Construct, id: string, config: EdgegatewayVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_edgegateway_vpn',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._edgeGateway = config.edgeGateway;
    this._encryptionProtocol = config.encryptionProtocol;
    this._id = config.id;
    this._localId = config.localId;
    this._localIpAddress = config.localIpAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._org = config.org;
    this._peerId = config.peerId;
    this._peerIpAddress = config.peerIpAddress;
    this._sharedSecret = config.sharedSecret;
    this._vdc = config.vdc;
    this._localSubnets.internalValue = config.localSubnets;
    this._peerSubnets.internalValue = config.peerSubnets;
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

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
  }

  // encryption_protocol - computed: false, optional: false, required: true
  private _encryptionProtocol?: string; 
  public get encryptionProtocol() {
    return this.getStringAttribute('encryption_protocol');
  }
  public set encryptionProtocol(value: string) {
    this._encryptionProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionProtocolInput() {
    return this._encryptionProtocol;
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

  // local_id - computed: false, optional: false, required: true
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // local_ip_address - computed: false, optional: false, required: true
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // mtu - computed: false, optional: false, required: true
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // peer_ip_address - computed: false, optional: false, required: true
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // local_subnets - computed: false, optional: true, required: false
  private _localSubnets = new EdgegatewayVpnLocalSubnetsList(this, "local_subnets", true);
  public get localSubnets() {
    return this._localSubnets;
  }
  public putLocalSubnets(value: EdgegatewayVpnLocalSubnets[] | cdktf.IResolvable) {
    this._localSubnets.internalValue = value;
  }
  public resetLocalSubnets() {
    this._localSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetsInput() {
    return this._localSubnets.internalValue;
  }

  // peer_subnets - computed: false, optional: true, required: false
  private _peerSubnets = new EdgegatewayVpnPeerSubnetsList(this, "peer_subnets", true);
  public get peerSubnets() {
    return this._peerSubnets;
  }
  public putPeerSubnets(value: EdgegatewayVpnPeerSubnets[] | cdktf.IResolvable) {
    this._peerSubnets.internalValue = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      encryption_protocol: cdktf.stringToTerraform(this._encryptionProtocol),
      id: cdktf.stringToTerraform(this._id),
      local_id: cdktf.stringToTerraform(this._localId),
      local_ip_address: cdktf.stringToTerraform(this._localIpAddress),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      peer_id: cdktf.stringToTerraform(this._peerId),
      peer_ip_address: cdktf.stringToTerraform(this._peerIpAddress),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      vdc: cdktf.stringToTerraform(this._vdc),
      local_subnets: cdktf.listMapper(edgegatewayVpnLocalSubnetsToTerraform, true)(this._localSubnets.internalValue),
      peer_subnets: cdktf.listMapper(edgegatewayVpnPeerSubnetsToTerraform, true)(this._peerSubnets.internalValue),
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
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_protocol: {
        value: cdktf.stringToHclTerraform(this._encryptionProtocol),
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
      local_id: {
        value: cdktf.stringToHclTerraform(this._localId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip_address: {
        value: cdktf.stringToHclTerraform(this._localIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_id: {
        value: cdktf.stringToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ip_address: {
        value: cdktf.stringToHclTerraform(this._peerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnets: {
        value: cdktf.listMapperHcl(edgegatewayVpnLocalSubnetsToHclTerraform, true)(this._localSubnets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgegatewayVpnLocalSubnetsList",
      },
      peer_subnets: {
        value: cdktf.listMapperHcl(edgegatewayVpnPeerSubnetsToHclTerraform, true)(this._peerSubnets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgegatewayVpnPeerSubnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
