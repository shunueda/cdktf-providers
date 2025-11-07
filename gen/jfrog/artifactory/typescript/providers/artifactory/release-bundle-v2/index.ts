// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseBundleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Key-pair name to use for signature creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#keypair_name ReleaseBundleV2#keypair_name}
  */
  readonly keypairName: string;
  /**
  * Name of Release Bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#name ReleaseBundleV2#name}
  */
  readonly name: string;
  /**
  * Project key the Release Bundle belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#project_key ReleaseBundleV2#project_key}
  */
  readonly projectKey?: string;
  /**
  * Determines whether to skip the resolution of the Docker manifest, which adds the image layers to the Release Bundle. The default value is `false` (the manifest is resolved and image layers are included).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#skip_docker_manifest_resolution ReleaseBundleV2#skip_docker_manifest_resolution}
  */
  readonly skipDockerManifestResolution?: boolean | cdktf.IResolvable;
  /**
  * Defines specific repositories to include in the promotion. If this property is left undefined, all repositories (except those specifically excluded) are included in the promotion. Important: If one or more repositories are specifically included, all other repositories are excluded (regardless of what is defined in `excluded_repository_keys`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#source ReleaseBundleV2#source}
  */
  readonly source: ReleaseBundleV2Source;
  /**
  * Source type. Valid values: `aql`, `artifacts`, `builds`, `release_bundles`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#source_type ReleaseBundleV2#source_type}
  */
  readonly sourceType: string;
  /**
  * Version to promote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#version ReleaseBundleV2#version}
  */
  readonly version: string;
}
export interface ReleaseBundleV2SourceArtifacts {
  /**
  * The path for the artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#path ReleaseBundleV2#path}
  */
  readonly path: string;
  /**
  * The SHA256 for the artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#sha256 ReleaseBundleV2#sha256}
  */
  readonly sha256?: string;
}

export function releaseBundleV2SourceArtifactsToTerraform(struct?: ReleaseBundleV2SourceArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    sha256: cdktf.stringToTerraform(struct!.sha256),
  }
}


export function releaseBundleV2SourceArtifactsToHclTerraform(struct?: ReleaseBundleV2SourceArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2SourceArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV2SourceArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2SourceArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sha256 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sha256 = value.sha256;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}

