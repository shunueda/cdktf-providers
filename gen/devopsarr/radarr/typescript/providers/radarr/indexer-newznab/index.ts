// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerNewznabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#additional_parameters IndexerNewznab#additional_parameters}
  */
  readonly additionalParameters?: string;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#api_key IndexerNewznab#api_key}
  */
  readonly apiKey?: string;
  /**
  * API path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#api_path IndexerNewznab#api_path}
  */
  readonly apiPath?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#base_url IndexerNewznab#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Series list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#categories IndexerNewznab#categories}
  */
  readonly categories?: number[];
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#download_client_id IndexerNewznab#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#enable_automatic_search IndexerNewznab#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#enable_interactive_search IndexerNewznab#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#enable_rss IndexerNewznab#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * Multi languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#multi_languages IndexerNewznab#multi_languages}
  */
  readonly multiLanguages?: number[];
  /**
  * IndexerNewznab name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#name IndexerNewznab#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#priority IndexerNewznab#priority}
  */
  readonly priority?: number;
  /**
  * Remove year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#remove_year IndexerNewznab#remove_year}
  */
  readonly removeYear?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#tags IndexerNewznab#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab radarr_indexer_newznab}
*/
export class IndexerNewznab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer_newznab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerNewznab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerNewznab to import
  * @param importFromId The id of the existing IndexerNewznab that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerNewznab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer_newznab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_newznab radarr_indexer_newznab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerNewznabConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerNewznabConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer_newznab',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalParameters = config.additionalParameters;
    this._apiKey = config.apiKey;
    this._apiPath = config.apiPath;
    this._baseUrl = config.baseUrl;
    this._categories = config.categories;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
    this._enableRss = config.enableRss;
    this._multiLanguages = config.multiLanguages;
    this._name = config.name;
    this._priority = config.priority;
    this._removeYear = config.removeYear;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_parameters - computed: true, optional: true, required: false
  private _additionalParameters?: string; 
  public get additionalParameters() {
    return this.getStringAttribute('additional_parameters');
  }
  public set additionalParameters(value: string) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_path - computed: true, optional: true, required: false
  private _apiPath?: string; 
  public get apiPath() {
    return this.getStringAttribute('api_path');
  }
  public set apiPath(value: string) {
    this._apiPath = value;
  }
  public resetApiPath() {
    this._apiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPathInput() {
    return this._apiPath;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: number[]; 
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }
  public set categories(value: number[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // download_client_id - computed: true, optional: true, required: false
  private _downloadClientId?: number; 
  public get downloadClientId() {
    return this.getNumberAttribute('download_client_id');
  }
  public set downloadClientId(value: number) {
    this._downloadClientId = value;
  }
  public resetDownloadClientId() {
    this._downloadClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadClientIdInput() {
    return this._downloadClientId;
  }

  // enable_automatic_search - computed: true, optional: true, required: false
  private _enableAutomaticSearch?: boolean | cdktf.IResolvable; 
  public get enableAutomaticSearch() {
    return this.getBooleanAttribute('enable_automatic_search');
  }
  public set enableAutomaticSearch(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticSearch = value;
  }
  public resetEnableAutomaticSearch() {
    this._enableAutomaticSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticSearchInput() {
    return this._enableAutomaticSearch;
  }

  // enable_interactive_search - computed: true, optional: true, required: false
  private _enableInteractiveSearch?: boolean | cdktf.IResolvable; 
  public get enableInteractiveSearch() {
    return this.getBooleanAttribute('enable_interactive_search');
  }
  public set enableInteractiveSearch(value: boolean | cdktf.IResolvable) {
    this._enableInteractiveSearch = value;
  }
  public resetEnableInteractiveSearch() {
    this._enableInteractiveSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractiveSearchInput() {
    return this._enableInteractiveSearch;
  }

  // enable_rss - computed: true, optional: true, required: false
  private _enableRss?: boolean | cdktf.IResolvable; 
  public get enableRss() {
    return this.getBooleanAttribute('enable_rss');
  }
  public set enableRss(value: boolean | cdktf.IResolvable) {
    this._enableRss = value;
  }
  public resetEnableRss() {
    this._enableRss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRssInput() {
    return this._enableRss;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // multi_languages - computed: true, optional: true, required: false
  private _multiLanguages?: number[]; 
  public get multiLanguages() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('multi_languages')));
  }
  public set multiLanguages(value: number[]) {
    this._multiLanguages = value;
  }
  public resetMultiLanguages() {
    this._multiLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLanguagesInput() {
    return this._multiLanguages;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remove_year - computed: true, optional: true, required: false
  private _removeYear?: boolean | cdktf.IResolvable; 
  public get removeYear() {
    return this.getBooleanAttribute('remove_year');
  }
  public set removeYear(value: boolean | cdktf.IResolvable) {
    this._removeYear = value;
  }
  public resetRemoveYear() {
    this._removeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeYearInput() {
    return this._removeYear;
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
      additional_parameters: cdktf.stringToTerraform(this._additionalParameters),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_path: cdktf.stringToTerraform(this._apiPath),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._categories),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      multi_languages: cdktf.listMapper(cdktf.numberToTerraform, false)(this._multiLanguages),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      remove_year: cdktf.booleanToTerraform(this._removeYear),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_parameters: {
        value: cdktf.stringToHclTerraform(this._additionalParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_path: {
        value: cdktf.stringToHclTerraform(this._apiPath),
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
      categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      download_client_id: {
        value: cdktf.numberToHclTerraform(this._downloadClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_automatic_search: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_interactive_search: {
        value: cdktf.booleanToHclTerraform(this._enableInteractiveSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rss: {
        value: cdktf.booleanToHclTerraform(this._enableRss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_languages: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._multiLanguages),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_year: {
        value: cdktf.booleanToHclTerraform(this._removeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
