// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudsmithRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository#id DataCloudsmithRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository#identifier DataCloudsmithRepository#identifier}
  */
  readonly identifier: string;
  /**
  * Namespace to which this repository belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository#namespace DataCloudsmithRepository#namespace}
  */
  readonly namespace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository cloudsmith_repository}
*/
export class DataCloudsmithRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudsmithRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudsmithRepository to import
  * @param importFromId The id of the existing DataCloudsmithRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudsmithRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/data-sources/repository cloudsmith_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudsmithRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudsmithRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_repository',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.67',
        providerVersionConstraint: '0.0.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_url - computed: true, optional: false, required: false
  public get cdnUrl() {
    return this.getStringAttribute('cdn_url');
  }

  // contextual_auth_realm - computed: true, optional: false, required: false
  public get contextualAuthRealm() {
    return this.getBooleanAttribute('contextual_auth_realm');
  }

  // copy_own - computed: true, optional: false, required: false
  public get copyOwn() {
    return this.getBooleanAttribute('copy_own');
  }

  // copy_packages - computed: true, optional: false, required: false
  public get copyPackages() {
    return this.getStringAttribute('copy_packages');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_privilege - computed: true, optional: false, required: false
  public get defaultPrivilege() {
    return this.getStringAttribute('default_privilege');
  }

  // delete_own - computed: true, optional: false, required: false
  public get deleteOwn() {
    return this.getBooleanAttribute('delete_own');
  }

  // delete_packages - computed: true, optional: false, required: false
  public get deletePackages() {
    return this.getStringAttribute('delete_packages');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docker_refresh_tokens_enabled - computed: true, optional: false, required: false
  public get dockerRefreshTokensEnabled() {
    return this.getBooleanAttribute('docker_refresh_tokens_enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // index_files - computed: true, optional: false, required: false
  public get indexFiles() {
    return this.getBooleanAttribute('index_files');
  }

  // is_open_source - computed: true, optional: false, required: false
  public get isOpenSource() {
    return this.getBooleanAttribute('is_open_source');
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // move_own - computed: true, optional: false, required: false
  public get moveOwn() {
    return this.getBooleanAttribute('move_own');
  }

  // move_packages - computed: true, optional: false, required: false
  public get movePackages() {
    return this.getStringAttribute('move_packages');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_url - computed: true, optional: false, required: false
  public get namespaceUrl() {
    return this.getStringAttribute('namespace_url');
  }

  // proxy_npmjs - computed: true, optional: false, required: false
  public get proxyNpmjs() {
    return this.getBooleanAttribute('proxy_npmjs');
  }

  // proxy_pypi - computed: true, optional: false, required: false
  public get proxyPypi() {
    return this.getBooleanAttribute('proxy_pypi');
  }

  // raw_package_index_enabled - computed: true, optional: false, required: false
  public get rawPackageIndexEnabled() {
    return this.getBooleanAttribute('raw_package_index_enabled');
  }

  // raw_package_index_signatures_enabled - computed: true, optional: false, required: false
  public get rawPackageIndexSignaturesEnabled() {
    return this.getBooleanAttribute('raw_package_index_signatures_enabled');
  }

  // replace_packages - computed: true, optional: false, required: false
  public get replacePackages() {
    return this.getStringAttribute('replace_packages');
  }

  // replace_packages_by_default - computed: true, optional: false, required: false
  public get replacePackagesByDefault() {
    return this.getBooleanAttribute('replace_packages_by_default');
  }

  // repository_type - computed: true, optional: false, required: false
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }

  // resync_own - computed: true, optional: false, required: false
  public get resyncOwn() {
    return this.getBooleanAttribute('resync_own');
  }

  // resync_packages - computed: true, optional: false, required: false
  public get resyncPackages() {
    return this.getStringAttribute('resync_packages');
  }

  // scan_own - computed: true, optional: false, required: false
  public get scanOwn() {
    return this.getBooleanAttribute('scan_own');
  }

  // scan_packages - computed: true, optional: false, required: false
  public get scanPackages() {
    return this.getStringAttribute('scan_packages');
  }

  // self_html_url - computed: true, optional: false, required: false
  public get selfHtmlUrl() {
    return this.getStringAttribute('self_html_url');
  }

  // self_url - computed: true, optional: false, required: false
  public get selfUrl() {
    return this.getStringAttribute('self_url');
  }

  // show_setup_all - computed: true, optional: false, required: false
  public get showSetupAll() {
    return this.getBooleanAttribute('show_setup_all');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // storage_region - computed: true, optional: false, required: false
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }

  // strict_npm_validation - computed: true, optional: false, required: false
  public get strictNpmValidation() {
    return this.getBooleanAttribute('strict_npm_validation');
  }

  // tag_pre_releases_as_latest - computed: true, optional: false, required: false
  public get tagPreReleasesAsLatest() {
    return this.getBooleanAttribute('tag_pre_releases_as_latest');
  }

  // use_debian_labels - computed: true, optional: false, required: false
  public get useDebianLabels() {
    return this.getBooleanAttribute('use_debian_labels');
  }

  // use_default_cargo_upstream - computed: true, optional: false, required: false
  public get useDefaultCargoUpstream() {
    return this.getBooleanAttribute('use_default_cargo_upstream');
  }

  // use_entitlements_privilege - computed: true, optional: false, required: false
  public get useEntitlementsPrivilege() {
    return this.getStringAttribute('use_entitlements_privilege');
  }

  // use_noarch_packages - computed: true, optional: false, required: false
  public get useNoarchPackages() {
    return this.getBooleanAttribute('use_noarch_packages');
  }

  // use_source_packages - computed: true, optional: false, required: false
  public get useSourcePackages() {
    return this.getBooleanAttribute('use_source_packages');
  }

  // use_vulnerability_scanning - computed: true, optional: false, required: false
  public get useVulnerabilityScanning() {
    return this.getBooleanAttribute('use_vulnerability_scanning');
  }

  // user_entitlements_enabled - computed: true, optional: false, required: false
  public get userEntitlementsEnabled() {
    return this.getBooleanAttribute('user_entitlements_enabled');
  }

  // view_statistics - computed: true, optional: false, required: false
  public get viewStatistics() {
    return this.getStringAttribute('view_statistics');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
