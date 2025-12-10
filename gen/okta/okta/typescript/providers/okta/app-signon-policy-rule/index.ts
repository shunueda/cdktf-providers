// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSignonPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: ALLOW or DENY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}
  */
  readonly access?: string;
  /**
  * Use with verification method = `AUTH_METHOD_CHAIN` only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#chains AppSignonPolicyRule#chains}
  */
  readonly chains?: string[];
  /**
  * An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}
  */
  readonly constraints?: string[];
  /**
  * This is an optional advanced setting. If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}
  */
  readonly customExpression?: string;
  /**
  * List of device assurance IDs to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}
  */
  readonly deviceAssurancesIncluded?: string[];
  /**
  * If the device is managed. A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}
  */
  readonly deviceIsManaged?: boolean | cdktf.IResolvable;
  /**
  * If the device is registered. A device is registered if the User enrolls with Okta Verify that is installed on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}
  */
  readonly deviceIsRegistered?: boolean | cdktf.IResolvable;
  /**
  * The number of factors required to satisfy this assurance level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}
  */
  readonly factorMode?: string;
  /**
  * List of group IDs to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}
  */
  readonly groupsExcluded?: string[];
  /**
  * List of group IDs to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}
  */
  readonly groupsIncluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The inactivity duration after which the end user must re-authenticate. Use the ISO 8601 Period format for recurring time intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}
  */
  readonly inactivityPeriod?: string;
  /**
  * Policy Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * ID of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * Priority of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}
  */
  readonly priority?: number;
  /**
  * The duration after which the end user must re-authenticate, regardless of user activity. Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}
  */
  readonly reAuthenticationFrequency?: string;
  /**
  * The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}
  */
  readonly riskScore?: string;
  /**
  * Status of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}
  */
  readonly status?: string;
  /**
  * The Verification Method type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}
  */
  readonly type?: string;
  /**
  * Set of User Type IDs to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}
  */
  readonly userTypesExcluded?: string[];
  /**
  * Set of User Type IDs to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}
  */
  readonly userTypesIncluded?: string[];
  /**
  * Set of User IDs to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}
  */
  readonly usersExcluded?: string[];
  /**
  * Set of User IDs to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}
  */
  readonly usersIncluded?: string[];
  /**
  * platform_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}
  */
  readonly platformInclude?: AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable;
}
export interface AppSignonPolicyRulePlatformInclude {
  /**
  * Only available with OTHER OS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}
  */
  readonly osExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}
  */
  readonly type?: string;
}

