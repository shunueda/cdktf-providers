// https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IlmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#bucket IlmPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#id IlmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#rule IlmPolicy#rule}
  */
  readonly rule: IlmPolicyRule[] | cdktf.IResolvable;
}
export interface IlmPolicyRuleAbortIncompleteMultipartUpload {
  /**
  * Number of days after which incomplete multipart uploads should be aborted, in format 'Nd'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#days_after_initiation IlmPolicy#days_after_initiation}
  */
  readonly daysAfterInitiation: string;
}

export function ilmPolicyRuleAbortIncompleteMultipartUploadToTerraform(struct?: IlmPolicyRuleAbortIncompleteMultipartUploadOutputReference | IlmPolicyRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.stringToTerraform(struct!.daysAfterInitiation),
  }
}


export function ilmPolicyRuleAbortIncompleteMultipartUploadToHclTerraform(struct?: IlmPolicyRuleAbortIncompleteMultipartUploadOutputReference | IlmPolicyRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktf.stringToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IlmPolicyRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IlmPolicyRuleAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IlmPolicyRuleAbortIncompleteMultipartUpload | undefined) {
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
  private _daysAfterInitiation?: string; 
  public get daysAfterInitiation() {
    return this.getStringAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: string) {
    this._daysAfterInitiation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface IlmPolicyRuleNoncurrentExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#days IlmPolicy#days}
  */
  readonly days: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#newer_versions IlmPolicy#newer_versions}
  */
  readonly newerVersions?: number;
}

export function ilmPolicyRuleNoncurrentExpirationToTerraform(struct?: IlmPolicyRuleNoncurrentExpirationOutputReference | IlmPolicyRuleNoncurrentExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.stringToTerraform(struct!.days),
    newer_versions: cdktf.numberToTerraform(struct!.newerVersions),
  }
}


export function ilmPolicyRuleNoncurrentExpirationToHclTerraform(struct?: IlmPolicyRuleNoncurrentExpirationOutputReference | IlmPolicyRuleNoncurrentExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.stringToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newer_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IlmPolicyRuleNoncurrentExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IlmPolicyRuleNoncurrentExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._newerVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerVersions = this._newerVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IlmPolicyRuleNoncurrentExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._newerVersions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._newerVersions = value.newerVersions;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string; 
  public get days() {
    return this.getStringAttribute('days');
  }
  public set days(value: string) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // newer_versions - computed: false, optional: true, required: false
  private _newerVersions?: number; 
  public get newerVersions() {
    return this.getNumberAttribute('newer_versions');
  }
  public set newerVersions(value: number) {
    this._newerVersions = value;
  }
  public resetNewerVersions() {
    this._newerVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerVersionsInput() {
    return this._newerVersions;
  }
}
export interface IlmPolicyRuleNoncurrentTransition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#days IlmPolicy#days}
  */
  readonly days: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#newer_versions IlmPolicy#newer_versions}
  */
  readonly newerVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#storage_class IlmPolicy#storage_class}
  */
  readonly storageClass: string;
}

