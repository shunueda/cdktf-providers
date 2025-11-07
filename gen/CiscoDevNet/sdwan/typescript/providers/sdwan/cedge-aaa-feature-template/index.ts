// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CedgeAaaFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure the accounting rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#accounting_rules CedgeAaaFeatureTemplate#accounting_rules}
  */
  readonly accountingRules?: CedgeAaaFeatureTemplateAccountingRules[] | cdktf.IResolvable;
  /**
  * For configuration mode commands.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authorization_config_commands CedgeAaaFeatureTemplate#authorization_config_commands}
  */
  readonly authorizationConfigCommands?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authorization_config_commands_variable CedgeAaaFeatureTemplate#authorization_config_commands_variable}
  */
  readonly authorizationConfigCommandsVariable?: string;
  /**
  * For enabling console authorization
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authorization_console CedgeAaaFeatureTemplate#authorization_console}
  */
  readonly authorizationConsole?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authorization_console_variable CedgeAaaFeatureTemplate#authorization_console_variable}
  */
  readonly authorizationConsoleVariable?: string;
  /**
  * Configure the Authorization Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authorization_rules CedgeAaaFeatureTemplate#authorization_rules}
  */
  readonly authorizationRules?: CedgeAaaFeatureTemplateAuthorizationRules[] | cdktf.IResolvable;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#description CedgeAaaFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#device_types CedgeAaaFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Accounting configurations parameters
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#dot1x_accounting CedgeAaaFeatureTemplate#dot1x_accounting}
  */
  readonly dot1XAccounting?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#dot1x_accounting_variable CedgeAaaFeatureTemplate#dot1x_accounting_variable}
  */
  readonly dot1XAccountingVariable?: string;
  /**
  * Authentication configurations parameters
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#dot1x_authentication CedgeAaaFeatureTemplate#dot1x_authentication}
  */
  readonly dot1XAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#dot1x_authentication_variable CedgeAaaFeatureTemplate#dot1x_authentication_variable}
  */
  readonly dot1XAuthenticationVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#name CedgeAaaFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Specify a RADIUS client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_clients CedgeAaaFeatureTemplate#radius_clients}
  */
  readonly radiusClients?: CedgeAaaFeatureTemplateRadiusClients[] | cdktf.IResolvable;
  /**
  * Authentication Type
  *   - Choices: `any`, `all`, `session-key`
  *   - Default value: `any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_authentication_type CedgeAaaFeatureTemplate#radius_dynamic_author_authentication_type}
  */
  readonly radiusDynamicAuthorAuthenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_authentication_type_variable CedgeAaaFeatureTemplate#radius_dynamic_author_authentication_type_variable}
  */
  readonly radiusDynamicAuthorAuthenticationTypeVariable?: string;
  /**
  * Domain Stripping
  *   - Choices: `yes`, `no`, `right-to-left`
  *   - Default value: `no`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_domain_stripping CedgeAaaFeatureTemplate#radius_dynamic_author_domain_stripping}
  */
  readonly radiusDynamicAuthorDomainStripping?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_domain_stripping_variable CedgeAaaFeatureTemplate#radius_dynamic_author_domain_stripping_variable}
  */
  readonly radiusDynamicAuthorDomainStrippingVariable?: string;
  /**
  * Specify Radius Dynamic Author Port
  *   - Range: `0`-`65535`
  *   - Default value: `1700`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_port CedgeAaaFeatureTemplate#radius_dynamic_author_port}
  */
  readonly radiusDynamicAuthorPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_port_variable CedgeAaaFeatureTemplate#radius_dynamic_author_port_variable}
  */
  readonly radiusDynamicAuthorPortVariable?: string;
  /**
  * Specify a radius dynamic author server-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_server_key CedgeAaaFeatureTemplate#radius_dynamic_author_server_key}
  */
  readonly radiusDynamicAuthorServerKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_dynamic_author_server_key_variable CedgeAaaFeatureTemplate#radius_dynamic_author_server_key_variable}
  */
  readonly radiusDynamicAuthorServerKeyVariable?: string;
  /**
  * Configure the Radius serverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_server_groups CedgeAaaFeatureTemplate#radius_server_groups}
  */
  readonly radiusServerGroups?: CedgeAaaFeatureTemplateRadiusServerGroups[] | cdktf.IResolvable;
  /**
  * CTS Authorization List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_trustsec_cts_authorization_list CedgeAaaFeatureTemplate#radius_trustsec_cts_authorization_list}
  */
  readonly radiusTrustsecCtsAuthorizationList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_trustsec_cts_authorization_list_variable CedgeAaaFeatureTemplate#radius_trustsec_cts_authorization_list_variable}
  */
  readonly radiusTrustsecCtsAuthorizationListVariable?: string;
  /**
  * RADIUS trustsec group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#radius_trustsec_group CedgeAaaFeatureTemplate#radius_trustsec_group}
  */
  readonly radiusTrustsecGroup?: string;
  /**
  * ServerGroups priority order
  *   - Default value: `local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#server_groups_priority_order CedgeAaaFeatureTemplate#server_groups_priority_order}
  */
  readonly serverGroupsPriorityOrder?: string;
  /**
  * Configure the TACACS serverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#tacacs_server_groups CedgeAaaFeatureTemplate#tacacs_server_groups}
  */
  readonly tacacsServerGroups?: CedgeAaaFeatureTemplateTacacsServerGroups[] | cdktf.IResolvable;
  /**
  * Create local login account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#users CedgeAaaFeatureTemplate#users}
  */
  readonly users?: CedgeAaaFeatureTemplateUsers[] | cdktf.IResolvable;
}
export interface CedgeAaaFeatureTemplateAccountingRules {
  /**
  * Comma separated list of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#groups CedgeAaaFeatureTemplate#groups}
  */
  readonly groups?: string;
  /**
  * Configure Accounting Method
  *   - Choices: `commands`, `exec`, `network`, `system`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#method CedgeAaaFeatureTemplate#method}
  */
  readonly method?: string;
  /**
  * Configure Accounting Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#name CedgeAaaFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Privilege level when method is commands
  *   - Choices: `1`, `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#privilege_level CedgeAaaFeatureTemplate#privilege_level}
  */
  readonly privilegeLevel?: string;
  /**
  * Record start and stop without waiting
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#start_stop CedgeAaaFeatureTemplate#start_stop}
  */
  readonly startStop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#start_stop_variable CedgeAaaFeatureTemplate#start_stop_variable}
  */
  readonly startStopVariable?: string;
}

