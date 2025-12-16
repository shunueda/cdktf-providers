// https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the custom field this option belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option#custom_field_id CustomFieldOption#custom_field_id}
  */
  readonly customFieldId: string;
  /**
  * Sort key used to order the custom field options correctly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option#sort_key CustomFieldOption#sort_key}
  */
  readonly sortKey?: number;
  /**
  * Human readable name for the custom field option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option#value CustomFieldOption#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option incident_custom_field_option}
*/
export class CustomFieldOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_custom_field_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomFieldOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomFieldOption to import
  * @param importFromId The id of the existing CustomFieldOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomFieldOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_custom_field_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/custom_field_option incident_custom_field_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldOptionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_custom_field_option',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.22.0',
        providerVersionConstraint: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFieldId = config.customFieldId;
    this._sortKey = config.sortKey;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_field_id - computed: false, optional: false, required: true
  private _customFieldId?: string; 
  public get customFieldId() {
    return this.getStringAttribute('custom_field_id');
  }
  public set customFieldId(value: string) {
    this._customFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdInput() {
    return this._customFieldId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sort_key - computed: true, optional: true, required: false
  private _sortKey?: number; 
  public get sortKey() {
    return this.getNumberAttribute('sort_key');
  }
  public set sortKey(value: number) {
    this._sortKey = value;
  }
  public resetSortKey() {
    this._sortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeyInput() {
    return this._sortKey;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field_id: cdktf.stringToTerraform(this._customFieldId),
      sort_key: cdktf.numberToTerraform(this._sortKey),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_field_id: {
        value: cdktf.stringToHclTerraform(this._customFieldId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_key: {
        value: cdktf.numberToHclTerraform(this._sortKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
