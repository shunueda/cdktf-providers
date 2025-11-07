// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdbDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Custom DB into which creating the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#custom_db CdbData#custom_db}
  */
  readonly customDb: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#id CdbData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The value 1 (key of the data)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value1 CdbData#value1}
  */
  readonly value1: string;
  /**
  * The value 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value10 CdbData#value10}
  */
  readonly value10?: string;
  /**
  * The value 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value2 CdbData#value2}
  */
  readonly value2?: string;
  /**
  * The value 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value3 CdbData#value3}
  */
  readonly value3?: string;
  /**
  * The value 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value4 CdbData#value4}
  */
  readonly value4?: string;
  /**
  * The value 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value5 CdbData#value5}
  */
  readonly value5?: string;
  /**
  * The value 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value6 CdbData#value6}
  */
  readonly value6?: string;
  /**
  * The value 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value7 CdbData#value7}
  */
  readonly value7?: string;
  /**
  * The value 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value8 CdbData#value8}
  */
  readonly value8?: string;
  /**
  * The value 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#value9 CdbData#value9}
  */
  readonly value9?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data solidserver_cdb_data}
*/
export class CdbData extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_cdb_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdbData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdbData to import
  * @param importFromId The id of the existing CdbData that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdbData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_cdb_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/cdb_data solidserver_cdb_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdbDataConfig
  */
  public constructor(scope: Construct, id: string, config: CdbDataConfig) {
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
    this._value10 = config.value10;
    this._value2 = config.value2;
    this._value3 = config.value3;
    this._value4 = config.value4;
    this._value5 = config.value5;
    this._value6 = config.value6;
    this._value7 = config.value7;
    this._value8 = config.value8;
    this._value9 = config.value9;
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

  // value10 - computed: false, optional: true, required: false
  private _value10?: string; 
  public get value10() {
    return this.getStringAttribute('value10');
  }
  public set value10(value: string) {
    this._value10 = value;
  }
  public resetValue10() {
    this._value10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value10Input() {
    return this._value10;
  }

  // value2 - computed: false, optional: true, required: false
  private _value2?: string; 
  public get value2() {
    return this.getStringAttribute('value2');
  }
  public set value2(value: string) {
    this._value2 = value;
  }
  public resetValue2() {
    this._value2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value2Input() {
    return this._value2;
  }

  // value3 - computed: false, optional: true, required: false
  private _value3?: string; 
  public get value3() {
    return this.getStringAttribute('value3');
  }
  public set value3(value: string) {
    this._value3 = value;
  }
  public resetValue3() {
    this._value3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value3Input() {
    return this._value3;
  }

  // value4 - computed: false, optional: true, required: false
  private _value4?: string; 
  public get value4() {
    return this.getStringAttribute('value4');
  }
  public set value4(value: string) {
    this._value4 = value;
  }
  public resetValue4() {
    this._value4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value4Input() {
    return this._value4;
  }

  // value5 - computed: false, optional: true, required: false
  private _value5?: string; 
  public get value5() {
    return this.getStringAttribute('value5');
  }
  public set value5(value: string) {
    this._value5 = value;
  }
  public resetValue5() {
    this._value5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value5Input() {
    return this._value5;
  }

  // value6 - computed: false, optional: true, required: false
  private _value6?: string; 
  public get value6() {
    return this.getStringAttribute('value6');
  }
  public set value6(value: string) {
    this._value6 = value;
  }
  public resetValue6() {
    this._value6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value6Input() {
    return this._value6;
  }

  // value7 - computed: false, optional: true, required: false
  private _value7?: string; 
  public get value7() {
    return this.getStringAttribute('value7');
  }
  public set value7(value: string) {
    this._value7 = value;
  }
  public resetValue7() {
    this._value7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value7Input() {
    return this._value7;
  }

  // value8 - computed: false, optional: true, required: false
  private _value8?: string; 
  public get value8() {
    return this.getStringAttribute('value8');
  }
  public set value8(value: string) {
    this._value8 = value;
  }
  public resetValue8() {
    this._value8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value8Input() {
    return this._value8;
  }

  // value9 - computed: false, optional: true, required: false
  private _value9?: string; 
  public get value9() {
    return this.getStringAttribute('value9');
  }
  public set value9(value: string) {
    this._value9 = value;
  }
  public resetValue9() {
    this._value9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value9Input() {
    return this._value9;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_db: cdktf.stringToTerraform(this._customDb),
      id: cdktf.stringToTerraform(this._id),
      value1: cdktf.stringToTerraform(this._value1),
      value10: cdktf.stringToTerraform(this._value10),
      value2: cdktf.stringToTerraform(this._value2),
      value3: cdktf.stringToTerraform(this._value3),
      value4: cdktf.stringToTerraform(this._value4),
      value5: cdktf.stringToTerraform(this._value5),
      value6: cdktf.stringToTerraform(this._value6),
      value7: cdktf.stringToTerraform(this._value7),
      value8: cdktf.stringToTerraform(this._value8),
      value9: cdktf.stringToTerraform(this._value9),
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
      value10: {
        value: cdktf.stringToHclTerraform(this._value10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value2: {
        value: cdktf.stringToHclTerraform(this._value2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value3: {
        value: cdktf.stringToHclTerraform(this._value3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value4: {
        value: cdktf.stringToHclTerraform(this._value4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value5: {
        value: cdktf.stringToHclTerraform(this._value5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value6: {
        value: cdktf.stringToHclTerraform(this._value6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value7: {
        value: cdktf.stringToHclTerraform(this._value7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value8: {
        value: cdktf.stringToHclTerraform(this._value8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value9: {
        value: cdktf.stringToHclTerraform(this._value9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
