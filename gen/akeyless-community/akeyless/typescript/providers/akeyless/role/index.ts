// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow this role to view analytics. Currently only 'none', 'own' and 'all' values are supported, allowing associated auth methods to view reports produced by the same auth methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#analytics_access Role#analytics_access}
  */
  readonly analyticsAccess?: string;
  /**
  * Allow this role to view audit logs. Currently only 'none', 'own' and 'all' values are supported, allowing associated auth methods to view audit logs produced by the same auth methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#audit_access Role#audit_access}
  */
  readonly auditAccess?: string;
  /**
  * Protection from accidental deletion of this role, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#delete_protection Role#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Allow this role to view Event Center. Currently only 'none', 'own' and 'all' values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#event_center_access Role#event_center_access}
  */
  readonly eventCenterAccess?: string;
  /**
  * Allow this role to manage Event Forwarders. Currently only 'none' and 'all' values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#event_forwarders_access Role#event_forwarders_access}
  */
  readonly eventForwardersAccess?: string;
  /**
  * Allow this role to view gw analytics. Currently only 'none', 'own' and 'all' values are supported, allowing associated auth methods to view reports produced by the same auth methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#gw_analytics_access Role#gw_analytics_access}
  */
  readonly gwAnalyticsAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Allow this role to view SRA Clusters. Currently only 'none', 'own' and 'all' values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#sra_reports_access Role#sra_reports_access}
  */
  readonly sraReportsAccess?: string;
  /**
  * Allow this role to view Usage reports. Currently only 'none' and 'all' values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#usage_reports_access Role#usage_reports_access}
  */
  readonly usageReportsAccess?: string;
  /**
  * assoc_auth_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#assoc_auth_method Role#assoc_auth_method}
  */
  readonly assocAuthMethod?: RoleAssocAuthMethod[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#rules Role#rules}
  */
  readonly rules?: RoleRules[] | cdktf.IResolvable;
}
export interface RoleRestrictedRules {
}

