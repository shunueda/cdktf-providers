// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyRetrospectiveProcessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group#sub_status_id DataRootlyRetrospectiveProcessGroup#sub_status_id}
  */
  readonly subStatusId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group rootly_retrospective_process_group}
*/
export class DataRootlyRetrospectiveProcessGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_process_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyRetrospectiveProcessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyRetrospectiveProcessGroup to import
  * @param importFromId The id of the existing DataRootlyRetrospectiveProcessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyRetrospectiveProcessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_process_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group rootly_retrospective_process_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyRetrospectiveProcessGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyRetrospectiveProcessGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_process_group',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
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
    this._subStatusId = config.subStatusId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sub_status_id - computed: true, optional: true, required: false
  private _subStatusId?: string; 
  public get subStatusId() {
    return this.getStringAttribute('sub_status_id');
  }
  public set subStatusId(value: string) {
    this._subStatusId = value;
  }
  public resetSubStatusId() {
    this._subStatusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdInput() {
    return this._subStatusId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sub_status_id: cdktf.stringToTerraform(this._subStatusId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sub_status_id: {
        value: cdktf.stringToHclTerraform(this._subStatusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
