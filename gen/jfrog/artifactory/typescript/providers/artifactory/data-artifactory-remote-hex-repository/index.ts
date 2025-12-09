// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/remote_hex_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryRemoteHexRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/remote_hex_repository#key DataArtifactoryRemoteHexRepository#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/remote_hex_repository artifactory_remote_hex_repository}
*/
export class DataArtifactoryRemoteHexRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_remote_hex_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryRemoteHexRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryRemoteHexRepository to import
  * @param importFromId The id of the existing DataArtifactoryRemoteHexRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/remote_hex_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryRemoteHexRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_remote_hex_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/remote_hex_repository artifactory_remote_hex_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryRemoteHexRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryRemoteHexRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_remote_hex_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any_host_auth - computed: true, optional: false, required: false
  public get allowAnyHostAuth() {
    return this.getBooleanAttribute('allow_any_host_auth');
  }

  // assumed_offline_period_secs - computed: true, optional: false, required: false
  public get assumedOfflinePeriodSecs() {
    return this.getNumberAttribute('assumed_offline_period_secs');
  }

  // block_mismatching_mime_types - computed: true, optional: false, required: false
  public get blockMismatchingMimeTypes() {
    return this.getBooleanAttribute('block_mismatching_mime_types');
  }

  // bypass_head_requests - computed: true, optional: false, required: false
  public get bypassHeadRequests() {
    return this.getBooleanAttribute('bypass_head_requests');
  }

  // client_tls_certificate - computed: true, optional: false, required: false
  public get clientTlsCertificate() {
    return this.getStringAttribute('client_tls_certificate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_proxy - computed: true, optional: false, required: false
  public get disableProxy() {
    return this.getBooleanAttribute('disable_proxy');
  }

  // disable_url_normalization - computed: true, optional: false, required: false
  public get disableUrlNormalization() {
    return this.getBooleanAttribute('disable_url_normalization');
  }

  // enable_cookie_management - computed: true, optional: false, required: false
  public get enableCookieManagement() {
    return this.getBooleanAttribute('enable_cookie_management');
  }

  // excludes_pattern - computed: true, optional: false, required: false
  public get excludesPattern() {
    return this.getStringAttribute('excludes_pattern');
  }

  // hard_fail - computed: true, optional: false, required: false
  public get hardFail() {
    return this.getBooleanAttribute('hard_fail');
  }

  // hex_primary_keypair_ref - computed: true, optional: false, required: false
  public get hexPrimaryKeypairRef() {
    return this.getStringAttribute('hex_primary_keypair_ref');
  }

  // includes_pattern - computed: true, optional: false, required: false
  public get includesPattern() {
    return this.getStringAttribute('includes_pattern');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // list_remote_folder_items - computed: true, optional: false, required: false
  public get listRemoteFolderItems() {
    return this.getBooleanAttribute('list_remote_folder_items');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // metadata_retrieval_timeout_secs - computed: true, optional: false, required: false
  public get metadataRetrievalTimeoutSecs() {
    return this.getNumberAttribute('metadata_retrieval_timeout_secs');
  }

  // mismatching_mime_types_override_list - computed: true, optional: false, required: false
  public get mismatchingMimeTypesOverrideList() {
    return this.getStringAttribute('mismatching_mime_types_override_list');
  }

  // missed_cache_period_seconds - computed: true, optional: false, required: false
  public get missedCachePeriodSeconds() {
    return this.getNumberAttribute('missed_cache_period_seconds');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // offline - computed: true, optional: false, required: false
  public get offline() {
    return this.getBooleanAttribute('offline');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // project_environments - computed: true, optional: false, required: false
  public get projectEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('project_environments'));
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getStringAttribute('proxy');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // query_params - computed: true, optional: false, required: false
  public get queryParams() {
    return this.getStringAttribute('query_params');
  }

  // remote_repo_layout_ref - computed: true, optional: false, required: false
  public get remoteRepoLayoutRef() {
    return this.getStringAttribute('remote_repo_layout_ref');
  }

  // repo_layout_ref - computed: true, optional: false, required: false
  public get repoLayoutRef() {
    return this.getStringAttribute('repo_layout_ref');
  }

  // retrieval_cache_period_seconds - computed: true, optional: false, required: false
  public get retrievalCachePeriodSeconds() {
    return this.getNumberAttribute('retrieval_cache_period_seconds');
  }

  // share_configuration - computed: true, optional: false, required: false
  public get shareConfiguration() {
    return this.getBooleanAttribute('share_configuration');
  }

  // socket_timeout_millis - computed: true, optional: false, required: false
  public get socketTimeoutMillis() {
    return this.getNumberAttribute('socket_timeout_millis');
  }

  // store_artifacts_locally - computed: true, optional: false, required: false
  public get storeArtifactsLocally() {
    return this.getBooleanAttribute('store_artifacts_locally');
  }

  // synchronize_properties - computed: true, optional: false, required: false
  public get synchronizeProperties() {
    return this.getBooleanAttribute('synchronize_properties');
  }

  // unused_artifacts_cleanup_period_hours - computed: true, optional: false, required: false
  public get unusedArtifactsCleanupPeriodHours() {
    return this.getNumberAttribute('unused_artifacts_cleanup_period_hours');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
