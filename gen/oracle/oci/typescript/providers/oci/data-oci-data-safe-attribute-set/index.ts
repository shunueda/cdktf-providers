// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_attribute_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAttributeSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_attribute_set#attribute_set_id DataOciDataSafeAttributeSet#attribute_set_id}
  */
  readonly attributeSetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_attribute_set oci_data_safe_attribute_set}
*/
export class DataOciDataSafeAttributeSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_attribute_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAttributeSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAttributeSet to import
  * @param importFromId The id of the existing DataOciDataSafeAttributeSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_attribute_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAttributeSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_attribute_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_attribute_set oci_data_safe_attribute_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAttributeSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAttributeSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_attribute_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSetId = config.attributeSetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_set_id - computed: false, optional: false, required: true
  private _attributeSetId?: string; 
  public get attributeSetId() {
    return this.getStringAttribute('attribute_set_id');
  }
  public set attributeSetId(value: string) {
    this._attributeSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetIdInput() {
    return this._attributeSetId;
  }

  // attribute_set_type - computed: true, optional: false, required: false
  public get attributeSetType() {
    return this.getStringAttribute('attribute_set_type');
  }

  // attribute_set_values - computed: true, optional: false, required: false
  public get attributeSetValues() {
    return this.getListAttribute('attribute_set_values');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getStringAttribute('in_use');
  }

  // is_user_defined - computed: true, optional: false, required: false
  public get isUserDefined() {
    return this.getBooleanAttribute('is_user_defined');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_set_id: cdktf.stringToTerraform(this._attributeSetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_set_id: {
        value: cdktf.stringToHclTerraform(this._attributeSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
