// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Linode to assign this range to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range#linode_id Ipv6Range#linode_id}
  */
  readonly linodeId?: number;
  /**
  * The prefix length of the IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range#prefix_length Ipv6Range#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * The IPv6 SLAAC address to assign this range to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range#route_target Ipv6Range#route_target}
  */
  readonly routeTarget?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range linode_ipv6_range}
*/
export class Ipv6Range extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_ipv6_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Range resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Range to import
  * @param importFromId The id of the existing Ipv6Range that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Range to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_ipv6_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/ipv6_range linode_ipv6_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RangeConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6RangeConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_ipv6_range',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._linodeId = config.linodeId;
    this._prefixLength = config.prefixLength;
    this._routeTarget = config.routeTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_bgp - computed: true, optional: false, required: false
  public get isBgp() {
    return this.getBooleanAttribute('is_bgp');
  }

  // linode_id - computed: false, optional: true, required: false
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  public resetLinodeId() {
    this._linodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // linodes - computed: true, optional: false, required: false
  public get linodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('linodes')));
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // route_target - computed: true, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      linode_id: cdktf.numberToTerraform(this._linodeId),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      route_target: cdktf.stringToTerraform(this._routeTarget),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_target: {
        value: cdktf.stringToHclTerraform(this._routeTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
