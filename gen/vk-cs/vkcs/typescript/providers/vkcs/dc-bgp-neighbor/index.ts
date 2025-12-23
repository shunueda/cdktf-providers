// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate BGP Add-Paths feature on peer. Default is off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#add_paths DcBgpNeighbor#add_paths}
  */
  readonly addPaths?: string;
  /**
  * Control BGP session activity with BFD protocol. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#bfd_enabled DcBgpNeighbor#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Direct Connect BGP ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#dc_bgp_id DcBgpNeighbor#dc_bgp_id}
  */
  readonly dcBgpId: string;
  /**
  * Description of the BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#description DcBgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * Enable or disable item. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#enabled DcBgpNeighbor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Input filter that pass incoming BGP prefixes (allow any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#filter_in DcBgpNeighbor#filter_in}
  */
  readonly filterIn?: string;
  /**
  * Output filter that pass incoming BGP prefixes (allow any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#filter_out DcBgpNeighbor#filter_out}
  */
  readonly filterOut?: string;
  /**
  * Force set IP address of next-hop on BGP prefix to self even in iBGP. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#force_ibgp_next_hop_self DcBgpNeighbor#force_ibgp_next_hop_self}
  */
  readonly forceIbgpNextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Name of the BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#name DcBgpNeighbor#name}
  */
  readonly name?: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new bgp_neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#region DcBgpNeighbor#region}
  */
  readonly region?: string;
  /**
  * BGP Neighbor ASN. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#remote_asn DcBgpNeighbor#remote_asn}
  */
  readonly remoteAsn: number;
  /**
  * BGP Neighbor IP address. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#remote_ip DcBgpNeighbor#remote_ip}
  */
  readonly remoteIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor vkcs_dc_bgp_neighbor}
*/
export class DcBgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcBgpNeighbor to import
  * @param importFromId The id of the existing DcBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_bgp_neighbor vkcs_dc_bgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DcBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addPaths = config.addPaths;
    this._bfdEnabled = config.bfdEnabled;
    this._dcBgpId = config.dcBgpId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filterIn = config.filterIn;
    this._filterOut = config.filterOut;
    this._forceIbgpNextHopSelf = config.forceIbgpNextHopSelf;
    this._name = config.name;
    this._region = config.region;
    this._remoteAsn = config.remoteAsn;
    this._remoteIp = config.remoteIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paths - computed: true, optional: true, required: false
  private _addPaths?: string; 
  public get addPaths() {
    return this.getStringAttribute('add_paths');
  }
  public set addPaths(value: string) {
    this._addPaths = value;
  }
  public resetAddPaths() {
    this._addPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathsInput() {
    return this._addPaths;
  }

  // bfd_enabled - computed: true, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_bgp_id - computed: false, optional: false, required: true
  private _dcBgpId?: string; 
  public get dcBgpId() {
    return this.getStringAttribute('dc_bgp_id');
  }
  public set dcBgpId(value: string) {
    this._dcBgpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcBgpIdInput() {
    return this._dcBgpId;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter_in - computed: true, optional: true, required: false
  private _filterIn?: string; 
  public get filterIn() {
    return this.getStringAttribute('filter_in');
  }
  public set filterIn(value: string) {
    this._filterIn = value;
  }
  public resetFilterIn() {
    this._filterIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInInput() {
    return this._filterIn;
  }

  // filter_out - computed: true, optional: true, required: false
  private _filterOut?: string; 
  public get filterOut() {
    return this.getStringAttribute('filter_out');
  }
  public set filterOut(value: string) {
    this._filterOut = value;
  }
  public resetFilterOut() {
    this._filterOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOutInput() {
    return this._filterOut;
  }

  // force_ibgp_next_hop_self - computed: true, optional: true, required: false
  private _forceIbgpNextHopSelf?: boolean | cdktf.IResolvable; 
  public get forceIbgpNextHopSelf() {
    return this.getBooleanAttribute('force_ibgp_next_hop_self');
  }
  public set forceIbgpNextHopSelf(value: boolean | cdktf.IResolvable) {
    this._forceIbgpNextHopSelf = value;
  }
  public resetForceIbgpNextHopSelf() {
    this._forceIbgpNextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIbgpNextHopSelfInput() {
    return this._forceIbgpNextHopSelf;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // remote_asn - computed: false, optional: false, required: true
  private _remoteAsn?: number; 
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }
  public set remoteAsn(value: number) {
    this._remoteAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_paths: cdktf.stringToTerraform(this._addPaths),
      bfd_enabled: cdktf.booleanToTerraform(this._bfdEnabled),
      dc_bgp_id: cdktf.stringToTerraform(this._dcBgpId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter_in: cdktf.stringToTerraform(this._filterIn),
      filter_out: cdktf.stringToTerraform(this._filterOut),
      force_ibgp_next_hop_self: cdktf.booleanToTerraform(this._forceIbgpNextHopSelf),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      remote_asn: cdktf.numberToTerraform(this._remoteAsn),
      remote_ip: cdktf.stringToTerraform(this._remoteIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paths: {
        value: cdktf.stringToHclTerraform(this._addPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_enabled: {
        value: cdktf.booleanToHclTerraform(this._bfdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dc_bgp_id: {
        value: cdktf.stringToHclTerraform(this._dcBgpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_in: {
        value: cdktf.stringToHclTerraform(this._filterIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_out: {
        value: cdktf.stringToHclTerraform(this._filterOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_ibgp_next_hop_self: {
        value: cdktf.booleanToHclTerraform(this._forceIbgpNextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      remote_asn: {
        value: cdktf.numberToHclTerraform(this._remoteAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_ip: {
        value: cdktf.stringToHclTerraform(this._remoteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
