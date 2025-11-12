// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A ContactList to provide user-interface suggestions for contact columns on relevant conditions and actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_list_id OutboundRuleset#contact_list_id}
  */
  readonly contactListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#id OutboundRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the RuleSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#name OutboundRuleset#name}
  */
  readonly name: string;
  /**
  * A Queue to provide user-interface suggestions for wrap-up codes on relevant conditions and actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#queue_id OutboundRuleset#queue_id}
  */
  readonly queueId?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#rules OutboundRuleset#rules}
  */
  readonly rules?: OutboundRulesetRules[] | cdktf.IResolvable;
}
export interface OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings {
  /**
  * The name of a contact column whose data will be passed to the data action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_column_name OutboundRuleset#contact_column_name}
  */
  readonly contactColumnName: string;
  /**
  * The name of an input field from the data action that the contact column data will be passed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#data_action_field OutboundRuleset#data_action_field}
  */
  readonly dataActionField: string;
}

export function outboundRulesetRulesActionsContactColumnToDataActionFieldMappingsToTerraform(struct?: OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_column_name: cdktf.stringToTerraform(struct!.contactColumnName),
    data_action_field: cdktf.stringToTerraform(struct!.dataActionField),
  }
}


export function outboundRulesetRulesActionsContactColumnToDataActionFieldMappingsToHclTerraform(struct?: OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_column_name: {
      value: cdktf.stringToHclTerraform(struct!.contactColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_field: {
      value: cdktf.stringToHclTerraform(struct!.dataActionField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnName = this._contactColumnName;
    }
    if (this._dataActionField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionField = this._dataActionField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactColumnName = undefined;
      this._dataActionField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactColumnName = value.contactColumnName;
      this._dataActionField = value.dataActionField;
    }
  }

  // contact_column_name - computed: false, optional: false, required: true
  private _contactColumnName?: string; 
  public get contactColumnName() {
    return this.getStringAttribute('contact_column_name');
  }
  public set contactColumnName(value: string) {
    this._contactColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnNameInput() {
    return this._contactColumnName;
  }

  // data_action_field - computed: false, optional: false, required: true
  private _dataActionField?: string; 
  public get dataActionField() {
    return this.getStringAttribute('data_action_field');
  }
  public set dataActionField(value: string) {
    this._dataActionField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionFieldInput() {
    return this._dataActionField;
  }
}

export class OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsOutputReference {
    return new OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundRulesetRulesActions {
  /**
  * Additional type specification for this DialerAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#action_type_name OutboundRuleset#action_type_name}
  */
  readonly actionTypeName: string;
  /**
  * The input field from the data action that the agentWrapup will be passed to for this condition. Valid for a wrapup dataActionBehavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#agent_wrapup_field OutboundRuleset#agent_wrapup_field}
  */
  readonly agentWrapupField?: string;
  /**
  * The input field from the data action that the callAnalysisResult will be passed to for this condition. Valid for a wrapup dataActionBehavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#call_analysis_result_field OutboundRuleset#call_analysis_result_field}
  */
  readonly callAnalysisResultField?: string;
  /**
  * The input field from the data action that the contactId will be passed to for this condition. Valid for a dataActionBehavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_id_field OutboundRuleset#contact_id_field}
  */
  readonly contactIdField?: string;
  /**
  * The Data Action to use for this action. Required for a dataActionBehavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#data_action_id OutboundRuleset#data_action_id}
  */
  readonly dataActionId?: string;
  /**
  * A map of key-value pairs pertinent to the DialerAction. Different types of DialerActions require different properties. MODIFY_CONTACT_ATTRIBUTE with an updateOption of SET takes a contact column as the key and accepts any value. SCHEDULE_CALLBACK takes a key 'callbackOffset' that specifies how far in the future the callback should be scheduled, in minutes. SET_CALLER_ID takes two keys: 'callerAddress', which should be the caller id phone number, and 'callerName'. For either key, you can also specify a column on the contact to get the value from. To do this, specify 'contact.Column', where 'Column' is the name of the contact column from which to get the value. SET_SKILLS takes a key 'skills' with an array of skill ids wrapped into a string (Example: {'skills': '['skillIdHere']'} ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#properties OutboundRuleset#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The type of this DialerAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#type OutboundRuleset#type}
  */
  readonly type: string;
  /**
  * Specifies how a contact attribute should be updated. Required for MODIFY_CONTACT_ATTRIBUTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#update_option OutboundRuleset#update_option}
  */
  readonly updateOption?: string;
  /**
  * contact_column_to_data_action_field_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_column_to_data_action_field_mappings OutboundRuleset#contact_column_to_data_action_field_mappings}
  */
  readonly contactColumnToDataActionFieldMappings?: OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable;
}

export function outboundRulesetRulesActionsToTerraform(struct?: OutboundRulesetRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type_name: cdktf.stringToTerraform(struct!.actionTypeName),
    agent_wrapup_field: cdktf.stringToTerraform(struct!.agentWrapupField),
    call_analysis_result_field: cdktf.stringToTerraform(struct!.callAnalysisResultField),
    contact_id_field: cdktf.stringToTerraform(struct!.contactIdField),
    data_action_id: cdktf.stringToTerraform(struct!.dataActionId),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
    update_option: cdktf.stringToTerraform(struct!.updateOption),
    contact_column_to_data_action_field_mappings: cdktf.listMapper(outboundRulesetRulesActionsContactColumnToDataActionFieldMappingsToTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
  }
}


export function outboundRulesetRulesActionsToHclTerraform(struct?: OutboundRulesetRulesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type_name: {
      value: cdktf.stringToHclTerraform(struct!.actionTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_wrapup_field: {
      value: cdktf.stringToHclTerraform(struct!.agentWrapupField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_analysis_result_field: {
      value: cdktf.stringToHclTerraform(struct!.callAnalysisResultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_id_field: {
      value: cdktf.stringToHclTerraform(struct!.contactIdField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_id: {
      value: cdktf.stringToHclTerraform(struct!.dataActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_option: {
      value: cdktf.stringToHclTerraform(struct!.updateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_column_to_data_action_field_mappings: {
      value: cdktf.listMapperHcl(outboundRulesetRulesActionsContactColumnToDataActionFieldMappingsToHclTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRulesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTypeName = this._actionTypeName;
    }
    if (this._agentWrapupField !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentWrapupField = this._agentWrapupField;
    }
    if (this._callAnalysisResultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAnalysisResultField = this._callAnalysisResultField;
    }
    if (this._contactIdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactIdField = this._contactIdField;
    }
    if (this._dataActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionId = this._dataActionId;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateOption = this._updateOption;
    }
    if (this._contactColumnToDataActionFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnToDataActionFieldMappings = this._contactColumnToDataActionFieldMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRulesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionTypeName = undefined;
      this._agentWrapupField = undefined;
      this._callAnalysisResultField = undefined;
      this._contactIdField = undefined;
      this._dataActionId = undefined;
      this._properties = undefined;
      this._type = undefined;
      this._updateOption = undefined;
      this._contactColumnToDataActionFieldMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionTypeName = value.actionTypeName;
      this._agentWrapupField = value.agentWrapupField;
      this._callAnalysisResultField = value.callAnalysisResultField;
      this._contactIdField = value.contactIdField;
      this._dataActionId = value.dataActionId;
      this._properties = value.properties;
      this._type = value.type;
      this._updateOption = value.updateOption;
      this._contactColumnToDataActionFieldMappings.internalValue = value.contactColumnToDataActionFieldMappings;
    }
  }

  // action_type_name - computed: false, optional: false, required: true
  private _actionTypeName?: string; 
  public get actionTypeName() {
    return this.getStringAttribute('action_type_name');
  }
  public set actionTypeName(value: string) {
    this._actionTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeNameInput() {
    return this._actionTypeName;
  }

  // agent_wrapup_field - computed: false, optional: true, required: false
  private _agentWrapupField?: string; 
  public get agentWrapupField() {
    return this.getStringAttribute('agent_wrapup_field');
  }
  public set agentWrapupField(value: string) {
    this._agentWrapupField = value;
  }
  public resetAgentWrapupField() {
    this._agentWrapupField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentWrapupFieldInput() {
    return this._agentWrapupField;
  }

  // call_analysis_result_field - computed: false, optional: true, required: false
  private _callAnalysisResultField?: string; 
  public get callAnalysisResultField() {
    return this.getStringAttribute('call_analysis_result_field');
  }
  public set callAnalysisResultField(value: string) {
    this._callAnalysisResultField = value;
  }
  public resetCallAnalysisResultField() {
    this._callAnalysisResultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalysisResultFieldInput() {
    return this._callAnalysisResultField;
  }

  // contact_id_field - computed: false, optional: true, required: false
  private _contactIdField?: string; 
  public get contactIdField() {
    return this.getStringAttribute('contact_id_field');
  }
  public set contactIdField(value: string) {
    this._contactIdField = value;
  }
  public resetContactIdField() {
    this._contactIdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdFieldInput() {
    return this._contactIdField;
  }

  // data_action_id - computed: false, optional: true, required: false
  private _dataActionId?: string; 
  public get dataActionId() {
    return this.getStringAttribute('data_action_id');
  }
  public set dataActionId(value: string) {
    this._dataActionId = value;
  }
  public resetDataActionId() {
    this._dataActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionIdInput() {
    return this._dataActionId;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

  // update_option - computed: false, optional: true, required: false
  private _updateOption?: string; 
  public get updateOption() {
    return this.getStringAttribute('update_option');
  }
  public set updateOption(value: string) {
    this._updateOption = value;
  }
  public resetUpdateOption() {
    this._updateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOptionInput() {
    return this._updateOption;
  }

  // contact_column_to_data_action_field_mappings - computed: false, optional: true, required: false
  private _contactColumnToDataActionFieldMappings = new OutboundRulesetRulesActionsContactColumnToDataActionFieldMappingsList(this, "contact_column_to_data_action_field_mappings", false);
  public get contactColumnToDataActionFieldMappings() {
    return this._contactColumnToDataActionFieldMappings;
  }
  public putContactColumnToDataActionFieldMappings(value: OutboundRulesetRulesActionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable) {
    this._contactColumnToDataActionFieldMappings.internalValue = value;
  }
  public resetContactColumnToDataActionFieldMappings() {
    this._contactColumnToDataActionFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnToDataActionFieldMappingsInput() {
    return this._contactColumnToDataActionFieldMappings.internalValue;
  }
}

export class OutboundRulesetRulesActionsList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRulesActions[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesActionsOutputReference {
    return new OutboundRulesetRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings {
  /**
  * The name of a contact column whose data will be passed to the data action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_column_name OutboundRuleset#contact_column_name}
  */
  readonly contactColumnName: string;
  /**
  * The name of an input field from the data action that the contact column data will be passed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#data_action_field OutboundRuleset#data_action_field}
  */
  readonly dataActionField: string;
}

export function outboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsToTerraform(struct?: OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_column_name: cdktf.stringToTerraform(struct!.contactColumnName),
    data_action_field: cdktf.stringToTerraform(struct!.dataActionField),
  }
}


export function outboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsToHclTerraform(struct?: OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_column_name: {
      value: cdktf.stringToHclTerraform(struct!.contactColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_field: {
      value: cdktf.stringToHclTerraform(struct!.dataActionField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnName = this._contactColumnName;
    }
    if (this._dataActionField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionField = this._dataActionField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactColumnName = undefined;
      this._dataActionField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactColumnName = value.contactColumnName;
      this._dataActionField = value.dataActionField;
    }
  }

  // contact_column_name - computed: false, optional: false, required: true
  private _contactColumnName?: string; 
  public get contactColumnName() {
    return this.getStringAttribute('contact_column_name');
  }
  public set contactColumnName(value: string) {
    this._contactColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnNameInput() {
    return this._contactColumnName;
  }

  // data_action_field - computed: false, optional: false, required: true
  private _dataActionField?: string; 
  public get dataActionField() {
    return this.getStringAttribute('data_action_field');
  }
  public set dataActionField(value: string) {
    this._dataActionField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionFieldInput() {
    return this._dataActionField;
  }
}

export class OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsOutputReference {
    return new OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundRulesetRulesConditionsPredicates {
  /**
  * The value to compare against for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#comparison_value OutboundRuleset#comparison_value}
  */
  readonly comparisonValue: string;
  /**
  * If true, inverts the result of evaluating this Predicate. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#inverted OutboundRuleset#inverted}
  */
  readonly inverted: boolean | cdktf.IResolvable;
  /**
  * The name of an output field from the data action's output to use for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#output_field OutboundRuleset#output_field}
  */
  readonly outputField: string;
  /**
  * The result of this predicate if the requested output field is missing from the data action's result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#output_field_missing_resolution OutboundRuleset#output_field_missing_resolution}
  */
  readonly outputFieldMissingResolution: boolean | cdktf.IResolvable;
  /**
  * The operation with which to evaluate this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#output_operator OutboundRuleset#output_operator}
  */
  readonly outputOperator: string;
}

export function outboundRulesetRulesConditionsPredicatesToTerraform(struct?: OutboundRulesetRulesConditionsPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_value: cdktf.stringToTerraform(struct!.comparisonValue),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    output_field: cdktf.stringToTerraform(struct!.outputField),
    output_field_missing_resolution: cdktf.booleanToTerraform(struct!.outputFieldMissingResolution),
    output_operator: cdktf.stringToTerraform(struct!.outputOperator),
  }
}


export function outboundRulesetRulesConditionsPredicatesToHclTerraform(struct?: OutboundRulesetRulesConditionsPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_value: {
      value: cdktf.stringToHclTerraform(struct!.comparisonValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_field: {
      value: cdktf.stringToHclTerraform(struct!.outputField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_field_missing_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.outputFieldMissingResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_operator: {
      value: cdktf.stringToHclTerraform(struct!.outputOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesConditionsPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRulesConditionsPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonValue = this._comparisonValue;
    }
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._outputField !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputField = this._outputField;
    }
    if (this._outputFieldMissingResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFieldMissingResolution = this._outputFieldMissingResolution;
    }
    if (this._outputOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputOperator = this._outputOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRulesConditionsPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonValue = undefined;
      this._inverted = undefined;
      this._outputField = undefined;
      this._outputFieldMissingResolution = undefined;
      this._outputOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonValue = value.comparisonValue;
      this._inverted = value.inverted;
      this._outputField = value.outputField;
      this._outputFieldMissingResolution = value.outputFieldMissingResolution;
      this._outputOperator = value.outputOperator;
    }
  }

  // comparison_value - computed: false, optional: false, required: true
  private _comparisonValue?: string; 
  public get comparisonValue() {
    return this.getStringAttribute('comparison_value');
  }
  public set comparisonValue(value: string) {
    this._comparisonValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue;
  }

  // inverted - computed: false, optional: false, required: true
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // output_field - computed: false, optional: false, required: true
  private _outputField?: string; 
  public get outputField() {
    return this.getStringAttribute('output_field');
  }
  public set outputField(value: string) {
    this._outputField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldInput() {
    return this._outputField;
  }

  // output_field_missing_resolution - computed: false, optional: false, required: true
  private _outputFieldMissingResolution?: boolean | cdktf.IResolvable; 
  public get outputFieldMissingResolution() {
    return this.getBooleanAttribute('output_field_missing_resolution');
  }
  public set outputFieldMissingResolution(value: boolean | cdktf.IResolvable) {
    this._outputFieldMissingResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldMissingResolutionInput() {
    return this._outputFieldMissingResolution;
  }

  // output_operator - computed: false, optional: false, required: true
  private _outputOperator?: string; 
  public get outputOperator() {
    return this.getStringAttribute('output_operator');
  }
  public set outputOperator(value: string) {
    this._outputOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputOperatorInput() {
    return this._outputOperator;
  }
}

export class OutboundRulesetRulesConditionsPredicatesList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRulesConditionsPredicates[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesConditionsPredicatesOutputReference {
    return new OutboundRulesetRulesConditionsPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundRulesetRulesConditions {
  /**
  * The input field from the data action that the agentWrapup will be passed to for this condition. Valid for a wrapup dataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#agent_wrapup_field OutboundRuleset#agent_wrapup_field}
  */
  readonly agentWrapupField?: string;
  /**
  * An attribute name associated with this Condition. Required for a contactAttributeCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#attribute_name OutboundRuleset#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The input field from the data action that the callAnalysisResult will be passed to for this condition. Valid for a wrapup dataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#call_analysis_result_field OutboundRuleset#call_analysis_result_field}
  */
  readonly callAnalysisResultField?: string;
  /**
  * List of wrap-up code identifiers. Required for a wrapupCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#codes OutboundRuleset#codes}
  */
  readonly codes?: string[];
  /**
  * The input field from the data action that the contactId will be passed to for this condition. Valid for a dataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_id_field OutboundRuleset#contact_id_field}
  */
  readonly contactIdField?: string;
  /**
  * The Data Action to use for this condition. Required for a dataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#data_action_id OutboundRuleset#data_action_id}
  */
  readonly dataActionId?: string;
  /**
  * The result of this condition if the data action returns a result indicating there was no data. Required for a DataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#data_not_found_resolution OutboundRuleset#data_not_found_resolution}
  */
  readonly dataNotFoundResolution?: boolean | cdktf.IResolvable;
  /**
  * If true, inverts the result of evaluating this Condition. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#inverted OutboundRuleset#inverted}
  */
  readonly inverted?: boolean | cdktf.IResolvable;
  /**
  * An operation with which to evaluate the Condition. Not used for a DataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#operator OutboundRuleset#operator}
  */
  readonly operator?: string;
  /**
  * A value associated with the property type of this Condition. Required for a contactPropertyCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#property OutboundRuleset#property}
  */
  readonly property?: string;
  /**
  * The type of the property associated with this Condition. Required for a contactPropertyCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#property_type OutboundRuleset#property_type}
  */
  readonly propertyType?: string;
  /**
  * The type of the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#type OutboundRuleset#type}
  */
  readonly type?: string;
  /**
  * A value associated with this Condition. This could be text, a number, or a relative time. Not used for a DataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#value OutboundRuleset#value}
  */
  readonly value?: string;
  /**
  * The type of the value associated with this Condition. Not used for a DataActionCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#value_type OutboundRuleset#value_type}
  */
  readonly valueType?: string;
  /**
  * contact_column_to_data_action_field_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#contact_column_to_data_action_field_mappings OutboundRuleset#contact_column_to_data_action_field_mappings}
  */
  readonly contactColumnToDataActionFieldMappings?: OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable;
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#predicates OutboundRuleset#predicates}
  */
  readonly predicates?: OutboundRulesetRulesConditionsPredicates[] | cdktf.IResolvable;
}

export function outboundRulesetRulesConditionsToTerraform(struct?: OutboundRulesetRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_wrapup_field: cdktf.stringToTerraform(struct!.agentWrapupField),
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    call_analysis_result_field: cdktf.stringToTerraform(struct!.callAnalysisResultField),
    codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.codes),
    contact_id_field: cdktf.stringToTerraform(struct!.contactIdField),
    data_action_id: cdktf.stringToTerraform(struct!.dataActionId),
    data_not_found_resolution: cdktf.booleanToTerraform(struct!.dataNotFoundResolution),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    property_type: cdktf.stringToTerraform(struct!.propertyType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    contact_column_to_data_action_field_mappings: cdktf.listMapper(outboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsToTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
    predicates: cdktf.listMapper(outboundRulesetRulesConditionsPredicatesToTerraform, true)(struct!.predicates),
  }
}


export function outboundRulesetRulesConditionsToHclTerraform(struct?: OutboundRulesetRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_wrapup_field: {
      value: cdktf.stringToHclTerraform(struct!.agentWrapupField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_analysis_result_field: {
      value: cdktf.stringToHclTerraform(struct!.callAnalysisResultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    contact_id_field: {
      value: cdktf.stringToHclTerraform(struct!.contactIdField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_action_id: {
      value: cdktf.stringToHclTerraform(struct!.dataActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_not_found_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.dataNotFoundResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktf.stringToHclTerraform(struct!.propertyType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_column_to_data_action_field_mappings: {
      value: cdktf.listMapperHcl(outboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsToHclTerraform, true)(struct!.contactColumnToDataActionFieldMappings),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsList",
    },
    predicates: {
      value: cdktf.listMapperHcl(outboundRulesetRulesConditionsPredicatesToHclTerraform, true)(struct!.predicates),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundRulesetRulesConditionsPredicatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentWrapupField !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentWrapupField = this._agentWrapupField;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._callAnalysisResultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAnalysisResultField = this._callAnalysisResultField;
    }
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._contactIdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactIdField = this._contactIdField;
    }
    if (this._dataActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataActionId = this._dataActionId;
    }
    if (this._dataNotFoundResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNotFoundResolution = this._dataNotFoundResolution;
    }
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._contactColumnToDataActionFieldMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactColumnToDataActionFieldMappings = this._contactColumnToDataActionFieldMappings?.internalValue;
    }
    if (this._predicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentWrapupField = undefined;
      this._attributeName = undefined;
      this._callAnalysisResultField = undefined;
      this._codes = undefined;
      this._contactIdField = undefined;
      this._dataActionId = undefined;
      this._dataNotFoundResolution = undefined;
      this._inverted = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._propertyType = undefined;
      this._type = undefined;
      this._value = undefined;
      this._valueType = undefined;
      this._contactColumnToDataActionFieldMappings.internalValue = undefined;
      this._predicates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentWrapupField = value.agentWrapupField;
      this._attributeName = value.attributeName;
      this._callAnalysisResultField = value.callAnalysisResultField;
      this._codes = value.codes;
      this._contactIdField = value.contactIdField;
      this._dataActionId = value.dataActionId;
      this._dataNotFoundResolution = value.dataNotFoundResolution;
      this._inverted = value.inverted;
      this._operator = value.operator;
      this._property = value.property;
      this._propertyType = value.propertyType;
      this._type = value.type;
      this._value = value.value;
      this._valueType = value.valueType;
      this._contactColumnToDataActionFieldMappings.internalValue = value.contactColumnToDataActionFieldMappings;
      this._predicates.internalValue = value.predicates;
    }
  }

  // agent_wrapup_field - computed: false, optional: true, required: false
  private _agentWrapupField?: string; 
  public get agentWrapupField() {
    return this.getStringAttribute('agent_wrapup_field');
  }
  public set agentWrapupField(value: string) {
    this._agentWrapupField = value;
  }
  public resetAgentWrapupField() {
    this._agentWrapupField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentWrapupFieldInput() {
    return this._agentWrapupField;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // call_analysis_result_field - computed: false, optional: true, required: false
  private _callAnalysisResultField?: string; 
  public get callAnalysisResultField() {
    return this.getStringAttribute('call_analysis_result_field');
  }
  public set callAnalysisResultField(value: string) {
    this._callAnalysisResultField = value;
  }
  public resetCallAnalysisResultField() {
    this._callAnalysisResultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalysisResultFieldInput() {
    return this._callAnalysisResultField;
  }

  // codes - computed: true, optional: true, required: false
  private _codes?: string[]; 
  public get codes() {
    return this.getListAttribute('codes');
  }
  public set codes(value: string[]) {
    this._codes = value;
  }
  public resetCodes() {
    this._codes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // contact_id_field - computed: false, optional: true, required: false
  private _contactIdField?: string; 
  public get contactIdField() {
    return this.getStringAttribute('contact_id_field');
  }
  public set contactIdField(value: string) {
    this._contactIdField = value;
  }
  public resetContactIdField() {
    this._contactIdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdFieldInput() {
    return this._contactIdField;
  }

  // data_action_id - computed: false, optional: true, required: false
  private _dataActionId?: string; 
  public get dataActionId() {
    return this.getStringAttribute('data_action_id');
  }
  public set dataActionId(value: string) {
    this._dataActionId = value;
  }
  public resetDataActionId() {
    this._dataActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataActionIdInput() {
    return this._dataActionId;
  }

  // data_not_found_resolution - computed: false, optional: true, required: false
  private _dataNotFoundResolution?: boolean | cdktf.IResolvable; 
  public get dataNotFoundResolution() {
    return this.getBooleanAttribute('data_not_found_resolution');
  }
  public set dataNotFoundResolution(value: boolean | cdktf.IResolvable) {
    this._dataNotFoundResolution = value;
  }
  public resetDataNotFoundResolution() {
    this._dataNotFoundResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNotFoundResolutionInput() {
    return this._dataNotFoundResolution;
  }

  // inverted - computed: false, optional: true, required: false
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  public resetInverted() {
    this._inverted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // property_type - computed: false, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // contact_column_to_data_action_field_mappings - computed: false, optional: true, required: false
  private _contactColumnToDataActionFieldMappings = new OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappingsList(this, "contact_column_to_data_action_field_mappings", false);
  public get contactColumnToDataActionFieldMappings() {
    return this._contactColumnToDataActionFieldMappings;
  }
  public putContactColumnToDataActionFieldMappings(value: OutboundRulesetRulesConditionsContactColumnToDataActionFieldMappings[] | cdktf.IResolvable) {
    this._contactColumnToDataActionFieldMappings.internalValue = value;
  }
  public resetContactColumnToDataActionFieldMappings() {
    this._contactColumnToDataActionFieldMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactColumnToDataActionFieldMappingsInput() {
    return this._contactColumnToDataActionFieldMappings.internalValue;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new OutboundRulesetRulesConditionsPredicatesList(this, "predicates", false);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: OutboundRulesetRulesConditionsPredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }
}

export class OutboundRulesetRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesConditionsOutputReference {
    return new OutboundRulesetRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundRulesetRules {
  /**
  * The category of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#category OutboundRuleset#category}
  */
  readonly category: string;
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#name OutboundRuleset#name}
  */
  readonly name: string;
  /**
  * The ranked order of the rule. Rules are processed from lowest number to highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#order OutboundRuleset#order}
  */
  readonly order?: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#actions OutboundRuleset#actions}
  */
  readonly actions: OutboundRulesetRulesActions[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#conditions OutboundRuleset#conditions}
  */
  readonly conditions: OutboundRulesetRulesConditions[] | cdktf.IResolvable;
}

export function outboundRulesetRulesToTerraform(struct?: OutboundRulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    actions: cdktf.listMapper(outboundRulesetRulesActionsToTerraform, true)(struct!.actions),
    conditions: cdktf.listMapper(outboundRulesetRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function outboundRulesetRulesToHclTerraform(struct?: OutboundRulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actions: {
      value: cdktf.listMapperHcl(outboundRulesetRulesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundRulesetRulesActionsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(outboundRulesetRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundRulesetRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundRulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundRulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundRulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._order = undefined;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._order = value.order;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new OutboundRulesetRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: OutboundRulesetRulesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new OutboundRulesetRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: OutboundRulesetRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class OutboundRulesetRulesList extends cdktf.ComplexList {
  public internalValue? : OutboundRulesetRules[] | cdktf.IResolvable

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
  public get(index: number): OutboundRulesetRulesOutputReference {
    return new OutboundRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset genesyscloud_outbound_ruleset}
*/
export class OutboundRuleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundRuleset to import
  * @param importFromId The id of the existing OutboundRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/outbound_ruleset genesyscloud_outbound_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactListId = config.contactListId;
    this._id = config.id;
    this._name = config.name;
    this._queueId = config.queueId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_list_id - computed: false, optional: true, required: false
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  public resetContactListId() {
    this._contactListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
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

  // queue_id - computed: false, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new OutboundRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: OutboundRulesetRules[] | cdktf.IResolvable) {
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
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_id: cdktf.stringToTerraform(this._queueId),
      rules: cdktf.listMapper(outboundRulesetRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
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
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(outboundRulesetRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundRulesetRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
