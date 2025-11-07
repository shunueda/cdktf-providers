// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrIndexerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indexer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer#name DataSonarrIndexer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer sonarr_indexer}
*/
export class DataSonarrIndexer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrIndexer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrIndexer to import
  * @param importFromId The id of the existing DataSonarrIndexer that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrIndexer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer sonarr_indexer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrIndexerConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrIndexerConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_parameters - computed: true, optional: false, required: false
  public get additionalParameters() {
    return this.getStringAttribute('additional_parameters');
  }

  // allow_zero_size - computed: true, optional: false, required: false
  public get allowZeroSize() {
    return this.getBooleanAttribute('allow_zero_size');
  }

  // anime_categories - computed: true, optional: false, required: false
  public get animeCategories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('anime_categories')));
  }

  // anime_standard_format_search - computed: true, optional: false, required: false
  public get animeStandardFormatSearch() {
    return this.getBooleanAttribute('anime_standard_format_search');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_path - computed: true, optional: false, required: false
  public get apiPath() {
    return this.getStringAttribute('api_path');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // captcha_token - computed: true, optional: false, required: false
  public get captchaToken() {
    return this.getStringAttribute('captcha_token');
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }

  // config_contract - computed: true, optional: false, required: false
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // download_client_id - computed: true, optional: false, required: false
  public get downloadClientId() {
    return this.getNumberAttribute('download_client_id');
  }

  // enable_automatic_search - computed: true, optional: false, required: false
  public get enableAutomaticSearch() {
    return this.getBooleanAttribute('enable_automatic_search');
  }

  // enable_interactive_search - computed: true, optional: false, required: false
  public get enableInteractiveSearch() {
    return this.getBooleanAttribute('enable_interactive_search');
  }

  // enable_rss - computed: true, optional: false, required: false
  public get enableRss() {
    return this.getBooleanAttribute('enable_rss');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // minimum_seeders - computed: true, optional: false, required: false
  public get minimumSeeders() {
    return this.getNumberAttribute('minimum_seeders');
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

  // passkey - computed: true, optional: false, required: false
  public get passkey() {
    return this.getStringAttribute('passkey');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ranked_only - computed: true, optional: false, required: false
  public get rankedOnly() {
    return this.getBooleanAttribute('ranked_only');
  }

  // season_pack_seed_time - computed: true, optional: false, required: false
  public get seasonPackSeedTime() {
    return this.getNumberAttribute('season_pack_seed_time');
  }

  // seed_ratio - computed: true, optional: false, required: false
  public get seedRatio() {
    return this.getNumberAttribute('seed_ratio');
  }

  // seed_time - computed: true, optional: false, required: false
  public get seedTime() {
    return this.getNumberAttribute('seed_time');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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
