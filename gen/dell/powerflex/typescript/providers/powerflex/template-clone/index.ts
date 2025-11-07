// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateCloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template Clone Resources's original template ID derived from the template needing to be cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone#original_template_id TemplateClone#original_template_id}
  */
  readonly originalTemplateId: string;
  /**
  * Template Clone Resources's unique template name for the cloned template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone#template_name TemplateClone#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone powerflex_template_clone}
*/
export class TemplateClone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_template_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateClone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateClone to import
  * @param importFromId The id of the existing TemplateClone that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateClone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_template_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/template_clone powerflex_template_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateCloneConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateCloneConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_template_clone',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._originalTemplateId = config.originalTemplateId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // original_template_id - computed: false, optional: false, required: true
  private _originalTemplateId?: string; 
  public get originalTemplateId() {
    return this.getStringAttribute('original_template_id');
  }
  public set originalTemplateId(value: string) {
    this._originalTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalTemplateIdInput() {
    return this._originalTemplateId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      original_template_id: cdktf.stringToTerraform(this._originalTemplateId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      original_template_id: {
        value: cdktf.stringToHclTerraform(this._originalTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
