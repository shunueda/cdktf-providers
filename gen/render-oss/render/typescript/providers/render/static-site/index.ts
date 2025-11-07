// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#auto_deploy StaticSite#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#auto_deploy_trigger StaticSite#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#branch StaticSite#branch}
  */
  readonly branch: string;
  /**
  * Command to build the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#build_command StaticSite#build_command}
  */
  readonly buildCommand: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#build_filter StaticSite#build_filter}
  */
  readonly buildFilter?: StaticSiteBuildFilter;
  /**
  * Custom domains to associate with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#custom_domains StaticSite#custom_domains}
  */
  readonly customDomains?: StaticSiteCustomDomains[] | cdktf.IResolvable;
  /**
  * Map of environment variable names to their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#env_vars StaticSite#env_vars}
  */
  readonly envVars?: { [key: string]: StaticSiteEnvVars } | cdktf.IResolvable;
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#environment_id StaticSite#environment_id}
  */
  readonly environmentId?: string;
  /**
  * List of [headers](https://render.com/docs/static-site-headers) to apply to requests for static sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#headers StaticSite#headers}
  */
  readonly headers?: StaticSiteHeaders[] | cdktf.IResolvable;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#name StaticSite#name}
  */
  readonly name: string;
  /**
  * Configure the [notification settings](https://render.com/docs/notifications) for this service. These will override the global notification settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#notification_override StaticSite#notification_override}
  */
  readonly notificationOverride?: StaticSiteNotificationOverride;
  /**
  * [Pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#previews StaticSite#previews}
  */
  readonly previews?: StaticSitePreviews;
  /**
  * Path to the directory that contains the build artifacts to publish for a static site. Defaults to public/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#publish_path StaticSite#publish_path}
  */
  readonly publishPath?: string;
  /**
  * Enable [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#pull_request_previews_enabled StaticSite#pull_request_previews_enabled}
  */
  readonly pullRequestPreviewsEnabled?: boolean | cdktf.IResolvable;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#repo_url StaticSite#repo_url}
  */
  readonly repoUrl: string;
  /**
  * When you specify a [root directory](https://render.com/docs/monorepo-support#root-directory), Render runs all your commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#root_directory StaticSite#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * List of [redirect and rewrite rules](https://render.com/docs/redirects-rewrites) to apply to a static site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#routes StaticSite#routes}
  */
  readonly routes?: StaticSiteRoutes[] | cdktf.IResolvable;
}
export interface StaticSiteActiveCustomDomains {
}

