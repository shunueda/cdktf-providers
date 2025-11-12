// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtBgpPeeringGenericSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#bfd_enabled DataApstraDatacenterCtBgpPeeringGenericSystem#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set of JSON strings describing Connectivity Template Primitives which are children of this Connectivity Template Primitive. Use the `primitive` attribute of other Connectivity Template Primitives data sources here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#child_primitives DataApstraDatacenterCtBgpPeeringGenericSystem#child_primitives}
  */
  readonly childPrimitives?: string[];
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#hold_time DataApstraDatacenterCtBgpPeeringGenericSystem#hold_time}
  */
  readonly holdTime?: number;
  /**
  * One of `none`, `addressed` (or omit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#ipv4_addressing_type DataApstraDatacenterCtBgpPeeringGenericSystem#ipv4_addressing_type}
  */
  readonly ipv4AddressingType?: string;
  /**
  * One of `none`, `addressed`, `link_local` (or omit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#ipv6_addressing_type DataApstraDatacenterCtBgpPeeringGenericSystem#ipv6_addressing_type}
  */
  readonly ipv6AddressingType?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#keepalive_time DataApstraDatacenterCtBgpPeeringGenericSystem#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#local_asn DataApstraDatacenterCtBgpPeeringGenericSystem#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#name DataApstraDatacenterCtBgpPeeringGenericSystem#name}
  */
  readonly name?: string;
  /**
  * Default behavior is `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#neighbor_asn_dynamic DataApstraDatacenterCtBgpPeeringGenericSystem#neighbor_asn_dynamic}
  */
  readonly neighborAsnDynamic?: boolean | cdktf.IResolvable;
  /**
  * BGP TCP authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#password DataApstraDatacenterCtBgpPeeringGenericSystem#password}
  */
  readonly password?: string;
  /**
  * Enable to peer from loopback interface. Default behavior peers from physical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#peer_from_loopback DataApstraDatacenterCtBgpPeeringGenericSystem#peer_from_loopback}
  */
  readonly peerFromLoopback?: boolean | cdktf.IResolvable;
  /**
  * One of `loopback`, `interface_or_ip_endpoint`, `interface_or_shared_ip_endpoint` (or omit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#peer_to DataApstraDatacenterCtBgpPeeringGenericSystem#peer_to}
  */
  readonly peerTo?: string;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#ttl DataApstraDatacenterCtBgpPeeringGenericSystem#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system apstra_datacenter_ct_bgp_peering_generic_system}
*/
export class DataApstraDatacenterCtBgpPeeringGenericSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_bgp_peering_generic_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtBgpPeeringGenericSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtBgpPeeringGenericSystem to import
  * @param importFromId The id of the existing DataApstraDatacenterCtBgpPeeringGenericSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtBgpPeeringGenericSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_bgp_peering_generic_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_generic_system apstra_datacenter_ct_bgp_peering_generic_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtBgpPeeringGenericSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtBgpPeeringGenericSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_bgp_peering_generic_system',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfdEnabled = config.bfdEnabled;
    this._childPrimitives = config.childPrimitives;
    this._holdTime = config.holdTime;
    this._ipv4AddressingType = config.ipv4AddressingType;
    this._ipv6AddressingType = config.ipv6AddressingType;
    this._keepaliveTime = config.keepaliveTime;
    this._localAsn = config.localAsn;
    this._name = config.name;
    this._neighborAsnDynamic = config.neighborAsnDynamic;
    this._password = config.password;
    this._peerFromLoopback = config.peerFromLoopback;
    this._peerTo = config.peerTo;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // child_primitives - computed: false, optional: true, required: false
  private _childPrimitives?: string[]; 
  public get childPrimitives() {
    return cdktf.Fn.tolist(this.getListAttribute('child_primitives'));
  }
  public set childPrimitives(value: string[]) {
    this._childPrimitives = value;
  }
  public resetChildPrimitives() {
    this._childPrimitives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childPrimitivesInput() {
    return this._childPrimitives;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // ipv4_addressing_type - computed: false, optional: true, required: false
  private _ipv4AddressingType?: string; 
  public get ipv4AddressingType() {
    return this.getStringAttribute('ipv4_addressing_type');
  }
  public set ipv4AddressingType(value: string) {
    this._ipv4AddressingType = value;
  }
  public resetIpv4AddressingType() {
    this._ipv4AddressingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressingTypeInput() {
    return this._ipv4AddressingType;
  }

  // ipv6_addressing_type - computed: false, optional: true, required: false
  private _ipv6AddressingType?: string; 
  public get ipv6AddressingType() {
    return this.getStringAttribute('ipv6_addressing_type');
  }
  public set ipv6AddressingType(value: string) {
    this._ipv6AddressingType = value;
  }
  public resetIpv6AddressingType() {
    this._ipv6AddressingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressingTypeInput() {
    return this._ipv6AddressingType;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
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

  // neighbor_asn_dynamic - computed: false, optional: true, required: false
  private _neighborAsnDynamic?: boolean | cdktf.IResolvable; 
  public get neighborAsnDynamic() {
    return this.getBooleanAttribute('neighbor_asn_dynamic');
  }
  public set neighborAsnDynamic(value: boolean | cdktf.IResolvable) {
    this._neighborAsnDynamic = value;
  }
  public resetNeighborAsnDynamic() {
    this._neighborAsnDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnDynamicInput() {
    return this._neighborAsnDynamic;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_from_loopback - computed: false, optional: true, required: false
  private _peerFromLoopback?: boolean | cdktf.IResolvable; 
  public get peerFromLoopback() {
    return this.getBooleanAttribute('peer_from_loopback');
  }
  public set peerFromLoopback(value: boolean | cdktf.IResolvable) {
    this._peerFromLoopback = value;
  }
  public resetPeerFromLoopback() {
    this._peerFromLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerFromLoopbackInput() {
    return this._peerFromLoopback;
  }

  // peer_to - computed: false, optional: true, required: false
  private _peerTo?: string; 
  public get peerTo() {
    return this.getStringAttribute('peer_to');
  }
  public set peerTo(value: string) {
    this._peerTo = value;
  }
  public resetPeerTo() {
    this._peerTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToInput() {
    return this._peerTo;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd_enabled: cdktf.booleanToTerraform(this._bfdEnabled),
      child_primitives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childPrimitives),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      ipv4_addressing_type: cdktf.stringToTerraform(this._ipv4AddressingType),
      ipv6_addressing_type: cdktf.stringToTerraform(this._ipv6AddressingType),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      local_asn: cdktf.numberToTerraform(this._localAsn),
      name: cdktf.stringToTerraform(this._name),
      neighbor_asn_dynamic: cdktf.booleanToTerraform(this._neighborAsnDynamic),
      password: cdktf.stringToTerraform(this._password),
      peer_from_loopback: cdktf.booleanToTerraform(this._peerFromLoopback),
      peer_to: cdktf.stringToTerraform(this._peerTo),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd_enabled: {
        value: cdktf.booleanToHclTerraform(this._bfdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      child_primitives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childPrimitives),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_addressing_type: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addressing_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_time: {
        value: cdktf.numberToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_asn: {
        value: cdktf.numberToHclTerraform(this._localAsn),
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
      neighbor_asn_dynamic: {
        value: cdktf.booleanToHclTerraform(this._neighborAsnDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_from_loopback: {
        value: cdktf.booleanToHclTerraform(this._peerFromLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_to: {
        value: cdktf.stringToHclTerraform(this._peerTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