export function ilmPolicyRuleNoncurrentTransitionToTerraform(struct?: IlmPolicyRuleNoncurrentTransitionOutputReference | IlmPolicyRuleNoncurrentTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.stringToTerraform(struct!.days),
    newer_versions: cdktf.numberToTerraform(struct!.newerVersions),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function ilmPolicyRuleNoncurrentTransitionToHclTerraform(struct?: IlmPolicyRuleNoncurrentTransitionOutputReference | IlmPolicyRuleNoncurrentTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.stringToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newer_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerVersions),
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

export class IlmPolicyRuleNoncurrentTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IlmPolicyRuleNoncurrentTransition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._newerVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerVersions = this._newerVersions;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IlmPolicyRuleNoncurrentTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._newerVersions = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._newerVersions = value.newerVersions;
      this._storageClass = value.storageClass;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string; 
  public get days() {
    return this.getStringAttribute('days');
  }
  public set days(value: string) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // newer_versions - computed: false, optional: true, required: false
  private _newerVersions?: number; 
  public get newerVersions() {
    return this.getNumberAttribute('newer_versions');
  }
  public set newerVersions(value: number) {
    this._newerVersions = value;
  }
  public resetNewerVersions() {
    this._newerVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerVersionsInput() {
    return this._newerVersions;
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
export interface IlmPolicyRuleTransition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#date IlmPolicy#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#days IlmPolicy#days}
  */
  readonly days?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#storage_class IlmPolicy#storage_class}
  */
  readonly storageClass: string;
}

export function ilmPolicyRuleTransitionToTerraform(struct?: IlmPolicyRuleTransitionOutputReference | IlmPolicyRuleTransition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.stringToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function ilmPolicyRuleTransitionToHclTerraform(struct?: IlmPolicyRuleTransitionOutputReference | IlmPolicyRuleTransition): any {
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
      value: cdktf.stringToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IlmPolicyRuleTransitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IlmPolicyRuleTransition | undefined {
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

  public set internalValue(value: IlmPolicyRuleTransition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _days?: string; 
  public get days() {
    return this.getStringAttribute('days');
  }
  public set days(value: string) {
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
export interface IlmPolicyRule {
  /**
  * Value may be duration (5d), date (1970-01-01), or "DeleteMarker" to expire delete markers if `noncurrent_version_expiration_days` is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#expiration IlmPolicy#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#filter IlmPolicy#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#id IlmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Status of the rule. Can be either 'Enabled' or 'Disabled'. Defaults to 'Enabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#status IlmPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#tags IlmPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * abort_incomplete_multipart_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#abort_incomplete_multipart_upload IlmPolicy#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: IlmPolicyRuleAbortIncompleteMultipartUpload;
  /**
  * noncurrent_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#noncurrent_expiration IlmPolicy#noncurrent_expiration}
  */
  readonly noncurrentExpiration?: IlmPolicyRuleNoncurrentExpiration;
  /**
  * noncurrent_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#noncurrent_transition IlmPolicy#noncurrent_transition}
  */
  readonly noncurrentTransition?: IlmPolicyRuleNoncurrentTransition;
  /**
  * transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#transition IlmPolicy#transition}
  */
  readonly transition?: IlmPolicyRuleTransition;
}

export function ilmPolicyRuleToTerraform(struct?: IlmPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.stringToTerraform(struct!.expiration),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    abort_incomplete_multipart_upload: ilmPolicyRuleAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    noncurrent_expiration: ilmPolicyRuleNoncurrentExpirationToTerraform(struct!.noncurrentExpiration),
    noncurrent_transition: ilmPolicyRuleNoncurrentTransitionToTerraform(struct!.noncurrentTransition),
    transition: ilmPolicyRuleTransitionToTerraform(struct!.transition),
  }
}


export function ilmPolicyRuleToHclTerraform(struct?: IlmPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    abort_incomplete_multipart_upload: {
      value: ilmPolicyRuleAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "list",
      storageClassType: "IlmPolicyRuleAbortIncompleteMultipartUploadList",
    },
    noncurrent_expiration: {
      value: ilmPolicyRuleNoncurrentExpirationToHclTerraform(struct!.noncurrentExpiration),
      isBlock: true,
      type: "list",
      storageClassType: "IlmPolicyRuleNoncurrentExpirationList",
    },
    noncurrent_transition: {
      value: ilmPolicyRuleNoncurrentTransitionToHclTerraform(struct!.noncurrentTransition),
      isBlock: true,
      type: "list",
      storageClassType: "IlmPolicyRuleNoncurrentTransitionList",
    },
    transition: {
      value: ilmPolicyRuleTransitionToHclTerraform(struct!.transition),
      isBlock: true,
      type: "list",
      storageClassType: "IlmPolicyRuleTransitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IlmPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IlmPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._noncurrentExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentExpiration = this._noncurrentExpiration?.internalValue;
    }
    if (this._noncurrentTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentTransition = this._noncurrentTransition?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IlmPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._status = undefined;
      this._tags = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._noncurrentExpiration.internalValue = undefined;
      this._noncurrentTransition.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._filter = value.filter;
      this._id = value.id;
      this._status = value.status;
      this._tags = value.tags;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._noncurrentExpiration.internalValue = value.noncurrentExpiration;
      this._noncurrentTransition.internalValue = value.noncurrentTransition;
      this._transition.internalValue = value.transition;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new IlmPolicyRuleAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: IlmPolicyRuleAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // noncurrent_expiration - computed: false, optional: true, required: false
  private _noncurrentExpiration = new IlmPolicyRuleNoncurrentExpirationOutputReference(this, "noncurrent_expiration");
  public get noncurrentExpiration() {
    return this._noncurrentExpiration;
  }
  public putNoncurrentExpiration(value: IlmPolicyRuleNoncurrentExpiration) {
    this._noncurrentExpiration.internalValue = value;
  }
  public resetNoncurrentExpiration() {
    this._noncurrentExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentExpirationInput() {
    return this._noncurrentExpiration.internalValue;
  }

  // noncurrent_transition - computed: false, optional: true, required: false
  private _noncurrentTransition = new IlmPolicyRuleNoncurrentTransitionOutputReference(this, "noncurrent_transition");
  public get noncurrentTransition() {
    return this._noncurrentTransition;
  }
  public putNoncurrentTransition(value: IlmPolicyRuleNoncurrentTransition) {
    this._noncurrentTransition.internalValue = value;
  }
  public resetNoncurrentTransition() {
    this._noncurrentTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentTransitionInput() {
    return this._noncurrentTransition.internalValue;
  }

  // transition - computed: false, optional: true, required: false
  private _transition = new IlmPolicyRuleTransitionOutputReference(this, "transition");
  public get transition() {
    return this._transition;
  }
  public putTransition(value: IlmPolicyRuleTransition) {
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

export class IlmPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : IlmPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): IlmPolicyRuleOutputReference {
    return new IlmPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy minio_ilm_policy}
*/
export class IlmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_ilm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IlmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IlmPolicy to import
  * @param importFromId The id of the existing IlmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IlmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_ilm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.4/docs/resources/ilm_policy minio_ilm_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IlmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IlmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_ilm_policy',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.4',
        providerVersionConstraint: '3.11.4'
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

  // rule - computed: false, optional: false, required: true
  private _rule = new IlmPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: IlmPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(ilmPolicyRuleToTerraform, true)(this._rule.internalValue),
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
      rule: {
        value: cdktf.listMapperHcl(ilmPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IlmPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
