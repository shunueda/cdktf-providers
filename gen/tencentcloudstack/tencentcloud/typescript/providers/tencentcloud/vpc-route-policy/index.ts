// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRoutePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy#id VpcRoutePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing policy description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy#route_policy_description VpcRoutePolicy#route_policy_description}
  */
  readonly routePolicyDescription: string;
  /**
  * Specifies the routing strategy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy#route_policy_name VpcRoutePolicy#route_policy_name}
  */
  readonly routePolicyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy tencentcloud_vpc_route_policy}
*/
export class VpcRoutePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_route_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRoutePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRoutePolicy to import
  * @param importFromId The id of the existing VpcRoutePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRoutePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_route_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy tencentcloud_vpc_route_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRoutePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRoutePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_route_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._routePolicyDescription = config.routePolicyDescription;
    this._routePolicyName = config.routePolicyName;
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

  // route_policy_description - computed: false, optional: false, required: true
  private _routePolicyDescription?: string; 
  public get routePolicyDescription() {
    return this.getStringAttribute('route_policy_description');
  }
  public set routePolicyDescription(value: string) {
    this._routePolicyDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyDescriptionInput() {
    return this._routePolicyDescription;
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // route_policy_name - computed: false, optional: false, required: true
  private _routePolicyName?: string; 
  public get routePolicyName() {
    return this.getStringAttribute('route_policy_name');
  }
  public set routePolicyName(value: string) {
    this._routePolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyNameInput() {
    return this._routePolicyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      route_policy_description: cdktf.stringToTerraform(this._routePolicyDescription),
      route_policy_name: cdktf.stringToTerraform(this._routePolicyName),
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
      route_policy_description: {
        value: cdktf.stringToHclTerraform(this._routePolicyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_name: {
        value: cdktf.stringToHclTerraform(this._routePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
