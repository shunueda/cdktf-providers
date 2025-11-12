// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeformConfigTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of System IDs to which the ConfigTemplate is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#assigned_to FreeformConfigTemplate#assigned_to}
  */
  readonly assignedTo?: string[];
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#blueprint_id FreeformConfigTemplate#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Config Template name as shown in the Web UI. Must end with `.jinja`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#name FreeformConfigTemplate#name}
  */
  readonly name: string;
  /**
  * Set of Tag labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#tags FreeformConfigTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * Configuration Jinja2 template text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#text FreeformConfigTemplate#text}
  */
  readonly text: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template apstra_freeform_config_template}
*/
export class FreeformConfigTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_config_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeformConfigTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeformConfigTemplate to import
  * @param importFromId The id of the existing FreeformConfigTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeformConfigTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_config_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/freeform_config_template apstra_freeform_config_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeformConfigTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: FreeformConfigTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_config_template',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedTo = config.assignedTo;
    this._blueprintId = config.blueprintId;
    this._name = config.name;
    this._tags = config.tags;
    this._text = config.text;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_to - computed: false, optional: true, required: false
  private _assignedTo?: string[]; 
  public get assignedTo() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_to'));
  }
  public set assignedTo(value: string[]) {
    this._assignedTo = value;
  }
  public resetAssignedTo() {
    this._assignedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedTo),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      text: cdktf.stringToTerraform(this._text),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedTo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
