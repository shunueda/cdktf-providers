// https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentCatalogTypeAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of this catalog type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute#catalog_type_id DataIncidentCatalogTypeAttribute#catalog_type_id}
  */
  readonly catalogTypeId: string;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute#name DataIncidentCatalogTypeAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute incident_catalog_type_attribute}
*/
export class DataIncidentCatalogTypeAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_type_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentCatalogTypeAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentCatalogTypeAttribute to import
  * @param importFromId The id of the existing DataIncidentCatalogTypeAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentCatalogTypeAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_type_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/data-sources/catalog_type_attribute incident_catalog_type_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentCatalogTypeAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncidentCatalogTypeAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_type_attribute',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.21.0',
        providerVersionConstraint: '5.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogTypeId = config.catalogTypeId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array - computed: true, optional: false, required: false
  public get array() {
    return this.getBooleanAttribute('array');
  }

  // backlink_attribute - computed: true, optional: false, required: false
  public get backlinkAttribute() {
    return this.getStringAttribute('backlink_attribute');
  }

  // catalog_type_id - computed: false, optional: false, required: true
  private _catalogTypeId?: string; 
  public get catalogTypeId() {
    return this.getStringAttribute('catalog_type_id');
  }
  public set catalogTypeId(value: string) {
    this._catalogTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeIdInput() {
    return this._catalogTypeId;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getListAttribute('path');
  }

  // schema_only - computed: true, optional: false, required: false
  public get schemaOnly() {
    return this.getBooleanAttribute('schema_only');
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
      catalog_type_id: cdktf.stringToTerraform(this._catalogTypeId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type_id: {
        value: cdktf.stringToHclTerraform(this._catalogTypeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
