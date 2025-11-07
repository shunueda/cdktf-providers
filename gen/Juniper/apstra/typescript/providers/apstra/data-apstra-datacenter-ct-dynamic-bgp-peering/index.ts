// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtDynamicBgpPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#bfd_enabled DataApstraDatacenterCtDynamicBgpPeering#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set of JSON strings describing Connectivity Template Primitives which are children of this Connectivity Template Primitive. Use the `primitive` attribute of other Connectivity Template Primitives data sources here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#child_primitives DataApstraDatacenterCtDynamicBgpPeering#child_primitives}
  */
  readonly childPrimitives?: string[];
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#hold_time DataApstraDatacenterCtDynamicBgpPeering#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Enable to allow IPv4 peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#ipv4_enabled DataApstraDatacenterCtDynamicBgpPeering#ipv4_enabled}
  */
  readonly ipv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * Omit to derive prefix from the application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#ipv4_peer_prefix DataApstraDatacenterCtDynamicBgpPeering#ipv4_peer_prefix}
  */
  readonly ipv4PeerPrefix?: string;
  /**
  * Enable to allow IPv6 peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#ipv6_enabled DataApstraDatacenterCtDynamicBgpPeering#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Omit to derive prefix from the application point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#ipv6_peer_prefix DataApstraDatacenterCtDynamicBgpPeering#ipv6_peer_prefix}
  */
  readonly ipv6PeerPrefix?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#keepalive_time DataApstraDatacenterCtDynamicBgpPeering#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * This feature is configured on a per-peer basis. It allows a router to appear to be a member of a second autonomous system (AS) by prepending a local-as AS number, in addition to its real AS number, announced to its eBGP peer, resulting in an AS path length of two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#local_asn DataApstraDatacenterCtDynamicBgpPeering#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#name DataApstraDatacenterCtDynamicBgpPeering#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#password DataApstraDatacenterCtDynamicBgpPeering#password}
  */
  readonly password?: string;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#ttl DataApstraDatacenterCtDynamicBgpPeering#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering apstra_datacenter_ct_dynamic_bgp_peering}
*/
export class DataApstraDatacenterCtDynamicBgpPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_dynamic_bgp_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtDynamicBgpPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtDynamicBgpPeering to import
  * @param importFromId The id of the existing DataApstraDatacenterCtDynamicBgpPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtDynamicBgpPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_dynamic_bgp_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_dynamic_bgp_peering apstra_datacenter_ct_dynamic_bgp_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtDynamicBgpPeeringConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtDynamicBgpPeeringConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_dynamic_bgp_peering',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
    this._ipv4Enabled = config.ipv4Enabled;
    this._ipv4PeerPrefix = config.ipv4PeerPrefix;
    this._ipv6Enabled = config.ipv6Enabled;
    this._ipv6PeerPrefix = config.ipv6PeerPrefix;
    this._keepaliveTime = config.keepaliveTime;
    this._localAsn = config.localAsn;
    this._name = config.name;
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

  // ipv4_enabled - computed: false, optional: true, required: false
  private _ipv4Enabled?: boolean | cdktf.IResolvable; 
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }
  public set ipv4Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv4Enabled = value;
  }
  public resetIpv4Enabled() {
    this._ipv4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EnabledInput() {
    return this._ipv4Enabled;
  }

  // ipv4_peer_prefix - computed: false, optional: true, required: false
  private _ipv4PeerPrefix?: string; 
  public get ipv4PeerPrefix() {
    return this.getStringAttribute('ipv4_peer_prefix');
  }
  public set ipv4PeerPrefix(value: string) {
    this._ipv4PeerPrefix = value;
  }
  public resetIpv4PeerPrefix() {
    this._ipv4PeerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PeerPrefixInput() {
    return this._ipv4PeerPrefix;
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // ipv6_peer_prefix - computed: false, optional: true, required: false
  private _ipv6PeerPrefix?: string; 
  public get ipv6PeerPrefix() {
    return this.getStringAttribute('ipv6_peer_prefix');
  }
  public set ipv6PeerPrefix(value: string) {
    this._ipv6PeerPrefix = value;
  }
  public resetIpv6PeerPrefix() {
    this._ipv6PeerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PeerPrefixInput() {
    return this._ipv6PeerPrefix;
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
      ipv4_enabled: cdktf.booleanToTerraform(this._ipv4Enabled),
      ipv4_peer_prefix: cdktf.stringToTerraform(this._ipv4PeerPrefix),
      ipv6_enabled: cdktf.booleanToTerraform(this._ipv6Enabled),
      ipv6_peer_prefix: cdktf.stringToTerraform(this._ipv6PeerPrefix),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      local_asn: cdktf.numberToTerraform(this._localAsn),
      name: cdktf.stringToTerraform(this._name),
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
      ipv4_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv4Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_peer_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv4PeerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_peer_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6PeerPrefix),
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
