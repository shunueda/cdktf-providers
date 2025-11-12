// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementWhereUsedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to dereference "members" field by details level for every object in reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#dereference_group_members ManagementWhereUsed#dereference_group_members}
  */
  readonly dereferenceGroupMembers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#id ManagementWhereUsed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search for indirect usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#indirect ManagementWhereUsed#indirect}
  */
  readonly indirect?: boolean | cdktf.IResolvable;
  /**
  * Maximum nesting level during indirect usage search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#indirect_max_depth ManagementWhereUsed#indirect_max_depth}
  */
  readonly indirectMaxDepth?: number;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#name ManagementWhereUsed#name}
  */
  readonly name: string;
  /**
  * Indicates whether to calculate and show "groups" field for every object in reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#show_membership ManagementWhereUsed#show_membership}
  */
  readonly showMembership?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used checkpoint_management_where_used}
*/
export class ManagementWhereUsed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_where_used";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementWhereUsed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementWhereUsed to import
  * @param importFromId The id of the existing ManagementWhereUsed that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementWhereUsed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_where_used", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_where_used checkpoint_management_where_used} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementWhereUsedConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementWhereUsedConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_where_used',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dereferenceGroupMembers = config.dereferenceGroupMembers;
    this._id = config.id;
    this._indirect = config.indirect;
    this._indirectMaxDepth = config.indirectMaxDepth;
    this._name = config.name;
    this._showMembership = config.showMembership;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dereference_group_members - computed: false, optional: true, required: false
  private _dereferenceGroupMembers?: boolean | cdktf.IResolvable; 
  public get dereferenceGroupMembers() {
    return this.getBooleanAttribute('dereference_group_members');
  }
  public set dereferenceGroupMembers(value: boolean | cdktf.IResolvable) {
    this._dereferenceGroupMembers = value;
  }
  public resetDereferenceGroupMembers() {
    this._dereferenceGroupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceGroupMembersInput() {
    return this._dereferenceGroupMembers;
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

  // indirect - computed: false, optional: true, required: false
  private _indirect?: boolean | cdktf.IResolvable; 
  public get indirect() {
    return this.getBooleanAttribute('indirect');
  }
  public set indirect(value: boolean | cdktf.IResolvable) {
    this._indirect = value;
  }
  public resetIndirect() {
    this._indirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indirectInput() {
    return this._indirect;
  }

  // indirect_max_depth - computed: false, optional: true, required: false
  private _indirectMaxDepth?: number; 
  public get indirectMaxDepth() {
    return this.getNumberAttribute('indirect_max_depth');
  }
  public set indirectMaxDepth(value: number) {
    this._indirectMaxDepth = value;
  }
  public resetIndirectMaxDepth() {
    this._indirectMaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indirectMaxDepthInput() {
    return this._indirectMaxDepth;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // show_membership - computed: false, optional: true, required: false
  private _showMembership?: boolean | cdktf.IResolvable; 
  public get showMembership() {
    return this.getBooleanAttribute('show_membership');
  }
  public set showMembership(value: boolean | cdktf.IResolvable) {
    this._showMembership = value;
  }
  public resetShowMembership() {
    this._showMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMembershipInput() {
    return this._showMembership;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dereference_group_members: cdktf.booleanToTerraform(this._dereferenceGroupMembers),
      id: cdktf.stringToTerraform(this._id),
      indirect: cdktf.booleanToTerraform(this._indirect),
      indirect_max_depth: cdktf.numberToTerraform(this._indirectMaxDepth),
      name: cdktf.stringToTerraform(this._name),
      show_membership: cdktf.booleanToTerraform(this._showMembership),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dereference_group_members: {
        value: cdktf.booleanToHclTerraform(this._dereferenceGroupMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indirect: {
        value: cdktf.booleanToHclTerraform(this._indirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      indirect_max_depth: {
        value: cdktf.numberToHclTerraform(this._indirectMaxDepth),
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
      show_membership: {
        value: cdktf.booleanToHclTerraform(this._showMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
