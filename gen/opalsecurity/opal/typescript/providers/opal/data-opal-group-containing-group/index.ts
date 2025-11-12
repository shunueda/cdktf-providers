// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalGroupContainingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the containing group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group#containing_group_id DataOpalGroupContainingGroup#containing_group_id}
  */
  readonly containingGroupId: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group#group_id DataOpalGroupContainingGroup#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group opal_group_containing_group}
*/
export class DataOpalGroupContainingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_containing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalGroupContainingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalGroupContainingGroup to import
  * @param importFromId The id of the existing DataOpalGroupContainingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalGroupContainingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_containing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/group_containing_group opal_group_containing_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalGroupContainingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalGroupContainingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_containing_group',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containingGroupId = config.containingGroupId;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // containing_group_id - computed: false, optional: false, required: true
  private _containingGroupId?: string; 
  public get containingGroupId() {
    return this.getStringAttribute('containing_group_id');
  }
  public set containingGroupId(value: string) {
    this._containingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containingGroupIdInput() {
    return this._containingGroupId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      containing_group_id: cdktf.stringToTerraform(this._containingGroupId),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      containing_group_id: {
        value: cdktf.stringToHclTerraform(this._containingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
