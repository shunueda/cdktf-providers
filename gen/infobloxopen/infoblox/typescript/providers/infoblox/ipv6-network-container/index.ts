// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6NetworkContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the parameter's value > 0 to allocate next available network container with corresponding prefix length from the network container defined by 'parent_cidr'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#allocate_prefix_len Ipv6NetworkContainer#allocate_prefix_len}
  */
  readonly allocatePrefixLen?: number;
  /**
  * The network container's address, in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#cidr Ipv6NetworkContainer#cidr}
  */
  readonly cidr?: string;
  /**
  * A description of the network container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#comment Ipv6NetworkContainer#comment}
  */
  readonly comment?: string;
  /**
  * The Extensible attributes of the network container to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#ext_attrs Ipv6NetworkContainer#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The parent network/network-container block's extensible attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#filter_params Ipv6NetworkContainer#filter_params}
  */
  readonly filterParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#id Ipv6NetworkContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of network view for the network container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#network_view Ipv6NetworkContainer#network_view}
  */
  readonly networkView?: string;
  /**
  * The parent network container block in CIDR format to allocate from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#parent_cidr Ipv6NetworkContainer#parent_cidr}
  */
  readonly parentCidr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container infoblox_ipv6_network_container}
*/
export class Ipv6NetworkContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ipv6_network_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6NetworkContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6NetworkContainer to import
  * @param importFromId The id of the existing Ipv6NetworkContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6NetworkContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ipv6_network_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv6_network_container infoblox_ipv6_network_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6NetworkContainerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6NetworkContainerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ipv6_network_container',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePrefixLen = config.allocatePrefixLen;
    this._cidr = config.cidr;
    this._comment = config.comment;
    this._extAttrs = config.extAttrs;
    this._filterParams = config.filterParams;
    this._id = config.id;
    this._networkView = config.networkView;
    this._parentCidr = config.parentCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_prefix_len - computed: false, optional: true, required: false
  private _allocatePrefixLen?: number; 
  public get allocatePrefixLen() {
    return this.getNumberAttribute('allocate_prefix_len');
  }
  public set allocatePrefixLen(value: number) {
    this._allocatePrefixLen = value;
  }
  public resetAllocatePrefixLen() {
    this._allocatePrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePrefixLenInput() {
    return this._allocatePrefixLen;
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams?: string; 
  public get filterParams() {
    return this.getStringAttribute('filter_params');
  }
  public set filterParams(value: string) {
    this._filterParams = value;
  }
  public resetFilterParams() {
    this._filterParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // network_view - computed: false, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // parent_cidr - computed: false, optional: true, required: false
  private _parentCidr?: string; 
  public get parentCidr() {
    return this.getStringAttribute('parent_cidr');
  }
  public set parentCidr(value: string) {
    this._parentCidr = value;
  }
  public resetParentCidr() {
    this._parentCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCidrInput() {
    return this._parentCidr;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_prefix_len: cdktf.numberToTerraform(this._allocatePrefixLen),
      cidr: cdktf.stringToTerraform(this._cidr),
      comment: cdktf.stringToTerraform(this._comment),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      filter_params: cdktf.stringToTerraform(this._filterParams),
      id: cdktf.stringToTerraform(this._id),
      network_view: cdktf.stringToTerraform(this._networkView),
      parent_cidr: cdktf.stringToTerraform(this._parentCidr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_prefix_len: {
        value: cdktf.numberToHclTerraform(this._allocatePrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_params: {
        value: cdktf.stringToHclTerraform(this._filterParams),
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
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_cidr: {
        value: cdktf.stringToHclTerraform(this._parentCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
