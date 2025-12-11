// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMapEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * class number, 1 for 1st class, 2 for 2nd...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#class_numbers PolicyMapEvent#class_numbers}
  */
  readonly classNumbers?: PolicyMapEventClassNumbers[] | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#device PolicyMapEvent#device}
  */
  readonly device?: string;
  /**
  * The event this control class-map triggers upon
  *   - Choices: `aaa-available`, `absolute-timeout`, `agent-found`, `authentication-failure`, `authentication-success`, `authorization-failure`, `authorization-success`, `identity-update`, `inactivity-timeout`, `remote-authentication-failure`, `remote-authentication-success`, `remote-update`, `session-disconnected`, `session-started`, `tag-added`, `tag-removed`, `template-activated`, `template-activation-failed`, `template-deactivated`, `template-deactivation-failed`, `timer-expiry`, `violation`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#event_type PolicyMapEvent#event_type}
  */
  readonly eventType: string;
  /**
  * Matching criteria for first or all events.
  *   - Choices: `match-all`, `match-first`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#match_type PolicyMapEvent#match_type}
  */
  readonly matchType?: string;
  /**
  * Name of the policy map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#name PolicyMapEvent#name}
  */
  readonly name: string;
}
export interface PolicyMapEventClassNumbersActionNumbers {
  /**
  * activate interface template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_interface_template PolicyMapEvent#activate_interface_template}
  */
  readonly activateInterfaceTemplate?: string;
  /**
  * policy type control subscriber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_policy_type_control_subscriber PolicyMapEvent#activate_policy_type_control_subscriber}
  */
  readonly activatePolicyTypeControlSubscriber?: string;
  /**
  * Named Method List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_service_template_config_aaa_list PolicyMapEvent#activate_service_template_config_aaa_list}
  */
  readonly activateServiceTemplateConfigAaaList?: string;
  /**
  * Template precedence
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_service_template_config_precedence PolicyMapEvent#activate_service_template_config_precedence}
  */
  readonly activateServiceTemplateConfigPrecedence?: number;
  /**
  * Replace all existing authorization data and services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_service_template_config_replace_all PolicyMapEvent#activate_service_template_config_replace_all}
  */
  readonly activateServiceTemplateConfigReplaceAll?: boolean | cdktf.IResolvable;
  /**
  * activate service template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#activate_service_template_config_service_template PolicyMapEvent#activate_service_template_config_service_template}
  */
  readonly activateServiceTemplateConfigServiceTemplate?: string;
  /**
  * Specify authentication method list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_aaa_authc_list PolicyMapEvent#authenticate_using_aaa_authc_list}
  */
  readonly authenticateUsingAaaAuthcList?: string;
  /**
  * Specify authorization method list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_aaa_authz_list PolicyMapEvent#authenticate_using_aaa_authz_list}
  */
  readonly authenticateUsingAaaAuthzList?: string;
  /**
  * Enabling Dot1x Authenticator & Supplicant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_both PolicyMapEvent#authenticate_using_both}
  */
  readonly authenticateUsingBoth?: boolean | cdktf.IResolvable;
  /**
  * method/protocol to be used for authentication
  *   - Choices: `dot1x`, `mab`, `webauth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_method PolicyMapEvent#authenticate_using_method}
  */
  readonly authenticateUsingMethod?: string;
  /**
  * Specify parameter map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_parameter_map PolicyMapEvent#authenticate_using_parameter_map}
  */
  readonly authenticateUsingParameterMap?: string;
  /**
  * Method priority
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_priority PolicyMapEvent#authenticate_using_priority}
  */
  readonly authenticateUsingPriority?: number;
  /**
  * Number of times to retry failed authentications
  *   - Range: `1`-`5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_retries PolicyMapEvent#authenticate_using_retries}
  */
  readonly authenticateUsingRetries?: number;
  /**
  * Time interval between retries
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authenticate_using_retry_time PolicyMapEvent#authenticate_using_retry_time}
  */
  readonly authenticateUsingRetryTime?: number;
  /**
  * restarts the auth sequence after the specified number of sec
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authentication_restart PolicyMapEvent#authentication_restart}
  */
  readonly authenticationRestart?: number;
  /**
  * authorize session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#authorize PolicyMapEvent#authorize}
  */
  readonly authorize?: boolean | cdktf.IResolvable;
  /**
  * clears authenticated data hosts on the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#clear_authenticated_data_hosts_on_port PolicyMapEvent#clear_authenticated_data_hosts_on_port}
  */
  readonly clearAuthenticatedDataHostsOnPort?: boolean | cdktf.IResolvable;
  /**
  * clears an active session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#clear_session PolicyMapEvent#clear_session}
  */
  readonly clearSession?: boolean | cdktf.IResolvable;
  /**
  * activate interface template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#deactivate_interface_template PolicyMapEvent#deactivate_interface_template}
  */
  readonly deactivateInterfaceTemplate?: string;
  /**
  * policy type control subscriber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#deactivate_policy_type_control_subscriber PolicyMapEvent#deactivate_policy_type_control_subscriber}
  */
  readonly deactivatePolicyTypeControlSubscriber?: string;
  /**
  * activate service template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#deactivate_service_template PolicyMapEvent#deactivate_service_template}
  */
  readonly deactivateServiceTemplate?: string;
  /**
  * temporarily disable port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#err_disable PolicyMapEvent#err_disable}
  */
  readonly errDisable?: boolean | cdktf.IResolvable;
  /**
  * map identity-update attribute to a auto-conf templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#map_attribute_to_service_table PolicyMapEvent#map_attribute_to_service_table}
  */
  readonly mapAttributeToServiceTable?: string;
  /**
  * notifies the session attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#notify PolicyMapEvent#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * action number, 1 for 1st class, 2 for 2nd...
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#number PolicyMapEvent#number}
  */
  readonly number: number;
  /**
  * pause reauthentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#pause_reauthentication PolicyMapEvent#pause_reauthentication}
  */
  readonly pauseReauthentication?: boolean | cdktf.IResolvable;
  /**
  * silently drop violating packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#protect PolicyMapEvent#protect}
  */
  readonly protect?: boolean | cdktf.IResolvable;
  /**
  * clear existing session and create session for violating host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#replace PolicyMapEvent#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * drop violating packets and generate a syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#restrict PolicyMapEvent#restrict}
  */
  readonly restrict?: boolean | cdktf.IResolvable;
  /**
  * resume reauthentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#resume_reauthentication PolicyMapEvent#resume_reauthentication}
  */
  readonly resumeReauthentication?: boolean | cdktf.IResolvable;
  /**
  * set domain
  *   - Choices: `data`, `switch`, `voice`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#set_domain PolicyMapEvent#set_domain}
  */
  readonly setDomain?: string;
  /**
  * timer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#set_timer_name PolicyMapEvent#set_timer_name}
  */
  readonly setTimerName?: string;
  /**
  * Enter a value between 1 and 65535
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#set_timer_value PolicyMapEvent#set_timer_value}
  */
  readonly setTimerValue?: number;
  /**
  * terminate auth method
  *   - Choices: `dot1x`, `mab`, `webauth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#terminate_config PolicyMapEvent#terminate_config}
  */
  readonly terminateConfig?: string;
  /**
  * unauthorize session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#unauthorize PolicyMapEvent#unauthorize}
  */
  readonly unauthorize?: boolean | cdktf.IResolvable;
}

