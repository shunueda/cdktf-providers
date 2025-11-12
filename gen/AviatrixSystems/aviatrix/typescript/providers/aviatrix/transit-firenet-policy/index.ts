// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitFirenetPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy#id TransitFirenetPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource to be added to transit firenet policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy#inspected_resource_name TransitFirenetPolicy#inspected_resource_name}
  */
  readonly inspectedResourceName: string;
  /**
  * Name of the transit firenet gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy#transit_firenet_gateway_name TransitFirenetPolicy#transit_firenet_gateway_name}
  */
  readonly transitFirenetGatewayName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy aviatrix_transit_firenet_policy}
*/
export class TransitFirenetPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_firenet_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitFirenetPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitFirenetPolicy to import
  * @param importFromId The id of the existing TransitFirenetPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitFirenetPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_firenet_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_firenet_policy aviatrix_transit_firenet_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitFirenetPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TransitFirenetPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_firenet_policy',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
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
    this._inspectedResourceName = config.inspectedResourceName;
    this._transitFirenetGatewayName = config.transitFirenetGatewayName;
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

  // inspected_resource_name - computed: false, optional: false, required: true
  private _inspectedResourceName?: string; 
  public get inspectedResourceName() {
    return this.getStringAttribute('inspected_resource_name');
  }
  public set inspectedResourceName(value: string) {
    this._inspectedResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectedResourceNameInput() {
    return this._inspectedResourceName;
  }

  // transit_firenet_gateway_name - computed: false, optional: false, required: true
  private _transitFirenetGatewayName?: string; 
  public get transitFirenetGatewayName() {
    return this.getStringAttribute('transit_firenet_gateway_name');
  }
  public set transitFirenetGatewayName(value: string) {
    this._transitFirenetGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitFirenetGatewayNameInput() {
    return this._transitFirenetGatewayName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inspected_resource_name: cdktf.stringToTerraform(this._inspectedResourceName),
      transit_firenet_gateway_name: cdktf.stringToTerraform(this._transitFirenetGatewayName),
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
      inspected_resource_name: {
        value: cdktf.stringToHclTerraform(this._inspectedResourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_firenet_gateway_name: {
        value: cdktf.stringToHclTerraform(this._transitFirenetGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
