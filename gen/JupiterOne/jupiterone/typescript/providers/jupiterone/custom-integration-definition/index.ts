// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomIntegrationDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of custom definition. Must be either 'custom' or 'cft'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#custom_definition_type CustomIntegrationDefinition#custom_definition_type}
  */
  readonly customDefinitionType: string;
  /**
  * Description of the custom integration definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#description CustomIntegrationDefinition#description}
  */
  readonly description: string;
  /**
  * Documentation web link for the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#docs_web_link CustomIntegrationDefinition#docs_web_link}
  */
  readonly docsWebLink: string;
  /**
  * Icon for the integration. Must be one of the preloaded icon names like 'custom_earth', 'custom_jupiter', etc. See custom integration definition UI for a full list of icons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#icon CustomIntegrationDefinition#icon}
  */
  readonly icon: string;
  /**
  * Category of integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#integration_category CustomIntegrationDefinition#integration_category}
  */
  readonly integrationCategory: string[];
  /**
  * Type of integration. Should be unique across JupiterOne. Should be a kebab-case string (lowercase with hyphens), e.g. 'jupiterone-example-integration'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#integration_type CustomIntegrationDefinition#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the custom integration definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#name CustomIntegrationDefinition#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition jupiterone_custom_integration_definition}
*/
export class CustomIntegrationDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_custom_integration_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomIntegrationDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomIntegrationDefinition to import
  * @param importFromId The id of the existing CustomIntegrationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomIntegrationDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_custom_integration_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/custom_integration_definition jupiterone_custom_integration_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomIntegrationDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomIntegrationDefinitionConfig) {
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
    this._customDefinitionType = config.customDefinitionType;
    this._description = config.description;
    this._docsWebLink = config.docsWebLink;
    this._icon = config.icon;
    this._integrationCategory = config.integrationCategory;
    this._integrationType = config.integrationType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_definition_type - computed: false, optional: false, required: true
  private _customDefinitionType?: string; 
  public get customDefinitionType() {
    return this.getStringAttribute('custom_definition_type');
  }
  public set customDefinitionType(value: string) {
    this._customDefinitionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDefinitionTypeInput() {
    return this._customDefinitionType;
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

  // docs_web_link - computed: false, optional: false, required: true
  private _docsWebLink?: string; 
  public get docsWebLink() {
    return this.getStringAttribute('docs_web_link');
  }
  public set docsWebLink(value: string) {
    this._docsWebLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docsWebLinkInput() {
    return this._docsWebLink;
  }

  // icon - computed: false, optional: false, required: true
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_category - computed: false, optional: false, required: true
  private _integrationCategory?: string[]; 
  public get integrationCategory() {
    return this.getListAttribute('integration_category');
  }
  public set integrationCategory(value: string[]) {
    this._integrationCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationCategoryInput() {
    return this._integrationCategory;
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
      custom_definition_type: cdktf.stringToTerraform(this._customDefinitionType),
      description: cdktf.stringToTerraform(this._description),
      docs_web_link: cdktf.stringToTerraform(this._docsWebLink),
      icon: cdktf.stringToTerraform(this._icon),
      integration_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationCategory),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_definition_type: {
        value: cdktf.stringToHclTerraform(this._customDefinitionType),
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
      docs_web_link: {
        value: cdktf.stringToHclTerraform(this._docsWebLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationCategory),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
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
