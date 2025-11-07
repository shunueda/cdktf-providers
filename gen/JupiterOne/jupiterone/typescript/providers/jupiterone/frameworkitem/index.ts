// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrameworkitemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#description Frameworkitem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#display_category Frameworkitem#display_category}
  */
  readonly displayCategory?: string;
  /**
  * The internal ID of the framework this item belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#framework_id Frameworkitem#framework_id}
  */
  readonly frameworkId: string;
  /**
  * The internal ID of the framework group this item belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#group_id Frameworkitem#group_id}
  */
  readonly groupId: string;
  /**
  * The FrameworkItem's display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#name Frameworkitem#name}
  */
  readonly name: string;
  /**
  * A unique identifier that can be used to refer to this item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#ref Frameworkitem#ref}
  */
  readonly ref: string;
  /**
  * A URL for referencing additional information about the item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#web_link Frameworkitem#web_link}
  */
  readonly webLink?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem jupiterone_frameworkitem}
*/
export class Frameworkitem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_frameworkitem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Frameworkitem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Frameworkitem to import
  * @param importFromId The id of the existing Frameworkitem that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Frameworkitem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_frameworkitem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/frameworkitem jupiterone_frameworkitem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrameworkitemConfig
  */
  public constructor(scope: Construct, id: string, config: FrameworkitemConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_frameworkitem',
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
    this._frameworkId = config.frameworkId;
    this._groupId = config.groupId;
    this._name = config.name;
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

  // framework_id - computed: false, optional: false, required: true
  private _frameworkId?: string; 
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }
  public set frameworkId(value: string) {
    this._frameworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkIdInput() {
    return this._frameworkId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
      framework_id: cdktf.stringToTerraform(this._frameworkId),
      group_id: cdktf.stringToTerraform(this._groupId),
      name: cdktf.stringToTerraform(this._name),
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
      framework_id: {
        value: cdktf.stringToHclTerraform(this._frameworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
