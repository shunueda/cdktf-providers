// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sensitive_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectorySensitiveAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sensitive_attribute#name DataPingdirectorySensitiveAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sensitive_attribute pingdirectory_sensitive_attribute}
*/
export class DataPingdirectorySensitiveAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_sensitive_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectorySensitiveAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectorySensitiveAttribute to import
  * @param importFromId The id of the existing DataPingdirectorySensitiveAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sensitive_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectorySensitiveAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_sensitive_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sensitive_attribute pingdirectory_sensitive_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectorySensitiveAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectorySensitiveAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_sensitive_attribute',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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

  // allow_in_add - computed: true, optional: false, required: false
  public get allowInAdd() {
    return this.getStringAttribute('allow_in_add');
  }

  // allow_in_compare - computed: true, optional: false, required: false
  public get allowInCompare() {
    return this.getStringAttribute('allow_in_compare');
  }

  // allow_in_filter - computed: true, optional: false, required: false
  public get allowInFilter() {
    return this.getStringAttribute('allow_in_filter');
  }

  // allow_in_modify - computed: true, optional: false, required: false
  public get allowInModify() {
    return this.getStringAttribute('allow_in_modify');
  }

  // allow_in_returned_entries - computed: true, optional: false, required: false
  public get allowInReturnedEntries() {
    return this.getStringAttribute('allow_in_returned_entries');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_type'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_default_sensitive_operational_attributes - computed: true, optional: false, required: false
  public get includeDefaultSensitiveOperationalAttributes() {
    return this.getBooleanAttribute('include_default_sensitive_operational_attributes');
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
