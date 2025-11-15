// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of customizable, catalog-defined fields providing information about a service. Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#custom_fields CatalogService#custom_fields}
  */
  readonly customFields?: string;
  /**
  * Optionally provide a description of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#description CatalogService#description}
  */
  readonly description?: string;
  /**
  * The display name of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#display_name CatalogService#display_name}
  */
  readonly displayName: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#labels CatalogService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine name of the Service that uniquely identifies it within the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#name CatalogService#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service konnect_catalog_service}
*/
export class CatalogService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_catalog_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogService to import
  * @param importFromId The id of the existing CatalogService that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_catalog_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/catalog_service konnect_catalog_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogServiceConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_catalog_service',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFields = config.customFields;
    this._description = config.description;
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_fields - computed: true, optional: true, required: false
  private _customFields?: string; 
  public get customFields() {
    return this.getStringAttribute('custom_fields');
  }
  public set customFields(value: string) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_fields: cdktf.stringToTerraform(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_fields: {
        value: cdktf.stringToHclTerraform(this._customFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