export function policyMapEventClassNumbersActionNumbersToTerraform(struct?: PolicyMapEventClassNumbersActionNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_interface_template: cdktf.stringToTerraform(struct!.activateInterfaceTemplate),
    activate_policy_type_control_subscriber: cdktf.stringToTerraform(struct!.activatePolicyTypeControlSubscriber),
    activate_service_template_config_aaa_list: cdktf.stringToTerraform(struct!.activateServiceTemplateConfigAaaList),
    activate_service_template_config_precedence: cdktf.numberToTerraform(struct!.activateServiceTemplateConfigPrecedence),
    activate_service_template_config_replace_all: cdktf.booleanToTerraform(struct!.activateServiceTemplateConfigReplaceAll),
    activate_service_template_config_service_template: cdktf.stringToTerraform(struct!.activateServiceTemplateConfigServiceTemplate),
    authenticate_using_aaa_authc_list: cdktf.stringToTerraform(struct!.authenticateUsingAaaAuthcList),
    authenticate_using_aaa_authz_list: cdktf.stringToTerraform(struct!.authenticateUsingAaaAuthzList),
    authenticate_using_both: cdktf.booleanToTerraform(struct!.authenticateUsingBoth),
    authenticate_using_method: cdktf.stringToTerraform(struct!.authenticateUsingMethod),
    authenticate_using_parameter_map: cdktf.stringToTerraform(struct!.authenticateUsingParameterMap),
    authenticate_using_priority: cdktf.numberToTerraform(struct!.authenticateUsingPriority),
    authenticate_using_retries: cdktf.numberToTerraform(struct!.authenticateUsingRetries),
    authenticate_using_retry_time: cdktf.numberToTerraform(struct!.authenticateUsingRetryTime),
    authentication_restart: cdktf.numberToTerraform(struct!.authenticationRestart),
    authorize: cdktf.booleanToTerraform(struct!.authorize),
    clear_authenticated_data_hosts_on_port: cdktf.booleanToTerraform(struct!.clearAuthenticatedDataHostsOnPort),
    clear_session: cdktf.booleanToTerraform(struct!.clearSession),
    deactivate_interface_template: cdktf.stringToTerraform(struct!.deactivateInterfaceTemplate),
    deactivate_policy_type_control_subscriber: cdktf.stringToTerraform(struct!.deactivatePolicyTypeControlSubscriber),
    deactivate_service_template: cdktf.stringToTerraform(struct!.deactivateServiceTemplate),
    err_disable: cdktf.booleanToTerraform(struct!.errDisable),
    map_attribute_to_service_table: cdktf.stringToTerraform(struct!.mapAttributeToServiceTable),
    notify: cdktf.booleanToTerraform(struct!.notify),
    number: cdktf.numberToTerraform(struct!.number),
    pause_reauthentication: cdktf.booleanToTerraform(struct!.pauseReauthentication),
    protect: cdktf.booleanToTerraform(struct!.protect),
    replace: cdktf.booleanToTerraform(struct!.replace),
    restrict: cdktf.booleanToTerraform(struct!.restrict),
    resume_reauthentication: cdktf.booleanToTerraform(struct!.resumeReauthentication),
    set_domain: cdktf.stringToTerraform(struct!.setDomain),
    set_timer_name: cdktf.stringToTerraform(struct!.setTimerName),
    set_timer_value: cdktf.numberToTerraform(struct!.setTimerValue),
    terminate_config: cdktf.stringToTerraform(struct!.terminateConfig),
    unauthorize: cdktf.booleanToTerraform(struct!.unauthorize),
  }
}


