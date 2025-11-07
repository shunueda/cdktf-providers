// https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of groups where the host will be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host#groups Host#groups}
  */
  readonly groups?: string[];
  /**
  * The host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host#name Host#name}
  */
  readonly name: string;
  /**
  * The SSH port that will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host#port Host#port}
  */
  readonly port?: number;
  /**
  * Map of variables that will be set to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host#variables Host#variables}
  */
  readonly variables?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host ansible_host}
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
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/host ansible_host} Resource
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
        providerVersion: '2.0.4'
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
    this._name = config.name;
    this._port = config.port;
    this._variables = config.variables;
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

  // inventory_path - computed: true, optional: false, required: false
  public get inventoryPath() {
    return this.getStringAttribute('inventory_path');
  }

  // inventory_sha256_sum - computed: true, optional: false, required: false
  public get inventorySha256Sum() {
    return this.getStringAttribute('inventory_sha256_sum');
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
