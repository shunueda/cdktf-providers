// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlacementGroupAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment#compliant_only PlacementGroupAssignment#compliant_only}
  */
  readonly compliantOnly?: boolean | cdktf.IResolvable;
  /**
  * A set of Linode IDs to assign to the Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment#linode_id PlacementGroupAssignment#linode_id}
  */
  readonly linodeId: number;
  /**
  * The ID of the Placement Group for this assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment#placement_group_id PlacementGroupAssignment#placement_group_id}
  */
  readonly placementGroupId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment linode_placement_group_assignment}
*/
export class PlacementGroupAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_placement_group_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlacementGroupAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlacementGroupAssignment to import
  * @param importFromId The id of the existing PlacementGroupAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlacementGroupAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_placement_group_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/placement_group_assignment linode_placement_group_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlacementGroupAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: PlacementGroupAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_placement_group_assignment',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compliantOnly = config.compliantOnly;
    this._linodeId = config.linodeId;
    this._placementGroupId = config.placementGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliant_only - computed: false, optional: true, required: false
  private _compliantOnly?: boolean | cdktf.IResolvable; 
  public get compliantOnly() {
    return this.getBooleanAttribute('compliant_only');
  }
  public set compliantOnly(value: boolean | cdktf.IResolvable) {
    this._compliantOnly = value;
  }
  public resetCompliantOnly() {
    this._compliantOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliantOnlyInput() {
    return this._compliantOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linode_id - computed: false, optional: false, required: true
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // placement_group_id - computed: false, optional: false, required: true
  private _placementGroupId?: number; 
  public get placementGroupId() {
    return this.getNumberAttribute('placement_group_id');
  }
  public set placementGroupId(value: number) {
    this._placementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliant_only: cdktf.booleanToTerraform(this._compliantOnly),
      linode_id: cdktf.numberToTerraform(this._linodeId),
      placement_group_id: cdktf.numberToTerraform(this._placementGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliant_only: {
        value: cdktf.booleanToHclTerraform(this._compliantOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      placement_group_id: {
        value: cdktf.numberToHclTerraform(this._placementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
