// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable bucket acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#acceleration_enable CosBucket#acceleration_enable}
  */
  readonly accelerationEnable?: boolean | cdktf.IResolvable;
  /**
  * The canned ACL to apply. Valid values: private, public-read, and public-read-write. Defaults to private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#acl CosBucket#acl}
  */
  readonly acl?: string;
  /**
  * ACL XML body for multiple grant info. NOTE: this argument will overwrite `acl`. Check https://intl.cloud.tencent.com/document/product/436/7737 for more detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#acl_body CosBucket#acl_body}
  */
  readonly aclBody?: string;
  /**
  * The name of a bucket to be created. Bucket format should be [custom name]-[appid], for example `mycos-1258798060`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#bucket CosBucket#bucket}
  */
  readonly bucket: string;
  /**
  * CDC cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#cdc_id CosBucket#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Indicates whether to create a bucket of metadata acceleration. For more information, please refer to `https://www.tencentcloud.com/document/product/436/43305`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#chdfs_ofs CosBucket#chdfs_ofs}
  */
  readonly chdfsOfs?: boolean | cdktf.IResolvable;
  /**
  * Enable intelligent tiering. NOTE: When intelligent tiering configuration is enabled, it cannot be turned off or modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#enable_intelligent_tiering CosBucket#enable_intelligent_tiering}
  */
  readonly enableIntelligentTiering?: boolean | cdktf.IResolvable;
  /**
  * The server-side encryption algorithm to use. Valid values are `AES256`, `KMS` and `SM4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#encryption_algorithm CosBucket#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Force cleanup all objects before delete bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#force_clean CosBucket#force_clean}
  */
  readonly forceClean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#id CosBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the limit of days for standard-tier data to low-frequency data in an intelligent tiered storage configuration, with optional days of 30, 60, 90. Default value is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#intelligent_tiering_days CosBucket#intelligent_tiering_days}
  */
  readonly intelligentTieringDays?: number;
  /**
  * Specify the access limit for converting standard layer data into low-frequency layer data in the configuration. The default value is once, which can be used in combination with the number of days to achieve the conversion effect. For example, if the parameter is set to 1 and the number of access days is 30, it means that objects with less than one visit in 30 consecutive days will be reduced from the standard layer to the low frequency layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#intelligent_tiering_request_frequent CosBucket#intelligent_tiering_request_frequent}
  */
  readonly intelligentTieringRequestFrequent?: number;
  /**
  * The KMS Master Key ID. This value is valid only when `encryption_algorithm` is set to KMS. Set kms id to the specified value. If not specified, the default kms id is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#kms_id CosBucket#kms_id}
  */
  readonly kmsId?: string;
  /**
  * Indicate the access log of this bucket to be saved or not. Default is `false`. If set `true`, the access log will be saved with `log_target_bucket`. To enable log, the full access of log service must be granted. [Full Access Role Policy](https://intl.cloud.tencent.com/document/product/436/16920).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#log_enable CosBucket#log_enable}
  */
  readonly logEnable?: boolean | cdktf.IResolvable;
  /**
  * The prefix log name which saves the access log of this bucket per 5 minutes. Eg. `MyLogPrefix/`. The log access file format is `log_target_bucket`/`log_prefix`{YYYY}/{MM}/{DD}/{time}_{random}_{index}.gz. Only valid when `log_enable` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#log_prefix CosBucket#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * The target bucket name which saves the access log of this bucket per 5 minutes. The log access file format is `log_target_bucket`/`log_prefix`{YYYY}/{MM}/{DD}/{time}_{random}_{index}.gz. Only valid when `log_enable` is `true`. User must have full access on this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#log_target_bucket CosBucket#log_target_bucket}
  */
  readonly logTargetBucket?: string;
  /**
  * Indicates whether to create a bucket of multi available zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#multi_az CosBucket#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Request initiator identifier, format: `qcs::cam::uin/<owneruin>:uin/<subuin>`. NOTE: only `versioning_enable` is true can configure this argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#replica_role CosBucket#replica_role}
  */
  readonly replicaRole?: string;
  /**
  * The tags of a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#tags CosBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Enable bucket versioning. NOTE: The `multi_az` feature is true for the current bucket, cannot disable version control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#versioning_enable CosBucket#versioning_enable}
  */
  readonly versioningEnable?: boolean | cdktf.IResolvable;
  /**
  * cors_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#cors_rules CosBucket#cors_rules}
  */
  readonly corsRules?: CosBucketCorsRules[] | cdktf.IResolvable;
  /**
  * lifecycle_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#lifecycle_rules CosBucket#lifecycle_rules}
  */
  readonly lifecycleRules?: CosBucketLifecycleRules[] | cdktf.IResolvable;
  /**
  * origin_domain_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#origin_domain_rules CosBucket#origin_domain_rules}
  */
  readonly originDomainRules?: CosBucketOriginDomainRules[] | cdktf.IResolvable;
  /**
  * origin_pull_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#origin_pull_rules CosBucket#origin_pull_rules}
  */
  readonly originPullRules?: CosBucketOriginPullRules[] | cdktf.IResolvable;
  /**
  * replica_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#replica_rules CosBucket#replica_rules}
  */
  readonly replicaRules?: CosBucketReplicaRules[] | cdktf.IResolvable;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#website CosBucket#website}
  */
  readonly website?: CosBucketWebsite;
}
export interface CosBucketCorsRules {
  /**
  * Specifies which headers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#allowed_headers CosBucket#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Specifies which methods are allowed. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#allowed_methods CosBucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Specifies which origins are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#allowed_origins CosBucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Specifies expose header in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#expose_headers CosBucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies time in seconds that browser can cache the response for a preflight request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#max_age_seconds CosBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function cosBucketCorsRulesToTerraform(struct?: CosBucketCorsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function cosBucketCorsRulesToHclTerraform(struct?: CosBucketCorsRules | cdktf.IResolvable): any {
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
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
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

export class CosBucketCorsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketCorsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
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

  public set internalValue(value: CosBucketCorsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
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
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
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

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

export class CosBucketCorsRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketCorsRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketCorsRulesOutputReference {
    return new CosBucketCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketLifecycleRulesAbortIncompleteMultipartUpload {
  /**
  * Specifies the number of days after the multipart upload starts that the upload must be completed. The maximum value is 3650.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#days_after_initiation CosBucket#days_after_initiation}
  */
  readonly daysAfterInitiation: number;
}

