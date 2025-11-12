// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArtifactoryReleaseBundleWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of webhook. Max length 1000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#description ArtifactoryReleaseBundleWebhook#description}
  */
  readonly description?: string;
  /**
  * Status of webhook. Default to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#enabled ArtifactoryReleaseBundleWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of Events in Artifactory, Distribution, Release Bundle that function as the event trigger for the Webhook.
  * Allow values: deployed, deleted, moved, copied, cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#event_types ArtifactoryReleaseBundleWebhook#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Key of webhook. Must be between 2 and 200 characters. Cannot contain spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#key ArtifactoryReleaseBundleWebhook#key}
  */
  readonly key: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#criteria ArtifactoryReleaseBundleWebhook#criteria}
  */
  readonly criteria?: ArtifactoryReleaseBundleWebhookCriteria[] | cdktf.IResolvable;
  /**
  * handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#handler ArtifactoryReleaseBundleWebhook#handler}
  */
  readonly handler?: ArtifactoryReleaseBundleWebhookHandler[] | cdktf.IResolvable;
}
export interface ArtifactoryReleaseBundleWebhookCriteria {
  /**
  * Trigger on any release bundles or distributions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#any_release_bundle ArtifactoryReleaseBundleWebhook#any_release_bundle}
  */
  readonly anyReleaseBundle: boolean | cdktf.IResolvable;
  /**
  * Simple wildcard patterns for Release Bundle names.
  * Ant-style path expressions are supported (*, **, ?).
  * For example: `product_*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#exclude_patterns ArtifactoryReleaseBundleWebhook#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Simple wildcard patterns for Release Bundle names.
  * Ant-style path expressions are supported (*, **, ?).
  * For example: `product_*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#include_patterns ArtifactoryReleaseBundleWebhook#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Trigger on this list of release bundle names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#registered_release_bundle_names ArtifactoryReleaseBundleWebhook#registered_release_bundle_names}
  */
  readonly registeredReleaseBundleNames: string[];
}

export function artifactoryReleaseBundleWebhookCriteriaToTerraform(struct?: ArtifactoryReleaseBundleWebhookCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_release_bundle: cdktf.booleanToTerraform(struct!.anyReleaseBundle),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    registered_release_bundle_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registeredReleaseBundleNames),
  }
}


export function artifactoryReleaseBundleWebhookCriteriaToHclTerraform(struct?: ArtifactoryReleaseBundleWebhookCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_release_bundle: {
      value: cdktf.booleanToHclTerraform(struct!.anyReleaseBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    registered_release_bundle_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registeredReleaseBundleNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactoryReleaseBundleWebhookCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArtifactoryReleaseBundleWebhookCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyReleaseBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyReleaseBundle = this._anyReleaseBundle;
    }
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._registeredReleaseBundleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredReleaseBundleNames = this._registeredReleaseBundleNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactoryReleaseBundleWebhookCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyReleaseBundle = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._registeredReleaseBundleNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyReleaseBundle = value.anyReleaseBundle;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._registeredReleaseBundleNames = value.registeredReleaseBundleNames;
    }
  }

  // any_release_bundle - computed: false, optional: false, required: true
  private _anyReleaseBundle?: boolean | cdktf.IResolvable; 
  public get anyReleaseBundle() {
    return this.getBooleanAttribute('any_release_bundle');
  }
  public set anyReleaseBundle(value: boolean | cdktf.IResolvable) {
    this._anyReleaseBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyReleaseBundleInput() {
    return this._anyReleaseBundle;
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // registered_release_bundle_names - computed: false, optional: false, required: true
  private _registeredReleaseBundleNames?: string[]; 
  public get registeredReleaseBundleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('registered_release_bundle_names'));
  }
  public set registeredReleaseBundleNames(value: string[]) {
    this._registeredReleaseBundleNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredReleaseBundleNamesInput() {
    return this._registeredReleaseBundleNames;
  }
}

export class ArtifactoryReleaseBundleWebhookCriteriaList extends cdktf.ComplexList {
  public internalValue? : ArtifactoryReleaseBundleWebhookCriteria[] | cdktf.IResolvable

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
  public get(index: number): ArtifactoryReleaseBundleWebhookCriteriaOutputReference {
    return new ArtifactoryReleaseBundleWebhookCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArtifactoryReleaseBundleWebhookHandler {
  /**
  * Custom HTTP headers you wish to use to invoke the Webhook, comprise of key/value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#custom_http_headers ArtifactoryReleaseBundleWebhook#custom_http_headers}
  */
  readonly customHttpHeaders?: { [key: string]: string };
  /**
  * Proxy key from Artifactory Proxies setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#proxy ArtifactoryReleaseBundleWebhook#proxy}
  */
  readonly proxy?: string;
  /**
  * Secret authentication token that will be sent to the configured URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#secret ArtifactoryReleaseBundleWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Specifies the URL that the Webhook invokes. This will be the URL that Artifactory will send an HTTP POST request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#url ArtifactoryReleaseBundleWebhook#url}
  */
  readonly url: string;
  /**
  * When set to `true`, the secret will be used to sign the event payload, allowing the target to validate that the payload content has not been changed and will not be passed as part of the event. If left unset or set to `false`, the secret is passed through the `X-JFrog-Event-Auth` HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#use_secret_for_signing ArtifactoryReleaseBundleWebhook#use_secret_for_signing}
  */
  readonly useSecretForSigning?: boolean | cdktf.IResolvable;
}

export function artifactoryReleaseBundleWebhookHandlerToTerraform(struct?: ArtifactoryReleaseBundleWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHttpHeaders),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
    use_secret_for_signing: cdktf.booleanToTerraform(struct!.useSecretForSigning),
  }
}


