// https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedshiftSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema#id DataRedshiftSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema#owner DataRedshiftSchema#owner}
  */
  readonly owner?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema#schema_name DataRedshiftSchema#schema_name}
  */
  readonly schemaName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema redshift_schema}
*/
export class DataRedshiftSchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedshiftSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedshiftSchema to import
  * @param importFromId The id of the existing DataRedshiftSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedshiftSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/data-sources/schema redshift_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedshiftSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataRedshiftSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_schema',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '0.0.4'
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
    this._owner = config.owner;
    this._schemaName = config.schemaName;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: number; 
  public get owner() {
    return this.getNumberAttribute('owner');
  }
  public set owner(value: number) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.numberToTerraform(this._owner),
      schema_name: cdktf.stringToTerraform(this._schemaName),
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
      owner: {
        value: cdktf.numberToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
