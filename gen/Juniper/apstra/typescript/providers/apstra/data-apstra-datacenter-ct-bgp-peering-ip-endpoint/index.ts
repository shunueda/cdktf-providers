// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtBgpPeeringIpEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#bfd_enabled DataApstraDatacenterCtBgpPeeringIpEndpoint#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set of JSON strings describing Connectivity Template Primitives which are children of this Connectivity Template Primitive. Use the `primitive` attribute of other Connectivity Template Primitives data sources here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#child_primitives DataApstraDatacenterCtBgpPeeringIpEndpoint#child_primitives}
  */
  readonly childPrimitives?: string[];
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#hold_time DataApstraDatacenterCtBgpPeeringIpEndpoint#hold_time}
  */
  readonly holdTime?: number;
  /**
  * IPv4 address of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#ipv4_address DataApstraDatacenterCtBgpPeeringIpEndpoint#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#ipv6_address DataApstraDatacenterCtBgpPeeringIpEndpoint#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#keepalive_time DataApstraDatacenterCtBgpPeeringIpEndpoint#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#local_asn DataApstraDatacenterCtBgpPeeringIpEndpoint#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#name DataApstraDatacenterCtBgpPeeringIpEndpoint#name}
  */
  readonly name?: string;
  /**
  * Neighbor ASN. Omit for *Neighbor ASN Type Dynamic*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#neighbor_asn DataApstraDatacenterCtBgpPeeringIpEndpoint#neighbor_asn}
  */
  readonly neighborAsn?: number;
  /**
  * BGP TCP authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#password DataApstraDatacenterCtBgpPeeringIpEndpoint#password}
  */
  readonly password?: string;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#ttl DataApstraDatacenterCtBgpPeeringIpEndpoint#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint apstra_datacenter_ct_bgp_peering_ip_endpoint}
*/
export class DataApstraDatacenterCtBgpPeeringIpEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_bgp_peering_ip_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtBgpPeeringIpEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtBgpPeeringIpEndpoint to import
  * @param importFromId The id of the existing DataApstraDatacenterCtBgpPeeringIpEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtBgpPeeringIpEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_bgp_peering_ip_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_bgp_peering_ip_endpoint apstra_datacenter_ct_bgp_peering_ip_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtBgpPeeringIpEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtBgpPeeringIpEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_bgp_peering_ip_endpoint',
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
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._keepaliveTime = config.keepaliveTime;
    this._localAsn = config.localAsn;
    this._name = config.name;
    this._neighborAsn = config.neighborAsn;
    this._password = config.password;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
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

  // neighbor_asn - computed: false, optional: true, required: false
  private _neighborAsn?: number; 
  public get neighborAsn() {
    return this.getNumberAttribute('neighbor_asn');
  }
  public set neighborAsn(value: number) {
    this._neighborAsn = value;
  }
  public resetNeighborAsn() {
    this._neighborAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnInput() {
    return this._neighborAsn;
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
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      local_asn: cdktf.numberToTerraform(this._localAsn),
      name: cdktf.stringToTerraform(this._name),
      neighbor_asn: cdktf.numberToTerraform(this._neighborAsn),
      password: cdktf.stringToTerraform(this._password),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      neighbor_asn: {
        value: cdktf.numberToHclTerraform(this._neighborAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
