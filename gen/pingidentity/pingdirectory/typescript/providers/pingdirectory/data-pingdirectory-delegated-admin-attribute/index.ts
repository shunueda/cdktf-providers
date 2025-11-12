// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDelegatedAdminAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name or OID of the LDAP attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute#attribute_type DataPingdirectoryDelegatedAdminAttribute#attribute_type}
  */
  readonly attributeType: string;
  /**
  * Name of the parent REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute#rest_resource_type_name DataPingdirectoryDelegatedAdminAttribute#rest_resource_type_name}
  */
  readonly restResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute pingdirectory_delegated_admin_attribute}
*/
export class DataPingdirectoryDelegatedAdminAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDelegatedAdminAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDelegatedAdminAttribute to import
  * @param importFromId The id of the existing DataPingdirectoryDelegatedAdminAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDelegatedAdminAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_attribute pingdirectory_delegated_admin_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDelegatedAdminAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDelegatedAdminAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_attribute',
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
    this._attributeType = config.attributeType;
    this._restResourceTypeName = config.restResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_mime_type - computed: true, optional: false, required: false
  public get allowedMimeType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_mime_type'));
  }

  // attribute_category - computed: true, optional: false, required: false
  public get attributeCategory() {
    return this.getStringAttribute('attribute_category');
  }

  // attribute_presentation - computed: true, optional: false, required: false
  public get attributePresentation() {
    return this.getStringAttribute('attribute_presentation');
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // date_time_format - computed: true, optional: false, required: false
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // display_order_index - computed: true, optional: false, required: false
  public get displayOrderIndex() {
    return this.getNumberAttribute('display_order_index');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_in_summary - computed: true, optional: false, required: false
  public get includeInSummary() {
    return this.getBooleanAttribute('include_in_summary');
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // mutability - computed: true, optional: false, required: false
  public get mutability() {
    return this.getStringAttribute('mutability');
  }

  // reference_resource_type - computed: true, optional: false, required: false
  public get referenceResourceType() {
    return this.getStringAttribute('reference_resource_type');
  }

  // rest_resource_type_name - computed: false, optional: false, required: true
  private _restResourceTypeName?: string; 
  public get restResourceTypeName() {
    return this.getStringAttribute('rest_resource_type_name');
  }
  public set restResourceTypeName(value: string) {
    this._restResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeNameInput() {
    return this._restResourceTypeName;
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
      attribute_type: cdktf.stringToTerraform(this._attributeType),
      rest_resource_type_name: cdktf.stringToTerraform(this._restResourceTypeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_type: {
        value: cdktf.stringToHclTerraform(this._attributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._restResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