export function artifactoryReleaseBundleWebhookHandlerToHclTerraform(struct?: ArtifactoryReleaseBundleWebhookHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHttpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_secret_for_signing: {
      value: cdktf.booleanToHclTerraform(struct!.useSecretForSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactoryReleaseBundleWebhookHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArtifactoryReleaseBundleWebhookHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHttpHeaders = this._customHttpHeaders;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useSecretForSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSecretForSigning = this._useSecretForSigning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactoryReleaseBundleWebhookHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHttpHeaders = undefined;
      this._proxy = undefined;
      this._secret = undefined;
      this._url = undefined;
      this._useSecretForSigning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHttpHeaders = value.customHttpHeaders;
      this._proxy = value.proxy;
      this._secret = value.secret;
      this._url = value.url;
      this._useSecretForSigning = value.useSecretForSigning;
    }
  }

  // custom_http_headers - computed: false, optional: true, required: false
  private _customHttpHeaders?: { [key: string]: string }; 
  public get customHttpHeaders() {
    return this.getStringMapAttribute('custom_http_headers');
  }
  public set customHttpHeaders(value: { [key: string]: string }) {
    this._customHttpHeaders = value;
  }
  public resetCustomHttpHeaders() {
    this._customHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpHeadersInput() {
    return this._customHttpHeaders;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_secret_for_signing - computed: false, optional: true, required: false
  private _useSecretForSigning?: boolean | cdktf.IResolvable; 
  public get useSecretForSigning() {
    return this.getBooleanAttribute('use_secret_for_signing');
  }
  public set useSecretForSigning(value: boolean | cdktf.IResolvable) {
    this._useSecretForSigning = value;
  }
  public resetUseSecretForSigning() {
    this._useSecretForSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecretForSigningInput() {
    return this._useSecretForSigning;
  }
}

export class ArtifactoryReleaseBundleWebhookHandlerList extends cdktf.ComplexList {
  public internalValue? : ArtifactoryReleaseBundleWebhookHandler[] | cdktf.IResolvable

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
  public get(index: number): ArtifactoryReleaseBundleWebhookHandlerOutputReference {
    return new ArtifactoryReleaseBundleWebhookHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook artifactory_artifactory_release_bundle_webhook}
*/
export class ArtifactoryReleaseBundleWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_artifactory_release_bundle_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArtifactoryReleaseBundleWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArtifactoryReleaseBundleWebhook to import
  * @param importFromId The id of the existing ArtifactoryReleaseBundleWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArtifactoryReleaseBundleWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_artifactory_release_bundle_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/artifactory_release_bundle_webhook artifactory_artifactory_release_bundle_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactoryReleaseBundleWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ArtifactoryReleaseBundleWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_artifactory_release_bundle_webhook',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventTypes = config.eventTypes;
    this._key = config.key;
    this._criteria.internalValue = config.criteria;
    this._handler.internalValue = config.handler;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new ArtifactoryReleaseBundleWebhookCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: ArtifactoryReleaseBundleWebhookCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // handler - computed: false, optional: true, required: false
  private _handler = new ArtifactoryReleaseBundleWebhookHandlerList(this, "handler", true);
  public get handler() {
    return this._handler;
  }
  public putHandler(value: ArtifactoryReleaseBundleWebhookHandler[] | cdktf.IResolvable) {
    this._handler.internalValue = value;
  }
  public resetHandler() {
    this._handler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypes),
      key: cdktf.stringToTerraform(this._key),
      criteria: cdktf.listMapper(artifactoryReleaseBundleWebhookCriteriaToTerraform, true)(this._criteria.internalValue),
      handler: cdktf.listMapper(artifactoryReleaseBundleWebhookHandlerToTerraform, true)(this._handler.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria: {
        value: cdktf.listMapperHcl(artifactoryReleaseBundleWebhookCriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArtifactoryReleaseBundleWebhookCriteriaList",
      },
      handler: {
        value: cdktf.listMapperHcl(artifactoryReleaseBundleWebhookHandlerToHclTerraform, true)(this._handler.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArtifactoryReleaseBundleWebhookHandlerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
