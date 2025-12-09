// https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The categories that this type belongs to, to be shown in the web dashboard. Possible values are: `customer`, `issue-tracker`, `product-feature`, `service`, `on-call`, `team`, `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#categories CatalogType#categories}
  */
  readonly categories?: string[];
  /**
  * Human readble description of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#description CatalogType#description}
  */
  readonly description: string;
  /**
  * Name is the human readable name of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#name CatalogType#name}
  */
  readonly name: string;
  /**
  * The url of the external repository where this type is managed. Users will not be able to edit the catalog type (or its entries) via the UI, and will instead be provided a link to this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#source_repo_url CatalogType#source_repo_url}
  */
  readonly sourceRepoUrl: string;
  /**
  * The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom["SomeName"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#type_name CatalogType#type_name}
  */
  readonly typeName?: string;
  /**
  * If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#use_name_as_identifier CatalogType#use_name_as_identifier}
  */
  readonly useNameAsIdentifier?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type incident_catalog_type}
*/
export class CatalogType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_catalog_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogType to import
  * @param importFromId The id of the existing CatalogType that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_catalog_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/catalog_type incident_catalog_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_catalog_type',
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
    this._categories = config.categories;
    this._description = config.description;
    this._name = config.name;
    this._sourceRepoUrl = config.sourceRepoUrl;
    this._typeName = config.typeName;
    this._useNameAsIdentifier = config.useNameAsIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: true, required: false
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // source_repo_url - computed: false, optional: false, required: true
  private _sourceRepoUrl?: string; 
  public get sourceRepoUrl() {
    return this.getStringAttribute('source_repo_url');
  }
  public set sourceRepoUrl(value: string) {
    this._sourceRepoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepoUrlInput() {
    return this._sourceRepoUrl;
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

  // use_name_as_identifier - computed: true, optional: true, required: false
  private _useNameAsIdentifier?: boolean | cdktf.IResolvable; 
  public get useNameAsIdentifier() {
    return this.getBooleanAttribute('use_name_as_identifier');
  }
  public set useNameAsIdentifier(value: boolean | cdktf.IResolvable) {
    this._useNameAsIdentifier = value;
  }
  public resetUseNameAsIdentifier() {
    this._useNameAsIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNameAsIdentifierInput() {
    return this._useNameAsIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      source_repo_url: cdktf.stringToTerraform(this._sourceRepoUrl),
      type_name: cdktf.stringToTerraform(this._typeName),
      use_name_as_identifier: cdktf.booleanToTerraform(this._useNameAsIdentifier),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      source_repo_url: {
        value: cdktf.stringToHclTerraform(this._sourceRepoUrl),
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
      use_name_as_identifier: {
        value: cdktf.booleanToHclTerraform(this._useNameAsIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