export function cosBucketLifecycleRulesAbortIncompleteMultipartUploadToTerraform(struct?: CosBucketLifecycleRulesAbortIncompleteMultipartUploadOutputReference | CosBucketLifecycleRulesAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function cosBucketLifecycleRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: CosBucketLifecycleRulesAbortIncompleteMultipartUploadOutputReference | CosBucketLifecycleRulesAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktf.numberToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketLifecycleRulesAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRulesAbortIncompleteMultipartUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysAfterInitiation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: false, required: true
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface CosBucketLifecycleRulesExpiration {
  /**
  * Specifies the date after which you want the corresponding action to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#date CosBucket#date}
  */
  readonly date?: string;
  /**
  * Specifies the number of days after object creation when the specific rule action takes effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#days CosBucket#days}
  */
  readonly days?: number;
  /**
  * Indicates whether the delete marker of an expired object will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#delete_marker CosBucket#delete_marker}
  */
  readonly deleteMarker?: boolean | cdktf.IResolvable;
}

export function cosBucketLifecycleRulesExpirationToTerraform(struct?: CosBucketLifecycleRulesExpirationOutputReference | CosBucketLifecycleRulesExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    delete_marker: cdktf.booleanToTerraform(struct!.deleteMarker),
  }
}


