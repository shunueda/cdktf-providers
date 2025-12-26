// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRoutePolicyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association#id VpcRoutePolicyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association#priority VpcRoutePolicyAssociation#priority}
  */
  readonly priority: number;
  /**
  * Specifies the unique ID of the route reception policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association#route_policy_id VpcRoutePolicyAssociation#route_policy_id}
  */
  readonly routePolicyId: string;
  /**
  * Unique route table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association#route_table_id VpcRoutePolicyAssociation#route_table_id}
  */
  readonly routeTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association tencentcloud_vpc_route_policy_association}
*/
export class VpcRoutePolicyAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_route_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRoutePolicyAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRoutePolicyAssociation to import
  * @param importFromId The id of the existing VpcRoutePolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRoutePolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_route_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_association tencentcloud_vpc_route_policy_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRoutePolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRoutePolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_route_policy_association',
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
    this._priority = config.priority;
    this._routePolicyId = config.routePolicyId;
    this._routeTableId = config.routeTableId;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_policy_id - computed: false, optional: false, required: true
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      route_policy_id: cdktf.stringToTerraform(this._routePolicyId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_policy_id: {
        value: cdktf.stringToHclTerraform(this._routePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