export function appSignonPolicyRulePlatformIncludeToTerraform(struct?: AppSignonPolicyRulePlatformInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_expression: cdktf.stringToTerraform(struct!.osExpression),
    os_type: cdktf.stringToTerraform(struct!.osType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appSignonPolicyRulePlatformIncludeToHclTerraform(struct?: AppSignonPolicyRulePlatformInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_expression: {
      value: cdktf.stringToHclTerraform(struct!.osExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
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

export class AppSignonPolicyRulePlatformIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSignonPolicyRulePlatformInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.osExpression = this._osExpression;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSignonPolicyRulePlatformInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osExpression = undefined;
      this._osType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osExpression = value.osExpression;
      this._osType = value.osType;
      this._type = value.type;
    }
  }

  // os_expression - computed: false, optional: true, required: false
  private _osExpression?: string; 
  public get osExpression() {
    return this.getStringAttribute('os_expression');
  }
  public set osExpression(value: string) {
    this._osExpression = value;
  }
  public resetOsExpression() {
    this._osExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osExpressionInput() {
    return this._osExpression;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
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

export class AppSignonPolicyRulePlatformIncludeList extends cdktf.ComplexList {
  public internalValue? : AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable

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
  public get(index: number): AppSignonPolicyRulePlatformIncludeOutputReference {
    return new AppSignonPolicyRulePlatformIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}
*/
export class AppSignonPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_signon_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppSignonPolicyRule to import
  * @param importFromId The id of the existing AppSignonPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppSignonPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_signon_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSignonPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AppSignonPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_signon_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._chains = config.chains;
    this._constraints = config.constraints;
    this._customExpression = config.customExpression;
    this._deviceAssurancesIncluded = config.deviceAssurancesIncluded;
    this._deviceIsManaged = config.deviceIsManaged;
    this._deviceIsRegistered = config.deviceIsRegistered;
    this._factorMode = config.factorMode;
    this._groupsExcluded = config.groupsExcluded;
    this._groupsIncluded = config.groupsIncluded;
    this._id = config.id;
    this._inactivityPeriod = config.inactivityPeriod;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._reAuthenticationFrequency = config.reAuthenticationFrequency;
    this._riskScore = config.riskScore;
    this._status = config.status;
    this._type = config.type;
    this._userTypesExcluded = config.userTypesExcluded;
    this._userTypesIncluded = config.userTypesIncluded;
    this._usersExcluded = config.usersExcluded;
    this._usersIncluded = config.usersIncluded;
    this._platformInclude.internalValue = config.platformInclude;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // chains - computed: false, optional: true, required: false
  private _chains?: string[]; 
  public get chains() {
    return this.getListAttribute('chains');
  }
  public set chains(value: string[]) {
    this._chains = value;
  }
  public resetChains() {
    this._chains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainsInput() {
    return this._chains;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string[]; 
  public get constraints() {
    return this.getListAttribute('constraints');
  }
  public set constraints(value: string[]) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // custom_expression - computed: false, optional: true, required: false
  private _customExpression?: string; 
  public get customExpression() {
    return this.getStringAttribute('custom_expression');
  }
  public set customExpression(value: string) {
    this._customExpression = value;
  }
  public resetCustomExpression() {
    this._customExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExpressionInput() {
    return this._customExpression;
  }

  // device_assurances_included - computed: false, optional: true, required: false
  private _deviceAssurancesIncluded?: string[]; 
  public get deviceAssurancesIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('device_assurances_included'));
  }
  public set deviceAssurancesIncluded(value: string[]) {
    this._deviceAssurancesIncluded = value;
  }
  public resetDeviceAssurancesIncluded() {
    this._deviceAssurancesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAssurancesIncludedInput() {
    return this._deviceAssurancesIncluded;
  }

  // device_is_managed - computed: false, optional: true, required: false
  private _deviceIsManaged?: boolean | cdktf.IResolvable; 
  public get deviceIsManaged() {
    return this.getBooleanAttribute('device_is_managed');
  }
  public set deviceIsManaged(value: boolean | cdktf.IResolvable) {
    this._deviceIsManaged = value;
  }
  public resetDeviceIsManaged() {
    this._deviceIsManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIsManagedInput() {
    return this._deviceIsManaged;
  }

  // device_is_registered - computed: false, optional: true, required: false
  private _deviceIsRegistered?: boolean | cdktf.IResolvable; 
  public get deviceIsRegistered() {
    return this.getBooleanAttribute('device_is_registered');
  }
  public set deviceIsRegistered(value: boolean | cdktf.IResolvable) {
    this._deviceIsRegistered = value;
  }
  public resetDeviceIsRegistered() {
    this._deviceIsRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIsRegisteredInput() {
    return this._deviceIsRegistered;
  }

  // factor_mode - computed: false, optional: true, required: false
  private _factorMode?: string; 
  public get factorMode() {
    return this.getStringAttribute('factor_mode');
  }
  public set factorMode(value: string) {
    this._factorMode = value;
  }
  public resetFactorMode() {
    this._factorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorModeInput() {
    return this._factorMode;
  }

  // groups_excluded - computed: false, optional: true, required: false
  private _groupsExcluded?: string[]; 
  public get groupsExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_excluded'));
  }
  public set groupsExcluded(value: string[]) {
    this._groupsExcluded = value;
  }
  public resetGroupsExcluded() {
    this._groupsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsExcludedInput() {
    return this._groupsExcluded;
  }

  // groups_included - computed: false, optional: true, required: false
  private _groupsIncluded?: string[]; 
  public get groupsIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_included'));
  }
  public set groupsIncluded(value: string[]) {
    this._groupsIncluded = value;
  }
  public resetGroupsIncluded() {
    this._groupsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsIncludedInput() {
    return this._groupsIncluded;
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

  // inactivity_period - computed: false, optional: true, required: false
  private _inactivityPeriod?: string; 
  public get inactivityPeriod() {
    return this.getStringAttribute('inactivity_period');
  }
  public set inactivityPeriod(value: string) {
    this._inactivityPeriod = value;
  }
  public resetInactivityPeriod() {
    this._inactivityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityPeriodInput() {
    return this._inactivityPeriod;
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

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // re_authentication_frequency - computed: false, optional: true, required: false
  private _reAuthenticationFrequency?: string; 
  public get reAuthenticationFrequency() {
    return this.getStringAttribute('re_authentication_frequency');
  }
  public set reAuthenticationFrequency(value: string) {
    this._reAuthenticationFrequency = value;
  }
  public resetReAuthenticationFrequency() {
    this._reAuthenticationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthenticationFrequencyInput() {
    return this._reAuthenticationFrequency;
  }

  // risk_score - computed: true, optional: true, required: false
  private _riskScore?: string; 
  public get riskScore() {
    return this.getStringAttribute('risk_score');
  }
  public set riskScore(value: string) {
    this._riskScore = value;
  }
  public resetRiskScore() {
    this._riskScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskScoreInput() {
    return this._riskScore;
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

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
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

  // user_types_excluded - computed: false, optional: true, required: false
  private _userTypesExcluded?: string[]; 
  public get userTypesExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('user_types_excluded'));
  }
  public set userTypesExcluded(value: string[]) {
    this._userTypesExcluded = value;
  }
  public resetUserTypesExcluded() {
    this._userTypesExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypesExcludedInput() {
    return this._userTypesExcluded;
  }

  // user_types_included - computed: false, optional: true, required: false
  private _userTypesIncluded?: string[]; 
  public get userTypesIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('user_types_included'));
  }
  public set userTypesIncluded(value: string[]) {
    this._userTypesIncluded = value;
  }
  public resetUserTypesIncluded() {
    this._userTypesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypesIncludedInput() {
    return this._userTypesIncluded;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // users_included - computed: false, optional: true, required: false
  private _usersIncluded?: string[]; 
  public get usersIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_included'));
  }
  public set usersIncluded(value: string[]) {
    this._usersIncluded = value;
  }
  public resetUsersIncluded() {
    this._usersIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersIncludedInput() {
    return this._usersIncluded;
  }

  // platform_include - computed: false, optional: true, required: false
  private _platformInclude = new AppSignonPolicyRulePlatformIncludeList(this, "platform_include", true);
  public get platformInclude() {
    return this._platformInclude;
  }
  public putPlatformInclude(value: AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable) {
    this._platformInclude.internalValue = value;
  }
  public resetPlatformInclude() {
    this._platformInclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIncludeInput() {
    return this._platformInclude.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      chains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chains),
      constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._constraints),
      custom_expression: cdktf.stringToTerraform(this._customExpression),
      device_assurances_included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceAssurancesIncluded),
      device_is_managed: cdktf.booleanToTerraform(this._deviceIsManaged),
      device_is_registered: cdktf.booleanToTerraform(this._deviceIsRegistered),
      factor_mode: cdktf.stringToTerraform(this._factorMode),
      groups_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsExcluded),
      groups_included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsIncluded),
      id: cdktf.stringToTerraform(this._id),
      inactivity_period: cdktf.stringToTerraform(this._inactivityPeriod),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      re_authentication_frequency: cdktf.stringToTerraform(this._reAuthenticationFrequency),
      risk_score: cdktf.stringToTerraform(this._riskScore),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      user_types_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userTypesExcluded),
      user_types_included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userTypesIncluded),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersExcluded),
      users_included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersIncluded),
      platform_include: cdktf.listMapper(appSignonPolicyRulePlatformIncludeToTerraform, true)(this._platformInclude.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._chains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      constraints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._constraints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_expression: {
        value: cdktf.stringToHclTerraform(this._customExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_assurances_included: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceAssurancesIncluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_is_managed: {
        value: cdktf.booleanToHclTerraform(this._deviceIsManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_is_registered: {
        value: cdktf.booleanToHclTerraform(this._deviceIsRegistered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      factor_mode: {
        value: cdktf.stringToHclTerraform(this._factorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupsExcluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      groups_included: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupsIncluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactivity_period: {
        value: cdktf.stringToHclTerraform(this._inactivityPeriod),
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
      network_connection: {
        value: cdktf.stringToHclTerraform(this._networkConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkExcludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkIncludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      re_authentication_frequency: {
        value: cdktf.stringToHclTerraform(this._reAuthenticationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_score: {
        value: cdktf.stringToHclTerraform(this._riskScore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_types_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userTypesExcluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_types_included: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userTypesIncluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersExcluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users_included: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersIncluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      platform_include: {
        value: cdktf.listMapperHcl(appSignonPolicyRulePlatformIncludeToHclTerraform, true)(this._platformInclude.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppSignonPolicyRulePlatformIncludeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
