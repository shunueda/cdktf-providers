// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/indexer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrIndexerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indexer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/indexer#name DataRadarrIndexer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/indexer radarr_indexer}
*/
export class DataRadarrIndexer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrIndexer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrIndexer to import
  * @param importFromId The id of the existing DataRadarrIndexer that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/indexer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrIndexer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/indexer radarr_indexer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrIndexerConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrIndexerConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_path - computed: true, optional: false, required: false
  public get apiPath() {
    return this.getStringAttribute('api_path');
  }

  // api_user - computed: true, optional: false, required: false
  public get apiUser() {
    return this.getStringAttribute('api_user');
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

  // codecs - computed: true, optional: false, required: false
  public get codecs() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('codecs')));
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

  // mediums - computed: true, optional: false, required: false
  public get mediums() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('mediums')));
  }

  // minimum_seeders - computed: true, optional: false, required: false
  public get minimumSeeders() {
    return this.getNumberAttribute('minimum_seeders');
  }

  // multi_languages - computed: true, optional: false, required: false
  public get multiLanguages() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('multi_languages')));
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

  // remove_year - computed: true, optional: false, required: false
  public get removeYear() {
    return this.getBooleanAttribute('remove_year');
  }

  // required_flags - computed: true, optional: false, required: false
  public get requiredFlags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('required_flags')));
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

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
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
