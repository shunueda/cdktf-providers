// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAPeerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#id VrrpAPeerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#uuid VrrpAPeerGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#peer VrrpAPeerGroup#peer}
  */
  readonly peer?: VrrpAPeerGroupPeer;
}
export interface VrrpAPeerGroupPeerIpPeerAddressCfg {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#ip_peer_address VrrpAPeerGroup#ip_peer_address}
  */
  readonly ipPeerAddress?: string;
}

export function vrrpAPeerGroupPeerIpPeerAddressCfgToTerraform(struct?: VrrpAPeerGroupPeerIpPeerAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_peer_address: cdktf.stringToTerraform(struct!.ipPeerAddress),
  }
}


export function vrrpAPeerGroupPeerIpPeerAddressCfgToHclTerraform(struct?: VrrpAPeerGroupPeerIpPeerAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.ipPeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAPeerGroupPeerIpPeerAddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAPeerGroupPeerIpPeerAddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPeerAddress = this._ipPeerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAPeerGroupPeerIpPeerAddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPeerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPeerAddress = value.ipPeerAddress;
    }
  }

  // ip_peer_address - computed: false, optional: true, required: false
  private _ipPeerAddress?: string; 
  public get ipPeerAddress() {
    return this.getStringAttribute('ip_peer_address');
  }
  public set ipPeerAddress(value: string) {
    this._ipPeerAddress = value;
  }
  public resetIpPeerAddress() {
    this._ipPeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPeerAddressInput() {
    return this._ipPeerAddress;
  }
}

export class VrrpAPeerGroupPeerIpPeerAddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAPeerGroupPeerIpPeerAddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAPeerGroupPeerIpPeerAddressCfgOutputReference {
    return new VrrpAPeerGroupPeerIpPeerAddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAPeerGroupPeerIpv6PeerAddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#ipv6_peer_address VrrpAPeerGroup#ipv6_peer_address}
  */
  readonly ipv6PeerAddress?: string;
}

export function vrrpAPeerGroupPeerIpv6PeerAddressCfgToTerraform(struct?: VrrpAPeerGroupPeerIpv6PeerAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_peer_address: cdktf.stringToTerraform(struct!.ipv6PeerAddress),
  }
}


export function vrrpAPeerGroupPeerIpv6PeerAddressCfgToHclTerraform(struct?: VrrpAPeerGroupPeerIpv6PeerAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6PeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAPeerGroupPeerIpv6PeerAddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAPeerGroupPeerIpv6PeerAddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6PeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PeerAddress = this._ipv6PeerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAPeerGroupPeerIpv6PeerAddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6PeerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6PeerAddress = value.ipv6PeerAddress;
    }
  }

  // ipv6_peer_address - computed: false, optional: true, required: false
  private _ipv6PeerAddress?: string; 
  public get ipv6PeerAddress() {
    return this.getStringAttribute('ipv6_peer_address');
  }
  public set ipv6PeerAddress(value: string) {
    this._ipv6PeerAddress = value;
  }
  public resetIpv6PeerAddress() {
    this._ipv6PeerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeerAddressInput() {
    return this._ipv6PeerAddress;
  }
}

export class VrrpAPeerGroupPeerIpv6PeerAddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAPeerGroupPeerIpv6PeerAddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAPeerGroupPeerIpv6PeerAddressCfgOutputReference {
    return new VrrpAPeerGroupPeerIpv6PeerAddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAPeerGroupPeer {
  /**
  * ip_peer_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#ip_peer_address_cfg VrrpAPeerGroup#ip_peer_address_cfg}
  */
  readonly ipPeerAddressCfg?: VrrpAPeerGroupPeerIpPeerAddressCfg[] | cdktf.IResolvable;
  /**
  * ipv6_peer_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#ipv6_peer_address_cfg VrrpAPeerGroup#ipv6_peer_address_cfg}
  */
  readonly ipv6PeerAddressCfg?: VrrpAPeerGroupPeerIpv6PeerAddressCfg[] | cdktf.IResolvable;
}

export function vrrpAPeerGroupPeerToTerraform(struct?: VrrpAPeerGroupPeerOutputReference | VrrpAPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_peer_address_cfg: cdktf.listMapper(vrrpAPeerGroupPeerIpPeerAddressCfgToTerraform, true)(struct!.ipPeerAddressCfg),
    ipv6_peer_address_cfg: cdktf.listMapper(vrrpAPeerGroupPeerIpv6PeerAddressCfgToTerraform, true)(struct!.ipv6PeerAddressCfg),
  }
}


