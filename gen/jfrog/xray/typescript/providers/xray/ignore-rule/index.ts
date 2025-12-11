// https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgnoreRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of specific CVEs to ignore. Omit to apply to all. Should set to 'any' when 'vulnerabilities' is set to 'any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#cves IgnoreRule#cves}
  */
  readonly cves?: string[];
  /**
  * List of Docker layer SHA256 hashes to ignore. Omit to apply to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#docker_layers IgnoreRule#docker_layers}
  */
  readonly dockerLayers?: string[];
  /**
  * The Ignore Rule will be active until the expiration date. At that date it will automatically get deleted. The rule with the expiration date less than current day, will error out. Vaule assumes to be in local timezone. Ensure client and server time zones match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#expiration_date IgnoreRule#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * List of specific licenses to ignore. Omit to apply to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#licenses IgnoreRule#licenses}
  */
  readonly licenses?: string[];
  /**
  * Notes of the ignore rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#notes IgnoreRule#notes}
  */
  readonly notes: string;
  /**
  * Operational risk to ignore. Only accept 'any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#operational_risk IgnoreRule#operational_risk}
  */
  readonly operationalRisk?: string[];
  /**
  * List of specific policies to ignore. Omit to apply to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#policies IgnoreRule#policies}
  */
  readonly policies?: string[];
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#project_key IgnoreRule#project_key}
  */
  readonly projectKey?: string;
  /**
  * List of specific vulnerabilities to ignore. Omit to apply to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#vulnerabilities IgnoreRule#vulnerabilities}
  */
  readonly vulnerabilities?: string[];
  /**
  * List of specific watches to ignore. Omit to apply to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#watches IgnoreRule#watches}
  */
  readonly watches?: string[];
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#artifact IgnoreRule#artifact}
  */
  readonly artifact?: IgnoreRuleArtifact[] | cdktf.IResolvable;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#build IgnoreRule#build}
  */
  readonly buildAttribute?: IgnoreRuleBuild[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#component IgnoreRule#component}
  */
  readonly component?: IgnoreRuleComponent[] | cdktf.IResolvable;
  /**
  * exposures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#exposures IgnoreRule#exposures}
  */
  readonly exposures?: IgnoreRuleExposures;
  /**
  * release_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#release_bundle IgnoreRule#release_bundle}
  */
  readonly releaseBundle?: IgnoreRuleReleaseBundle[] | cdktf.IResolvable;
  /**
  * release_bundles_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#release_bundles_v2 IgnoreRule#release_bundles_v2}
  */
  readonly releaseBundlesV2?: IgnoreRuleReleaseBundlesV2[] | cdktf.IResolvable;
}
export interface IgnoreRuleArtifact {
  /**
  * Name of the artifact. Wildcards are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#name IgnoreRule#name}
  */
  readonly name: string;
  /**
  * Path of the artifact. Must end with a '/'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#path IgnoreRule#path}
  */
  readonly path?: string;
  /**
  * Version of the artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#version IgnoreRule#version}
  */
  readonly version?: string;
}

