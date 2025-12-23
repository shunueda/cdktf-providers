// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcStaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Direct Connect Router ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#dc_router_id DcStaticRoute#dc_router_id}
  */
  readonly dcRouterId: string;
  /**
  * Description of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#description DcStaticRoute#description}
  */
  readonly description?: string;
  /**
  * IP address of gateway. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#gateway DcStaticRoute#gateway}
  */
  readonly gateway: string;
  /**
  * Metric to use for route. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#metric DcStaticRoute#metric}
  */
  readonly metric?: number;
  /**
  * Name of the static route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#name DcStaticRoute#name}
  */
  readonly name?: string;
  /**
  * Subnet in CIDR notation. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#network DcStaticRoute#network}
  */
  readonly network: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new static_route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#region DcStaticRoute#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route vkcs_dc_static_route}
*/
export class DcStaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_static_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcStaticRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcStaticRoute to import
  * @param importFromId The id of the existing DcStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcStaticRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_static_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_static_route vkcs_dc_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcStaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DcStaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_static_route',
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
    this._dcRouterId = config.dcRouterId;
    this._description = config.description;
    this._gateway = config.gateway;
    this._metric = config.metric;
    this._name = config.name;
    this._network = config.network;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_router_id - computed: false, optional: false, required: true
  private _dcRouterId?: string; 
  public get dcRouterId() {
    return this.getStringAttribute('dc_router_id');
  }
  public set dcRouterId(value: string) {
    this._dcRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcRouterIdInput() {
    return this._dcRouterId;
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

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dc_router_id: cdktf.stringToTerraform(this._dcRouterId),
      description: cdktf.stringToTerraform(this._description),
      gateway: cdktf.stringToTerraform(this._gateway),
      metric: cdktf.numberToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dc_router_id: {
        value: cdktf.stringToHclTerraform(this._dcRouterId),
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
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
