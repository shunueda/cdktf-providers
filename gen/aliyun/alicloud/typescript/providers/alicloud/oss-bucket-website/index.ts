// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketWebsiteAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#bucket OssBucketWebsiteA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#id OssBucketWebsiteA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * error_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#error_document OssBucketWebsiteA#error_document}
  */
  readonly errorDocument?: OssBucketWebsiteErrorDocument;
  /**
  * index_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#index_document OssBucketWebsiteA#index_document}
  */
  readonly indexDocument?: OssBucketWebsiteIndexDocument;
  /**
  * routing_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#routing_rules OssBucketWebsiteA#routing_rules}
  */
  readonly routingRules?: OssBucketWebsiteRoutingRules;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#timeouts OssBucketWebsiteA#timeouts}
  */
  readonly timeouts?: OssBucketWebsiteTimeouts;
}
export interface OssBucketWebsiteErrorDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#http_status OssBucketWebsiteA#http_status}
  */
  readonly httpStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key OssBucketWebsiteA#key}
  */
  readonly key?: string;
}

export function ossBucketWebsiteErrorDocumentToTerraform(struct?: OssBucketWebsiteErrorDocumentOutputReference | OssBucketWebsiteErrorDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ossBucketWebsiteErrorDocumentToHclTerraform(struct?: OssBucketWebsiteErrorDocumentOutputReference | OssBucketWebsiteErrorDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class OssBucketWebsiteErrorDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteErrorDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteErrorDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._key = value.key;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
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
export interface OssBucketWebsiteIndexDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#suffix OssBucketWebsiteA#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#support_sub_dir OssBucketWebsiteA#support_sub_dir}
  */
  readonly supportSubDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#type OssBucketWebsiteA#type}
  */
  readonly type?: string;
}

export function ossBucketWebsiteIndexDocumentToTerraform(struct?: OssBucketWebsiteIndexDocumentOutputReference | OssBucketWebsiteIndexDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.stringToTerraform(struct!.suffix),
    support_sub_dir: cdktf.booleanToTerraform(struct!.supportSubDir),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ossBucketWebsiteIndexDocumentToHclTerraform(struct?: OssBucketWebsiteIndexDocumentOutputReference | OssBucketWebsiteIndexDocument): any {
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
    support_sub_dir: {
      value: cdktf.booleanToHclTerraform(struct!.supportSubDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class OssBucketWebsiteIndexDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteIndexDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._supportSubDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportSubDir = this._supportSubDir;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteIndexDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suffix = undefined;
      this._supportSubDir = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suffix = value.suffix;
      this._supportSubDir = value.supportSubDir;
      this._type = value.type;
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

  // support_sub_dir - computed: false, optional: true, required: false
  private _supportSubDir?: boolean | cdktf.IResolvable; 
  public get supportSubDir() {
    return this.getBooleanAttribute('support_sub_dir');
  }
  public set supportSubDir(value: boolean | cdktf.IResolvable) {
    this._supportSubDir = value;
  }
  public resetSupportSubDir() {
    this._supportSubDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSubDirInput() {
    return this._supportSubDir;
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
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#ends_with OssBucketWebsiteA#ends_with}
  */
  readonly endsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#equals OssBucketWebsiteA#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key OssBucketWebsiteA#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#starts_with OssBucketWebsiteA#starts_with}
  */
  readonly startsWith?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktf.stringToTerraform(struct!.endsWith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    key: cdktf.stringToTerraform(struct!.key),
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_with: {
      value: cdktf.stringToHclTerraform(struct!.endsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._key = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._key = value.key;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string; 
  public get endsWith() {
    return this.getStringAttribute('ends_with');
  }
  public set endsWith(value: string) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
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

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#http_error_code_returned_equals OssBucketWebsiteA#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key_prefix_equals OssBucketWebsiteA#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key_suffix_equals OssBucketWebsiteA#key_suffix_equals}
  */
  readonly keySuffixEquals?: string;
  /**
  * include_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#include_headers OssBucketWebsiteA#include_headers}
  */
  readonly includeHeaders?: OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleConditionToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleConditionOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_error_code_returned_equals: cdktf.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktf.stringToTerraform(struct!.keyPrefixEquals),
    key_suffix_equals: cdktf.stringToTerraform(struct!.keySuffixEquals),
    include_headers: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersToTerraform, true)(struct!.includeHeaders),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleConditionToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleConditionOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleCondition): any {
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
    key_suffix_equals: {
      value: cdktf.stringToHclTerraform(struct!.keySuffixEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_headers: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersToHclTerraform, true)(struct!.includeHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleCondition | undefined {
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
    if (this._keySuffixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySuffixEquals = this._keySuffixEquals;
    }
    if (this._includeHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHeaders = this._includeHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
      this._keySuffixEquals = undefined;
      this._includeHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
      this._keySuffixEquals = value.keySuffixEquals;
      this._includeHeaders.internalValue = value.includeHeaders;
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

  // key_suffix_equals - computed: false, optional: true, required: false
  private _keySuffixEquals?: string; 
  public get keySuffixEquals() {
    return this.getStringAttribute('key_suffix_equals');
  }
  public set keySuffixEquals(value: string) {
    this._keySuffixEquals = value;
  }
  public resetKeySuffixEquals() {
    this._keySuffixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySuffixEqualsInput() {
    return this._keySuffixEquals;
  }

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders = new OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeadersList(this, "include_headers", false);
  public get includeHeaders() {
    return this._includeHeaders;
  }
  public putIncludeHeaders(value: OssBucketWebsiteRoutingRulesRoutingRuleConditionIncludeHeaders[] | cdktf.IResolvable) {
    this._includeHeaders.internalValue = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#script OssBucketWebsiteA#script}
  */
  readonly script?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleLuaConfigToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleLuaConfigOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleLuaConfigToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleLuaConfigOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleLuaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
    }
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#access_key_id OssBucketWebsiteA#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#access_key_secret OssBucketWebsiteA#access_key_secret}
  */
  readonly accessKeySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#auth_type OssBucketWebsiteA#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#region OssBucketWebsiteA#region}
  */
  readonly region?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    access_key_secret: cdktf.stringToTerraform(struct!.accessKeySecret),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecret = this._accessKeySecret;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._accessKeySecret = undefined;
      this._authType = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._accessKeySecret = value.accessKeySecret;
      this._authType = value.authType;
      this._region = value.region;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_secret - computed: false, optional: true, required: false
  private _accessKeySecret?: string; 
  public get accessKeySecret() {
    return this.getStringAttribute('access_key_secret');
  }
  public set accessKeySecret(value: string) {
    this._accessKeySecret = value;
  }
  public resetAccessKeySecret() {
    this._accessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretInput() {
    return this._accessKeySecret;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key OssBucketWebsiteA#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#value OssBucketWebsiteA#value}
  */
  readonly value?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet | cdktf.IResolvable): any {
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#pass OssBucketWebsiteA#pass}
  */
  readonly pass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#pass_all OssBucketWebsiteA#pass_all}
  */
  readonly passAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#remove OssBucketWebsiteA#remove}
  */
  readonly remove?: string[];
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#set OssBucketWebsiteA#set}
  */
  readonly set?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
    pass_all: cdktf.booleanToTerraform(struct!.passAll),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetToTerraform, true)(struct!.set),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass_all: {
      value: cdktf.booleanToHclTerraform(struct!.passAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetToHclTerraform, true)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._passAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.passAll = this._passAll;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pass = undefined;
      this._passAll = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pass = value.pass;
      this._passAll = value.passAll;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // pass_all - computed: false, optional: true, required: false
  private _passAll?: boolean | cdktf.IResolvable; 
  public get passAll() {
    return this.getBooleanAttribute('pass_all');
  }
  public set passAll(value: boolean | cdktf.IResolvable) {
    this._passAll = value;
  }
  public resetPassAll() {
    this._passAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passAllInput() {
    return this._passAll;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternate_dst_region OssBucketWebsiteA#mirror_multi_alternate_dst_region}
  */
  readonly mirrorMultiAlternateDstRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternate_number OssBucketWebsiteA#mirror_multi_alternate_number}
  */
  readonly mirrorMultiAlternateNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternate_url OssBucketWebsiteA#mirror_multi_alternate_url}
  */
  readonly mirrorMultiAlternateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternate_vpc_id OssBucketWebsiteA#mirror_multi_alternate_vpc_id}
  */
  readonly mirrorMultiAlternateVpcId?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror_multi_alternate_dst_region: cdktf.stringToTerraform(struct!.mirrorMultiAlternateDstRegion),
    mirror_multi_alternate_number: cdktf.numberToTerraform(struct!.mirrorMultiAlternateNumber),
    mirror_multi_alternate_url: cdktf.stringToTerraform(struct!.mirrorMultiAlternateUrl),
    mirror_multi_alternate_vpc_id: cdktf.stringToTerraform(struct!.mirrorMultiAlternateVpcId),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror_multi_alternate_dst_region: {
      value: cdktf.stringToHclTerraform(struct!.mirrorMultiAlternateDstRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_multi_alternate_number: {
      value: cdktf.numberToHclTerraform(struct!.mirrorMultiAlternateNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror_multi_alternate_url: {
      value: cdktf.stringToHclTerraform(struct!.mirrorMultiAlternateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_multi_alternate_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.mirrorMultiAlternateVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirrorMultiAlternateDstRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternateDstRegion = this._mirrorMultiAlternateDstRegion;
    }
    if (this._mirrorMultiAlternateNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternateNumber = this._mirrorMultiAlternateNumber;
    }
    if (this._mirrorMultiAlternateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternateUrl = this._mirrorMultiAlternateUrl;
    }
    if (this._mirrorMultiAlternateVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternateVpcId = this._mirrorMultiAlternateVpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirrorMultiAlternateDstRegion = undefined;
      this._mirrorMultiAlternateNumber = undefined;
      this._mirrorMultiAlternateUrl = undefined;
      this._mirrorMultiAlternateVpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirrorMultiAlternateDstRegion = value.mirrorMultiAlternateDstRegion;
      this._mirrorMultiAlternateNumber = value.mirrorMultiAlternateNumber;
      this._mirrorMultiAlternateUrl = value.mirrorMultiAlternateUrl;
      this._mirrorMultiAlternateVpcId = value.mirrorMultiAlternateVpcId;
    }
  }

  // mirror_multi_alternate_dst_region - computed: false, optional: true, required: false
  private _mirrorMultiAlternateDstRegion?: string; 
  public get mirrorMultiAlternateDstRegion() {
    return this.getStringAttribute('mirror_multi_alternate_dst_region');
  }
  public set mirrorMultiAlternateDstRegion(value: string) {
    this._mirrorMultiAlternateDstRegion = value;
  }
  public resetMirrorMultiAlternateDstRegion() {
    this._mirrorMultiAlternateDstRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternateDstRegionInput() {
    return this._mirrorMultiAlternateDstRegion;
  }

  // mirror_multi_alternate_number - computed: false, optional: true, required: false
  private _mirrorMultiAlternateNumber?: number; 
  public get mirrorMultiAlternateNumber() {
    return this.getNumberAttribute('mirror_multi_alternate_number');
  }
  public set mirrorMultiAlternateNumber(value: number) {
    this._mirrorMultiAlternateNumber = value;
  }
  public resetMirrorMultiAlternateNumber() {
    this._mirrorMultiAlternateNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternateNumberInput() {
    return this._mirrorMultiAlternateNumber;
  }

  // mirror_multi_alternate_url - computed: false, optional: true, required: false
  private _mirrorMultiAlternateUrl?: string; 
  public get mirrorMultiAlternateUrl() {
    return this.getStringAttribute('mirror_multi_alternate_url');
  }
  public set mirrorMultiAlternateUrl(value: string) {
    this._mirrorMultiAlternateUrl = value;
  }
  public resetMirrorMultiAlternateUrl() {
    this._mirrorMultiAlternateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternateUrlInput() {
    return this._mirrorMultiAlternateUrl;
  }

  // mirror_multi_alternate_vpc_id - computed: false, optional: true, required: false
  private _mirrorMultiAlternateVpcId?: string; 
  public get mirrorMultiAlternateVpcId() {
    return this.getStringAttribute('mirror_multi_alternate_vpc_id');
  }
  public set mirrorMultiAlternateVpcId(value: string) {
    this._mirrorMultiAlternateVpcId = value;
  }
  public resetMirrorMultiAlternateVpcId() {
    this._mirrorMultiAlternateVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternateVpcIdInput() {
    return this._mirrorMultiAlternateVpcId;
  }
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates {
  /**
  * mirror_multi_alternate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternate OssBucketWebsiteA#mirror_multi_alternate}
  */
  readonly mirrorMultiAlternate?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror_multi_alternate: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateToTerraform, true)(struct!.mirrorMultiAlternate),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror_multi_alternate: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateToHclTerraform, true)(struct!.mirrorMultiAlternate),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirrorMultiAlternate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternate = this._mirrorMultiAlternate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mirrorMultiAlternate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mirrorMultiAlternate.internalValue = value.mirrorMultiAlternate;
    }
  }

  // mirror_multi_alternate - computed: false, optional: true, required: false
  private _mirrorMultiAlternate = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternateList(this, "mirror_multi_alternate", false);
  public get mirrorMultiAlternate() {
    return this._mirrorMultiAlternate;
  }
  public putMirrorMultiAlternate(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesMirrorMultiAlternate[] | cdktf.IResolvable) {
    this._mirrorMultiAlternate.internalValue = value;
  }
  public resetMirrorMultiAlternate() {
    this._mirrorMultiAlternate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternateInput() {
    return this._mirrorMultiAlternate.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key OssBucketWebsiteA#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#value OssBucketWebsiteA#value}
  */
  readonly value?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader | cdktf.IResolvable): any {
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders {
  /**
  * return_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#return_header OssBucketWebsiteA#return_header}
  */
  readonly returnHeader?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_header: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderToTerraform, true)(struct!.returnHeader),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_header: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderToHclTerraform, true)(struct!.returnHeader),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnHeader = this._returnHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnHeader.internalValue = value.returnHeader;
    }
  }

  // return_header - computed: false, optional: true, required: false
  private _returnHeader = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeaderList(this, "return_header", false);
  public get returnHeader() {
    return this._returnHeader;
  }
  public putReturnHeader(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersReturnHeader[] | cdktf.IResolvable) {
    this._returnHeader.internalValue = value;
  }
  public resetReturnHeader() {
    this._returnHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnHeaderInput() {
    return this._returnHeader.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#key OssBucketWebsiteA#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#value OssBucketWebsiteA#value}
  */
  readonly value?: string;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings | cdktf.IResolvable): any {
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
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

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings {
  /**
  * taggings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#taggings OssBucketWebsiteA#taggings}
  */
  readonly taggings?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    taggings: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsToTerraform, true)(struct!.taggings),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    taggings: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsToHclTerraform, true)(struct!.taggings),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taggings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggings = this._taggings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._taggings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._taggings.internalValue = value.taggings;
    }
  }

  // taggings - computed: false, optional: true, required: false
  private _taggings = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggingsList(this, "taggings", false);
  public get taggings() {
    return this._taggings;
  }
  public putTaggings(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsTaggings[] | cdktf.IResolvable) {
    this._taggings.internalValue = value;
  }
  public resetTaggings() {
    this._taggings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingsInput() {
    return this._taggings.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRuleRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#enable_replace_prefix OssBucketWebsiteA#enable_replace_prefix}
  */
  readonly enableReplacePrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#host_name OssBucketWebsiteA#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#http_redirect_code OssBucketWebsiteA#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_allow_get_image_info OssBucketWebsiteA#mirror_allow_get_image_info}
  */
  readonly mirrorAllowGetImageInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_allow_head_object OssBucketWebsiteA#mirror_allow_head_object}
  */
  readonly mirrorAllowHeadObject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_allow_video_snapshot OssBucketWebsiteA#mirror_allow_video_snapshot}
  */
  readonly mirrorAllowVideoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_async_status OssBucketWebsiteA#mirror_async_status}
  */
  readonly mirrorAsyncStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_check_md5 OssBucketWebsiteA#mirror_check_md5}
  */
  readonly mirrorCheckMd5?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_dst_region OssBucketWebsiteA#mirror_dst_region}
  */
  readonly mirrorDstRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_dst_slave_vpc_id OssBucketWebsiteA#mirror_dst_slave_vpc_id}
  */
  readonly mirrorDstSlaveVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_dst_vpc_id OssBucketWebsiteA#mirror_dst_vpc_id}
  */
  readonly mirrorDstVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_follow_redirect OssBucketWebsiteA#mirror_follow_redirect}
  */
  readonly mirrorFollowRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_is_express_tunnel OssBucketWebsiteA#mirror_is_express_tunnel}
  */
  readonly mirrorIsExpressTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_pass_original_slashes OssBucketWebsiteA#mirror_pass_original_slashes}
  */
  readonly mirrorPassOriginalSlashes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_pass_query_string OssBucketWebsiteA#mirror_pass_query_string}
  */
  readonly mirrorPassQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_proxy_pass OssBucketWebsiteA#mirror_proxy_pass}
  */
  readonly mirrorProxyPass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_role OssBucketWebsiteA#mirror_role}
  */
  readonly mirrorRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_save_oss_meta OssBucketWebsiteA#mirror_save_oss_meta}
  */
  readonly mirrorSaveOssMeta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_sni OssBucketWebsiteA#mirror_sni}
  */
  readonly mirrorSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_switch_all_errors OssBucketWebsiteA#mirror_switch_all_errors}
  */
  readonly mirrorSwitchAllErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_tunnel_id OssBucketWebsiteA#mirror_tunnel_id}
  */
  readonly mirrorTunnelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_url OssBucketWebsiteA#mirror_url}
  */
  readonly mirrorUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_url_probe OssBucketWebsiteA#mirror_url_probe}
  */
  readonly mirrorUrlProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_url_slave OssBucketWebsiteA#mirror_url_slave}
  */
  readonly mirrorUrlSlave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_user_last_modified OssBucketWebsiteA#mirror_user_last_modified}
  */
  readonly mirrorUserLastModified?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_using_role OssBucketWebsiteA#mirror_using_role}
  */
  readonly mirrorUsingRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#pass_query_string OssBucketWebsiteA#pass_query_string}
  */
  readonly passQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#protocol OssBucketWebsiteA#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#redirect_type OssBucketWebsiteA#redirect_type}
  */
  readonly redirectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#replace_key_prefix_with OssBucketWebsiteA#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#replace_key_with OssBucketWebsiteA#replace_key_with}
  */
  readonly replaceKeyWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#transparent_mirror_response_codes OssBucketWebsiteA#transparent_mirror_response_codes}
  */
  readonly transparentMirrorResponseCodes?: string;
  /**
  * mirror_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_auth OssBucketWebsiteA#mirror_auth}
  */
  readonly mirrorAuth?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth;
  /**
  * mirror_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_headers OssBucketWebsiteA#mirror_headers}
  */
  readonly mirrorHeaders?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders;
  /**
  * mirror_multi_alternates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_multi_alternates OssBucketWebsiteA#mirror_multi_alternates}
  */
  readonly mirrorMultiAlternates?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates;
  /**
  * mirror_return_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_return_headers OssBucketWebsiteA#mirror_return_headers}
  */
  readonly mirrorReturnHeaders?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders;
  /**
  * mirror_taggings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#mirror_taggings OssBucketWebsiteA#mirror_taggings}
  */
  readonly mirrorTaggings?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_replace_prefix: cdktf.booleanToTerraform(struct!.enableReplacePrefix),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktf.stringToTerraform(struct!.httpRedirectCode),
    mirror_allow_get_image_info: cdktf.booleanToTerraform(struct!.mirrorAllowGetImageInfo),
    mirror_allow_head_object: cdktf.booleanToTerraform(struct!.mirrorAllowHeadObject),
    mirror_allow_video_snapshot: cdktf.booleanToTerraform(struct!.mirrorAllowVideoSnapshot),
    mirror_async_status: cdktf.numberToTerraform(struct!.mirrorAsyncStatus),
    mirror_check_md5: cdktf.booleanToTerraform(struct!.mirrorCheckMd5),
    mirror_dst_region: cdktf.stringToTerraform(struct!.mirrorDstRegion),
    mirror_dst_slave_vpc_id: cdktf.stringToTerraform(struct!.mirrorDstSlaveVpcId),
    mirror_dst_vpc_id: cdktf.stringToTerraform(struct!.mirrorDstVpcId),
    mirror_follow_redirect: cdktf.booleanToTerraform(struct!.mirrorFollowRedirect),
    mirror_is_express_tunnel: cdktf.booleanToTerraform(struct!.mirrorIsExpressTunnel),
    mirror_pass_original_slashes: cdktf.booleanToTerraform(struct!.mirrorPassOriginalSlashes),
    mirror_pass_query_string: cdktf.booleanToTerraform(struct!.mirrorPassQueryString),
    mirror_proxy_pass: cdktf.booleanToTerraform(struct!.mirrorProxyPass),
    mirror_role: cdktf.stringToTerraform(struct!.mirrorRole),
    mirror_save_oss_meta: cdktf.booleanToTerraform(struct!.mirrorSaveOssMeta),
    mirror_sni: cdktf.booleanToTerraform(struct!.mirrorSni),
    mirror_switch_all_errors: cdktf.booleanToTerraform(struct!.mirrorSwitchAllErrors),
    mirror_tunnel_id: cdktf.stringToTerraform(struct!.mirrorTunnelId),
    mirror_url: cdktf.stringToTerraform(struct!.mirrorUrl),
    mirror_url_probe: cdktf.stringToTerraform(struct!.mirrorUrlProbe),
    mirror_url_slave: cdktf.stringToTerraform(struct!.mirrorUrlSlave),
    mirror_user_last_modified: cdktf.booleanToTerraform(struct!.mirrorUserLastModified),
    mirror_using_role: cdktf.booleanToTerraform(struct!.mirrorUsingRole),
    pass_query_string: cdktf.booleanToTerraform(struct!.passQueryString),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
    replace_key_prefix_with: cdktf.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktf.stringToTerraform(struct!.replaceKeyWith),
    transparent_mirror_response_codes: cdktf.stringToTerraform(struct!.transparentMirrorResponseCodes),
    mirror_auth: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthToTerraform(struct!.mirrorAuth),
    mirror_headers: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersToTerraform(struct!.mirrorHeaders),
    mirror_multi_alternates: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesToTerraform(struct!.mirrorMultiAlternates),
    mirror_return_headers: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersToTerraform(struct!.mirrorReturnHeaders),
    mirror_taggings: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsToTerraform(struct!.mirrorTaggings),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleRedirectToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRuleRedirectOutputReference | OssBucketWebsiteRoutingRulesRoutingRuleRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_replace_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplacePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    mirror_allow_get_image_info: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorAllowGetImageInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_allow_head_object: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorAllowHeadObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_allow_video_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorAllowVideoSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_async_status: {
      value: cdktf.numberToHclTerraform(struct!.mirrorAsyncStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror_check_md5: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorCheckMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_dst_region: {
      value: cdktf.stringToHclTerraform(struct!.mirrorDstRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_dst_slave_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.mirrorDstSlaveVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_dst_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.mirrorDstVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_follow_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorFollowRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_is_express_tunnel: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorIsExpressTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_pass_original_slashes: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorPassOriginalSlashes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_pass_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorPassQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_proxy_pass: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorProxyPass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_role: {
      value: cdktf.stringToHclTerraform(struct!.mirrorRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_save_oss_meta: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorSaveOssMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_sni: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_switch_all_errors: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorSwitchAllErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.mirrorTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_url: {
      value: cdktf.stringToHclTerraform(struct!.mirrorUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_url_probe: {
      value: cdktf.stringToHclTerraform(struct!.mirrorUrlProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_url_slave: {
      value: cdktf.stringToHclTerraform(struct!.mirrorUrlSlave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_user_last_modified: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorUserLastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_using_role: {
      value: cdktf.booleanToHclTerraform(struct!.mirrorUsingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.passQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectType),
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
    transparent_mirror_response_codes: {
      value: cdktf.stringToHclTerraform(struct!.transparentMirrorResponseCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_auth: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthToHclTerraform(struct!.mirrorAuth),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthList",
    },
    mirror_headers: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersToHclTerraform(struct!.mirrorHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersList",
    },
    mirror_multi_alternates: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesToHclTerraform(struct!.mirrorMultiAlternates),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesList",
    },
    mirror_return_headers: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersToHclTerraform(struct!.mirrorReturnHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersList",
    },
    mirror_taggings: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsToHclTerraform(struct!.mirrorTaggings),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRuleRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableReplacePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplacePrefix = this._enableReplacePrefix;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._mirrorAllowGetImageInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorAllowGetImageInfo = this._mirrorAllowGetImageInfo;
    }
    if (this._mirrorAllowHeadObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorAllowHeadObject = this._mirrorAllowHeadObject;
    }
    if (this._mirrorAllowVideoSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorAllowVideoSnapshot = this._mirrorAllowVideoSnapshot;
    }
    if (this._mirrorAsyncStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorAsyncStatus = this._mirrorAsyncStatus;
    }
    if (this._mirrorCheckMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorCheckMd5 = this._mirrorCheckMd5;
    }
    if (this._mirrorDstRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorDstRegion = this._mirrorDstRegion;
    }
    if (this._mirrorDstSlaveVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorDstSlaveVpcId = this._mirrorDstSlaveVpcId;
    }
    if (this._mirrorDstVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorDstVpcId = this._mirrorDstVpcId;
    }
    if (this._mirrorFollowRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorFollowRedirect = this._mirrorFollowRedirect;
    }
    if (this._mirrorIsExpressTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorIsExpressTunnel = this._mirrorIsExpressTunnel;
    }
    if (this._mirrorPassOriginalSlashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPassOriginalSlashes = this._mirrorPassOriginalSlashes;
    }
    if (this._mirrorPassQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPassQueryString = this._mirrorPassQueryString;
    }
    if (this._mirrorProxyPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorProxyPass = this._mirrorProxyPass;
    }
    if (this._mirrorRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorRole = this._mirrorRole;
    }
    if (this._mirrorSaveOssMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorSaveOssMeta = this._mirrorSaveOssMeta;
    }
    if (this._mirrorSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorSni = this._mirrorSni;
    }
    if (this._mirrorSwitchAllErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorSwitchAllErrors = this._mirrorSwitchAllErrors;
    }
    if (this._mirrorTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorTunnelId = this._mirrorTunnelId;
    }
    if (this._mirrorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorUrl = this._mirrorUrl;
    }
    if (this._mirrorUrlProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorUrlProbe = this._mirrorUrlProbe;
    }
    if (this._mirrorUrlSlave !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorUrlSlave = this._mirrorUrlSlave;
    }
    if (this._mirrorUserLastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorUserLastModified = this._mirrorUserLastModified;
    }
    if (this._mirrorUsingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorUsingRole = this._mirrorUsingRole;
    }
    if (this._passQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.passQueryString = this._passQueryString;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    if (this._transparentMirrorResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentMirrorResponseCodes = this._transparentMirrorResponseCodes;
    }
    if (this._mirrorAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorAuth = this._mirrorAuth?.internalValue;
    }
    if (this._mirrorHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorHeaders = this._mirrorHeaders?.internalValue;
    }
    if (this._mirrorMultiAlternates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMultiAlternates = this._mirrorMultiAlternates?.internalValue;
    }
    if (this._mirrorReturnHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorReturnHeaders = this._mirrorReturnHeaders?.internalValue;
    }
    if (this._mirrorTaggings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorTaggings = this._mirrorTaggings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableReplacePrefix = undefined;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._mirrorAllowGetImageInfo = undefined;
      this._mirrorAllowHeadObject = undefined;
      this._mirrorAllowVideoSnapshot = undefined;
      this._mirrorAsyncStatus = undefined;
      this._mirrorCheckMd5 = undefined;
      this._mirrorDstRegion = undefined;
      this._mirrorDstSlaveVpcId = undefined;
      this._mirrorDstVpcId = undefined;
      this._mirrorFollowRedirect = undefined;
      this._mirrorIsExpressTunnel = undefined;
      this._mirrorPassOriginalSlashes = undefined;
      this._mirrorPassQueryString = undefined;
      this._mirrorProxyPass = undefined;
      this._mirrorRole = undefined;
      this._mirrorSaveOssMeta = undefined;
      this._mirrorSni = undefined;
      this._mirrorSwitchAllErrors = undefined;
      this._mirrorTunnelId = undefined;
      this._mirrorUrl = undefined;
      this._mirrorUrlProbe = undefined;
      this._mirrorUrlSlave = undefined;
      this._mirrorUserLastModified = undefined;
      this._mirrorUsingRole = undefined;
      this._passQueryString = undefined;
      this._protocol = undefined;
      this._redirectType = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
      this._transparentMirrorResponseCodes = undefined;
      this._mirrorAuth.internalValue = undefined;
      this._mirrorHeaders.internalValue = undefined;
      this._mirrorMultiAlternates.internalValue = undefined;
      this._mirrorReturnHeaders.internalValue = undefined;
      this._mirrorTaggings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableReplacePrefix = value.enableReplacePrefix;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._mirrorAllowGetImageInfo = value.mirrorAllowGetImageInfo;
      this._mirrorAllowHeadObject = value.mirrorAllowHeadObject;
      this._mirrorAllowVideoSnapshot = value.mirrorAllowVideoSnapshot;
      this._mirrorAsyncStatus = value.mirrorAsyncStatus;
      this._mirrorCheckMd5 = value.mirrorCheckMd5;
      this._mirrorDstRegion = value.mirrorDstRegion;
      this._mirrorDstSlaveVpcId = value.mirrorDstSlaveVpcId;
      this._mirrorDstVpcId = value.mirrorDstVpcId;
      this._mirrorFollowRedirect = value.mirrorFollowRedirect;
      this._mirrorIsExpressTunnel = value.mirrorIsExpressTunnel;
      this._mirrorPassOriginalSlashes = value.mirrorPassOriginalSlashes;
      this._mirrorPassQueryString = value.mirrorPassQueryString;
      this._mirrorProxyPass = value.mirrorProxyPass;
      this._mirrorRole = value.mirrorRole;
      this._mirrorSaveOssMeta = value.mirrorSaveOssMeta;
      this._mirrorSni = value.mirrorSni;
      this._mirrorSwitchAllErrors = value.mirrorSwitchAllErrors;
      this._mirrorTunnelId = value.mirrorTunnelId;
      this._mirrorUrl = value.mirrorUrl;
      this._mirrorUrlProbe = value.mirrorUrlProbe;
      this._mirrorUrlSlave = value.mirrorUrlSlave;
      this._mirrorUserLastModified = value.mirrorUserLastModified;
      this._mirrorUsingRole = value.mirrorUsingRole;
      this._passQueryString = value.passQueryString;
      this._protocol = value.protocol;
      this._redirectType = value.redirectType;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
      this._transparentMirrorResponseCodes = value.transparentMirrorResponseCodes;
      this._mirrorAuth.internalValue = value.mirrorAuth;
      this._mirrorHeaders.internalValue = value.mirrorHeaders;
      this._mirrorMultiAlternates.internalValue = value.mirrorMultiAlternates;
      this._mirrorReturnHeaders.internalValue = value.mirrorReturnHeaders;
      this._mirrorTaggings.internalValue = value.mirrorTaggings;
    }
  }

  // enable_replace_prefix - computed: false, optional: true, required: false
  private _enableReplacePrefix?: boolean | cdktf.IResolvable; 
  public get enableReplacePrefix() {
    return this.getBooleanAttribute('enable_replace_prefix');
  }
  public set enableReplacePrefix(value: boolean | cdktf.IResolvable) {
    this._enableReplacePrefix = value;
  }
  public resetEnableReplacePrefix() {
    this._enableReplacePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplacePrefixInput() {
    return this._enableReplacePrefix;
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

  // mirror_allow_get_image_info - computed: false, optional: true, required: false
  private _mirrorAllowGetImageInfo?: boolean | cdktf.IResolvable; 
  public get mirrorAllowGetImageInfo() {
    return this.getBooleanAttribute('mirror_allow_get_image_info');
  }
  public set mirrorAllowGetImageInfo(value: boolean | cdktf.IResolvable) {
    this._mirrorAllowGetImageInfo = value;
  }
  public resetMirrorAllowGetImageInfo() {
    this._mirrorAllowGetImageInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAllowGetImageInfoInput() {
    return this._mirrorAllowGetImageInfo;
  }

  // mirror_allow_head_object - computed: false, optional: true, required: false
  private _mirrorAllowHeadObject?: boolean | cdktf.IResolvable; 
  public get mirrorAllowHeadObject() {
    return this.getBooleanAttribute('mirror_allow_head_object');
  }
  public set mirrorAllowHeadObject(value: boolean | cdktf.IResolvable) {
    this._mirrorAllowHeadObject = value;
  }
  public resetMirrorAllowHeadObject() {
    this._mirrorAllowHeadObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAllowHeadObjectInput() {
    return this._mirrorAllowHeadObject;
  }

  // mirror_allow_video_snapshot - computed: false, optional: true, required: false
  private _mirrorAllowVideoSnapshot?: boolean | cdktf.IResolvable; 
  public get mirrorAllowVideoSnapshot() {
    return this.getBooleanAttribute('mirror_allow_video_snapshot');
  }
  public set mirrorAllowVideoSnapshot(value: boolean | cdktf.IResolvable) {
    this._mirrorAllowVideoSnapshot = value;
  }
  public resetMirrorAllowVideoSnapshot() {
    this._mirrorAllowVideoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAllowVideoSnapshotInput() {
    return this._mirrorAllowVideoSnapshot;
  }

  // mirror_async_status - computed: false, optional: true, required: false
  private _mirrorAsyncStatus?: number; 
  public get mirrorAsyncStatus() {
    return this.getNumberAttribute('mirror_async_status');
  }
  public set mirrorAsyncStatus(value: number) {
    this._mirrorAsyncStatus = value;
  }
  public resetMirrorAsyncStatus() {
    this._mirrorAsyncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAsyncStatusInput() {
    return this._mirrorAsyncStatus;
  }

  // mirror_check_md5 - computed: false, optional: true, required: false
  private _mirrorCheckMd5?: boolean | cdktf.IResolvable; 
  public get mirrorCheckMd5() {
    return this.getBooleanAttribute('mirror_check_md5');
  }
  public set mirrorCheckMd5(value: boolean | cdktf.IResolvable) {
    this._mirrorCheckMd5 = value;
  }
  public resetMirrorCheckMd5() {
    this._mirrorCheckMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorCheckMd5Input() {
    return this._mirrorCheckMd5;
  }

  // mirror_dst_region - computed: false, optional: true, required: false
  private _mirrorDstRegion?: string; 
  public get mirrorDstRegion() {
    return this.getStringAttribute('mirror_dst_region');
  }
  public set mirrorDstRegion(value: string) {
    this._mirrorDstRegion = value;
  }
  public resetMirrorDstRegion() {
    this._mirrorDstRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorDstRegionInput() {
    return this._mirrorDstRegion;
  }

  // mirror_dst_slave_vpc_id - computed: false, optional: true, required: false
  private _mirrorDstSlaveVpcId?: string; 
  public get mirrorDstSlaveVpcId() {
    return this.getStringAttribute('mirror_dst_slave_vpc_id');
  }
  public set mirrorDstSlaveVpcId(value: string) {
    this._mirrorDstSlaveVpcId = value;
  }
  public resetMirrorDstSlaveVpcId() {
    this._mirrorDstSlaveVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorDstSlaveVpcIdInput() {
    return this._mirrorDstSlaveVpcId;
  }

  // mirror_dst_vpc_id - computed: false, optional: true, required: false
  private _mirrorDstVpcId?: string; 
  public get mirrorDstVpcId() {
    return this.getStringAttribute('mirror_dst_vpc_id');
  }
  public set mirrorDstVpcId(value: string) {
    this._mirrorDstVpcId = value;
  }
  public resetMirrorDstVpcId() {
    this._mirrorDstVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorDstVpcIdInput() {
    return this._mirrorDstVpcId;
  }

  // mirror_follow_redirect - computed: false, optional: true, required: false
  private _mirrorFollowRedirect?: boolean | cdktf.IResolvable; 
  public get mirrorFollowRedirect() {
    return this.getBooleanAttribute('mirror_follow_redirect');
  }
  public set mirrorFollowRedirect(value: boolean | cdktf.IResolvable) {
    this._mirrorFollowRedirect = value;
  }
  public resetMirrorFollowRedirect() {
    this._mirrorFollowRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorFollowRedirectInput() {
    return this._mirrorFollowRedirect;
  }

  // mirror_is_express_tunnel - computed: false, optional: true, required: false
  private _mirrorIsExpressTunnel?: boolean | cdktf.IResolvable; 
  public get mirrorIsExpressTunnel() {
    return this.getBooleanAttribute('mirror_is_express_tunnel');
  }
  public set mirrorIsExpressTunnel(value: boolean | cdktf.IResolvable) {
    this._mirrorIsExpressTunnel = value;
  }
  public resetMirrorIsExpressTunnel() {
    this._mirrorIsExpressTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIsExpressTunnelInput() {
    return this._mirrorIsExpressTunnel;
  }

  // mirror_pass_original_slashes - computed: false, optional: true, required: false
  private _mirrorPassOriginalSlashes?: boolean | cdktf.IResolvable; 
  public get mirrorPassOriginalSlashes() {
    return this.getBooleanAttribute('mirror_pass_original_slashes');
  }
  public set mirrorPassOriginalSlashes(value: boolean | cdktf.IResolvable) {
    this._mirrorPassOriginalSlashes = value;
  }
  public resetMirrorPassOriginalSlashes() {
    this._mirrorPassOriginalSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPassOriginalSlashesInput() {
    return this._mirrorPassOriginalSlashes;
  }

  // mirror_pass_query_string - computed: false, optional: true, required: false
  private _mirrorPassQueryString?: boolean | cdktf.IResolvable; 
  public get mirrorPassQueryString() {
    return this.getBooleanAttribute('mirror_pass_query_string');
  }
  public set mirrorPassQueryString(value: boolean | cdktf.IResolvable) {
    this._mirrorPassQueryString = value;
  }
  public resetMirrorPassQueryString() {
    this._mirrorPassQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPassQueryStringInput() {
    return this._mirrorPassQueryString;
  }

  // mirror_proxy_pass - computed: false, optional: true, required: false
  private _mirrorProxyPass?: boolean | cdktf.IResolvable; 
  public get mirrorProxyPass() {
    return this.getBooleanAttribute('mirror_proxy_pass');
  }
  public set mirrorProxyPass(value: boolean | cdktf.IResolvable) {
    this._mirrorProxyPass = value;
  }
  public resetMirrorProxyPass() {
    this._mirrorProxyPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorProxyPassInput() {
    return this._mirrorProxyPass;
  }

  // mirror_role - computed: false, optional: true, required: false
  private _mirrorRole?: string; 
  public get mirrorRole() {
    return this.getStringAttribute('mirror_role');
  }
  public set mirrorRole(value: string) {
    this._mirrorRole = value;
  }
  public resetMirrorRole() {
    this._mirrorRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorRoleInput() {
    return this._mirrorRole;
  }

  // mirror_save_oss_meta - computed: false, optional: true, required: false
  private _mirrorSaveOssMeta?: boolean | cdktf.IResolvable; 
  public get mirrorSaveOssMeta() {
    return this.getBooleanAttribute('mirror_save_oss_meta');
  }
  public set mirrorSaveOssMeta(value: boolean | cdktf.IResolvable) {
    this._mirrorSaveOssMeta = value;
  }
  public resetMirrorSaveOssMeta() {
    this._mirrorSaveOssMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSaveOssMetaInput() {
    return this._mirrorSaveOssMeta;
  }

  // mirror_sni - computed: false, optional: true, required: false
  private _mirrorSni?: boolean | cdktf.IResolvable; 
  public get mirrorSni() {
    return this.getBooleanAttribute('mirror_sni');
  }
  public set mirrorSni(value: boolean | cdktf.IResolvable) {
    this._mirrorSni = value;
  }
  public resetMirrorSni() {
    this._mirrorSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSniInput() {
    return this._mirrorSni;
  }

  // mirror_switch_all_errors - computed: false, optional: true, required: false
  private _mirrorSwitchAllErrors?: boolean | cdktf.IResolvable; 
  public get mirrorSwitchAllErrors() {
    return this.getBooleanAttribute('mirror_switch_all_errors');
  }
  public set mirrorSwitchAllErrors(value: boolean | cdktf.IResolvable) {
    this._mirrorSwitchAllErrors = value;
  }
  public resetMirrorSwitchAllErrors() {
    this._mirrorSwitchAllErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSwitchAllErrorsInput() {
    return this._mirrorSwitchAllErrors;
  }

  // mirror_tunnel_id - computed: false, optional: true, required: false
  private _mirrorTunnelId?: string; 
  public get mirrorTunnelId() {
    return this.getStringAttribute('mirror_tunnel_id');
  }
  public set mirrorTunnelId(value: string) {
    this._mirrorTunnelId = value;
  }
  public resetMirrorTunnelId() {
    this._mirrorTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTunnelIdInput() {
    return this._mirrorTunnelId;
  }

  // mirror_url - computed: false, optional: true, required: false
  private _mirrorUrl?: string; 
  public get mirrorUrl() {
    return this.getStringAttribute('mirror_url');
  }
  public set mirrorUrl(value: string) {
    this._mirrorUrl = value;
  }
  public resetMirrorUrl() {
    this._mirrorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorUrlInput() {
    return this._mirrorUrl;
  }

  // mirror_url_probe - computed: false, optional: true, required: false
  private _mirrorUrlProbe?: string; 
  public get mirrorUrlProbe() {
    return this.getStringAttribute('mirror_url_probe');
  }
  public set mirrorUrlProbe(value: string) {
    this._mirrorUrlProbe = value;
  }
  public resetMirrorUrlProbe() {
    this._mirrorUrlProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorUrlProbeInput() {
    return this._mirrorUrlProbe;
  }

  // mirror_url_slave - computed: false, optional: true, required: false
  private _mirrorUrlSlave?: string; 
  public get mirrorUrlSlave() {
    return this.getStringAttribute('mirror_url_slave');
  }
  public set mirrorUrlSlave(value: string) {
    this._mirrorUrlSlave = value;
  }
  public resetMirrorUrlSlave() {
    this._mirrorUrlSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorUrlSlaveInput() {
    return this._mirrorUrlSlave;
  }

  // mirror_user_last_modified - computed: false, optional: true, required: false
  private _mirrorUserLastModified?: boolean | cdktf.IResolvable; 
  public get mirrorUserLastModified() {
    return this.getBooleanAttribute('mirror_user_last_modified');
  }
  public set mirrorUserLastModified(value: boolean | cdktf.IResolvable) {
    this._mirrorUserLastModified = value;
  }
  public resetMirrorUserLastModified() {
    this._mirrorUserLastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorUserLastModifiedInput() {
    return this._mirrorUserLastModified;
  }

  // mirror_using_role - computed: false, optional: true, required: false
  private _mirrorUsingRole?: boolean | cdktf.IResolvable; 
  public get mirrorUsingRole() {
    return this.getBooleanAttribute('mirror_using_role');
  }
  public set mirrorUsingRole(value: boolean | cdktf.IResolvable) {
    this._mirrorUsingRole = value;
  }
  public resetMirrorUsingRole() {
    this._mirrorUsingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorUsingRoleInput() {
    return this._mirrorUsingRole;
  }

  // pass_query_string - computed: false, optional: true, required: false
  private _passQueryString?: boolean | cdktf.IResolvable; 
  public get passQueryString() {
    return this.getBooleanAttribute('pass_query_string');
  }
  public set passQueryString(value: boolean | cdktf.IResolvable) {
    this._passQueryString = value;
  }
  public resetPassQueryString() {
    this._passQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passQueryStringInput() {
    return this._passQueryString;
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

  // redirect_type - computed: false, optional: true, required: false
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  public resetRedirectType() {
    this._redirectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
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

  // transparent_mirror_response_codes - computed: false, optional: true, required: false
  private _transparentMirrorResponseCodes?: string; 
  public get transparentMirrorResponseCodes() {
    return this.getStringAttribute('transparent_mirror_response_codes');
  }
  public set transparentMirrorResponseCodes(value: string) {
    this._transparentMirrorResponseCodes = value;
  }
  public resetTransparentMirrorResponseCodes() {
    this._transparentMirrorResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentMirrorResponseCodesInput() {
    return this._transparentMirrorResponseCodes;
  }

  // mirror_auth - computed: false, optional: true, required: false
  private _mirrorAuth = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuthOutputReference(this, "mirror_auth");
  public get mirrorAuth() {
    return this._mirrorAuth;
  }
  public putMirrorAuth(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorAuth) {
    this._mirrorAuth.internalValue = value;
  }
  public resetMirrorAuth() {
    this._mirrorAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAuthInput() {
    return this._mirrorAuth.internalValue;
  }

  // mirror_headers - computed: false, optional: true, required: false
  private _mirrorHeaders = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeadersOutputReference(this, "mirror_headers");
  public get mirrorHeaders() {
    return this._mirrorHeaders;
  }
  public putMirrorHeaders(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorHeaders) {
    this._mirrorHeaders.internalValue = value;
  }
  public resetMirrorHeaders() {
    this._mirrorHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorHeadersInput() {
    return this._mirrorHeaders.internalValue;
  }

  // mirror_multi_alternates - computed: false, optional: true, required: false
  private _mirrorMultiAlternates = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternatesOutputReference(this, "mirror_multi_alternates");
  public get mirrorMultiAlternates() {
    return this._mirrorMultiAlternates;
  }
  public putMirrorMultiAlternates(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorMultiAlternates) {
    this._mirrorMultiAlternates.internalValue = value;
  }
  public resetMirrorMultiAlternates() {
    this._mirrorMultiAlternates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMultiAlternatesInput() {
    return this._mirrorMultiAlternates.internalValue;
  }

  // mirror_return_headers - computed: false, optional: true, required: false
  private _mirrorReturnHeaders = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeadersOutputReference(this, "mirror_return_headers");
  public get mirrorReturnHeaders() {
    return this._mirrorReturnHeaders;
  }
  public putMirrorReturnHeaders(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorReturnHeaders) {
    this._mirrorReturnHeaders.internalValue = value;
  }
  public resetMirrorReturnHeaders() {
    this._mirrorReturnHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorReturnHeadersInput() {
    return this._mirrorReturnHeaders.internalValue;
  }

  // mirror_taggings - computed: false, optional: true, required: false
  private _mirrorTaggings = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggingsOutputReference(this, "mirror_taggings");
  public get mirrorTaggings() {
    return this._mirrorTaggings;
  }
  public putMirrorTaggings(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirectMirrorTaggings) {
    this._mirrorTaggings.internalValue = value;
  }
  public resetMirrorTaggings() {
    this._mirrorTaggings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTaggingsInput() {
    return this._mirrorTaggings.internalValue;
  }
}
export interface OssBucketWebsiteRoutingRulesRoutingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#rule_number OssBucketWebsiteA#rule_number}
  */
  readonly ruleNumber?: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#condition OssBucketWebsiteA#condition}
  */
  readonly condition?: OssBucketWebsiteRoutingRulesRoutingRuleCondition;
  /**
  * lua_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#lua_config OssBucketWebsiteA#lua_config}
  */
  readonly luaConfig?: OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#redirect OssBucketWebsiteA#redirect}
  */
  readonly redirect?: OssBucketWebsiteRoutingRulesRoutingRuleRedirect;
}

export function ossBucketWebsiteRoutingRulesRoutingRuleToTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
    condition: ossBucketWebsiteRoutingRulesRoutingRuleConditionToTerraform(struct!.condition),
    lua_config: ossBucketWebsiteRoutingRulesRoutingRuleLuaConfigToTerraform(struct!.luaConfig),
    redirect: ossBucketWebsiteRoutingRulesRoutingRuleRedirectToTerraform(struct!.redirect),
  }
}


export function ossBucketWebsiteRoutingRulesRoutingRuleToHclTerraform(struct?: OssBucketWebsiteRoutingRulesRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_number: {
      value: cdktf.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleConditionList",
    },
    lua_config: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleLuaConfigToHclTerraform(struct!.luaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleLuaConfigList",
    },
    redirect: {
      value: ossBucketWebsiteRoutingRulesRoutingRuleRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesRoutingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketWebsiteRoutingRulesRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._luaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaConfig = this._luaConfig?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRulesRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleNumber = undefined;
      this._condition.internalValue = undefined;
      this._luaConfig.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleNumber = value.ruleNumber;
      this._condition.internalValue = value.condition;
      this._luaConfig.internalValue = value.luaConfig;
      this._redirect.internalValue = value.redirect;
    }
  }

  // rule_number - computed: false, optional: true, required: false
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  public resetRuleNumber() {
    this._ruleNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new OssBucketWebsiteRoutingRulesRoutingRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: OssBucketWebsiteRoutingRulesRoutingRuleCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // lua_config - computed: false, optional: true, required: false
  private _luaConfig = new OssBucketWebsiteRoutingRulesRoutingRuleLuaConfigOutputReference(this, "lua_config");
  public get luaConfig() {
    return this._luaConfig;
  }
  public putLuaConfig(value: OssBucketWebsiteRoutingRulesRoutingRuleLuaConfig) {
    this._luaConfig.internalValue = value;
  }
  public resetLuaConfig() {
    this._luaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luaConfigInput() {
    return this._luaConfig.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new OssBucketWebsiteRoutingRulesRoutingRuleRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: OssBucketWebsiteRoutingRulesRoutingRuleRedirect) {
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

export class OssBucketWebsiteRoutingRulesRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : OssBucketWebsiteRoutingRulesRoutingRule[] | cdktf.IResolvable

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
  public get(index: number): OssBucketWebsiteRoutingRulesRoutingRuleOutputReference {
    return new OssBucketWebsiteRoutingRulesRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketWebsiteRoutingRules {
  /**
  * routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#routing_rule OssBucketWebsiteA#routing_rule}
  */
  readonly routingRule?: OssBucketWebsiteRoutingRulesRoutingRule[] | cdktf.IResolvable;
}

export function ossBucketWebsiteRoutingRulesToTerraform(struct?: OssBucketWebsiteRoutingRulesOutputReference | OssBucketWebsiteRoutingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_rule: cdktf.listMapper(ossBucketWebsiteRoutingRulesRoutingRuleToTerraform, true)(struct!.routingRule),
  }
}


export function ossBucketWebsiteRoutingRulesToHclTerraform(struct?: OssBucketWebsiteRoutingRulesOutputReference | OssBucketWebsiteRoutingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_rule: {
      value: cdktf.listMapperHcl(ossBucketWebsiteRoutingRulesRoutingRuleToHclTerraform, true)(struct!.routingRule),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketWebsiteRoutingRulesRoutingRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteRoutingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsiteRoutingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRule = this._routingRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteRoutingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routingRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routingRule.internalValue = value.routingRule;
    }
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule = new OssBucketWebsiteRoutingRulesRoutingRuleList(this, "routing_rule", false);
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: OssBucketWebsiteRoutingRulesRoutingRule[] | cdktf.IResolvable) {
    this._routingRule.internalValue = value;
  }
  public resetRoutingRule() {
    this._routingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }
}
export interface OssBucketWebsiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#create OssBucketWebsiteA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#delete OssBucketWebsiteA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#update OssBucketWebsiteA#update}
  */
  readonly update?: string;
}

export function ossBucketWebsiteTimeoutsToTerraform(struct?: OssBucketWebsiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ossBucketWebsiteTimeoutsToHclTerraform(struct?: OssBucketWebsiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OssBucketWebsiteTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsiteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website alicloud_oss_bucket_website}
*/
export class OssBucketWebsiteA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oss_bucket_website";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucketWebsiteA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucketWebsiteA to import
  * @param importFromId The id of the existing OssBucketWebsiteA that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucketWebsiteA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oss_bucket_website", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/oss_bucket_website alicloud_oss_bucket_website} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketWebsiteAConfig
  */
  public constructor(scope: Construct, id: string, config: OssBucketWebsiteAConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oss_bucket_website',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._id = config.id;
    this._errorDocument.internalValue = config.errorDocument;
    this._indexDocument.internalValue = config.indexDocument;
    this._routingRules.internalValue = config.routingRules;
    this._timeouts.internalValue = config.timeouts;
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

  // error_document - computed: false, optional: true, required: false
  private _errorDocument = new OssBucketWebsiteErrorDocumentOutputReference(this, "error_document");
  public get errorDocument() {
    return this._errorDocument;
  }
  public putErrorDocument(value: OssBucketWebsiteErrorDocument) {
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
  private _indexDocument = new OssBucketWebsiteIndexDocumentOutputReference(this, "index_document");
  public get indexDocument() {
    return this._indexDocument;
  }
  public putIndexDocument(value: OssBucketWebsiteIndexDocument) {
    this._indexDocument.internalValue = value;
  }
  public resetIndexDocument() {
    this._indexDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument.internalValue;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules = new OssBucketWebsiteRoutingRulesOutputReference(this, "routing_rules");
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: OssBucketWebsiteRoutingRules) {
    this._routingRules.internalValue = value;
  }
  public resetRoutingRules() {
    this._routingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OssBucketWebsiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OssBucketWebsiteTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      error_document: ossBucketWebsiteErrorDocumentToTerraform(this._errorDocument.internalValue),
      index_document: ossBucketWebsiteIndexDocumentToTerraform(this._indexDocument.internalValue),
      routing_rules: ossBucketWebsiteRoutingRulesToTerraform(this._routingRules.internalValue),
      timeouts: ossBucketWebsiteTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_document: {
        value: ossBucketWebsiteErrorDocumentToHclTerraform(this._errorDocument.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketWebsiteErrorDocumentList",
      },
      index_document: {
        value: ossBucketWebsiteIndexDocumentToHclTerraform(this._indexDocument.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketWebsiteIndexDocumentList",
      },
      routing_rules: {
        value: ossBucketWebsiteRoutingRulesToHclTerraform(this._routingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketWebsiteRoutingRulesList",
      },
      timeouts: {
        value: ossBucketWebsiteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OssBucketWebsiteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
