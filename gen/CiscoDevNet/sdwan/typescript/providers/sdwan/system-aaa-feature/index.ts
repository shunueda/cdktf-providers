// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAaaFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accounting configurations parameters
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#accounting_group SystemAaaFeature#accounting_group}
  */
  readonly accountingGroup?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#accounting_group_variable SystemAaaFeature#accounting_group_variable}
  */
  readonly accountingGroupVariable?: string;
  /**
  * Configure the accounting rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#accounting_rules SystemAaaFeature#accounting_rules}
  */
  readonly accountingRules?: SystemAaaFeatureAccountingRules[] | cdktf.IResolvable;
  /**
  * Authentication configurations parameters
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authentication_group SystemAaaFeature#authentication_group}
  */
  readonly authenticationGroup?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authentication_group_variable SystemAaaFeature#authentication_group_variable}
  */
  readonly authenticationGroupVariable?: string;
  /**
  * For configuration mode commands.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authorization_config_commands SystemAaaFeature#authorization_config_commands}
  */
  readonly authorizationConfigCommands?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authorization_config_commands_variable SystemAaaFeature#authorization_config_commands_variable}
  */
  readonly authorizationConfigCommandsVariable?: string;
  /**
  * For enabling console authorization
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authorization_console SystemAaaFeature#authorization_console}
  */
  readonly authorizationConsole?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authorization_console_variable SystemAaaFeature#authorization_console_variable}
  */
  readonly authorizationConsoleVariable?: string;
  /**
  * Configure the Authorization Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#authorization_rules SystemAaaFeature#authorization_rules}
  */
  readonly authorizationRules?: SystemAaaFeatureAuthorizationRules[] | cdktf.IResolvable;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#description SystemAaaFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#feature_profile_id SystemAaaFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#name SystemAaaFeature#name}
  */
  readonly name: string;
  /**
  * Configure the Radius serverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#radius_groups SystemAaaFeature#radius_groups}
  */
  readonly radiusGroups?: SystemAaaFeatureRadiusGroups[] | cdktf.IResolvable;
  /**
  * ServerGroups priority order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#server_auth_order SystemAaaFeature#server_auth_order}
  */
  readonly serverAuthOrder: string[];
  /**
  * Configure the TACACS serverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#tacacs_groups SystemAaaFeature#tacacs_groups}
  */
  readonly tacacsGroups?: SystemAaaFeatureTacacsGroups[] | cdktf.IResolvable;
  /**
  * Create local login account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#users SystemAaaFeature#users}
  */
  readonly users?: SystemAaaFeatureUsers[] | cdktf.IResolvable;
}
export interface SystemAaaFeatureAccountingRules {
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#group SystemAaaFeature#group}
  */
  readonly group?: string[];
  /**
  * Privilege level when method is commands
  *   - Choices: `1`, `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#level SystemAaaFeature#level}
  */
  readonly level?: string;
  /**
  * Configure Accounting Method
  *   - Choices: `commands`, `exec`, `network`, `system`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#method SystemAaaFeature#method}
  */
  readonly method?: string;
  /**
  * Configure Accounting Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#rule_id SystemAaaFeature#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Record start and stop without waiting
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#start_stop SystemAaaFeature#start_stop}
  */
  readonly startStop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#start_stop_variable SystemAaaFeature#start_stop_variable}
  */
  readonly startStopVariable?: string;
}

export function systemAaaFeatureAccountingRulesToTerraform(struct?: SystemAaaFeatureAccountingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    level: cdktf.stringToTerraform(struct!.level),
    method: cdktf.stringToTerraform(struct!.method),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    start_stop: cdktf.booleanToTerraform(struct!.startStop),
    start_stop_variable: cdktf.stringToTerraform(struct!.startStopVariable),
  }
}