export function cosBucketLifecycleRulesExpirationToHclTerraform(struct?: CosBucketLifecycleRulesExpirationOutputReference | CosBucketLifecycleRulesExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_marker: {
      value: cdktf.booleanToHclTerraform(struct!.deleteMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketLifecycleRulesExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._deleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMarker = this._deleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRulesExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._days = undefined;
      this._deleteMarker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._date = value.date;
      this._days = value.days;
      this._deleteMarker = value.deleteMarker;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // delete_marker - computed: false, optional: true, required: false
  private _deleteMarker?: boolean | cdktf.IResolvable; 
  public get deleteMarker() {
    return this.getBooleanAttribute('delete_marker');
  }
  public set deleteMarker(value: boolean | cdktf.IResolvable) {
    this._deleteMarker = value;
  }
  public resetDeleteMarker() {
    this._deleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMarkerInput() {
    return this._deleteMarker;
  }
}
export interface CosBucketLifecycleRulesNonCurrentExpiration {
  /**
  * Number of days after non current object creation when the specific rule action takes effect. The maximum value is 3650.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#non_current_days CosBucket#non_current_days}
  */
  readonly nonCurrentDays?: number;
}

export function cosBucketLifecycleRulesNonCurrentExpirationToTerraform(struct?: CosBucketLifecycleRulesNonCurrentExpirationOutputReference | CosBucketLifecycleRulesNonCurrentExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_current_days: cdktf.numberToTerraform(struct!.nonCurrentDays),
  }
}


export function cosBucketLifecycleRulesNonCurrentExpirationToHclTerraform(struct?: CosBucketLifecycleRulesNonCurrentExpirationOutputReference | CosBucketLifecycleRulesNonCurrentExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_current_days: {
      value: cdktf.numberToHclTerraform(struct!.nonCurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesNonCurrentExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketLifecycleRulesNonCurrentExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonCurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCurrentDays = this._nonCurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRulesNonCurrentExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nonCurrentDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nonCurrentDays = value.nonCurrentDays;
    }
  }

  // non_current_days - computed: false, optional: true, required: false
  private _nonCurrentDays?: number; 
  public get nonCurrentDays() {
    return this.getNumberAttribute('non_current_days');
  }
  public set nonCurrentDays(value: number) {
    this._nonCurrentDays = value;
  }
  public resetNonCurrentDays() {
    this._nonCurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCurrentDaysInput() {
    return this._nonCurrentDays;
  }
}
export interface CosBucketLifecycleRulesNonCurrentTransition {
  /**
  * Number of days after non current object creation when the specific rule action takes effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#non_current_days CosBucket#non_current_days}
  */
  readonly nonCurrentDays?: number;
  /**
  * Specifies the storage class to which you want the non current object to transition. Available values include `STANDARD_IA`, `MAZ_STANDARD_IA`, `INTELLIGENT_TIERING`, `MAZ_INTELLIGENT_TIERING`, `ARCHIVE`, `DEEP_ARCHIVE`. For more information, please refer to: https://cloud.tencent.com/document/product/436/33417.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#storage_class CosBucket#storage_class}
  */
  readonly storageClass: string;
}

export function cosBucketLifecycleRulesNonCurrentTransitionToTerraform(struct?: CosBucketLifecycleRulesNonCurrentTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_current_days: cdktf.numberToTerraform(struct!.nonCurrentDays),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function cosBucketLifecycleRulesNonCurrentTransitionToHclTerraform(struct?: CosBucketLifecycleRulesNonCurrentTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_current_days: {
      value: cdktf.numberToHclTerraform(struct!.nonCurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesNonCurrentTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketLifecycleRulesNonCurrentTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonCurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCurrentDays = this._nonCurrentDays;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRulesNonCurrentTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonCurrentDays = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonCurrentDays = value.nonCurrentDays;
      this._storageClass = value.storageClass;
    }
  }

  // non_current_days - computed: false, optional: true, required: false
  private _nonCurrentDays?: number; 
  public get nonCurrentDays() {
    return this.getNumberAttribute('non_current_days');
  }
  public set nonCurrentDays(value: number) {
    this._nonCurrentDays = value;
  }
  public resetNonCurrentDays() {
    this._nonCurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCurrentDaysInput() {
    return this._nonCurrentDays;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class CosBucketLifecycleRulesNonCurrentTransitionList extends cdktf.ComplexList {
  public internalValue? : CosBucketLifecycleRulesNonCurrentTransition[] | cdktf.IResolvable

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
  public get(index: number): CosBucketLifecycleRulesNonCurrentTransitionOutputReference {
    return new CosBucketLifecycleRulesNonCurrentTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketLifecycleRulesTransition {
  /**
  * Specifies the date after which you want the corresponding action to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#date CosBucket#date}
  */
  readonly date?: string;
  /**
  * Specifies the number of days after object creation when the specific rule action takes effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#days CosBucket#days}
  */
  readonly days?: number;
  /**
  * Specifies the storage class to which you want the object to transition. Available values include `STANDARD_IA`, `MAZ_STANDARD_IA`, `INTELLIGENT_TIERING`, `MAZ_INTELLIGENT_TIERING`, `ARCHIVE`, `DEEP_ARCHIVE`. For more information, please refer to: https://cloud.tencent.com/document/product/436/33417.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#storage_class CosBucket#storage_class}
  */
  readonly storageClass: string;
}

export function cosBucketLifecycleRulesTransitionToTerraform(struct?: CosBucketLifecycleRulesTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function cosBucketLifecycleRulesTransitionToHclTerraform(struct?: CosBucketLifecycleRulesTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketLifecycleRulesTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRulesTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._storageClass = value.storageClass;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class CosBucketLifecycleRulesTransitionList extends cdktf.ComplexList {
  public internalValue? : CosBucketLifecycleRulesTransition[] | cdktf.IResolvable

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
  public get(index: number): CosBucketLifecycleRulesTransitionOutputReference {
    return new CosBucketLifecycleRulesTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketLifecycleRules {
  /**
  * Object key prefix identifying one or more objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#filter_prefix CosBucket#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * A unique identifier for the rule. It can be up to 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#id CosBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * abort_incomplete_multipart_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#abort_incomplete_multipart_upload CosBucket#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: CosBucketLifecycleRulesAbortIncompleteMultipartUpload;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#expiration CosBucket#expiration}
  */
  readonly expiration?: CosBucketLifecycleRulesExpiration;
  /**
  * non_current_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#non_current_expiration CosBucket#non_current_expiration}
  */
  readonly nonCurrentExpiration?: CosBucketLifecycleRulesNonCurrentExpiration;
  /**
  * non_current_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#non_current_transition CosBucket#non_current_transition}
  */
  readonly nonCurrentTransition?: CosBucketLifecycleRulesNonCurrentTransition[] | cdktf.IResolvable;
  /**
  * transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#transition CosBucket#transition}
  */
  readonly transition?: CosBucketLifecycleRulesTransition[] | cdktf.IResolvable;
}

export function cosBucketLifecycleRulesToTerraform(struct?: CosBucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    id: cdktf.stringToTerraform(struct!.id),
    abort_incomplete_multipart_upload: cosBucketLifecycleRulesAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration: cosBucketLifecycleRulesExpirationToTerraform(struct!.expiration),
    non_current_expiration: cosBucketLifecycleRulesNonCurrentExpirationToTerraform(struct!.nonCurrentExpiration),
    non_current_transition: cdktf.listMapper(cosBucketLifecycleRulesNonCurrentTransitionToTerraform, true)(struct!.nonCurrentTransition),
    transition: cdktf.listMapper(cosBucketLifecycleRulesTransitionToTerraform, true)(struct!.transition),
  }
}


export function cosBucketLifecycleRulesToHclTerraform(struct?: CosBucketLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_prefix: {
      value: cdktf.stringToHclTerraform(struct!.filterPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    abort_incomplete_multipart_upload: {
      value: cosBucketLifecycleRulesAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "set",
      storageClassType: "CosBucketLifecycleRulesAbortIncompleteMultipartUploadList",
    },
    expiration: {
      value: cosBucketLifecycleRulesExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "set",
      storageClassType: "CosBucketLifecycleRulesExpirationList",
    },
    non_current_expiration: {
      value: cosBucketLifecycleRulesNonCurrentExpirationToHclTerraform(struct!.nonCurrentExpiration),
      isBlock: true,
      type: "set",
      storageClassType: "CosBucketLifecycleRulesNonCurrentExpirationList",
    },
    non_current_transition: {
      value: cdktf.listMapperHcl(cosBucketLifecycleRulesNonCurrentTransitionToHclTerraform, true)(struct!.nonCurrentTransition),
      isBlock: true,
      type: "set",
      storageClassType: "CosBucketLifecycleRulesNonCurrentTransitionList",
    },
    transition: {
      value: cdktf.listMapperHcl(cosBucketLifecycleRulesTransitionToHclTerraform, true)(struct!.transition),
      isBlock: true,
      type: "set",
      storageClassType: "CosBucketLifecycleRulesTransitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketLifecycleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketLifecycleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._nonCurrentExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCurrentExpiration = this._nonCurrentExpiration?.internalValue;
    }
    if (this._nonCurrentTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCurrentTransition = this._nonCurrentTransition?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketLifecycleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterPrefix = undefined;
      this._id = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._nonCurrentExpiration.internalValue = undefined;
      this._nonCurrentTransition.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterPrefix = value.filterPrefix;
      this._id = value.id;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._nonCurrentExpiration.internalValue = value.nonCurrentExpiration;
      this._nonCurrentTransition.internalValue = value.nonCurrentTransition;
      this._transition.internalValue = value.transition;
    }
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
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

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new CosBucketLifecycleRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: CosBucketLifecycleRulesAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new CosBucketLifecycleRulesExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: CosBucketLifecycleRulesExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // non_current_expiration - computed: false, optional: true, required: false
  private _nonCurrentExpiration = new CosBucketLifecycleRulesNonCurrentExpirationOutputReference(this, "non_current_expiration");
  public get nonCurrentExpiration() {
    return this._nonCurrentExpiration;
  }
  public putNonCurrentExpiration(value: CosBucketLifecycleRulesNonCurrentExpiration) {
    this._nonCurrentExpiration.internalValue = value;
  }
  public resetNonCurrentExpiration() {
    this._nonCurrentExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCurrentExpirationInput() {
    return this._nonCurrentExpiration.internalValue;
  }

  // non_current_transition - computed: false, optional: true, required: false
  private _nonCurrentTransition = new CosBucketLifecycleRulesNonCurrentTransitionList(this, "non_current_transition", true);
  public get nonCurrentTransition() {
    return this._nonCurrentTransition;
  }
  public putNonCurrentTransition(value: CosBucketLifecycleRulesNonCurrentTransition[] | cdktf.IResolvable) {
    this._nonCurrentTransition.internalValue = value;
  }
  public resetNonCurrentTransition() {
    this._nonCurrentTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCurrentTransitionInput() {
    return this._nonCurrentTransition.internalValue;
  }

  // transition - computed: false, optional: true, required: false
  private _transition = new CosBucketLifecycleRulesTransitionList(this, "transition", true);
  public get transition() {
    return this._transition;
  }
  public putTransition(value: CosBucketLifecycleRulesTransition[] | cdktf.IResolvable) {
    this._transition.internalValue = value;
  }
  public resetTransition() {
    this._transition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition.internalValue;
  }
}

export class CosBucketLifecycleRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketLifecycleRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketLifecycleRulesOutputReference {
    return new CosBucketLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketOriginDomainRules {
  /**
  * Specify domain host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#domain CosBucket#domain}
  */
  readonly domain: string;
  /**
  * Domain status, default: `ENABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#status CosBucket#status}
  */
  readonly status?: string;
  /**
  * Specify origin domain type, available values: `REST`, `WEBSITE`, `ACCELERATE`, default: `REST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#type CosBucket#type}
  */
  readonly type?: string;
}

export function cosBucketOriginDomainRulesToTerraform(struct?: CosBucketOriginDomainRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cosBucketOriginDomainRulesToHclTerraform(struct?: CosBucketOriginDomainRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class CosBucketOriginDomainRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketOriginDomainRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketOriginDomainRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

export class CosBucketOriginDomainRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketOriginDomainRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketOriginDomainRulesOutputReference {
    return new CosBucketOriginDomainRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketOriginPullRules {
  /**
  * Back to source mode. Allow value: Proxy, Mirror, Redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#back_to_source_mode CosBucket#back_to_source_mode}
  */
  readonly backToSourceMode?: string;
  /**
  * Specifies the custom headers that you can add for COS to access your origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#custom_http_headers CosBucket#custom_http_headers}
  */
  readonly customHttpHeaders?: { [key: string]: string };
  /**
  * Specifies the pass through headers when accessing the origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#follow_http_headers CosBucket#follow_http_headers}
  */
  readonly followHttpHeaders?: string[];
  /**
  * Specifies whether to pass through COS request query string when accessing the origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#follow_query_string CosBucket#follow_query_string}
  */
  readonly followQueryString?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to follow 3XX redirect to another origin server to pull data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#follow_redirection CosBucket#follow_redirection}
  */
  readonly followRedirection?: boolean | cdktf.IResolvable;
  /**
  * Allows only a domain name or IP address. You can optionally append a port number to the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#host CosBucket#host}
  */
  readonly host: string;
  /**
  * Redirect code. Effective when `back_to_source_mode` is `Redirect`. ex: 301, 302, 307. Default is 302.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#http_redirect_code CosBucket#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Triggers the origin-pull rule when the requested file name matches this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#prefix CosBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Priority of origin-pull rules, do not set the same value for multiple rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#priority CosBucket#priority}
  */
  readonly priority: number;
  /**
  * the protocol used for COS to access the specified origin server. The available value include `HTTP`, `HTTPS` and `FOLLOW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#protocol CosBucket#protocol}
  */
  readonly protocol?: string;
  /**
  * If `true`, COS will not return 3XX status code when pulling data from an origin server. Current available zone: ap-beijing, ap-shanghai, ap-singapore, ap-mumbai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#sync_back_to_source CosBucket#sync_back_to_source}
  */
  readonly syncBackToSource?: boolean | cdktf.IResolvable;
}

export function cosBucketOriginPullRulesToTerraform(struct?: CosBucketOriginPullRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_to_source_mode: cdktf.stringToTerraform(struct!.backToSourceMode),
    custom_http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHttpHeaders),
    follow_http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.followHttpHeaders),
    follow_query_string: cdktf.booleanToTerraform(struct!.followQueryString),
    follow_redirection: cdktf.booleanToTerraform(struct!.followRedirection),
    host: cdktf.stringToTerraform(struct!.host),
    http_redirect_code: cdktf.stringToTerraform(struct!.httpRedirectCode),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sync_back_to_source: cdktf.booleanToTerraform(struct!.syncBackToSource),
  }
}


export function cosBucketOriginPullRulesToHclTerraform(struct?: CosBucketOriginPullRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_to_source_mode: {
      value: cdktf.stringToHclTerraform(struct!.backToSourceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHttpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    follow_http_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.followHttpHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    follow_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.followQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirection: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_back_to_source: {
      value: cdktf.booleanToHclTerraform(struct!.syncBackToSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketOriginPullRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketOriginPullRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backToSourceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.backToSourceMode = this._backToSourceMode;
    }
    if (this._customHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHttpHeaders = this._customHttpHeaders;
    }
    if (this._followHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.followHttpHeaders = this._followHttpHeaders;
    }
    if (this._followQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.followQueryString = this._followQueryString;
    }
    if (this._followRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirection = this._followRedirection;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._syncBackToSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBackToSource = this._syncBackToSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketOriginPullRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backToSourceMode = undefined;
      this._customHttpHeaders = undefined;
      this._followHttpHeaders = undefined;
      this._followQueryString = undefined;
      this._followRedirection = undefined;
      this._host = undefined;
      this._httpRedirectCode = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._syncBackToSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backToSourceMode = value.backToSourceMode;
      this._customHttpHeaders = value.customHttpHeaders;
      this._followHttpHeaders = value.followHttpHeaders;
      this._followQueryString = value.followQueryString;
      this._followRedirection = value.followRedirection;
      this._host = value.host;
      this._httpRedirectCode = value.httpRedirectCode;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._syncBackToSource = value.syncBackToSource;
    }
  }

  // back_to_source_mode - computed: true, optional: true, required: false
  private _backToSourceMode?: string; 
  public get backToSourceMode() {
    return this.getStringAttribute('back_to_source_mode');
  }
  public set backToSourceMode(value: string) {
    this._backToSourceMode = value;
  }
  public resetBackToSourceMode() {
    this._backToSourceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backToSourceModeInput() {
    return this._backToSourceMode;
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

  // follow_http_headers - computed: false, optional: true, required: false
  private _followHttpHeaders?: string[]; 
  public get followHttpHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('follow_http_headers'));
  }
  public set followHttpHeaders(value: string[]) {
    this._followHttpHeaders = value;
  }
  public resetFollowHttpHeaders() {
    this._followHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followHttpHeadersInput() {
    return this._followHttpHeaders;
  }

  // follow_query_string - computed: false, optional: true, required: false
  private _followQueryString?: boolean | cdktf.IResolvable; 
  public get followQueryString() {
    return this.getBooleanAttribute('follow_query_string');
  }
  public set followQueryString(value: boolean | cdktf.IResolvable) {
    this._followQueryString = value;
  }
  public resetFollowQueryString() {
    this._followQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followQueryStringInput() {
    return this._followQueryString;
  }

  // follow_redirection - computed: false, optional: true, required: false
  private _followRedirection?: boolean | cdktf.IResolvable; 
  public get followRedirection() {
    return this.getBooleanAttribute('follow_redirection');
  }
  public set followRedirection(value: boolean | cdktf.IResolvable) {
    this._followRedirection = value;
  }
  public resetFollowRedirection() {
    this._followRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectionInput() {
    return this._followRedirection;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_redirect_code - computed: true, optional: true, required: false
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // sync_back_to_source - computed: true, optional: true, required: false
  private _syncBackToSource?: boolean | cdktf.IResolvable; 
  public get syncBackToSource() {
    return this.getBooleanAttribute('sync_back_to_source');
  }
  public set syncBackToSource(value: boolean | cdktf.IResolvable) {
    this._syncBackToSource = value;
  }
  public resetSyncBackToSource() {
    this._syncBackToSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBackToSourceInput() {
    return this._syncBackToSource;
  }
}

export class CosBucketOriginPullRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketOriginPullRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketOriginPullRulesOutputReference {
    return new CosBucketOriginPullRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketReplicaRules {
  /**
  * Destination bucket identifier, format: `qcs::cos:<region>::<bucketname-appid>`. NOTE: destination bucket must enable versioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#destination_bucket CosBucket#destination_bucket}
  */
  readonly destinationBucket: string;
  /**
  * Storage class of destination, available values: `STANDARD`, `INTELLIGENT_TIERING`, `STANDARD_IA`. default is following current class of destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#destination_storage_class CosBucket#destination_storage_class}
  */
  readonly destinationStorageClass?: string;
  /**
  * Name of a specific rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#id CosBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prefix matching policy. Policies cannot overlap; otherwise, an error will be returned. To match the root directory, leave this parameter empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#prefix CosBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Status identifier, available values: `Enabled`, `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#status CosBucket#status}
  */
  readonly status: string;
}

export function cosBucketReplicaRulesToTerraform(struct?: CosBucketReplicaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_bucket: cdktf.stringToTerraform(struct!.destinationBucket),
    destination_storage_class: cdktf.stringToTerraform(struct!.destinationStorageClass),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cosBucketReplicaRulesToHclTerraform(struct?: CosBucketReplicaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_bucket: {
      value: cdktf.stringToHclTerraform(struct!.destinationBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.destinationStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketReplicaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketReplicaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucket = this._destinationBucket;
    }
    if (this._destinationStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationStorageClass = this._destinationStorageClass;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketReplicaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBucket = undefined;
      this._destinationStorageClass = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBucket = value.destinationBucket;
      this._destinationStorageClass = value.destinationStorageClass;
      this._id = value.id;
      this._prefix = value.prefix;
      this._status = value.status;
    }
  }

  // destination_bucket - computed: false, optional: false, required: true
  private _destinationBucket?: string; 
  public get destinationBucket() {
    return this.getStringAttribute('destination_bucket');
  }
  public set destinationBucket(value: string) {
    this._destinationBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketInput() {
    return this._destinationBucket;
  }

  // destination_storage_class - computed: false, optional: true, required: false
  private _destinationStorageClass?: string; 
  public get destinationStorageClass() {
    return this.getStringAttribute('destination_storage_class');
  }
  public set destinationStorageClass(value: string) {
    this._destinationStorageClass = value;
  }
  public resetDestinationStorageClass() {
    this._destinationStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStorageClassInput() {
    return this._destinationStorageClass;
  }

  // id - computed: false, optional: true, required: false
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class CosBucketReplicaRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketReplicaRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketReplicaRulesOutputReference {
    return new CosBucketReplicaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketWebsiteRoutingRulesRules {
  /**
  * Specifies the error code as the match condition for the routing rule. Valid values: only 4xx return codes, such as 403 or 404.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#condition_error_code CosBucket#condition_error_code}
  */
  readonly conditionErrorCode?: string;
  /**
  * Specifies the object key prefix as the match condition for the routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#condition_prefix CosBucket#condition_prefix}
  */
  readonly conditionPrefix?: string;
  /**
  * Specifies the target protocol for the routing rule. Only HTTPS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#redirect_protocol CosBucket#redirect_protocol}
  */
  readonly redirectProtocol?: string;
  /**
  * Specifies the target object key to replace the original object key in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#redirect_replace_key CosBucket#redirect_replace_key}
  */
  readonly redirectReplaceKey?: string;
  /**
  * Specifies the object key prefix to replace the original prefix in the request. You can set this parameter only if the condition is KeyPrefixEquals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#redirect_replace_key_prefix CosBucket#redirect_replace_key_prefix}
  */
  readonly redirectReplaceKeyPrefix?: string;
}

export function cosBucketWebsiteRoutingRulesRulesToTerraform(struct?: CosBucketWebsiteRoutingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_error_code: cdktf.stringToTerraform(struct!.conditionErrorCode),
    condition_prefix: cdktf.stringToTerraform(struct!.conditionPrefix),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_replace_key: cdktf.stringToTerraform(struct!.redirectReplaceKey),
    redirect_replace_key_prefix: cdktf.stringToTerraform(struct!.redirectReplaceKeyPrefix),
  }
}


export function cosBucketWebsiteRoutingRulesRulesToHclTerraform(struct?: CosBucketWebsiteRoutingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_error_code: {
      value: cdktf.stringToHclTerraform(struct!.conditionErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_prefix: {
      value: cdktf.stringToHclTerraform(struct!.conditionPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_protocol: {
      value: cdktf.stringToHclTerraform(struct!.redirectProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_replace_key: {
      value: cdktf.stringToHclTerraform(struct!.redirectReplaceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_replace_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.redirectReplaceKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketWebsiteRoutingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBucketWebsiteRoutingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionErrorCode = this._conditionErrorCode;
    }
    if (this._conditionPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionPrefix = this._conditionPrefix;
    }
    if (this._redirectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectProtocol = this._redirectProtocol;
    }
    if (this._redirectReplaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectReplaceKey = this._redirectReplaceKey;
    }
    if (this._redirectReplaceKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectReplaceKeyPrefix = this._redirectReplaceKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketWebsiteRoutingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionErrorCode = undefined;
      this._conditionPrefix = undefined;
      this._redirectProtocol = undefined;
      this._redirectReplaceKey = undefined;
      this._redirectReplaceKeyPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionErrorCode = value.conditionErrorCode;
      this._conditionPrefix = value.conditionPrefix;
      this._redirectProtocol = value.redirectProtocol;
      this._redirectReplaceKey = value.redirectReplaceKey;
      this._redirectReplaceKeyPrefix = value.redirectReplaceKeyPrefix;
    }
  }

  // condition_error_code - computed: false, optional: true, required: false
  private _conditionErrorCode?: string; 
  public get conditionErrorCode() {
    return this.getStringAttribute('condition_error_code');
  }
  public set conditionErrorCode(value: string) {
    this._conditionErrorCode = value;
  }
  public resetConditionErrorCode() {
    this._conditionErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionErrorCodeInput() {
    return this._conditionErrorCode;
  }

  // condition_prefix - computed: false, optional: true, required: false
  private _conditionPrefix?: string; 
  public get conditionPrefix() {
    return this.getStringAttribute('condition_prefix');
  }
  public set conditionPrefix(value: string) {
    this._conditionPrefix = value;
  }
  public resetConditionPrefix() {
    this._conditionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionPrefixInput() {
    return this._conditionPrefix;
  }

  // redirect_protocol - computed: false, optional: true, required: false
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  public resetRedirectProtocol() {
    this._redirectProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol;
  }

  // redirect_replace_key - computed: false, optional: true, required: false
  private _redirectReplaceKey?: string; 
  public get redirectReplaceKey() {
    return this.getStringAttribute('redirect_replace_key');
  }
  public set redirectReplaceKey(value: string) {
    this._redirectReplaceKey = value;
  }
  public resetRedirectReplaceKey() {
    this._redirectReplaceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectReplaceKeyInput() {
    return this._redirectReplaceKey;
  }

  // redirect_replace_key_prefix - computed: false, optional: true, required: false
  private _redirectReplaceKeyPrefix?: string; 
  public get redirectReplaceKeyPrefix() {
    return this.getStringAttribute('redirect_replace_key_prefix');
  }
  public set redirectReplaceKeyPrefix(value: string) {
    this._redirectReplaceKeyPrefix = value;
  }
  public resetRedirectReplaceKeyPrefix() {
    this._redirectReplaceKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectReplaceKeyPrefixInput() {
    return this._redirectReplaceKeyPrefix;
  }
}

export class CosBucketWebsiteRoutingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : CosBucketWebsiteRoutingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): CosBucketWebsiteRoutingRulesRulesOutputReference {
    return new CosBucketWebsiteRoutingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBucketWebsiteRoutingRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#rules CosBucket#rules}
  */
  readonly rules: CosBucketWebsiteRoutingRulesRules[] | cdktf.IResolvable;
}

export function cosBucketWebsiteRoutingRulesToTerraform(struct?: CosBucketWebsiteRoutingRulesOutputReference | CosBucketWebsiteRoutingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(cosBucketWebsiteRoutingRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function cosBucketWebsiteRoutingRulesToHclTerraform(struct?: CosBucketWebsiteRoutingRulesOutputReference | CosBucketWebsiteRoutingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(cosBucketWebsiteRoutingRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketWebsiteRoutingRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketWebsiteRoutingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketWebsiteRoutingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketWebsiteRoutingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CosBucketWebsiteRoutingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CosBucketWebsiteRoutingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface CosBucketWebsite {
  /**
  * An absolute path to the document to return in case of a 4XX error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#error_document CosBucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * COS returns this index document when requests are made to the root domain or any of the subfolders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#index_document CosBucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * Redirects all request configurations. Valid values: http, https. Default is `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#redirect_all_requests_to CosBucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: string;
  /**
  * routing_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#routing_rules CosBucket#routing_rules}
  */
  readonly routingRules?: CosBucketWebsiteRoutingRules;
}

export function cosBucketWebsiteToTerraform(struct?: CosBucketWebsiteOutputReference | CosBucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cosBucketWebsiteRoutingRulesToTerraform(struct!.routingRules),
  }
}


export function cosBucketWebsiteToHclTerraform(struct?: CosBucketWebsiteOutputReference | CosBucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_document: {
      value: cdktf.stringToHclTerraform(struct!.errorDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_document: {
      value: cdktf.stringToHclTerraform(struct!.indexDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_all_requests_to: {
      value: cdktf.stringToHclTerraform(struct!.redirectAllRequestsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_rules: {
      value: cosBucketWebsiteRoutingRulesToHclTerraform(struct!.routingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketWebsiteRoutingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDocument = this._errorDocument;
    }
    if (this._indexDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    if (this._redirectAllRequestsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo;
    }
    if (this._routingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRules = this._routingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorDocument = undefined;
      this._indexDocument = undefined;
      this._redirectAllRequestsTo = undefined;
      this._routingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorDocument = value.errorDocument;
      this._indexDocument = value.indexDocument;
      this._redirectAllRequestsTo = value.redirectAllRequestsTo;
      this._routingRules.internalValue = value.routingRules;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument?: string; 
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }
  public set errorDocument(value: string) {
    this._errorDocument = value;
  }
  public resetErrorDocument() {
    this._errorDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }

  // redirect_all_requests_to - computed: true, optional: true, required: false
  private _redirectAllRequestsTo?: string; 
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }
  public set redirectAllRequestsTo(value: string) {
    this._redirectAllRequestsTo = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules = new CosBucketWebsiteRoutingRulesOutputReference(this, "routing_rules");
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: CosBucketWebsiteRoutingRules) {
    this._routingRules.internalValue = value;
  }
  public resetRoutingRules() {
    this._routingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket tencentcloud_cos_bucket}
*/
export class CosBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosBucket to import
  * @param importFromId The id of the existing CosBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cos_bucket tencentcloud_cos_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosBucketConfig
  */
  public constructor(scope: Construct, id: string, config: CosBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_bucket',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerationEnable = config.accelerationEnable;
    this._acl = config.acl;
    this._aclBody = config.aclBody;
    this._bucket = config.bucket;
    this._cdcId = config.cdcId;
    this._chdfsOfs = config.chdfsOfs;
    this._enableIntelligentTiering = config.enableIntelligentTiering;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._forceClean = config.forceClean;
    this._id = config.id;
    this._intelligentTieringDays = config.intelligentTieringDays;
    this._intelligentTieringRequestFrequent = config.intelligentTieringRequestFrequent;
    this._kmsId = config.kmsId;
    this._logEnable = config.logEnable;
    this._logPrefix = config.logPrefix;
    this._logTargetBucket = config.logTargetBucket;
    this._multiAz = config.multiAz;
    this._replicaRole = config.replicaRole;
    this._tags = config.tags;
    this._versioningEnable = config.versioningEnable;
    this._corsRules.internalValue = config.corsRules;
    this._lifecycleRules.internalValue = config.lifecycleRules;
    this._originDomainRules.internalValue = config.originDomainRules;
    this._originPullRules.internalValue = config.originPullRules;
    this._replicaRules.internalValue = config.replicaRules;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_enable - computed: false, optional: true, required: false
  private _accelerationEnable?: boolean | cdktf.IResolvable; 
  public get accelerationEnable() {
    return this.getBooleanAttribute('acceleration_enable');
  }
  public set accelerationEnable(value: boolean | cdktf.IResolvable) {
    this._accelerationEnable = value;
  }
  public resetAccelerationEnable() {
    this._accelerationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationEnableInput() {
    return this._accelerationEnable;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // acl_body - computed: true, optional: true, required: false
  private _aclBody?: string; 
  public get aclBody() {
    return this.getStringAttribute('acl_body');
  }
  public set aclBody(value: string) {
    this._aclBody = value;
  }
  public resetAclBody() {
    this._aclBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclBodyInput() {
    return this._aclBody;
  }

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

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // chdfs_ofs - computed: true, optional: true, required: false
  private _chdfsOfs?: boolean | cdktf.IResolvable; 
  public get chdfsOfs() {
    return this.getBooleanAttribute('chdfs_ofs');
  }
  public set chdfsOfs(value: boolean | cdktf.IResolvable) {
    this._chdfsOfs = value;
  }
  public resetChdfsOfs() {
    this._chdfsOfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chdfsOfsInput() {
    return this._chdfsOfs;
  }

  // cos_bucket_url - computed: true, optional: false, required: false
  public get cosBucketUrl() {
    return this.getStringAttribute('cos_bucket_url');
  }

  // enable_intelligent_tiering - computed: true, optional: true, required: false
  private _enableIntelligentTiering?: boolean | cdktf.IResolvable; 
  public get enableIntelligentTiering() {
    return this.getBooleanAttribute('enable_intelligent_tiering');
  }
  public set enableIntelligentTiering(value: boolean | cdktf.IResolvable) {
    this._enableIntelligentTiering = value;
  }
  public resetEnableIntelligentTiering() {
    this._enableIntelligentTiering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntelligentTieringInput() {
    return this._enableIntelligentTiering;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // force_clean - computed: false, optional: true, required: false
  private _forceClean?: boolean | cdktf.IResolvable; 
  public get forceClean() {
    return this.getBooleanAttribute('force_clean');
  }
  public set forceClean(value: boolean | cdktf.IResolvable) {
    this._forceClean = value;
  }
  public resetForceClean() {
    this._forceClean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCleanInput() {
    return this._forceClean;
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

  // intelligent_tiering_days - computed: true, optional: true, required: false
  private _intelligentTieringDays?: number; 
  public get intelligentTieringDays() {
    return this.getNumberAttribute('intelligent_tiering_days');
  }
  public set intelligentTieringDays(value: number) {
    this._intelligentTieringDays = value;
  }
  public resetIntelligentTieringDays() {
    this._intelligentTieringDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentTieringDaysInput() {
    return this._intelligentTieringDays;
  }

  // intelligent_tiering_request_frequent - computed: true, optional: true, required: false
  private _intelligentTieringRequestFrequent?: number; 
  public get intelligentTieringRequestFrequent() {
    return this.getNumberAttribute('intelligent_tiering_request_frequent');
  }
  public set intelligentTieringRequestFrequent(value: number) {
    this._intelligentTieringRequestFrequent = value;
  }
  public resetIntelligentTieringRequestFrequent() {
    this._intelligentTieringRequestFrequent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentTieringRequestFrequentInput() {
    return this._intelligentTieringRequestFrequent;
  }

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: boolean | cdktf.IResolvable; 
  public get logEnable() {
    return this.getBooleanAttribute('log_enable');
  }
  public set logEnable(value: boolean | cdktf.IResolvable) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_prefix - computed: true, optional: true, required: false
  private _logPrefix?: string; 
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
  }

  // log_target_bucket - computed: true, optional: true, required: false
  private _logTargetBucket?: string; 
  public get logTargetBucket() {
    return this.getStringAttribute('log_target_bucket');
  }
  public set logTargetBucket(value: string) {
    this._logTargetBucket = value;
  }
  public resetLogTargetBucket() {
    this._logTargetBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTargetBucketInput() {
    return this._logTargetBucket;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // replica_role - computed: false, optional: true, required: false
  private _replicaRole?: string; 
  public get replicaRole() {
    return this.getStringAttribute('replica_role');
  }
  public set replicaRole(value: string) {
    this._replicaRole = value;
  }
  public resetReplicaRole() {
    this._replicaRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRoleInput() {
    return this._replicaRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // versioning_enable - computed: false, optional: true, required: false
  private _versioningEnable?: boolean | cdktf.IResolvable; 
  public get versioningEnable() {
    return this.getBooleanAttribute('versioning_enable');
  }
  public set versioningEnable(value: boolean | cdktf.IResolvable) {
    this._versioningEnable = value;
  }
  public resetVersioningEnable() {
    this._versioningEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningEnableInput() {
    return this._versioningEnable;
  }

  // cors_rules - computed: false, optional: true, required: false
  private _corsRules = new CosBucketCorsRulesList(this, "cors_rules", false);
  public get corsRules() {
    return this._corsRules;
  }
  public putCorsRules(value: CosBucketCorsRules[] | cdktf.IResolvable) {
    this._corsRules.internalValue = value;
  }
  public resetCorsRules() {
    this._corsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRulesInput() {
    return this._corsRules.internalValue;
  }

  // lifecycle_rules - computed: false, optional: true, required: false
  private _lifecycleRules = new CosBucketLifecycleRulesList(this, "lifecycle_rules", false);
  public get lifecycleRules() {
    return this._lifecycleRules;
  }
  public putLifecycleRules(value: CosBucketLifecycleRules[] | cdktf.IResolvable) {
    this._lifecycleRules.internalValue = value;
  }
  public resetLifecycleRules() {
    this._lifecycleRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRulesInput() {
    return this._lifecycleRules.internalValue;
  }

  // origin_domain_rules - computed: false, optional: true, required: false
  private _originDomainRules = new CosBucketOriginDomainRulesList(this, "origin_domain_rules", false);
  public get originDomainRules() {
    return this._originDomainRules;
  }
  public putOriginDomainRules(value: CosBucketOriginDomainRules[] | cdktf.IResolvable) {
    this._originDomainRules.internalValue = value;
  }
  public resetOriginDomainRules() {
    this._originDomainRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDomainRulesInput() {
    return this._originDomainRules.internalValue;
  }

  // origin_pull_rules - computed: false, optional: true, required: false
  private _originPullRules = new CosBucketOriginPullRulesList(this, "origin_pull_rules", false);
  public get originPullRules() {
    return this._originPullRules;
  }
  public putOriginPullRules(value: CosBucketOriginPullRules[] | cdktf.IResolvable) {
    this._originPullRules.internalValue = value;
  }
  public resetOriginPullRules() {
    this._originPullRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullRulesInput() {
    return this._originPullRules.internalValue;
  }

  // replica_rules - computed: false, optional: true, required: false
  private _replicaRules = new CosBucketReplicaRulesList(this, "replica_rules", false);
  public get replicaRules() {
    return this._replicaRules;
  }
  public putReplicaRules(value: CosBucketReplicaRules[] | cdktf.IResolvable) {
    this._replicaRules.internalValue = value;
  }
  public resetReplicaRules() {
    this._replicaRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRulesInput() {
    return this._replicaRules.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new CosBucketWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: CosBucketWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_enable: cdktf.booleanToTerraform(this._accelerationEnable),
      acl: cdktf.stringToTerraform(this._acl),
      acl_body: cdktf.stringToTerraform(this._aclBody),
      bucket: cdktf.stringToTerraform(this._bucket),
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      chdfs_ofs: cdktf.booleanToTerraform(this._chdfsOfs),
      enable_intelligent_tiering: cdktf.booleanToTerraform(this._enableIntelligentTiering),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      force_clean: cdktf.booleanToTerraform(this._forceClean),
      id: cdktf.stringToTerraform(this._id),
      intelligent_tiering_days: cdktf.numberToTerraform(this._intelligentTieringDays),
      intelligent_tiering_request_frequent: cdktf.numberToTerraform(this._intelligentTieringRequestFrequent),
      kms_id: cdktf.stringToTerraform(this._kmsId),
      log_enable: cdktf.booleanToTerraform(this._logEnable),
      log_prefix: cdktf.stringToTerraform(this._logPrefix),
      log_target_bucket: cdktf.stringToTerraform(this._logTargetBucket),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      replica_role: cdktf.stringToTerraform(this._replicaRole),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      versioning_enable: cdktf.booleanToTerraform(this._versioningEnable),
      cors_rules: cdktf.listMapper(cosBucketCorsRulesToTerraform, true)(this._corsRules.internalValue),
      lifecycle_rules: cdktf.listMapper(cosBucketLifecycleRulesToTerraform, true)(this._lifecycleRules.internalValue),
      origin_domain_rules: cdktf.listMapper(cosBucketOriginDomainRulesToTerraform, true)(this._originDomainRules.internalValue),
      origin_pull_rules: cdktf.listMapper(cosBucketOriginPullRulesToTerraform, true)(this._originPullRules.internalValue),
      replica_rules: cdktf.listMapper(cosBucketReplicaRulesToTerraform, true)(this._replicaRules.internalValue),
      website: cosBucketWebsiteToTerraform(this._website.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceleration_enable: {
        value: cdktf.booleanToHclTerraform(this._accelerationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_body: {
        value: cdktf.stringToHclTerraform(this._aclBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chdfs_ofs: {
        value: cdktf.booleanToHclTerraform(this._chdfsOfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_intelligent_tiering: {
        value: cdktf.booleanToHclTerraform(this._enableIntelligentTiering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_clean: {
        value: cdktf.booleanToHclTerraform(this._forceClean),
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
      intelligent_tiering_days: {
        value: cdktf.numberToHclTerraform(this._intelligentTieringDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      intelligent_tiering_request_frequent: {
        value: cdktf.numberToHclTerraform(this._intelligentTieringRequestFrequent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_id: {
        value: cdktf.stringToHclTerraform(this._kmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_enable: {
        value: cdktf.booleanToHclTerraform(this._logEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_prefix: {
        value: cdktf.stringToHclTerraform(this._logPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_target_bucket: {
        value: cdktf.stringToHclTerraform(this._logTargetBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replica_role: {
        value: cdktf.stringToHclTerraform(this._replicaRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      versioning_enable: {
        value: cdktf.booleanToHclTerraform(this._versioningEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cors_rules: {
        value: cdktf.listMapperHcl(cosBucketCorsRulesToHclTerraform, true)(this._corsRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketCorsRulesList",
      },
      lifecycle_rules: {
        value: cdktf.listMapperHcl(cosBucketLifecycleRulesToHclTerraform, true)(this._lifecycleRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketLifecycleRulesList",
      },
      origin_domain_rules: {
        value: cdktf.listMapperHcl(cosBucketOriginDomainRulesToHclTerraform, true)(this._originDomainRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketOriginDomainRulesList",
      },
      origin_pull_rules: {
        value: cdktf.listMapperHcl(cosBucketOriginPullRulesToHclTerraform, true)(this._originPullRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketOriginPullRulesList",
      },
      replica_rules: {
        value: cdktf.listMapperHcl(cosBucketReplicaRulesToHclTerraform, true)(this._replicaRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketReplicaRulesList",
      },
      website: {
        value: cosBucketWebsiteToHclTerraform(this._website.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketWebsiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
