// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryJoinPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * String that contains the names of the scopes that the active directory belongs to. Names are separated by comma.
  *   - Default value: `Default_Scope`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#ad_scopes_names ActiveDirectoryJoinPoint#ad_scopes_names}
  */
  readonly adScopesNames?: string;
  /**
  * Aging Time
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#aging_time ActiveDirectoryJoinPoint#aging_time}
  */
  readonly agingTime?: number;
  /**
  * List of AD attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#attributes ActiveDirectoryJoinPoint#attributes}
  */
  readonly attributes?: ActiveDirectoryJoinPointAttributes[] | cdktf.IResolvable;
  /**
  * Enable prevent AD account lockout for WIRELESS/WIRED/BOTH
  *   - Choices: `WIRELESS`, `WIRED`, `BOTH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#auth_protection_type ActiveDirectoryJoinPoint#auth_protection_type}
  */
  readonly authProtectionType?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#country ActiveDirectoryJoinPoint#country}
  */
  readonly country?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#department ActiveDirectoryJoinPoint#department}
  */
  readonly department?: string;
  /**
  * Join point description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#description ActiveDirectoryJoinPoint#description}
  */
  readonly description?: string;
  /**
  * AD domain associated with the join point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#domain ActiveDirectoryJoinPoint#domain}
  */
  readonly domain: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#email ActiveDirectoryJoinPoint#email}
  */
  readonly email?: string;
  /**
  * Enable Callback For Dial In Client
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_callback_for_dialin_client ActiveDirectoryJoinPoint#enable_callback_for_dialin_client}
  */
  readonly enableCallbackForDialinClient?: boolean | cdktf.IResolvable;
  /**
  * Enable Dial In Permission Check
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_dialin_permission_check ActiveDirectoryJoinPoint#enable_dialin_permission_check}
  */
  readonly enableDialinPermissionCheck?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_domain_allowed_list ActiveDirectoryJoinPoint#enable_domain_allowed_list}
  */
  readonly enableDomainAllowedList?: boolean | cdktf.IResolvable;
  /**
  * Enable prevent AD account lockout due to too many bad password attempts
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_failed_auth_protection ActiveDirectoryJoinPoint#enable_failed_auth_protection}
  */
  readonly enableFailedAuthProtection?: boolean | cdktf.IResolvable;
  /**
  * Enable Machine Access
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_machine_access ActiveDirectoryJoinPoint#enable_machine_access}
  */
  readonly enableMachineAccess?: boolean | cdktf.IResolvable;
  /**
  * Enable Machine Authentication
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_machine_auth ActiveDirectoryJoinPoint#enable_machine_auth}
  */
  readonly enableMachineAuth?: boolean | cdktf.IResolvable;
  /**
  * Enable Password Change
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_pass_change ActiveDirectoryJoinPoint#enable_pass_change}
  */
  readonly enablePassChange?: boolean | cdktf.IResolvable;
  /**
  * Enable Rewrites
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#enable_rewrites ActiveDirectoryJoinPoint#enable_rewrites}
  */
  readonly enableRewrites?: boolean | cdktf.IResolvable;
  /**
  * Number of bad password attempts
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#failed_auth_threshold ActiveDirectoryJoinPoint#failed_auth_threshold}
  */
  readonly failedAuthThreshold?: number;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#first_name ActiveDirectoryJoinPoint#first_name}
  */
  readonly firstName?: string;
  /**
  * List of AD Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#groups ActiveDirectoryJoinPoint#groups}
  */
  readonly groups?: ActiveDirectoryJoinPointGroups[] | cdktf.IResolvable;
  /**
  * Identity Not In AD Behaviour
  *   - Choices: `REJECT`, `SEARCH_JOINED_FOREST`, `SEARCH_ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#identity_not_in_ad_behaviour ActiveDirectoryJoinPoint#identity_not_in_ad_behaviour}
  */
  readonly identityNotInAdBehaviour?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#job_title ActiveDirectoryJoinPoint#job_title}
  */
  readonly jobTitle?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#last_name ActiveDirectoryJoinPoint#last_name}
  */
  readonly lastName?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#locality ActiveDirectoryJoinPoint#locality}
  */
  readonly locality?: string;
  /**
  * The name of the active directory join point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#name ActiveDirectoryJoinPoint#name}
  */
  readonly name: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#organizational_unit ActiveDirectoryJoinPoint#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Plain Text Authentication
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#plaintext_auth ActiveDirectoryJoinPoint#plaintext_auth}
  */
  readonly plaintextAuth?: boolean | cdktf.IResolvable;
  /**
  * List of Rewrite rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#rewrite_rules ActiveDirectoryJoinPoint#rewrite_rules}
  */
  readonly rewriteRules?: ActiveDirectoryJoinPointRewriteRules[] | cdktf.IResolvable;
  /**
  * Schema
  *   - Choices: `ACTIVE_DIRECTORY`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#schema ActiveDirectoryJoinPoint#schema}
  */
  readonly schema?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#state_or_province ActiveDirectoryJoinPoint#state_or_province}
  */
  readonly stateOrProvince?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#street_address ActiveDirectoryJoinPoint#street_address}
  */
  readonly streetAddress?: string;
  /**
  * User info attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#telephone ActiveDirectoryJoinPoint#telephone}
  */
  readonly telephone?: string;
  /**
  * Unreachable Domains Behaviour
  *   - Choices: `PROCEED`, `DROP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#unreachable_domains_behaviour ActiveDirectoryJoinPoint#unreachable_domains_behaviour}
  */
  readonly unreachableDomainsBehaviour?: string;
}
export interface ActiveDirectoryJoinPointAttributes {
  /**
  * Required for each attribute in the attribute list. Can contain an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#default_value ActiveDirectoryJoinPoint#default_value}
  */
  readonly defaultValue: string;
  /**
  * Required for each attribute in the attribute list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#internal_name ActiveDirectoryJoinPoint#internal_name}
  */
  readonly internalName: string;
  /**
  * Required for each attribute in the attribute list with no duplication between attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#name ActiveDirectoryJoinPoint#name}
  */
  readonly name: string;
  /**
  * Required for each group in the group list
  *   - Choices: `STRING`, `IP`, `BOOLEAN`, `INT`, `OCTET_STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#type ActiveDirectoryJoinPoint#type}
  */
  readonly type: string;
}

