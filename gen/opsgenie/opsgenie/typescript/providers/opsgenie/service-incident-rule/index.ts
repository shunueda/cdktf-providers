// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceIncidentRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#id ServiceIncidentRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#service_id ServiceIncidentRule#service_id}
  */
  readonly serviceId: string;
  /**
  * incident_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#incident_rule ServiceIncidentRule#incident_rule}
  */
  readonly incidentRule: ServiceIncidentRuleIncidentRule[] | cdktf.IResolvable;
}
export interface ServiceIncidentRuleIncidentRuleConditions {
  /**
  * User defined value that will be compared with alert field according to the operation. Default value is empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#expected_value ServiceIncidentRule#expected_value}
  */
  readonly expectedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#field ServiceIncidentRule#field}
  */
  readonly field: string;
  /**
  * If 'field' is set as 'extra-properties', key could be used for key-value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#key ServiceIncidentRule#key}
  */
  readonly key?: string;
  /**
  * Indicates behaviour of the given operation. Default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#not ServiceIncidentRule#not}
  */
  readonly not?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#operation ServiceIncidentRule#operation}
  */
  readonly operation: string;
}

export function serviceIncidentRuleIncidentRuleConditionsToTerraform(struct?: ServiceIncidentRuleIncidentRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_value: cdktf.stringToTerraform(struct!.expectedValue),
    field: cdktf.stringToTerraform(struct!.field),
    key: cdktf.stringToTerraform(struct!.key),
    not: cdktf.booleanToTerraform(struct!.not),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function serviceIncidentRuleIncidentRuleConditionsToHclTerraform(struct?: ServiceIncidentRuleIncidentRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_value: {
      value: cdktf.stringToHclTerraform(struct!.expectedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
    not: {
      value: cdktf.booleanToHclTerraform(struct!.not),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentRuleIncidentRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIncidentRuleIncidentRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedValue = this._expectedValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentRuleIncidentRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedValue = undefined;
      this._field = undefined;
      this._key = undefined;
      this._not = undefined;
      this._operation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedValue = value.expectedValue;
      this._field = value.field;
      this._key = value.key;
      this._not = value.not;
      this._operation = value.operation;
    }
  }

  // expected_value - computed: false, optional: true, required: false
  private _expectedValue?: string; 
  public get expectedValue() {
    return this.getStringAttribute('expected_value');
  }
  public set expectedValue(value: string) {
    this._expectedValue = value;
  }
  public resetExpectedValue() {
    this._expectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedValueInput() {
    return this._expectedValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // not - computed: false, optional: true, required: false
  private _not?: boolean | cdktf.IResolvable; 
  public get not() {
    return this.getBooleanAttribute('not');
  }
  public set not(value: boolean | cdktf.IResolvable) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}

export class ServiceIncidentRuleIncidentRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : ServiceIncidentRuleIncidentRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): ServiceIncidentRuleIncidentRuleConditionsOutputReference {
    return new ServiceIncidentRuleIncidentRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#description ServiceIncidentRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#enable ServiceIncidentRule#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#message ServiceIncidentRule#message}
  */
  readonly message: string;
}

export function serviceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesToTerraform(struct?: ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enable: cdktf.booleanToTerraform(struct!.enable),
    message: cdktf.stringToTerraform(struct!.message),
  }
}


export function serviceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesToHclTerraform(struct?: ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enable = undefined;
      this._message = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enable = value.enable;
      this._message = value.message;
    }
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}

export class ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesList extends cdktf.ComplexList {
  public internalValue? : ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties[] | cdktf.IResolvable

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
  public get(index: number): ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesOutputReference {
    return new ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIncidentRuleIncidentRuleIncidentProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#description ServiceIncidentRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#details ServiceIncidentRule#details}
  */
  readonly details?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#message ServiceIncidentRule#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#priority ServiceIncidentRule#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#tags ServiceIncidentRule#tags}
  */
  readonly tags?: string[];
  /**
  * stakeholder_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#stakeholder_properties ServiceIncidentRule#stakeholder_properties}
  */
  readonly stakeholderProperties: ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties[] | cdktf.IResolvable;
}

export function serviceIncidentRuleIncidentRuleIncidentPropertiesToTerraform(struct?: ServiceIncidentRuleIncidentRuleIncidentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.details),
    message: cdktf.stringToTerraform(struct!.message),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    stakeholder_properties: cdktf.listMapper(serviceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesToTerraform, true)(struct!.stakeholderProperties),
  }
}


