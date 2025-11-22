// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseEntityCriticalityConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config#id CseEntityCriticalityConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config#name CseEntityCriticalityConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config#severity_expression CseEntityCriticalityConfig#severity_expression}
  */
  readonly severityExpression: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config sumologic_cse_entity_criticality_config}
*/
export class CseEntityCriticalityConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_entity_criticality_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseEntityCriticalityConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseEntityCriticalityConfig to import
  * @param importFromId The id of the existing CseEntityCriticalityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseEntityCriticalityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_entity_criticality_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_entity_criticality_config sumologic_cse_entity_criticality_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseEntityCriticalityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CseEntityCriticalityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_entity_criticality_config',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
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
    this._severityExpression = config.severityExpression;
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

  // severity_expression - computed: false, optional: false, required: true
  private _severityExpression?: string; 
  public get severityExpression() {
    return this.getStringAttribute('severity_expression');
  }
  public set severityExpression(value: string) {
    this._severityExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityExpressionInput() {
    return this._severityExpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      severity_expression: cdktf.stringToTerraform(this._severityExpression),
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
      severity_expression: {
        value: cdktf.stringToHclTerraform(this._severityExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
