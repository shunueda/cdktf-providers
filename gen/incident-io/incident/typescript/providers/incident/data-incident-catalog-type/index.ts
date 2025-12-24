// https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentCatalogTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The categories that this type belongs to, to be shown in the web dashboard. Possible values are: `customer`, `issue-tracker`, `product-feature`, `service`, `on-call`, `team`, `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type#categories DataIncidentCatalogType#categories}
  */
  readonly categories?: string[];
  /**
  * Name is the human readable name of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type#name DataIncidentCatalogType#name}
  */
  readonly name?: string;
  /**
  * The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom["SomeName"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type#type_name DataIncidentCatalogType#type_name}
  */
  readonly typeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type incident_catalog_type}
*/
export class DataIncidentCatalogType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentCatalogType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentCatalogType to import
  * @param importFromId The id of the existing DataIncidentCatalogType that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentCatalogType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/catalog_type incident_catalog_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentCatalogTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncidentCatalogTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_type',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.24.1',
        providerVersionConstraint: '5.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._name = config.name;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_repo_url - computed: true, optional: false, required: false
  public get sourceRepoUrl() {
    return this.getStringAttribute('source_repo_url');
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // use_name_as_identifier - computed: true, optional: false, required: false
  public get useNameAsIdentifier() {
    return this.getBooleanAttribute('use_name_as_identifier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      name: cdktf.stringToTerraform(this._name),
      type_name: cdktf.stringToTerraform(this._typeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_name: {
        value: cdktf.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
