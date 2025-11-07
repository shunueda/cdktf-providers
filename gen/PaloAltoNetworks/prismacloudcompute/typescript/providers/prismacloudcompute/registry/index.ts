// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of images to scan from each repository, sorted by most recently modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#cap Registry#cap}
  */
  readonly cap?: number;
  /**
  * The set of Defenders available for scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#collections Registry#collections}
  */
  readonly collections?: string[];
  /**
  * The name of the credential from the credentials store to use for authenticating with the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#credential Registry#credential}
  */
  readonly credential?: string;
  /**
  * Repositories to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#excluded_repositories Registry#excluded_repositories}
  */
  readonly excludedRepositories?: string[];
  /**
  * Tags to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#excluded_tags Registry#excluded_tags}
  */
  readonly excludedTags?: string[];
  /**
  * Use temporary tokens provided by Harbor to scan images in projects with the deployment security setting enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#harbor_deployment_security Registry#harbor_deployment_security}
  */
  readonly harborDeploymentSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#id Registry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JFrog Artifactory repository types to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#jfrog_repo_types Registry#jfrog_repo_types}
  */
  readonly jfrogRepoTypes?: string[];
  /**
  * IBM Cloud namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#namespace Registry#namespace}
  */
  readonly namespace?: string;
  /**
  * The base OS of the registry images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#os Registry#os}
  */
  readonly os?: string;
  /**
  * Registry address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#registry Registry#registry}
  */
  readonly registry?: string;
  /**
  * Repositories to scan. Pattern matching is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#repository Registry#repository}
  */
  readonly repository?: string;
  /**
  * Number of Defenders that can be utilized for each scan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#scanners Registry#scanners}
  */
  readonly scanners?: number;
  /**
  * Tags to scan. Pattern matching is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#tag Registry#tag}
  */
  readonly tag?: string;
  /**
  * Registry type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#type Registry#type}
  */
  readonly type?: string;
  /**
  * Pattern used by the scanner to identify the latest tags without querying the registry for additional metadata. If a pattern specifies both date and version, date takes precedence over version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#version_pattern Registry#version_pattern}
  */
  readonly versionPattern?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry prismacloudcompute_registry}
*/
export class Registry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registry to import
  * @param importFromId The id of the existing Registry that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry prismacloudcompute_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RegistryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_registry',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cap = config.cap;
    this._collections = config.collections;
    this._credential = config.credential;
    this._excludedRepositories = config.excludedRepositories;
    this._excludedTags = config.excludedTags;
    this._harborDeploymentSecurity = config.harborDeploymentSecurity;
    this._id = config.id;
    this._jfrogRepoTypes = config.jfrogRepoTypes;
    this._namespace = config.namespace;
    this._os = config.os;
    this._registry = config.registry;
    this._repository = config.repository;
    this._scanners = config.scanners;
    this._tag = config.tag;
    this._type = config.type;
    this._versionPattern = config.versionPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cap - computed: false, optional: true, required: false
  private _cap?: number; 
  public get cap() {
    return this.getNumberAttribute('cap');
  }
  public set cap(value: number) {
    this._cap = value;
  }
  public resetCap() {
    this._cap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capInput() {
    return this._cap;
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // excluded_repositories - computed: false, optional: true, required: false
  private _excludedRepositories?: string[]; 
  public get excludedRepositories() {
    return this.getListAttribute('excluded_repositories');
  }
  public set excludedRepositories(value: string[]) {
    this._excludedRepositories = value;
  }
  public resetExcludedRepositories() {
    this._excludedRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRepositoriesInput() {
    return this._excludedRepositories;
  }

  // excluded_tags - computed: false, optional: true, required: false
  private _excludedTags?: string[]; 
  public get excludedTags() {
    return this.getListAttribute('excluded_tags');
  }
  public set excludedTags(value: string[]) {
    this._excludedTags = value;
  }
  public resetExcludedTags() {
    this._excludedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagsInput() {
    return this._excludedTags;
  }

  // harbor_deployment_security - computed: false, optional: true, required: false
  private _harborDeploymentSecurity?: boolean | cdktf.IResolvable; 
  public get harborDeploymentSecurity() {
    return this.getBooleanAttribute('harbor_deployment_security');
  }
  public set harborDeploymentSecurity(value: boolean | cdktf.IResolvable) {
    this._harborDeploymentSecurity = value;
  }
  public resetHarborDeploymentSecurity() {
    this._harborDeploymentSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harborDeploymentSecurityInput() {
    return this._harborDeploymentSecurity;
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

  // jfrog_repo_types - computed: false, optional: true, required: false
  private _jfrogRepoTypes?: string[]; 
  public get jfrogRepoTypes() {
    return this.getListAttribute('jfrog_repo_types');
  }
  public set jfrogRepoTypes(value: string[]) {
    this._jfrogRepoTypes = value;
  }
  public resetJfrogRepoTypes() {
    this._jfrogRepoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfrogRepoTypesInput() {
    return this._jfrogRepoTypes;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // scanners - computed: false, optional: true, required: false
  private _scanners?: number; 
  public get scanners() {
    return this.getNumberAttribute('scanners');
  }
  public set scanners(value: number) {
    this._scanners = value;
  }
  public resetScanners() {
    this._scanners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersInput() {
    return this._scanners;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version_pattern - computed: false, optional: true, required: false
  private _versionPattern?: string; 
  public get versionPattern() {
    return this.getStringAttribute('version_pattern');
  }
  public set versionPattern(value: string) {
    this._versionPattern = value;
  }
  public resetVersionPattern() {
    this._versionPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPatternInput() {
    return this._versionPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cap: cdktf.numberToTerraform(this._cap),
      collections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collections),
      credential: cdktf.stringToTerraform(this._credential),
      excluded_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedRepositories),
      excluded_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedTags),
      harbor_deployment_security: cdktf.booleanToTerraform(this._harborDeploymentSecurity),
      id: cdktf.stringToTerraform(this._id),
      jfrog_repo_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jfrogRepoTypes),
      namespace: cdktf.stringToTerraform(this._namespace),
      os: cdktf.stringToTerraform(this._os),
      registry: cdktf.stringToTerraform(this._registry),
      repository: cdktf.stringToTerraform(this._repository),
      scanners: cdktf.numberToTerraform(this._scanners),
      tag: cdktf.stringToTerraform(this._tag),
      type: cdktf.stringToTerraform(this._type),
      version_pattern: cdktf.stringToTerraform(this._versionPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cap: {
        value: cdktf.numberToHclTerraform(this._cap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      credential: {
        value: cdktf.stringToHclTerraform(this._credential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedRepositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      harbor_deployment_security: {
        value: cdktf.booleanToHclTerraform(this._harborDeploymentSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jfrog_repo_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jfrogRepoTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanners: {
        value: cdktf.numberToHclTerraform(this._scanners),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_pattern: {
        value: cdktf.stringToHclTerraform(this._versionPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
