// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolidserverCdbDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the custom DB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data#custom_db DataSolidserverCdbData#custom_db}
  */
  readonly customDb: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data#id DataSolidserverCdbData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the value 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data#value1 DataSolidserverCdbData#value1}
  */
  readonly value1: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data solidserver_cdb_data}
*/
export class DataSolidserverCdbData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_cdb_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolidserverCdbData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolidserverCdbData to import
  * @param importFromId The id of the existing DataSolidserverCdbData that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolidserverCdbData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_cdb_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/cdb_data solidserver_cdb_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolidserverCdbDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolidserverCdbDataConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_cdb_data',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDb = config.customDb;
    this._id = config.id;
    this._value1 = config.value1;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_db - computed: false, optional: false, required: true
  private _customDb?: string; 
  public get customDb() {
    return this.getStringAttribute('custom_db');
  }
  public set customDb(value: string) {
    this._customDb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDbInput() {
    return this._customDb;
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

  // value1 - computed: false, optional: false, required: true
  private _value1?: string; 
  public get value1() {
    return this.getStringAttribute('value1');
  }
  public set value1(value: string) {
    this._value1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get value1Input() {
    return this._value1;
  }

  // value10 - computed: true, optional: false, required: false
  public get value10() {
    return this.getStringAttribute('value10');
  }

  // value2 - computed: true, optional: false, required: false
  public get value2() {
    return this.getStringAttribute('value2');
  }

  // value3 - computed: true, optional: false, required: false
  public get value3() {
    return this.getStringAttribute('value3');
  }

  // value4 - computed: true, optional: false, required: false
  public get value4() {
    return this.getStringAttribute('value4');
  }

  // value5 - computed: true, optional: false, required: false
  public get value5() {
    return this.getStringAttribute('value5');
  }

  // value6 - computed: true, optional: false, required: false
  public get value6() {
    return this.getStringAttribute('value6');
  }

  // value7 - computed: true, optional: false, required: false
  public get value7() {
    return this.getStringAttribute('value7');
  }

  // value8 - computed: true, optional: false, required: false
  public get value8() {
    return this.getStringAttribute('value8');
  }

  // value9 - computed: true, optional: false, required: false
  public get value9() {
    return this.getStringAttribute('value9');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_db: cdktf.stringToTerraform(this._customDb),
      id: cdktf.stringToTerraform(this._id),
      value1: cdktf.stringToTerraform(this._value1),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_db: {
        value: cdktf.stringToHclTerraform(this._customDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value1: {
        value: cdktf.stringToHclTerraform(this._value1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
