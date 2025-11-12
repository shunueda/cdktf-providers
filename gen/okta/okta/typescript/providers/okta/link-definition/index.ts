// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the associated relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#associated_description LinkDefinition#associated_description}
  */
  readonly associatedDescription: string;
  /**
  * API name of the associated link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#associated_name LinkDefinition#associated_name}
  */
  readonly associatedName: string;
  /**
  * Display name of the associated link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#associated_title LinkDefinition#associated_title}
  */
  readonly associatedTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#id LinkDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description of the primary relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#primary_description LinkDefinition#primary_description}
  */
  readonly primaryDescription: string;
  /**
  * API name of the primary link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#primary_name LinkDefinition#primary_name}
  */
  readonly primaryName: string;
  /**
  * Display name of the primary link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#primary_title LinkDefinition#primary_title}
  */
  readonly primaryTitle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition okta_link_definition}
*/
export class LinkDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_link_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinkDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinkDefinition to import
  * @param importFromId The id of the existing LinkDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinkDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_link_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/link_definition okta_link_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LinkDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_link_definition',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedDescription = config.associatedDescription;
    this._associatedName = config.associatedName;
    this._associatedTitle = config.associatedTitle;
    this._id = config.id;
    this._primaryDescription = config.primaryDescription;
    this._primaryName = config.primaryName;
    this._primaryTitle = config.primaryTitle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_description - computed: false, optional: false, required: true
  private _associatedDescription?: string; 
  public get associatedDescription() {
    return this.getStringAttribute('associated_description');
  }
  public set associatedDescription(value: string) {
    this._associatedDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDescriptionInput() {
    return this._associatedDescription;
  }

  // associated_name - computed: false, optional: false, required: true
  private _associatedName?: string; 
  public get associatedName() {
    return this.getStringAttribute('associated_name');
  }
  public set associatedName(value: string) {
    this._associatedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedNameInput() {
    return this._associatedName;
  }

  // associated_title - computed: false, optional: false, required: true
  private _associatedTitle?: string; 
  public get associatedTitle() {
    return this.getStringAttribute('associated_title');
  }
  public set associatedTitle(value: string) {
    this._associatedTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedTitleInput() {
    return this._associatedTitle;
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

  // primary_description - computed: false, optional: false, required: true
  private _primaryDescription?: string; 
  public get primaryDescription() {
    return this.getStringAttribute('primary_description');
  }
  public set primaryDescription(value: string) {
    this._primaryDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDescriptionInput() {
    return this._primaryDescription;
  }

  // primary_name - computed: false, optional: false, required: true
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_title - computed: false, optional: false, required: true
  private _primaryTitle?: string; 
  public get primaryTitle() {
    return this.getStringAttribute('primary_title');
  }
  public set primaryTitle(value: string) {
    this._primaryTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTitleInput() {
    return this._primaryTitle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_description: cdktf.stringToTerraform(this._associatedDescription),
      associated_name: cdktf.stringToTerraform(this._associatedName),
      associated_title: cdktf.stringToTerraform(this._associatedTitle),
      id: cdktf.stringToTerraform(this._id),
      primary_description: cdktf.stringToTerraform(this._primaryDescription),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_title: cdktf.stringToTerraform(this._primaryTitle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_description: {
        value: cdktf.stringToHclTerraform(this._associatedDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_name: {
        value: cdktf.stringToHclTerraform(this._associatedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_title: {
        value: cdktf.stringToHclTerraform(this._associatedTitle),
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
      primary_description: {
        value: cdktf.stringToHclTerraform(this._primaryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_name: {
        value: cdktf.stringToHclTerraform(this._primaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_title: {
        value: cdktf.stringToHclTerraform(this._primaryTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