export function roleRestrictedRulesToTerraform(struct?: RoleRestrictedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function roleRestrictedRulesToHclTerraform(struct?: RoleRestrictedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RoleRestrictedRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RoleRestrictedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleRestrictedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capability - computed: true, optional: false, required: false
  public get capability() {
    return cdktf.Fn.tolist(this.getListAttribute('capability'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}

export class RoleRestrictedRulesList extends cdktf.ComplexList {

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
  public get(index: number): RoleRestrictedRulesOutputReference {
    return new RoleRestrictedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleAssocAuthMethod {
  /**
  * The auth method to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#am_name Role#am_name}
  */
  readonly amName: string;
  /**
  * Treat sub claims as case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#case_sensitive Role#case_sensitive}
  */
  readonly caseSensitive?: string;
  /**
  * key/val of sub claims, e.g group=admins,developers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#sub_claims Role#sub_claims}
  */
  readonly subClaims?: { [key: string]: string };
}

export function roleAssocAuthMethodToTerraform(struct?: RoleAssocAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    am_name: cdktf.stringToTerraform(struct!.amName),
    case_sensitive: cdktf.stringToTerraform(struct!.caseSensitive),
    sub_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subClaims),
  }
}


export function roleAssocAuthMethodToHclTerraform(struct?: RoleAssocAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    am_name: {
      value: cdktf.stringToHclTerraform(struct!.amName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAssocAuthMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleAssocAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amName !== undefined) {
      hasAnyValues = true;
      internalValueResult.amName = this._amName;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._subClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.subClaims = this._subClaims;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAssocAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amName = undefined;
      this._caseSensitive = undefined;
      this._subClaims = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amName = value.amName;
      this._caseSensitive = value.caseSensitive;
      this._subClaims = value.subClaims;
    }
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // am_name - computed: false, optional: false, required: true
  private _amName?: string; 
  public get amName() {
    return this.getStringAttribute('am_name');
  }
  public set amName(value: string) {
    this._amName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amNameInput() {
    return this._amName;
  }

  // assoc_id - computed: true, optional: false, required: false
  public get assocId() {
    return this.getStringAttribute('assoc_id');
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: string; 
  public get caseSensitive() {
    return this.getStringAttribute('case_sensitive');
  }
  public set caseSensitive(value: string) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // sub_claims - computed: false, optional: true, required: false
  private _subClaims?: { [key: string]: string }; 
  public get subClaims() {
    return this.getStringMapAttribute('sub_claims');
  }
  public set subClaims(value: { [key: string]: string }) {
    this._subClaims = value;
  }
  public resetSubClaims() {
    this._subClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClaimsInput() {
    return this._subClaims;
  }
}

export class RoleAssocAuthMethodList extends cdktf.ComplexList {
  public internalValue? : RoleAssocAuthMethod[] | cdktf.IResolvable

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
  public get(index: number): RoleAssocAuthMethodOutputReference {
    return new RoleAssocAuthMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleRules {
  /**
  * List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny] for sra-rule type: [allow_access, request_access, justify_access_only, approval_authority, upload_files, download_files]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#capability Role#capability}
  */
  readonly capability: string[];
  /**
  * The path the rule refers to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#path Role#path}
  */
  readonly path: string;
  /**
  * item-rule, target-rule, role-rule, auth-method-rule, sra-rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#rule_type Role#rule_type}
  */
  readonly ruleType?: string;
}

export function roleRulesToTerraform(struct?: RoleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capability: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capability),
    path: cdktf.stringToTerraform(struct!.path),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function roleRulesToHclTerraform(struct?: RoleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capability: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capability),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capability !== undefined) {
      hasAnyValues = true;
      internalValueResult.capability = this._capability;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capability = undefined;
      this._path = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capability = value.capability;
      this._path = value.path;
      this._ruleType = value.ruleType;
    }
  }

  // capability - computed: false, optional: false, required: true
  private _capability?: string[]; 
  public get capability() {
    return cdktf.Fn.tolist(this.getListAttribute('capability'));
  }
  public set capability(value: string[]) {
    this._capability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class RoleRulesList extends cdktf.ComplexList {
  public internalValue? : RoleRules[] | cdktf.IResolvable

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
  public get(index: number): RoleRulesOutputReference {
    return new RoleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role akeyless_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/role akeyless_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_role',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsAccess = config.analyticsAccess;
    this._auditAccess = config.auditAccess;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._eventCenterAccess = config.eventCenterAccess;
    this._eventForwardersAccess = config.eventForwardersAccess;
    this._gwAnalyticsAccess = config.gwAnalyticsAccess;
    this._id = config.id;
    this._name = config.name;
    this._sraReportsAccess = config.sraReportsAccess;
    this._usageReportsAccess = config.usageReportsAccess;
    this._assocAuthMethod.internalValue = config.assocAuthMethod;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_access - computed: false, optional: true, required: false
  private _analyticsAccess?: string; 
  public get analyticsAccess() {
    return this.getStringAttribute('analytics_access');
  }
  public set analyticsAccess(value: string) {
    this._analyticsAccess = value;
  }
  public resetAnalyticsAccess() {
    this._analyticsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsAccessInput() {
    return this._analyticsAccess;
  }

  // audit_access - computed: false, optional: true, required: false
  private _auditAccess?: string; 
  public get auditAccess() {
    return this.getStringAttribute('audit_access');
  }
  public set auditAccess(value: string) {
    this._auditAccess = value;
  }
  public resetAuditAccess() {
    this._auditAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccessInput() {
    return this._auditAccess;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // event_center_access - computed: false, optional: true, required: false
  private _eventCenterAccess?: string; 
  public get eventCenterAccess() {
    return this.getStringAttribute('event_center_access');
  }
  public set eventCenterAccess(value: string) {
    this._eventCenterAccess = value;
  }
  public resetEventCenterAccess() {
    this._eventCenterAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCenterAccessInput() {
    return this._eventCenterAccess;
  }

  // event_forwarders_access - computed: false, optional: true, required: false
  private _eventForwardersAccess?: string; 
  public get eventForwardersAccess() {
    return this.getStringAttribute('event_forwarders_access');
  }
  public set eventForwardersAccess(value: string) {
    this._eventForwardersAccess = value;
  }
  public resetEventForwardersAccess() {
    this._eventForwardersAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventForwardersAccessInput() {
    return this._eventForwardersAccess;
  }

  // gw_analytics_access - computed: false, optional: true, required: false
  private _gwAnalyticsAccess?: string; 
  public get gwAnalyticsAccess() {
    return this.getStringAttribute('gw_analytics_access');
  }
  public set gwAnalyticsAccess(value: string) {
    this._gwAnalyticsAccess = value;
  }
  public resetGwAnalyticsAccess() {
    this._gwAnalyticsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwAnalyticsAccessInput() {
    return this._gwAnalyticsAccess;
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

  // restricted_rules - computed: true, optional: false, required: false
  private _restrictedRules = new RoleRestrictedRulesList(this, "restricted_rules", true);
  public get restrictedRules() {
    return this._restrictedRules;
  }

  // sra_reports_access - computed: false, optional: true, required: false
  private _sraReportsAccess?: string; 
  public get sraReportsAccess() {
    return this.getStringAttribute('sra_reports_access');
  }
  public set sraReportsAccess(value: string) {
    this._sraReportsAccess = value;
  }
  public resetSraReportsAccess() {
    this._sraReportsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sraReportsAccessInput() {
    return this._sraReportsAccess;
  }

  // usage_reports_access - computed: false, optional: true, required: false
  private _usageReportsAccess?: string; 
  public get usageReportsAccess() {
    return this.getStringAttribute('usage_reports_access');
  }
  public set usageReportsAccess(value: string) {
    this._usageReportsAccess = value;
  }
  public resetUsageReportsAccess() {
    this._usageReportsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportsAccessInput() {
    return this._usageReportsAccess;
  }

  // assoc_auth_method - computed: false, optional: true, required: false
  private _assocAuthMethod = new RoleAssocAuthMethodList(this, "assoc_auth_method", true);
  public get assocAuthMethod() {
    return this._assocAuthMethod;
  }
  public putAssocAuthMethod(value: RoleAssocAuthMethod[] | cdktf.IResolvable) {
    this._assocAuthMethod.internalValue = value;
  }
  public resetAssocAuthMethod() {
    this._assocAuthMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocAuthMethodInput() {
    return this._assocAuthMethod.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new RoleRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RoleRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_access: cdktf.stringToTerraform(this._analyticsAccess),
      audit_access: cdktf.stringToTerraform(this._auditAccess),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      event_center_access: cdktf.stringToTerraform(this._eventCenterAccess),
      event_forwarders_access: cdktf.stringToTerraform(this._eventForwardersAccess),
      gw_analytics_access: cdktf.stringToTerraform(this._gwAnalyticsAccess),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sra_reports_access: cdktf.stringToTerraform(this._sraReportsAccess),
      usage_reports_access: cdktf.stringToTerraform(this._usageReportsAccess),
      assoc_auth_method: cdktf.listMapper(roleAssocAuthMethodToTerraform, true)(this._assocAuthMethod.internalValue),
      rules: cdktf.listMapper(roleRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_access: {
        value: cdktf.stringToHclTerraform(this._analyticsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_access: {
        value: cdktf.stringToHclTerraform(this._auditAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
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
      event_center_access: {
        value: cdktf.stringToHclTerraform(this._eventCenterAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_forwarders_access: {
        value: cdktf.stringToHclTerraform(this._eventForwardersAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_analytics_access: {
        value: cdktf.stringToHclTerraform(this._gwAnalyticsAccess),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sra_reports_access: {
        value: cdktf.stringToHclTerraform(this._sraReportsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_reports_access: {
        value: cdktf.stringToHclTerraform(this._usageReportsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assoc_auth_method: {
        value: cdktf.listMapperHcl(roleAssocAuthMethodToHclTerraform, true)(this._assocAuthMethod.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleAssocAuthMethodList",
      },
      rules: {
        value: cdktf.listMapperHcl(roleRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
