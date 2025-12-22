// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketWebsiteConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * error_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}
  */
  readonly errorDocument?: S3BucketWebsiteConfigurationErrorDocument;
  /**
  * index_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}
  */
  readonly indexDocument?: S3BucketWebsiteConfigurationIndexDocument;
  /**
  * redirect_all_requests_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: S3BucketWebsiteConfigurationRedirectAllRequestsTo;
  /**
  * routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}
  */
  readonly routingRule?: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable;
}
export interface S3BucketWebsiteConfigurationErrorDocument {
  /**
  * The object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}
  */
  readonly key?: string;
}

export function s3BucketWebsiteConfigurationErrorDocumentToTerraform(struct?: S3BucketWebsiteConfigurationErrorDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function s3BucketWebsiteConfigurationErrorDocumentToHclTerraform(struct?: S3BucketWebsiteConfigurationErrorDocument | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationErrorDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationErrorDocument | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationErrorDocument | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface S3BucketWebsiteConfigurationIndexDocument {
  /**
  * A suffix that is appended to a request that is for a directory on the website endpoint (for example, if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}
  */
  readonly suffix?: string;
}

export function s3BucketWebsiteConfigurationIndexDocumentToTerraform(struct?: S3BucketWebsiteConfigurationIndexDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function s3BucketWebsiteConfigurationIndexDocumentToHclTerraform(struct?: S3BucketWebsiteConfigurationIndexDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationIndexDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationIndexDocument | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationIndexDocument | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix = value.suffix;
    }
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface S3BucketWebsiteConfigurationRedirectAllRequestsTo {
  /**
  * The host name to use in the redirect request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
}

export function s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function s3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._protocol = value.protocol;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
  * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * The object key name prefix when the redirect is applied. For example, to redirect requests for `ExamplePage.html`, the key prefix will be `ExamplePage.html`. To redirect request for all pages with the prefix `docs/`, the key prefix will be `/docs`, which identifies all objects in the `docs/` folder. Required when the parent element `Condition` is specified and sibling `HTTPErrorCodeReturnedEquals` is not specified. If both conditions are specified, both must be true for the redirect to be applied. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
}

export function s3BucketWebsiteConfigurationRoutingRuleConditionToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_error_code_returned_equals: cdktf.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktf.stringToTerraform(struct!.keyPrefixEquals),
  }
}


export function s3BucketWebsiteConfigurationRoutingRuleConditionToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_error_code_returned_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpErrorCodeReturnedEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix_equals: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefixEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpErrorCodeReturnedEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
    }
    if (this._keyPrefixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
    }
  }

  // http_error_code_returned_equals - computed: false, optional: true, required: false
  private _httpErrorCodeReturnedEquals?: string; 
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }
  public set httpErrorCodeReturnedEquals(value: string) {
    this._httpErrorCodeReturnedEquals = value;
  }
  public resetHttpErrorCodeReturnedEquals() {
    this._httpErrorCodeReturnedEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeReturnedEqualsInput() {
    return this._httpErrorCodeReturnedEquals;
  }

  // key_prefix_equals - computed: false, optional: true, required: false
  private _keyPrefixEquals?: string; 
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
  public set keyPrefixEquals(value: string) {
    this._keyPrefixEquals = value;
  }
  public resetKeyPrefixEquals() {
    this._keyPrefixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixEqualsInput() {
    return this._keyPrefixEquals;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
  * The host name to use in the redirect request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * The HTTP redirect code to use on the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * The protocol to use in the redirect request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
  /**
  * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a condition block with `KeyPrefixEquals` set to `docs/` and in the Redirect set `ReplaceKeyPrefixWith` to `/documents`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyWith` is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}
  */
  readonly replaceKeyWith?: string;
}

export function s3BucketWebsiteConfigurationRoutingRuleRedirectToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktf.stringToTerraform(struct!.httpRedirectCode),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    replace_key_prefix_with: cdktf.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktf.stringToTerraform(struct!.replaceKeyWith),
  }
}


export function s3BucketWebsiteConfigurationRoutingRuleRedirectToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_redirect_code: {
      value: cdktf.stringToHclTerraform(struct!.httpRedirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_prefix_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceKeyPrefixWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceKeyWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRuleRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._protocol = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._protocol = value.protocol;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_redirect_code - computed: false, optional: true, required: false
  private _httpRedirectCode?: string; 
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }
  public set httpRedirectCode(value: string) {
    this._httpRedirectCode = value;
  }
  public resetHttpRedirectCode() {
    this._httpRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectCodeInput() {
    return this._httpRedirectCode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replace_key_prefix_with - computed: false, optional: true, required: false
  private _replaceKeyPrefixWith?: string; 
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }
  public set replaceKeyPrefixWith(value: string) {
    this._replaceKeyPrefixWith = value;
  }
  public resetReplaceKeyPrefixWith() {
    this._replaceKeyPrefixWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyPrefixWithInput() {
    return this._replaceKeyPrefixWith;
  }

  // replace_key_with - computed: false, optional: true, required: false
  private _replaceKeyWith?: string; 
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
  public set replaceKeyWith(value: string) {
    this._replaceKeyWith = value;
  }
  public resetReplaceKeyWith() {
    this._replaceKeyWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyWithInput() {
    return this._replaceKeyWith;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRule {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}
  */
  readonly condition?: S3BucketWebsiteConfigurationRoutingRuleCondition;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}
  */
  readonly redirect?: S3BucketWebsiteConfigurationRoutingRuleRedirect;
}

export function s3BucketWebsiteConfigurationRoutingRuleToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: s3BucketWebsiteConfigurationRoutingRuleConditionToTerraform(struct!.condition),
    redirect: s3BucketWebsiteConfigurationRoutingRuleRedirectToTerraform(struct!.redirect),
  }
}


export function s3BucketWebsiteConfigurationRoutingRuleToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: s3BucketWebsiteConfigurationRoutingRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketWebsiteConfigurationRoutingRuleCondition",
    },
    redirect: {
      value: s3BucketWebsiteConfigurationRoutingRuleRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketWebsiteConfigurationRoutingRuleRedirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._redirect.internalValue = value.redirect;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: S3BucketWebsiteConfigurationRoutingRuleCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: S3BucketWebsiteConfigurationRoutingRuleRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class S3BucketWebsiteConfigurationRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable

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
  public get(index: number): S3BucketWebsiteConfigurationRoutingRuleOutputReference {
    return new S3BucketWebsiteConfigurationRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration ionoscloud_s3_bucket_website_configuration}
*/
export class S3BucketWebsiteConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_s3_bucket_website_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketWebsiteConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketWebsiteConfiguration to import
  * @param importFromId The id of the existing S3BucketWebsiteConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketWebsiteConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_s3_bucket_website_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_website_configuration ionoscloud_s3_bucket_website_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketWebsiteConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketWebsiteConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_s3_bucket_website_configuration',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._errorDocument.internalValue = config.errorDocument;
    this._indexDocument.internalValue = config.indexDocument;
    this._redirectAllRequestsTo.internalValue = config.redirectAllRequestsTo;
    this._routingRule.internalValue = config.routingRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument = new S3BucketWebsiteConfigurationErrorDocumentOutputReference(this, "error_document");
  public get errorDocument() {
    return this._errorDocument;
  }
  public putErrorDocument(value: S3BucketWebsiteConfigurationErrorDocument) {
    this._errorDocument.internalValue = value;
  }
  public resetErrorDocument() {
    this._errorDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument.internalValue;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument = new S3BucketWebsiteConfigurationIndexDocumentOutputReference(this, "index_document");
  public get indexDocument() {
    return this._indexDocument;
  }
  public putIndexDocument(value: S3BucketWebsiteConfigurationIndexDocument) {
    this._indexDocument.internalValue = value;
  }
  public resetIndexDocument() {
    this._indexDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument.internalValue;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo = new S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }
  public putRedirectAllRequestsTo(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo) {
    this._redirectAllRequestsTo.internalValue = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo.internalValue;
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule = new S3BucketWebsiteConfigurationRoutingRuleList(this, "routing_rule", false);
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable) {
    this._routingRule.internalValue = value;
  }
  public resetRoutingRule() {
    this._routingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      error_document: s3BucketWebsiteConfigurationErrorDocumentToTerraform(this._errorDocument.internalValue),
      index_document: s3BucketWebsiteConfigurationIndexDocumentToTerraform(this._indexDocument.internalValue),
      redirect_all_requests_to: s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(this._redirectAllRequestsTo.internalValue),
      routing_rule: cdktf.listMapper(s3BucketWebsiteConfigurationRoutingRuleToTerraform, true)(this._routingRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_document: {
        value: s3BucketWebsiteConfigurationErrorDocumentToHclTerraform(this._errorDocument.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketWebsiteConfigurationErrorDocument",
      },
      index_document: {
        value: s3BucketWebsiteConfigurationIndexDocumentToHclTerraform(this._indexDocument.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketWebsiteConfigurationIndexDocument",
      },
      redirect_all_requests_to: {
        value: s3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(this._redirectAllRequestsTo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketWebsiteConfigurationRedirectAllRequestsTo",
      },
      routing_rule: {
        value: cdktf.listMapperHcl(s3BucketWebsiteConfigurationRoutingRuleToHclTerraform, true)(this._routingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketWebsiteConfigurationRoutingRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
