// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerResponseTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the response template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#description ResourceManagerResponseTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#id ResourceManagerResponseTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean flag to enable console access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#is_console_access_enabled ResourceManagerResponseTemplate#is_console_access_enabled}
  */
  readonly isConsoleAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the response template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#name ResourceManagerResponseTemplate#name}
  */
  readonly name: string;
  /**
  * Boolean flag to determine if the template is visible on the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#show_on_ui ResourceManagerResponseTemplate#show_on_ui}
  */
  readonly showOnUi?: boolean | cdktf.IResolvable;
  /**
  * The template content with placeholders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#template_data ResourceManagerResponseTemplate#template_data}
  */
  readonly templateData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template britive_resource_manager_response_template}
*/
export class ResourceManagerResponseTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_response_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerResponseTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerResponseTemplate to import
  * @param importFromId The id of the existing ResourceManagerResponseTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerResponseTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_response_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/resources/resource_manager_response_template britive_resource_manager_response_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerResponseTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerResponseTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_response_template',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
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
    this._id = config.id;
    this._isConsoleAccessEnabled = config.isConsoleAccessEnabled;
    this._name = config.name;
    this._showOnUi = config.showOnUi;
    this._templateData = config.templateData;
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

  // is_console_access_enabled - computed: false, optional: true, required: false
  private _isConsoleAccessEnabled?: boolean | cdktf.IResolvable; 
  public get isConsoleAccessEnabled() {
    return this.getBooleanAttribute('is_console_access_enabled');
  }
  public set isConsoleAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._isConsoleAccessEnabled = value;
  }
  public resetIsConsoleAccessEnabled() {
    this._isConsoleAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConsoleAccessEnabledInput() {
    return this._isConsoleAccessEnabled;
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

  // show_on_ui - computed: false, optional: true, required: false
  private _showOnUi?: boolean | cdktf.IResolvable; 
  public get showOnUi() {
    return this.getBooleanAttribute('show_on_ui');
  }
  public set showOnUi(value: boolean | cdktf.IResolvable) {
    this._showOnUi = value;
  }
  public resetShowOnUi() {
    this._showOnUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnUiInput() {
    return this._showOnUi;
  }

  // template_data - computed: false, optional: true, required: false
  private _templateData?: string; 
  public get templateData() {
    return this.getStringAttribute('template_data');
  }
  public set templateData(value: string) {
    this._templateData = value;
  }
  public resetTemplateData() {
    this._templateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDataInput() {
    return this._templateData;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_console_access_enabled: cdktf.booleanToTerraform(this._isConsoleAccessEnabled),
      name: cdktf.stringToTerraform(this._name),
      show_on_ui: cdktf.booleanToTerraform(this._showOnUi),
      template_data: cdktf.stringToTerraform(this._templateData),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_console_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._isConsoleAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_on_ui: {
        value: cdktf.booleanToHclTerraform(this._showOnUi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_data: {
        value: cdktf.stringToHclTerraform(this._templateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
