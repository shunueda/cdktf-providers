// https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseBundleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Description of the release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#description ReleaseBundleV1#description}
  */
  readonly description?: string;
  /**
  * When set to `true`, only parses and validates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#dry_run ReleaseBundleV1#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Passphrase for the signing key, if applicable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#gpg_passphase ReleaseBundleV1#gpg_passphase}
  */
  readonly gpgPassphase?: string;
  /**
  * Release bundle name. Must begin with a letter or digit and consist only of letters, digits, underscores, periods, hyphens, and colons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#name ReleaseBundleV1#name}
  */
  readonly name: string;
  /**
  * Describes the release notes for the release bundle version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#release_notes ReleaseBundleV1#release_notes}
  */
  readonly releaseNotes?: ReleaseBundleV1ReleaseNotes;
  /**
  * When set to `true`, automatically signs the release bundle version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#sign_immediately ReleaseBundleV1#sign_immediately}
  */
  readonly signImmediately?: boolean | cdktf.IResolvable;
  /**
  * Describes the specification by artifacts are gathered and distributed in this release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#spec ReleaseBundleV1#spec}
  */
  readonly spec: ReleaseBundleV1Spec;
  /**
  * A repository name at source Artifactory to store release bundle artifacts in. If not provided, Artifactory will use the default one (requires Artifactory 6.5 or later).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#storing_repository ReleaseBundleV1#storing_repository}
  */
  readonly storingRepository?: string;
  /**
  * Release bundle version. Must begin with a letter or digit and consist only of letters, digits, underscores, periods, hyphens, and colons. The string `LATEST` is prohibited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#version ReleaseBundleV1#version}
  */
  readonly version: string;
}
export interface ReleaseBundleV1ArtifactsProps {
}