export function systemAaaFeatureAccountingRulesToHclTerraform(struct?: SystemAaaFeatureAccountingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop: {
      value: cdktf.booleanToHclTerraform(struct!.startStop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_variable: {
      value: cdktf.stringToHclTerraform(struct!.startStopVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureAccountingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureAccountingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._startStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStop = this._startStop;
    }
    if (this._startStopVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopVariable = this._startStopVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureAccountingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._level = undefined;
      this._method = undefined;
      this._ruleId = undefined;
      this._startStop = undefined;
      this._startStopVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._level = value.level;
      this._method = value.method;
      this._ruleId = value.ruleId;
      this._startStop = value.startStop;
      this._startStopVariable = value.startStopVariable;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // start_stop - computed: false, optional: true, required: false
  private _startStop?: boolean | cdktf.IResolvable; 
  public get startStop() {
    return this.getBooleanAttribute('start_stop');
  }
  public set startStop(value: boolean | cdktf.IResolvable) {
    this._startStop = value;
  }
  public resetStartStop() {
    this._startStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopInput() {
    return this._startStop;
  }

  // start_stop_variable - computed: false, optional: true, required: false
  private _startStopVariable?: string; 
  public get startStopVariable() {
    return this.getStringAttribute('start_stop_variable');
  }
  public set startStopVariable(value: string) {
    this._startStopVariable = value;
  }
  public resetStartStopVariable() {
    this._startStopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopVariableInput() {
    return this._startStopVariable;
  }
}

export class SystemAaaFeatureAccountingRulesList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureAccountingRules[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureAccountingRulesOutputReference {
    return new SystemAaaFeatureAccountingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureAuthorizationRules {
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#group SystemAaaFeature#group}
  */
  readonly group?: string[];
  /**
  * Succeed if user has authenticated
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#if_authenticated SystemAaaFeature#if_authenticated}
  */
  readonly ifAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Privilege level when method is commands
  *   - Choices: `1`, `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#level SystemAaaFeature#level}
  */
  readonly level?: string;
  /**
  * Method
  *   - Choices: `commands`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#method SystemAaaFeature#method}
  */
  readonly method?: string;
  /**
  * Configure Authorization Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#rule_id SystemAaaFeature#rule_id}
  */
  readonly ruleId?: string;
}

export function systemAaaFeatureAuthorizationRulesToTerraform(struct?: SystemAaaFeatureAuthorizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    if_authenticated: cdktf.booleanToTerraform(struct!.ifAuthenticated),
    level: cdktf.stringToTerraform(struct!.level),
    method: cdktf.stringToTerraform(struct!.method),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
  }
}


export function systemAaaFeatureAuthorizationRulesToHclTerraform(struct?: SystemAaaFeatureAuthorizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    if_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.ifAuthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureAuthorizationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureAuthorizationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._ifAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifAuthenticated = this._ifAuthenticated;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureAuthorizationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._ifAuthenticated = undefined;
      this._level = undefined;
      this._method = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._ifAuthenticated = value.ifAuthenticated;
      this._level = value.level;
      this._method = value.method;
      this._ruleId = value.ruleId;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // if_authenticated - computed: false, optional: true, required: false
  private _ifAuthenticated?: boolean | cdktf.IResolvable; 
  public get ifAuthenticated() {
    return this.getBooleanAttribute('if_authenticated');
  }
  public set ifAuthenticated(value: boolean | cdktf.IResolvable) {
    this._ifAuthenticated = value;
  }
  public resetIfAuthenticated() {
    this._ifAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifAuthenticatedInput() {
    return this._ifAuthenticated;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class SystemAaaFeatureAuthorizationRulesList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureAuthorizationRules[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureAuthorizationRulesOutputReference {
    return new SystemAaaFeatureAuthorizationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureRadiusGroupsServers {
  /**
  * Set Accounting port to use to connect to Radius server
  *   - Range: `1`-`65534`
  *   - Default value: `1813`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#acct_port SystemAaaFeature#acct_port}
  */
  readonly acctPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#acct_port_variable SystemAaaFeature#acct_port_variable}
  */
  readonly acctPortVariable?: string;
  /**
  * Set IP address of Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#address SystemAaaFeature#address}
  */
  readonly address?: string;
  /**
  * Set Authentication port to use to connect to Radius server
  *   - Range: `1`-`65534`
  *   - Default value: `1812`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#auth_port SystemAaaFeature#auth_port}
  */
  readonly authPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#auth_port_variable SystemAaaFeature#auth_port_variable}
  */
  readonly authPortVariable?: string;
  /**
  * Set the Radius server shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key SystemAaaFeature#key}
  */
  readonly key?: string;
  /**
  * Type of encyption. To be used for type 6
  *   - Choices: `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_enum SystemAaaFeature#key_enum}
  */
  readonly keyEnum?: string;
  /**
  * key type
  *   - Choices: `key`, `pac`
  *   - Default value: `key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_type SystemAaaFeature#key_type}
  */
  readonly keyType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_type_variable SystemAaaFeature#key_type_variable}
  */
  readonly keyTypeVariable?: string;
  /**
  * Configure how many times to contact this Radius server
  *   - Range: `1`-`100`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#retransmit SystemAaaFeature#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#retransmit_variable SystemAaaFeature#retransmit_variable}
  */
  readonly retransmitVariable?: string;
  /**
  * Set the Radius server shared type 7 encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#secret_key SystemAaaFeature#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#secret_key_variable SystemAaaFeature#secret_key_variable}
  */
  readonly secretKeyVariable?: string;
  /**
  * Configure how long to wait for replies from the Radius server
  *   - Range: `1`-`1000`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#timeout SystemAaaFeature#timeout}
  */
  readonly timeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#timeout_variable SystemAaaFeature#timeout_variable}
  */
  readonly timeoutVariable?: string;
}

export function systemAaaFeatureRadiusGroupsServersToTerraform(struct?: SystemAaaFeatureRadiusGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_port: cdktf.numberToTerraform(struct!.acctPort),
    acct_port_variable: cdktf.stringToTerraform(struct!.acctPortVariable),
    address: cdktf.stringToTerraform(struct!.address),
    auth_port: cdktf.numberToTerraform(struct!.authPort),
    auth_port_variable: cdktf.stringToTerraform(struct!.authPortVariable),
    key: cdktf.stringToTerraform(struct!.key),
    key_enum: cdktf.stringToTerraform(struct!.keyEnum),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    key_type_variable: cdktf.stringToTerraform(struct!.keyTypeVariable),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    retransmit_variable: cdktf.stringToTerraform(struct!.retransmitVariable),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_key_variable: cdktf.stringToTerraform(struct!.secretKeyVariable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_variable: cdktf.stringToTerraform(struct!.timeoutVariable),
  }
}


export function systemAaaFeatureRadiusGroupsServersToHclTerraform(struct?: SystemAaaFeatureRadiusGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_port: {
      value: cdktf.numberToHclTerraform(struct!.acctPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acct_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.acctPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_port: {
      value: cdktf.numberToHclTerraform(struct!.authPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.authPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_enum: {
      value: cdktf.stringToHclTerraform(struct!.keyEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_variable: {
      value: cdktf.stringToHclTerraform(struct!.retransmitVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeoutVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureRadiusGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureRadiusGroupsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPort = this._acctPort;
    }
    if (this._acctPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPortVariable = this._acctPortVariable;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPort = this._authPort;
    }
    if (this._authPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortVariable = this._authPortVariable;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEnum = this._keyEnum;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._keyTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTypeVariable = this._keyTypeVariable;
    }
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._retransmitVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitVariable = this._retransmitVariable;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyVariable = this._secretKeyVariable;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVariable = this._timeoutVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureRadiusGroupsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctPort = undefined;
      this._acctPortVariable = undefined;
      this._address = undefined;
      this._authPort = undefined;
      this._authPortVariable = undefined;
      this._key = undefined;
      this._keyEnum = undefined;
      this._keyType = undefined;
      this._keyTypeVariable = undefined;
      this._retransmit = undefined;
      this._retransmitVariable = undefined;
      this._secretKey = undefined;
      this._secretKeyVariable = undefined;
      this._timeout = undefined;
      this._timeoutVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctPort = value.acctPort;
      this._acctPortVariable = value.acctPortVariable;
      this._address = value.address;
      this._authPort = value.authPort;
      this._authPortVariable = value.authPortVariable;
      this._key = value.key;
      this._keyEnum = value.keyEnum;
      this._keyType = value.keyType;
      this._keyTypeVariable = value.keyTypeVariable;
      this._retransmit = value.retransmit;
      this._retransmitVariable = value.retransmitVariable;
      this._secretKey = value.secretKey;
      this._secretKeyVariable = value.secretKeyVariable;
      this._timeout = value.timeout;
      this._timeoutVariable = value.timeoutVariable;
    }
  }

  // acct_port - computed: false, optional: true, required: false
  private _acctPort?: number; 
  public get acctPort() {
    return this.getNumberAttribute('acct_port');
  }
  public set acctPort(value: number) {
    this._acctPort = value;
  }
  public resetAcctPort() {
    this._acctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortInput() {
    return this._acctPort;
  }

  // acct_port_variable - computed: false, optional: true, required: false
  private _acctPortVariable?: string; 
  public get acctPortVariable() {
    return this.getStringAttribute('acct_port_variable');
  }
  public set acctPortVariable(value: string) {
    this._acctPortVariable = value;
  }
  public resetAcctPortVariable() {
    this._acctPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortVariableInput() {
    return this._acctPortVariable;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
  }

  // auth_port_variable - computed: false, optional: true, required: false
  private _authPortVariable?: string; 
  public get authPortVariable() {
    return this.getStringAttribute('auth_port_variable');
  }
  public set authPortVariable(value: string) {
    this._authPortVariable = value;
  }
  public resetAuthPortVariable() {
    this._authPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortVariableInput() {
    return this._authPortVariable;
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

  // key_enum - computed: false, optional: true, required: false
  private _keyEnum?: string; 
  public get keyEnum() {
    return this.getStringAttribute('key_enum');
  }
  public set keyEnum(value: string) {
    this._keyEnum = value;
  }
  public resetKeyEnum() {
    this._keyEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnumInput() {
    return this._keyEnum;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_type_variable - computed: false, optional: true, required: false
  private _keyTypeVariable?: string; 
  public get keyTypeVariable() {
    return this.getStringAttribute('key_type_variable');
  }
  public set keyTypeVariable(value: string) {
    this._keyTypeVariable = value;
  }
  public resetKeyTypeVariable() {
    this._keyTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeVariableInput() {
    return this._keyTypeVariable;
  }

  // retransmit - computed: false, optional: true, required: false
  private _retransmit?: number; 
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }
  public set retransmit(value: number) {
    this._retransmit = value;
  }
  public resetRetransmit() {
    this._retransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitInput() {
    return this._retransmit;
  }

  // retransmit_variable - computed: false, optional: true, required: false
  private _retransmitVariable?: string; 
  public get retransmitVariable() {
    return this.getStringAttribute('retransmit_variable');
  }
  public set retransmitVariable(value: string) {
    this._retransmitVariable = value;
  }
  public resetRetransmitVariable() {
    this._retransmitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitVariableInput() {
    return this._retransmitVariable;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_key_variable - computed: false, optional: true, required: false
  private _secretKeyVariable?: string; 
  public get secretKeyVariable() {
    return this.getStringAttribute('secret_key_variable');
  }
  public set secretKeyVariable(value: string) {
    this._secretKeyVariable = value;
  }
  public resetSecretKeyVariable() {
    this._secretKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyVariableInput() {
    return this._secretKeyVariable;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_variable - computed: false, optional: true, required: false
  private _timeoutVariable?: string; 
  public get timeoutVariable() {
    return this.getStringAttribute('timeout_variable');
  }
  public set timeoutVariable(value: string) {
    this._timeoutVariable = value;
  }
  public resetTimeoutVariable() {
    this._timeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutVariableInput() {
    return this._timeoutVariable;
  }
}

export class SystemAaaFeatureRadiusGroupsServersList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureRadiusGroupsServers[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureRadiusGroupsServersOutputReference {
    return new SystemAaaFeatureRadiusGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureRadiusGroups {
  /**
  * Set Radius server Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#group_name SystemAaaFeature#group_name}
  */
  readonly groupName?: string;
  /**
  * Configure the Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#servers SystemAaaFeature#servers}
  */
  readonly servers?: SystemAaaFeatureRadiusGroupsServers[] | cdktf.IResolvable;
  /**
  * Set interface to use to reach Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#source_interface SystemAaaFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#source_interface_variable SystemAaaFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which Radius server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#vpn SystemAaaFeature#vpn}
  */
  readonly vpn?: number;
}

export function systemAaaFeatureRadiusGroupsToTerraform(struct?: SystemAaaFeatureRadiusGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    servers: cdktf.listMapper(systemAaaFeatureRadiusGroupsServersToTerraform, false)(struct!.servers),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
  }
}


export function systemAaaFeatureRadiusGroupsToHclTerraform(struct?: SystemAaaFeatureRadiusGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(systemAaaFeatureRadiusGroupsServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAaaFeatureRadiusGroupsServersList",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureRadiusGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureRadiusGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureRadiusGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._servers.internalValue = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._servers.internalValue = value.servers;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpn = value.vpn;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new SystemAaaFeatureRadiusGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: SystemAaaFeatureRadiusGroupsServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class SystemAaaFeatureRadiusGroupsList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureRadiusGroups[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureRadiusGroupsOutputReference {
    return new SystemAaaFeatureRadiusGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureTacacsGroupsServers {
  /**
  * Set IP address of TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#address SystemAaaFeature#address}
  */
  readonly address?: string;
  /**
  * Set the TACACS server shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key SystemAaaFeature#key}
  */
  readonly key?: string;
  /**
  * Type of encyption. To be used for type 6
  *   - Choices: `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_enum SystemAaaFeature#key_enum}
  */
  readonly keyEnum?: string;
  /**
  * TACACS Port
  *   - Range: `1`-`65535`
  *   - Default value: `49`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#port SystemAaaFeature#port}
  */
  readonly port?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#port_variable SystemAaaFeature#port_variable}
  */
  readonly portVariable?: string;
  /**
  * Set the TACACS server shared type 7 encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#secret_key SystemAaaFeature#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#secret_key_variable SystemAaaFeature#secret_key_variable}
  */
  readonly secretKeyVariable?: string;
  /**
  * Configure how long to wait for replies from the TACACS server
  *   - Range: `1`-`1000`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#timeout SystemAaaFeature#timeout}
  */
  readonly timeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#timeout_variable SystemAaaFeature#timeout_variable}
  */
  readonly timeoutVariable?: string;
}

export function systemAaaFeatureTacacsGroupsServersToTerraform(struct?: SystemAaaFeatureTacacsGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    key: cdktf.stringToTerraform(struct!.key),
    key_enum: cdktf.stringToTerraform(struct!.keyEnum),
    port: cdktf.numberToTerraform(struct!.port),
    port_variable: cdktf.stringToTerraform(struct!.portVariable),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_key_variable: cdktf.stringToTerraform(struct!.secretKeyVariable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_variable: cdktf.stringToTerraform(struct!.timeoutVariable),
  }
}


export function systemAaaFeatureTacacsGroupsServersToHclTerraform(struct?: SystemAaaFeatureTacacsGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_enum: {
      value: cdktf.stringToHclTerraform(struct!.keyEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_variable: {
      value: cdktf.stringToHclTerraform(struct!.portVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeoutVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureTacacsGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureTacacsGroupsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEnum = this._keyEnum;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portVariable = this._portVariable;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyVariable = this._secretKeyVariable;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVariable = this._timeoutVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureTacacsGroupsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._key = undefined;
      this._keyEnum = undefined;
      this._port = undefined;
      this._portVariable = undefined;
      this._secretKey = undefined;
      this._secretKeyVariable = undefined;
      this._timeout = undefined;
      this._timeoutVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._key = value.key;
      this._keyEnum = value.keyEnum;
      this._port = value.port;
      this._portVariable = value.portVariable;
      this._secretKey = value.secretKey;
      this._secretKeyVariable = value.secretKeyVariable;
      this._timeout = value.timeout;
      this._timeoutVariable = value.timeoutVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // key_enum - computed: false, optional: true, required: false
  private _keyEnum?: string; 
  public get keyEnum() {
    return this.getStringAttribute('key_enum');
  }
  public set keyEnum(value: string) {
    this._keyEnum = value;
  }
  public resetKeyEnum() {
    this._keyEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnumInput() {
    return this._keyEnum;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_variable - computed: false, optional: true, required: false
  private _portVariable?: string; 
  public get portVariable() {
    return this.getStringAttribute('port_variable');
  }
  public set portVariable(value: string) {
    this._portVariable = value;
  }
  public resetPortVariable() {
    this._portVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVariableInput() {
    return this._portVariable;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_key_variable - computed: false, optional: true, required: false
  private _secretKeyVariable?: string; 
  public get secretKeyVariable() {
    return this.getStringAttribute('secret_key_variable');
  }
  public set secretKeyVariable(value: string) {
    this._secretKeyVariable = value;
  }
  public resetSecretKeyVariable() {
    this._secretKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyVariableInput() {
    return this._secretKeyVariable;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_variable - computed: false, optional: true, required: false
  private _timeoutVariable?: string; 
  public get timeoutVariable() {
    return this.getStringAttribute('timeout_variable');
  }
  public set timeoutVariable(value: string) {
    this._timeoutVariable = value;
  }
  public resetTimeoutVariable() {
    this._timeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutVariableInput() {
    return this._timeoutVariable;
  }
}

export class SystemAaaFeatureTacacsGroupsServersList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureTacacsGroupsServers[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureTacacsGroupsServersOutputReference {
    return new SystemAaaFeatureTacacsGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureTacacsGroups {
  /**
  * Set TACACS server Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#group_name SystemAaaFeature#group_name}
  */
  readonly groupName?: string;
  /**
  * Configure the TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#servers SystemAaaFeature#servers}
  */
  readonly servers?: SystemAaaFeatureTacacsGroupsServers[] | cdktf.IResolvable;
  /**
  * Set interface to use to reach TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#source_interface SystemAaaFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#source_interface_variable SystemAaaFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which TACACS server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#vpn SystemAaaFeature#vpn}
  */
  readonly vpn?: number;
}

export function systemAaaFeatureTacacsGroupsToTerraform(struct?: SystemAaaFeatureTacacsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    servers: cdktf.listMapper(systemAaaFeatureTacacsGroupsServersToTerraform, false)(struct!.servers),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
  }
}


export function systemAaaFeatureTacacsGroupsToHclTerraform(struct?: SystemAaaFeatureTacacsGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(systemAaaFeatureTacacsGroupsServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAaaFeatureTacacsGroupsServersList",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureTacacsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureTacacsGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureTacacsGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._servers.internalValue = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._servers.internalValue = value.servers;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpn = value.vpn;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new SystemAaaFeatureTacacsGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: SystemAaaFeatureTacacsGroupsServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class SystemAaaFeatureTacacsGroupsList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureTacacsGroups[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureTacacsGroupsOutputReference {
    return new SystemAaaFeatureTacacsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureUsersPublicKeys {
  /**
  * Set the RSA key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_string SystemAaaFeature#key_string}
  */
  readonly keyString?: string;
  /**
  * Only RSA is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_type SystemAaaFeature#key_type}
  */
  readonly keyType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#key_type_variable SystemAaaFeature#key_type_variable}
  */
  readonly keyTypeVariable?: string;
}

export function systemAaaFeatureUsersPublicKeysToTerraform(struct?: SystemAaaFeatureUsersPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_string: cdktf.stringToTerraform(struct!.keyString),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    key_type_variable: cdktf.stringToTerraform(struct!.keyTypeVariable),
  }
}


export function systemAaaFeatureUsersPublicKeysToHclTerraform(struct?: SystemAaaFeatureUsersPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_string: {
      value: cdktf.stringToHclTerraform(struct!.keyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureUsersPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureUsersPublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyString = this._keyString;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._keyTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTypeVariable = this._keyTypeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureUsersPublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyString = undefined;
      this._keyType = undefined;
      this._keyTypeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyString = value.keyString;
      this._keyType = value.keyType;
      this._keyTypeVariable = value.keyTypeVariable;
    }
  }

  // key_string - computed: false, optional: true, required: false
  private _keyString?: string; 
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
  public set keyString(value: string) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_type_variable - computed: false, optional: true, required: false
  private _keyTypeVariable?: string; 
  public get keyTypeVariable() {
    return this.getStringAttribute('key_type_variable');
  }
  public set keyTypeVariable(value: string) {
    this._keyTypeVariable = value;
  }
  public resetKeyTypeVariable() {
    this._keyTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeVariableInput() {
    return this._keyTypeVariable;
  }
}

export class SystemAaaFeatureUsersPublicKeysList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureUsersPublicKeys[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureUsersPublicKeysOutputReference {
    return new SystemAaaFeatureUsersPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAaaFeatureUsers {
  /**
  * Set the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#name SystemAaaFeature#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#name_variable SystemAaaFeature#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Set the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#password SystemAaaFeature#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#password_variable SystemAaaFeature#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Set Privilege Level for this user
  *   - Choices: `1`, `15`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#privilege SystemAaaFeature#privilege}
  */
  readonly privilege?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#privilege_variable SystemAaaFeature#privilege_variable}
  */
  readonly privilegeVariable?: string;
  /**
  * List of RSA public-keys per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#public_keys SystemAaaFeature#public_keys}
  */
  readonly publicKeys?: SystemAaaFeatureUsersPublicKeys[] | cdktf.IResolvable;
}

export function systemAaaFeatureUsersToTerraform(struct?: SystemAaaFeatureUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    password: cdktf.stringToTerraform(struct!.password),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    privilege: cdktf.stringToTerraform(struct!.privilege),
    privilege_variable: cdktf.stringToTerraform(struct!.privilegeVariable),
    public_keys: cdktf.listMapper(systemAaaFeatureUsersPublicKeysToTerraform, false)(struct!.publicKeys),
  }
}


export function systemAaaFeatureUsersToHclTerraform(struct?: SystemAaaFeatureUsers | cdktf.IResolvable): any {
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
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_variable: {
      value: cdktf.stringToHclTerraform(struct!.privilegeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: cdktf.listMapperHcl(systemAaaFeatureUsersPublicKeysToHclTerraform, false)(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAaaFeatureUsersPublicKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAaaFeatureUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAaaFeatureUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    if (this._privilegeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeVariable = this._privilegeVariable;
    }
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAaaFeatureUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._password = undefined;
      this._passwordVariable = undefined;
      this._privilege = undefined;
      this._privilegeVariable = undefined;
      this._publicKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._password = value.password;
      this._passwordVariable = value.passwordVariable;
      this._privilege = value.privilege;
      this._privilegeVariable = value.privilegeVariable;
      this._publicKeys.internalValue = value.publicKeys;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // privilege_variable - computed: false, optional: true, required: false
  private _privilegeVariable?: string; 
  public get privilegeVariable() {
    return this.getStringAttribute('privilege_variable');
  }
  public set privilegeVariable(value: string) {
    this._privilegeVariable = value;
  }
  public resetPrivilegeVariable() {
    this._privilegeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeVariableInput() {
    return this._privilegeVariable;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys = new SystemAaaFeatureUsersPublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: SystemAaaFeatureUsersPublicKeys[] | cdktf.IResolvable) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }
}

export class SystemAaaFeatureUsersList extends cdktf.ComplexList {
  public internalValue? : SystemAaaFeatureUsers[] | cdktf.IResolvable

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
  public get(index: number): SystemAaaFeatureUsersOutputReference {
    return new SystemAaaFeatureUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature sdwan_system_aaa_feature}
*/
export class SystemAaaFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_aaa_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAaaFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAaaFeature to import
  * @param importFromId The id of the existing SystemAaaFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAaaFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_aaa_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_aaa_feature sdwan_system_aaa_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAaaFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAaaFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_aaa_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingGroup = config.accountingGroup;
    this._accountingGroupVariable = config.accountingGroupVariable;
    this._accountingRules.internalValue = config.accountingRules;
    this._authenticationGroup = config.authenticationGroup;
    this._authenticationGroupVariable = config.authenticationGroupVariable;
    this._authorizationConfigCommands = config.authorizationConfigCommands;
    this._authorizationConfigCommandsVariable = config.authorizationConfigCommandsVariable;
    this._authorizationConsole = config.authorizationConsole;
    this._authorizationConsoleVariable = config.authorizationConsoleVariable;
    this._authorizationRules.internalValue = config.authorizationRules;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._radiusGroups.internalValue = config.radiusGroups;
    this._serverAuthOrder = config.serverAuthOrder;
    this._tacacsGroups.internalValue = config.tacacsGroups;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_group - computed: false, optional: true, required: false
  private _accountingGroup?: boolean | cdktf.IResolvable; 
  public get accountingGroup() {
    return this.getBooleanAttribute('accounting_group');
  }
  public set accountingGroup(value: boolean | cdktf.IResolvable) {
    this._accountingGroup = value;
  }
  public resetAccountingGroup() {
    this._accountingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingGroupInput() {
    return this._accountingGroup;
  }

  // accounting_group_variable - computed: false, optional: true, required: false
  private _accountingGroupVariable?: string; 
  public get accountingGroupVariable() {
    return this.getStringAttribute('accounting_group_variable');
  }
  public set accountingGroupVariable(value: string) {
    this._accountingGroupVariable = value;
  }
  public resetAccountingGroupVariable() {
    this._accountingGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingGroupVariableInput() {
    return this._accountingGroupVariable;
  }

  // accounting_rules - computed: false, optional: true, required: false
  private _accountingRules = new SystemAaaFeatureAccountingRulesList(this, "accounting_rules", false);
  public get accountingRules() {
    return this._accountingRules;
  }
  public putAccountingRules(value: SystemAaaFeatureAccountingRules[] | cdktf.IResolvable) {
    this._accountingRules.internalValue = value;
  }
  public resetAccountingRules() {
    this._accountingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingRulesInput() {
    return this._accountingRules.internalValue;
  }

  // authentication_group - computed: false, optional: true, required: false
  private _authenticationGroup?: boolean | cdktf.IResolvable; 
  public get authenticationGroup() {
    return this.getBooleanAttribute('authentication_group');
  }
  public set authenticationGroup(value: boolean | cdktf.IResolvable) {
    this._authenticationGroup = value;
  }
  public resetAuthenticationGroup() {
    this._authenticationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationGroupInput() {
    return this._authenticationGroup;
  }

  // authentication_group_variable - computed: false, optional: true, required: false
  private _authenticationGroupVariable?: string; 
  public get authenticationGroupVariable() {
    return this.getStringAttribute('authentication_group_variable');
  }
  public set authenticationGroupVariable(value: string) {
    this._authenticationGroupVariable = value;
  }
  public resetAuthenticationGroupVariable() {
    this._authenticationGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationGroupVariableInput() {
    return this._authenticationGroupVariable;
  }

  // authorization_config_commands - computed: false, optional: true, required: false
  private _authorizationConfigCommands?: boolean | cdktf.IResolvable; 
  public get authorizationConfigCommands() {
    return this.getBooleanAttribute('authorization_config_commands');
  }
  public set authorizationConfigCommands(value: boolean | cdktf.IResolvable) {
    this._authorizationConfigCommands = value;
  }
  public resetAuthorizationConfigCommands() {
    this._authorizationConfigCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigCommandsInput() {
    return this._authorizationConfigCommands;
  }

  // authorization_config_commands_variable - computed: false, optional: true, required: false
  private _authorizationConfigCommandsVariable?: string; 
  public get authorizationConfigCommandsVariable() {
    return this.getStringAttribute('authorization_config_commands_variable');
  }
  public set authorizationConfigCommandsVariable(value: string) {
    this._authorizationConfigCommandsVariable = value;
  }
  public resetAuthorizationConfigCommandsVariable() {
    this._authorizationConfigCommandsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigCommandsVariableInput() {
    return this._authorizationConfigCommandsVariable;
  }

  // authorization_console - computed: false, optional: true, required: false
  private _authorizationConsole?: boolean | cdktf.IResolvable; 
  public get authorizationConsole() {
    return this.getBooleanAttribute('authorization_console');
  }
  public set authorizationConsole(value: boolean | cdktf.IResolvable) {
    this._authorizationConsole = value;
  }
  public resetAuthorizationConsole() {
    this._authorizationConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConsoleInput() {
    return this._authorizationConsole;
  }

  // authorization_console_variable - computed: false, optional: true, required: false
  private _authorizationConsoleVariable?: string; 
  public get authorizationConsoleVariable() {
    return this.getStringAttribute('authorization_console_variable');
  }
  public set authorizationConsoleVariable(value: string) {
    this._authorizationConsoleVariable = value;
  }
  public resetAuthorizationConsoleVariable() {
    this._authorizationConsoleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConsoleVariableInput() {
    return this._authorizationConsoleVariable;
  }

  // authorization_rules - computed: false, optional: true, required: false
  private _authorizationRules = new SystemAaaFeatureAuthorizationRulesList(this, "authorization_rules", false);
  public get authorizationRules() {
    return this._authorizationRules;
  }
  public putAuthorizationRules(value: SystemAaaFeatureAuthorizationRules[] | cdktf.IResolvable) {
    this._authorizationRules.internalValue = value;
  }
  public resetAuthorizationRules() {
    this._authorizationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationRulesInput() {
    return this._authorizationRules.internalValue;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // radius_groups - computed: false, optional: true, required: false
  private _radiusGroups = new SystemAaaFeatureRadiusGroupsList(this, "radius_groups", false);
  public get radiusGroups() {
    return this._radiusGroups;
  }
  public putRadiusGroups(value: SystemAaaFeatureRadiusGroups[] | cdktf.IResolvable) {
    this._radiusGroups.internalValue = value;
  }
  public resetRadiusGroups() {
    this._radiusGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupsInput() {
    return this._radiusGroups.internalValue;
  }

  // server_auth_order - computed: false, optional: false, required: true
  private _serverAuthOrder?: string[]; 
  public get serverAuthOrder() {
    return this.getListAttribute('server_auth_order');
  }
  public set serverAuthOrder(value: string[]) {
    this._serverAuthOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthOrderInput() {
    return this._serverAuthOrder;
  }

  // tacacs_groups - computed: false, optional: true, required: false
  private _tacacsGroups = new SystemAaaFeatureTacacsGroupsList(this, "tacacs_groups", false);
  public get tacacsGroups() {
    return this._tacacsGroups;
  }
  public putTacacsGroups(value: SystemAaaFeatureTacacsGroups[] | cdktf.IResolvable) {
    this._tacacsGroups.internalValue = value;
  }
  public resetTacacsGroups() {
    this._tacacsGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsGroupsInput() {
    return this._tacacsGroups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SystemAaaFeatureUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SystemAaaFeatureUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_group: cdktf.booleanToTerraform(this._accountingGroup),
      accounting_group_variable: cdktf.stringToTerraform(this._accountingGroupVariable),
      accounting_rules: cdktf.listMapper(systemAaaFeatureAccountingRulesToTerraform, false)(this._accountingRules.internalValue),
      authentication_group: cdktf.booleanToTerraform(this._authenticationGroup),
      authentication_group_variable: cdktf.stringToTerraform(this._authenticationGroupVariable),
      authorization_config_commands: cdktf.booleanToTerraform(this._authorizationConfigCommands),
      authorization_config_commands_variable: cdktf.stringToTerraform(this._authorizationConfigCommandsVariable),
      authorization_console: cdktf.booleanToTerraform(this._authorizationConsole),
      authorization_console_variable: cdktf.stringToTerraform(this._authorizationConsoleVariable),
      authorization_rules: cdktf.listMapper(systemAaaFeatureAuthorizationRulesToTerraform, false)(this._authorizationRules.internalValue),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      radius_groups: cdktf.listMapper(systemAaaFeatureRadiusGroupsToTerraform, false)(this._radiusGroups.internalValue),
      server_auth_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverAuthOrder),
      tacacs_groups: cdktf.listMapper(systemAaaFeatureTacacsGroupsToTerraform, false)(this._tacacsGroups.internalValue),
      users: cdktf.listMapper(systemAaaFeatureUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_group: {
        value: cdktf.booleanToHclTerraform(this._accountingGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accounting_group_variable: {
        value: cdktf.stringToHclTerraform(this._accountingGroupVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_rules: {
        value: cdktf.listMapperHcl(systemAaaFeatureAccountingRulesToHclTerraform, false)(this._accountingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAaaFeatureAccountingRulesList",
      },
      authentication_group: {
        value: cdktf.booleanToHclTerraform(this._authenticationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_group_variable: {
        value: cdktf.stringToHclTerraform(this._authenticationGroupVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_config_commands: {
        value: cdktf.booleanToHclTerraform(this._authorizationConfigCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_config_commands_variable: {
        value: cdktf.stringToHclTerraform(this._authorizationConfigCommandsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_console: {
        value: cdktf.booleanToHclTerraform(this._authorizationConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_console_variable: {
        value: cdktf.stringToHclTerraform(this._authorizationConsoleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_rules: {
        value: cdktf.listMapperHcl(systemAaaFeatureAuthorizationRulesToHclTerraform, false)(this._authorizationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAaaFeatureAuthorizationRulesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      radius_groups: {
        value: cdktf.listMapperHcl(systemAaaFeatureRadiusGroupsToHclTerraform, false)(this._radiusGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAaaFeatureRadiusGroupsList",
      },
      server_auth_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverAuthOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tacacs_groups: {
        value: cdktf.listMapperHcl(systemAaaFeatureTacacsGroupsToHclTerraform, false)(this._tacacsGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAaaFeatureTacacsGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(systemAaaFeatureUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAaaFeatureUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