export function serviceIncidentRuleIncidentRuleIncidentPropertiesToHclTerraform(struct?: ServiceIncidentRuleIncidentRuleIncidentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.details),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stakeholder_properties: {
      value: cdktf.listMapperHcl(serviceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesToHclTerraform, true)(struct!.stakeholderProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentRuleIncidentRuleIncidentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIncidentRuleIncidentRuleIncidentProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._stakeholderProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stakeholderProperties = this._stakeholderProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentRuleIncidentRuleIncidentProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._details = undefined;
      this._message = undefined;
      this._priority = undefined;
      this._tags = undefined;
      this._stakeholderProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._details = value.details;
      this._message = value.message;
      this._priority = value.priority;
      this._tags = value.tags;
      this._stakeholderProperties.internalValue = value.stakeholderProperties;
    }
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

  // details - computed: false, optional: true, required: false
  private _details?: { [key: string]: string }; 
  public get details() {
    return this.getStringMapAttribute('details');
  }
  public set details(value: { [key: string]: string }) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // stakeholder_properties - computed: false, optional: false, required: true
  private _stakeholderProperties = new ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderPropertiesList(this, "stakeholder_properties", false);
  public get stakeholderProperties() {
    return this._stakeholderProperties;
  }
  public putStakeholderProperties(value: ServiceIncidentRuleIncidentRuleIncidentPropertiesStakeholderProperties[] | cdktf.IResolvable) {
    this._stakeholderProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stakeholderPropertiesInput() {
    return this._stakeholderProperties.internalValue;
  }
}

export class ServiceIncidentRuleIncidentRuleIncidentPropertiesList extends cdktf.ComplexList {
  public internalValue? : ServiceIncidentRuleIncidentRuleIncidentProperties[] | cdktf.IResolvable

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
  public get(index: number): ServiceIncidentRuleIncidentRuleIncidentPropertiesOutputReference {
    return new ServiceIncidentRuleIncidentRuleIncidentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIncidentRuleIncidentRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#condition_match_type ServiceIncidentRule#condition_match_type}
  */
  readonly conditionMatchType?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#conditions ServiceIncidentRule#conditions}
  */
  readonly conditions?: ServiceIncidentRuleIncidentRuleConditions[] | cdktf.IResolvable;
  /**
  * incident_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#incident_properties ServiceIncidentRule#incident_properties}
  */
  readonly incidentProperties: ServiceIncidentRuleIncidentRuleIncidentProperties[] | cdktf.IResolvable;
}

export function serviceIncidentRuleIncidentRuleToTerraform(struct?: ServiceIncidentRuleIncidentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_match_type: cdktf.stringToTerraform(struct!.conditionMatchType),
    conditions: cdktf.listMapper(serviceIncidentRuleIncidentRuleConditionsToTerraform, true)(struct!.conditions),
    incident_properties: cdktf.listMapper(serviceIncidentRuleIncidentRuleIncidentPropertiesToTerraform, true)(struct!.incidentProperties),
  }
}


export function serviceIncidentRuleIncidentRuleToHclTerraform(struct?: ServiceIncidentRuleIncidentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_match_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(serviceIncidentRuleIncidentRuleConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceIncidentRuleIncidentRuleConditionsList",
    },
    incident_properties: {
      value: cdktf.listMapperHcl(serviceIncidentRuleIncidentRuleIncidentPropertiesToHclTerraform, true)(struct!.incidentProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIncidentRuleIncidentRuleIncidentPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIncidentRuleIncidentRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIncidentRuleIncidentRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionMatchType = this._conditionMatchType;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._incidentProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentProperties = this._incidentProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIncidentRuleIncidentRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionMatchType = undefined;
      this._conditions.internalValue = undefined;
      this._incidentProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionMatchType = value.conditionMatchType;
      this._conditions.internalValue = value.conditions;
      this._incidentProperties.internalValue = value.incidentProperties;
    }
  }

  // condition_match_type - computed: false, optional: true, required: false
  private _conditionMatchType?: string; 
  public get conditionMatchType() {
    return this.getStringAttribute('condition_match_type');
  }
  public set conditionMatchType(value: string) {
    this._conditionMatchType = value;
  }
  public resetConditionMatchType() {
    this._conditionMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionMatchTypeInput() {
    return this._conditionMatchType;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ServiceIncidentRuleIncidentRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceIncidentRuleIncidentRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // incident_properties - computed: false, optional: false, required: true
  private _incidentProperties = new ServiceIncidentRuleIncidentRuleIncidentPropertiesList(this, "incident_properties", false);
  public get incidentProperties() {
    return this._incidentProperties;
  }
  public putIncidentProperties(value: ServiceIncidentRuleIncidentRuleIncidentProperties[] | cdktf.IResolvable) {
    this._incidentProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPropertiesInput() {
    return this._incidentProperties.internalValue;
  }
}

export class ServiceIncidentRuleIncidentRuleList extends cdktf.ComplexList {
  public internalValue? : ServiceIncidentRuleIncidentRule[] | cdktf.IResolvable

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
  public get(index: number): ServiceIncidentRuleIncidentRuleOutputReference {
    return new ServiceIncidentRuleIncidentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule opsgenie_service_incident_rule}
*/
export class ServiceIncidentRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_service_incident_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceIncidentRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceIncidentRule to import
  * @param importFromId The id of the existing ServiceIncidentRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceIncidentRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_service_incident_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/service_incident_rule opsgenie_service_incident_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceIncidentRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceIncidentRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_service_incident_rule',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40',
        providerVersionConstraint: '0.6.40'
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
    this._serviceId = config.serviceId;
    this._incidentRule.internalValue = config.incidentRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // incident_rule - computed: false, optional: false, required: true
  private _incidentRule = new ServiceIncidentRuleIncidentRuleList(this, "incident_rule", false);
  public get incidentRule() {
    return this._incidentRule;
  }
  public putIncidentRule(value: ServiceIncidentRuleIncidentRule[] | cdktf.IResolvable) {
    this._incidentRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRuleInput() {
    return this._incidentRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      incident_rule: cdktf.listMapper(serviceIncidentRuleIncidentRuleToTerraform, true)(this._incidentRule.internalValue),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_rule: {
        value: cdktf.listMapperHcl(serviceIncidentRuleIncidentRuleToHclTerraform, true)(this._incidentRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIncidentRuleIncidentRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
