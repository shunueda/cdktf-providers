// https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#children Group#children}
  */
  readonly children?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#inventory_group_name Group#inventory_group_name}
  */
  readonly inventoryGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#variable_priority Group#variable_priority}
  */
  readonly variablePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#vars Group#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group ansible_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group ansible_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_group',
      terraformGeneratorMetadata: {
        providerName: 'ansible',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._children = config.children;
    this._id = config.id;
    this._inventoryGroupName = config.inventoryGroupName;
    this._variablePriority = config.variablePriority;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: false, optional: true, required: false
  private _children?: string[]; 
  public get children() {
    return this.getListAttribute('children');
  }
  public set children(value: string[]) {
    this._children = value;
  }
  public resetChildren() {
    this._children = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children;
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

  // inventory_group_name - computed: false, optional: false, required: true
  private _inventoryGroupName?: string; 
  public get inventoryGroupName() {
    return this.getStringAttribute('inventory_group_name');
  }
  public set inventoryGroupName(value: string) {
    this._inventoryGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryGroupNameInput() {
    return this._inventoryGroupName;
  }

  // variable_priority - computed: false, optional: true, required: false
  private _variablePriority?: number; 
  public get variablePriority() {
    return this.getNumberAttribute('variable_priority');
  }
  public set variablePriority(value: number) {
    this._variablePriority = value;
  }
  public resetVariablePriority() {
    this._variablePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablePriorityInput() {
    return this._variablePriority;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      children: cdktf.listMapper(cdktf.stringToTerraform, false)(this._children),
      id: cdktf.stringToTerraform(this._id),
      inventory_group_name: cdktf.stringToTerraform(this._inventoryGroupName),
      variable_priority: cdktf.numberToTerraform(this._variablePriority),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      children: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._children),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_group_name: {
        value: cdktf.stringToHclTerraform(this._inventoryGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_priority: {
        value: cdktf.numberToHclTerraform(this._variablePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
