// https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket for which to configure the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#bucket BucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#rule BucketLifecycleConfiguration#rule}
  */
  readonly rule?: BucketLifecycleConfigurationRule[] | cdktf.IResolvable;
}
export interface BucketLifecycleConfigurationRuleExpiration {
  /**
  * The date of the expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#date BucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * The number of days until expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#days BucketLifecycleConfiguration#days}
  */
  readonly days?: number;
}

export function bucketLifecycleConfigurationRuleExpirationToTerraform(struct?: BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function bucketLifecycleConfigurationRuleExpirationToHclTerraform(struct?: BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
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
}
export interface BucketLifecycleConfigurationRuleFilterTag {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#key BucketLifecycleConfiguration#key}
  */
  readonly key: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#value BucketLifecycleConfiguration#value}
  */
  readonly value: string;
}

export function bucketLifecycleConfigurationRuleFilterTagToTerraform(struct?: BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct?: BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any {
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

export class BucketLifecycleConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined) {
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
export interface BucketLifecycleConfigurationRuleFilterAnd {
  /**
  * The minimum object size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#object_size_larger_than BucketLifecycleConfiguration#object_size_larger_than}
  */
  readonly objectSizeLargerThan?: number;
  /**
  * The maximum object size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#object_size_less_than BucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * The prefix of the object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#prefix BucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * The tags of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#tags BucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function bucketLifecycleConfigurationRuleFilterAndToTerraform(struct?: BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_larger_than: cdktf.numberToTerraform(struct!.objectSizeLargerThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function bucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct?: BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_size_larger_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeLargerThan),
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

export class BucketLifecycleConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeLargerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLargerThan = this._objectSizeLargerThan;
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

  public set internalValue(value: BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeLargerThan = undefined;
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
      this._objectSizeLargerThan = value.objectSizeLargerThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
  }

  // object_size_larger_than - computed: false, optional: true, required: false
  private _objectSizeLargerThan?: number; 
  public get objectSizeLargerThan() {
    return this.getNumberAttribute('object_size_larger_than');
  }
  public set objectSizeLargerThan(value: number) {
    this._objectSizeLargerThan = value;
  }
  public resetObjectSizeLargerThan() {
    this._objectSizeLargerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLargerThanInput() {
    return this._objectSizeLargerThan;
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
export interface BucketLifecycleConfigurationRuleFilter {
  /**
  * The minimum object size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#object_size_larger_than BucketLifecycleConfiguration#object_size_larger_than}
  */
  readonly objectSizeLargerThan?: number;
  /**
  * The maximum object size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#object_size_less_than BucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * The prefix of the object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#prefix BucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * The tag of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#tag BucketLifecycleConfiguration#tag}
  */
  readonly tag?: BucketLifecycleConfigurationRuleFilterTag;
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#and BucketLifecycleConfiguration#and}
  */
  readonly and?: BucketLifecycleConfigurationRuleFilterAnd;
}

export function bucketLifecycleConfigurationRuleFilterToTerraform(struct?: BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_larger_than: cdktf.numberToTerraform(struct!.objectSizeLargerThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: bucketLifecycleConfigurationRuleFilterTagToTerraform(struct!.tag),
    and: bucketLifecycleConfigurationRuleFilterAndToTerraform(struct!.and),
  }
}


export function bucketLifecycleConfigurationRuleFilterToHclTerraform(struct?: BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_size_larger_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeLargerThan),
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
    tag: {
      value: bucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "BucketLifecycleConfigurationRuleFilterTag",
    },
    and: {
      value: bucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "BucketLifecycleConfigurationRuleFilterAnd",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeLargerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLargerThan = this._objectSizeLargerThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeLargerThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
      this._and.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeLargerThan = value.objectSizeLargerThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
      this._and.internalValue = value.and;
    }
  }

  // object_size_larger_than - computed: false, optional: true, required: false
  private _objectSizeLargerThan?: number; 
  public get objectSizeLargerThan() {
    return this.getNumberAttribute('object_size_larger_than');
  }
  public set objectSizeLargerThan(value: number) {
    this._objectSizeLargerThan = value;
  }
  public resetObjectSizeLargerThan() {
    this._objectSizeLargerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLargerThanInput() {
    return this._objectSizeLargerThan;
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

  // tag - computed: false, optional: true, required: false
  private _tag = new BucketLifecycleConfigurationRuleFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: BucketLifecycleConfigurationRuleFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // and - computed: false, optional: true, required: false
  private _and = new BucketLifecycleConfigurationRuleFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: BucketLifecycleConfigurationRuleFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }
}
export interface BucketLifecycleConfigurationRuleNoncurrentVersionExpiration {
  /**
  * The number of newer noncurrent versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#newer_noncurrent_versions BucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * The number of days until expiration of the noncurrent versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#noncurrent_days BucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays?: number;
}

export function bucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct?: BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
  }
}


export function bucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct?: BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any {
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

export class BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined) {
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
export interface BucketLifecycleConfigurationRule {
  /**
  * The identifier of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#id BucketLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The status of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#status BucketLifecycleConfiguration#status}
  */
  readonly status?: string;
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#expiration BucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: BucketLifecycleConfigurationRuleExpiration;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#filter BucketLifecycleConfiguration#filter}
  */
  readonly filter?: BucketLifecycleConfigurationRuleFilter;
  /**
  * noncurrent_version_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#noncurrent_version_expiration BucketLifecycleConfiguration#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: BucketLifecycleConfigurationRuleNoncurrentVersionExpiration;
}

export function bucketLifecycleConfigurationRuleToTerraform(struct?: BucketLifecycleConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    expiration: bucketLifecycleConfigurationRuleExpirationToTerraform(struct!.expiration),
    filter: bucketLifecycleConfigurationRuleFilterToTerraform(struct!.filter),
    noncurrent_version_expiration: bucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
  }
}


export function bucketLifecycleConfigurationRuleToHclTerraform(struct?: BucketLifecycleConfigurationRule | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: bucketLifecycleConfigurationRuleExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "struct",
      storageClassType: "BucketLifecycleConfigurationRuleExpiration",
    },
    filter: {
      value: bucketLifecycleConfigurationRuleFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "BucketLifecycleConfigurationRuleFilter",
    },
    noncurrent_version_expiration: {
      value: bucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "struct",
      storageClassType: "BucketLifecycleConfigurationRuleNoncurrentVersionExpiration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketLifecycleConfigurationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketLifecycleConfigurationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._status = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._status = value.status;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // expiration - computed: false, optional: true, required: false
  private _expiration = new BucketLifecycleConfigurationRuleExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: BucketLifecycleConfigurationRuleExpiration) {
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
  private _filter = new BucketLifecycleConfigurationRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: BucketLifecycleConfigurationRuleFilter) {
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
  private _noncurrentVersionExpiration = new BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: BucketLifecycleConfigurationRuleNoncurrentVersionExpiration) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }
}

export class BucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
  public internalValue? : BucketLifecycleConfigurationRule[] | cdktf.IResolvable

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
  public get(index: number): BucketLifecycleConfigurationRuleOutputReference {
    return new BucketLifecycleConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration objsto_bucket_lifecycle_configuration}
*/
export class BucketLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "objsto_bucket_lifecycle_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BucketLifecycleConfiguration to import
  * @param importFromId The id of the existing BucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BucketLifecycleConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "objsto_bucket_lifecycle_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/objsto/0.2.0/docs/resources/bucket_lifecycle_configuration objsto_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'objsto_bucket_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'objsto',
        providerVersion: '0.2.0'
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
  private _rule = new BucketLifecycleConfigurationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: BucketLifecycleConfigurationRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(bucketLifecycleConfigurationRuleToTerraform, true)(this._rule.internalValue),
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
        value: cdktf.listMapperHcl(bucketLifecycleConfigurationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketLifecycleConfigurationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
