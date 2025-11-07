// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformAmsVariablesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#classification PlatformAmsVariableset#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#description PlatformAmsVariableset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#environment PlatformAmsVariableset#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#name PlatformAmsVariableset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#service PlatformAmsVariableset#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#variables_json PlatformAmsVariableset#variables_json}
  */
  readonly variablesJson: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset kaleido_platform_ams_variableset}
*/
export class PlatformAmsVariableset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_ams_variableset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformAmsVariableset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformAmsVariableset to import
  * @param importFromId The id of the existing PlatformAmsVariableset that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformAmsVariableset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_ams_variableset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_variableset kaleido_platform_ams_variableset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformAmsVariablesetConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformAmsVariablesetConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_ams_variableset',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classification = config.classification;
    this._description = config.description;
    this._environment = config.environment;
    this._name = config.name;
    this._service = config.service;
    this._variablesJson = config.variablesJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classification - computed: true, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // variables_json - computed: false, optional: false, required: true
  private _variablesJson?: string; 
  public get variablesJson() {
    return this.getStringAttribute('variables_json');
  }
  public set variablesJson(value: string) {
    this._variablesJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesJsonInput() {
    return this._variablesJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classification: cdktf.stringToTerraform(this._classification),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      variables_json: cdktf.stringToTerraform(this._variablesJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classification: {
        value: cdktf.stringToHclTerraform(this._classification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables_json: {
        value: cdktf.stringToHclTerraform(this._variablesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