export function policyMapEventClassNumbersActionNumbersToHclTerraform(struct?: PolicyMapEventClassNumbersActionNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_interface_template: {
      value: cdktf.stringToHclTerraform(struct!.activateInterfaceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_policy_type_control_subscriber: {
      value: cdktf.stringToHclTerraform(struct!.activatePolicyTypeControlSubscriber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_service_template_config_aaa_list: {
      value: cdktf.stringToHclTerraform(struct!.activateServiceTemplateConfigAaaList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_service_template_config_precedence: {
      value: cdktf.numberToHclTerraform(struct!.activateServiceTemplateConfigPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activate_service_template_config_replace_all: {
      value: cdktf.booleanToHclTerraform(struct!.activateServiceTemplateConfigReplaceAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    activate_service_template_config_service_template: {
      value: cdktf.stringToHclTerraform(struct!.activateServiceTemplateConfigServiceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_using_aaa_authc_list: {
      value: cdktf.stringToHclTerraform(struct!.authenticateUsingAaaAuthcList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_using_aaa_authz_list: {
      value: cdktf.stringToHclTerraform(struct!.authenticateUsingAaaAuthzList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_using_both: {
      value: cdktf.booleanToHclTerraform(struct!.authenticateUsingBoth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authenticate_using_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticateUsingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_using_parameter_map: {
      value: cdktf.stringToHclTerraform(struct!.authenticateUsingParameterMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_using_priority: {
      value: cdktf.numberToHclTerraform(struct!.authenticateUsingPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticate_using_retries: {
      value: cdktf.numberToHclTerraform(struct!.authenticateUsingRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticate_using_retry_time: {
      value: cdktf.numberToHclTerraform(struct!.authenticateUsingRetryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_restart: {
      value: cdktf.numberToHclTerraform(struct!.authenticationRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorize: {
      value: cdktf.booleanToHclTerraform(struct!.authorize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clear_authenticated_data_hosts_on_port: {
      value: cdktf.booleanToHclTerraform(struct!.clearAuthenticatedDataHostsOnPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clear_session: {
      value: cdktf.booleanToHclTerraform(struct!.clearSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deactivate_interface_template: {
      value: cdktf.stringToHclTerraform(struct!.deactivateInterfaceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deactivate_policy_type_control_subscriber: {
      value: cdktf.stringToHclTerraform(struct!.deactivatePolicyTypeControlSubscriber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deactivate_service_template: {
      value: cdktf.stringToHclTerraform(struct!.deactivateServiceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    err_disable: {
      value: cdktf.booleanToHclTerraform(struct!.errDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_attribute_to_service_table: {
      value: cdktf.stringToHclTerraform(struct!.mapAttributeToServiceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktf.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pause_reauthentication: {
      value: cdktf.booleanToHclTerraform(struct!.pauseReauthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protect: {
      value: cdktf.booleanToHclTerraform(struct!.protect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict: {
      value: cdktf.booleanToHclTerraform(struct!.restrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resume_reauthentication: {
      value: cdktf.booleanToHclTerraform(struct!.resumeReauthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_domain: {
      value: cdktf.stringToHclTerraform(struct!.setDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_timer_name: {
      value: cdktf.stringToHclTerraform(struct!.setTimerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_timer_value: {
      value: cdktf.numberToHclTerraform(struct!.setTimerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate_config: {
      value: cdktf.stringToHclTerraform(struct!.terminateConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unauthorize: {
      value: cdktf.booleanToHclTerraform(struct!.unauthorize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyMapEventClassNumbersActionNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapEventClassNumbersActionNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateInterfaceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateInterfaceTemplate = this._activateInterfaceTemplate;
    }
    if (this._activatePolicyTypeControlSubscriber !== undefined) {
      hasAnyValues = true;
      internalValueResult.activatePolicyTypeControlSubscriber = this._activatePolicyTypeControlSubscriber;
    }
    if (this._activateServiceTemplateConfigAaaList !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateServiceTemplateConfigAaaList = this._activateServiceTemplateConfigAaaList;
    }
    if (this._activateServiceTemplateConfigPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateServiceTemplateConfigPrecedence = this._activateServiceTemplateConfigPrecedence;
    }
    if (this._activateServiceTemplateConfigReplaceAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateServiceTemplateConfigReplaceAll = this._activateServiceTemplateConfigReplaceAll;
    }
    if (this._activateServiceTemplateConfigServiceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateServiceTemplateConfigServiceTemplate = this._activateServiceTemplateConfigServiceTemplate;
    }
    if (this._authenticateUsingAaaAuthcList !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingAaaAuthcList = this._authenticateUsingAaaAuthcList;
    }
    if (this._authenticateUsingAaaAuthzList !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingAaaAuthzList = this._authenticateUsingAaaAuthzList;
    }
    if (this._authenticateUsingBoth !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingBoth = this._authenticateUsingBoth;
    }
    if (this._authenticateUsingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingMethod = this._authenticateUsingMethod;
    }
    if (this._authenticateUsingParameterMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingParameterMap = this._authenticateUsingParameterMap;
    }
    if (this._authenticateUsingPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingPriority = this._authenticateUsingPriority;
    }
    if (this._authenticateUsingRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingRetries = this._authenticateUsingRetries;
    }
    if (this._authenticateUsingRetryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateUsingRetryTime = this._authenticateUsingRetryTime;
    }
    if (this._authenticationRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRestart = this._authenticationRestart;
    }
    if (this._authorize !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorize = this._authorize;
    }
    if (this._clearAuthenticatedDataHostsOnPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAuthenticatedDataHostsOnPort = this._clearAuthenticatedDataHostsOnPort;
    }
    if (this._clearSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSession = this._clearSession;
    }
    if (this._deactivateInterfaceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivateInterfaceTemplate = this._deactivateInterfaceTemplate;
    }
    if (this._deactivatePolicyTypeControlSubscriber !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivatePolicyTypeControlSubscriber = this._deactivatePolicyTypeControlSubscriber;
    }
    if (this._deactivateServiceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivateServiceTemplate = this._deactivateServiceTemplate;
    }
    if (this._errDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.errDisable = this._errDisable;
    }
    if (this._mapAttributeToServiceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapAttributeToServiceTable = this._mapAttributeToServiceTable;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._pauseReauthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseReauthentication = this._pauseReauthentication;
    }
    if (this._protect !== undefined) {
      hasAnyValues = true;
      internalValueResult.protect = this._protect;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._restrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrict = this._restrict;
    }
    if (this._resumeReauthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeReauthentication = this._resumeReauthentication;
    }
    if (this._setDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDomain = this._setDomain;
    }
    if (this._setTimerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimerName = this._setTimerName;
    }
    if (this._setTimerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimerValue = this._setTimerValue;
    }
    if (this._terminateConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateConfig = this._terminateConfig;
    }
    if (this._unauthorize !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorize = this._unauthorize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapEventClassNumbersActionNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateInterfaceTemplate = undefined;
      this._activatePolicyTypeControlSubscriber = undefined;
      this._activateServiceTemplateConfigAaaList = undefined;
      this._activateServiceTemplateConfigPrecedence = undefined;
      this._activateServiceTemplateConfigReplaceAll = undefined;
      this._activateServiceTemplateConfigServiceTemplate = undefined;
      this._authenticateUsingAaaAuthcList = undefined;
      this._authenticateUsingAaaAuthzList = undefined;
      this._authenticateUsingBoth = undefined;
      this._authenticateUsingMethod = undefined;
      this._authenticateUsingParameterMap = undefined;
      this._authenticateUsingPriority = undefined;
      this._authenticateUsingRetries = undefined;
      this._authenticateUsingRetryTime = undefined;
      this._authenticationRestart = undefined;
      this._authorize = undefined;
      this._clearAuthenticatedDataHostsOnPort = undefined;
      this._clearSession = undefined;
      this._deactivateInterfaceTemplate = undefined;
      this._deactivatePolicyTypeControlSubscriber = undefined;
      this._deactivateServiceTemplate = undefined;
      this._errDisable = undefined;
      this._mapAttributeToServiceTable = undefined;
      this._notify = undefined;
      this._number = undefined;
      this._pauseReauthentication = undefined;
      this._protect = undefined;
      this._replace = undefined;
      this._restrict = undefined;
      this._resumeReauthentication = undefined;
      this._setDomain = undefined;
      this._setTimerName = undefined;
      this._setTimerValue = undefined;
      this._terminateConfig = undefined;
      this._unauthorize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateInterfaceTemplate = value.activateInterfaceTemplate;
      this._activatePolicyTypeControlSubscriber = value.activatePolicyTypeControlSubscriber;
      this._activateServiceTemplateConfigAaaList = value.activateServiceTemplateConfigAaaList;
      this._activateServiceTemplateConfigPrecedence = value.activateServiceTemplateConfigPrecedence;
      this._activateServiceTemplateConfigReplaceAll = value.activateServiceTemplateConfigReplaceAll;
      this._activateServiceTemplateConfigServiceTemplate = value.activateServiceTemplateConfigServiceTemplate;
      this._authenticateUsingAaaAuthcList = value.authenticateUsingAaaAuthcList;
      this._authenticateUsingAaaAuthzList = value.authenticateUsingAaaAuthzList;
      this._authenticateUsingBoth = value.authenticateUsingBoth;
      this._authenticateUsingMethod = value.authenticateUsingMethod;
      this._authenticateUsingParameterMap = value.authenticateUsingParameterMap;
      this._authenticateUsingPriority = value.authenticateUsingPriority;
      this._authenticateUsingRetries = value.authenticateUsingRetries;
      this._authenticateUsingRetryTime = value.authenticateUsingRetryTime;
      this._authenticationRestart = value.authenticationRestart;
      this._authorize = value.authorize;
      this._clearAuthenticatedDataHostsOnPort = value.clearAuthenticatedDataHostsOnPort;
      this._clearSession = value.clearSession;
      this._deactivateInterfaceTemplate = value.deactivateInterfaceTemplate;
      this._deactivatePolicyTypeControlSubscriber = value.deactivatePolicyTypeControlSubscriber;
      this._deactivateServiceTemplate = value.deactivateServiceTemplate;
      this._errDisable = value.errDisable;
      this._mapAttributeToServiceTable = value.mapAttributeToServiceTable;
      this._notify = value.notify;
      this._number = value.number;
      this._pauseReauthentication = value.pauseReauthentication;
      this._protect = value.protect;
      this._replace = value.replace;
      this._restrict = value.restrict;
      this._resumeReauthentication = value.resumeReauthentication;
      this._setDomain = value.setDomain;
      this._setTimerName = value.setTimerName;
      this._setTimerValue = value.setTimerValue;
      this._terminateConfig = value.terminateConfig;
      this._unauthorize = value.unauthorize;
    }
  }

  // activate_interface_template - computed: false, optional: true, required: false
  private _activateInterfaceTemplate?: string; 
  public get activateInterfaceTemplate() {
    return this.getStringAttribute('activate_interface_template');
  }
  public set activateInterfaceTemplate(value: string) {
    this._activateInterfaceTemplate = value;
  }
  public resetActivateInterfaceTemplate() {
    this._activateInterfaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInterfaceTemplateInput() {
    return this._activateInterfaceTemplate;
  }

  // activate_policy_type_control_subscriber - computed: false, optional: true, required: false
  private _activatePolicyTypeControlSubscriber?: string; 
  public get activatePolicyTypeControlSubscriber() {
    return this.getStringAttribute('activate_policy_type_control_subscriber');
  }
  public set activatePolicyTypeControlSubscriber(value: string) {
    this._activatePolicyTypeControlSubscriber = value;
  }
  public resetActivatePolicyTypeControlSubscriber() {
    this._activatePolicyTypeControlSubscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatePolicyTypeControlSubscriberInput() {
    return this._activatePolicyTypeControlSubscriber;
  }

  // activate_service_template_config_aaa_list - computed: false, optional: true, required: false
  private _activateServiceTemplateConfigAaaList?: string; 
  public get activateServiceTemplateConfigAaaList() {
    return this.getStringAttribute('activate_service_template_config_aaa_list');
  }
  public set activateServiceTemplateConfigAaaList(value: string) {
    this._activateServiceTemplateConfigAaaList = value;
  }
  public resetActivateServiceTemplateConfigAaaList() {
    this._activateServiceTemplateConfigAaaList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateServiceTemplateConfigAaaListInput() {
    return this._activateServiceTemplateConfigAaaList;
  }

  // activate_service_template_config_precedence - computed: false, optional: true, required: false
  private _activateServiceTemplateConfigPrecedence?: number; 
  public get activateServiceTemplateConfigPrecedence() {
    return this.getNumberAttribute('activate_service_template_config_precedence');
  }
  public set activateServiceTemplateConfigPrecedence(value: number) {
    this._activateServiceTemplateConfigPrecedence = value;
  }
  public resetActivateServiceTemplateConfigPrecedence() {
    this._activateServiceTemplateConfigPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateServiceTemplateConfigPrecedenceInput() {
    return this._activateServiceTemplateConfigPrecedence;
  }

  // activate_service_template_config_replace_all - computed: false, optional: true, required: false
  private _activateServiceTemplateConfigReplaceAll?: boolean | cdktf.IResolvable; 
  public get activateServiceTemplateConfigReplaceAll() {
    return this.getBooleanAttribute('activate_service_template_config_replace_all');
  }
  public set activateServiceTemplateConfigReplaceAll(value: boolean | cdktf.IResolvable) {
    this._activateServiceTemplateConfigReplaceAll = value;
  }
  public resetActivateServiceTemplateConfigReplaceAll() {
    this._activateServiceTemplateConfigReplaceAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateServiceTemplateConfigReplaceAllInput() {
    return this._activateServiceTemplateConfigReplaceAll;
  }

  // activate_service_template_config_service_template - computed: false, optional: true, required: false
  private _activateServiceTemplateConfigServiceTemplate?: string; 
  public get activateServiceTemplateConfigServiceTemplate() {
    return this.getStringAttribute('activate_service_template_config_service_template');
  }
  public set activateServiceTemplateConfigServiceTemplate(value: string) {
    this._activateServiceTemplateConfigServiceTemplate = value;
  }
  public resetActivateServiceTemplateConfigServiceTemplate() {
    this._activateServiceTemplateConfigServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateServiceTemplateConfigServiceTemplateInput() {
    return this._activateServiceTemplateConfigServiceTemplate;
  }

  // authenticate_using_aaa_authc_list - computed: false, optional: true, required: false
  private _authenticateUsingAaaAuthcList?: string; 
  public get authenticateUsingAaaAuthcList() {
    return this.getStringAttribute('authenticate_using_aaa_authc_list');
  }
  public set authenticateUsingAaaAuthcList(value: string) {
    this._authenticateUsingAaaAuthcList = value;
  }
  public resetAuthenticateUsingAaaAuthcList() {
    this._authenticateUsingAaaAuthcList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingAaaAuthcListInput() {
    return this._authenticateUsingAaaAuthcList;
  }

  // authenticate_using_aaa_authz_list - computed: false, optional: true, required: false
  private _authenticateUsingAaaAuthzList?: string; 
  public get authenticateUsingAaaAuthzList() {
    return this.getStringAttribute('authenticate_using_aaa_authz_list');
  }
  public set authenticateUsingAaaAuthzList(value: string) {
    this._authenticateUsingAaaAuthzList = value;
  }
  public resetAuthenticateUsingAaaAuthzList() {
    this._authenticateUsingAaaAuthzList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingAaaAuthzListInput() {
    return this._authenticateUsingAaaAuthzList;
  }

  // authenticate_using_both - computed: false, optional: true, required: false
  private _authenticateUsingBoth?: boolean | cdktf.IResolvable; 
  public get authenticateUsingBoth() {
    return this.getBooleanAttribute('authenticate_using_both');
  }
  public set authenticateUsingBoth(value: boolean | cdktf.IResolvable) {
    this._authenticateUsingBoth = value;
  }
  public resetAuthenticateUsingBoth() {
    this._authenticateUsingBoth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingBothInput() {
    return this._authenticateUsingBoth;
  }

  // authenticate_using_method - computed: false, optional: true, required: false
  private _authenticateUsingMethod?: string; 
  public get authenticateUsingMethod() {
    return this.getStringAttribute('authenticate_using_method');
  }
  public set authenticateUsingMethod(value: string) {
    this._authenticateUsingMethod = value;
  }
  public resetAuthenticateUsingMethod() {
    this._authenticateUsingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingMethodInput() {
    return this._authenticateUsingMethod;
  }

  // authenticate_using_parameter_map - computed: false, optional: true, required: false
  private _authenticateUsingParameterMap?: string; 
  public get authenticateUsingParameterMap() {
    return this.getStringAttribute('authenticate_using_parameter_map');
  }
  public set authenticateUsingParameterMap(value: string) {
    this._authenticateUsingParameterMap = value;
  }
  public resetAuthenticateUsingParameterMap() {
    this._authenticateUsingParameterMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingParameterMapInput() {
    return this._authenticateUsingParameterMap;
  }

  // authenticate_using_priority - computed: false, optional: true, required: false
  private _authenticateUsingPriority?: number; 
  public get authenticateUsingPriority() {
    return this.getNumberAttribute('authenticate_using_priority');
  }
  public set authenticateUsingPriority(value: number) {
    this._authenticateUsingPriority = value;
  }
  public resetAuthenticateUsingPriority() {
    this._authenticateUsingPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingPriorityInput() {
    return this._authenticateUsingPriority;
  }

  // authenticate_using_retries - computed: false, optional: true, required: false
  private _authenticateUsingRetries?: number; 
  public get authenticateUsingRetries() {
    return this.getNumberAttribute('authenticate_using_retries');
  }
  public set authenticateUsingRetries(value: number) {
    this._authenticateUsingRetries = value;
  }
  public resetAuthenticateUsingRetries() {
    this._authenticateUsingRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingRetriesInput() {
    return this._authenticateUsingRetries;
  }

  // authenticate_using_retry_time - computed: false, optional: true, required: false
  private _authenticateUsingRetryTime?: number; 
  public get authenticateUsingRetryTime() {
    return this.getNumberAttribute('authenticate_using_retry_time');
  }
  public set authenticateUsingRetryTime(value: number) {
    this._authenticateUsingRetryTime = value;
  }
  public resetAuthenticateUsingRetryTime() {
    this._authenticateUsingRetryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUsingRetryTimeInput() {
    return this._authenticateUsingRetryTime;
  }

  // authentication_restart - computed: false, optional: true, required: false
  private _authenticationRestart?: number; 
  public get authenticationRestart() {
    return this.getNumberAttribute('authentication_restart');
  }
  public set authenticationRestart(value: number) {
    this._authenticationRestart = value;
  }
  public resetAuthenticationRestart() {
    this._authenticationRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRestartInput() {
    return this._authenticationRestart;
  }

  // authorize - computed: false, optional: true, required: false
  private _authorize?: boolean | cdktf.IResolvable; 
  public get authorize() {
    return this.getBooleanAttribute('authorize');
  }
  public set authorize(value: boolean | cdktf.IResolvable) {
    this._authorize = value;
  }
  public resetAuthorize() {
    this._authorize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeInput() {
    return this._authorize;
  }

  // clear_authenticated_data_hosts_on_port - computed: false, optional: true, required: false
  private _clearAuthenticatedDataHostsOnPort?: boolean | cdktf.IResolvable; 
  public get clearAuthenticatedDataHostsOnPort() {
    return this.getBooleanAttribute('clear_authenticated_data_hosts_on_port');
  }
  public set clearAuthenticatedDataHostsOnPort(value: boolean | cdktf.IResolvable) {
    this._clearAuthenticatedDataHostsOnPort = value;
  }
  public resetClearAuthenticatedDataHostsOnPort() {
    this._clearAuthenticatedDataHostsOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAuthenticatedDataHostsOnPortInput() {
    return this._clearAuthenticatedDataHostsOnPort;
  }

  // clear_session - computed: false, optional: true, required: false
  private _clearSession?: boolean | cdktf.IResolvable; 
  public get clearSession() {
    return this.getBooleanAttribute('clear_session');
  }
  public set clearSession(value: boolean | cdktf.IResolvable) {
    this._clearSession = value;
  }
  public resetClearSession() {
    this._clearSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSessionInput() {
    return this._clearSession;
  }

  // deactivate_interface_template - computed: false, optional: true, required: false
  private _deactivateInterfaceTemplate?: string; 
  public get deactivateInterfaceTemplate() {
    return this.getStringAttribute('deactivate_interface_template');
  }
  public set deactivateInterfaceTemplate(value: string) {
    this._deactivateInterfaceTemplate = value;
  }
  public resetDeactivateInterfaceTemplate() {
    this._deactivateInterfaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateInterfaceTemplateInput() {
    return this._deactivateInterfaceTemplate;
  }

  // deactivate_policy_type_control_subscriber - computed: false, optional: true, required: false
  private _deactivatePolicyTypeControlSubscriber?: string; 
  public get deactivatePolicyTypeControlSubscriber() {
    return this.getStringAttribute('deactivate_policy_type_control_subscriber');
  }
  public set deactivatePolicyTypeControlSubscriber(value: string) {
    this._deactivatePolicyTypeControlSubscriber = value;
  }
  public resetDeactivatePolicyTypeControlSubscriber() {
    this._deactivatePolicyTypeControlSubscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatePolicyTypeControlSubscriberInput() {
    return this._deactivatePolicyTypeControlSubscriber;
  }

  // deactivate_service_template - computed: false, optional: true, required: false
  private _deactivateServiceTemplate?: string; 
  public get deactivateServiceTemplate() {
    return this.getStringAttribute('deactivate_service_template');
  }
  public set deactivateServiceTemplate(value: string) {
    this._deactivateServiceTemplate = value;
  }
  public resetDeactivateServiceTemplate() {
    this._deactivateServiceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateServiceTemplateInput() {
    return this._deactivateServiceTemplate;
  }

  // err_disable - computed: false, optional: true, required: false
  private _errDisable?: boolean | cdktf.IResolvable; 
  public get errDisable() {
    return this.getBooleanAttribute('err_disable');
  }
  public set errDisable(value: boolean | cdktf.IResolvable) {
    this._errDisable = value;
  }
  public resetErrDisable() {
    this._errDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errDisableInput() {
    return this._errDisable;
  }

  // map_attribute_to_service_table - computed: false, optional: true, required: false
  private _mapAttributeToServiceTable?: string; 
  public get mapAttributeToServiceTable() {
    return this.getStringAttribute('map_attribute_to_service_table');
  }
  public set mapAttributeToServiceTable(value: string) {
    this._mapAttributeToServiceTable = value;
  }
  public resetMapAttributeToServiceTable() {
    this._mapAttributeToServiceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapAttributeToServiceTableInput() {
    return this._mapAttributeToServiceTable;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // pause_reauthentication - computed: false, optional: true, required: false
  private _pauseReauthentication?: boolean | cdktf.IResolvable; 
  public get pauseReauthentication() {
    return this.getBooleanAttribute('pause_reauthentication');
  }
  public set pauseReauthentication(value: boolean | cdktf.IResolvable) {
    this._pauseReauthentication = value;
  }
  public resetPauseReauthentication() {
    this._pauseReauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseReauthenticationInput() {
    return this._pauseReauthentication;
  }

  // protect - computed: false, optional: true, required: false
  private _protect?: boolean | cdktf.IResolvable; 
  public get protect() {
    return this.getBooleanAttribute('protect');
  }
  public set protect(value: boolean | cdktf.IResolvable) {
    this._protect = value;
  }
  public resetProtect() {
    this._protect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectInput() {
    return this._protect;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // restrict - computed: false, optional: true, required: false
  private _restrict?: boolean | cdktf.IResolvable; 
  public get restrict() {
    return this.getBooleanAttribute('restrict');
  }
  public set restrict(value: boolean | cdktf.IResolvable) {
    this._restrict = value;
  }
  public resetRestrict() {
    this._restrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictInput() {
    return this._restrict;
  }

  // resume_reauthentication - computed: false, optional: true, required: false
  private _resumeReauthentication?: boolean | cdktf.IResolvable; 
  public get resumeReauthentication() {
    return this.getBooleanAttribute('resume_reauthentication');
  }
  public set resumeReauthentication(value: boolean | cdktf.IResolvable) {
    this._resumeReauthentication = value;
  }
  public resetResumeReauthentication() {
    this._resumeReauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeReauthenticationInput() {
    return this._resumeReauthentication;
  }

  // set_domain - computed: false, optional: true, required: false
  private _setDomain?: string; 
  public get setDomain() {
    return this.getStringAttribute('set_domain');
  }
  public set setDomain(value: string) {
    this._setDomain = value;
  }
  public resetSetDomain() {
    this._setDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDomainInput() {
    return this._setDomain;
  }

  // set_timer_name - computed: false, optional: true, required: false
  private _setTimerName?: string; 
  public get setTimerName() {
    return this.getStringAttribute('set_timer_name');
  }
  public set setTimerName(value: string) {
    this._setTimerName = value;
  }
  public resetSetTimerName() {
    this._setTimerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerNameInput() {
    return this._setTimerName;
  }

  // set_timer_value - computed: false, optional: true, required: false
  private _setTimerValue?: number; 
  public get setTimerValue() {
    return this.getNumberAttribute('set_timer_value');
  }
  public set setTimerValue(value: number) {
    this._setTimerValue = value;
  }
  public resetSetTimerValue() {
    this._setTimerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerValueInput() {
    return this._setTimerValue;
  }

  // terminate_config - computed: false, optional: true, required: false
  private _terminateConfig?: string; 
  public get terminateConfig() {
    return this.getStringAttribute('terminate_config');
  }
  public set terminateConfig(value: string) {
    this._terminateConfig = value;
  }
  public resetTerminateConfig() {
    this._terminateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateConfigInput() {
    return this._terminateConfig;
  }

  // unauthorize - computed: false, optional: true, required: false
  private _unauthorize?: boolean | cdktf.IResolvable; 
  public get unauthorize() {
    return this.getBooleanAttribute('unauthorize');
  }
  public set unauthorize(value: boolean | cdktf.IResolvable) {
    this._unauthorize = value;
  }
  public resetUnauthorize() {
    this._unauthorize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizeInput() {
    return this._unauthorize;
  }
}

export class PolicyMapEventClassNumbersActionNumbersList extends cdktf.ComplexList {
  public internalValue? : PolicyMapEventClassNumbersActionNumbers[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapEventClassNumbersActionNumbersOutputReference {
    return new PolicyMapEventClassNumbersActionNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyMapEventClassNumbers {
  /**
  * action number, 1 for 1st class, 2 for 2nd...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#action_numbers PolicyMapEvent#action_numbers}
  */
  readonly actionNumbers?: PolicyMapEventClassNumbersActionNumbers[] | cdktf.IResolvable;
  /**
  * The class type this control policy-map triggers upon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#class PolicyMapEvent#class}
  */
  readonly class?: string;
  /**
  * Policy execution strategy
  *   - Choices: `do-all`, `do-until-failure`, `do-until-success`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#execution_type PolicyMapEvent#execution_type}
  */
  readonly executionType?: string;
  /**
  * class number, 1 for 1st class, 2 for 2nd...
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#number PolicyMapEvent#number}
  */
  readonly number: number;
}

export function policyMapEventClassNumbersToTerraform(struct?: PolicyMapEventClassNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_numbers: cdktf.listMapper(policyMapEventClassNumbersActionNumbersToTerraform, false)(struct!.actionNumbers),
    class: cdktf.stringToTerraform(struct!.class),
    execution_type: cdktf.stringToTerraform(struct!.executionType),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function policyMapEventClassNumbersToHclTerraform(struct?: PolicyMapEventClassNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_numbers: {
      value: cdktf.listMapperHcl(policyMapEventClassNumbersActionNumbersToHclTerraform, false)(struct!.actionNumbers),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyMapEventClassNumbersActionNumbersList",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_type: {
      value: cdktf.stringToHclTerraform(struct!.executionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyMapEventClassNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapEventClassNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionNumbers = this._actionNumbers?.internalValue;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._executionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionType = this._executionType;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapEventClassNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionNumbers.internalValue = undefined;
      this._class = undefined;
      this._executionType = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionNumbers.internalValue = value.actionNumbers;
      this._class = value.class;
      this._executionType = value.executionType;
      this._number = value.number;
    }
  }

  // action_numbers - computed: false, optional: true, required: false
  private _actionNumbers = new PolicyMapEventClassNumbersActionNumbersList(this, "action_numbers", false);
  public get actionNumbers() {
    return this._actionNumbers;
  }
  public putActionNumbers(value: PolicyMapEventClassNumbersActionNumbers[] | cdktf.IResolvable) {
    this._actionNumbers.internalValue = value;
  }
  public resetActionNumbers() {
    this._actionNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNumbersInput() {
    return this._actionNumbers.internalValue;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // execution_type - computed: false, optional: true, required: false
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  public resetExecutionType() {
    this._executionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class PolicyMapEventClassNumbersList extends cdktf.ComplexList {
  public internalValue? : PolicyMapEventClassNumbers[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapEventClassNumbersOutputReference {
    return new PolicyMapEventClassNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event iosxe_policy_map_event}
*/
export class PolicyMapEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_policy_map_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMapEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMapEvent to import
  * @param importFromId The id of the existing PolicyMapEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMapEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_policy_map_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/policy_map_event iosxe_policy_map_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMapEventConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyMapEventConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_policy_map_event',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classNumbers.internalValue = config.classNumbers;
    this._device = config.device;
    this._eventType = config.eventType;
    this._matchType = config.matchType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_numbers - computed: false, optional: true, required: false
  private _classNumbers = new PolicyMapEventClassNumbersList(this, "class_numbers", false);
  public get classNumbers() {
    return this._classNumbers;
  }
  public putClassNumbers(value: PolicyMapEventClassNumbers[] | cdktf.IResolvable) {
    this._classNumbers.internalValue = value;
  }
  public resetClassNumbers() {
    this._classNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNumbersInput() {
    return this._classNumbers.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_numbers: cdktf.listMapper(policyMapEventClassNumbersToTerraform, false)(this._classNumbers.internalValue),
      device: cdktf.stringToTerraform(this._device),
      event_type: cdktf.stringToTerraform(this._eventType),
      match_type: cdktf.stringToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_numbers: {
        value: cdktf.listMapperHcl(policyMapEventClassNumbersToHclTerraform, false)(this._classNumbers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyMapEventClassNumbersList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
