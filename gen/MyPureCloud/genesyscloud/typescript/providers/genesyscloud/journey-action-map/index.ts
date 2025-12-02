// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyActionMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the action map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#display_name JourneyActionMap#display_name}
  */
  readonly displayName: string;
  /**
  * Timestamp at which the action map is scheduled to stop firing. Date time is represented as an ISO-8601 string without a timezone. For example: 2006-01-02T15:04:05.000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#end_date JourneyActionMap#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#id JourneyActionMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Override organization-level frequency cap and always offer web engagements from this action map. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#ignore_frequency_cap JourneyActionMap#ignore_frequency_cap}
  */
  readonly ignoreFrequencyCap?: boolean | cdktf.IResolvable;
  /**
  * Whether the action map is active. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#is_active JourneyActionMap#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Timestamp at which the action map is scheduled to start firing. Date time is represented as an ISO-8601 string without a timezone. For example: 2006-01-02T15:04:05.000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#start_date JourneyActionMap#start_date}
  */
  readonly startDate: string;
  /**
  * Trigger action map if any segment in the list is assigned to a given customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#trigger_with_segments JourneyActionMap#trigger_with_segments}
  */
  readonly triggerWithSegments?: string[];
  /**
  * Weight of the action map with higher number denoting higher weight. Low=1, Medium=2, High=3. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#weight JourneyActionMap#weight}
  */
  readonly weight?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#action JourneyActionMap#action}
  */
  readonly action: JourneyActionMapAction;
  /**
  * action_map_schedule_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#action_map_schedule_groups JourneyActionMap#action_map_schedule_groups}
  */
  readonly actionMapScheduleGroups?: JourneyActionMapActionMapScheduleGroups;
  /**
  * activation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#activation JourneyActionMap#activation}
  */
  readonly activation: JourneyActionMapActivation;
  /**
  * page_url_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#page_url_conditions JourneyActionMap#page_url_conditions}
  */
  readonly pageUrlConditions?: JourneyActionMapPageUrlConditions[] | cdktf.IResolvable;
  /**
  * trigger_with_event_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#trigger_with_event_conditions JourneyActionMap#trigger_with_event_conditions}
  */
  readonly triggerWithEventConditions?: JourneyActionMapTriggerWithEventConditions[] | cdktf.IResolvable;
  /**
  * trigger_with_outcome_probability_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#trigger_with_outcome_probability_conditions JourneyActionMap#trigger_with_outcome_probability_conditions}
  */
  readonly triggerWithOutcomeProbabilityConditions?: JourneyActionMapTriggerWithOutcomeProbabilityConditions[] | cdktf.IResolvable;
  /**
  * trigger_with_outcome_quantile_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#trigger_with_outcome_quantile_conditions JourneyActionMap#trigger_with_outcome_quantile_conditions}
  */
  readonly triggerWithOutcomeQuantileConditions?: JourneyActionMapTriggerWithOutcomeQuantileConditions[] | cdktf.IResolvable;
}
export interface JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings {
  /**
  * Type of the value supplied. Valid values: String, Number, Integer, Boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#attribute_type JourneyActionMap#attribute_type}
  */
  readonly attributeType: string;
  /**
  * Method of finding value to use with Attribute. Valid values: Lookup, HardCoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#mapping_type JourneyActionMap#mapping_type}
  */
  readonly mappingType: string;
  /**
  * Name of the Integration Action Attribute to supply the value for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#name JourneyActionMap#name}
  */
  readonly name: string;
  /**
  * Value to supply for the specified Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#value JourneyActionMap#value}
  */
  readonly value: string;
}

