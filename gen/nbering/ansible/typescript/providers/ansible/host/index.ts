// https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#groups Host#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#id Host#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#inventory_hostname Host#inventory_hostname}
  */
  readonly inventoryHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#variable_priority Host#variable_priority}
  */
  readonly variablePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#vars Host#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host ansible_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nbering/ansible/1.0.4/docs/resources/host ansible_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_host',
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
    this._groups = config.groups;
    this._id = config.id;
    this._inventoryHostname = config.inventoryHostname;
    this._variablePriority = config.variablePriority;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      inventory_hostname: cdktf.stringToTerraform(this._inventoryHostname),
      variable_priority: cdktf.numberToTerraform(this._variablePriority),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
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
      inventory_hostname: {
        value: cdktf.stringToHclTerraform(this._inventoryHostname),
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