export function releaseBundleV1ArtifactsPropsToTerraform(struct?: ReleaseBundleV1ArtifactsProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseBundleV1ArtifactsPropsToHclTerraform(struct?: ReleaseBundleV1ArtifactsProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseBundleV1ArtifactsPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseBundleV1ArtifactsProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1ArtifactsProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class ReleaseBundleV1ArtifactsPropsList extends cdktf.ComplexList {

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
  public get(index: number): ReleaseBundleV1ArtifactsPropsOutputReference {
    return new ReleaseBundleV1ArtifactsPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV1Artifacts {
}

export function releaseBundleV1ArtifactsToTerraform(struct?: ReleaseBundleV1Artifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function releaseBundleV1ArtifactsToHclTerraform(struct?: ReleaseBundleV1Artifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReleaseBundleV1ArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseBundleV1Artifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1Artifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // props - computed: true, optional: false, required: false
  private _props = new ReleaseBundleV1ArtifactsPropsList(this, "props", true);
  public get props() {
    return this._props;
  }

  // source_repo_path - computed: true, optional: false, required: false
  public get sourceRepoPath() {
    return this.getStringAttribute('source_repo_path');
  }

  // target_repo_path - computed: true, optional: false, required: false
  public get targetRepoPath() {
    return this.getStringAttribute('target_repo_path');
  }
}

export class ReleaseBundleV1ArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): ReleaseBundleV1ArtifactsOutputReference {
    return new ReleaseBundleV1ArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV1ReleaseNotes {
  /**
  * The content of the release notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#content ReleaseBundleV1#content}
  */
  readonly content: string;
  /**
  * The syntax for the release notes. Options include: `markdown`, `asciidoc`, `plain_text` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#syntax ReleaseBundleV1#syntax}
  */
  readonly syntax?: string;
}

export function releaseBundleV1ReleaseNotesToTerraform(struct?: ReleaseBundleV1ReleaseNotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    syntax: cdktf.stringToTerraform(struct!.syntax),
  }
}


export function releaseBundleV1ReleaseNotesToHclTerraform(struct?: ReleaseBundleV1ReleaseNotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV1ReleaseNotesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseBundleV1ReleaseNotes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1ReleaseNotes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._syntax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._syntax = value.syntax;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // syntax - computed: true, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }
}
export interface ReleaseBundleV1SpecQueriesAddedProps {
  /**
  * Property key to be created or updated on the distributed artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#key ReleaseBundleV1#key}
  */
  readonly key: string;
  /**
  * List of values to be added to the property key after distribution of the release bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#values ReleaseBundleV1#values}
  */
  readonly values?: string[];
}

export function releaseBundleV1SpecQueriesAddedPropsToTerraform(struct?: ReleaseBundleV1SpecQueriesAddedProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function releaseBundleV1SpecQueriesAddedPropsToHclTerraform(struct?: ReleaseBundleV1SpecQueriesAddedProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV1SpecQueriesAddedPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV1SpecQueriesAddedProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1SpecQueriesAddedProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ReleaseBundleV1SpecQueriesAddedPropsList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV1SpecQueriesAddedProps[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV1SpecQueriesAddedPropsOutputReference {
    return new ReleaseBundleV1SpecQueriesAddedPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV1SpecQueriesMappings {
  /**
  * Regex matcher for artifact paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#input ReleaseBundleV1#input}
  */
  readonly input: string;
  /**
  * Replacement for artifact paths matched by the `input` matcher. Capture groups can be used as `$1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#output ReleaseBundleV1#output}
  */
  readonly output: string;
}

export function releaseBundleV1SpecQueriesMappingsToTerraform(struct?: ReleaseBundleV1SpecQueriesMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    output: cdktf.stringToTerraform(struct!.output),
  }
}


export function releaseBundleV1SpecQueriesMappingsToHclTerraform(struct?: ReleaseBundleV1SpecQueriesMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV1SpecQueriesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV1SpecQueriesMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1SpecQueriesMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._output = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._output = value.output;
    }
  }

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: false, optional: false, required: true
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }
}

export class ReleaseBundleV1SpecQueriesMappingsList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV1SpecQueriesMappings[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV1SpecQueriesMappingsOutputReference {
    return new ReleaseBundleV1SpecQueriesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV1SpecQueries {
  /**
  * List of added properties which will be added to the artifacts after distribution of the release bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#added_props ReleaseBundleV1#added_props}
  */
  readonly addedProps?: ReleaseBundleV1SpecQueriesAddedProps[] | cdktf.IResolvable;
  /**
  * AQL query for gathering the artifacts from Artifactory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#aql ReleaseBundleV1#aql}
  */
  readonly aql: string;
  /**
  * List of patterns for Properties keys to exclude after distribution of the release bundle. This will not have an effect on the `added_props` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#exclude_props_patterns ReleaseBundleV1#exclude_props_patterns}
  */
  readonly excludePropsPatterns?: string[];
  /**
  * List of mappings, which are applied to the artifact paths after distribution of the release bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#mappings ReleaseBundleV1#mappings}
  */
  readonly mappings?: ReleaseBundleV1SpecQueriesMappings[] | cdktf.IResolvable;
  /**
  * A name to be used when displaying the query object. Note that the release bundle query name length must be between 2 and 32 characters long and must start with alphabetic character followed by an alphanumeric or `_-.:` characters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#query_name ReleaseBundleV1#query_name}
  */
  readonly queryName?: string;
}

export function releaseBundleV1SpecQueriesToTerraform(struct?: ReleaseBundleV1SpecQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    added_props: cdktf.listMapper(releaseBundleV1SpecQueriesAddedPropsToTerraform, false)(struct!.addedProps),
    aql: cdktf.stringToTerraform(struct!.aql),
    exclude_props_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePropsPatterns),
    mappings: cdktf.listMapper(releaseBundleV1SpecQueriesMappingsToTerraform, false)(struct!.mappings),
    query_name: cdktf.stringToTerraform(struct!.queryName),
  }
}


export function releaseBundleV1SpecQueriesToHclTerraform(struct?: ReleaseBundleV1SpecQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    added_props: {
      value: cdktf.listMapperHcl(releaseBundleV1SpecQueriesAddedPropsToHclTerraform, false)(struct!.addedProps),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV1SpecQueriesAddedPropsList",
    },
    aql: {
      value: cdktf.stringToHclTerraform(struct!.aql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_props_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePropsPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mappings: {
      value: cdktf.listMapperHcl(releaseBundleV1SpecQueriesMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV1SpecQueriesMappingsList",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV1SpecQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReleaseBundleV1SpecQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addedProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addedProps = this._addedProps?.internalValue;
    }
    if (this._aql !== undefined) {
      hasAnyValues = true;
      internalValueResult.aql = this._aql;
    }
    if (this._excludePropsPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePropsPatterns = this._excludePropsPatterns;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1SpecQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addedProps.internalValue = undefined;
      this._aql = undefined;
      this._excludePropsPatterns = undefined;
      this._mappings.internalValue = undefined;
      this._queryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addedProps.internalValue = value.addedProps;
      this._aql = value.aql;
      this._excludePropsPatterns = value.excludePropsPatterns;
      this._mappings.internalValue = value.mappings;
      this._queryName = value.queryName;
    }
  }

  // added_props - computed: false, optional: true, required: false
  private _addedProps = new ReleaseBundleV1SpecQueriesAddedPropsList(this, "added_props", true);
  public get addedProps() {
    return this._addedProps;
  }
  public putAddedProps(value: ReleaseBundleV1SpecQueriesAddedProps[] | cdktf.IResolvable) {
    this._addedProps.internalValue = value;
  }
  public resetAddedProps() {
    this._addedProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedPropsInput() {
    return this._addedProps.internalValue;
  }

  // aql - computed: false, optional: false, required: true
  private _aql?: string; 
  public get aql() {
    return this.getStringAttribute('aql');
  }
  public set aql(value: string) {
    this._aql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aqlInput() {
    return this._aql;
  }

  // exclude_props_patterns - computed: false, optional: true, required: false
  private _excludePropsPatterns?: string[]; 
  public get excludePropsPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_props_patterns'));
  }
  public set excludePropsPatterns(value: string[]) {
    this._excludePropsPatterns = value;
  }
  public resetExcludePropsPatterns() {
    this._excludePropsPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePropsPatternsInput() {
    return this._excludePropsPatterns;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new ReleaseBundleV1SpecQueriesMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: ReleaseBundleV1SpecQueriesMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // query_name - computed: false, optional: true, required: false
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  public resetQueryName() {
    this._queryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }
}

export class ReleaseBundleV1SpecQueriesList extends cdktf.ComplexList {
  public internalValue? : ReleaseBundleV1SpecQueries[] | cdktf.IResolvable

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
  public get(index: number): ReleaseBundleV1SpecQueriesOutputReference {
    return new ReleaseBundleV1SpecQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseBundleV1Spec {
  /**
  * List of query objects to gather artifacts by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#queries ReleaseBundleV1#queries}
  */
  readonly queries: ReleaseBundleV1SpecQueries[] | cdktf.IResolvable;
}

export function releaseBundleV1SpecToTerraform(struct?: ReleaseBundleV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(releaseBundleV1SpecQueriesToTerraform, false)(struct!.queries),
  }
}


export function releaseBundleV1SpecToHclTerraform(struct?: ReleaseBundleV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queries: {
      value: cdktf.listMapperHcl(releaseBundleV1SpecQueriesToHclTerraform, false)(struct!.queries),
      isBlock: true,
      type: "set",
      storageClassType: "ReleaseBundleV1SpecQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReleaseBundleV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReleaseBundleV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseBundleV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queries.internalValue = value.queries;
    }
  }

  // queries - computed: false, optional: false, required: true
  private _queries = new ReleaseBundleV1SpecQueriesList(this, "queries", true);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: ReleaseBundleV1SpecQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1 distribution_release_bundle_v1}
*/
export class ReleaseBundleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "distribution_release_bundle_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseBundleV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseBundleV1 to import
  * @param importFromId The id of the existing ReleaseBundleV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseBundleV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "distribution_release_bundle_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/release_bundle_v1 distribution_release_bundle_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseBundleV1Config
  */
  public constructor(scope: Construct, id: string, config: ReleaseBundleV1Config) {
    super(scope, id, {
      terraformResourceType: 'distribution_release_bundle_v1',
      terraformGeneratorMetadata: {
        providerName: 'distribution',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dryRun = config.dryRun;
    this._gpgPassphase = config.gpgPassphase;
    this._name = config.name;
    this._releaseNotes.internalValue = config.releaseNotes;
    this._signImmediately = config.signImmediately;
    this._spec.internalValue = config.spec;
    this._storingRepository = config.storingRepository;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new ReleaseBundleV1ArtifactsList(this, "artifacts", true);
  public get artifacts() {
    return this._artifacts;
  }

  // artifacts_size - computed: true, optional: false, required: false
  public get artifactsSize() {
    return this.getNumberAttribute('artifacts_size');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distributed_by - computed: true, optional: false, required: false
  public get distributedBy() {
    return this.getStringAttribute('distributed_by');
  }

  // dry_run - computed: true, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // gpg_passphase - computed: false, optional: true, required: false
  private _gpgPassphase?: string; 
  public get gpgPassphase() {
    return this.getStringAttribute('gpg_passphase');
  }
  public set gpgPassphase(value: string) {
    this._gpgPassphase = value;
  }
  public resetGpgPassphase() {
    this._gpgPassphase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgPassphaseInput() {
    return this._gpgPassphase;
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

  // release_notes - computed: false, optional: true, required: false
  private _releaseNotes = new ReleaseBundleV1ReleaseNotesOutputReference(this, "release_notes");
  public get releaseNotes() {
    return this._releaseNotes;
  }
  public putReleaseNotes(value: ReleaseBundleV1ReleaseNotes) {
    this._releaseNotes.internalValue = value;
  }
  public resetReleaseNotes() {
    this._releaseNotes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesInput() {
    return this._releaseNotes.internalValue;
  }

  // sign_immediately - computed: true, optional: true, required: false
  private _signImmediately?: boolean | cdktf.IResolvable; 
  public get signImmediately() {
    return this.getBooleanAttribute('sign_immediately');
  }
  public set signImmediately(value: boolean | cdktf.IResolvable) {
    this._signImmediately = value;
  }
  public resetSignImmediately() {
    this._signImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signImmediatelyInput() {
    return this._signImmediately;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ReleaseBundleV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ReleaseBundleV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storing_repository - computed: true, optional: true, required: false
  private _storingRepository?: string; 
  public get storingRepository() {
    return this.getStringAttribute('storing_repository');
  }
  public set storingRepository(value: string) {
    this._storingRepository = value;
  }
  public resetStoringRepository() {
    this._storingRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storingRepositoryInput() {
    return this._storingRepository;
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
      description: cdktf.stringToTerraform(this._description),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      gpg_passphase: cdktf.stringToTerraform(this._gpgPassphase),
      name: cdktf.stringToTerraform(this._name),
      release_notes: releaseBundleV1ReleaseNotesToTerraform(this._releaseNotes.internalValue),
      sign_immediately: cdktf.booleanToTerraform(this._signImmediately),
      spec: releaseBundleV1SpecToTerraform(this._spec.internalValue),
      storing_repository: cdktf.stringToTerraform(this._storingRepository),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gpg_passphase: {
        value: cdktf.stringToHclTerraform(this._gpgPassphase),
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
      release_notes: {
        value: releaseBundleV1ReleaseNotesToHclTerraform(this._releaseNotes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseBundleV1ReleaseNotes",
      },
      sign_immediately: {
        value: cdktf.booleanToHclTerraform(this._signImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec: {
        value: releaseBundleV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReleaseBundleV1Spec",
      },
      storing_repository: {
        value: cdktf.stringToHclTerraform(this._storingRepository),
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
