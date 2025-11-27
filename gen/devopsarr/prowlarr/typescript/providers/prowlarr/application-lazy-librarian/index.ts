// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationLazyLibrarianConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#api_key ApplicationLazyLibrarian#api_key}
  */
  readonly apiKey: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#base_url ApplicationLazyLibrarian#base_url}
  */
  readonly baseUrl: string;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#name ApplicationLazyLibrarian#name}
  */
  readonly name: string;
  /**
  * Prowlarr URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#prowlarr_url ApplicationLazyLibrarian#prowlarr_url}
  */
  readonly prowlarrUrl: string;
  /**
  * Sync categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#sync_categories ApplicationLazyLibrarian#sync_categories}
  */
  readonly syncCategories?: number[];
  /**
  * Sync level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#sync_level ApplicationLazyLibrarian#sync_level}
  */
  readonly syncLevel: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#tags ApplicationLazyLibrarian#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian prowlarr_application_lazy_librarian}
*/
export class ApplicationLazyLibrarian extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_application_lazy_librarian";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationLazyLibrarian resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationLazyLibrarian to import
  * @param importFromId The id of the existing ApplicationLazyLibrarian that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationLazyLibrarian to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_application_lazy_librarian", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/application_lazy_librarian prowlarr_application_lazy_librarian} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationLazyLibrarianConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationLazyLibrarianConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_application_lazy_librarian',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._name = config.name;
    this._prowlarrUrl = config.prowlarrUrl;
    this._syncCategories = config.syncCategories;
    this._syncLevel = config.syncLevel;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // prowlarr_url - computed: false, optional: false, required: true
  private _prowlarrUrl?: string; 
  public get prowlarrUrl() {
    return this.getStringAttribute('prowlarr_url');
  }
  public set prowlarrUrl(value: string) {
    this._prowlarrUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prowlarrUrlInput() {
    return this._prowlarrUrl;
  }

  // sync_categories - computed: true, optional: true, required: false
  private _syncCategories?: number[]; 
  public get syncCategories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sync_categories')));
  }
  public set syncCategories(value: number[]) {
    this._syncCategories = value;
  }
  public resetSyncCategories() {
    this._syncCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncCategoriesInput() {
    return this._syncCategories;
  }

  // sync_level - computed: false, optional: false, required: true
  private _syncLevel?: string; 
  public get syncLevel() {
    return this.getStringAttribute('sync_level');
  }
  public set syncLevel(value: string) {
    this._syncLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLevelInput() {
    return this._syncLevel;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      name: cdktf.stringToTerraform(this._name),
      prowlarr_url: cdktf.stringToTerraform(this._prowlarrUrl),
      sync_categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._syncCategories),
      sync_level: cdktf.stringToTerraform(this._syncLevel),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
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
      prowlarr_url: {
        value: cdktf.stringToHclTerraform(this._prowlarrUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._syncCategories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      sync_level: {
        value: cdktf.stringToHclTerraform(this._syncLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