export function journeyActionMapActionArchitectFlowFieldsFlowRequestMappingsToTerraform(struct?: JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    mapping_type: cdktf.stringToTerraform(struct!.mappingType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function journeyActionMapActionArchitectFlowFieldsFlowRequestMappingsToHclTerraform(struct?: JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_type: {
      value: cdktf.stringToHclTerraform(struct!.mappingType),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._mappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingType = this._mappingType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeType = undefined;
      this._mappingType = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeType = value.attributeType;
      this._mappingType = value.mappingType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // mapping_type - computed: false, optional: false, required: true
  private _mappingType?: string; 
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
  }
  public set mappingType(value: string) {
    this._mappingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingTypeInput() {
    return this._mappingType;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsList extends cdktf.ComplexList {
  public internalValue? : JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsOutputReference {
    return new JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionMapActionArchitectFlowFields {
  /**
  * The architect flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#architect_flow_id JourneyActionMap#architect_flow_id}
  */
  readonly architectFlowId: string;
  /**
  * flow_request_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#flow_request_mappings JourneyActionMap#flow_request_mappings}
  */
  readonly flowRequestMappings?: JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings[] | cdktf.IResolvable;
}

export function journeyActionMapActionArchitectFlowFieldsToTerraform(struct?: JourneyActionMapActionArchitectFlowFieldsOutputReference | JourneyActionMapActionArchitectFlowFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architect_flow_id: cdktf.stringToTerraform(struct!.architectFlowId),
    flow_request_mappings: cdktf.listMapper(journeyActionMapActionArchitectFlowFieldsFlowRequestMappingsToTerraform, true)(struct!.flowRequestMappings),
  }
}


export function journeyActionMapActionArchitectFlowFieldsToHclTerraform(struct?: JourneyActionMapActionArchitectFlowFieldsOutputReference | JourneyActionMapActionArchitectFlowFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architect_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.architectFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_request_mappings: {
      value: cdktf.listMapperHcl(journeyActionMapActionArchitectFlowFieldsFlowRequestMappingsToHclTerraform, true)(struct!.flowRequestMappings),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionArchitectFlowFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActionArchitectFlowFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectFlowId = this._architectFlowId;
    }
    if (this._flowRequestMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowRequestMappings = this._flowRequestMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionArchitectFlowFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectFlowId = undefined;
      this._flowRequestMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectFlowId = value.architectFlowId;
      this._flowRequestMappings.internalValue = value.flowRequestMappings;
    }
  }

  // architect_flow_id - computed: false, optional: false, required: true
  private _architectFlowId?: string; 
  public get architectFlowId() {
    return this.getStringAttribute('architect_flow_id');
  }
  public set architectFlowId(value: string) {
    this._architectFlowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectFlowIdInput() {
    return this._architectFlowId;
  }

  // flow_request_mappings - computed: false, optional: true, required: false
  private _flowRequestMappings = new JourneyActionMapActionArchitectFlowFieldsFlowRequestMappingsList(this, "flow_request_mappings", true);
  public get flowRequestMappings() {
    return this._flowRequestMappings;
  }
  public putFlowRequestMappings(value: JourneyActionMapActionArchitectFlowFieldsFlowRequestMappings[] | cdktf.IResolvable) {
    this._flowRequestMappings.internalValue = value;
  }
  public resetFlowRequestMappings() {
    this._flowRequestMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowRequestMappingsInput() {
    return this._flowRequestMappings.internalValue;
  }
}
export interface JourneyActionMapActionOpenActionFieldsOpenAction {
  /**
  * Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#id JourneyActionMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#name JourneyActionMap#name}
  */
  readonly name: string;
}

export function journeyActionMapActionOpenActionFieldsOpenActionToTerraform(struct?: JourneyActionMapActionOpenActionFieldsOpenActionOutputReference | JourneyActionMapActionOpenActionFieldsOpenAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function journeyActionMapActionOpenActionFieldsOpenActionToHclTerraform(struct?: JourneyActionMapActionOpenActionFieldsOpenActionOutputReference | JourneyActionMapActionOpenActionFieldsOpenAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionOpenActionFieldsOpenActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActionOpenActionFieldsOpenAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionOpenActionFieldsOpenAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
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
}
export interface JourneyActionMapActionOpenActionFields {
  /**
  * Custom fields defined in the schema referenced by the open action type selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#configuration_fields JourneyActionMap#configuration_fields}
  */
  readonly configurationFields?: string;
  /**
  * open_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#open_action JourneyActionMap#open_action}
  */
  readonly openAction: JourneyActionMapActionOpenActionFieldsOpenAction;
}

export function journeyActionMapActionOpenActionFieldsToTerraform(struct?: JourneyActionMapActionOpenActionFieldsOutputReference | JourneyActionMapActionOpenActionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_fields: cdktf.stringToTerraform(struct!.configurationFields),
    open_action: journeyActionMapActionOpenActionFieldsOpenActionToTerraform(struct!.openAction),
  }
}


export function journeyActionMapActionOpenActionFieldsToHclTerraform(struct?: JourneyActionMapActionOpenActionFieldsOutputReference | JourneyActionMapActionOpenActionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_fields: {
      value: cdktf.stringToHclTerraform(struct!.configurationFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_action: {
      value: journeyActionMapActionOpenActionFieldsOpenActionToHclTerraform(struct!.openAction),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionMapActionOpenActionFieldsOpenActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionOpenActionFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActionOpenActionFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationFields = this._configurationFields;
    }
    if (this._openAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAction = this._openAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionOpenActionFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationFields = undefined;
      this._openAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationFields = value.configurationFields;
      this._openAction.internalValue = value.openAction;
    }
  }

  // configuration_fields - computed: false, optional: true, required: false
  private _configurationFields?: string; 
  public get configurationFields() {
    return this.getStringAttribute('configuration_fields');
  }
  public set configurationFields(value: string) {
    this._configurationFields = value;
  }
  public resetConfigurationFields() {
    this._configurationFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFieldsInput() {
    return this._configurationFields;
  }

  // open_action - computed: false, optional: false, required: true
  private _openAction = new JourneyActionMapActionOpenActionFieldsOpenActionOutputReference(this, "open_action");
  public get openAction() {
    return this._openAction;
  }
  public putOpenAction(value: JourneyActionMapActionOpenActionFieldsOpenAction) {
    this._openAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openActionInput() {
    return this._openAction.internalValue;
  }
}
export interface JourneyActionMapActionWebMessagingOfferFields {
  /**
  * Flow to be invoked, overrides default flow when specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#architect_flow_id JourneyActionMap#architect_flow_id}
  */
  readonly architectFlowId?: string;
  /**
  * Text value to be used when inviting a visitor to engage with a web messaging offer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#offer_text JourneyActionMap#offer_text}
  */
  readonly offerText?: string;
}

export function journeyActionMapActionWebMessagingOfferFieldsToTerraform(struct?: JourneyActionMapActionWebMessagingOfferFieldsOutputReference | JourneyActionMapActionWebMessagingOfferFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architect_flow_id: cdktf.stringToTerraform(struct!.architectFlowId),
    offer_text: cdktf.stringToTerraform(struct!.offerText),
  }
}


export function journeyActionMapActionWebMessagingOfferFieldsToHclTerraform(struct?: JourneyActionMapActionWebMessagingOfferFieldsOutputReference | JourneyActionMapActionWebMessagingOfferFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architect_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.architectFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offer_text: {
      value: cdktf.stringToHclTerraform(struct!.offerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionWebMessagingOfferFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActionWebMessagingOfferFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectFlowId = this._architectFlowId;
    }
    if (this._offerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.offerText = this._offerText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionWebMessagingOfferFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectFlowId = undefined;
      this._offerText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectFlowId = value.architectFlowId;
      this._offerText = value.offerText;
    }
  }

  // architect_flow_id - computed: false, optional: true, required: false
  private _architectFlowId?: string; 
  public get architectFlowId() {
    return this.getStringAttribute('architect_flow_id');
  }
  public set architectFlowId(value: string) {
    this._architectFlowId = value;
  }
  public resetArchitectFlowId() {
    this._architectFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectFlowIdInput() {
    return this._architectFlowId;
  }

  // offer_text - computed: false, optional: true, required: false
  private _offerText?: string; 
  public get offerText() {
    return this.getStringAttribute('offer_text');
  }
  public set offerText(value: string) {
    this._offerText = value;
  }
  public resetOfferText() {
    this._offerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerTextInput() {
    return this._offerText;
  }
}
export interface JourneyActionMapAction {
  /**
  * Action template associated with the action map. For media type contentOffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#action_template_id JourneyActionMap#action_template_id}
  */
  readonly actionTemplateId?: string;
  /**
  * Whether this action should be throttled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#is_pacing_enabled JourneyActionMap#is_pacing_enabled}
  */
  readonly isPacingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Media type of action. Valid values: webchat, webMessagingOffer, contentOffer, architectFlow, openAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#media_type JourneyActionMap#media_type}
  */
  readonly mediaType: string;
  /**
  * architect_flow_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#architect_flow_fields JourneyActionMap#architect_flow_fields}
  */
  readonly architectFlowFields?: JourneyActionMapActionArchitectFlowFields;
  /**
  * open_action_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#open_action_fields JourneyActionMap#open_action_fields}
  */
  readonly openActionFields?: JourneyActionMapActionOpenActionFields;
  /**
  * web_messaging_offer_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#web_messaging_offer_fields JourneyActionMap#web_messaging_offer_fields}
  */
  readonly webMessagingOfferFields?: JourneyActionMapActionWebMessagingOfferFields;
}

export function journeyActionMapActionToTerraform(struct?: JourneyActionMapActionOutputReference | JourneyActionMapAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_template_id: cdktf.stringToTerraform(struct!.actionTemplateId),
    is_pacing_enabled: cdktf.booleanToTerraform(struct!.isPacingEnabled),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    architect_flow_fields: journeyActionMapActionArchitectFlowFieldsToTerraform(struct!.architectFlowFields),
    open_action_fields: journeyActionMapActionOpenActionFieldsToTerraform(struct!.openActionFields),
    web_messaging_offer_fields: journeyActionMapActionWebMessagingOfferFieldsToTerraform(struct!.webMessagingOfferFields),
  }
}


export function journeyActionMapActionToHclTerraform(struct?: JourneyActionMapActionOutputReference | JourneyActionMapAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_template_id: {
      value: cdktf.stringToHclTerraform(struct!.actionTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_pacing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPacingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architect_flow_fields: {
      value: journeyActionMapActionArchitectFlowFieldsToHclTerraform(struct!.architectFlowFields),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionMapActionArchitectFlowFieldsList",
    },
    open_action_fields: {
      value: journeyActionMapActionOpenActionFieldsToHclTerraform(struct!.openActionFields),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionMapActionOpenActionFieldsList",
    },
    web_messaging_offer_fields: {
      value: journeyActionMapActionWebMessagingOfferFieldsToHclTerraform(struct!.webMessagingOfferFields),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyActionMapActionWebMessagingOfferFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTemplateId = this._actionTemplateId;
    }
    if (this._isPacingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacingEnabled = this._isPacingEnabled;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._architectFlowFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectFlowFields = this._architectFlowFields?.internalValue;
    }
    if (this._openActionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openActionFields = this._openActionFields?.internalValue;
    }
    if (this._webMessagingOfferFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webMessagingOfferFields = this._webMessagingOfferFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTemplateId = undefined;
      this._isPacingEnabled = undefined;
      this._mediaType = undefined;
      this._architectFlowFields.internalValue = undefined;
      this._openActionFields.internalValue = undefined;
      this._webMessagingOfferFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTemplateId = value.actionTemplateId;
      this._isPacingEnabled = value.isPacingEnabled;
      this._mediaType = value.mediaType;
      this._architectFlowFields.internalValue = value.architectFlowFields;
      this._openActionFields.internalValue = value.openActionFields;
      this._webMessagingOfferFields.internalValue = value.webMessagingOfferFields;
    }
  }

  // action_template_id - computed: false, optional: true, required: false
  private _actionTemplateId?: string; 
  public get actionTemplateId() {
    return this.getStringAttribute('action_template_id');
  }
  public set actionTemplateId(value: string) {
    this._actionTemplateId = value;
  }
  public resetActionTemplateId() {
    this._actionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTemplateIdInput() {
    return this._actionTemplateId;
  }

  // is_pacing_enabled - computed: false, optional: true, required: false
  private _isPacingEnabled?: boolean | cdktf.IResolvable; 
  public get isPacingEnabled() {
    return this.getBooleanAttribute('is_pacing_enabled');
  }
  public set isPacingEnabled(value: boolean | cdktf.IResolvable) {
    this._isPacingEnabled = value;
  }
  public resetIsPacingEnabled() {
    this._isPacingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacingEnabledInput() {
    return this._isPacingEnabled;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // architect_flow_fields - computed: false, optional: true, required: false
  private _architectFlowFields = new JourneyActionMapActionArchitectFlowFieldsOutputReference(this, "architect_flow_fields");
  public get architectFlowFields() {
    return this._architectFlowFields;
  }
  public putArchitectFlowFields(value: JourneyActionMapActionArchitectFlowFields) {
    this._architectFlowFields.internalValue = value;
  }
  public resetArchitectFlowFields() {
    this._architectFlowFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectFlowFieldsInput() {
    return this._architectFlowFields.internalValue;
  }

  // open_action_fields - computed: false, optional: true, required: false
  private _openActionFields = new JourneyActionMapActionOpenActionFieldsOutputReference(this, "open_action_fields");
  public get openActionFields() {
    return this._openActionFields;
  }
  public putOpenActionFields(value: JourneyActionMapActionOpenActionFields) {
    this._openActionFields.internalValue = value;
  }
  public resetOpenActionFields() {
    this._openActionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openActionFieldsInput() {
    return this._openActionFields.internalValue;
  }

  // web_messaging_offer_fields - computed: false, optional: true, required: false
  private _webMessagingOfferFields = new JourneyActionMapActionWebMessagingOfferFieldsOutputReference(this, "web_messaging_offer_fields");
  public get webMessagingOfferFields() {
    return this._webMessagingOfferFields;
  }
  public putWebMessagingOfferFields(value: JourneyActionMapActionWebMessagingOfferFields) {
    this._webMessagingOfferFields.internalValue = value;
  }
  public resetWebMessagingOfferFields() {
    this._webMessagingOfferFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webMessagingOfferFieldsInput() {
    return this._webMessagingOfferFields.internalValue;
  }
}
export interface JourneyActionMapActionMapScheduleGroups {
  /**
  * The actions map's associated schedule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#action_map_schedule_group_id JourneyActionMap#action_map_schedule_group_id}
  */
  readonly actionMapScheduleGroupId: string;
  /**
  * The action map's associated emergency schedule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#emergency_action_map_schedule_group_id JourneyActionMap#emergency_action_map_schedule_group_id}
  */
  readonly emergencyActionMapScheduleGroupId?: string;
}

export function journeyActionMapActionMapScheduleGroupsToTerraform(struct?: JourneyActionMapActionMapScheduleGroupsOutputReference | JourneyActionMapActionMapScheduleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_map_schedule_group_id: cdktf.stringToTerraform(struct!.actionMapScheduleGroupId),
    emergency_action_map_schedule_group_id: cdktf.stringToTerraform(struct!.emergencyActionMapScheduleGroupId),
  }
}


export function journeyActionMapActionMapScheduleGroupsToHclTerraform(struct?: JourneyActionMapActionMapScheduleGroupsOutputReference | JourneyActionMapActionMapScheduleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_map_schedule_group_id: {
      value: cdktf.stringToHclTerraform(struct!.actionMapScheduleGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emergency_action_map_schedule_group_id: {
      value: cdktf.stringToHclTerraform(struct!.emergencyActionMapScheduleGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapActionMapScheduleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActionMapScheduleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionMapScheduleGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionMapScheduleGroupId = this._actionMapScheduleGroupId;
    }
    if (this._emergencyActionMapScheduleGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyActionMapScheduleGroupId = this._emergencyActionMapScheduleGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActionMapScheduleGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionMapScheduleGroupId = undefined;
      this._emergencyActionMapScheduleGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionMapScheduleGroupId = value.actionMapScheduleGroupId;
      this._emergencyActionMapScheduleGroupId = value.emergencyActionMapScheduleGroupId;
    }
  }

  // action_map_schedule_group_id - computed: false, optional: false, required: true
  private _actionMapScheduleGroupId?: string; 
  public get actionMapScheduleGroupId() {
    return this.getStringAttribute('action_map_schedule_group_id');
  }
  public set actionMapScheduleGroupId(value: string) {
    this._actionMapScheduleGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionMapScheduleGroupIdInput() {
    return this._actionMapScheduleGroupId;
  }

  // emergency_action_map_schedule_group_id - computed: false, optional: true, required: false
  private _emergencyActionMapScheduleGroupId?: string; 
  public get emergencyActionMapScheduleGroupId() {
    return this.getStringAttribute('emergency_action_map_schedule_group_id');
  }
  public set emergencyActionMapScheduleGroupId(value: string) {
    this._emergencyActionMapScheduleGroupId = value;
  }
  public resetEmergencyActionMapScheduleGroupId() {
    this._emergencyActionMapScheduleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyActionMapScheduleGroupIdInput() {
    return this._emergencyActionMapScheduleGroupId;
  }
}
export interface JourneyActionMapActivation {
  /**
  * Activation delay time amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#delay_in_seconds JourneyActionMap#delay_in_seconds}
  */
  readonly delayInSeconds?: number;
  /**
  * Type of activation. Valid values: immediate, on-next-visit, on-next-session, delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#type JourneyActionMap#type}
  */
  readonly type: string;
}

export function journeyActionMapActivationToTerraform(struct?: JourneyActionMapActivationOutputReference | JourneyActionMapActivation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_seconds: cdktf.numberToTerraform(struct!.delayInSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function journeyActionMapActivationToHclTerraform(struct?: JourneyActionMapActivationOutputReference | JourneyActionMapActivation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.delayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class JourneyActionMapActivationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyActionMapActivation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSeconds = this._delayInSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapActivation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delayInSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delayInSeconds = value.delayInSeconds;
      this._type = value.type;
    }
  }

  // delay_in_seconds - computed: false, optional: true, required: false
  private _delayInSeconds?: number; 
  public get delayInSeconds() {
    return this.getNumberAttribute('delay_in_seconds');
  }
  public set delayInSeconds(value: number) {
    this._delayInSeconds = value;
  }
  public resetDelayInSeconds() {
    this._delayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecondsInput() {
    return this._delayInSeconds;
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
export interface JourneyActionMapPageUrlConditions {
  /**
  * The comparison operator. Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#operator JourneyActionMap#operator}
  */
  readonly operator: string;
  /**
  * The URL condition value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#values JourneyActionMap#values}
  */
  readonly values: string[];
}

export function journeyActionMapPageUrlConditionsToTerraform(struct?: JourneyActionMapPageUrlConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function journeyActionMapPageUrlConditionsToHclTerraform(struct?: JourneyActionMapPageUrlConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapPageUrlConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionMapPageUrlConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapPageUrlConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class JourneyActionMapPageUrlConditionsList extends cdktf.ComplexList {
  public internalValue? : JourneyActionMapPageUrlConditions[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionMapPageUrlConditionsOutputReference {
    return new JourneyActionMapPageUrlConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionMapTriggerWithEventConditions {
  /**
  * The name of the event for which this condition can be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#event_name JourneyActionMap#event_name}
  */
  readonly eventName?: string;
  /**
  * The event key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#key JourneyActionMap#key}
  */
  readonly key: string;
  /**
  * The comparison operator. Valid values: containsAll, containsAny, notContainsAll, notContainsAny, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, startsWith, endsWith. Defaults to `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#operator JourneyActionMap#operator}
  */
  readonly operator?: string;
  /**
  * The session type for which this condition can be satisfied. Valid values: web, app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#session_type JourneyActionMap#session_type}
  */
  readonly sessionType: string;
  /**
  * The stream type for which this condition can be satisfied. Valid values: Web, App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#stream_type JourneyActionMap#stream_type}
  */
  readonly streamType: string;
  /**
  * The event values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#values JourneyActionMap#values}
  */
  readonly values: string[];
}

export function journeyActionMapTriggerWithEventConditionsToTerraform(struct?: JourneyActionMapTriggerWithEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_name: cdktf.stringToTerraform(struct!.eventName),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    session_type: cdktf.stringToTerraform(struct!.sessionType),
    stream_type: cdktf.stringToTerraform(struct!.streamType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function journeyActionMapTriggerWithEventConditionsToHclTerraform(struct?: JourneyActionMapTriggerWithEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_type: {
      value: cdktf.stringToHclTerraform(struct!.sessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_type: {
      value: cdktf.stringToHclTerraform(struct!.streamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapTriggerWithEventConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionMapTriggerWithEventConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._sessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionType = this._sessionType;
    }
    if (this._streamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamType = this._streamType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapTriggerWithEventConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventName = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._sessionType = undefined;
      this._streamType = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventName = value.eventName;
      this._key = value.key;
      this._operator = value.operator;
      this._sessionType = value.sessionType;
      this._streamType = value.streamType;
      this._values = value.values;
    }
  }

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
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

  // session_type - computed: false, optional: false, required: true
  private _sessionType?: string; 
  public get sessionType() {
    return this.getStringAttribute('session_type');
  }
  public set sessionType(value: string) {
    this._sessionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTypeInput() {
    return this._sessionType;
  }

  // stream_type - computed: false, optional: false, required: true
  private _streamType?: string; 
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
  public set streamType(value: string) {
    this._streamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTypeInput() {
    return this._streamType;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class JourneyActionMapTriggerWithEventConditionsList extends cdktf.ComplexList {
  public internalValue? : JourneyActionMapTriggerWithEventConditions[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionMapTriggerWithEventConditionsOutputReference {
    return new JourneyActionMapTriggerWithEventConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionMapTriggerWithOutcomeProbabilityConditions {
  /**
  * Probability value for the selected outcome at or above which the action map will trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#maximum_probability JourneyActionMap#maximum_probability}
  */
  readonly maximumProbability: number;
  /**
  * The outcome ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#outcome_id JourneyActionMap#outcome_id}
  */
  readonly outcomeId: string;
  /**
  * Additional probability condition, where if set, the action map will trigger if the current outcome probability is lower or equal to the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#probability JourneyActionMap#probability}
  */
  readonly probability?: number;
}

export function journeyActionMapTriggerWithOutcomeProbabilityConditionsToTerraform(struct?: JourneyActionMapTriggerWithOutcomeProbabilityConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_probability: cdktf.numberToTerraform(struct!.maximumProbability),
    outcome_id: cdktf.stringToTerraform(struct!.outcomeId),
    probability: cdktf.numberToTerraform(struct!.probability),
  }
}


export function journeyActionMapTriggerWithOutcomeProbabilityConditionsToHclTerraform(struct?: JourneyActionMapTriggerWithOutcomeProbabilityConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_probability: {
      value: cdktf.numberToHclTerraform(struct!.maximumProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outcome_id: {
      value: cdktf.stringToHclTerraform(struct!.outcomeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probability: {
      value: cdktf.numberToHclTerraform(struct!.probability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapTriggerWithOutcomeProbabilityConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionMapTriggerWithOutcomeProbabilityConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProbability = this._maximumProbability;
    }
    if (this._outcomeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeId = this._outcomeId;
    }
    if (this._probability !== undefined) {
      hasAnyValues = true;
      internalValueResult.probability = this._probability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapTriggerWithOutcomeProbabilityConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumProbability = undefined;
      this._outcomeId = undefined;
      this._probability = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumProbability = value.maximumProbability;
      this._outcomeId = value.outcomeId;
      this._probability = value.probability;
    }
  }

  // maximum_probability - computed: false, optional: false, required: true
  private _maximumProbability?: number; 
  public get maximumProbability() {
    return this.getNumberAttribute('maximum_probability');
  }
  public set maximumProbability(value: number) {
    this._maximumProbability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProbabilityInput() {
    return this._maximumProbability;
  }

  // outcome_id - computed: false, optional: false, required: true
  private _outcomeId?: string; 
  public get outcomeId() {
    return this.getStringAttribute('outcome_id');
  }
  public set outcomeId(value: string) {
    this._outcomeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeIdInput() {
    return this._outcomeId;
  }

  // probability - computed: false, optional: true, required: false
  private _probability?: number; 
  public get probability() {
    return this.getNumberAttribute('probability');
  }
  public set probability(value: number) {
    this._probability = value;
  }
  public resetProbability() {
    this._probability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityInput() {
    return this._probability;
  }
}

export class JourneyActionMapTriggerWithOutcomeProbabilityConditionsList extends cdktf.ComplexList {
  public internalValue? : JourneyActionMapTriggerWithOutcomeProbabilityConditions[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionMapTriggerWithOutcomeProbabilityConditionsOutputReference {
    return new JourneyActionMapTriggerWithOutcomeProbabilityConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyActionMapTriggerWithOutcomeQuantileConditions {
  /**
  * If set, this Condition is met when max_quantile_threshold is met, AND the current quantile of the OutcomeScore is below this fallback_quantile_threshold. Range 0.00-1.00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#fallback_quantile_threshold JourneyActionMap#fallback_quantile_threshold}
  */
  readonly fallbackQuantileThreshold?: number;
  /**
  * This Outcome Quantile Condition is met when sessionMaxQuantile of the OutcomeScore is above this value, (unless fallbackQuantile is set). Range 0.00-1.00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#max_quantile_threshold JourneyActionMap#max_quantile_threshold}
  */
  readonly maxQuantileThreshold: number;
  /**
  * The outcome ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#outcome_id JourneyActionMap#outcome_id}
  */
  readonly outcomeId: string;
}

export function journeyActionMapTriggerWithOutcomeQuantileConditionsToTerraform(struct?: JourneyActionMapTriggerWithOutcomeQuantileConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_quantile_threshold: cdktf.numberToTerraform(struct!.fallbackQuantileThreshold),
    max_quantile_threshold: cdktf.numberToTerraform(struct!.maxQuantileThreshold),
    outcome_id: cdktf.stringToTerraform(struct!.outcomeId),
  }
}


export function journeyActionMapTriggerWithOutcomeQuantileConditionsToHclTerraform(struct?: JourneyActionMapTriggerWithOutcomeQuantileConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_quantile_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fallbackQuantileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_quantile_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxQuantileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outcome_id: {
      value: cdktf.stringToHclTerraform(struct!.outcomeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyActionMapTriggerWithOutcomeQuantileConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyActionMapTriggerWithOutcomeQuantileConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackQuantileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackQuantileThreshold = this._fallbackQuantileThreshold;
    }
    if (this._maxQuantileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuantileThreshold = this._maxQuantileThreshold;
    }
    if (this._outcomeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeId = this._outcomeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyActionMapTriggerWithOutcomeQuantileConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackQuantileThreshold = undefined;
      this._maxQuantileThreshold = undefined;
      this._outcomeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackQuantileThreshold = value.fallbackQuantileThreshold;
      this._maxQuantileThreshold = value.maxQuantileThreshold;
      this._outcomeId = value.outcomeId;
    }
  }

  // fallback_quantile_threshold - computed: false, optional: true, required: false
  private _fallbackQuantileThreshold?: number; 
  public get fallbackQuantileThreshold() {
    return this.getNumberAttribute('fallback_quantile_threshold');
  }
  public set fallbackQuantileThreshold(value: number) {
    this._fallbackQuantileThreshold = value;
  }
  public resetFallbackQuantileThreshold() {
    this._fallbackQuantileThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackQuantileThresholdInput() {
    return this._fallbackQuantileThreshold;
  }

  // max_quantile_threshold - computed: false, optional: false, required: true
  private _maxQuantileThreshold?: number; 
  public get maxQuantileThreshold() {
    return this.getNumberAttribute('max_quantile_threshold');
  }
  public set maxQuantileThreshold(value: number) {
    this._maxQuantileThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuantileThresholdInput() {
    return this._maxQuantileThreshold;
  }

  // outcome_id - computed: false, optional: false, required: true
  private _outcomeId?: string; 
  public get outcomeId() {
    return this.getStringAttribute('outcome_id');
  }
  public set outcomeId(value: string) {
    this._outcomeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeIdInput() {
    return this._outcomeId;
  }
}

export class JourneyActionMapTriggerWithOutcomeQuantileConditionsList extends cdktf.ComplexList {
  public internalValue? : JourneyActionMapTriggerWithOutcomeQuantileConditions[] | cdktf.IResolvable

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
  public get(index: number): JourneyActionMapTriggerWithOutcomeQuantileConditionsOutputReference {
    return new JourneyActionMapTriggerWithOutcomeQuantileConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map genesyscloud_journey_action_map}
*/
export class JourneyActionMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_action_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyActionMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyActionMap to import
  * @param importFromId The id of the existing JourneyActionMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyActionMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_action_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/journey_action_map genesyscloud_journey_action_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyActionMapConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyActionMapConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_action_map',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._endDate = config.endDate;
    this._id = config.id;
    this._ignoreFrequencyCap = config.ignoreFrequencyCap;
    this._isActive = config.isActive;
    this._startDate = config.startDate;
    this._triggerWithSegments = config.triggerWithSegments;
    this._weight = config.weight;
    this._action.internalValue = config.action;
    this._actionMapScheduleGroups.internalValue = config.actionMapScheduleGroups;
    this._activation.internalValue = config.activation;
    this._pageUrlConditions.internalValue = config.pageUrlConditions;
    this._triggerWithEventConditions.internalValue = config.triggerWithEventConditions;
    this._triggerWithOutcomeProbabilityConditions.internalValue = config.triggerWithOutcomeProbabilityConditions;
    this._triggerWithOutcomeQuantileConditions.internalValue = config.triggerWithOutcomeQuantileConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // ignore_frequency_cap - computed: false, optional: true, required: false
  private _ignoreFrequencyCap?: boolean | cdktf.IResolvable; 
  public get ignoreFrequencyCap() {
    return this.getBooleanAttribute('ignore_frequency_cap');
  }
  public set ignoreFrequencyCap(value: boolean | cdktf.IResolvable) {
    this._ignoreFrequencyCap = value;
  }
  public resetIgnoreFrequencyCap() {
    this._ignoreFrequencyCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFrequencyCapInput() {
    return this._ignoreFrequencyCap;
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // trigger_with_segments - computed: false, optional: true, required: false
  private _triggerWithSegments?: string[]; 
  public get triggerWithSegments() {
    return cdktf.Fn.tolist(this.getListAttribute('trigger_with_segments'));
  }
  public set triggerWithSegments(value: string[]) {
    this._triggerWithSegments = value;
  }
  public resetTriggerWithSegments() {
    this._triggerWithSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWithSegmentsInput() {
    return this._triggerWithSegments;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // action - computed: false, optional: false, required: true
  private _action = new JourneyActionMapActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: JourneyActionMapAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // action_map_schedule_groups - computed: false, optional: true, required: false
  private _actionMapScheduleGroups = new JourneyActionMapActionMapScheduleGroupsOutputReference(this, "action_map_schedule_groups");
  public get actionMapScheduleGroups() {
    return this._actionMapScheduleGroups;
  }
  public putActionMapScheduleGroups(value: JourneyActionMapActionMapScheduleGroups) {
    this._actionMapScheduleGroups.internalValue = value;
  }
  public resetActionMapScheduleGroups() {
    this._actionMapScheduleGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionMapScheduleGroupsInput() {
    return this._actionMapScheduleGroups.internalValue;
  }

  // activation - computed: false, optional: false, required: true
  private _activation = new JourneyActionMapActivationOutputReference(this, "activation");
  public get activation() {
    return this._activation;
  }
  public putActivation(value: JourneyActionMapActivation) {
    this._activation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationInput() {
    return this._activation.internalValue;
  }

  // page_url_conditions - computed: false, optional: true, required: false
  private _pageUrlConditions = new JourneyActionMapPageUrlConditionsList(this, "page_url_conditions", true);
  public get pageUrlConditions() {
    return this._pageUrlConditions;
  }
  public putPageUrlConditions(value: JourneyActionMapPageUrlConditions[] | cdktf.IResolvable) {
    this._pageUrlConditions.internalValue = value;
  }
  public resetPageUrlConditions() {
    this._pageUrlConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageUrlConditionsInput() {
    return this._pageUrlConditions.internalValue;
  }

  // trigger_with_event_conditions - computed: false, optional: true, required: false
  private _triggerWithEventConditions = new JourneyActionMapTriggerWithEventConditionsList(this, "trigger_with_event_conditions", true);
  public get triggerWithEventConditions() {
    return this._triggerWithEventConditions;
  }
  public putTriggerWithEventConditions(value: JourneyActionMapTriggerWithEventConditions[] | cdktf.IResolvable) {
    this._triggerWithEventConditions.internalValue = value;
  }
  public resetTriggerWithEventConditions() {
    this._triggerWithEventConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWithEventConditionsInput() {
    return this._triggerWithEventConditions.internalValue;
  }

  // trigger_with_outcome_probability_conditions - computed: false, optional: true, required: false
  private _triggerWithOutcomeProbabilityConditions = new JourneyActionMapTriggerWithOutcomeProbabilityConditionsList(this, "trigger_with_outcome_probability_conditions", true);
  public get triggerWithOutcomeProbabilityConditions() {
    return this._triggerWithOutcomeProbabilityConditions;
  }
  public putTriggerWithOutcomeProbabilityConditions(value: JourneyActionMapTriggerWithOutcomeProbabilityConditions[] | cdktf.IResolvable) {
    this._triggerWithOutcomeProbabilityConditions.internalValue = value;
  }
  public resetTriggerWithOutcomeProbabilityConditions() {
    this._triggerWithOutcomeProbabilityConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWithOutcomeProbabilityConditionsInput() {
    return this._triggerWithOutcomeProbabilityConditions.internalValue;
  }

  // trigger_with_outcome_quantile_conditions - computed: false, optional: true, required: false
  private _triggerWithOutcomeQuantileConditions = new JourneyActionMapTriggerWithOutcomeQuantileConditionsList(this, "trigger_with_outcome_quantile_conditions", true);
  public get triggerWithOutcomeQuantileConditions() {
    return this._triggerWithOutcomeQuantileConditions;
  }
  public putTriggerWithOutcomeQuantileConditions(value: JourneyActionMapTriggerWithOutcomeQuantileConditions[] | cdktf.IResolvable) {
    this._triggerWithOutcomeQuantileConditions.internalValue = value;
  }
  public resetTriggerWithOutcomeQuantileConditions() {
    this._triggerWithOutcomeQuantileConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWithOutcomeQuantileConditionsInput() {
    return this._triggerWithOutcomeQuantileConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      ignore_frequency_cap: cdktf.booleanToTerraform(this._ignoreFrequencyCap),
      is_active: cdktf.booleanToTerraform(this._isActive),
      start_date: cdktf.stringToTerraform(this._startDate),
      trigger_with_segments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerWithSegments),
      weight: cdktf.numberToTerraform(this._weight),
      action: journeyActionMapActionToTerraform(this._action.internalValue),
      action_map_schedule_groups: journeyActionMapActionMapScheduleGroupsToTerraform(this._actionMapScheduleGroups.internalValue),
      activation: journeyActionMapActivationToTerraform(this._activation.internalValue),
      page_url_conditions: cdktf.listMapper(journeyActionMapPageUrlConditionsToTerraform, true)(this._pageUrlConditions.internalValue),
      trigger_with_event_conditions: cdktf.listMapper(journeyActionMapTriggerWithEventConditionsToTerraform, true)(this._triggerWithEventConditions.internalValue),
      trigger_with_outcome_probability_conditions: cdktf.listMapper(journeyActionMapTriggerWithOutcomeProbabilityConditionsToTerraform, true)(this._triggerWithOutcomeProbabilityConditions.internalValue),
      trigger_with_outcome_quantile_conditions: cdktf.listMapper(journeyActionMapTriggerWithOutcomeQuantileConditionsToTerraform, true)(this._triggerWithOutcomeQuantileConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      ignore_frequency_cap: {
        value: cdktf.booleanToHclTerraform(this._ignoreFrequencyCap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_with_segments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerWithSegments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action: {
        value: journeyActionMapActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapActionList",
      },
      action_map_schedule_groups: {
        value: journeyActionMapActionMapScheduleGroupsToHclTerraform(this._actionMapScheduleGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapActionMapScheduleGroupsList",
      },
      activation: {
        value: journeyActionMapActivationToHclTerraform(this._activation.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapActivationList",
      },
      page_url_conditions: {
        value: cdktf.listMapperHcl(journeyActionMapPageUrlConditionsToHclTerraform, true)(this._pageUrlConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapPageUrlConditionsList",
      },
      trigger_with_event_conditions: {
        value: cdktf.listMapperHcl(journeyActionMapTriggerWithEventConditionsToHclTerraform, true)(this._triggerWithEventConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapTriggerWithEventConditionsList",
      },
      trigger_with_outcome_probability_conditions: {
        value: cdktf.listMapperHcl(journeyActionMapTriggerWithOutcomeProbabilityConditionsToHclTerraform, true)(this._triggerWithOutcomeProbabilityConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapTriggerWithOutcomeProbabilityConditionsList",
      },
      trigger_with_outcome_quantile_conditions: {
        value: cdktf.listMapperHcl(journeyActionMapTriggerWithOutcomeQuantileConditionsToHclTerraform, true)(this._triggerWithOutcomeQuantileConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JourneyActionMapTriggerWithOutcomeQuantileConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
