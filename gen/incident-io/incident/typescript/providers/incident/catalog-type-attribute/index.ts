// https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogTypeAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this attribute is an array or scalar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#array CatalogTypeAttribute#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * If this is a backlink, the id of the attribute that it's linked from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#backlink_attribute CatalogTypeAttribute#backlink_attribute}
  */
  readonly backlinkAttribute?: string;
  /**
  * ID of this catalog type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#catalog_type_id CatalogTypeAttribute#catalog_type_id}
  */
  readonly catalogTypeId: string;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#name CatalogTypeAttribute#name}
  */
  readonly name: string;
  /**
  * If this is a path attribute, the path that we should use to pull the data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#path CatalogTypeAttribute#path}
  */
  readonly path?: string[];
  /**
  * If true, Terraform will only manage the schema of the attribute. Values for this attribute can be managed from the incident.io web dashboard.
  * 
  * NOTE: When enabled, you should use the `managed_attributes` argument on either `incident_catalog_entry` or `incident_catalog_entries` to manage the values of other attributes on this type, without Terraform overwriting values set in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#schema_only CatalogTypeAttribute#schema_only}
  */
  readonly schemaOnly?: boolean | cdktf.IResolvable;
  /**
  * The type of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#type CatalogTypeAttribute#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute incident_catalog_type_attribute}
*/
export class CatalogTypeAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_type_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogTypeAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogTypeAttribute to import
  * @param importFromId The id of the existing CatalogTypeAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogTypeAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_type_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/catalog_type_attribute incident_catalog_type_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogTypeAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogTypeAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_type_attribute',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.24.0',
        providerVersionConstraint: '5.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._array = config.array;
    this._backlinkAttribute = config.backlinkAttribute;
    this._catalogTypeId = config.catalogTypeId;
    this._name = config.name;
    this._path = config.path;
    this._schemaOnly = config.schemaOnly;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array - computed: true, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // backlink_attribute - computed: false, optional: true, required: false
  private _backlinkAttribute?: string; 
  public get backlinkAttribute() {
    return this.getStringAttribute('backlink_attribute');
  }
  public set backlinkAttribute(value: string) {
    this._backlinkAttribute = value;
  }
  public resetBacklinkAttribute() {
    this._backlinkAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backlinkAttributeInput() {
    return this._backlinkAttribute;
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

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // schema_only - computed: true, optional: true, required: false
  private _schemaOnly?: boolean | cdktf.IResolvable; 
  public get schemaOnly() {
    return this.getBooleanAttribute('schema_only');
  }
  public set schemaOnly(value: boolean | cdktf.IResolvable) {
    this._schemaOnly = value;
  }
  public resetSchemaOnly() {
    this._schemaOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaOnlyInput() {
    return this._schemaOnly;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array: cdktf.booleanToTerraform(this._array),
      backlink_attribute: cdktf.stringToTerraform(this._backlinkAttribute),
      catalog_type_id: cdktf.stringToTerraform(this._catalogTypeId),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._path),
      schema_only: cdktf.booleanToTerraform(this._schemaOnly),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array: {
        value: cdktf.booleanToHclTerraform(this._array),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backlink_attribute: {
        value: cdktf.stringToHclTerraform(this._backlinkAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._path),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schema_only: {
        value: cdktf.booleanToHclTerraform(this._schemaOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
