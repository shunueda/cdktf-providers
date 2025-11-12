// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hostgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaHostgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostgroup name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hostgroup#name DataFreeipaHostgroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hostgroup freeipa_hostgroup}
*/
export class DataFreeipaHostgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hostgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaHostgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaHostgroup to import
  * @param importFromId The id of the existing DataFreeipaHostgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hostgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaHostgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hostgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/data-sources/hostgroup freeipa_hostgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaHostgroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaHostgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hostgroup',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3',
        providerVersionConstraint: '5.1.3'
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

  // member_host - computed: true, optional: false, required: false
  public get memberHost() {
    return this.getListAttribute('member_host');
  }

  // member_hostgroup - computed: true, optional: false, required: false
  public get memberHostgroup() {
    return this.getListAttribute('member_hostgroup');
  }

  // member_indirect_host - computed: true, optional: false, required: false
  public get memberIndirectHost() {
    return this.getListAttribute('member_indirect_host');
  }

  // member_indirect_hostgroup - computed: true, optional: false, required: false
  public get memberIndirectHostgroup() {
    return this.getListAttribute('member_indirect_hostgroup');
  }

  // memberof_hbacrule - computed: true, optional: false, required: false
  public get memberofHbacrule() {
    return this.getListAttribute('memberof_hbacrule');
  }

  // memberof_hostgroup - computed: true, optional: false, required: false
  public get memberofHostgroup() {
    return this.getListAttribute('memberof_hostgroup');
  }

  // memberof_indirect_hbacrule - computed: true, optional: false, required: false
  public get memberofIndirectHbacrule() {
    return this.getListAttribute('memberof_indirect_hbacrule');
  }

  // memberof_indirect_hostgroup - computed: true, optional: false, required: false
  public get memberofIndirectHostgroup() {
    return this.getListAttribute('memberof_indirect_hostgroup');
  }

  // memberof_indirect_sudorule - computed: true, optional: false, required: false
  public get memberofIndirectSudorule() {
    return this.getListAttribute('memberof_indirect_sudorule');
  }

  // memberof_sudorule - computed: true, optional: false, required: false
  public get memberofSudorule() {
    return this.getListAttribute('memberof_sudorule');
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
