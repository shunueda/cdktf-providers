// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLogFieldBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_behavior#name DataPingdirectoryLogFieldBehavior#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_behavior pingdirectory_log_field_behavior}
*/
export class DataPingdirectoryLogFieldBehavior extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_log_field_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLogFieldBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLogFieldBehavior to import
  * @param importFromId The id of the existing DataPingdirectoryLogFieldBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLogFieldBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_log_field_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_behavior pingdirectory_log_field_behavior} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLogFieldBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLogFieldBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_log_field_behavior',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_behavior - computed: true, optional: false, required: false
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // omit_field - computed: true, optional: false, required: false
  public get omitField() {
    return cdktf.Fn.tolist(this.getListAttribute('omit_field'));
  }

  // omit_field_name - computed: true, optional: false, required: false
  public get omitFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('omit_field_name'));
  }

  // preserve_field - computed: true, optional: false, required: false
  public get preserveField() {
    return cdktf.Fn.tolist(this.getListAttribute('preserve_field'));
  }

  // preserve_field_name - computed: true, optional: false, required: false
  public get preserveFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('preserve_field_name'));
  }

  // redact_entire_value_field - computed: true, optional: false, required: false
  public get redactEntireValueField() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_entire_value_field'));
  }

  // redact_entire_value_field_name - computed: true, optional: false, required: false
  public get redactEntireValueFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_entire_value_field_name'));
  }

  // redact_value_components_field - computed: true, optional: false, required: false
  public get redactValueComponentsField() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_value_components_field'));
  }

  // redact_value_components_field_name - computed: true, optional: false, required: false
  public get redactValueComponentsFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('redact_value_components_field_name'));
  }

  // tokenize_entire_value_field - computed: true, optional: false, required: false
  public get tokenizeEntireValueField() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_entire_value_field'));
  }

  // tokenize_entire_value_field_name - computed: true, optional: false, required: false
  public get tokenizeEntireValueFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_entire_value_field_name'));
  }

  // tokenize_value_components_field - computed: true, optional: false, required: false
  public get tokenizeValueComponentsField() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_value_components_field'));
  }

  // tokenize_value_components_field_name - computed: true, optional: false, required: false
  public get tokenizeValueComponentsFieldName() {
    return cdktf.Fn.tolist(this.getListAttribute('tokenize_value_components_field_name'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
