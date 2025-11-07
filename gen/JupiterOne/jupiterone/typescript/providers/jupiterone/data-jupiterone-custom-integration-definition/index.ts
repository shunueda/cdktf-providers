// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/custom_integration_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJupiteroneCustomIntegrationDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/custom_integration_definition#integration_type DataJupiteroneCustomIntegrationDefinition#integration_type}
  */
  readonly integrationType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/custom_integration_definition jupiterone_custom_integration_definition}
*/
export class DataJupiteroneCustomIntegrationDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_custom_integration_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJupiteroneCustomIntegrationDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJupiteroneCustomIntegrationDefinition to import
  * @param importFromId The id of the existing DataJupiteroneCustomIntegrationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/custom_integration_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJupiteroneCustomIntegrationDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_custom_integration_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/data-sources/custom_integration_definition jupiterone_custom_integration_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJupiteroneCustomIntegrationDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataJupiteroneCustomIntegrationDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_custom_integration_definition',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationType = config.integrationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_definition_type - computed: true, optional: false, required: false
  public get customDefinitionType() {
    return this.getStringAttribute('custom_definition_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docs_web_link - computed: true, optional: false, required: false
  public get docsWebLink() {
    return this.getStringAttribute('docs_web_link');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_category - computed: true, optional: false, required: false
  public get integrationCategory() {
    return this.getListAttribute('integration_category');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_type: cdktf.stringToTerraform(this._integrationType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
