// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LibraryitemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Library Item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#description Libraryitem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#display_category Libraryitem#display_category}
  */
  readonly displayCategory?: string;
  /**
  * The Library Item's display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#name Libraryitem#name}
  */
  readonly name: string;
  /**
  * The internal ID of the policy item this control is related to, if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#policy_item_id Libraryitem#policy_item_id}
  */
  readonly policyItemId?: string;
  /**
  * A unique identifier that can be used to refer to this Library Item for linking to framework items (requirements)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#ref Libraryitem#ref}
  */
  readonly ref: string;
  /**
  * A URL for referencing additional information about the LibraryItem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#web_link Libraryitem#web_link}
  */
  readonly webLink?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem jupiterone_libraryitem}
*/
export class Libraryitem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_libraryitem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Libraryitem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Libraryitem to import
  * @param importFromId The id of the existing Libraryitem that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Libraryitem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_libraryitem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/libraryitem jupiterone_libraryitem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LibraryitemConfig
  */
  public constructor(scope: Construct, id: string, config: LibraryitemConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_libraryitem',
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
    this._description = config.description;
    this._displayCategory = config.displayCategory;
    this._name = config.name;
    this._policyItemId = config.policyItemId;
    this._ref = config.ref;
    this._webLink = config.webLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_category - computed: false, optional: true, required: false
  private _displayCategory?: string; 
  public get displayCategory() {
    return this.getStringAttribute('display_category');
  }
  public set displayCategory(value: string) {
    this._displayCategory = value;
  }
  public resetDisplayCategory() {
    this._displayCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayCategoryInput() {
    return this._displayCategory;
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

  // policy_item_id - computed: false, optional: true, required: false
  private _policyItemId?: string; 
  public get policyItemId() {
    return this.getStringAttribute('policy_item_id');
  }
  public set policyItemId(value: string) {
    this._policyItemId = value;
  }
  public resetPolicyItemId() {
    this._policyItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemIdInput() {
    return this._policyItemId;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // web_link - computed: false, optional: true, required: false
  private _webLink?: string; 
  public get webLink() {
    return this.getStringAttribute('web_link');
  }
  public set webLink(value: string) {
    this._webLink = value;
  }
  public resetWebLink() {
    this._webLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webLinkInput() {
    return this._webLink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_category: cdktf.stringToTerraform(this._displayCategory),
      name: cdktf.stringToTerraform(this._name),
      policy_item_id: cdktf.stringToTerraform(this._policyItemId),
      ref: cdktf.stringToTerraform(this._ref),
      web_link: cdktf.stringToTerraform(this._webLink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_category: {
        value: cdktf.stringToHclTerraform(this._displayCategory),
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
      policy_item_id: {
        value: cdktf.stringToHclTerraform(this._policyItemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_link: {
        value: cdktf.stringToHclTerraform(this._webLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
