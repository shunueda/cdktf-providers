// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CliTemplateFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cli config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template#cli_config CliTemplateFeatureTemplate#cli_config}
  */
  readonly cliConfig?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template#description CliTemplateFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template#device_types CliTemplateFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template#name CliTemplateFeatureTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template sdwan_cli_template_feature_template}
*/
export class CliTemplateFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cli_template_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CliTemplateFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CliTemplateFeatureTemplate to import
  * @param importFromId The id of the existing CliTemplateFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CliTemplateFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cli_template_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_template_feature_template sdwan_cli_template_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CliTemplateFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CliTemplateFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cli_template_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliConfig = config.cliConfig;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_config - computed: false, optional: true, required: false
  private _cliConfig?: string; 
  public get cliConfig() {
    return this.getStringAttribute('cli_config');
  }
  public set cliConfig(value: string) {
    this._cliConfig = value;
  }
  public resetCliConfig() {
    this._cliConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConfigInput() {
    return this._cliConfig;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_config: cdktf.stringToTerraform(this._cliConfig),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_config: {
        value: cdktf.stringToHclTerraform(this._cliConfig),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