export function vrrpAPeerGroupPeerToHclTerraform(struct?: VrrpAPeerGroupPeerOutputReference | VrrpAPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_peer_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAPeerGroupPeerIpPeerAddressCfgToHclTerraform, true)(struct!.ipPeerAddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAPeerGroupPeerIpPeerAddressCfgList",
    },
    ipv6_peer_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAPeerGroupPeerIpv6PeerAddressCfgToHclTerraform, true)(struct!.ipv6PeerAddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAPeerGroupPeerIpv6PeerAddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAPeerGroupPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAPeerGroupPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPeerAddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPeerAddressCfg = this._ipPeerAddressCfg?.internalValue;
    }
    if (this._ipv6PeerAddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PeerAddressCfg = this._ipv6PeerAddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAPeerGroupPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipPeerAddressCfg.internalValue = undefined;
      this._ipv6PeerAddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipPeerAddressCfg.internalValue = value.ipPeerAddressCfg;
      this._ipv6PeerAddressCfg.internalValue = value.ipv6PeerAddressCfg;
    }
  }

  // ip_peer_address_cfg - computed: false, optional: true, required: false
  private _ipPeerAddressCfg = new VrrpAPeerGroupPeerIpPeerAddressCfgList(this, "ip_peer_address_cfg", false);
  public get ipPeerAddressCfg() {
    return this._ipPeerAddressCfg;
  }
  public putIpPeerAddressCfg(value: VrrpAPeerGroupPeerIpPeerAddressCfg[] | cdktf.IResolvable) {
    this._ipPeerAddressCfg.internalValue = value;
  }
  public resetIpPeerAddressCfg() {
    this._ipPeerAddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPeerAddressCfgInput() {
    return this._ipPeerAddressCfg.internalValue;
  }

  // ipv6_peer_address_cfg - computed: false, optional: true, required: false
  private _ipv6PeerAddressCfg = new VrrpAPeerGroupPeerIpv6PeerAddressCfgList(this, "ipv6_peer_address_cfg", false);
  public get ipv6PeerAddressCfg() {
    return this._ipv6PeerAddressCfg;
  }
  public putIpv6PeerAddressCfg(value: VrrpAPeerGroupPeerIpv6PeerAddressCfg[] | cdktf.IResolvable) {
    this._ipv6PeerAddressCfg.internalValue = value;
  }
  public resetIpv6PeerAddressCfg() {
    this._ipv6PeerAddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeerAddressCfgInput() {
    return this._ipv6PeerAddressCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group thunder_vrrp_a_peer_group}
*/
export class VrrpAPeerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_peer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAPeerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAPeerGroup to import
  * @param importFromId The id of the existing VrrpAPeerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAPeerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_peer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_peer_group thunder_vrrp_a_peer_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAPeerGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VrrpAPeerGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_peer_group',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._peer.internalValue = config.peer;
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

  // peer - computed: false, optional: true, required: false
  private _peer = new VrrpAPeerGroupPeerOutputReference(this, "peer");
  public get peer() {
    return this._peer;
  }
  public putPeer(value: VrrpAPeerGroupPeer) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      peer: vrrpAPeerGroupPeerToTerraform(this._peer.internalValue),
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
      peer: {
        value: vrrpAPeerGroupPeerToHclTerraform(this._peer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAPeerGroupPeerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
