// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpEnginesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether this is a custom DLP engine. If this value is set to true, the engine is custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines#custom_dlp_engine DlpEngines#custom_dlp_engine}
  */
  readonly customDlpEngine?: boolean | cdktf.IResolvable;
  /**
  * The DLP engine's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines#description DlpEngines#description}
  */
  readonly description?: string;
  /**
  * The boolean logical operator in which various DLP dictionaries are combined within a DLP engine's expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines#engine_expression DlpEngines#engine_expression}
  */
  readonly engineExpression?: string;
  /**
  * The DLP engine name as configured by the admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines#name DlpEngines#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines zia_dlp_engines}
*/
export class DlpEngines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_engines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpEngines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpEngines to import
  * @param importFromId The id of the existing DlpEngines that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpEngines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_engines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/dlp_engines zia_dlp_engines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpEnginesConfig
  */
  public constructor(scope: Construct, id: string, config: DlpEnginesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_engines',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDlpEngine = config.customDlpEngine;
    this._description = config.description;
    this._engineExpression = config.engineExpression;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_dlp_engine - computed: false, optional: true, required: false
  private _customDlpEngine?: boolean | cdktf.IResolvable; 
  public get customDlpEngine() {
    return this.getBooleanAttribute('custom_dlp_engine');
  }
  public set customDlpEngine(value: boolean | cdktf.IResolvable) {
    this._customDlpEngine = value;
  }
  public resetCustomDlpEngine() {
    this._customDlpEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDlpEngineInput() {
    return this._customDlpEngine;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_expression - computed: false, optional: true, required: false
  private _engineExpression?: string; 
  public get engineExpression() {
    return this.getStringAttribute('engine_expression');
  }
  public set engineExpression(value: string) {
    this._engineExpression = value;
  }
  public resetEngineExpression() {
    this._engineExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineExpressionInput() {
    return this._engineExpression;
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getNumberAttribute('engine_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      custom_dlp_engine: cdktf.booleanToTerraform(this._customDlpEngine),
      description: cdktf.stringToTerraform(this._description),
      engine_expression: cdktf.stringToTerraform(this._engineExpression),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_dlp_engine: {
        value: cdktf.booleanToHclTerraform(this._customDlpEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_expression: {
        value: cdktf.stringToHclTerraform(this._engineExpression),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
