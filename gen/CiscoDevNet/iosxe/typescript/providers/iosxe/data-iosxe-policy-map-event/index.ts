// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxePolicyMapEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event#device DataIosxePolicyMapEvent#device}
  */
  readonly device?: string;
  /**
  * The event this control class-map triggers upon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event#event_type DataIosxePolicyMapEvent#event_type}
  */
  readonly eventType: string;
  /**
  * Name of the policy map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event#name DataIosxePolicyMapEvent#name}
  */
  readonly name: string;
}
export interface DataIosxePolicyMapEventClassNumbersActionNumbers {
}

export function dataIosxePolicyMapEventClassNumbersActionNumbersToTerraform(struct?: DataIosxePolicyMapEventClassNumbersActionNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePolicyMapEventClassNumbersActionNumbersToHclTerraform(struct?: DataIosxePolicyMapEventClassNumbersActionNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePolicyMapEventClassNumbersActionNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePolicyMapEventClassNumbersActionNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePolicyMapEventClassNumbersActionNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate_interface_template - computed: true, optional: false, required: false
  public get activateInterfaceTemplate() {
    return this.getStringAttribute('activate_interface_template');
  }

  // activate_policy_type_control_subscriber - computed: true, optional: false, required: false
  public get activatePolicyTypeControlSubscriber() {
    return this.getStringAttribute('activate_policy_type_control_subscriber');
  }

  // activate_service_template_config_aaa_list - computed: true, optional: false, required: false
  public get activateServiceTemplateConfigAaaList() {
    return this.getStringAttribute('activate_service_template_config_aaa_list');
  }

  // activate_service_template_config_precedence - computed: true, optional: false, required: false
  public get activateServiceTemplateConfigPrecedence() {
    return this.getNumberAttribute('activate_service_template_config_precedence');
  }

  // activate_service_template_config_replace_all - computed: true, optional: false, required: false
  public get activateServiceTemplateConfigReplaceAll() {
    return this.getBooleanAttribute('activate_service_template_config_replace_all');
  }

  // activate_service_template_config_service_template - computed: true, optional: false, required: false
  public get activateServiceTemplateConfigServiceTemplate() {
    return this.getStringAttribute('activate_service_template_config_service_template');
  }

  // authenticate_using_aaa_authc_list - computed: true, optional: false, required: false
  public get authenticateUsingAaaAuthcList() {
    return this.getStringAttribute('authenticate_using_aaa_authc_list');
  }

  // authenticate_using_aaa_authz_list - computed: true, optional: false, required: false
  public get authenticateUsingAaaAuthzList() {
    return this.getStringAttribute('authenticate_using_aaa_authz_list');
  }

  // authenticate_using_both - computed: true, optional: false, required: false
  public get authenticateUsingBoth() {
    return this.getBooleanAttribute('authenticate_using_both');
  }

  // authenticate_using_method - computed: true, optional: false, required: false
  public get authenticateUsingMethod() {
    return this.getStringAttribute('authenticate_using_method');
  }

  // authenticate_using_parameter_map - computed: true, optional: false, required: false
  public get authenticateUsingParameterMap() {
    return this.getStringAttribute('authenticate_using_parameter_map');
  }

  // authenticate_using_priority - computed: true, optional: false, required: false
  public get authenticateUsingPriority() {
    return this.getNumberAttribute('authenticate_using_priority');
  }

  // authenticate_using_retries - computed: true, optional: false, required: false
  public get authenticateUsingRetries() {
    return this.getNumberAttribute('authenticate_using_retries');
  }

  // authenticate_using_retry_time - computed: true, optional: false, required: false
  public get authenticateUsingRetryTime() {
    return this.getNumberAttribute('authenticate_using_retry_time');
  }

  // authentication_restart - computed: true, optional: false, required: false
  public get authenticationRestart() {
    return this.getNumberAttribute('authentication_restart');
  }

  // authorize - computed: true, optional: false, required: false
  public get authorize() {
    return this.getBooleanAttribute('authorize');
  }

  // clear_authenticated_data_hosts_on_port - computed: true, optional: false, required: false
  public get clearAuthenticatedDataHostsOnPort() {
    return this.getBooleanAttribute('clear_authenticated_data_hosts_on_port');
  }

  // clear_session - computed: true, optional: false, required: false
  public get clearSession() {
    return this.getBooleanAttribute('clear_session');
  }

  // deactivate_interface_template - computed: true, optional: false, required: false
  public get deactivateInterfaceTemplate() {
    return this.getStringAttribute('deactivate_interface_template');
  }

  // deactivate_policy_type_control_subscriber - computed: true, optional: false, required: false
  public get deactivatePolicyTypeControlSubscriber() {
    return this.getStringAttribute('deactivate_policy_type_control_subscriber');
  }

  // deactivate_service_template - computed: true, optional: false, required: false
  public get deactivateServiceTemplate() {
    return this.getStringAttribute('deactivate_service_template');
  }

  // err_disable - computed: true, optional: false, required: false
  public get errDisable() {
    return this.getBooleanAttribute('err_disable');
  }

  // map_attribute_to_service_table - computed: true, optional: false, required: false
  public get mapAttributeToServiceTable() {
    return this.getStringAttribute('map_attribute_to_service_table');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // pause_reauthentication - computed: true, optional: false, required: false
  public get pauseReauthentication() {
    return this.getBooleanAttribute('pause_reauthentication');
  }

  // protect - computed: true, optional: false, required: false
  public get protect() {
    return this.getBooleanAttribute('protect');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getBooleanAttribute('replace');
  }

  // restrict - computed: true, optional: false, required: false
  public get restrict() {
    return this.getBooleanAttribute('restrict');
  }

  // resume_reauthentication - computed: true, optional: false, required: false
  public get resumeReauthentication() {
    return this.getBooleanAttribute('resume_reauthentication');
  }

  // set_domain - computed: true, optional: false, required: false
  public get setDomain() {
    return this.getStringAttribute('set_domain');
  }

  // set_timer_name - computed: true, optional: false, required: false
  public get setTimerName() {
    return this.getStringAttribute('set_timer_name');
  }

  // set_timer_value - computed: true, optional: false, required: false
  public get setTimerValue() {
    return this.getNumberAttribute('set_timer_value');
  }

  // terminate_config - computed: true, optional: false, required: false
  public get terminateConfig() {
    return this.getStringAttribute('terminate_config');
  }

  // unauthorize - computed: true, optional: false, required: false
  public get unauthorize() {
    return this.getBooleanAttribute('unauthorize');
  }
}

export class DataIosxePolicyMapEventClassNumbersActionNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePolicyMapEventClassNumbersActionNumbersOutputReference {
    return new DataIosxePolicyMapEventClassNumbersActionNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePolicyMapEventClassNumbers {
}

export function dataIosxePolicyMapEventClassNumbersToTerraform(struct?: DataIosxePolicyMapEventClassNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePolicyMapEventClassNumbersToHclTerraform(struct?: DataIosxePolicyMapEventClassNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePolicyMapEventClassNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePolicyMapEventClassNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePolicyMapEventClassNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_numbers - computed: true, optional: false, required: false
  private _actionNumbers = new DataIosxePolicyMapEventClassNumbersActionNumbersList(this, "action_numbers", false);
  public get actionNumbers() {
    return this._actionNumbers;
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}

export class DataIosxePolicyMapEventClassNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePolicyMapEventClassNumbersOutputReference {
    return new DataIosxePolicyMapEventClassNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event iosxe_policy_map_event}
*/
export class DataIosxePolicyMapEvent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_policy_map_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxePolicyMapEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxePolicyMapEvent to import
  * @param importFromId The id of the existing DataIosxePolicyMapEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxePolicyMapEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_policy_map_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/policy_map_event iosxe_policy_map_event} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxePolicyMapEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxePolicyMapEventConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_policy_map_event',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._eventType = config.eventType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_numbers - computed: true, optional: false, required: false
  private _classNumbers = new DataIosxePolicyMapEventClassNumbersList(this, "class_numbers", false);
  public get classNumbers() {
    return this._classNumbers;
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

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
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
      device: cdktf.stringToTerraform(this._device),
      event_type: cdktf.stringToTerraform(this._eventType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
