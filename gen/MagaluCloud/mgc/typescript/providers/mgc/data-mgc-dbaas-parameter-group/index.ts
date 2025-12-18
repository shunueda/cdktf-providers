// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/dbaas_parameter_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcDbaasParameterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the parameter group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/dbaas_parameter_group#id DataMgcDbaasParameterGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/dbaas_parameter_group mgc_dbaas_parameter_group}
*/
export class DataMgcDbaasParameterGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_parameter_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcDbaasParameterGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcDbaasParameterGroup to import
  * @param importFromId The id of the existing DataMgcDbaasParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/dbaas_parameter_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcDbaasParameterGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_parameter_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/data-sources/dbaas_parameter_group mgc_dbaas_parameter_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcDbaasParameterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcDbaasParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