export class ReleaseBundleV2SourceArtifactsList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV2SourceArtifacts[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV2SourceArtifactsOutputReference {
    return new ReleaseBundleV2SourceArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV2SourceBuilds {
  /**
  * Determines whether to include build dependencies in the Release Bundle. The default value is `false`.
  * 
  * ~>Dependencies must be located in local or Federated repositories to be included in the Release Bundle. Dependencies located in remote repositories are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#include_dependencies ReleaseBundleV2#include_dependencies}
  */
  readonly includeDependencies?: boolean | cdktf.IResolvable;
  /**
  * Name of the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#name ReleaseBundleV2#name}
  */
  readonly name: string;
  /**
  * Number (run) of the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#number ReleaseBundleV2#number}
  */
  readonly number: string;
  /**
  * The repository key of the build. If omitted, the system uses the default built-in repository, `artifactory-build-info`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#repository ReleaseBundleV2#repository}
  */
  readonly repository?: string;
  /**
  * Timestamp when the build was created. If omitted, the system uses the latest build run, as identified by the `name` and `number` combination. The timestamp is provided according to the ISO 8601 standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#started ReleaseBundleV2#started}
  */
  readonly started?: string;
}

export function releaseBundleV2SourceBuildsToTerraform(struct?: ReleaseBundleV2SourceBuilds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_dependencies: cdktf.booleanToTerraform(struct!.includeDependencies),
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.stringToTerraform(struct!.number),
    repository: cdktf.stringToTerraform(struct!.repository),
    started: cdktf.stringToTerraform(struct!.started),
  }
}


export function releaseBundleV2SourceBuildsToHclTerraform(struct?: ReleaseBundleV2SourceBuilds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_dependencies: {
      value: cdktf.booleanToHclTerraform(struct!.includeDependencies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
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
    started: {
      value: cdktf.stringToHclTerraform(struct!.started),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2SourceBuildsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV2SourceBuilds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDependencies = this._includeDependencies;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._started !== undefined) {
      hasAnyValues = true;
      internalValueResult.started = this._started;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2SourceBuilds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeDependencies = undefined;
      this._name = undefined;
      this._number = undefined;
      this._repository = undefined;
      this._started = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeDependencies = value.includeDependencies;
      this._name = value.name;
      this._number = value.number;
      this._repository = value.repository;
      this._started = value.started;
    }
  }

  // include_dependencies - computed: true, optional: true, required: false
  private _includeDependencies?: boolean | cdktf.IResolvable; 
  public get includeDependencies() {
    return this.getBooleanAttribute('include_dependencies');
  }
  public set includeDependencies(value: boolean | cdktf.IResolvable) {
    this._includeDependencies = value;
  }
  public resetIncludeDependencies() {
    this._includeDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDependenciesInput() {
    return this._includeDependencies;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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

  // started - computed: false, optional: true, required: false
  private _started?: string; 
  public get started() {
    return this.getStringAttribute('started');
  }
  public set started(value: string) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }
}

export class ReleaseBundleV2SourceBuildsList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV2SourceBuilds[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV2SourceBuildsOutputReference {
    return new ReleaseBundleV2SourceBuildsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV2SourceReleaseBundles {
  /**
  * The name of the release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#name ReleaseBundleV2#name}
  */
  readonly name: string;
  /**
  * Project key of the release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#project_key ReleaseBundleV2#project_key}
  */
  readonly projectKey?: string;
  /**
  * The key of the release bundle repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#repository_key ReleaseBundleV2#repository_key}
  */
  readonly repositoryKey?: string;
  /**
  * The version of the release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#version ReleaseBundleV2#version}
  */
  readonly version: string;
}

export function releaseBundleV2SourceReleaseBundlesToTerraform(struct?: ReleaseBundleV2SourceReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    repository_key: cdktf.stringToTerraform(struct!.repositoryKey),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function releaseBundleV2SourceReleaseBundlesToHclTerraform(struct?: ReleaseBundleV2SourceReleaseBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_key: {
      value: cdktf.stringToHclTerraform(struct!.repositoryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2SourceReleaseBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV2SourceReleaseBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._repositoryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryKey = this._repositoryKey;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2SourceReleaseBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._projectKey = undefined;
      this._repositoryKey = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._projectKey = value.projectKey;
      this._repositoryKey = value.repositoryKey;
      this._version = value.version;
    }
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

  // repository_key - computed: false, optional: true, required: false
  private _repositoryKey?: string; 
  public get repositoryKey() {
    return this.getStringAttribute('repository_key');
  }
  public set repositoryKey(value: string) {
    this._repositoryKey = value;
  }
  public resetRepositoryKey() {
    this._repositoryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryKeyInput() {
    return this._repositoryKey;
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
}

export class ReleaseBundleV2SourceReleaseBundlesList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV2SourceReleaseBundles[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV2SourceReleaseBundlesOutputReference {
    return new ReleaseBundleV2SourceReleaseBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV2Source {
  /**
  * The contents of the AQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#aql ReleaseBundleV2#aql}
  */
  readonly aql?: string;
  /**
  * Source type to create a Release Bundle v2 version by collecting source artifacts from a list of path/checksum pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#artifacts ReleaseBundleV2#artifacts}
  */
  readonly artifacts?: ReleaseBundleV2SourceArtifacts[] | cdktf.IResolvable;
  /**
  * Source type to create a Release Bundle v2 version by collecting source artifacts from one or multiple builds (also known as build-info).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#builds ReleaseBundleV2#builds}
  */
  readonly builds?: ReleaseBundleV2SourceBuilds[] | cdktf.IResolvable;
  /**
  * Source type to create a Release Bundle v2 version by collecting source artifacts from existing Release Bundle versions. Must match `source_type` attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#release_bundles ReleaseBundleV2#release_bundles}
  */
  readonly releaseBundles?: ReleaseBundleV2SourceReleaseBundles[] | cdktf.IResolvable;
}

export function releaseBundleV2SourceToTerraform(struct?: ReleaseBundleV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aql: cdktf.stringToTerraform(struct!.aql),
    artifacts: cdktf.listMapper(releaseBundleV2SourceArtifactsToTerraform, false)(struct!.artifacts),
    builds: cdktf.listMapper(releaseBundleV2SourceBuildsToTerraform, false)(struct!.builds),
    release_bundles: cdktf.listMapper(releaseBundleV2SourceReleaseBundlesToTerraform, false)(struct!.releaseBundles),
  }
}


export function releaseBundleV2SourceToHclTerraform(struct?: ReleaseBundleV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aql: {
      value: cdktf.stringToHclTerraform(struct!.aql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifacts: {
      value: cdktf.listMapperHcl(releaseBundleV2SourceArtifactsToHclTerraform, false)(struct!.artifacts),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV2SourceArtifactsList",
    },
    builds: {
      value: cdktf.listMapperHcl(releaseBundleV2SourceBuildsToHclTerraform, false)(struct!.builds),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV2SourceBuildsList",
    },
    release_bundles: {
      value: cdktf.listMapperHcl(releaseBundleV2SourceReleaseBundlesToHclTerraform, false)(struct!.releaseBundles),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV2SourceReleaseBundlesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV2SourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseBundleV2Source | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aql !== undefined) {
      hasAnyValues = true;
      internalValueResult.aql = this._aql;
    }
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._builds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builds = this._builds?.internalValue;
    }
    if (this._releaseBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseBundles = this._releaseBundles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV2Source | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aql = undefined;
      this._artifacts.internalValue = undefined;
      this._builds.internalValue = undefined;
      this._releaseBundles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aql = value.aql;
      this._artifacts.internalValue = value.artifacts;
      this._builds.internalValue = value.builds;
      this._releaseBundles.internalValue = value.releaseBundles;
    }
  }

  // aql - computed: false, optional: true, required: false
  private _aql?: string; 
  public get aql() {
    return this.getStringAttribute('aql');
  }
  public set aql(value: string) {
    this._aql = value;
  }
  public resetAql() {
    this._aql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aqlInput() {
    return this._aql;
  }

  // artifacts - computed: false, optional: true, required: false
  private _artifacts = new ReleaseBundleV2SourceArtifactsList(this, "artifacts", true);
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: ReleaseBundleV2SourceArtifacts[] | cdktf.IResolvable) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // builds - computed: false, optional: true, required: false
  private _builds = new ReleaseBundleV2SourceBuildsList(this, "builds", true);
  public get builds() {
    return this._builds;
  }
  public putBuilds(value: ReleaseBundleV2SourceBuilds[] | cdktf.IResolvable) {
    this._builds.internalValue = value;
  }
  public resetBuilds() {
    this._builds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildsInput() {
    return this._builds.internalValue;
  }

  // release_bundles - computed: false, optional: true, required: false
  private _releaseBundles = new ReleaseBundleV2SourceReleaseBundlesList(this, "release_bundles", true);
  public get releaseBundles() {
    return this._releaseBundles;
  }
  public putReleaseBundles(value: ReleaseBundleV2SourceReleaseBundles[] | cdktf.IResolvable) {
    this._releaseBundles.internalValue = value;
  }
  public resetReleaseBundles() {
    this._releaseBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundlesInput() {
    return this._releaseBundles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2 artifactory_release_bundle_v2}
*/
export class ReleaseBundleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_release_bundle_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseBundleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseBundleV2 to import
  * @param importFromId The id of the existing ReleaseBundleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseBundleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_release_bundle_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/release_bundle_v2 artifactory_release_bundle_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseBundleV2Config
  */
  public constructor(scope: Construct, id: string, config: ReleaseBundleV2Config) {
    super(scope, id, {
      terraformResourceType: 'artifactory_release_bundle_v2',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keypairName = config.keypairName;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._skipDockerManifestResolution = config.skipDockerManifestResolution;
    this._source.internalValue = config.source;
    this._sourceType = config.sourceType;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // skip_docker_manifest_resolution - computed: true, optional: true, required: false
  private _skipDockerManifestResolution?: boolean | cdktf.IResolvable; 
  public get skipDockerManifestResolution() {
    return this.getBooleanAttribute('skip_docker_manifest_resolution');
  }
  public set skipDockerManifestResolution(value: boolean | cdktf.IResolvable) {
    this._skipDockerManifestResolution = value;
  }
  public resetSkipDockerManifestResolution() {
    this._skipDockerManifestResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDockerManifestResolutionInput() {
    return this._skipDockerManifestResolution;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ReleaseBundleV2SourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ReleaseBundleV2Source) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
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
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      skip_docker_manifest_resolution: cdktf.booleanToTerraform(this._skipDockerManifestResolution),
      source: releaseBundleV2SourceToTerraform(this._source.internalValue),
      source_type: cdktf.stringToTerraform(this._sourceType),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      skip_docker_manifest_resolution: {
        value: cdktf.booleanToHclTerraform(this._skipDockerManifestResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: releaseBundleV2SourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseBundleV2Source",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
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
