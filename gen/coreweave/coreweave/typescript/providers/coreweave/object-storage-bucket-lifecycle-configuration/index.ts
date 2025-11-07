// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bucket to apply lifecycle configuration to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#bucket ObjectStorageBucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#rule ObjectStorageBucketLifecycleConfiguration#rule}
  */
  readonly rule?: ObjectStorageBucketLifecycleConfigurationRule[] | cdktf.IResolvable;
}
export interface ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  /**
  * Days after initiation to abort multipart uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#days_after_initiation ObjectStorageBucketLifecycleConfiguration#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function objectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable): any {
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

export class ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: true, required: false
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface ObjectStorageBucketLifecycleConfigurationRuleExpiration {
  /**
  * ISO8601 date when objects expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#date ObjectStorageBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Number of days after object creation for expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#days ObjectStorageBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Whether to remove expired delete markers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#expired_object_delete_marker ObjectStorageBucketLifecycleConfiguration#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function objectStorageBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleExpirationToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any {
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

export class ObjectStorageBucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined {
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
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._date = value.date;
      this._days = value.days;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
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
export interface ObjectStorageBucketLifecycleConfigurationRuleFilterAnd {
  /**
  * Minimum object size (in bytes) to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#object_size_greater_than ObjectStorageBucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Maximum object size (in bytes) to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#object_size_less_than ObjectStorageBucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Prefix identifying one or more objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#prefix ObjectStorageBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Map for specifying tag keys and values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#tags ObjectStorageBucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function objectStorageBucketLifecycleConfigurationRuleFilterAndToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketLifecycleConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tags = value.tags;
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
}
export interface ObjectStorageBucketLifecycleConfigurationRuleFilterTag {
  /**
  * Tag key filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#key ObjectStorageBucketLifecycleConfiguration#key}
  */
  readonly key?: string;
  /**
  * Tag value filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#value ObjectStorageBucketLifecycleConfiguration#value}
  */
  readonly value?: string;
}

export function objectStorageBucketLifecycleConfigurationRuleFilterTagToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any {
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

export class ObjectStorageBucketLifecycleConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined) {
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
export interface ObjectStorageBucketLifecycleConfigurationRuleFilter {
  /**
  * Minimum object size (in bytes) to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#object_size_greater_than ObjectStorageBucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Maximum object size (in bytes) to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#object_size_less_than ObjectStorageBucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Prefix filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#prefix ObjectStorageBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#and ObjectStorageBucketLifecycleConfiguration#and}
  */
  readonly and?: ObjectStorageBucketLifecycleConfigurationRuleFilterAnd;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#tag ObjectStorageBucketLifecycleConfiguration#tag}
  */
  readonly tag?: ObjectStorageBucketLifecycleConfigurationRuleFilterTag;
}

export function objectStorageBucketLifecycleConfigurationRuleFilterToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    and: objectStorageBucketLifecycleConfigurationRuleFilterAndToTerraform(struct!.and),
    tag: objectStorageBucketLifecycleConfigurationRuleFilterTagToTerraform(struct!.tag),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleFilterToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    and: {
      value: objectStorageBucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleFilterAnd",
    },
    tag: {
      value: objectStorageBucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._and.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._and.internalValue = value.and;
      this._tag.internalValue = value.tag;
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

  // and - computed: false, optional: true, required: false
  private _and = new ObjectStorageBucketLifecycleConfigurationRuleFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: ObjectStorageBucketLifecycleConfigurationRuleFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ObjectStorageBucketLifecycleConfigurationRuleFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: ObjectStorageBucketLifecycleConfigurationRuleFilterTag) {
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
export interface ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration {
  /**
  * Number of noncurrent versions to retain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#newer_noncurrent_versions ObjectStorageBucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Days after becoming noncurrent before deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#noncurrent_days ObjectStorageBucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays?: number;
}

export function objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktf.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }
}
export interface ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition {
  /**
  * Number of noncurrent versions to retain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#newer_noncurrent_versions ObjectStorageBucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Number of days after object becomes noncurrent before the transition may occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#noncurrent_days ObjectStorageBucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays: number;
  /**
  * Storage class to transition noncurrent objects to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#storage_class ObjectStorageBucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}

export function objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktf.numberToHclTerraform(struct!.noncurrentDays),
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

export class ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
      this._storageClass = value.storageClass;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: false, required: true
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
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

export class ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
  public internalValue? : ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable

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
  public get(index: number): ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference {
    return new ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectStorageBucketLifecycleConfigurationRuleTransition {
  /**
  * ISO8601 date when objects transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#date ObjectStorageBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Number of days after object creation for transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#days ObjectStorageBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Storage class to transition objects to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#storage_class ObjectStorageBucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}

export function objectStorageBucketLifecycleConfigurationRuleTransitionToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleTransition | cdktf.IResolvable): any {
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


export function objectStorageBucketLifecycleConfigurationRuleTransitionToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRuleTransition | cdktf.IResolvable): any {
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

export class ObjectStorageBucketLifecycleConfigurationRuleTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRuleTransition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRuleTransition | cdktf.IResolvable | undefined) {
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

export class ObjectStorageBucketLifecycleConfigurationRuleTransitionList extends cdktf.ComplexList {
  public internalValue? : ObjectStorageBucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable

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
  public get(index: number): ObjectStorageBucketLifecycleConfigurationRuleTransitionOutputReference {
    return new ObjectStorageBucketLifecycleConfigurationRuleTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectStorageBucketLifecycleConfigurationRule {
  /**
  * Unique identifier for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#id ObjectStorageBucketLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object key prefix to which the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#prefix ObjectStorageBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Rule status: Enabled or Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#status ObjectStorageBucketLifecycleConfiguration#status}
  */
  readonly status: string;
  /**
  * abort_incomplete_multipart_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#abort_incomplete_multipart_upload ObjectStorageBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#expiration ObjectStorageBucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: ObjectStorageBucketLifecycleConfigurationRuleExpiration;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#filter ObjectStorageBucketLifecycleConfiguration#filter}
  */
  readonly filter?: ObjectStorageBucketLifecycleConfigurationRuleFilter;
  /**
  * noncurrent_version_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#noncurrent_version_expiration ObjectStorageBucketLifecycleConfiguration#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration;
  /**
  * noncurrent_version_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#noncurrent_version_transition ObjectStorageBucketLifecycleConfiguration#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
  /**
  * transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#transition ObjectStorageBucketLifecycleConfiguration#transition}
  */
  readonly transition?: ObjectStorageBucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable;
}

export function objectStorageBucketLifecycleConfigurationRuleToTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    status: cdktf.stringToTerraform(struct!.status),
    abort_incomplete_multipart_upload: objectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration: objectStorageBucketLifecycleConfigurationRuleExpirationToTerraform(struct!.expiration),
    filter: objectStorageBucketLifecycleConfigurationRuleFilterToTerraform(struct!.filter),
    noncurrent_version_expiration: objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform, true)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(objectStorageBucketLifecycleConfigurationRuleTransitionToTerraform, true)(struct!.transition),
  }
}


