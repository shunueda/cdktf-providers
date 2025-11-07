// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerNewznabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#additional_parameters IndexerNewznab#additional_parameters}
  */
  readonly additionalParameters?: string;
  /**
  * Anime list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#anime_categories IndexerNewznab#anime_categories}
  */
  readonly animeCategories?: number[];
  /**
  * Search anime in standard format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#anime_standard_format_search IndexerNewznab#anime_standard_format_search}
  */
  readonly animeStandardFormatSearch?: boolean | cdktf.IResolvable;
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#api_key IndexerNewznab#api_key}
  */
  readonly apiKey?: string;
  /**
  * API path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#api_path IndexerNewznab#api_path}
  */
  readonly apiPath?: string;
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#base_url IndexerNewznab#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Series list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#categories IndexerNewznab#categories}
  */
  readonly categories?: number[];
  /**
  * Download client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#download_client_id IndexerNewznab#download_client_id}
  */
  readonly downloadClientId?: number;
  /**
  * Enable automatic search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#enable_automatic_search IndexerNewznab#enable_automatic_search}
  */
  readonly enableAutomaticSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable interactive search flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#enable_interactive_search IndexerNewznab#enable_interactive_search}
  */
  readonly enableInteractiveSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable RSS flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#enable_rss IndexerNewznab#enable_rss}
  */
  readonly enableRss?: boolean | cdktf.IResolvable;
  /**
  * IndexerNewznab name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#name IndexerNewznab#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#priority IndexerNewznab#priority}
  */
  readonly priority?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#tags IndexerNewznab#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab sonarr_indexer_newznab}
*/
export class IndexerNewznab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer_newznab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerNewznab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerNewznab to import
  * @param importFromId The id of the existing IndexerNewznab that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerNewznab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer_newznab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_newznab sonarr_indexer_newznab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerNewznabConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerNewznabConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer_newznab',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
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
    this._animeCategories = config.animeCategories;
    this._animeStandardFormatSearch = config.animeStandardFormatSearch;
    this._apiKey = config.apiKey;
    this._apiPath = config.apiPath;
    this._baseUrl = config.baseUrl;
    this._categories = config.categories;
    this._downloadClientId = config.downloadClientId;
    this._enableAutomaticSearch = config.enableAutomaticSearch;
    this._enableInteractiveSearch = config.enableInteractiveSearch;
    this._enableRss = config.enableRss;
    this._name = config.name;
    this._priority = config.priority;
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

  // anime_categories - computed: true, optional: true, required: false
  private _animeCategories?: number[]; 
  public get animeCategories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('anime_categories')));
  }
  public set animeCategories(value: number[]) {
    this._animeCategories = value;
  }
  public resetAnimeCategories() {
    this._animeCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animeCategoriesInput() {
    return this._animeCategories;
  }

  // anime_standard_format_search - computed: true, optional: true, required: false
  private _animeStandardFormatSearch?: boolean | cdktf.IResolvable; 
  public get animeStandardFormatSearch() {
    return this.getBooleanAttribute('anime_standard_format_search');
  }
  public set animeStandardFormatSearch(value: boolean | cdktf.IResolvable) {
    this._animeStandardFormatSearch = value;
  }
  public resetAnimeStandardFormatSearch() {
    this._animeStandardFormatSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animeStandardFormatSearchInput() {
    return this._animeStandardFormatSearch;
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
      anime_categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._animeCategories),
      anime_standard_format_search: cdktf.booleanToTerraform(this._animeStandardFormatSearch),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_path: cdktf.stringToTerraform(this._apiPath),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      categories: cdktf.listMapper(cdktf.numberToTerraform, false)(this._categories),
      download_client_id: cdktf.numberToTerraform(this._downloadClientId),
      enable_automatic_search: cdktf.booleanToTerraform(this._enableAutomaticSearch),
      enable_interactive_search: cdktf.booleanToTerraform(this._enableInteractiveSearch),
      enable_rss: cdktf.booleanToTerraform(this._enableRss),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
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
      anime_categories: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._animeCategories),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      anime_standard_format_search: {
        value: cdktf.booleanToHclTerraform(this._animeStandardFormatSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
