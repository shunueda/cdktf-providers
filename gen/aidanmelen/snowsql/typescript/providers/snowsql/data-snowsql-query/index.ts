// https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowsqlQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query#id DataSnowsqlQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the data resource. Defaults to random ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query#name DataSnowsqlQuery#name}
  */
  readonly name?: string;
  /**
  * The number of SnowSQL statements to be executed. This can help reduce the risk of SQL injection attacks. Defaults to `null` indicating that there is no limit on the number of statements (`0` and `-1` also indicate no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query#number_of_statements DataSnowsqlQuery#number_of_statements}
  */
  readonly numberOfStatements?: number;
  /**
  * A string containing one or many SnowSQL statements separated by semicolons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query#statements DataSnowsqlQuery#statements}
  */
  readonly statements: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query snowsql_query}
*/
export class DataSnowsqlQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowsql_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowsqlQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowsqlQuery to import
  * @param importFromId The id of the existing DataSnowsqlQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowsqlQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowsql_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aidanmelen/snowsql/1.3.3/docs/data-sources/query snowsql_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowsqlQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowsqlQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'snowsql_query',
      terraformGeneratorMetadata: {
        providerName: 'snowsql',
        providerVersion: '1.3.3'
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
    this._name = config.name;
    this._numberOfStatements = config.numberOfStatements;
    this._statements = config.statements;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number_of_statements - computed: true, optional: true, required: false
  private _numberOfStatements?: number; 
  public get numberOfStatements() {
    return this.getNumberAttribute('number_of_statements');
  }
  public set numberOfStatements(value: number) {
    this._numberOfStatements = value;
  }
  public resetNumberOfStatements() {
    this._numberOfStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStatementsInput() {
    return this._numberOfStatements;
  }

  // results - computed: true, optional: false, required: false
  public get results() {
    return this.getStringAttribute('results');
  }

  // statements - computed: false, optional: false, required: true
  private _statements?: string; 
  public get statements() {
    return this.getStringAttribute('statements');
  }
  public set statements(value: string) {
    this._statements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      number_of_statements: cdktf.numberToTerraform(this._numberOfStatements),
      statements: cdktf.stringToTerraform(this._statements),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_statements: {
        value: cdktf.numberToHclTerraform(this._numberOfStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statements: {
        value: cdktf.stringToHclTerraform(this._statements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
