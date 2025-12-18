// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/property_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelPropertyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id or alias of the property definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/property_definition#identifier DataOpslevelPropertyDefinition#identifier}
  */
  readonly identifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/property_definition opslevel_property_definition}
*/
export class DataOpslevelPropertyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_property_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelPropertyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelPropertyDefinition to import
  * @param importFromId The id of the existing DataOpslevelPropertyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/property_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelPropertyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_property_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/data-sources/property_definition opslevel_property_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelPropertyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelPropertyDefinitionConfig) {
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
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_in_config_files - computed: true, optional: false, required: false
  public get allowedInConfigFiles() {
    return this.getBooleanAttribute('allowed_in_config_files');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // locked_status - computed: true, optional: false, required: false
  public get lockedStatus() {
    return this.getStringAttribute('locked_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // property_display_status - computed: true, optional: false, required: false
  public get propertyDisplayStatus() {
    return this.getStringAttribute('property_display_status');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
