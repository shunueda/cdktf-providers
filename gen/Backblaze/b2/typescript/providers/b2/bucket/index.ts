// https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined information to be stored with the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#bucket_info Bucket#bucket_info}
  */
  readonly bucketInfo?: { [key: string]: string };
  /**
  * The name of the bucket. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#bucket_name Bucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The bucket type. Either 'allPublic', meaning that files in this bucket can be downloaded by anybody, or 'allPrivate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#bucket_type Bucket#bucket_type}
  */
  readonly bucketType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#id Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cors_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#cors_rules Bucket#cors_rules}
  */
  readonly corsRules?: BucketCorsRules[] | cdktf.IResolvable;
  /**
  * default_server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#default_server_side_encryption Bucket#default_server_side_encryption}
  */
  readonly defaultServerSideEncryption?: BucketDefaultServerSideEncryption;
  /**
  * file_lock_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#file_lock_configuration Bucket#file_lock_configuration}
  */
  readonly fileLockConfiguration?: BucketFileLockConfiguration[] | cdktf.IResolvable;
  /**
  * lifecycle_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#lifecycle_rules Bucket#lifecycle_rules}
  */
  readonly lifecycleRules?: BucketLifecycleRules[] | cdktf.IResolvable;
}
export interface BucketCorsRules {
  /**
  * If present, this is a list of headers that are allowed in a pre-flight OPTIONS's request's Access-Control-Request-Headers header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#allowed_headers Bucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * A list specifying which operations the rule allows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#allowed_operations Bucket#allowed_operations}
  */
  readonly allowedOperations: string[];
  /**
  * A non-empty list specifying which origins the rule covers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#allowed_origins Bucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * A name for humans to recognize the rule in a user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#cors_rule_name Bucket#cors_rule_name}
  */
  readonly corsRuleName: string;
  /**
  * If present, this is a list of headers that may be exposed to an application inside the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#expose_headers Bucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * This specifies the maximum number of seconds that a browser may cache the response to a preflight request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#max_age_seconds Bucket#max_age_seconds}
  */
  readonly maxAgeSeconds: number;
}