export function staticSiteActiveCustomDomainsToTerraform(struct?: StaticSiteActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function staticSiteActiveCustomDomainsToHclTerraform(struct?: StaticSiteActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StaticSiteActiveCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticSiteActiveCustomDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteActiveCustomDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class StaticSiteActiveCustomDomainsList extends cdktf.ComplexList {

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
  public get(index: number): StaticSiteActiveCustomDomainsOutputReference {
    return new StaticSiteActiveCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticSiteBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#ignored_paths StaticSite#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#paths StaticSite#paths}
  */
  readonly paths?: string[];
}

export function staticSiteBuildFilterToTerraform(struct?: StaticSiteBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function staticSiteBuildFilterToHclTerraform(struct?: StaticSiteBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StaticSiteBuildFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredPaths = this._ignoredPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteBuildFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoredPaths = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoredPaths = value.ignoredPaths;
      this._paths = value.paths;
    }
  }

  // ignored_paths - computed: false, optional: true, required: false
  private _ignoredPaths?: string[]; 
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }
  public set ignoredPaths(value: string[]) {
    this._ignoredPaths = value;
  }
  public resetIgnoredPaths() {
    this._ignoredPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPathsInput() {
    return this._ignoredPaths;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface StaticSiteCustomDomains {
  /**
  * DNS record of the custom domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#name StaticSite#name}
  */
  readonly name: string;
}

export function staticSiteCustomDomainsToTerraform(struct?: StaticSiteCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function staticSiteCustomDomainsToHclTerraform(struct?: StaticSiteCustomDomains | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticSiteCustomDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteCustomDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class StaticSiteCustomDomainsList extends cdktf.ComplexList {
  public internalValue? : StaticSiteCustomDomains[] | cdktf.IResolvable

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
  public get(index: number): StaticSiteCustomDomainsOutputReference {
    return new StaticSiteCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticSiteEnvVars {
  /**
  * If true, Render will generate the variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#generate_value StaticSite#generate_value}
  */
  readonly generateValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#value StaticSite#value}
  */
  readonly value?: string;
}

export function staticSiteEnvVarsToTerraform(struct?: StaticSiteEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_value: cdktf.booleanToTerraform(struct!.generateValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function staticSiteEnvVarsToHclTerraform(struct?: StaticSiteEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_value: {
      value: cdktf.booleanToHclTerraform(struct!.generateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): StaticSiteEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateValue = this._generateValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generateValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generateValue = value.generateValue;
      this._value = value.value;
    }
  }

  // generate_value - computed: true, optional: true, required: false
  private _generateValue?: boolean | cdktf.IResolvable; 
  public get generateValue() {
    return this.getBooleanAttribute('generate_value');
  }
  public set generateValue(value: boolean | cdktf.IResolvable) {
    this._generateValue = value;
  }
  public resetGenerateValue() {
    this._generateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateValueInput() {
    return this._generateValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StaticSiteEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: StaticSiteEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): StaticSiteEnvVarsOutputReference {
    return new StaticSiteEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface StaticSiteHeaders {
  /**
  * Name of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#name StaticSite#name}
  */
  readonly name: string;
  /**
  * Request paths to apply the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#path StaticSite#path}
  */
  readonly path: string;
  /**
  * Value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#value StaticSite#value}
  */
  readonly value: string;
}

export function staticSiteHeadersToTerraform(struct?: StaticSiteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function staticSiteHeadersToHclTerraform(struct?: StaticSiteHeaders | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticSiteHeaders | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._value = undefined;
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
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StaticSiteHeadersList extends cdktf.ComplexList {
  public internalValue? : StaticSiteHeaders[] | cdktf.IResolvable

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
  public get(index: number): StaticSiteHeadersOutputReference {
    return new StaticSiteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticSiteNotificationOverride {
  /**
  * The types of notifications to send. Must be one of `default`, `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#notifications_to_send StaticSite#notifications_to_send}
  */
  readonly notificationsToSend?: string;
  /**
  * Whether notifications for previews of this service are sent. Must be one of `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#preview_notifications_enabled StaticSite#preview_notifications_enabled}
  */
  readonly previewNotificationsEnabled?: string;
}

export function staticSiteNotificationOverrideToTerraform(struct?: StaticSiteNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications_to_send: cdktf.stringToTerraform(struct!.notificationsToSend),
    preview_notifications_enabled: cdktf.stringToTerraform(struct!.previewNotificationsEnabled),
  }
}


export function staticSiteNotificationOverrideToHclTerraform(struct?: StaticSiteNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifications_to_send: {
      value: cdktf.stringToHclTerraform(struct!.notificationsToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview_notifications_enabled: {
      value: cdktf.stringToHclTerraform(struct!.previewNotificationsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteNotificationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StaticSiteNotificationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationsToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationsToSend = this._notificationsToSend;
    }
    if (this._previewNotificationsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewNotificationsEnabled = this._previewNotificationsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteNotificationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationsToSend = undefined;
      this._previewNotificationsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationsToSend = value.notificationsToSend;
      this._previewNotificationsEnabled = value.previewNotificationsEnabled;
    }
  }

  // notifications_to_send - computed: true, optional: true, required: false
  private _notificationsToSend?: string; 
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }
  public set notificationsToSend(value: string) {
    this._notificationsToSend = value;
  }
  public resetNotificationsToSend() {
    this._notificationsToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsToSendInput() {
    return this._notificationsToSend;
  }

  // preview_notifications_enabled - computed: true, optional: true, required: false
  private _previewNotificationsEnabled?: string; 
  public get previewNotificationsEnabled() {
    return this.getStringAttribute('preview_notifications_enabled');
  }
  public set previewNotificationsEnabled(value: string) {
    this._previewNotificationsEnabled = value;
  }
  public resetPreviewNotificationsEnabled() {
    this._previewNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewNotificationsEnabledInput() {
    return this._previewNotificationsEnabled;
  }
}
export interface StaticSitePreviews {
  /**
  * Generation mode for [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed). One of `off`, `manual`, or `automatic`. Defaults to `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#generation StaticSite#generation}
  */
  readonly generation?: string;
}

export function staticSitePreviewsToTerraform(struct?: StaticSitePreviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
  }
}


export function staticSitePreviewsToHclTerraform(struct?: StaticSitePreviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSitePreviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StaticSitePreviews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSitePreviews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generation = value.generation;
    }
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }
}
export interface StaticSiteRoutes {
  /**
  * Destination path to route to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#destination StaticSite#destination}
  */
  readonly destination: string;
  /**
  * Source path to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#source StaticSite#source}
  */
  readonly source: string;
  /**
  * Type of route. Either redirect or rewrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#type StaticSite#type}
  */
  readonly type: string;
}

export function staticSiteRoutesToTerraform(struct?: StaticSiteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function staticSiteRoutesToHclTerraform(struct?: StaticSiteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StaticSiteRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StaticSiteRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticSiteRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
      this._type = value.type;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class StaticSiteRoutesList extends cdktf.ComplexList {
  public internalValue? : StaticSiteRoutes[] | cdktf.IResolvable

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
  public get(index: number): StaticSiteRoutesOutputReference {
    return new StaticSiteRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site render_static_site}
*/
export class StaticSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_static_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticSite to import
  * @param importFromId The id of the existing StaticSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_static_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/static_site render_static_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticSiteConfig
  */
  public constructor(scope: Construct, id: string, config: StaticSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'render_static_site',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDeploy = config.autoDeploy;
    this._autoDeployTrigger = config.autoDeployTrigger;
    this._branch = config.branch;
    this._buildCommand = config.buildCommand;
    this._buildFilter.internalValue = config.buildFilter;
    this._customDomains.internalValue = config.customDomains;
    this._envVars.internalValue = config.envVars;
    this._environmentId = config.environmentId;
    this._headers.internalValue = config.headers;
    this._name = config.name;
    this._notificationOverride.internalValue = config.notificationOverride;
    this._previews.internalValue = config.previews;
    this._publishPath = config.publishPath;
    this._pullRequestPreviewsEnabled = config.pullRequestPreviewsEnabled;
    this._repoUrl = config.repoUrl;
    this._rootDirectory = config.rootDirectory;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_custom_domains - computed: true, optional: false, required: false
  private _activeCustomDomains = new StaticSiteActiveCustomDomainsList(this, "active_custom_domains", true);
  public get activeCustomDomains() {
    return this._activeCustomDomains;
  }

  // auto_deploy - computed: true, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // auto_deploy_trigger - computed: true, optional: true, required: false
  private _autoDeployTrigger?: string; 
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }
  public set autoDeployTrigger(value: string) {
    this._autoDeployTrigger = value;
  }
  public resetAutoDeployTrigger() {
    this._autoDeployTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployTriggerInput() {
    return this._autoDeployTrigger;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_command - computed: false, optional: false, required: true
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // build_filter - computed: false, optional: true, required: false
  private _buildFilter = new StaticSiteBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: StaticSiteBuildFilter) {
    this._buildFilter.internalValue = value;
  }
  public resetBuildFilter() {
    this._buildFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFilterInput() {
    return this._buildFilter.internalValue;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains = new StaticSiteCustomDomainsList(this, "custom_domains", true);
  public get customDomains() {
    return this._customDomains;
  }
  public putCustomDomains(value: StaticSiteCustomDomains[] | cdktf.IResolvable) {
    this._customDomains.internalValue = value;
  }
  public resetCustomDomains() {
    this._customDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains.internalValue;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new StaticSiteEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: StaticSiteEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new StaticSiteHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: StaticSiteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notification_override - computed: true, optional: true, required: false
  private _notificationOverride = new StaticSiteNotificationOverrideOutputReference(this, "notification_override");
  public get notificationOverride() {
    return this._notificationOverride;
  }
  public putNotificationOverride(value: StaticSiteNotificationOverride) {
    this._notificationOverride.internalValue = value;
  }
  public resetNotificationOverride() {
    this._notificationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationOverrideInput() {
    return this._notificationOverride.internalValue;
  }

  // previews - computed: true, optional: true, required: false
  private _previews = new StaticSitePreviewsOutputReference(this, "previews");
  public get previews() {
    return this._previews;
  }
  public putPreviews(value: StaticSitePreviews) {
    this._previews.internalValue = value;
  }
  public resetPreviews() {
    this._previews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsInput() {
    return this._previews.internalValue;
  }

  // publish_path - computed: true, optional: true, required: false
  private _publishPath?: string; 
  public get publishPath() {
    return this.getStringAttribute('publish_path');
  }
  public set publishPath(value: string) {
    this._publishPath = value;
  }
  public resetPublishPath() {
    this._publishPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishPathInput() {
    return this._publishPath;
  }

  // pull_request_previews_enabled - computed: true, optional: true, required: false
  private _pullRequestPreviewsEnabled?: boolean | cdktf.IResolvable; 
  public get pullRequestPreviewsEnabled() {
    return this.getBooleanAttribute('pull_request_previews_enabled');
  }
  public set pullRequestPreviewsEnabled(value: boolean | cdktf.IResolvable) {
    this._pullRequestPreviewsEnabled = value;
  }
  public resetPullRequestPreviewsEnabled() {
    this._pullRequestPreviewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestPreviewsEnabledInput() {
    return this._pullRequestPreviewsEnabled;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // root_directory - computed: true, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new StaticSiteRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: StaticSiteRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_deploy: cdktf.booleanToTerraform(this._autoDeploy),
      auto_deploy_trigger: cdktf.stringToTerraform(this._autoDeployTrigger),
      branch: cdktf.stringToTerraform(this._branch),
      build_command: cdktf.stringToTerraform(this._buildCommand),
      build_filter: staticSiteBuildFilterToTerraform(this._buildFilter.internalValue),
      custom_domains: cdktf.listMapper(staticSiteCustomDomainsToTerraform, false)(this._customDomains.internalValue),
      env_vars: cdktf.hashMapper(staticSiteEnvVarsToTerraform)(this._envVars.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      headers: cdktf.listMapper(staticSiteHeadersToTerraform, false)(this._headers.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notification_override: staticSiteNotificationOverrideToTerraform(this._notificationOverride.internalValue),
      previews: staticSitePreviewsToTerraform(this._previews.internalValue),
      publish_path: cdktf.stringToTerraform(this._publishPath),
      pull_request_previews_enabled: cdktf.booleanToTerraform(this._pullRequestPreviewsEnabled),
      repo_url: cdktf.stringToTerraform(this._repoUrl),
      root_directory: cdktf.stringToTerraform(this._rootDirectory),
      routes: cdktf.listMapper(staticSiteRoutesToTerraform, false)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_deploy: {
        value: cdktf.booleanToHclTerraform(this._autoDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_deploy_trigger: {
        value: cdktf.stringToHclTerraform(this._autoDeployTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_command: {
        value: cdktf.stringToHclTerraform(this._buildCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_filter: {
        value: staticSiteBuildFilterToHclTerraform(this._buildFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StaticSiteBuildFilter",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(staticSiteCustomDomainsToHclTerraform, false)(this._customDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StaticSiteCustomDomainsList",
      },
      env_vars: {
        value: cdktf.hashMapperHcl(staticSiteEnvVarsToHclTerraform)(this._envVars.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "StaticSiteEnvVarsMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(staticSiteHeadersToHclTerraform, false)(this._headers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StaticSiteHeadersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_override: {
        value: staticSiteNotificationOverrideToHclTerraform(this._notificationOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StaticSiteNotificationOverride",
      },
      previews: {
        value: staticSitePreviewsToHclTerraform(this._previews.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StaticSitePreviews",
      },
      publish_path: {
        value: cdktf.stringToHclTerraform(this._publishPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_request_previews_enabled: {
        value: cdktf.booleanToHclTerraform(this._pullRequestPreviewsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repo_url: {
        value: cdktf.stringToHclTerraform(this._repoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_directory: {
        value: cdktf.stringToHclTerraform(this._rootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.listMapperHcl(staticSiteRoutesToHclTerraform, false)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StaticSiteRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
