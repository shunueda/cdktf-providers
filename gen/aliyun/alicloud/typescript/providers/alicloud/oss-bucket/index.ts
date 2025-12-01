// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#acl OssBucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#bucket OssBucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#force_destroy OssBucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#id OssBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#lifecycle_rule_allow_same_action_overlap OssBucket#lifecycle_rule_allow_same_action_overlap}
  */
  readonly lifecycleRuleAllowSameActionOverlap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#logging_isenable OssBucket#logging_isenable}
  */
  readonly loggingIsenable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#policy OssBucket#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#redundancy_type OssBucket#redundancy_type}
  */
  readonly redundancyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#resource_group_id OssBucket#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#storage_class OssBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#tags OssBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#access_monitor OssBucket#access_monitor}
  */
  readonly accessMonitor?: OssBucketAccessMonitor;
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#cors_rule OssBucket#cors_rule}
  */
  readonly corsRule?: OssBucketCorsRule[] | cdktf.IResolvable;
  /**
  * lifecycle_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#lifecycle_rule OssBucket#lifecycle_rule}
  */
  readonly lifecycleRule?: OssBucketLifecycleRule[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#logging OssBucket#logging}
  */
  readonly logging?: OssBucketLogging;
  /**
  * referer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#referer_config OssBucket#referer_config}
  */
  readonly refererConfig?: OssBucketRefererConfig;
  /**
  * server_side_encryption_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#server_side_encryption_rule OssBucket#server_side_encryption_rule}
  */
  readonly serverSideEncryptionRule?: OssBucketServerSideEncryptionRule;
  /**
  * transfer_acceleration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#transfer_acceleration OssBucket#transfer_acceleration}
  */
  readonly transferAcceleration?: OssBucketTransferAcceleration;
  /**
  * versioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#versioning OssBucket#versioning}
  */
  readonly versioning?: OssBucketVersioning;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#website OssBucket#website}
  */
  readonly website?: OssBucketWebsite;
}
export interface OssBucketAccessMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#status OssBucket#status}
  */
  readonly status?: string;
}