export function activeDirectoryJoinPointAttributesToTerraform(struct?: ActiveDirectoryJoinPointAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    internal_name: cdktf.stringToTerraform(struct!.internalName),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function activeDirectoryJoinPointAttributesToHclTerraform(struct?: ActiveDirectoryJoinPointAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_name: {
      value: cdktf.stringToHclTerraform(struct!.internalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ActiveDirectoryJoinPointAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveDirectoryJoinPointAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._internalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalName = this._internalName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryJoinPointAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._internalName = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._internalName = value.internalName;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // internal_name - computed: false, optional: false, required: true
  private _internalName?: string; 
  public get internalName() {
    return this.getStringAttribute('internal_name');
  }
  public set internalName(value: string) {
    this._internalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNameInput() {
    return this._internalName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ActiveDirectoryJoinPointAttributesList extends cdktf.ComplexList {
  public internalValue? : ActiveDirectoryJoinPointAttributes[] | cdktf.IResolvable

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
  public get(index: number): ActiveDirectoryJoinPointAttributesOutputReference {
    return new ActiveDirectoryJoinPointAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveDirectoryJoinPointGroups {
  /**
  * Required for each group in the group list with no duplication between groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#name ActiveDirectoryJoinPoint#name}
  */
  readonly name: string;
  /**
  * Required for each group in the group list with no duplication between groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#sid ActiveDirectoryJoinPoint#sid}
  */
  readonly sid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#type ActiveDirectoryJoinPoint#type}
  */
  readonly type?: string;
}

export function activeDirectoryJoinPointGroupsToTerraform(struct?: ActiveDirectoryJoinPointGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sid: cdktf.stringToTerraform(struct!.sid),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function activeDirectoryJoinPointGroupsToHclTerraform(struct?: ActiveDirectoryJoinPointGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
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

export class ActiveDirectoryJoinPointGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveDirectoryJoinPointGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryJoinPointGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sid = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sid = value.sid;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
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

export class ActiveDirectoryJoinPointGroupsList extends cdktf.ComplexList {
  public internalValue? : ActiveDirectoryJoinPointGroups[] | cdktf.IResolvable

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
  public get(index: number): ActiveDirectoryJoinPointGroupsOutputReference {
    return new ActiveDirectoryJoinPointGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActiveDirectoryJoinPointRewriteRules {
  /**
  * Required for each rule in the list with no duplication between rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#rewrite_match ActiveDirectoryJoinPoint#rewrite_match}
  */
  readonly rewriteMatch: string;
  /**
  * Required for each rule in the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#rewrite_result ActiveDirectoryJoinPoint#rewrite_result}
  */
  readonly rewriteResult: string;
  /**
  * Required for each rule in the list in serial order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#row_id ActiveDirectoryJoinPoint#row_id}
  */
  readonly rowId: string;
}

export function activeDirectoryJoinPointRewriteRulesToTerraform(struct?: ActiveDirectoryJoinPointRewriteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewrite_match: cdktf.stringToTerraform(struct!.rewriteMatch),
    rewrite_result: cdktf.stringToTerraform(struct!.rewriteResult),
    row_id: cdktf.stringToTerraform(struct!.rowId),
  }
}


export function activeDirectoryJoinPointRewriteRulesToHclTerraform(struct?: ActiveDirectoryJoinPointRewriteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewrite_match: {
      value: cdktf.stringToHclTerraform(struct!.rewriteMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_result: {
      value: cdktf.stringToHclTerraform(struct!.rewriteResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_id: {
      value: cdktf.stringToHclTerraform(struct!.rowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiveDirectoryJoinPointRewriteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveDirectoryJoinPointRewriteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewriteMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteMatch = this._rewriteMatch;
    }
    if (this._rewriteResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteResult = this._rewriteResult;
    }
    if (this._rowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowId = this._rowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryJoinPointRewriteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewriteMatch = undefined;
      this._rewriteResult = undefined;
      this._rowId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewriteMatch = value.rewriteMatch;
      this._rewriteResult = value.rewriteResult;
      this._rowId = value.rowId;
    }
  }

  // rewrite_match - computed: false, optional: false, required: true
  private _rewriteMatch?: string; 
  public get rewriteMatch() {
    return this.getStringAttribute('rewrite_match');
  }
  public set rewriteMatch(value: string) {
    this._rewriteMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteMatchInput() {
    return this._rewriteMatch;
  }

  // rewrite_result - computed: false, optional: false, required: true
  private _rewriteResult?: string; 
  public get rewriteResult() {
    return this.getStringAttribute('rewrite_result');
  }
  public set rewriteResult(value: string) {
    this._rewriteResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteResultInput() {
    return this._rewriteResult;
  }

  // row_id - computed: false, optional: false, required: true
  private _rowId?: string; 
  public get rowId() {
    return this.getStringAttribute('row_id');
  }
  public set rowId(value: string) {
    this._rowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIdInput() {
    return this._rowId;
  }
}

export class ActiveDirectoryJoinPointRewriteRulesList extends cdktf.ComplexList {
  public internalValue? : ActiveDirectoryJoinPointRewriteRules[] | cdktf.IResolvable

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
  public get(index: number): ActiveDirectoryJoinPointRewriteRulesOutputReference {
    return new ActiveDirectoryJoinPointRewriteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point ise_active_directory_join_point}
*/
export class ActiveDirectoryJoinPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_active_directory_join_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveDirectoryJoinPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveDirectoryJoinPoint to import
  * @param importFromId The id of the existing ActiveDirectoryJoinPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveDirectoryJoinPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_active_directory_join_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_point ise_active_directory_join_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryJoinPointConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryJoinPointConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_active_directory_join_point',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adScopesNames = config.adScopesNames;
    this._agingTime = config.agingTime;
    this._attributes.internalValue = config.attributes;
    this._authProtectionType = config.authProtectionType;
    this._country = config.country;
    this._department = config.department;
    this._description = config.description;
    this._domain = config.domain;
    this._email = config.email;
    this._enableCallbackForDialinClient = config.enableCallbackForDialinClient;
    this._enableDialinPermissionCheck = config.enableDialinPermissionCheck;
    this._enableDomainAllowedList = config.enableDomainAllowedList;
    this._enableFailedAuthProtection = config.enableFailedAuthProtection;
    this._enableMachineAccess = config.enableMachineAccess;
    this._enableMachineAuth = config.enableMachineAuth;
    this._enablePassChange = config.enablePassChange;
    this._enableRewrites = config.enableRewrites;
    this._failedAuthThreshold = config.failedAuthThreshold;
    this._firstName = config.firstName;
    this._groups.internalValue = config.groups;
    this._identityNotInAdBehaviour = config.identityNotInAdBehaviour;
    this._jobTitle = config.jobTitle;
    this._lastName = config.lastName;
    this._locality = config.locality;
    this._name = config.name;
    this._organizationalUnit = config.organizationalUnit;
    this._plaintextAuth = config.plaintextAuth;
    this._rewriteRules.internalValue = config.rewriteRules;
    this._schema = config.schema;
    this._stateOrProvince = config.stateOrProvince;
    this._streetAddress = config.streetAddress;
    this._telephone = config.telephone;
    this._unreachableDomainsBehaviour = config.unreachableDomainsBehaviour;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_scopes_names - computed: true, optional: true, required: false
  private _adScopesNames?: string; 
  public get adScopesNames() {
    return this.getStringAttribute('ad_scopes_names');
  }
  public set adScopesNames(value: string) {
    this._adScopesNames = value;
  }
  public resetAdScopesNames() {
    this._adScopesNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adScopesNamesInput() {
    return this._adScopesNames;
  }

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new ActiveDirectoryJoinPointAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ActiveDirectoryJoinPointAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // auth_protection_type - computed: false, optional: true, required: false
  private _authProtectionType?: string; 
  public get authProtectionType() {
    return this.getStringAttribute('auth_protection_type');
  }
  public set authProtectionType(value: string) {
    this._authProtectionType = value;
  }
  public resetAuthProtectionType() {
    this._authProtectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtectionTypeInput() {
    return this._authProtectionType;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_callback_for_dialin_client - computed: true, optional: true, required: false
  private _enableCallbackForDialinClient?: boolean | cdktf.IResolvable; 
  public get enableCallbackForDialinClient() {
    return this.getBooleanAttribute('enable_callback_for_dialin_client');
  }
  public set enableCallbackForDialinClient(value: boolean | cdktf.IResolvable) {
    this._enableCallbackForDialinClient = value;
  }
  public resetEnableCallbackForDialinClient() {
    this._enableCallbackForDialinClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCallbackForDialinClientInput() {
    return this._enableCallbackForDialinClient;
  }

  // enable_dialin_permission_check - computed: true, optional: true, required: false
  private _enableDialinPermissionCheck?: boolean | cdktf.IResolvable; 
  public get enableDialinPermissionCheck() {
    return this.getBooleanAttribute('enable_dialin_permission_check');
  }
  public set enableDialinPermissionCheck(value: boolean | cdktf.IResolvable) {
    this._enableDialinPermissionCheck = value;
  }
  public resetEnableDialinPermissionCheck() {
    this._enableDialinPermissionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDialinPermissionCheckInput() {
    return this._enableDialinPermissionCheck;
  }

  // enable_domain_allowed_list - computed: true, optional: true, required: false
  private _enableDomainAllowedList?: boolean | cdktf.IResolvable; 
  public get enableDomainAllowedList() {
    return this.getBooleanAttribute('enable_domain_allowed_list');
  }
  public set enableDomainAllowedList(value: boolean | cdktf.IResolvable) {
    this._enableDomainAllowedList = value;
  }
  public resetEnableDomainAllowedList() {
    this._enableDomainAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDomainAllowedListInput() {
    return this._enableDomainAllowedList;
  }

  // enable_failed_auth_protection - computed: true, optional: true, required: false
  private _enableFailedAuthProtection?: boolean | cdktf.IResolvable; 
  public get enableFailedAuthProtection() {
    return this.getBooleanAttribute('enable_failed_auth_protection');
  }
  public set enableFailedAuthProtection(value: boolean | cdktf.IResolvable) {
    this._enableFailedAuthProtection = value;
  }
  public resetEnableFailedAuthProtection() {
    this._enableFailedAuthProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailedAuthProtectionInput() {
    return this._enableFailedAuthProtection;
  }

  // enable_machine_access - computed: true, optional: true, required: false
  private _enableMachineAccess?: boolean | cdktf.IResolvable; 
  public get enableMachineAccess() {
    return this.getBooleanAttribute('enable_machine_access');
  }
  public set enableMachineAccess(value: boolean | cdktf.IResolvable) {
    this._enableMachineAccess = value;
  }
  public resetEnableMachineAccess() {
    this._enableMachineAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineAccessInput() {
    return this._enableMachineAccess;
  }

  // enable_machine_auth - computed: true, optional: true, required: false
  private _enableMachineAuth?: boolean | cdktf.IResolvable; 
  public get enableMachineAuth() {
    return this.getBooleanAttribute('enable_machine_auth');
  }
  public set enableMachineAuth(value: boolean | cdktf.IResolvable) {
    this._enableMachineAuth = value;
  }
  public resetEnableMachineAuth() {
    this._enableMachineAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineAuthInput() {
    return this._enableMachineAuth;
  }

  // enable_pass_change - computed: true, optional: true, required: false
  private _enablePassChange?: boolean | cdktf.IResolvable; 
  public get enablePassChange() {
    return this.getBooleanAttribute('enable_pass_change');
  }
  public set enablePassChange(value: boolean | cdktf.IResolvable) {
    this._enablePassChange = value;
  }
  public resetEnablePassChange() {
    this._enablePassChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePassChangeInput() {
    return this._enablePassChange;
  }

  // enable_rewrites - computed: true, optional: true, required: false
  private _enableRewrites?: boolean | cdktf.IResolvable; 
  public get enableRewrites() {
    return this.getBooleanAttribute('enable_rewrites');
  }
  public set enableRewrites(value: boolean | cdktf.IResolvable) {
    this._enableRewrites = value;
  }
  public resetEnableRewrites() {
    this._enableRewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRewritesInput() {
    return this._enableRewrites;
  }

  // failed_auth_threshold - computed: true, optional: true, required: false
  private _failedAuthThreshold?: number; 
  public get failedAuthThreshold() {
    return this.getNumberAttribute('failed_auth_threshold');
  }
  public set failedAuthThreshold(value: number) {
    this._failedAuthThreshold = value;
  }
  public resetFailedAuthThreshold() {
    this._failedAuthThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAuthThresholdInput() {
    return this._failedAuthThreshold;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new ActiveDirectoryJoinPointGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: ActiveDirectoryJoinPointGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_not_in_ad_behaviour - computed: false, optional: true, required: false
  private _identityNotInAdBehaviour?: string; 
  public get identityNotInAdBehaviour() {
    return this.getStringAttribute('identity_not_in_ad_behaviour');
  }
  public set identityNotInAdBehaviour(value: string) {
    this._identityNotInAdBehaviour = value;
  }
  public resetIdentityNotInAdBehaviour() {
    this._identityNotInAdBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNotInAdBehaviourInput() {
    return this._identityNotInAdBehaviour;
  }

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // plaintext_auth - computed: true, optional: true, required: false
  private _plaintextAuth?: boolean | cdktf.IResolvable; 
  public get plaintextAuth() {
    return this.getBooleanAttribute('plaintext_auth');
  }
  public set plaintextAuth(value: boolean | cdktf.IResolvable) {
    this._plaintextAuth = value;
  }
  public resetPlaintextAuth() {
    this._plaintextAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextAuthInput() {
    return this._plaintextAuth;
  }

  // rewrite_rules - computed: false, optional: true, required: false
  private _rewriteRules = new ActiveDirectoryJoinPointRewriteRulesList(this, "rewrite_rules", false);
  public get rewriteRules() {
    return this._rewriteRules;
  }
  public putRewriteRules(value: ActiveDirectoryJoinPointRewriteRules[] | cdktf.IResolvable) {
    this._rewriteRules.internalValue = value;
  }
  public resetRewriteRules() {
    this._rewriteRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRulesInput() {
    return this._rewriteRules.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // state_or_province - computed: false, optional: true, required: false
  private _stateOrProvince?: string; 
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }
  public set stateOrProvince(value: string) {
    this._stateOrProvince = value;
  }
  public resetStateOrProvince() {
    this._stateOrProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOrProvinceInput() {
    return this._stateOrProvince;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // telephone - computed: false, optional: true, required: false
  private _telephone?: string; 
  public get telephone() {
    return this.getStringAttribute('telephone');
  }
  public set telephone(value: string) {
    this._telephone = value;
  }
  public resetTelephone() {
    this._telephone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneInput() {
    return this._telephone;
  }

  // unreachable_domains_behaviour - computed: false, optional: true, required: false
  private _unreachableDomainsBehaviour?: string; 
  public get unreachableDomainsBehaviour() {
    return this.getStringAttribute('unreachable_domains_behaviour');
  }
  public set unreachableDomainsBehaviour(value: string) {
    this._unreachableDomainsBehaviour = value;
  }
  public resetUnreachableDomainsBehaviour() {
    this._unreachableDomainsBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableDomainsBehaviourInput() {
    return this._unreachableDomainsBehaviour;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_scopes_names: cdktf.stringToTerraform(this._adScopesNames),
      aging_time: cdktf.numberToTerraform(this._agingTime),
      attributes: cdktf.listMapper(activeDirectoryJoinPointAttributesToTerraform, false)(this._attributes.internalValue),
      auth_protection_type: cdktf.stringToTerraform(this._authProtectionType),
      country: cdktf.stringToTerraform(this._country),
      department: cdktf.stringToTerraform(this._department),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      email: cdktf.stringToTerraform(this._email),
      enable_callback_for_dialin_client: cdktf.booleanToTerraform(this._enableCallbackForDialinClient),
      enable_dialin_permission_check: cdktf.booleanToTerraform(this._enableDialinPermissionCheck),
      enable_domain_allowed_list: cdktf.booleanToTerraform(this._enableDomainAllowedList),
      enable_failed_auth_protection: cdktf.booleanToTerraform(this._enableFailedAuthProtection),
      enable_machine_access: cdktf.booleanToTerraform(this._enableMachineAccess),
      enable_machine_auth: cdktf.booleanToTerraform(this._enableMachineAuth),
      enable_pass_change: cdktf.booleanToTerraform(this._enablePassChange),
      enable_rewrites: cdktf.booleanToTerraform(this._enableRewrites),
      failed_auth_threshold: cdktf.numberToTerraform(this._failedAuthThreshold),
      first_name: cdktf.stringToTerraform(this._firstName),
      groups: cdktf.listMapper(activeDirectoryJoinPointGroupsToTerraform, false)(this._groups.internalValue),
      identity_not_in_ad_behaviour: cdktf.stringToTerraform(this._identityNotInAdBehaviour),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      last_name: cdktf.stringToTerraform(this._lastName),
      locality: cdktf.stringToTerraform(this._locality),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      plaintext_auth: cdktf.booleanToTerraform(this._plaintextAuth),
      rewrite_rules: cdktf.listMapper(activeDirectoryJoinPointRewriteRulesToTerraform, false)(this._rewriteRules.internalValue),
      schema: cdktf.stringToTerraform(this._schema),
      state_or_province: cdktf.stringToTerraform(this._stateOrProvince),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      telephone: cdktf.stringToTerraform(this._telephone),
      unreachable_domains_behaviour: cdktf.stringToTerraform(this._unreachableDomainsBehaviour),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_scopes_names: {
        value: cdktf.stringToHclTerraform(this._adScopesNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attributes: {
        value: cdktf.listMapperHcl(activeDirectoryJoinPointAttributesToHclTerraform, false)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryJoinPointAttributesList",
      },
      auth_protection_type: {
        value: cdktf.stringToHclTerraform(this._authProtectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      department: {
        value: cdktf.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_callback_for_dialin_client: {
        value: cdktf.booleanToHclTerraform(this._enableCallbackForDialinClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dialin_permission_check: {
        value: cdktf.booleanToHclTerraform(this._enableDialinPermissionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_domain_allowed_list: {
        value: cdktf.booleanToHclTerraform(this._enableDomainAllowedList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_failed_auth_protection: {
        value: cdktf.booleanToHclTerraform(this._enableFailedAuthProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_machine_access: {
        value: cdktf.booleanToHclTerraform(this._enableMachineAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_machine_auth: {
        value: cdktf.booleanToHclTerraform(this._enableMachineAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pass_change: {
        value: cdktf.booleanToHclTerraform(this._enablePassChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rewrites: {
        value: cdktf.booleanToHclTerraform(this._enableRewrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failed_auth_threshold: {
        value: cdktf.numberToHclTerraform(this._failedAuthThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(activeDirectoryJoinPointGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryJoinPointGroupsList",
      },
      identity_not_in_ad_behaviour: {
        value: cdktf.stringToHclTerraform(this._identityNotInAdBehaviour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktf.stringToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plaintext_auth: {
        value: cdktf.booleanToHclTerraform(this._plaintextAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite_rules: {
        value: cdktf.listMapperHcl(activeDirectoryJoinPointRewriteRulesToHclTerraform, false)(this._rewriteRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryJoinPointRewriteRulesList",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_or_province: {
        value: cdktf.stringToHclTerraform(this._stateOrProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_address: {
        value: cdktf.stringToHclTerraform(this._streetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telephone: {
        value: cdktf.stringToHclTerraform(this._telephone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unreachable_domains_behaviour: {
        value: cdktf.stringToHclTerraform(this._unreachableDomainsBehaviour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
