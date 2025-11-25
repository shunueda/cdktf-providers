// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaDlpEnginesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the DLP engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines#id DataZiaDlpEngines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The DLP engine name as configured by the admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines#name DataZiaDlpEngines#name}
  */
  readonly name?: string;
  /**
  * The name of the predefined DLP engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines#predefined_engine_name DataZiaDlpEngines#predefined_engine_name}
  */
  readonly predefinedEngineName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines zia_dlp_engines}
*/
export class DataZiaDlpEngines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_engines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaDlpEngines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaDlpEngines to import
  * @param importFromId The id of the existing DataZiaDlpEngines that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaDlpEngines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_engines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_engines zia_dlp_engines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaDlpEnginesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaDlpEnginesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_engines',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
    this._predefinedEngineName = config.predefinedEngineName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_dlp_engine - computed: true, optional: false, required: false
  public get customDlpEngine() {
    return this.getBooleanAttribute('custom_dlp_engine');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_expression - computed: true, optional: false, required: false
  public get engineExpression() {
    return this.getStringAttribute('engine_expression');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // predefined_engine_name - computed: false, optional: true, required: false
  private _predefinedEngineName?: string; 
  public get predefinedEngineName() {
    return this.getStringAttribute('predefined_engine_name');
  }
  public set predefinedEngineName(value: string) {
    this._predefinedEngineName = value;
  }
  public resetPredefinedEngineName() {
    this._predefinedEngineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedEngineNameInput() {
    return this._predefinedEngineName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      predefined_engine_name: cdktf.stringToTerraform(this._predefinedEngineName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predefined_engine_name: {
        value: cdktf.stringToHclTerraform(this._predefinedEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