export function bucketCorsRulesToTerraform(struct?: BucketCorsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOperations),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    cors_rule_name: cdktf.stringToTerraform(struct!.corsRuleName),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function bucketCorsRulesToHclTerraform(struct?: BucketCorsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOperations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cors_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.corsRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketCorsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketCorsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOperations = this._allowedOperations;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._corsRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRuleName = this._corsRuleName;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketCorsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedOperations = undefined;
      this._allowedOrigins = undefined;
      this._corsRuleName = undefined;
      this._exposeHeaders = undefined;
      this._maxAgeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedOperations = value.allowedOperations;
      this._allowedOrigins = value.allowedOrigins;
      this._corsRuleName = value.corsRuleName;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_operations - computed: false, optional: false, required: true
  private _allowedOperations?: string[]; 
  public get allowedOperations() {
    return this.getListAttribute('allowed_operations');
  }
  public set allowedOperations(value: string[]) {
    this._allowedOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationsInput() {
    return this._allowedOperations;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // cors_rule_name - computed: false, optional: false, required: true
  private _corsRuleName?: string; 
  public get corsRuleName() {
    return this.getStringAttribute('cors_rule_name');
  }
  public set corsRuleName(value: string) {
    this._corsRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleNameInput() {
    return this._corsRuleName;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age_seconds - computed: false, optional: false, required: true
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

export class BucketCorsRulesList extends cdktf.ComplexList {
  public internalValue? : BucketCorsRules[] | cdktf.IResolvable

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
  public get(index: number): BucketCorsRulesOutputReference {
    return new BucketCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BucketDefaultServerSideEncryption {
  /**
  * Server-side encryption algorithm. AES256 is the only one supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#algorithm Bucket#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Server-side encryption mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#mode Bucket#mode}
  */
  readonly mode?: string;
}

export function bucketDefaultServerSideEncryptionToTerraform(struct?: BucketDefaultServerSideEncryptionOutputReference | BucketDefaultServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function bucketDefaultServerSideEncryptionToHclTerraform(struct?: BucketDefaultServerSideEncryptionOutputReference | BucketDefaultServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketDefaultServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketDefaultServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketDefaultServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._mode = value.mode;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface BucketFileLockConfigurationDefaultRetentionPeriod {
  /**
  * Duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#duration Bucket#duration}
  */
  readonly duration: number;
  /**
  * Unit for duration (days|years).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#unit Bucket#unit}
  */
  readonly unit: string;
}

export function bucketFileLockConfigurationDefaultRetentionPeriodToTerraform(struct?: BucketFileLockConfigurationDefaultRetentionPeriodOutputReference | BucketFileLockConfigurationDefaultRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function bucketFileLockConfigurationDefaultRetentionPeriodToHclTerraform(struct?: BucketFileLockConfigurationDefaultRetentionPeriodOutputReference | BucketFileLockConfigurationDefaultRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketFileLockConfigurationDefaultRetentionPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketFileLockConfigurationDefaultRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketFileLockConfigurationDefaultRetentionPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BucketFileLockConfigurationDefaultRetention {
  /**
  * Default retention mode (compliance|governance|none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#mode Bucket#mode}
  */
  readonly mode: string;
  /**
  * period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#period Bucket#period}
  */
  readonly period?: BucketFileLockConfigurationDefaultRetentionPeriod;
}

export function bucketFileLockConfigurationDefaultRetentionToTerraform(struct?: BucketFileLockConfigurationDefaultRetentionOutputReference | BucketFileLockConfigurationDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    period: bucketFileLockConfigurationDefaultRetentionPeriodToTerraform(struct!.period),
  }
}


export function bucketFileLockConfigurationDefaultRetentionToHclTerraform(struct?: BucketFileLockConfigurationDefaultRetentionOutputReference | BucketFileLockConfigurationDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: bucketFileLockConfigurationDefaultRetentionPeriodToHclTerraform(struct!.period),
      isBlock: true,
      type: "list",
      storageClassType: "BucketFileLockConfigurationDefaultRetentionPeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketFileLockConfigurationDefaultRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketFileLockConfigurationDefaultRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._period?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketFileLockConfigurationDefaultRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._period.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._period.internalValue = value.period;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // period - computed: false, optional: true, required: false
  private _period = new BucketFileLockConfigurationDefaultRetentionPeriodOutputReference(this, "period");
  public get period() {
    return this._period;
  }
  public putPeriod(value: BucketFileLockConfigurationDefaultRetentionPeriod) {
    this._period.internalValue = value;
  }
  public resetPeriod() {
    this._period.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period.internalValue;
  }
}
export interface BucketFileLockConfiguration {
  /**
  * If present, the boolean value specifies whether bucket is File Lock-enabled. Defaults to `false`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#is_file_lock_enabled Bucket#is_file_lock_enabled}
  */
  readonly isFileLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#default_retention Bucket#default_retention}
  */
  readonly defaultRetention?: BucketFileLockConfigurationDefaultRetention;
}

export function bucketFileLockConfigurationToTerraform(struct?: BucketFileLockConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_file_lock_enabled: cdktf.booleanToTerraform(struct!.isFileLockEnabled),
    default_retention: bucketFileLockConfigurationDefaultRetentionToTerraform(struct!.defaultRetention),
  }
}


export function bucketFileLockConfigurationToHclTerraform(struct?: BucketFileLockConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_file_lock_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFileLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_retention: {
      value: bucketFileLockConfigurationDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "list",
      storageClassType: "BucketFileLockConfigurationDefaultRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketFileLockConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketFileLockConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFileLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFileLockEnabled = this._isFileLockEnabled;
    }
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketFileLockConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFileLockEnabled = undefined;
      this._defaultRetention.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFileLockEnabled = value.isFileLockEnabled;
      this._defaultRetention.internalValue = value.defaultRetention;
    }
  }

  // is_file_lock_enabled - computed: false, optional: true, required: false
  private _isFileLockEnabled?: boolean | cdktf.IResolvable; 
  public get isFileLockEnabled() {
    return this.getBooleanAttribute('is_file_lock_enabled');
  }
  public set isFileLockEnabled(value: boolean | cdktf.IResolvable) {
    this._isFileLockEnabled = value;
  }
  public resetIsFileLockEnabled() {
    this._isFileLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFileLockEnabledInput() {
    return this._isFileLockEnabled;
  }

  // default_retention - computed: false, optional: true, required: false
  private _defaultRetention = new BucketFileLockConfigurationDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: BucketFileLockConfigurationDefaultRetention) {
    this._defaultRetention.internalValue = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }
}

export class BucketFileLockConfigurationList extends cdktf.ComplexList {
  public internalValue? : BucketFileLockConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BucketFileLockConfigurationOutputReference {
    return new BucketFileLockConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BucketLifecycleRules {
  /**
  * It says how long to keep file versions that are not the current version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#days_from_hiding_to_deleting Bucket#days_from_hiding_to_deleting}
  */
  readonly daysFromHidingToDeleting?: number;
  /**
  * It cancels any unfinished large file versions after a given number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#days_from_starting_to_canceling_unfinished_large_files Bucket#days_from_starting_to_canceling_unfinished_large_files}
  */
  readonly daysFromStartingToCancelingUnfinishedLargeFiles?: number;
  /**
  * It causes files to be hidden automatically after the given number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#days_from_uploading_to_hiding Bucket#days_from_uploading_to_hiding}
  */
  readonly daysFromUploadingToHiding?: number;
  /**
  * It specifies which files in the bucket it applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#file_name_prefix Bucket#file_name_prefix}
  */
  readonly fileNamePrefix: string;
}

export function bucketLifecycleRulesToTerraform(struct?: BucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_from_hiding_to_deleting: cdktf.numberToTerraform(struct!.daysFromHidingToDeleting),
    days_from_starting_to_canceling_unfinished_large_files: cdktf.numberToTerraform(struct!.daysFromStartingToCancelingUnfinishedLargeFiles),
    days_from_uploading_to_hiding: cdktf.numberToTerraform(struct!.daysFromUploadingToHiding),
    file_name_prefix: cdktf.stringToTerraform(struct!.fileNamePrefix),
  }
}


export function bucketLifecycleRulesToHclTerraform(struct?: BucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_from_hiding_to_deleting: {
      value: cdktf.numberToHclTerraform(struct!.daysFromHidingToDeleting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_from_starting_to_canceling_unfinished_large_files: {
      value: cdktf.numberToHclTerraform(struct!.daysFromStartingToCancelingUnfinishedLargeFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_from_uploading_to_hiding: {
      value: cdktf.numberToHclTerraform(struct!.daysFromUploadingToHiding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.fileNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketLifecycleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysFromHidingToDeleting !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysFromHidingToDeleting = this._daysFromHidingToDeleting;
    }
    if (this._daysFromStartingToCancelingUnfinishedLargeFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysFromStartingToCancelingUnfinishedLargeFiles = this._daysFromStartingToCancelingUnfinishedLargeFiles;
    }
    if (this._daysFromUploadingToHiding !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysFromUploadingToHiding = this._daysFromUploadingToHiding;
    }
    if (this._fileNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNamePrefix = this._fileNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketLifecycleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysFromHidingToDeleting = undefined;
      this._daysFromStartingToCancelingUnfinishedLargeFiles = undefined;
      this._daysFromUploadingToHiding = undefined;
      this._fileNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysFromHidingToDeleting = value.daysFromHidingToDeleting;
      this._daysFromStartingToCancelingUnfinishedLargeFiles = value.daysFromStartingToCancelingUnfinishedLargeFiles;
      this._daysFromUploadingToHiding = value.daysFromUploadingToHiding;
      this._fileNamePrefix = value.fileNamePrefix;
    }
  }

  // days_from_hiding_to_deleting - computed: false, optional: true, required: false
  private _daysFromHidingToDeleting?: number; 
  public get daysFromHidingToDeleting() {
    return this.getNumberAttribute('days_from_hiding_to_deleting');
  }
  public set daysFromHidingToDeleting(value: number) {
    this._daysFromHidingToDeleting = value;
  }
  public resetDaysFromHidingToDeleting() {
    this._daysFromHidingToDeleting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysFromHidingToDeletingInput() {
    return this._daysFromHidingToDeleting;
  }

  // days_from_starting_to_canceling_unfinished_large_files - computed: false, optional: true, required: false
  private _daysFromStartingToCancelingUnfinishedLargeFiles?: number; 
  public get daysFromStartingToCancelingUnfinishedLargeFiles() {
    return this.getNumberAttribute('days_from_starting_to_canceling_unfinished_large_files');
  }
  public set daysFromStartingToCancelingUnfinishedLargeFiles(value: number) {
    this._daysFromStartingToCancelingUnfinishedLargeFiles = value;
  }
  public resetDaysFromStartingToCancelingUnfinishedLargeFiles() {
    this._daysFromStartingToCancelingUnfinishedLargeFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysFromStartingToCancelingUnfinishedLargeFilesInput() {
    return this._daysFromStartingToCancelingUnfinishedLargeFiles;
  }

  // days_from_uploading_to_hiding - computed: false, optional: true, required: false
  private _daysFromUploadingToHiding?: number; 
  public get daysFromUploadingToHiding() {
    return this.getNumberAttribute('days_from_uploading_to_hiding');
  }
  public set daysFromUploadingToHiding(value: number) {
    this._daysFromUploadingToHiding = value;
  }
  public resetDaysFromUploadingToHiding() {
    this._daysFromUploadingToHiding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysFromUploadingToHidingInput() {
    return this._daysFromUploadingToHiding;
  }

  // file_name_prefix - computed: false, optional: false, required: true
  private _fileNamePrefix?: string; 
  public get fileNamePrefix() {
    return this.getStringAttribute('file_name_prefix');
  }
  public set fileNamePrefix(value: string) {
    this._fileNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNamePrefixInput() {
    return this._fileNamePrefix;
  }
}

export class BucketLifecycleRulesList extends cdktf.ComplexList {
  public internalValue? : BucketLifecycleRules[] | cdktf.IResolvable

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
  public get(index: number): BucketLifecycleRulesOutputReference {
    return new BucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket b2_bucket}
*/
export class Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bucket to import
  * @param importFromId The id of the existing Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket b2_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BucketConfig
  */
  public constructor(scope: Construct, id: string, config: BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'b2_bucket',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketInfo = config.bucketInfo;
    this._bucketName = config.bucketName;
    this._bucketType = config.bucketType;
    this._id = config.id;
    this._corsRules.internalValue = config.corsRules;
    this._defaultServerSideEncryption.internalValue = config.defaultServerSideEncryption;
    this._fileLockConfiguration.internalValue = config.fileLockConfiguration;
    this._lifecycleRules.internalValue = config.lifecycleRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // bucket_id - computed: true, optional: false, required: false
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }

  // bucket_info - computed: false, optional: true, required: false
  private _bucketInfo?: { [key: string]: string }; 
  public get bucketInfo() {
    return this.getStringMapAttribute('bucket_info');
  }
  public set bucketInfo(value: { [key: string]: string }) {
    this._bucketInfo = value;
  }
  public resetBucketInfo() {
    this._bucketInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInfoInput() {
    return this._bucketInfo;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_type - computed: false, optional: false, required: true
  private _bucketType?: string; 
  public get bucketType() {
    return this.getStringAttribute('bucket_type');
  }
  public set bucketType(value: string) {
    this._bucketType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketTypeInput() {
    return this._bucketType;
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

  // options - computed: true, optional: false, required: false
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // cors_rules - computed: false, optional: true, required: false
  private _corsRules = new BucketCorsRulesList(this, "cors_rules", false);
  public get corsRules() {
    return this._corsRules;
  }
  public putCorsRules(value: BucketCorsRules[] | cdktf.IResolvable) {
    this._corsRules.internalValue = value;
  }
  public resetCorsRules() {
    this._corsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRulesInput() {
    return this._corsRules.internalValue;
  }

  // default_server_side_encryption - computed: false, optional: true, required: false
  private _defaultServerSideEncryption = new BucketDefaultServerSideEncryptionOutputReference(this, "default_server_side_encryption");
  public get defaultServerSideEncryption() {
    return this._defaultServerSideEncryption;
  }
  public putDefaultServerSideEncryption(value: BucketDefaultServerSideEncryption) {
    this._defaultServerSideEncryption.internalValue = value;
  }
  public resetDefaultServerSideEncryption() {
    this._defaultServerSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServerSideEncryptionInput() {
    return this._defaultServerSideEncryption.internalValue;
  }

  // file_lock_configuration - computed: false, optional: true, required: false
  private _fileLockConfiguration = new BucketFileLockConfigurationList(this, "file_lock_configuration", false);
  public get fileLockConfiguration() {
    return this._fileLockConfiguration;
  }
  public putFileLockConfiguration(value: BucketFileLockConfiguration[] | cdktf.IResolvable) {
    this._fileLockConfiguration.internalValue = value;
  }
  public resetFileLockConfiguration() {
    this._fileLockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLockConfigurationInput() {
    return this._fileLockConfiguration.internalValue;
  }

  // lifecycle_rules - computed: false, optional: true, required: false
  private _lifecycleRules = new BucketLifecycleRulesList(this, "lifecycle_rules", false);
  public get lifecycleRules() {
    return this._lifecycleRules;
  }
  public putLifecycleRules(value: BucketLifecycleRules[] | cdktf.IResolvable) {
    this._lifecycleRules.internalValue = value;
  }
  public resetLifecycleRules() {
    this._lifecycleRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRulesInput() {
    return this._lifecycleRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_info: cdktf.hashMapper(cdktf.stringToTerraform)(this._bucketInfo),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_type: cdktf.stringToTerraform(this._bucketType),
      id: cdktf.stringToTerraform(this._id),
      cors_rules: cdktf.listMapper(bucketCorsRulesToTerraform, true)(this._corsRules.internalValue),
      default_server_side_encryption: bucketDefaultServerSideEncryptionToTerraform(this._defaultServerSideEncryption.internalValue),
      file_lock_configuration: cdktf.listMapper(bucketFileLockConfigurationToTerraform, true)(this._fileLockConfiguration.internalValue),
      lifecycle_rules: cdktf.listMapper(bucketLifecycleRulesToTerraform, true)(this._lifecycleRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_info: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bucketInfo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_type: {
        value: cdktf.stringToHclTerraform(this._bucketType),
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
      cors_rules: {
        value: cdktf.listMapperHcl(bucketCorsRulesToHclTerraform, true)(this._corsRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketCorsRulesList",
      },
      default_server_side_encryption: {
        value: bucketDefaultServerSideEncryptionToHclTerraform(this._defaultServerSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketDefaultServerSideEncryptionList",
      },
      file_lock_configuration: {
        value: cdktf.listMapperHcl(bucketFileLockConfigurationToHclTerraform, true)(this._fileLockConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketFileLockConfigurationList",
      },
      lifecycle_rules: {
        value: cdktf.listMapperHcl(bucketLifecycleRulesToHclTerraform, true)(this._lifecycleRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketLifecycleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
