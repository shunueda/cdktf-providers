// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationshipDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#alias RelationshipDefinition#alias}
  */
  readonly alias: string;
  /**
  * The types of resources that can be selected for this relationship definition. Can include any component type alias on your account or 'team'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#allowed_types RelationshipDefinition#allowed_types}
  */
  readonly allowedTypes: string[];
  /**
  * The component type that the relationship belongs to. Must be a valid component type alias from your OpsLevel account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#component_type RelationshipDefinition#component_type}
  */
  readonly componentType: string;
  /**
  * The description of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#description RelationshipDefinition#description}
  */
  readonly description?: string;
  /**
  * The display name of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#name RelationshipDefinition#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition opslevel_relationship_definition}
*/
export class RelationshipDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_relationship_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationshipDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationshipDefinition to import
  * @param importFromId The id of the existing RelationshipDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationshipDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_relationship_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/relationship_definition opslevel_relationship_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationshipDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: RelationshipDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_relationship_definition',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._allowedTypes = config.allowedTypes;
    this._componentType = config.componentType;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // allowed_types - computed: false, optional: false, required: true
  private _allowedTypes?: string[]; 
  public get allowedTypes() {
    return this.getListAttribute('allowed_types');
  }
  public set allowedTypes(value: string[]) {
    this._allowedTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTypesInput() {
    return this._allowedTypes;
  }

  // component_type - computed: false, optional: false, required: true
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
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
      alias: cdktf.stringToTerraform(this._alias),
      allowed_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedTypes),
      component_type: cdktf.stringToTerraform(this._componentType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
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
