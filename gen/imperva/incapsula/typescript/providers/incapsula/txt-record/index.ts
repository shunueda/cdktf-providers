// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TxtRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#id TxtRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#site_id TxtRecord#site_id}
  */
  readonly siteId: number;
  /**
  * New value for txt record number five.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#txt_record_value_five TxtRecord#txt_record_value_five}
  */
  readonly txtRecordValueFive?: string;
  /**
  * New value for txt record number four.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#txt_record_value_four TxtRecord#txt_record_value_four}
  */
  readonly txtRecordValueFour?: string;
  /**
  * New value for txt record number one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#txt_record_value_one TxtRecord#txt_record_value_one}
  */
  readonly txtRecordValueOne?: string;
  /**
  * New value for txt record number three.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#txt_record_value_three TxtRecord#txt_record_value_three}
  */
  readonly txtRecordValueThree?: string;
  /**
  * New value for txt record number two.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#txt_record_value_two TxtRecord#txt_record_value_two}
  */
  readonly txtRecordValueTwo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record incapsula_txt_record}
*/
export class TxtRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_txt_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TxtRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TxtRecord to import
  * @param importFromId The id of the existing TxtRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TxtRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_txt_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/txt_record incapsula_txt_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TxtRecordConfig
  */
  public constructor(scope: Construct, id: string, config: TxtRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_txt_record',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
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
    this._siteId = config.siteId;
    this._txtRecordValueFive = config.txtRecordValueFive;
    this._txtRecordValueFour = config.txtRecordValueFour;
    this._txtRecordValueOne = config.txtRecordValueOne;
    this._txtRecordValueThree = config.txtRecordValueThree;
    this._txtRecordValueTwo = config.txtRecordValueTwo;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // txt_record_value_five - computed: false, optional: true, required: false
  private _txtRecordValueFive?: string; 
  public get txtRecordValueFive() {
    return this.getStringAttribute('txt_record_value_five');
  }
  public set txtRecordValueFive(value: string) {
    this._txtRecordValueFive = value;
  }
  public resetTxtRecordValueFive() {
    this._txtRecordValueFive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordValueFiveInput() {
    return this._txtRecordValueFive;
  }

  // txt_record_value_four - computed: false, optional: true, required: false
  private _txtRecordValueFour?: string; 
  public get txtRecordValueFour() {
    return this.getStringAttribute('txt_record_value_four');
  }
  public set txtRecordValueFour(value: string) {
    this._txtRecordValueFour = value;
  }
  public resetTxtRecordValueFour() {
    this._txtRecordValueFour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordValueFourInput() {
    return this._txtRecordValueFour;
  }

  // txt_record_value_one - computed: false, optional: true, required: false
  private _txtRecordValueOne?: string; 
  public get txtRecordValueOne() {
    return this.getStringAttribute('txt_record_value_one');
  }
  public set txtRecordValueOne(value: string) {
    this._txtRecordValueOne = value;
  }
  public resetTxtRecordValueOne() {
    this._txtRecordValueOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordValueOneInput() {
    return this._txtRecordValueOne;
  }

  // txt_record_value_three - computed: false, optional: true, required: false
  private _txtRecordValueThree?: string; 
  public get txtRecordValueThree() {
    return this.getStringAttribute('txt_record_value_three');
  }
  public set txtRecordValueThree(value: string) {
    this._txtRecordValueThree = value;
  }
  public resetTxtRecordValueThree() {
    this._txtRecordValueThree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordValueThreeInput() {
    return this._txtRecordValueThree;
  }

  // txt_record_value_two - computed: false, optional: true, required: false
  private _txtRecordValueTwo?: string; 
  public get txtRecordValueTwo() {
    return this.getStringAttribute('txt_record_value_two');
  }
  public set txtRecordValueTwo(value: string) {
    this._txtRecordValueTwo = value;
  }
  public resetTxtRecordValueTwo() {
    this._txtRecordValueTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordValueTwoInput() {
    return this._txtRecordValueTwo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.numberToTerraform(this._siteId),
      txt_record_value_five: cdktf.stringToTerraform(this._txtRecordValueFive),
      txt_record_value_four: cdktf.stringToTerraform(this._txtRecordValueFour),
      txt_record_value_one: cdktf.stringToTerraform(this._txtRecordValueOne),
      txt_record_value_three: cdktf.stringToTerraform(this._txtRecordValueThree),
      txt_record_value_two: cdktf.stringToTerraform(this._txtRecordValueTwo),
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
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txt_record_value_five: {
        value: cdktf.stringToHclTerraform(this._txtRecordValueFive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txt_record_value_four: {
        value: cdktf.stringToHclTerraform(this._txtRecordValueFour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txt_record_value_one: {
        value: cdktf.stringToHclTerraform(this._txtRecordValueOne),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txt_record_value_three: {
        value: cdktf.stringToHclTerraform(this._txtRecordValueThree),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txt_record_value_two: {
        value: cdktf.stringToHclTerraform(this._txtRecordValueTwo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
