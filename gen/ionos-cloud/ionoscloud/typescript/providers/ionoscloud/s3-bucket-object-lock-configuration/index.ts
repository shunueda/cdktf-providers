// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketObjectLockConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Specifies whether Object Lock is enabled for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfiguration#object_lock_enabled}
  */
  readonly objectLockEnabled?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfiguration#rule}
  */
  readonly rule?: S3BucketObjectLockConfigurationRule;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfiguration#years}
  */
  readonly years?: number;
}

export function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    mode: cdktf.stringToTerraform(struct!.mode),
    years: cdktf.numberToTerraform(struct!.years),
  }
}


export function s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    years: {
      value: cdktf.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._mode = undefined;
      this._years = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._mode = value.mode;
      this._years = value.years;
    }
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

  // years - computed: false, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface S3BucketObjectLockConfigurationRule {
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfiguration#default_retention}
  */
  readonly defaultRetention?: S3BucketObjectLockConfigurationRuleDefaultRetention;
}

export function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_retention: s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct!.defaultRetention),
  }
}


export function s3BucketObjectLockConfigurationRuleToHclTerraform(struct?: S3BucketObjectLockConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_retention: {
      value: s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketObjectLockConfigurationRuleDefaultRetention",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = value.defaultRetention;
    }
  }

  // default_retention - computed: false, optional: true, required: false
  private _defaultRetention = new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration ionoscloud_s3_bucket_object_lock_configuration}
*/
export class S3BucketObjectLockConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_s3_bucket_object_lock_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketObjectLockConfiguration to import
  * @param importFromId The id of the existing S3BucketObjectLockConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketObjectLockConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_s3_bucket_object_lock_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/s3_bucket_object_lock_configuration ionoscloud_s3_bucket_object_lock_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketObjectLockConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketObjectLockConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_s3_bucket_object_lock_configuration',
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
    this._objectLockEnabled = config.objectLockEnabled;
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

  // object_lock_enabled - computed: true, optional: true, required: false
  private _objectLockEnabled?: string; 
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: string) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new S3BucketObjectLockConfigurationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketObjectLockConfigurationRule) {
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
      object_lock_enabled: cdktf.stringToTerraform(this._objectLockEnabled),
      rule: s3BucketObjectLockConfigurationRuleToTerraform(this._rule.internalValue),
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
      object_lock_enabled: {
        value: cdktf.stringToHclTerraform(this._objectLockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: s3BucketObjectLockConfigurationRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketObjectLockConfigurationRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
