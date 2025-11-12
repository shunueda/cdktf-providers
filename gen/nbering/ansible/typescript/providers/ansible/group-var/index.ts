// https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupVarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#id GroupVar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#inventory_group_name GroupVar#inventory_group_name}
  */
  readonly inventoryGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#key GroupVar#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#value GroupVar#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#variable_priority GroupVar#variable_priority}
  */
  readonly variablePriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var ansible_group_var}
*/
export class GroupVar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_group_var";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupVar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupVar to import
  * @param importFromId The id of the existing GroupVar that should be imported. Refer to the {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupVar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_group_var", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/group_var ansible_group_var} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupVarConfig
  */
  public constructor(scope: Construct, id: string, config: GroupVarConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_group_var',
      terraformGeneratorMetadata: {
        providerName: 'ansible',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
    this._inventoryGroupName = config.inventoryGroupName;
    this._key = config.key;
    this._value = config.value;
    this._variablePriority = config.variablePriority;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inventory_group_name: cdktf.stringToTerraform(this._inventoryGroupName),
      key: cdktf.stringToTerraform(this._key),
      value: cdktf.stringToTerraform(this._value),
      variable_priority: cdktf.numberToTerraform(this._variablePriority),
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
      inventory_group_name: {
        value: cdktf.stringToHclTerraform(this._inventoryGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