export function objectStorageBucketLifecycleConfigurationRuleToHclTerraform(struct?: ObjectStorageBucketLifecycleConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    abort_incomplete_multipart_upload: {
      value: objectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload",
    },
    expiration: {
      value: objectStorageBucketLifecycleConfigurationRuleExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleExpiration",
    },
    filter: {
      value: objectStorageBucketLifecycleConfigurationRuleFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleFilter",
    },
    noncurrent_version_expiration: {
      value: objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "struct",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration",
    },
    noncurrent_version_transition: {
      value: cdktf.listMapperHcl(objectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform, true)(struct!.noncurrentVersionTransition),
      isBlock: true,
      type: "set",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionList",
    },
    transition: {
      value: cdktf.listMapperHcl(objectStorageBucketLifecycleConfigurationRuleTransitionToHclTerraform, true)(struct!.transition),
      isBlock: true,
      type: "set",
      storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleTransitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStorageBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
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
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._status = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionTransition.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._status = value.status;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
      this._transition.internalValue = value.transition;
    }
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

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: ObjectStorageBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload) {
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
  private _expiration = new ObjectStorageBucketLifecycleConfigurationRuleExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: ObjectStorageBucketLifecycleConfigurationRuleExpiration) {
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
  private _filter = new ObjectStorageBucketLifecycleConfigurationRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ObjectStorageBucketLifecycleConfigurationRuleFilter) {
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
  private _noncurrentVersionExpiration = new ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionExpiration) {
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
  private _noncurrentVersionTransition = new ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransitionList(this, "noncurrent_version_transition", true);
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }
  public putNoncurrentVersionTransition(value: ObjectStorageBucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable) {
    this._noncurrentVersionTransition.internalValue = value;
  }
  public resetNoncurrentVersionTransition() {
    this._noncurrentVersionTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionInput() {
    return this._noncurrentVersionTransition.internalValue;
  }

  // transition - computed: false, optional: true, required: false
  private _transition = new ObjectStorageBucketLifecycleConfigurationRuleTransitionList(this, "transition", true);
  public get transition() {
    return this._transition;
  }
  public putTransition(value: ObjectStorageBucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable) {
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

export class ObjectStorageBucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectStorageBucketLifecycleConfigurationRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectStorageBucketLifecycleConfigurationRuleOutputReference {
    return new ObjectStorageBucketLifecycleConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration coreweave_object_storage_bucket_lifecycle_configuration}
*/
export class ObjectStorageBucketLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_object_storage_bucket_lifecycle_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageBucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageBucketLifecycleConfiguration to import
  * @param importFromId The id of the existing ObjectStorageBucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageBucketLifecycleConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_object_storage_bucket_lifecycle_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_lifecycle_configuration coreweave_object_storage_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageBucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageBucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_object_storage_bucket_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0'
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
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new ObjectStorageBucketLifecycleConfigurationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObjectStorageBucketLifecycleConfigurationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      rule: cdktf.listMapper(objectStorageBucketLifecycleConfigurationRuleToTerraform, true)(this._rule.internalValue),
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
      rule: {
        value: cdktf.listMapperHcl(objectStorageBucketLifecycleConfigurationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectStorageBucketLifecycleConfigurationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
