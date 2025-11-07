// https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostVarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#id HostVar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#inventory_hostname HostVar#inventory_hostname}
  */
  readonly inventoryHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#key HostVar#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#value HostVar#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#variable_priority HostVar#variable_priority}
  */
  readonly variablePriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var ansible_host_var}
*/
export class HostVar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_host_var";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostVar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostVar to import
  * @param importFromId The id of the existing HostVar that should be imported. Refer to the {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostVar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_host_var", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host_var ansible_host_var} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostVarConfig
  */
  public constructor(scope: Construct, id: string, config: HostVarConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_host_var',
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
    this._id = config.id;
    this._inventoryHostname = config.inventoryHostname;
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

  // inventory_hostname - computed: false, optional: false, required: true
  private _inventoryHostname?: string; 
  public get inventoryHostname() {
    return this.getStringAttribute('inventory_hostname');
  }
  public set inventoryHostname(value: string) {
    this._inventoryHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryHostnameInput() {
    return this._inventoryHostname;
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
      inventory_hostname: cdktf.stringToTerraform(this._inventoryHostname),
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
      inventory_hostname: {
        value: cdktf.stringToHclTerraform(this._inventoryHostname),
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
