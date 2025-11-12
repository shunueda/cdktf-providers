// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupComponentOrderingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Component IDs in this Group, listed in the exact order they will appear under the Group.
  * 
  * ~> This list **must not** omit nor add any Components not already in the referenced Group, or an error will occur. This resource is **only** for managing an order for the Components of a Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering#components GroupComponentOrdering#components}
  */
  readonly components?: string[];
  /**
  * The Group whose ordering is managed by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering#group GroupComponentOrdering#group}
  */
  readonly group: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering hund_group_component_ordering}
*/
export class GroupComponentOrdering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_group_component_ordering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupComponentOrdering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupComponentOrdering to import
  * @param importFromId The id of the existing GroupComponentOrdering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupComponentOrdering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_group_component_ordering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group_component_ordering hund_group_component_ordering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupComponentOrderingConfig
  */
  public constructor(scope: Construct, id: string, config: GroupComponentOrderingConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_group_component_ordering',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._components = config.components;
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: true, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      group: cdktf.stringToTerraform(this._group),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
