// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#specification RegistrySettings#specification}
  */
  readonly specification?: RegistrySettingsSpecification[] | cdktf.IResolvable;
}
export interface RegistrySettingsSpecification {
  /**
  * The maximum number of images to scan from each repository, sorted by most recently modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#cap RegistrySettings#cap}
  */
  readonly cap?: number;
  /**
  * The set of Defenders available for scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#collections RegistrySettings#collections}
  */
  readonly collections?: string[];
  /**
  * The name of the credential from the credentials store to use for authenticating with the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#credential RegistrySettings#credential}
  */
  readonly credential?: string;
  /**
  * Repositories to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#excluded_repositories RegistrySettings#excluded_repositories}
  */
  readonly excludedRepositories?: string[];
  /**
  * Tags to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#excluded_tags RegistrySettings#excluded_tags}
  */
  readonly excludedTags?: string[];
  /**
  * Use temporary tokens provided by Harbor to scan images in projects with the deployment security setting enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#harbor_deployment_security RegistrySettings#harbor_deployment_security}
  */
  readonly harborDeploymentSecurity?: boolean | cdktf.IResolvable;
  /**
  * JFrog Artifactory repository types to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#jfrog_repo_types RegistrySettings#jfrog_repo_types}
  */
  readonly jfrogRepoTypes?: string[];
  /**
  * IBM Cloud namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#namespace RegistrySettings#namespace}
  */
  readonly namespace?: string;
  /**
  * The base OS of the registry images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#os RegistrySettings#os}
  */
  readonly os?: string;
  /**
  * Registry address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#registry RegistrySettings#registry}
  */
  readonly registry?: string;
  /**
  * Repositories to scan. Pattern matching is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#repository RegistrySettings#repository}
  */
  readonly repository?: string;
  /**
  * Number of Defenders that can be utilized for each scan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#scanners RegistrySettings#scanners}
  */
  readonly scanners?: number;
  /**
  * Tags to scan. Pattern matching is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#tag RegistrySettings#tag}
  */
  readonly tag?: string;
  /**
  * Registry type. Can be set to 'aws', 'azure', 'gcp', 'ibmCloud', 'oci', 'apiToken', 'githubToken', 'githubEnterpriseToken', 'basic', 'dtr', 'kubeconfig' or 'certificate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#type RegistrySettings#type}
  */
  readonly type?: string;
  /**
  * Pattern used by the scanner to identify the latest tags without querying the registry for additional metadata. If a pattern specifies both date and version, date takes precedence over version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#version_pattern RegistrySettings#version_pattern}
  */
  readonly versionPattern?: string;
}

export function registrySettingsSpecificationToTerraform(struct?: RegistrySettingsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cap: cdktf.numberToTerraform(struct!.cap),
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    credential: cdktf.stringToTerraform(struct!.credential),
    excluded_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedRepositories),
    excluded_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedTags),
    harbor_deployment_security: cdktf.booleanToTerraform(struct!.harborDeploymentSecurity),
    jfrog_repo_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jfrogRepoTypes),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    os: cdktf.stringToTerraform(struct!.os),
    registry: cdktf.stringToTerraform(struct!.registry),
    repository: cdktf.stringToTerraform(struct!.repository),
    scanners: cdktf.numberToTerraform(struct!.scanners),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    version_pattern: cdktf.stringToTerraform(struct!.versionPattern),
  }
}


export function registrySettingsSpecificationToHclTerraform(struct?: RegistrySettingsSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cap: {
      value: cdktf.numberToHclTerraform(struct!.cap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedRepositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    harbor_deployment_security: {
      value: cdktf.booleanToHclTerraform(struct!.harborDeploymentSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jfrog_repo_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jfrogRepoTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scanners: {
      value: cdktf.numberToHclTerraform(struct!.scanners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_pattern: {
      value: cdktf.stringToHclTerraform(struct!.versionPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrySettingsSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RegistrySettingsSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cap !== undefined) {
      hasAnyValues = true;
      internalValueResult.cap = this._cap;
    }
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._excludedRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRepositories = this._excludedRepositories;
    }
    if (this._excludedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedTags = this._excludedTags;
    }
    if (this._harborDeploymentSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.harborDeploymentSecurity = this._harborDeploymentSecurity;
    }
    if (this._jfrogRepoTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jfrogRepoTypes = this._jfrogRepoTypes;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._scanners !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanners = this._scanners;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._versionPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPattern = this._versionPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrySettingsSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cap = undefined;
      this._collections = undefined;
      this._credential = undefined;
      this._excludedRepositories = undefined;
      this._excludedTags = undefined;
      this._harborDeploymentSecurity = undefined;
      this._jfrogRepoTypes = undefined;
      this._namespace = undefined;
      this._os = undefined;
      this._registry = undefined;
      this._repository = undefined;
      this._scanners = undefined;
      this._tag = undefined;
      this._type = undefined;
      this._versionPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cap = value.cap;
      this._collections = value.collections;
      this._credential = value.credential;
      this._excludedRepositories = value.excludedRepositories;
      this._excludedTags = value.excludedTags;
      this._harborDeploymentSecurity = value.harborDeploymentSecurity;
      this._jfrogRepoTypes = value.jfrogRepoTypes;
      this._namespace = value.namespace;
      this._os = value.os;
      this._registry = value.registry;
      this._repository = value.repository;
      this._scanners = value.scanners;
      this._tag = value.tag;
      this._type = value.type;
      this._versionPattern = value.versionPattern;
    }
  }

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
}

export class RegistrySettingsSpecificationList extends cdktf.ComplexList {
  public internalValue? : RegistrySettingsSpecification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RegistrySettingsSpecificationOutputReference {
    return new RegistrySettingsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings prismacloudcompute_registry_settings}
*/
export class RegistrySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_registry_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistrySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistrySettings to import
  * @param importFromId The id of the existing RegistrySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistrySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_registry_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/registry_settings prismacloudcompute_registry_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RegistrySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_registry_settings',
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
    this._specification.internalValue = config.specification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // specification - computed: false, optional: true, required: false
  private _specification = new RegistrySettingsSpecificationList(this, "specification", false);
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: RegistrySettingsSpecification[] | cdktf.IResolvable) {
    this._specification.internalValue = value;
  }
  public resetSpecification() {
    this._specification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      specification: cdktf.listMapper(registrySettingsSpecificationToTerraform, true)(this._specification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      specification: {
        value: cdktf.listMapperHcl(registrySettingsSpecificationToHclTerraform, true)(this._specification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegistrySettingsSpecificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
