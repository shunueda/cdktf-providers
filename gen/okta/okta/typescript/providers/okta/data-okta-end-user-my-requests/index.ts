// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaEndUserMyRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the catalog entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#entry_id DataOktaEndUserMyRequests#entry_id}
  */
  readonly entryId: string;
  /**
  * The ID of the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#id DataOktaEndUserMyRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * requester_field_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#requester_field_values DataOktaEndUserMyRequests#requester_field_values}
  */
  readonly requesterFieldValues?: DataOktaEndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable;
  /**
  * risk_assessment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#risk_assessment DataOktaEndUserMyRequests#risk_assessment}
  */
  readonly riskAssessment?: DataOktaEndUserMyRequestsRiskAssessment;
}
export interface DataOktaEndUserMyRequestsRequested {
}

export function dataOktaEndUserMyRequestsRequestedToTerraform(struct?: DataOktaEndUserMyRequestsRequested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaEndUserMyRequestsRequestedToHclTerraform(struct?: DataOktaEndUserMyRequestsRequested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaEndUserMyRequestsRequestedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaEndUserMyRequestsRequested | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRequested | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // access_scope_id - computed: true, optional: false, required: false
  public get accessScopeId() {
    return this.getStringAttribute('access_scope_id');
  }

  // access_scope_type - computed: true, optional: false, required: false
  public get accessScopeType() {
    return this.getStringAttribute('access_scope_type');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}
export interface DataOktaEndUserMyRequestsRequestedBy {
}

export function dataOktaEndUserMyRequestsRequestedByToTerraform(struct?: DataOktaEndUserMyRequestsRequestedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaEndUserMyRequestsRequestedByToHclTerraform(struct?: DataOktaEndUserMyRequestsRequestedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaEndUserMyRequestsRequestedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaEndUserMyRequestsRequestedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRequestedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOktaEndUserMyRequestsRequestedFor {
}

export function dataOktaEndUserMyRequestsRequestedForToTerraform(struct?: DataOktaEndUserMyRequestsRequestedFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaEndUserMyRequestsRequestedForToHclTerraform(struct?: DataOktaEndUserMyRequestsRequestedFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaEndUserMyRequestsRequestedForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaEndUserMyRequestsRequestedFor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRequestedFor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOktaEndUserMyRequestsRequesterFieldValues {
  /**
  * The ID of a requesterField.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#id DataOktaEndUserMyRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A human-readable description of requesterField. It's used for display purposes and is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#label DataOktaEndUserMyRequests#label}
  */
  readonly label?: string;
  /**
  * Type of value for the requester field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#type DataOktaEndUserMyRequests#type}
  */
  readonly type?: string;
  /**
  * The value of requesterField, which depends on the type of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#value DataOktaEndUserMyRequests#value}
  */
  readonly value?: string;
  /**
  * The values of requesterField with the type MULTISELECT.
  * If the field type is MULTISELECT, this property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#values DataOktaEndUserMyRequests#values}
  */
  readonly values?: string[];
}

export function dataOktaEndUserMyRequestsRequesterFieldValuesToTerraform(struct?: DataOktaEndUserMyRequestsRequesterFieldValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOktaEndUserMyRequestsRequesterFieldValuesToHclTerraform(struct?: DataOktaEndUserMyRequestsRequesterFieldValues | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaEndUserMyRequestsRequesterFieldValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaEndUserMyRequestsRequesterFieldValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRequesterFieldValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._label = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._label = value.label;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOktaEndUserMyRequestsRequesterFieldValuesList extends cdktf.ComplexList {
  public internalValue? : DataOktaEndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable

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
  public get(index: number): DataOktaEndUserMyRequestsRequesterFieldValuesOutputReference {
    return new DataOktaEndUserMyRequestsRequesterFieldValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaEndUserMyRequestsRiskAssessmentRiskRules {
  /**
  * The human readable description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#description DataOktaEndUserMyRequests#description}
  */
  readonly description?: string;
  /**
  * The name of a resource rule causing a conflict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#name DataOktaEndUserMyRequests#name}
  */
  readonly name?: string;
  /**
  * Human readable name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#resource_name DataOktaEndUserMyRequests#resource_name}
  */
  readonly resourceName?: string;
}

export function dataOktaEndUserMyRequestsRiskAssessmentRiskRulesToTerraform(struct?: DataOktaEndUserMyRequestsRiskAssessmentRiskRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function dataOktaEndUserMyRequestsRiskAssessmentRiskRulesToHclTerraform(struct?: DataOktaEndUserMyRequestsRiskAssessmentRiskRules | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaEndUserMyRequestsRiskAssessmentRiskRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaEndUserMyRequestsRiskAssessmentRiskRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRiskAssessmentRiskRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._resourceName = value.resourceName;
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

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class DataOktaEndUserMyRequestsRiskAssessmentRiskRulesList extends cdktf.ComplexList {
  public internalValue? : DataOktaEndUserMyRequestsRiskAssessmentRiskRules[] | cdktf.IResolvable

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
  public get(index: number): DataOktaEndUserMyRequestsRiskAssessmentRiskRulesOutputReference {
    return new DataOktaEndUserMyRequestsRiskAssessmentRiskRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaEndUserMyRequestsRiskAssessment {
  /**
  * Whether request submission is allowed or restricted in the risk settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#request_submission_type DataOktaEndUserMyRequests#request_submission_type}
  */
  readonly requestSubmissionType?: string;
  /**
  * risk_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#risk_rules DataOktaEndUserMyRequests#risk_rules}
  */
  readonly riskRules?: DataOktaEndUserMyRequestsRiskAssessmentRiskRules[] | cdktf.IResolvable;
}

export function dataOktaEndUserMyRequestsRiskAssessmentToTerraform(struct?: DataOktaEndUserMyRequestsRiskAssessment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_submission_type: cdktf.stringToTerraform(struct!.requestSubmissionType),
    risk_rules: cdktf.listMapper(dataOktaEndUserMyRequestsRiskAssessmentRiskRulesToTerraform, true)(struct!.riskRules),
  }
}


export function dataOktaEndUserMyRequestsRiskAssessmentToHclTerraform(struct?: DataOktaEndUserMyRequestsRiskAssessment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_submission_type: {
      value: cdktf.stringToHclTerraform(struct!.requestSubmissionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_rules: {
      value: cdktf.listMapperHcl(dataOktaEndUserMyRequestsRiskAssessmentRiskRulesToHclTerraform, true)(struct!.riskRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaEndUserMyRequestsRiskAssessmentRiskRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaEndUserMyRequestsRiskAssessmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaEndUserMyRequestsRiskAssessment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestSubmissionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSubmissionType = this._requestSubmissionType;
    }
    if (this._riskRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskRules = this._riskRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaEndUserMyRequestsRiskAssessment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestSubmissionType = undefined;
      this._riskRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestSubmissionType = value.requestSubmissionType;
      this._riskRules.internalValue = value.riskRules;
    }
  }

  // request_submission_type - computed: false, optional: true, required: false
  private _requestSubmissionType?: string; 
  public get requestSubmissionType() {
    return this.getStringAttribute('request_submission_type');
  }
  public set requestSubmissionType(value: string) {
    this._requestSubmissionType = value;
  }
  public resetRequestSubmissionType() {
    this._requestSubmissionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSubmissionTypeInput() {
    return this._requestSubmissionType;
  }

  // risk_rules - computed: false, optional: true, required: false
  private _riskRules = new DataOktaEndUserMyRequestsRiskAssessmentRiskRulesList(this, "risk_rules", false);
  public get riskRules() {
    return this._riskRules;
  }
  public putRiskRules(value: DataOktaEndUserMyRequestsRiskAssessmentRiskRules[] | cdktf.IResolvable) {
    this._riskRules.internalValue = value;
  }
  public resetRiskRules() {
    this._riskRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskRulesInput() {
    return this._riskRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests okta_end_user_my_requests}
*/
export class DataOktaEndUserMyRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_end_user_my_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaEndUserMyRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaEndUserMyRequests to import
  * @param importFromId The id of the existing DataOktaEndUserMyRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaEndUserMyRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_end_user_my_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/end_user_my_requests okta_end_user_my_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaEndUserMyRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaEndUserMyRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_end_user_my_requests',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryId = config.entryId;
    this._id = config.id;
    this._requesterFieldValues.internalValue = config.requesterFieldValues;
    this._riskAssessment.internalValue = config.riskAssessment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_duration - computed: true, optional: false, required: false
  public get accessDuration() {
    return this.getStringAttribute('access_duration');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // entry_id - computed: false, optional: false, required: true
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // grant_status - computed: true, optional: false, required: false
  public get grantStatus() {
    return this.getStringAttribute('grant_status');
  }

  // granted - computed: true, optional: false, required: false
  public get granted() {
    return this.getStringAttribute('granted');
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // resolved - computed: true, optional: false, required: false
  public get resolved() {
    return this.getStringAttribute('resolved');
  }

  // revocation_scheduled - computed: true, optional: false, required: false
  public get revocationScheduled() {
    return this.getStringAttribute('revocation_scheduled');
  }

  // revocation_status - computed: true, optional: false, required: false
  public get revocationStatus() {
    return this.getStringAttribute('revocation_status');
  }

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getStringAttribute('revoked');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // requested - computed: false, optional: false, required: false
  private _requested = new DataOktaEndUserMyRequestsRequestedOutputReference(this, "requested");
  public get requested() {
    return this._requested;
  }

  // requested_by - computed: false, optional: false, required: false
  private _requestedBy = new DataOktaEndUserMyRequestsRequestedByOutputReference(this, "requested_by");
  public get requestedBy() {
    return this._requestedBy;
  }

  // requested_for - computed: false, optional: false, required: false
  private _requestedFor = new DataOktaEndUserMyRequestsRequestedForOutputReference(this, "requested_for");
  public get requestedFor() {
    return this._requestedFor;
  }

  // requester_field_values - computed: false, optional: true, required: false
  private _requesterFieldValues = new DataOktaEndUserMyRequestsRequesterFieldValuesList(this, "requester_field_values", false);
  public get requesterFieldValues() {
    return this._requesterFieldValues;
  }
  public putRequesterFieldValues(value: DataOktaEndUserMyRequestsRequesterFieldValues[] | cdktf.IResolvable) {
    this._requesterFieldValues.internalValue = value;
  }
  public resetRequesterFieldValues() {
    this._requesterFieldValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterFieldValuesInput() {
    return this._requesterFieldValues.internalValue;
  }

  // risk_assessment - computed: false, optional: true, required: false
  private _riskAssessment = new DataOktaEndUserMyRequestsRiskAssessmentOutputReference(this, "risk_assessment");
  public get riskAssessment() {
    return this._riskAssessment;
  }
  public putRiskAssessment(value: DataOktaEndUserMyRequestsRiskAssessment) {
    this._riskAssessment.internalValue = value;
  }
  public resetRiskAssessment() {
    this._riskAssessment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskAssessmentInput() {
    return this._riskAssessment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry_id: cdktf.stringToTerraform(this._entryId),
      id: cdktf.stringToTerraform(this._id),
      requester_field_values: cdktf.listMapper(dataOktaEndUserMyRequestsRequesterFieldValuesToTerraform, true)(this._requesterFieldValues.internalValue),
      risk_assessment: dataOktaEndUserMyRequestsRiskAssessmentToTerraform(this._riskAssessment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_id: {
        value: cdktf.stringToHclTerraform(this._entryId),
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
      requester_field_values: {
        value: cdktf.listMapperHcl(dataOktaEndUserMyRequestsRequesterFieldValuesToHclTerraform, true)(this._requesterFieldValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOktaEndUserMyRequestsRequesterFieldValuesList",
      },
      risk_assessment: {
        value: dataOktaEndUserMyRequestsRiskAssessmentToHclTerraform(this._riskAssessment.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaEndUserMyRequestsRiskAssessment",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
