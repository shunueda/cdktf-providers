// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseBundleV2PromotionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Target environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#environment ReleaseBundleV2Promotion#environment}
  */
  readonly environment: string;
  /**
  * Defines specific repositories to exclude from the promotion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#excluded_repository_keys ReleaseBundleV2Promotion#excluded_repository_keys}
  */
  readonly excludedRepositoryKeys?: string[];
  /**
  * Defines specific repositories to include in the promotion. If this property is left undefined, all repositories (except those specifically excluded) are included in the promotion. Important: If one or more repositories are specifically included, all other repositories are excluded (regardless of what is defined in `excluded_repository_keys`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#included_repository_keys ReleaseBundleV2Promotion#included_repository_keys}
  */
  readonly includedRepositoryKeys?: string[];
  /**
  * Key-pair name to use for signature creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#keypair_name ReleaseBundleV2Promotion#keypair_name}
  */
  readonly keypairName: string;
  /**
  * Name of Release Bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#name ReleaseBundleV2Promotion#name}
  */
  readonly name: string;
  /**
  * Project key the Release Bundle belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#project_key ReleaseBundleV2Promotion#project_key}
  */
  readonly projectKey?: string;
  /**
  * Version to promote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#version ReleaseBundleV2Promotion#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion artifactory_release_bundle_v2_promotion}
*/
export class ReleaseBundleV2Promotion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_release_bundle_v2_promotion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseBundleV2Promotion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseBundleV2Promotion to import
  * @param importFromId The id of the existing ReleaseBundleV2Promotion that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseBundleV2Promotion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_release_bundle_v2_promotion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2_promotion artifactory_release_bundle_v2_promotion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseBundleV2PromotionConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseBundleV2PromotionConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_release_bundle_v2_promotion',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1',
        providerVersionConstraint: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._excludedRepositoryKeys = config.excludedRepositoryKeys;
    this._includedRepositoryKeys = config.includedRepositoryKeys;
    this._keypairName = config.keypairName;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_millis - computed: true, optional: false, required: false
  public get createdMillis() {
    return this.getNumberAttribute('created_millis');
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // excluded_repository_keys - computed: false, optional: true, required: false
  private _excludedRepositoryKeys?: string[]; 
  public get excludedRepositoryKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_repository_keys'));
  }
  public set excludedRepositoryKeys(value: string[]) {
    this._excludedRepositoryKeys = value;
  }
  public resetExcludedRepositoryKeys() {
    this._excludedRepositoryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRepositoryKeysInput() {
    return this._excludedRepositoryKeys;
  }

  // included_repository_keys - computed: false, optional: true, required: false
  private _includedRepositoryKeys?: string[]; 
  public get includedRepositoryKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('included_repository_keys'));
  }
  public set includedRepositoryKeys(value: string[]) {
    this._includedRepositoryKeys = value;
  }
  public resetIncludedRepositoryKeys() {
    this._includedRepositoryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedRepositoryKeysInput() {
    return this._includedRepositoryKeys;
  }

  // keypair_name - computed: false, optional: false, required: true
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      excluded_repository_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedRepositoryKeys),
      included_repository_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedRepositoryKeys),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_repository_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedRepositoryKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_repository_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedRepositoryKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