export function cedgeAaaFeatureTemplateAccountingRulesToTerraform(struct?: CedgeAaaFeatureTemplateAccountingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.stringToTerraform(struct!.groups),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privilege_level: cdktf.stringToTerraform(struct!.privilegeLevel),
    start_stop: cdktf.booleanToTerraform(struct!.startStop),
    start_stop_variable: cdktf.stringToTerraform(struct!.startStopVariable),
  }
}


export function cedgeAaaFeatureTemplateAccountingRulesToHclTerraform(struct?: CedgeAaaFeatureTemplateAccountingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privilege_level: {
      value: cdktf.stringToHclTerraform(struct!.privilegeLevel),
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

export class CedgeAaaFeatureTemplateAccountingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateAccountingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privilegeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeLevel = this._privilegeLevel;
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

  public set internalValue(value: CedgeAaaFeatureTemplateAccountingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._method = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privilegeLevel = undefined;
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
      this._groups = value.groups;
      this._method = value.method;
      this._name = value.name;
      this._optional = value.optional;
      this._privilegeLevel = value.privilegeLevel;
      this._startStop = value.startStop;
      this._startStopVariable = value.startStopVariable;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privilege_level - computed: false, optional: true, required: false
  private _privilegeLevel?: string; 
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }
  public set privilegeLevel(value: string) {
    this._privilegeLevel = value;
  }
  public resetPrivilegeLevel() {
    this._privilegeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeLevelInput() {
    return this._privilegeLevel;
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

export class CedgeAaaFeatureTemplateAccountingRulesList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateAccountingRules[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateAccountingRulesOutputReference {
    return new CedgeAaaFeatureTemplateAccountingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateAuthorizationRules {
  /**
  * Succeed if user has authenticated
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authenticated CedgeAaaFeatureTemplate#authenticated}
  */
  readonly authenticated?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#groups CedgeAaaFeatureTemplate#groups}
  */
  readonly groups?: string;
  /**
  * Method
  *   - Choices: `commands`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#method CedgeAaaFeatureTemplate#method}
  */
  readonly method?: string;
  /**
  * Configure Authorization Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#name CedgeAaaFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Privilege level when method is commands
  *   - Choices: `1`, `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#privilege_level CedgeAaaFeatureTemplate#privilege_level}
  */
  readonly privilegeLevel?: string;
}

export function cedgeAaaFeatureTemplateAuthorizationRulesToTerraform(struct?: CedgeAaaFeatureTemplateAuthorizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticated: cdktf.booleanToTerraform(struct!.authenticated),
    groups: cdktf.stringToTerraform(struct!.groups),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privilege_level: cdktf.stringToTerraform(struct!.privilegeLevel),
  }
}


export function cedgeAaaFeatureTemplateAuthorizationRulesToHclTerraform(struct?: CedgeAaaFeatureTemplateAuthorizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.authenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privilege_level: {
      value: cdktf.stringToHclTerraform(struct!.privilegeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateAuthorizationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateAuthorizationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticated = this._authenticated;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privilegeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeLevel = this._privilegeLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateAuthorizationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticated = undefined;
      this._groups = undefined;
      this._method = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privilegeLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticated = value.authenticated;
      this._groups = value.groups;
      this._method = value.method;
      this._name = value.name;
      this._optional = value.optional;
      this._privilegeLevel = value.privilegeLevel;
    }
  }

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: boolean | cdktf.IResolvable; 
  public get authenticated() {
    return this.getBooleanAttribute('authenticated');
  }
  public set authenticated(value: boolean | cdktf.IResolvable) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privilege_level - computed: false, optional: true, required: false
  private _privilegeLevel?: string; 
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }
  public set privilegeLevel(value: string) {
    this._privilegeLevel = value;
  }
  public resetPrivilegeLevel() {
    this._privilegeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeLevelInput() {
    return this._privilegeLevel;
  }
}

export class CedgeAaaFeatureTemplateAuthorizationRulesList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateAuthorizationRules[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateAuthorizationRulesOutputReference {
    return new CedgeAaaFeatureTemplateAuthorizationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Specify a RADIUS client server-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#server_key CedgeAaaFeatureTemplate#server_key}
  */
  readonly serverKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#server_key_variable CedgeAaaFeatureTemplate#server_key_variable}
  */
  readonly serverKeyVariable?: string;
  /**
  * VPN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#vpn_id CedgeAaaFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#vpn_id_variable CedgeAaaFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function cedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToTerraform(struct?: CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    server_key: cdktf.stringToTerraform(struct!.serverKey),
    server_key_variable: cdktf.stringToTerraform(struct!.serverKeyVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function cedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToHclTerraform(struct?: CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.serverKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    if (this._serverKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeyVariable = this._serverKeyVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._serverKey = undefined;
      this._serverKeyVariable = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._serverKey = value.serverKey;
      this._serverKeyVariable = value.serverKeyVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // server_key - computed: false, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // server_key_variable - computed: false, optional: true, required: false
  private _serverKeyVariable?: string; 
  public get serverKeyVariable() {
    return this.getStringAttribute('server_key_variable');
  }
  public set serverKeyVariable(value: string) {
    this._serverKeyVariable = value;
  }
  public resetServerKeyVariable() {
    this._serverKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyVariableInput() {
    return this._serverKeyVariable;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference {
    return new CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateRadiusClients {
  /**
  * Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#client_ip CedgeAaaFeatureTemplate#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#client_ip_variable CedgeAaaFeatureTemplate#client_ip_variable}
  */
  readonly clientIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * VPN configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#vpn_configurations CedgeAaaFeatureTemplate#vpn_configurations}
  */
  readonly vpnConfigurations?: CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations[] | cdktf.IResolvable;
}

export function cedgeAaaFeatureTemplateRadiusClientsToTerraform(struct?: CedgeAaaFeatureTemplateRadiusClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    client_ip_variable: cdktf.stringToTerraform(struct!.clientIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vpn_configurations: cdktf.listMapper(cedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToTerraform, false)(struct!.vpnConfigurations),
  }
}


export function cedgeAaaFeatureTemplateRadiusClientsToHclTerraform(struct?: CedgeAaaFeatureTemplateRadiusClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.clientIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_configurations: {
      value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsToHclTerraform, false)(struct!.vpnConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateRadiusClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateRadiusClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._clientIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpVariable = this._clientIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vpnConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnConfigurations = this._vpnConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateRadiusClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp = undefined;
      this._clientIpVariable = undefined;
      this._optional = undefined;
      this._vpnConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp = value.clientIp;
      this._clientIpVariable = value.clientIpVariable;
      this._optional = value.optional;
      this._vpnConfigurations.internalValue = value.vpnConfigurations;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // client_ip_variable - computed: false, optional: true, required: false
  private _clientIpVariable?: string; 
  public get clientIpVariable() {
    return this.getStringAttribute('client_ip_variable');
  }
  public set clientIpVariable(value: string) {
    this._clientIpVariable = value;
  }
  public resetClientIpVariable() {
    this._clientIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpVariableInput() {
    return this._clientIpVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // vpn_configurations - computed: false, optional: true, required: false
  private _vpnConfigurations = new CedgeAaaFeatureTemplateRadiusClientsVpnConfigurationsList(this, "vpn_configurations", false);
  public get vpnConfigurations() {
    return this._vpnConfigurations;
  }
  public putVpnConfigurations(value: CedgeAaaFeatureTemplateRadiusClientsVpnConfigurations[] | cdktf.IResolvable) {
    this._vpnConfigurations.internalValue = value;
  }
  public resetVpnConfigurations() {
    this._vpnConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConfigurationsInput() {
    return this._vpnConfigurations.internalValue;
  }
}

export class CedgeAaaFeatureTemplateRadiusClientsList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateRadiusClients[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateRadiusClientsOutputReference {
    return new CedgeAaaFeatureTemplateRadiusClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateRadiusServerGroupsServers {
  /**
  * Set Accounting port to use to connect to Radius server
  *   - Range: `1`-`65534`
  *   - Default value: `1813`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#accounting_port CedgeAaaFeatureTemplate#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#accounting_port_variable CedgeAaaFeatureTemplate#accounting_port_variable}
  */
  readonly accountingPortVariable?: string;
  /**
  * Set IP address of Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#address CedgeAaaFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Set Authentication port to use to connect to Radius server
  *   - Range: `1`-`65534`
  *   - Default value: `1812`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authentication_port CedgeAaaFeatureTemplate#authentication_port}
  */
  readonly authenticationPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#authentication_port_variable CedgeAaaFeatureTemplate#authentication_port_variable}
  */
  readonly authenticationPortVariable?: string;
  /**
  * Type of encyption. To be used for type 6
  *   - Choices: `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#encryption_type CedgeAaaFeatureTemplate#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Set the Radius server shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key CedgeAaaFeatureTemplate#key}
  */
  readonly key?: string;
  /**
  * key type
  *   - Choices: `key`, `pac`
  *   - Default value: `key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key_type CedgeAaaFeatureTemplate#key_type}
  */
  readonly keyType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key_type_variable CedgeAaaFeatureTemplate#key_type_variable}
  */
  readonly keyTypeVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure how many times to contact this Radius server
  *   - Range: `1`-`100`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#retransmit CedgeAaaFeatureTemplate#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#retransmit_variable CedgeAaaFeatureTemplate#retransmit_variable}
  */
  readonly retransmitVariable?: string;
  /**
  * Set the Radius server shared type 7 encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#secret_key CedgeAaaFeatureTemplate#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#secret_key_variable CedgeAaaFeatureTemplate#secret_key_variable}
  */
  readonly secretKeyVariable?: string;
  /**
  * Configure how long to wait for replies from the Radius server
  *   - Range: `1`-`1000`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#timeout CedgeAaaFeatureTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#timeout_variable CedgeAaaFeatureTemplate#timeout_variable}
  */
  readonly timeoutVariable?: string;
}

export function cedgeAaaFeatureTemplateRadiusServerGroupsServersToTerraform(struct?: CedgeAaaFeatureTemplateRadiusServerGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    accounting_port_variable: cdktf.stringToTerraform(struct!.accountingPortVariable),
    address: cdktf.stringToTerraform(struct!.address),
    authentication_port: cdktf.numberToTerraform(struct!.authenticationPort),
    authentication_port_variable: cdktf.stringToTerraform(struct!.authenticationPortVariable),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    key: cdktf.stringToTerraform(struct!.key),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    key_type_variable: cdktf.stringToTerraform(struct!.keyTypeVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    retransmit_variable: cdktf.stringToTerraform(struct!.retransmitVariable),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_key_variable: cdktf.stringToTerraform(struct!.secretKeyVariable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_variable: cdktf.stringToTerraform(struct!.timeoutVariable),
  }
}


export function cedgeAaaFeatureTemplateRadiusServerGroupsServersToHclTerraform(struct?: CedgeAaaFeatureTemplateRadiusServerGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.accountingPortVariable),
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
    authentication_port: {
      value: cdktf.numberToHclTerraform(struct!.authenticationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateRadiusServerGroupsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._accountingPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPortVariable = this._accountingPortVariable;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authenticationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPort = this._authenticationPort;
    }
    if (this._authenticationPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPortVariable = this._authenticationPortVariable;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._keyTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTypeVariable = this._keyTypeVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CedgeAaaFeatureTemplateRadiusServerGroupsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._accountingPortVariable = undefined;
      this._address = undefined;
      this._authenticationPort = undefined;
      this._authenticationPortVariable = undefined;
      this._encryptionType = undefined;
      this._key = undefined;
      this._keyType = undefined;
      this._keyTypeVariable = undefined;
      this._optional = undefined;
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
      this._accountingPort = value.accountingPort;
      this._accountingPortVariable = value.accountingPortVariable;
      this._address = value.address;
      this._authenticationPort = value.authenticationPort;
      this._authenticationPortVariable = value.authenticationPortVariable;
      this._encryptionType = value.encryptionType;
      this._key = value.key;
      this._keyType = value.keyType;
      this._keyTypeVariable = value.keyTypeVariable;
      this._optional = value.optional;
      this._retransmit = value.retransmit;
      this._retransmitVariable = value.retransmitVariable;
      this._secretKey = value.secretKey;
      this._secretKeyVariable = value.secretKeyVariable;
      this._timeout = value.timeout;
      this._timeoutVariable = value.timeoutVariable;
    }
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // accounting_port_variable - computed: false, optional: true, required: false
  private _accountingPortVariable?: string; 
  public get accountingPortVariable() {
    return this.getStringAttribute('accounting_port_variable');
  }
  public set accountingPortVariable(value: string) {
    this._accountingPortVariable = value;
  }
  public resetAccountingPortVariable() {
    this._accountingPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortVariableInput() {
    return this._accountingPortVariable;
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

  // authentication_port - computed: false, optional: true, required: false
  private _authenticationPort?: number; 
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }
  public set authenticationPort(value: number) {
    this._authenticationPort = value;
  }
  public resetAuthenticationPort() {
    this._authenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortInput() {
    return this._authenticationPort;
  }

  // authentication_port_variable - computed: false, optional: true, required: false
  private _authenticationPortVariable?: string; 
  public get authenticationPortVariable() {
    return this.getStringAttribute('authentication_port_variable');
  }
  public set authenticationPortVariable(value: string) {
    this._authenticationPortVariable = value;
  }
  public resetAuthenticationPortVariable() {
    this._authenticationPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortVariableInput() {
    return this._authenticationPortVariable;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CedgeAaaFeatureTemplateRadiusServerGroupsServersList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateRadiusServerGroupsServers[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference {
    return new CedgeAaaFeatureTemplateRadiusServerGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateRadiusServerGroups {
  /**
  * Set Radius server Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#group_name CedgeAaaFeatureTemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#servers CedgeAaaFeatureTemplate#servers}
  */
  readonly servers?: CedgeAaaFeatureTemplateRadiusServerGroupsServers[] | cdktf.IResolvable;
  /**
  * Set interface to use to reach Radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#source_interface CedgeAaaFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#source_interface_variable CedgeAaaFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which Radius server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#vpn_id CedgeAaaFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function cedgeAaaFeatureTemplateRadiusServerGroupsToTerraform(struct?: CedgeAaaFeatureTemplateRadiusServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    optional: cdktf.booleanToTerraform(struct!.optional),
    servers: cdktf.listMapper(cedgeAaaFeatureTemplateRadiusServerGroupsServersToTerraform, false)(struct!.servers),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function cedgeAaaFeatureTemplateRadiusServerGroupsToHclTerraform(struct?: CedgeAaaFeatureTemplateRadiusServerGroups | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    servers: {
      value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateRadiusServerGroupsServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "CedgeAaaFeatureTemplateRadiusServerGroupsServersList",
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
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateRadiusServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateRadiusServerGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateRadiusServerGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._optional = undefined;
      this._servers.internalValue = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._optional = value.optional;
      this._servers.internalValue = value.servers;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpnId = value.vpnId;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new CedgeAaaFeatureTemplateRadiusServerGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: CedgeAaaFeatureTemplateRadiusServerGroupsServers[] | cdktf.IResolvable) {
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CedgeAaaFeatureTemplateRadiusServerGroupsList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateRadiusServerGroups[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateRadiusServerGroupsOutputReference {
    return new CedgeAaaFeatureTemplateRadiusServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateTacacsServerGroupsServers {
  /**
  * Set IP address of TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#address CedgeAaaFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Type of encyption. To be used for type 6
  *   - Choices: `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#encryption_type CedgeAaaFeatureTemplate#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Set the TACACS server shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key CedgeAaaFeatureTemplate#key}
  */
  readonly key?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * TACACS Port
  *   - Range: `1`-`65535`
  *   - Default value: `49`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#port CedgeAaaFeatureTemplate#port}
  */
  readonly port?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#port_variable CedgeAaaFeatureTemplate#port_variable}
  */
  readonly portVariable?: string;
  /**
  * Set the TACACS server shared type 7 encrypted key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#secret_key CedgeAaaFeatureTemplate#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#secret_key_variable CedgeAaaFeatureTemplate#secret_key_variable}
  */
  readonly secretKeyVariable?: string;
  /**
  * Configure how long to wait for replies from the TACACS server
  *   - Range: `1`-`1000`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#timeout CedgeAaaFeatureTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#timeout_variable CedgeAaaFeatureTemplate#timeout_variable}
  */
  readonly timeoutVariable?: string;
}

export function cedgeAaaFeatureTemplateTacacsServerGroupsServersToTerraform(struct?: CedgeAaaFeatureTemplateTacacsServerGroupsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    key: cdktf.stringToTerraform(struct!.key),
    optional: cdktf.booleanToTerraform(struct!.optional),
    port: cdktf.numberToTerraform(struct!.port),
    port_variable: cdktf.stringToTerraform(struct!.portVariable),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_key_variable: cdktf.stringToTerraform(struct!.secretKeyVariable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_variable: cdktf.stringToTerraform(struct!.timeoutVariable),
  }
}


export function cedgeAaaFeatureTemplateTacacsServerGroupsServersToHclTerraform(struct?: CedgeAaaFeatureTemplateTacacsServerGroupsServers | cdktf.IResolvable): any {
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
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateTacacsServerGroupsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CedgeAaaFeatureTemplateTacacsServerGroupsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._encryptionType = undefined;
      this._key = undefined;
      this._optional = undefined;
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
      this._encryptionType = value.encryptionType;
      this._key = value.key;
      this._optional = value.optional;
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

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CedgeAaaFeatureTemplateTacacsServerGroupsServersList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateTacacsServerGroupsServers[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference {
    return new CedgeAaaFeatureTemplateTacacsServerGroupsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateTacacsServerGroups {
  /**
  * Set TACACS server Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#group_name CedgeAaaFeatureTemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#servers CedgeAaaFeatureTemplate#servers}
  */
  readonly servers?: CedgeAaaFeatureTemplateTacacsServerGroupsServers[] | cdktf.IResolvable;
  /**
  * Set interface to use to reach TACACS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#source_interface CedgeAaaFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#source_interface_variable CedgeAaaFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which TACACS server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#vpn_id CedgeAaaFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function cedgeAaaFeatureTemplateTacacsServerGroupsToTerraform(struct?: CedgeAaaFeatureTemplateTacacsServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    optional: cdktf.booleanToTerraform(struct!.optional),
    servers: cdktf.listMapper(cedgeAaaFeatureTemplateTacacsServerGroupsServersToTerraform, false)(struct!.servers),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function cedgeAaaFeatureTemplateTacacsServerGroupsToHclTerraform(struct?: CedgeAaaFeatureTemplateTacacsServerGroups | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    servers: {
      value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateTacacsServerGroupsServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "CedgeAaaFeatureTemplateTacacsServerGroupsServersList",
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
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateTacacsServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateTacacsServerGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateTacacsServerGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._optional = undefined;
      this._servers.internalValue = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._optional = value.optional;
      this._servers.internalValue = value.servers;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpnId = value.vpnId;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new CedgeAaaFeatureTemplateTacacsServerGroupsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: CedgeAaaFeatureTemplateTacacsServerGroupsServers[] | cdktf.IResolvable) {
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CedgeAaaFeatureTemplateTacacsServerGroupsList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateTacacsServerGroups[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateTacacsServerGroupsOutputReference {
    return new CedgeAaaFeatureTemplateTacacsServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateUsersSshPubkeys {
  /**
  * Set the RSA key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key_string CedgeAaaFeatureTemplate#key_string}
  */
  readonly keyString?: string;
  /**
  * Only RSA is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key_type CedgeAaaFeatureTemplate#key_type}
  */
  readonly keyType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#key_type_variable CedgeAaaFeatureTemplate#key_type_variable}
  */
  readonly keyTypeVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function cedgeAaaFeatureTemplateUsersSshPubkeysToTerraform(struct?: CedgeAaaFeatureTemplateUsersSshPubkeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_string: cdktf.stringToTerraform(struct!.keyString),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    key_type_variable: cdktf.stringToTerraform(struct!.keyTypeVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function cedgeAaaFeatureTemplateUsersSshPubkeysToHclTerraform(struct?: CedgeAaaFeatureTemplateUsersSshPubkeys | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateUsersSshPubkeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateUsersSshPubkeys | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateUsersSshPubkeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyString = undefined;
      this._keyType = undefined;
      this._keyTypeVariable = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CedgeAaaFeatureTemplateUsersSshPubkeysList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateUsersSshPubkeys[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateUsersSshPubkeysOutputReference {
    return new CedgeAaaFeatureTemplateUsersSshPubkeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeAaaFeatureTemplateUsers {
  /**
  * Set the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#name CedgeAaaFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#name_variable CedgeAaaFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#optional CedgeAaaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#password CedgeAaaFeatureTemplate#password}
  */
  readonly password?: string;
  /**
  * Set Privilege Level for this user
  *   - Choices: `1`, `15`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#privilege_level CedgeAaaFeatureTemplate#privilege_level}
  */
  readonly privilegeLevel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#privilege_level_variable CedgeAaaFeatureTemplate#privilege_level_variable}
  */
  readonly privilegeLevelVariable?: string;
  /**
  * Set the user scrypt password/hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#secret CedgeAaaFeatureTemplate#secret}
  */
  readonly secret?: string;
  /**
  * List of RSA public-keys per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#ssh_pubkeys CedgeAaaFeatureTemplate#ssh_pubkeys}
  */
  readonly sshPubkeys?: CedgeAaaFeatureTemplateUsersSshPubkeys[] | cdktf.IResolvable;
}

export function cedgeAaaFeatureTemplateUsersToTerraform(struct?: CedgeAaaFeatureTemplateUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    password: cdktf.stringToTerraform(struct!.password),
    privilege_level: cdktf.stringToTerraform(struct!.privilegeLevel),
    privilege_level_variable: cdktf.stringToTerraform(struct!.privilegeLevelVariable),
    secret: cdktf.stringToTerraform(struct!.secret),
    ssh_pubkeys: cdktf.listMapper(cedgeAaaFeatureTemplateUsersSshPubkeysToTerraform, false)(struct!.sshPubkeys),
  }
}


export function cedgeAaaFeatureTemplateUsersToHclTerraform(struct?: CedgeAaaFeatureTemplateUsers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_level: {
      value: cdktf.stringToHclTerraform(struct!.privilegeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege_level_variable: {
      value: cdktf.stringToHclTerraform(struct!.privilegeLevelVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_pubkeys: {
      value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateUsersSshPubkeysToHclTerraform, false)(struct!.sshPubkeys),
      isBlock: true,
      type: "list",
      storageClassType: "CedgeAaaFeatureTemplateUsersSshPubkeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeAaaFeatureTemplateUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeAaaFeatureTemplateUsers | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privilegeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeLevel = this._privilegeLevel;
    }
    if (this._privilegeLevelVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeLevelVariable = this._privilegeLevelVariable;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._sshPubkeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPubkeys = this._sshPubkeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeAaaFeatureTemplateUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._password = undefined;
      this._privilegeLevel = undefined;
      this._privilegeLevelVariable = undefined;
      this._secret = undefined;
      this._sshPubkeys.internalValue = undefined;
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
      this._optional = value.optional;
      this._password = value.password;
      this._privilegeLevel = value.privilegeLevel;
      this._privilegeLevelVariable = value.privilegeLevelVariable;
      this._secret = value.secret;
      this._sshPubkeys.internalValue = value.sshPubkeys;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // privilege_level - computed: false, optional: true, required: false
  private _privilegeLevel?: string; 
  public get privilegeLevel() {
    return this.getStringAttribute('privilege_level');
  }
  public set privilegeLevel(value: string) {
    this._privilegeLevel = value;
  }
  public resetPrivilegeLevel() {
    this._privilegeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeLevelInput() {
    return this._privilegeLevel;
  }

  // privilege_level_variable - computed: false, optional: true, required: false
  private _privilegeLevelVariable?: string; 
  public get privilegeLevelVariable() {
    return this.getStringAttribute('privilege_level_variable');
  }
  public set privilegeLevelVariable(value: string) {
    this._privilegeLevelVariable = value;
  }
  public resetPrivilegeLevelVariable() {
    this._privilegeLevelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeLevelVariableInput() {
    return this._privilegeLevelVariable;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // ssh_pubkeys - computed: false, optional: true, required: false
  private _sshPubkeys = new CedgeAaaFeatureTemplateUsersSshPubkeysList(this, "ssh_pubkeys", false);
  public get sshPubkeys() {
    return this._sshPubkeys;
  }
  public putSshPubkeys(value: CedgeAaaFeatureTemplateUsersSshPubkeys[] | cdktf.IResolvable) {
    this._sshPubkeys.internalValue = value;
  }
  public resetSshPubkeys() {
    this._sshPubkeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPubkeysInput() {
    return this._sshPubkeys.internalValue;
  }
}

export class CedgeAaaFeatureTemplateUsersList extends cdktf.ComplexList {
  public internalValue? : CedgeAaaFeatureTemplateUsers[] | cdktf.IResolvable

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
  public get(index: number): CedgeAaaFeatureTemplateUsersOutputReference {
    return new CedgeAaaFeatureTemplateUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template sdwan_cedge_aaa_feature_template}
*/
export class CedgeAaaFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_aaa_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CedgeAaaFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CedgeAaaFeatureTemplate to import
  * @param importFromId The id of the existing CedgeAaaFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CedgeAaaFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_aaa_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_aaa_feature_template sdwan_cedge_aaa_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CedgeAaaFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CedgeAaaFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_aaa_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingRules.internalValue = config.accountingRules;
    this._authorizationConfigCommands = config.authorizationConfigCommands;
    this._authorizationConfigCommandsVariable = config.authorizationConfigCommandsVariable;
    this._authorizationConsole = config.authorizationConsole;
    this._authorizationConsoleVariable = config.authorizationConsoleVariable;
    this._authorizationRules.internalValue = config.authorizationRules;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._dot1XAccounting = config.dot1XAccounting;
    this._dot1XAccountingVariable = config.dot1XAccountingVariable;
    this._dot1XAuthentication = config.dot1XAuthentication;
    this._dot1XAuthenticationVariable = config.dot1XAuthenticationVariable;
    this._name = config.name;
    this._radiusClients.internalValue = config.radiusClients;
    this._radiusDynamicAuthorAuthenticationType = config.radiusDynamicAuthorAuthenticationType;
    this._radiusDynamicAuthorAuthenticationTypeVariable = config.radiusDynamicAuthorAuthenticationTypeVariable;
    this._radiusDynamicAuthorDomainStripping = config.radiusDynamicAuthorDomainStripping;
    this._radiusDynamicAuthorDomainStrippingVariable = config.radiusDynamicAuthorDomainStrippingVariable;
    this._radiusDynamicAuthorPort = config.radiusDynamicAuthorPort;
    this._radiusDynamicAuthorPortVariable = config.radiusDynamicAuthorPortVariable;
    this._radiusDynamicAuthorServerKey = config.radiusDynamicAuthorServerKey;
    this._radiusDynamicAuthorServerKeyVariable = config.radiusDynamicAuthorServerKeyVariable;
    this._radiusServerGroups.internalValue = config.radiusServerGroups;
    this._radiusTrustsecCtsAuthorizationList = config.radiusTrustsecCtsAuthorizationList;
    this._radiusTrustsecCtsAuthorizationListVariable = config.radiusTrustsecCtsAuthorizationListVariable;
    this._radiusTrustsecGroup = config.radiusTrustsecGroup;
    this._serverGroupsPriorityOrder = config.serverGroupsPriorityOrder;
    this._tacacsServerGroups.internalValue = config.tacacsServerGroups;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_rules - computed: false, optional: true, required: false
  private _accountingRules = new CedgeAaaFeatureTemplateAccountingRulesList(this, "accounting_rules", false);
  public get accountingRules() {
    return this._accountingRules;
  }
  public putAccountingRules(value: CedgeAaaFeatureTemplateAccountingRules[] | cdktf.IResolvable) {
    this._accountingRules.internalValue = value;
  }
  public resetAccountingRules() {
    this._accountingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingRulesInput() {
    return this._accountingRules.internalValue;
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
  private _authorizationRules = new CedgeAaaFeatureTemplateAuthorizationRulesList(this, "authorization_rules", false);
  public get authorizationRules() {
    return this._authorizationRules;
  }
  public putAuthorizationRules(value: CedgeAaaFeatureTemplateAuthorizationRules[] | cdktf.IResolvable) {
    this._authorizationRules.internalValue = value;
  }
  public resetAuthorizationRules() {
    this._authorizationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationRulesInput() {
    return this._authorizationRules.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // dot1x_accounting - computed: false, optional: true, required: false
  private _dot1XAccounting?: boolean | cdktf.IResolvable; 
  public get dot1XAccounting() {
    return this.getBooleanAttribute('dot1x_accounting');
  }
  public set dot1XAccounting(value: boolean | cdktf.IResolvable) {
    this._dot1XAccounting = value;
  }
  public resetDot1XAccounting() {
    this._dot1XAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAccountingInput() {
    return this._dot1XAccounting;
  }

  // dot1x_accounting_variable - computed: false, optional: true, required: false
  private _dot1XAccountingVariable?: string; 
  public get dot1XAccountingVariable() {
    return this.getStringAttribute('dot1x_accounting_variable');
  }
  public set dot1XAccountingVariable(value: string) {
    this._dot1XAccountingVariable = value;
  }
  public resetDot1XAccountingVariable() {
    this._dot1XAccountingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAccountingVariableInput() {
    return this._dot1XAccountingVariable;
  }

  // dot1x_authentication - computed: false, optional: true, required: false
  private _dot1XAuthentication?: boolean | cdktf.IResolvable; 
  public get dot1XAuthentication() {
    return this.getBooleanAttribute('dot1x_authentication');
  }
  public set dot1XAuthentication(value: boolean | cdktf.IResolvable) {
    this._dot1XAuthentication = value;
  }
  public resetDot1XAuthentication() {
    this._dot1XAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAuthenticationInput() {
    return this._dot1XAuthentication;
  }

  // dot1x_authentication_variable - computed: false, optional: true, required: false
  private _dot1XAuthenticationVariable?: string; 
  public get dot1XAuthenticationVariable() {
    return this.getStringAttribute('dot1x_authentication_variable');
  }
  public set dot1XAuthenticationVariable(value: string) {
    this._dot1XAuthenticationVariable = value;
  }
  public resetDot1XAuthenticationVariable() {
    this._dot1XAuthenticationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAuthenticationVariableInput() {
    return this._dot1XAuthenticationVariable;
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

  // radius_clients - computed: false, optional: true, required: false
  private _radiusClients = new CedgeAaaFeatureTemplateRadiusClientsList(this, "radius_clients", false);
  public get radiusClients() {
    return this._radiusClients;
  }
  public putRadiusClients(value: CedgeAaaFeatureTemplateRadiusClients[] | cdktf.IResolvable) {
    this._radiusClients.internalValue = value;
  }
  public resetRadiusClients() {
    this._radiusClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusClientsInput() {
    return this._radiusClients.internalValue;
  }

  // radius_dynamic_author_authentication_type - computed: false, optional: true, required: false
  private _radiusDynamicAuthorAuthenticationType?: string; 
  public get radiusDynamicAuthorAuthenticationType() {
    return this.getStringAttribute('radius_dynamic_author_authentication_type');
  }
  public set radiusDynamicAuthorAuthenticationType(value: string) {
    this._radiusDynamicAuthorAuthenticationType = value;
  }
  public resetRadiusDynamicAuthorAuthenticationType() {
    this._radiusDynamicAuthorAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorAuthenticationTypeInput() {
    return this._radiusDynamicAuthorAuthenticationType;
  }

  // radius_dynamic_author_authentication_type_variable - computed: false, optional: true, required: false
  private _radiusDynamicAuthorAuthenticationTypeVariable?: string; 
  public get radiusDynamicAuthorAuthenticationTypeVariable() {
    return this.getStringAttribute('radius_dynamic_author_authentication_type_variable');
  }
  public set radiusDynamicAuthorAuthenticationTypeVariable(value: string) {
    this._radiusDynamicAuthorAuthenticationTypeVariable = value;
  }
  public resetRadiusDynamicAuthorAuthenticationTypeVariable() {
    this._radiusDynamicAuthorAuthenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorAuthenticationTypeVariableInput() {
    return this._radiusDynamicAuthorAuthenticationTypeVariable;
  }

  // radius_dynamic_author_domain_stripping - computed: false, optional: true, required: false
  private _radiusDynamicAuthorDomainStripping?: string; 
  public get radiusDynamicAuthorDomainStripping() {
    return this.getStringAttribute('radius_dynamic_author_domain_stripping');
  }
  public set radiusDynamicAuthorDomainStripping(value: string) {
    this._radiusDynamicAuthorDomainStripping = value;
  }
  public resetRadiusDynamicAuthorDomainStripping() {
    this._radiusDynamicAuthorDomainStripping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorDomainStrippingInput() {
    return this._radiusDynamicAuthorDomainStripping;
  }

  // radius_dynamic_author_domain_stripping_variable - computed: false, optional: true, required: false
  private _radiusDynamicAuthorDomainStrippingVariable?: string; 
  public get radiusDynamicAuthorDomainStrippingVariable() {
    return this.getStringAttribute('radius_dynamic_author_domain_stripping_variable');
  }
  public set radiusDynamicAuthorDomainStrippingVariable(value: string) {
    this._radiusDynamicAuthorDomainStrippingVariable = value;
  }
  public resetRadiusDynamicAuthorDomainStrippingVariable() {
    this._radiusDynamicAuthorDomainStrippingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorDomainStrippingVariableInput() {
    return this._radiusDynamicAuthorDomainStrippingVariable;
  }

  // radius_dynamic_author_port - computed: false, optional: true, required: false
  private _radiusDynamicAuthorPort?: number; 
  public get radiusDynamicAuthorPort() {
    return this.getNumberAttribute('radius_dynamic_author_port');
  }
  public set radiusDynamicAuthorPort(value: number) {
    this._radiusDynamicAuthorPort = value;
  }
  public resetRadiusDynamicAuthorPort() {
    this._radiusDynamicAuthorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorPortInput() {
    return this._radiusDynamicAuthorPort;
  }

  // radius_dynamic_author_port_variable - computed: false, optional: true, required: false
  private _radiusDynamicAuthorPortVariable?: string; 
  public get radiusDynamicAuthorPortVariable() {
    return this.getStringAttribute('radius_dynamic_author_port_variable');
  }
  public set radiusDynamicAuthorPortVariable(value: string) {
    this._radiusDynamicAuthorPortVariable = value;
  }
  public resetRadiusDynamicAuthorPortVariable() {
    this._radiusDynamicAuthorPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorPortVariableInput() {
    return this._radiusDynamicAuthorPortVariable;
  }

  // radius_dynamic_author_server_key - computed: false, optional: true, required: false
  private _radiusDynamicAuthorServerKey?: string; 
  public get radiusDynamicAuthorServerKey() {
    return this.getStringAttribute('radius_dynamic_author_server_key');
  }
  public set radiusDynamicAuthorServerKey(value: string) {
    this._radiusDynamicAuthorServerKey = value;
  }
  public resetRadiusDynamicAuthorServerKey() {
    this._radiusDynamicAuthorServerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorServerKeyInput() {
    return this._radiusDynamicAuthorServerKey;
  }

  // radius_dynamic_author_server_key_variable - computed: false, optional: true, required: false
  private _radiusDynamicAuthorServerKeyVariable?: string; 
  public get radiusDynamicAuthorServerKeyVariable() {
    return this.getStringAttribute('radius_dynamic_author_server_key_variable');
  }
  public set radiusDynamicAuthorServerKeyVariable(value: string) {
    this._radiusDynamicAuthorServerKeyVariable = value;
  }
  public resetRadiusDynamicAuthorServerKeyVariable() {
    this._radiusDynamicAuthorServerKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDynamicAuthorServerKeyVariableInput() {
    return this._radiusDynamicAuthorServerKeyVariable;
  }

  // radius_server_groups - computed: false, optional: true, required: false
  private _radiusServerGroups = new CedgeAaaFeatureTemplateRadiusServerGroupsList(this, "radius_server_groups", false);
  public get radiusServerGroups() {
    return this._radiusServerGroups;
  }
  public putRadiusServerGroups(value: CedgeAaaFeatureTemplateRadiusServerGroups[] | cdktf.IResolvable) {
    this._radiusServerGroups.internalValue = value;
  }
  public resetRadiusServerGroups() {
    this._radiusServerGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerGroupsInput() {
    return this._radiusServerGroups.internalValue;
  }

  // radius_trustsec_cts_authorization_list - computed: false, optional: true, required: false
  private _radiusTrustsecCtsAuthorizationList?: string; 
  public get radiusTrustsecCtsAuthorizationList() {
    return this.getStringAttribute('radius_trustsec_cts_authorization_list');
  }
  public set radiusTrustsecCtsAuthorizationList(value: string) {
    this._radiusTrustsecCtsAuthorizationList = value;
  }
  public resetRadiusTrustsecCtsAuthorizationList() {
    this._radiusTrustsecCtsAuthorizationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTrustsecCtsAuthorizationListInput() {
    return this._radiusTrustsecCtsAuthorizationList;
  }

  // radius_trustsec_cts_authorization_list_variable - computed: false, optional: true, required: false
  private _radiusTrustsecCtsAuthorizationListVariable?: string; 
  public get radiusTrustsecCtsAuthorizationListVariable() {
    return this.getStringAttribute('radius_trustsec_cts_authorization_list_variable');
  }
  public set radiusTrustsecCtsAuthorizationListVariable(value: string) {
    this._radiusTrustsecCtsAuthorizationListVariable = value;
  }
  public resetRadiusTrustsecCtsAuthorizationListVariable() {
    this._radiusTrustsecCtsAuthorizationListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTrustsecCtsAuthorizationListVariableInput() {
    return this._radiusTrustsecCtsAuthorizationListVariable;
  }

  // radius_trustsec_group - computed: false, optional: true, required: false
  private _radiusTrustsecGroup?: string; 
  public get radiusTrustsecGroup() {
    return this.getStringAttribute('radius_trustsec_group');
  }
  public set radiusTrustsecGroup(value: string) {
    this._radiusTrustsecGroup = value;
  }
  public resetRadiusTrustsecGroup() {
    this._radiusTrustsecGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTrustsecGroupInput() {
    return this._radiusTrustsecGroup;
  }

  // server_groups_priority_order - computed: false, optional: true, required: false
  private _serverGroupsPriorityOrder?: string; 
  public get serverGroupsPriorityOrder() {
    return this.getStringAttribute('server_groups_priority_order');
  }
  public set serverGroupsPriorityOrder(value: string) {
    this._serverGroupsPriorityOrder = value;
  }
  public resetServerGroupsPriorityOrder() {
    this._serverGroupsPriorityOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsPriorityOrderInput() {
    return this._serverGroupsPriorityOrder;
  }

  // tacacs_server_groups - computed: false, optional: true, required: false
  private _tacacsServerGroups = new CedgeAaaFeatureTemplateTacacsServerGroupsList(this, "tacacs_server_groups", false);
  public get tacacsServerGroups() {
    return this._tacacsServerGroups;
  }
  public putTacacsServerGroups(value: CedgeAaaFeatureTemplateTacacsServerGroups[] | cdktf.IResolvable) {
    this._tacacsServerGroups.internalValue = value;
  }
  public resetTacacsServerGroups() {
    this._tacacsServerGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerGroupsInput() {
    return this._tacacsServerGroups.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // users - computed: false, optional: true, required: false
  private _users = new CedgeAaaFeatureTemplateUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: CedgeAaaFeatureTemplateUsers[] | cdktf.IResolvable) {
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
      accounting_rules: cdktf.listMapper(cedgeAaaFeatureTemplateAccountingRulesToTerraform, false)(this._accountingRules.internalValue),
      authorization_config_commands: cdktf.booleanToTerraform(this._authorizationConfigCommands),
      authorization_config_commands_variable: cdktf.stringToTerraform(this._authorizationConfigCommandsVariable),
      authorization_console: cdktf.booleanToTerraform(this._authorizationConsole),
      authorization_console_variable: cdktf.stringToTerraform(this._authorizationConsoleVariable),
      authorization_rules: cdktf.listMapper(cedgeAaaFeatureTemplateAuthorizationRulesToTerraform, false)(this._authorizationRules.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      dot1x_accounting: cdktf.booleanToTerraform(this._dot1XAccounting),
      dot1x_accounting_variable: cdktf.stringToTerraform(this._dot1XAccountingVariable),
      dot1x_authentication: cdktf.booleanToTerraform(this._dot1XAuthentication),
      dot1x_authentication_variable: cdktf.stringToTerraform(this._dot1XAuthenticationVariable),
      name: cdktf.stringToTerraform(this._name),
      radius_clients: cdktf.listMapper(cedgeAaaFeatureTemplateRadiusClientsToTerraform, false)(this._radiusClients.internalValue),
      radius_dynamic_author_authentication_type: cdktf.stringToTerraform(this._radiusDynamicAuthorAuthenticationType),
      radius_dynamic_author_authentication_type_variable: cdktf.stringToTerraform(this._radiusDynamicAuthorAuthenticationTypeVariable),
      radius_dynamic_author_domain_stripping: cdktf.stringToTerraform(this._radiusDynamicAuthorDomainStripping),
      radius_dynamic_author_domain_stripping_variable: cdktf.stringToTerraform(this._radiusDynamicAuthorDomainStrippingVariable),
      radius_dynamic_author_port: cdktf.numberToTerraform(this._radiusDynamicAuthorPort),
      radius_dynamic_author_port_variable: cdktf.stringToTerraform(this._radiusDynamicAuthorPortVariable),
      radius_dynamic_author_server_key: cdktf.stringToTerraform(this._radiusDynamicAuthorServerKey),
      radius_dynamic_author_server_key_variable: cdktf.stringToTerraform(this._radiusDynamicAuthorServerKeyVariable),
      radius_server_groups: cdktf.listMapper(cedgeAaaFeatureTemplateRadiusServerGroupsToTerraform, false)(this._radiusServerGroups.internalValue),
      radius_trustsec_cts_authorization_list: cdktf.stringToTerraform(this._radiusTrustsecCtsAuthorizationList),
      radius_trustsec_cts_authorization_list_variable: cdktf.stringToTerraform(this._radiusTrustsecCtsAuthorizationListVariable),
      radius_trustsec_group: cdktf.stringToTerraform(this._radiusTrustsecGroup),
      server_groups_priority_order: cdktf.stringToTerraform(this._serverGroupsPriorityOrder),
      tacacs_server_groups: cdktf.listMapper(cedgeAaaFeatureTemplateTacacsServerGroupsToTerraform, false)(this._tacacsServerGroups.internalValue),
      users: cdktf.listMapper(cedgeAaaFeatureTemplateUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_rules: {
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateAccountingRulesToHclTerraform, false)(this._accountingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateAccountingRulesList",
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
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateAuthorizationRulesToHclTerraform, false)(this._authorizationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateAuthorizationRulesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dot1x_accounting: {
        value: cdktf.booleanToHclTerraform(this._dot1XAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_accounting_variable: {
        value: cdktf.stringToHclTerraform(this._dot1XAccountingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_authentication: {
        value: cdktf.booleanToHclTerraform(this._dot1XAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_authentication_variable: {
        value: cdktf.stringToHclTerraform(this._dot1XAuthenticationVariable),
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
      radius_clients: {
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateRadiusClientsToHclTerraform, false)(this._radiusClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateRadiusClientsList",
      },
      radius_dynamic_author_authentication_type: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_authentication_type_variable: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorAuthenticationTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_domain_stripping: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorDomainStripping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_domain_stripping_variable: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorDomainStrippingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_port: {
        value: cdktf.numberToHclTerraform(this._radiusDynamicAuthorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_dynamic_author_port_variable: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorPortVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_server_key: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorServerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_dynamic_author_server_key_variable: {
        value: cdktf.stringToHclTerraform(this._radiusDynamicAuthorServerKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_server_groups: {
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateRadiusServerGroupsToHclTerraform, false)(this._radiusServerGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateRadiusServerGroupsList",
      },
      radius_trustsec_cts_authorization_list: {
        value: cdktf.stringToHclTerraform(this._radiusTrustsecCtsAuthorizationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_trustsec_cts_authorization_list_variable: {
        value: cdktf.stringToHclTerraform(this._radiusTrustsecCtsAuthorizationListVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_trustsec_group: {
        value: cdktf.stringToHclTerraform(this._radiusTrustsecGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_groups_priority_order: {
        value: cdktf.stringToHclTerraform(this._serverGroupsPriorityOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_server_groups: {
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateTacacsServerGroupsToHclTerraform, false)(this._tacacsServerGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateTacacsServerGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(cedgeAaaFeatureTemplateUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeAaaFeatureTemplateUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
