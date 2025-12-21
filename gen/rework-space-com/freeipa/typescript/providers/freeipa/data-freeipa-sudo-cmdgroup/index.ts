// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/sudo_cmdgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaSudoCmdgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the sudo command group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/sudo_cmdgroup#name DataFreeipaSudoCmdgroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/sudo_cmdgroup freeipa_sudo_cmdgroup}
*/
export class DataFreeipaSudoCmdgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_cmdgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaSudoCmdgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaSudoCmdgroup to import
  * @param importFromId The id of the existing DataFreeipaSudoCmdgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/sudo_cmdgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaSudoCmdgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_cmdgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/sudo_cmdgroup freeipa_sudo_cmdgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaSudoCmdgroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaSudoCmdgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_cmdgroup',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_sudocmd - computed: true, optional: false, required: false
  public get memberSudocmd() {
    return this.getListAttribute('member_sudocmd');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
