// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the property is allowed to be set in opslevel.yml config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#allowed_in_config_files PropertyDefinition#allowed_in_config_files}
  */
  readonly allowedInConfigFiles: boolean | cdktf.IResolvable;
  /**
  * The description of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#description PropertyDefinition#description}
  */
  readonly description?: string;
  /**
  * Values for which lock is assigned to a property definition to restrict what sources can assign values to it. One of `ui_locked`, `unlocked`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#locked_status PropertyDefinition#locked_status}
  */
  readonly lockedStatus: string;
  /**
  * The display name of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#name PropertyDefinition#name}
  */
  readonly name: string;
  /**
  * The display status of a custom property on service pages. One of `hidden`, `visible`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#property_display_status PropertyDefinition#property_display_status}
  */
  readonly propertyDisplayStatus: string;
  /**
  * The schema of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#schema PropertyDefinition#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition opslevel_property_definition}
*/
export class PropertyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_property_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertyDefinition to import
  * @param importFromId The id of the existing PropertyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_property_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/property_definition opslevel_property_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_property_definition',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedInConfigFiles = config.allowedInConfigFiles;
    this._description = config.description;
    this._lockedStatus = config.lockedStatus;
    this._name = config.name;
    this._propertyDisplayStatus = config.propertyDisplayStatus;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_in_config_files - computed: false, optional: false, required: true
  private _allowedInConfigFiles?: boolean | cdktf.IResolvable; 
  public get allowedInConfigFiles() {
    return this.getBooleanAttribute('allowed_in_config_files');
  }
  public set allowedInConfigFiles(value: boolean | cdktf.IResolvable) {
    this._allowedInConfigFiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInConfigFilesInput() {
    return this._allowedInConfigFiles;
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

  // locked_status - computed: false, optional: false, required: true
  private _lockedStatus?: string; 
  public get lockedStatus() {
    return this.getStringAttribute('locked_status');
  }
  public set lockedStatus(value: string) {
    this._lockedStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedStatusInput() {
    return this._lockedStatus;
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

  // property_display_status - computed: false, optional: false, required: true
  private _propertyDisplayStatus?: string; 
  public get propertyDisplayStatus() {
    return this.getStringAttribute('property_display_status');
  }
  public set propertyDisplayStatus(value: string) {
    this._propertyDisplayStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDisplayStatusInput() {
    return this._propertyDisplayStatus;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_in_config_files: cdktf.booleanToTerraform(this._allowedInConfigFiles),
      description: cdktf.stringToTerraform(this._description),
      locked_status: cdktf.stringToTerraform(this._lockedStatus),
      name: cdktf.stringToTerraform(this._name),
      property_display_status: cdktf.stringToTerraform(this._propertyDisplayStatus),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_in_config_files: {
        value: cdktf.booleanToHclTerraform(this._allowedInConfigFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked_status: {
        value: cdktf.stringToHclTerraform(this._lockedStatus),
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
      property_display_status: {
        value: cdktf.stringToHclTerraform(this._propertyDisplayStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
