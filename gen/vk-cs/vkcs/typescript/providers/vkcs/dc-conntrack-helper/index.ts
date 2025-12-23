// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcConntrackHelperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Direct Connect Router ID. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#dc_router_id DcConntrackHelper#dc_router_id}
  */
  readonly dcRouterId: string;
  /**
  * Description of the conntrack helper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#description DcConntrackHelper#description}
  */
  readonly description?: string;
  /**
  * Helper type. Must be one of: "ftp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#helper DcConntrackHelper#helper}
  */
  readonly helper: string;
  /**
  * Name of the conntrack helper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#name DcConntrackHelper#name}
  */
  readonly name?: string;
  /**
  * Network port for conntrack target rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#port DcConntrackHelper#port}
  */
  readonly port: number;
  /**
  * Protocol. Must be one of: "tcp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#protocol DcConntrackHelper#protocol}
  */
  readonly protocol: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new conntrack_helper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#region DcConntrackHelper#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper vkcs_dc_conntrack_helper}
*/
export class DcConntrackHelper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_conntrack_helper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcConntrackHelper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcConntrackHelper to import
  * @param importFromId The id of the existing DcConntrackHelper that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcConntrackHelper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_conntrack_helper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/dc_conntrack_helper vkcs_dc_conntrack_helper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcConntrackHelperConfig
  */
  public constructor(scope: Construct, id: string, config: DcConntrackHelperConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_conntrack_helper',
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
    this._helper = config.helper;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
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

  // helper - computed: false, optional: false, required: true
  private _helper?: string; 
  public get helper() {
    return this.getStringAttribute('helper');
  }
  public set helper(value: string) {
    this._helper = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helperInput() {
    return this._helper;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
      helper: cdktf.stringToTerraform(this._helper),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
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
      helper: {
        value: cdktf.stringToHclTerraform(this._helper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