export function ignoreRuleArtifactToTerraform(struct?: IgnoreRuleArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ignoreRuleArtifactToHclTerraform(struct?: IgnoreRuleArtifact | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class IgnoreRuleArtifactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgnoreRuleArtifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
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
      this._path = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IgnoreRuleArtifactList extends cdktf.ComplexList {
  public internalValue? : IgnoreRuleArtifact[] | cdktf.IResolvable

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
  public get(index: number): IgnoreRuleArtifactOutputReference {
    return new IgnoreRuleArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgnoreRuleBuild {
  /**
  * Name of the build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#name IgnoreRule#name}
  */
  readonly name: string;
  /**
  * Version of the build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#version IgnoreRule#version}
  */
  readonly version?: string;
}

export function ignoreRuleBuildToTerraform(struct?: IgnoreRuleBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ignoreRuleBuildToHclTerraform(struct?: IgnoreRuleBuild | cdktf.IResolvable): any {
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

export class IgnoreRuleBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgnoreRuleBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IgnoreRuleBuildList extends cdktf.ComplexList {
  public internalValue? : IgnoreRuleBuild[] | cdktf.IResolvable

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
  public get(index: number): IgnoreRuleBuildOutputReference {
    return new IgnoreRuleBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgnoreRuleComponent {
  /**
  * Name of the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#name IgnoreRule#name}
  */
  readonly name: string;
  /**
  * Version of the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#version IgnoreRule#version}
  */
  readonly version?: string;
}

export function ignoreRuleComponentToTerraform(struct?: IgnoreRuleComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ignoreRuleComponentToHclTerraform(struct?: IgnoreRuleComponent | cdktf.IResolvable): any {
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

export class IgnoreRuleComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgnoreRuleComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IgnoreRuleComponentList extends cdktf.ComplexList {
  public internalValue? : IgnoreRuleComponent[] | cdktf.IResolvable

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
  public get(index: number): IgnoreRuleComponentOutputReference {
    return new IgnoreRuleComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgnoreRuleExposures {
  /**
  * Ignores all violations of the specific exposures category. Include one or more exposure categories: 'secrets', 'services', 'applications', or 'iac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#categories IgnoreRule#categories}
  */
  readonly categories?: string[];
  /**
  * Path of the artifact. Must start with a '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#file_path IgnoreRule#file_path}
  */
  readonly filePath?: string[];
  /**
  * Ignores all violations for the specific scanner. Scanner IDs must start with 'EXP-' followed by a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#scanners IgnoreRule#scanners}
  */
  readonly scanners?: string[];
}

export function ignoreRuleExposuresToTerraform(struct?: IgnoreRuleExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    file_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePath),
    scanners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scanners),
  }
}


export function ignoreRuleExposuresToHclTerraform(struct?: IgnoreRuleExposures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    file_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filePath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scanners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scanners),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgnoreRuleExposuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IgnoreRuleExposures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._scanners !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanners = this._scanners;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleExposures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._filePath = undefined;
      this._scanners = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._filePath = value.filePath;
      this._scanners = value.scanners;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string[]; 
  public get filePath() {
    return cdktf.Fn.tolist(this.getListAttribute('file_path'));
  }
  public set filePath(value: string[]) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // scanners - computed: false, optional: true, required: false
  private _scanners?: string[]; 
  public get scanners() {
    return cdktf.Fn.tolist(this.getListAttribute('scanners'));
  }
  public set scanners(value: string[]) {
    this._scanners = value;
  }
  public resetScanners() {
    this._scanners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersInput() {
    return this._scanners;
  }
}
export interface IgnoreRuleReleaseBundle {
  /**
  * Name of the release bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#name IgnoreRule#name}
  */
  readonly name: string;
  /**
  * Version of the release bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#version IgnoreRule#version}
  */
  readonly version?: string;
}

export function ignoreRuleReleaseBundleToTerraform(struct?: IgnoreRuleReleaseBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ignoreRuleReleaseBundleToHclTerraform(struct?: IgnoreRuleReleaseBundle | cdktf.IResolvable): any {
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

export class IgnoreRuleReleaseBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgnoreRuleReleaseBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleReleaseBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IgnoreRuleReleaseBundleList extends cdktf.ComplexList {
  public internalValue? : IgnoreRuleReleaseBundle[] | cdktf.IResolvable

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
  public get(index: number): IgnoreRuleReleaseBundleOutputReference {
    return new IgnoreRuleReleaseBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgnoreRuleReleaseBundlesV2 {
  /**
  * Name of the release bundle v2. Must start with 'releaseBundleV2://'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#name IgnoreRule#name}
  */
  readonly name: string;
  /**
  * Version of the release bundle v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#version IgnoreRule#version}
  */
  readonly version?: string;
}

export function ignoreRuleReleaseBundlesV2ToTerraform(struct?: IgnoreRuleReleaseBundlesV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ignoreRuleReleaseBundlesV2ToHclTerraform(struct?: IgnoreRuleReleaseBundlesV2 | cdktf.IResolvable): any {
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

export class IgnoreRuleReleaseBundlesV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgnoreRuleReleaseBundlesV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgnoreRuleReleaseBundlesV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IgnoreRuleReleaseBundlesV2List extends cdktf.ComplexList {
  public internalValue? : IgnoreRuleReleaseBundlesV2[] | cdktf.IResolvable

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
  public get(index: number): IgnoreRuleReleaseBundlesV2OutputReference {
    return new IgnoreRuleReleaseBundlesV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule xray_ignore_rule}
*/
export class IgnoreRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_ignore_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgnoreRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgnoreRule to import
  * @param importFromId The id of the existing IgnoreRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgnoreRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_ignore_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/ignore_rule xray_ignore_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgnoreRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IgnoreRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_ignore_rule',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.5',
        providerVersionConstraint: '3.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cves = config.cves;
    this._dockerLayers = config.dockerLayers;
    this._expirationDate = config.expirationDate;
    this._licenses = config.licenses;
    this._notes = config.notes;
    this._operationalRisk = config.operationalRisk;
    this._policies = config.policies;
    this._projectKey = config.projectKey;
    this._vulnerabilities = config.vulnerabilities;
    this._watches = config.watches;
    this._artifact.internalValue = config.artifact;
    this._build.internalValue = config.buildAttribute;
    this._component.internalValue = config.component;
    this._exposures.internalValue = config.exposures;
    this._releaseBundle.internalValue = config.releaseBundle;
    this._releaseBundlesV2.internalValue = config.releaseBundlesV2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // cves - computed: false, optional: true, required: false
  private _cves?: string[]; 
  public get cves() {
    return cdktf.Fn.tolist(this.getListAttribute('cves'));
  }
  public set cves(value: string[]) {
    this._cves = value;
  }
  public resetCves() {
    this._cves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvesInput() {
    return this._cves;
  }

  // docker_layers - computed: false, optional: true, required: false
  private _dockerLayers?: string[]; 
  public get dockerLayers() {
    return cdktf.Fn.tolist(this.getListAttribute('docker_layers'));
  }
  public set dockerLayers(value: string[]) {
    this._dockerLayers = value;
  }
  public resetDockerLayers() {
    this._dockerLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerLayersInput() {
    return this._dockerLayers;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_expired - computed: true, optional: false, required: false
  public get isExpired() {
    return this.getBooleanAttribute('is_expired');
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return cdktf.Fn.tolist(this.getListAttribute('licenses'));
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
  }

  // notes - computed: false, optional: false, required: true
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // operational_risk - computed: false, optional: true, required: false
  private _operationalRisk?: string[]; 
  public get operationalRisk() {
    return cdktf.Fn.tolist(this.getListAttribute('operational_risk'));
  }
  public set operationalRisk(value: string[]) {
    this._operationalRisk = value;
  }
  public resetOperationalRisk() {
    this._operationalRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalRiskInput() {
    return this._operationalRisk;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
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

  // vulnerabilities - computed: false, optional: true, required: false
  private _vulnerabilities?: string[]; 
  public get vulnerabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('vulnerabilities'));
  }
  public set vulnerabilities(value: string[]) {
    this._vulnerabilities = value;
  }
  public resetVulnerabilities() {
    this._vulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitiesInput() {
    return this._vulnerabilities;
  }

  // watches - computed: false, optional: true, required: false
  private _watches?: string[]; 
  public get watches() {
    return cdktf.Fn.tolist(this.getListAttribute('watches'));
  }
  public set watches(value: string[]) {
    this._watches = value;
  }
  public resetWatches() {
    this._watches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchesInput() {
    return this._watches;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new IgnoreRuleArtifactList(this, "artifact", true);
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: IgnoreRuleArtifact[] | cdktf.IResolvable) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // build - computed: false, optional: true, required: false
  private _build = new IgnoreRuleBuildList(this, "build", true);
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: IgnoreRuleBuild[] | cdktf.IResolvable) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // component - computed: false, optional: true, required: false
  private _component = new IgnoreRuleComponentList(this, "component", true);
  public get component() {
    return this._component;
  }
  public putComponent(value: IgnoreRuleComponent[] | cdktf.IResolvable) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // exposures - computed: false, optional: true, required: false
  private _exposures = new IgnoreRuleExposuresOutputReference(this, "exposures");
  public get exposures() {
    return this._exposures;
  }
  public putExposures(value: IgnoreRuleExposures) {
    this._exposures.internalValue = value;
  }
  public resetExposures() {
    this._exposures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposuresInput() {
    return this._exposures.internalValue;
  }

  // release_bundle - computed: false, optional: true, required: false
  private _releaseBundle = new IgnoreRuleReleaseBundleList(this, "release_bundle", true);
  public get releaseBundle() {
    return this._releaseBundle;
  }
  public putReleaseBundle(value: IgnoreRuleReleaseBundle[] | cdktf.IResolvable) {
    this._releaseBundle.internalValue = value;
  }
  public resetReleaseBundle() {
    this._releaseBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundleInput() {
    return this._releaseBundle.internalValue;
  }

  // release_bundles_v2 - computed: false, optional: true, required: false
  private _releaseBundlesV2 = new IgnoreRuleReleaseBundlesV2List(this, "release_bundles_v2", true);
  public get releaseBundlesV2() {
    return this._releaseBundlesV2;
  }
  public putReleaseBundlesV2(value: IgnoreRuleReleaseBundlesV2[] | cdktf.IResolvable) {
    this._releaseBundlesV2.internalValue = value;
  }
  public resetReleaseBundlesV2() {
    this._releaseBundlesV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseBundlesV2Input() {
    return this._releaseBundlesV2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cves: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cves),
      docker_layers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dockerLayers),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenses),
      notes: cdktf.stringToTerraform(this._notes),
      operational_risk: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationalRisk),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      project_key: cdktf.stringToTerraform(this._projectKey),
      vulnerabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vulnerabilities),
      watches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._watches),
      artifact: cdktf.listMapper(ignoreRuleArtifactToTerraform, true)(this._artifact.internalValue),
      build: cdktf.listMapper(ignoreRuleBuildToTerraform, true)(this._build.internalValue),
      component: cdktf.listMapper(ignoreRuleComponentToTerraform, true)(this._component.internalValue),
      exposures: ignoreRuleExposuresToTerraform(this._exposures.internalValue),
      release_bundle: cdktf.listMapper(ignoreRuleReleaseBundleToTerraform, true)(this._releaseBundle.internalValue),
      release_bundles_v2: cdktf.listMapper(ignoreRuleReleaseBundlesV2ToTerraform, true)(this._releaseBundlesV2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cves: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cves),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      docker_layers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dockerLayers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_risk: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationalRisk),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vulnerabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      watches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._watches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      artifact: {
        value: cdktf.listMapperHcl(ignoreRuleArtifactToHclTerraform, true)(this._artifact.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgnoreRuleArtifactList",
      },
      build: {
        value: cdktf.listMapperHcl(ignoreRuleBuildToHclTerraform, true)(this._build.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgnoreRuleBuildList",
      },
      component: {
        value: cdktf.listMapperHcl(ignoreRuleComponentToHclTerraform, true)(this._component.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgnoreRuleComponentList",
      },
      exposures: {
        value: ignoreRuleExposuresToHclTerraform(this._exposures.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IgnoreRuleExposures",
      },
      release_bundle: {
        value: cdktf.listMapperHcl(ignoreRuleReleaseBundleToHclTerraform, true)(this._releaseBundle.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgnoreRuleReleaseBundleList",
      },
      release_bundles_v2: {
        value: cdktf.listMapperHcl(ignoreRuleReleaseBundlesV2ToHclTerraform, true)(this._releaseBundlesV2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IgnoreRuleReleaseBundlesV2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
