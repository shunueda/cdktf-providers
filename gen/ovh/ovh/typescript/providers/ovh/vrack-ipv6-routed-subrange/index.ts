// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrackIpv6RoutedSubrangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your IP v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange#block VrackIpv6RoutedSubrange#block}
  */
  readonly block: string;
  /**
  * IPv6 address (e.g., 2001:41d0:1:1994::1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange#nexthop VrackIpv6RoutedSubrange#nexthop}
  */
  readonly nexthop: string;
  /**
  * IPv6 CIDR notation (e.g., 2001:41d0::/128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange#routed_subrange VrackIpv6RoutedSubrange#routed_subrange}
  */
  readonly routedSubrange: string;
  /**
  * The internal name of your vrack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange#service_name VrackIpv6RoutedSubrange#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange ovh_vrack_ipv6_routed_subrange}
*/
export class VrackIpv6RoutedSubrange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vrack_ipv6_routed_subrange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrackIpv6RoutedSubrange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrackIpv6RoutedSubrange to import
  * @param importFromId The id of the existing VrackIpv6RoutedSubrange that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrackIpv6RoutedSubrange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vrack_ipv6_routed_subrange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6_routed_subrange ovh_vrack_ipv6_routed_subrange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrackIpv6RoutedSubrangeConfig
  */
  public constructor(scope: Construct, id: string, config: VrackIpv6RoutedSubrangeConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_vrack_ipv6_routed_subrange',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._block = config.block;
    this._nexthop = config.nexthop;
    this._routedSubrange = config.routedSubrange;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block - computed: false, optional: false, required: true
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // routed_subrange - computed: false, optional: false, required: true
  private _routedSubrange?: string; 
  public get routedSubrange() {
    return this.getStringAttribute('routed_subrange');
  }
  public set routedSubrange(value: string) {
    this._routedSubrange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routedSubrangeInput() {
    return this._routedSubrange;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block: cdktf.stringToTerraform(this._block),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      routed_subrange: cdktf.stringToTerraform(this._routedSubrange),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block: {
        value: cdktf.stringToHclTerraform(this._block),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop: {
        value: cdktf.stringToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routed_subrange: {
        value: cdktf.stringToHclTerraform(this._routedSubrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
