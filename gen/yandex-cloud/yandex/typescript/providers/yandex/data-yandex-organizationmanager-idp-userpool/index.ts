// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexOrganizationmanagerIdpUserpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the userpool to return.
  *  To get the userpool ID, make a [UserpoolService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#id DataYandexOrganizationmanagerIdpUserpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#timeouts DataYandexOrganizationmanagerIdpUserpool#timeouts}
  */
  readonly timeouts?: DataYandexOrganizationmanagerIdpUserpoolTimeouts;
  /**
  * ID of the userpool to return.
  *  To get the userpool ID, make a [UserpoolService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#userpool_id DataYandexOrganizationmanagerIdpUserpool#userpool_id}
  */
  readonly userpoolId?: string;
}
export interface DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicy {
}

export function dataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicyToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicyToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }

  // block - computed: true, optional: false, required: false
  public get block() {
    return this.getStringAttribute('block');
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.getStringAttribute('window');
  }
}
export interface DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicy {
}

export function dataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicyToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicyToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_days_count - computed: true, optional: false, required: false
  public get maxDaysCount() {
    return this.getNumberAttribute('max_days_count');
  }

  // min_days_count - computed: true, optional: false, required: false
  public get minDaysCount() {
    return this.getNumberAttribute('min_days_count');
  }
}
export interface DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettings {
}

export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettingsToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettingsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // one - computed: true, optional: false, required: false
  public get one() {
    return this.getNumberAttribute('one');
  }

  // three - computed: true, optional: false, required: false
  public get three() {
    return this.getNumberAttribute('three');
  }

  // two - computed: true, optional: false, required: false
  public get two() {
    return this.getNumberAttribute('two');
  }
}
export interface DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClasses {
}

export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClassesToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClassesToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digits - computed: true, optional: false, required: false
  public get digits() {
    return this.getBooleanAttribute('digits');
  }

  // lowers - computed: true, optional: false, required: false
  public get lowers() {
    return this.getBooleanAttribute('lowers');
  }

  // specials - computed: true, optional: false, required: false
  public get specials() {
    return this.getBooleanAttribute('specials');
  }

  // uppers - computed: true, optional: false, required: false
  public get uppers() {
    return this.getBooleanAttribute('uppers');
  }
}
export interface DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicy {
}

export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_similar - computed: true, optional: false, required: false
  public get allowSimilar() {
    return this.getBooleanAttribute('allow_similar');
  }

  // match_length - computed: true, optional: false, required: false
  public get matchLength() {
    return this.getNumberAttribute('match_length');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // min_length_by_class_settings - computed: true, optional: false, required: false
  private _minLengthByClassSettings = new DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyMinLengthByClassSettingsOutputReference(this, "min_length_by_class_settings");
  public get minLengthByClassSettings() {
    return this._minLengthByClassSettings;
  }

  // required_classes - computed: true, optional: false, required: false
  private _requiredClasses = new DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyRequiredClassesOutputReference(this, "required_classes");
  public get requiredClasses() {
    return this._requiredClasses;
  }
}
export interface DataYandexOrganizationmanagerIdpUserpoolTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#create DataYandexOrganizationmanagerIdpUserpool#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#delete DataYandexOrganizationmanagerIdpUserpool#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#read DataYandexOrganizationmanagerIdpUserpool#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#update DataYandexOrganizationmanagerIdpUserpool#update}
  */
  readonly update?: string;
}

export function dataYandexOrganizationmanagerIdpUserpoolTimeoutsToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolTimeoutsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class DataYandexOrganizationmanagerIdpUserpoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface DataYandexOrganizationmanagerIdpUserpoolUserSettings {
}

export function dataYandexOrganizationmanagerIdpUserpoolUserSettingsToTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexOrganizationmanagerIdpUserpoolUserSettingsToHclTerraform(struct?: DataYandexOrganizationmanagerIdpUserpoolUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexOrganizationmanagerIdpUserpoolUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexOrganizationmanagerIdpUserpoolUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerIdpUserpoolUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_edit_self_contacts - computed: true, optional: false, required: false
  public get allowEditSelfContacts() {
    return this.getBooleanAttribute('allow_edit_self_contacts');
  }

  // allow_edit_self_info - computed: true, optional: false, required: false
  public get allowEditSelfInfo() {
    return this.getBooleanAttribute('allow_edit_self_info');
  }

  // allow_edit_self_login - computed: true, optional: false, required: false
  public get allowEditSelfLogin() {
    return this.getBooleanAttribute('allow_edit_self_login');
  }

  // allow_edit_self_password - computed: true, optional: false, required: false
  public get allowEditSelfPassword() {
    return this.getBooleanAttribute('allow_edit_self_password');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool yandex_organizationmanager_idp_userpool}
*/
export class DataYandexOrganizationmanagerIdpUserpool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_userpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexOrganizationmanagerIdpUserpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexOrganizationmanagerIdpUserpool to import
  * @param importFromId The id of the existing DataYandexOrganizationmanagerIdpUserpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexOrganizationmanagerIdpUserpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_userpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/organizationmanager_idp_userpool yandex_organizationmanager_idp_userpool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexOrganizationmanagerIdpUserpoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexOrganizationmanagerIdpUserpoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_userpool',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
    this._userpoolId = config.userpoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bruteforce_protection_policy - computed: true, optional: false, required: false
  private _bruteforceProtectionPolicy = new DataYandexOrganizationmanagerIdpUserpoolBruteforceProtectionPolicyOutputReference(this, "bruteforce_protection_policy");
  public get bruteforceProtectionPolicy() {
    return this._bruteforceProtectionPolicy;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // password_lifetime_policy - computed: true, optional: false, required: false
  private _passwordLifetimePolicy = new DataYandexOrganizationmanagerIdpUserpoolPasswordLifetimePolicyOutputReference(this, "password_lifetime_policy");
  public get passwordLifetimePolicy() {
    return this._passwordLifetimePolicy;
  }

  // password_quality_policy - computed: true, optional: false, required: false
  private _passwordQualityPolicy = new DataYandexOrganizationmanagerIdpUserpoolPasswordQualityPolicyOutputReference(this, "password_quality_policy");
  public get passwordQualityPolicy() {
    return this._passwordQualityPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexOrganizationmanagerIdpUserpoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexOrganizationmanagerIdpUserpoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_settings - computed: true, optional: false, required: false
  private _userSettings = new DataYandexOrganizationmanagerIdpUserpoolUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }

  // userpool_id - computed: true, optional: true, required: false
  private _userpoolId?: string; 
  public get userpoolId() {
    return this.getStringAttribute('userpool_id');
  }
  public set userpoolId(value: string) {
    this._userpoolId = value;
  }
  public resetUserpoolId() {
    this._userpoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpoolIdInput() {
    return this._userpoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataYandexOrganizationmanagerIdpUserpoolTimeoutsToTerraform(this._timeouts.internalValue),
      userpool_id: cdktf.stringToTerraform(this._userpoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexOrganizationmanagerIdpUserpoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexOrganizationmanagerIdpUserpoolTimeouts",
      },
      userpool_id: {
        value: cdktf.stringToHclTerraform(this._userpoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