export function ossBucketAccessMonitorToTerraform(struct?: OssBucketAccessMonitorOutputReference | OssBucketAccessMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function ossBucketAccessMonitorToHclTerraform(struct?: OssBucketAccessMonitorOutputReference | OssBucketAccessMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OssBucketAccessMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketAccessMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketAccessMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
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
}
export interface OssBucketCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#allowed_headers OssBucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#allowed_methods OssBucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#allowed_origins OssBucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#expose_headers OssBucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#max_age_seconds OssBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function ossBucketCorsRuleToTerraform(struct?: OssBucketCorsRule | cdktf.IResolvable): any {
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


export function ossBucketCorsRuleToHclTerraform(struct?: OssBucketCorsRule | cdktf.IResolvable): any {
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

export class OssBucketCorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketCorsRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OssBucketCorsRule | cdktf.IResolvable | undefined) {
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

export class OssBucketCorsRuleList extends cdktf.ComplexList {
  public internalValue? : OssBucketCorsRule[] | cdktf.IResolvable

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
  public get(index: number): OssBucketCorsRuleOutputReference {
    return new OssBucketCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRuleAbortMultipartUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#created_before_date OssBucket#created_before_date}
  */
  readonly createdBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#days OssBucket#days}
  */
  readonly days?: number;
}

export function ossBucketLifecycleRuleAbortMultipartUploadToTerraform(struct?: OssBucketLifecycleRuleAbortMultipartUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_before_date: cdktf.stringToTerraform(struct!.createdBeforeDate),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function ossBucketLifecycleRuleAbortMultipartUploadToHclTerraform(struct?: OssBucketLifecycleRuleAbortMultipartUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_before_date: {
      value: cdktf.stringToHclTerraform(struct!.createdBeforeDate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleAbortMultipartUploadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRuleAbortMultipartUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBeforeDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeDate = this._createdBeforeDate;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleAbortMultipartUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBeforeDate = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBeforeDate = value.createdBeforeDate;
      this._days = value.days;
    }
  }

  // created_before_date - computed: false, optional: true, required: false
  private _createdBeforeDate?: string; 
  public get createdBeforeDate() {
    return this.getStringAttribute('created_before_date');
  }
  public set createdBeforeDate(value: string) {
    this._createdBeforeDate = value;
  }
  public resetCreatedBeforeDate() {
    this._createdBeforeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeDateInput() {
    return this._createdBeforeDate;
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
}

export class OssBucketLifecycleRuleAbortMultipartUploadList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRuleAbortMultipartUpload[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleAbortMultipartUploadOutputReference {
    return new OssBucketLifecycleRuleAbortMultipartUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#created_before_date OssBucket#created_before_date}
  */
  readonly createdBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#date OssBucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#days OssBucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#expired_object_delete_marker OssBucket#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function ossBucketLifecycleRuleExpirationToTerraform(struct?: OssBucketLifecycleRuleExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_before_date: cdktf.stringToTerraform(struct!.createdBeforeDate),
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}


export function ossBucketLifecycleRuleExpirationToHclTerraform(struct?: OssBucketLifecycleRuleExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_before_date: {
      value: cdktf.stringToHclTerraform(struct!.createdBeforeDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    expired_object_delete_marker: {
      value: cdktf.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleExpirationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRuleExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBeforeDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeDate = this._createdBeforeDate;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBeforeDate = undefined;
      this._date = undefined;
      this._days = undefined;
      this._expiredObjectDeleteMarker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBeforeDate = value.createdBeforeDate;
      this._date = value.date;
      this._days = value.days;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
    }
  }

  // created_before_date - computed: false, optional: true, required: false
  private _createdBeforeDate?: string; 
  public get createdBeforeDate() {
    return this.getStringAttribute('created_before_date');
  }
  public set createdBeforeDate(value: string) {
    this._createdBeforeDate = value;
  }
  public resetCreatedBeforeDate() {
    this._createdBeforeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeDateInput() {
    return this._createdBeforeDate;
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

  // expired_object_delete_marker - computed: false, optional: true, required: false
  private _expiredObjectDeleteMarker?: boolean | cdktf.IResolvable; 
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
  public set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable) {
    this._expiredObjectDeleteMarker = value;
  }
  public resetExpiredObjectDeleteMarker() {
    this._expiredObjectDeleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredObjectDeleteMarkerInput() {
    return this._expiredObjectDeleteMarker;
  }
}

export class OssBucketLifecycleRuleExpirationList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRuleExpiration[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleExpirationOutputReference {
    return new OssBucketLifecycleRuleExpirationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRuleFilterNotTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#key OssBucket#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#value OssBucket#value}
  */
  readonly value: string;
}

export function ossBucketLifecycleRuleFilterNotTagToTerraform(struct?: OssBucketLifecycleRuleFilterNotTagOutputReference | OssBucketLifecycleRuleFilterNotTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ossBucketLifecycleRuleFilterNotTagToHclTerraform(struct?: OssBucketLifecycleRuleFilterNotTagOutputReference | OssBucketLifecycleRuleFilterNotTag): any {
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

export class OssBucketLifecycleRuleFilterNotTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketLifecycleRuleFilterNotTag | undefined {
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

  public set internalValue(value: OssBucketLifecycleRuleFilterNotTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
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
export interface OssBucketLifecycleRuleFilterNot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#prefix OssBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#tag OssBucket#tag}
  */
  readonly tag?: OssBucketLifecycleRuleFilterNotTag;
}

export function ossBucketLifecycleRuleFilterNotToTerraform(struct?: OssBucketLifecycleRuleFilterNotOutputReference | OssBucketLifecycleRuleFilterNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: ossBucketLifecycleRuleFilterNotTagToTerraform(struct!.tag),
  }
}


export function ossBucketLifecycleRuleFilterNotToHclTerraform(struct?: OssBucketLifecycleRuleFilterNotOutputReference | OssBucketLifecycleRuleFilterNot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: ossBucketLifecycleRuleFilterNotTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketLifecycleRuleFilterNotTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleFilterNotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketLifecycleRuleFilterNot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleFilterNot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
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

  // tag - computed: false, optional: true, required: false
  private _tag = new OssBucketLifecycleRuleFilterNotTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: OssBucketLifecycleRuleFilterNotTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface OssBucketLifecycleRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#object_size_greater_than OssBucket#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#object_size_less_than OssBucket#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#not OssBucket#not}
  */
  readonly not?: OssBucketLifecycleRuleFilterNot;
}

export function ossBucketLifecycleRuleFilterToTerraform(struct?: OssBucketLifecycleRuleFilterOutputReference | OssBucketLifecycleRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    not: ossBucketLifecycleRuleFilterNotToTerraform(struct!.not),
  }
}


export function ossBucketLifecycleRuleFilterToHclTerraform(struct?: OssBucketLifecycleRuleFilterOutputReference | OssBucketLifecycleRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_size_greater_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size_less_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not: {
      value: ossBucketLifecycleRuleFilterNotToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketLifecycleRuleFilterNotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketLifecycleRuleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._not.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._not.internalValue = value.not;
    }
  }

  // object_size_greater_than - computed: false, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: false, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // not - computed: false, optional: true, required: false
  private _not = new OssBucketLifecycleRuleFilterNotOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: OssBucketLifecycleRuleFilterNot) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }
}
export interface OssBucketLifecycleRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#days OssBucket#days}
  */
  readonly days: number;
}

export function ossBucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: OssBucketLifecycleRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function ossBucketLifecycleRuleNoncurrentVersionExpirationToHclTerraform(struct?: OssBucketLifecycleRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}

export class OssBucketLifecycleRuleNoncurrentVersionExpirationList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRuleNoncurrentVersionExpiration[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleNoncurrentVersionExpirationOutputReference {
    return new OssBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRuleNoncurrentVersionTransition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#days OssBucket#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#is_access_time OssBucket#is_access_time}
  */
  readonly isAccessTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#return_to_std_when_visit OssBucket#return_to_std_when_visit}
  */
  readonly returnToStdWhenVisit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#storage_class OssBucket#storage_class}
  */
  readonly storageClass: string;
}

export function ossBucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: OssBucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    is_access_time: cdktf.booleanToTerraform(struct!.isAccessTime),
    return_to_std_when_visit: cdktf.booleanToTerraform(struct!.returnToStdWhenVisit),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function ossBucketLifecycleRuleNoncurrentVersionTransitionToHclTerraform(struct?: OssBucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_access_time: {
      value: cdktf.booleanToHclTerraform(struct!.isAccessTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_to_std_when_visit: {
      value: cdktf.booleanToHclTerraform(struct!.returnToStdWhenVisit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class OssBucketLifecycleRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._isAccessTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAccessTime = this._isAccessTime;
    }
    if (this._returnToStdWhenVisit !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnToStdWhenVisit = this._returnToStdWhenVisit;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._isAccessTime = undefined;
      this._returnToStdWhenVisit = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._isAccessTime = value.isAccessTime;
      this._returnToStdWhenVisit = value.returnToStdWhenVisit;
      this._storageClass = value.storageClass;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // is_access_time - computed: false, optional: true, required: false
  private _isAccessTime?: boolean | cdktf.IResolvable; 
  public get isAccessTime() {
    return this.getBooleanAttribute('is_access_time');
  }
  public set isAccessTime(value: boolean | cdktf.IResolvable) {
    this._isAccessTime = value;
  }
  public resetIsAccessTime() {
    this._isAccessTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessTimeInput() {
    return this._isAccessTime;
  }

  // return_to_std_when_visit - computed: false, optional: true, required: false
  private _returnToStdWhenVisit?: boolean | cdktf.IResolvable; 
  public get returnToStdWhenVisit() {
    return this.getBooleanAttribute('return_to_std_when_visit');
  }
  public set returnToStdWhenVisit(value: boolean | cdktf.IResolvable) {
    this._returnToStdWhenVisit = value;
  }
  public resetReturnToStdWhenVisit() {
    this._returnToStdWhenVisit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnToStdWhenVisitInput() {
    return this._returnToStdWhenVisit;
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

export class OssBucketLifecycleRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleNoncurrentVersionTransitionOutputReference {
    return new OssBucketLifecycleRuleNoncurrentVersionTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRuleTransitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#created_before_date OssBucket#created_before_date}
  */
  readonly createdBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#days OssBucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#is_access_time OssBucket#is_access_time}
  */
  readonly isAccessTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#return_to_std_when_visit OssBucket#return_to_std_when_visit}
  */
  readonly returnToStdWhenVisit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#storage_class OssBucket#storage_class}
  */
  readonly storageClass: string;
}

export function ossBucketLifecycleRuleTransitionsToTerraform(struct?: OssBucketLifecycleRuleTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_before_date: cdktf.stringToTerraform(struct!.createdBeforeDate),
    days: cdktf.numberToTerraform(struct!.days),
    is_access_time: cdktf.booleanToTerraform(struct!.isAccessTime),
    return_to_std_when_visit: cdktf.booleanToTerraform(struct!.returnToStdWhenVisit),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function ossBucketLifecycleRuleTransitionsToHclTerraform(struct?: OssBucketLifecycleRuleTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_before_date: {
      value: cdktf.stringToHclTerraform(struct!.createdBeforeDate),
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
    is_access_time: {
      value: cdktf.booleanToHclTerraform(struct!.isAccessTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_to_std_when_visit: {
      value: cdktf.booleanToHclTerraform(struct!.returnToStdWhenVisit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class OssBucketLifecycleRuleTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRuleTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBeforeDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBeforeDate = this._createdBeforeDate;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._isAccessTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAccessTime = this._isAccessTime;
    }
    if (this._returnToStdWhenVisit !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnToStdWhenVisit = this._returnToStdWhenVisit;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRuleTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBeforeDate = undefined;
      this._days = undefined;
      this._isAccessTime = undefined;
      this._returnToStdWhenVisit = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBeforeDate = value.createdBeforeDate;
      this._days = value.days;
      this._isAccessTime = value.isAccessTime;
      this._returnToStdWhenVisit = value.returnToStdWhenVisit;
      this._storageClass = value.storageClass;
    }
  }

  // created_before_date - computed: false, optional: true, required: false
  private _createdBeforeDate?: string; 
  public get createdBeforeDate() {
    return this.getStringAttribute('created_before_date');
  }
  public set createdBeforeDate(value: string) {
    this._createdBeforeDate = value;
  }
  public resetCreatedBeforeDate() {
    this._createdBeforeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeDateInput() {
    return this._createdBeforeDate;
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

  // is_access_time - computed: false, optional: true, required: false
  private _isAccessTime?: boolean | cdktf.IResolvable; 
  public get isAccessTime() {
    return this.getBooleanAttribute('is_access_time');
  }
  public set isAccessTime(value: boolean | cdktf.IResolvable) {
    this._isAccessTime = value;
  }
  public resetIsAccessTime() {
    this._isAccessTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessTimeInput() {
    return this._isAccessTime;
  }

  // return_to_std_when_visit - computed: false, optional: true, required: false
  private _returnToStdWhenVisit?: boolean | cdktf.IResolvable; 
  public get returnToStdWhenVisit() {
    return this.getBooleanAttribute('return_to_std_when_visit');
  }
  public set returnToStdWhenVisit(value: boolean | cdktf.IResolvable) {
    this._returnToStdWhenVisit = value;
  }
  public resetReturnToStdWhenVisit() {
    this._returnToStdWhenVisit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnToStdWhenVisitInput() {
    return this._returnToStdWhenVisit;
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

export class OssBucketLifecycleRuleTransitionsList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRuleTransitions[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleTransitionsOutputReference {
    return new OssBucketLifecycleRuleTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLifecycleRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#enabled OssBucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#id OssBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#prefix OssBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#tags OssBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * abort_multipart_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#abort_multipart_upload OssBucket#abort_multipart_upload}
  */
  readonly abortMultipartUpload?: OssBucketLifecycleRuleAbortMultipartUpload[] | cdktf.IResolvable;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#expiration OssBucket#expiration}
  */
  readonly expiration?: OssBucketLifecycleRuleExpiration[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#filter OssBucket#filter}
  */
  readonly filter?: OssBucketLifecycleRuleFilter;
  /**
  * noncurrent_version_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#noncurrent_version_expiration OssBucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: OssBucketLifecycleRuleNoncurrentVersionExpiration[] | cdktf.IResolvable;
  /**
  * noncurrent_version_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#noncurrent_version_transition OssBucket#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: OssBucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
  /**
  * transitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#transitions OssBucket#transitions}
  */
  readonly transitions?: OssBucketLifecycleRuleTransitions[] | cdktf.IResolvable;
}

export function ossBucketLifecycleRuleToTerraform(struct?: OssBucketLifecycleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    abort_multipart_upload: cdktf.listMapper(ossBucketLifecycleRuleAbortMultipartUploadToTerraform, true)(struct!.abortMultipartUpload),
    expiration: cdktf.listMapper(ossBucketLifecycleRuleExpirationToTerraform, true)(struct!.expiration),
    filter: ossBucketLifecycleRuleFilterToTerraform(struct!.filter),
    noncurrent_version_expiration: cdktf.listMapper(ossBucketLifecycleRuleNoncurrentVersionExpirationToTerraform, true)(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(ossBucketLifecycleRuleNoncurrentVersionTransitionToTerraform, true)(struct!.noncurrentVersionTransition),
    transitions: cdktf.listMapper(ossBucketLifecycleRuleTransitionsToTerraform, true)(struct!.transitions),
  }
}


export function ossBucketLifecycleRuleToHclTerraform(struct?: OssBucketLifecycleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    abort_multipart_upload: {
      value: cdktf.listMapperHcl(ossBucketLifecycleRuleAbortMultipartUploadToHclTerraform, true)(struct!.abortMultipartUpload),
      isBlock: true,
      type: "set",
      storageClassType: "OssBucketLifecycleRuleAbortMultipartUploadList",
    },
    expiration: {
      value: cdktf.listMapperHcl(ossBucketLifecycleRuleExpirationToHclTerraform, true)(struct!.expiration),
      isBlock: true,
      type: "set",
      storageClassType: "OssBucketLifecycleRuleExpirationList",
    },
    filter: {
      value: ossBucketLifecycleRuleFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketLifecycleRuleFilterList",
    },
    noncurrent_version_expiration: {
      value: cdktf.listMapperHcl(ossBucketLifecycleRuleNoncurrentVersionExpirationToHclTerraform, true)(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "set",
      storageClassType: "OssBucketLifecycleRuleNoncurrentVersionExpirationList",
    },
    noncurrent_version_transition: {
      value: cdktf.listMapperHcl(ossBucketLifecycleRuleNoncurrentVersionTransitionToHclTerraform, true)(struct!.noncurrentVersionTransition),
      isBlock: true,
      type: "set",
      storageClassType: "OssBucketLifecycleRuleNoncurrentVersionTransitionList",
    },
    transitions: {
      value: cdktf.listMapperHcl(ossBucketLifecycleRuleTransitionsToHclTerraform, true)(struct!.transitions),
      isBlock: true,
      type: "set",
      storageClassType: "OssBucketLifecycleRuleTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLifecycleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OssBucketLifecycleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._abortMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortMultipartUpload = this._abortMultipartUpload?.internalValue;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
    }
    if (this._noncurrentVersionTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
    }
    if (this._transitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitions = this._transitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLifecycleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._tags = undefined;
      this._abortMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionTransition.internalValue = undefined;
      this._transitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._id = value.id;
      this._prefix = value.prefix;
      this._tags = value.tags;
      this._abortMultipartUpload.internalValue = value.abortMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
      this._transitions.internalValue = value.transitions;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // abort_multipart_upload - computed: false, optional: true, required: false
  private _abortMultipartUpload = new OssBucketLifecycleRuleAbortMultipartUploadList(this, "abort_multipart_upload", true);
  public get abortMultipartUpload() {
    return this._abortMultipartUpload;
  }
  public putAbortMultipartUpload(value: OssBucketLifecycleRuleAbortMultipartUpload[] | cdktf.IResolvable) {
    this._abortMultipartUpload.internalValue = value;
  }
  public resetAbortMultipartUpload() {
    this._abortMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortMultipartUploadInput() {
    return this._abortMultipartUpload.internalValue;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new OssBucketLifecycleRuleExpirationList(this, "expiration", true);
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: OssBucketLifecycleRuleExpiration[] | cdktf.IResolvable) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new OssBucketLifecycleRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: OssBucketLifecycleRuleFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // noncurrent_version_expiration - computed: false, optional: true, required: false
  private _noncurrentVersionExpiration = new OssBucketLifecycleRuleNoncurrentVersionExpirationList(this, "noncurrent_version_expiration", true);
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: OssBucketLifecycleRuleNoncurrentVersionExpiration[] | cdktf.IResolvable) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }

  // noncurrent_version_transition - computed: false, optional: true, required: false
  private _noncurrentVersionTransition = new OssBucketLifecycleRuleNoncurrentVersionTransitionList(this, "noncurrent_version_transition", true);
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }
  public putNoncurrentVersionTransition(value: OssBucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable) {
    this._noncurrentVersionTransition.internalValue = value;
  }
  public resetNoncurrentVersionTransition() {
    this._noncurrentVersionTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionInput() {
    return this._noncurrentVersionTransition.internalValue;
  }

  // transitions - computed: false, optional: true, required: false
  private _transitions = new OssBucketLifecycleRuleTransitionsList(this, "transitions", true);
  public get transitions() {
    return this._transitions;
  }
  public putTransitions(value: OssBucketLifecycleRuleTransitions[] | cdktf.IResolvable) {
    this._transitions.internalValue = value;
  }
  public resetTransitions() {
    this._transitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionsInput() {
    return this._transitions.internalValue;
  }
}

export class OssBucketLifecycleRuleList extends cdktf.ComplexList {
  public internalValue? : OssBucketLifecycleRule[] | cdktf.IResolvable

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
  public get(index: number): OssBucketLifecycleRuleOutputReference {
    return new OssBucketLifecycleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OssBucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#target_bucket OssBucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#target_prefix OssBucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

export function ossBucketLoggingToTerraform(struct?: OssBucketLoggingOutputReference | OssBucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}


export function ossBucketLoggingToHclTerraform(struct?: OssBucketLoggingOutputReference | OssBucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_bucket: {
      value: cdktf.stringToHclTerraform(struct!.targetBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_prefix: {
      value: cdktf.stringToHclTerraform(struct!.targetPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBucket = this._targetBucket;
    }
    if (this._targetPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPrefix = this._targetPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetBucket = undefined;
      this._targetPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetBucket = value.targetBucket;
      this._targetPrefix = value.targetPrefix;
    }
  }

  // target_bucket - computed: false, optional: false, required: true
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_prefix - computed: false, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }
}
export interface OssBucketRefererConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#allow_empty OssBucket#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#referers OssBucket#referers}
  */
  readonly referers: string[];
}

export function ossBucketRefererConfigToTerraform(struct?: OssBucketRefererConfigOutputReference | OssBucketRefererConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    referers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.referers),
  }
}


export function ossBucketRefererConfigToHclTerraform(struct?: OssBucketRefererConfigOutputReference | OssBucketRefererConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.referers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketRefererConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketRefererConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._referers !== undefined) {
      hasAnyValues = true;
      internalValueResult.referers = this._referers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketRefererConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._referers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._referers = value.referers;
    }
  }

  // allow_empty - computed: true, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // referers - computed: false, optional: false, required: true
  private _referers?: string[]; 
  public get referers() {
    return this.getListAttribute('referers');
  }
  public set referers(value: string[]) {
    this._referers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referersInput() {
    return this._referers;
  }
}
export interface OssBucketServerSideEncryptionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#kms_data_encryption OssBucket#kms_data_encryption}
  */
  readonly kmsDataEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#kms_master_key_id OssBucket#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#sse_algorithm OssBucket#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

export function ossBucketServerSideEncryptionRuleToTerraform(struct?: OssBucketServerSideEncryptionRuleOutputReference | OssBucketServerSideEncryptionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_data_encryption: cdktf.stringToTerraform(struct!.kmsDataEncryption),
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function ossBucketServerSideEncryptionRuleToHclTerraform(struct?: OssBucketServerSideEncryptionRuleOutputReference | OssBucketServerSideEncryptionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_data_encryption: {
      value: cdktf.stringToHclTerraform(struct!.kmsDataEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketServerSideEncryptionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketServerSideEncryptionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsDataEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsDataEncryption = this._kmsDataEncryption;
    }
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketServerSideEncryptionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsDataEncryption = undefined;
      this._kmsMasterKeyId = undefined;
      this._sseAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsDataEncryption = value.kmsDataEncryption;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_data_encryption - computed: false, optional: true, required: false
  private _kmsDataEncryption?: string; 
  public get kmsDataEncryption() {
    return this.getStringAttribute('kms_data_encryption');
  }
  public set kmsDataEncryption(value: string) {
    this._kmsDataEncryption = value;
  }
  public resetKmsDataEncryption() {
    this._kmsDataEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsDataEncryptionInput() {
    return this._kmsDataEncryption;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_algorithm - computed: false, optional: false, required: true
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface OssBucketTransferAcceleration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#enabled OssBucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ossBucketTransferAccelerationToTerraform(struct?: OssBucketTransferAccelerationOutputReference | OssBucketTransferAcceleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ossBucketTransferAccelerationToHclTerraform(struct?: OssBucketTransferAccelerationOutputReference | OssBucketTransferAcceleration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketTransferAccelerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketTransferAcceleration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketTransferAcceleration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OssBucketVersioning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#status OssBucket#status}
  */
  readonly status: string;
}

export function ossBucketVersioningToTerraform(struct?: OssBucketVersioningOutputReference | OssBucketVersioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function ossBucketVersioningToHclTerraform(struct?: OssBucketVersioningOutputReference | OssBucketVersioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OssBucketVersioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketVersioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketVersioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
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
export interface OssBucketWebsite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#error_document OssBucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#index_document OssBucket#index_document}
  */
  readonly indexDocument: string;
}

export function ossBucketWebsiteToTerraform(struct?: OssBucketWebsiteOutputReference | OssBucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
  }
}


export function ossBucketWebsiteToHclTerraform(struct?: OssBucketWebsiteOutputReference | OssBucketWebsite): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketWebsite | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorDocument = undefined;
      this._indexDocument = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorDocument = value.errorDocument;
      this._indexDocument = value.indexDocument;
    }
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

  // index_document - computed: false, optional: false, required: true
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket alicloud_oss_bucket}
*/
export class OssBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oss_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucket to import
  * @param importFromId The id of the existing OssBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oss_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket alicloud_oss_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OssBucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oss_bucket',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._lifecycleRuleAllowSameActionOverlap = config.lifecycleRuleAllowSameActionOverlap;
    this._loggingIsenable = config.loggingIsenable;
    this._policy = config.policy;
    this._redundancyType = config.redundancyType;
    this._resourceGroupId = config.resourceGroupId;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._accessMonitor.internalValue = config.accessMonitor;
    this._corsRule.internalValue = config.corsRule;
    this._lifecycleRule.internalValue = config.lifecycleRule;
    this._logging.internalValue = config.logging;
    this._refererConfig.internalValue = config.refererConfig;
    this._serverSideEncryptionRule.internalValue = config.serverSideEncryptionRule;
    this._transferAcceleration.internalValue = config.transferAcceleration;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
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

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // extranet_endpoint - computed: true, optional: false, required: false
  public get extranetEndpoint() {
    return this.getStringAttribute('extranet_endpoint');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // intranet_endpoint - computed: true, optional: false, required: false
  public get intranetEndpoint() {
    return this.getStringAttribute('intranet_endpoint');
  }

  // lifecycle_rule_allow_same_action_overlap - computed: false, optional: true, required: false
  private _lifecycleRuleAllowSameActionOverlap?: boolean | cdktf.IResolvable; 
  public get lifecycleRuleAllowSameActionOverlap() {
    return this.getBooleanAttribute('lifecycle_rule_allow_same_action_overlap');
  }
  public set lifecycleRuleAllowSameActionOverlap(value: boolean | cdktf.IResolvable) {
    this._lifecycleRuleAllowSameActionOverlap = value;
  }
  public resetLifecycleRuleAllowSameActionOverlap() {
    this._lifecycleRuleAllowSameActionOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleAllowSameActionOverlapInput() {
    return this._lifecycleRuleAllowSameActionOverlap;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // logging_isenable - computed: false, optional: true, required: false
  private _loggingIsenable?: boolean | cdktf.IResolvable; 
  public get loggingIsenable() {
    return this.getBooleanAttribute('logging_isenable');
  }
  public set loggingIsenable(value: boolean | cdktf.IResolvable) {
    this._loggingIsenable = value;
  }
  public resetLoggingIsenable() {
    this._loggingIsenable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingIsenableInput() {
    return this._loggingIsenable;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // redundancy_type - computed: false, optional: true, required: false
  private _redundancyType?: string; 
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }
  public set redundancyType(value: string) {
    this._redundancyType = value;
  }
  public resetRedundancyType() {
    this._redundancyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyTypeInput() {
    return this._redundancyType;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
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

  // access_monitor - computed: false, optional: true, required: false
  private _accessMonitor = new OssBucketAccessMonitorOutputReference(this, "access_monitor");
  public get accessMonitor() {
    return this._accessMonitor;
  }
  public putAccessMonitor(value: OssBucketAccessMonitor) {
    this._accessMonitor.internalValue = value;
  }
  public resetAccessMonitor() {
    this._accessMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMonitorInput() {
    return this._accessMonitor.internalValue;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new OssBucketCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: OssBucketCorsRule[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule = new OssBucketLifecycleRuleList(this, "lifecycle_rule", false);
  public get lifecycleRule() {
    return this._lifecycleRule;
  }
  public putLifecycleRule(value: OssBucketLifecycleRule[] | cdktf.IResolvable) {
    this._lifecycleRule.internalValue = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new OssBucketLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: OssBucketLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // referer_config - computed: false, optional: true, required: false
  private _refererConfig = new OssBucketRefererConfigOutputReference(this, "referer_config");
  public get refererConfig() {
    return this._refererConfig;
  }
  public putRefererConfig(value: OssBucketRefererConfig) {
    this._refererConfig.internalValue = value;
  }
  public resetRefererConfig() {
    this._refererConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererConfigInput() {
    return this._refererConfig.internalValue;
  }

  // server_side_encryption_rule - computed: false, optional: true, required: false
  private _serverSideEncryptionRule = new OssBucketServerSideEncryptionRuleOutputReference(this, "server_side_encryption_rule");
  public get serverSideEncryptionRule() {
    return this._serverSideEncryptionRule;
  }
  public putServerSideEncryptionRule(value: OssBucketServerSideEncryptionRule) {
    this._serverSideEncryptionRule.internalValue = value;
  }
  public resetServerSideEncryptionRule() {
    this._serverSideEncryptionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionRuleInput() {
    return this._serverSideEncryptionRule.internalValue;
  }

  // transfer_acceleration - computed: false, optional: true, required: false
  private _transferAcceleration = new OssBucketTransferAccelerationOutputReference(this, "transfer_acceleration");
  public get transferAcceleration() {
    return this._transferAcceleration;
  }
  public putTransferAcceleration(value: OssBucketTransferAcceleration) {
    this._transferAcceleration.internalValue = value;
  }
  public resetTransferAcceleration() {
    this._transferAcceleration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAccelerationInput() {
    return this._transferAcceleration.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new OssBucketVersioningOutputReference(this, "versioning");
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: OssBucketVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new OssBucketWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: OssBucketWebsite) {
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
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_rule_allow_same_action_overlap: cdktf.booleanToTerraform(this._lifecycleRuleAllowSameActionOverlap),
      logging_isenable: cdktf.booleanToTerraform(this._loggingIsenable),
      policy: cdktf.stringToTerraform(this._policy),
      redundancy_type: cdktf.stringToTerraform(this._redundancyType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_monitor: ossBucketAccessMonitorToTerraform(this._accessMonitor.internalValue),
      cors_rule: cdktf.listMapper(ossBucketCorsRuleToTerraform, true)(this._corsRule.internalValue),
      lifecycle_rule: cdktf.listMapper(ossBucketLifecycleRuleToTerraform, true)(this._lifecycleRule.internalValue),
      logging: ossBucketLoggingToTerraform(this._logging.internalValue),
      referer_config: ossBucketRefererConfigToTerraform(this._refererConfig.internalValue),
      server_side_encryption_rule: ossBucketServerSideEncryptionRuleToTerraform(this._serverSideEncryptionRule.internalValue),
      transfer_acceleration: ossBucketTransferAccelerationToTerraform(this._transferAcceleration.internalValue),
      versioning: ossBucketVersioningToTerraform(this._versioning.internalValue),
      website: ossBucketWebsiteToTerraform(this._website.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
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
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      lifecycle_rule_allow_same_action_overlap: {
        value: cdktf.booleanToHclTerraform(this._lifecycleRuleAllowSameActionOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_isenable: {
        value: cdktf.booleanToHclTerraform(this._loggingIsenable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy_type: {
        value: cdktf.stringToHclTerraform(this._redundancyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
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
      access_monitor: {
        value: ossBucketAccessMonitorToHclTerraform(this._accessMonitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketAccessMonitorList",
      },
      cors_rule: {
        value: cdktf.listMapperHcl(ossBucketCorsRuleToHclTerraform, true)(this._corsRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketCorsRuleList",
      },
      lifecycle_rule: {
        value: cdktf.listMapperHcl(ossBucketLifecycleRuleToHclTerraform, true)(this._lifecycleRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketLifecycleRuleList",
      },
      logging: {
        value: ossBucketLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketLoggingList",
      },
      referer_config: {
        value: ossBucketRefererConfigToHclTerraform(this._refererConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketRefererConfigList",
      },
      server_side_encryption_rule: {
        value: ossBucketServerSideEncryptionRuleToHclTerraform(this._serverSideEncryptionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketServerSideEncryptionRuleList",
      },
      transfer_acceleration: {
        value: ossBucketTransferAccelerationToHclTerraform(this._transferAcceleration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketTransferAccelerationList",
      },
      versioning: {
        value: ossBucketVersioningToHclTerraform(this._versioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketVersioningList",
      },
      website: {
        value: ossBucketWebsiteToHclTerraform(this._website.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketWebsiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
