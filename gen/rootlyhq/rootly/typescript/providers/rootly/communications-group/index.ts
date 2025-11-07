// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommunicationsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The communication type ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#communication_type_id CommunicationsGroup#communication_type_id}
  */
  readonly communicationTypeId: string;
  /**
  * Condition type. Value must be one of `any`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#condition_type CommunicationsGroup#condition_type}
  */
  readonly conditionType?: string;
  /**
  * The description of the communications group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#description CommunicationsGroup#description}
  */
  readonly description?: string;
  /**
  * Email channel enabled. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#email_channel CommunicationsGroup#email_channel}
  */
  readonly emailChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#id CommunicationsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the group is private. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#is_private CommunicationsGroup#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * The name of the communications group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#name CommunicationsGroup#name}
  */
  readonly name: string;
  /**
  * The slug of the communications group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#slug CommunicationsGroup#slug}
  */
  readonly slug?: string;
  /**
  * SMS channel enabled. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#sms_channel CommunicationsGroup#sms_channel}
  */
  readonly smsChannel?: boolean | cdktf.IResolvable;
  /**
  * communication_external_group_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#communication_external_group_members CommunicationsGroup#communication_external_group_members}
  */
  readonly communicationExternalGroupMembers?: CommunicationsGroupCommunicationExternalGroupMembers[] | cdktf.IResolvable;
  /**
  * communication_group_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#communication_group_conditions CommunicationsGroup#communication_group_conditions}
  */
  readonly communicationGroupConditions?: CommunicationsGroupCommunicationGroupConditions[] | cdktf.IResolvable;
  /**
  * communication_group_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#communication_group_members CommunicationsGroup#communication_group_members}
  */
  readonly communicationGroupMembers?: CommunicationsGroupCommunicationGroupMembers[] | cdktf.IResolvable;
}
export interface CommunicationsGroupCommunicationExternalGroupMembers {
  /**
  * Email of the external member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#email CommunicationsGroup#email}
  */
  readonly email?: string;
  /**
  * ID of the external group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#id CommunicationsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the external member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#name CommunicationsGroup#name}
  */
  readonly name?: string;
  /**
  * Phone number of the external member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#phone_number CommunicationsGroup#phone_number}
  */
  readonly phoneNumber?: string;
}

export function communicationsGroupCommunicationExternalGroupMembersToTerraform(struct?: CommunicationsGroupCommunicationExternalGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function communicationsGroupCommunicationExternalGroupMembersToHclTerraform(struct?: CommunicationsGroupCommunicationExternalGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommunicationsGroupCommunicationExternalGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommunicationsGroupCommunicationExternalGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommunicationsGroupCommunicationExternalGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
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

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class CommunicationsGroupCommunicationExternalGroupMembersList extends cdktf.ComplexList {
  public internalValue? : CommunicationsGroupCommunicationExternalGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): CommunicationsGroupCommunicationExternalGroupMembersOutputReference {
    return new CommunicationsGroupCommunicationExternalGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommunicationsGroupCommunicationGroupConditionsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#id CommunicationsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#name CommunicationsGroup#name}
  */
  readonly name?: string;
}

export function communicationsGroupCommunicationGroupConditionsPropertiesToTerraform(struct?: CommunicationsGroupCommunicationGroupConditionsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function communicationsGroupCommunicationGroupConditionsPropertiesToHclTerraform(struct?: CommunicationsGroupCommunicationGroupConditionsProperties | cdktf.IResolvable): any {
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

export class CommunicationsGroupCommunicationGroupConditionsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommunicationsGroupCommunicationGroupConditionsProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CommunicationsGroupCommunicationGroupConditionsProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class CommunicationsGroupCommunicationGroupConditionsPropertiesList extends cdktf.ComplexList {
  public internalValue? : CommunicationsGroupCommunicationGroupConditionsProperties[] | cdktf.IResolvable

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
  public get(index: number): CommunicationsGroupCommunicationGroupConditionsPropertiesOutputReference {
    return new CommunicationsGroupCommunicationGroupConditionsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommunicationsGroupCommunicationGroupConditions {
  /**
  * Condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#condition CommunicationsGroup#condition}
  */
  readonly condition?: string;
  /**
  * ID of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#id CommunicationsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Property type. Value must be one of `service`, `severity`, `functionality`, `group`, `incident_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#property_type CommunicationsGroup#property_type}
  */
  readonly propertyType?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#properties CommunicationsGroup#properties}
  */
  readonly properties?: CommunicationsGroupCommunicationGroupConditionsProperties[] | cdktf.IResolvable;
}

export function communicationsGroupCommunicationGroupConditionsToTerraform(struct?: CommunicationsGroupCommunicationGroupConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    id: cdktf.stringToTerraform(struct!.id),
    property_type: cdktf.stringToTerraform(struct!.propertyType),
    properties: cdktf.listMapper(communicationsGroupCommunicationGroupConditionsPropertiesToTerraform, true)(struct!.properties),
  }
}


export function communicationsGroupCommunicationGroupConditionsToHclTerraform(struct?: CommunicationsGroupCommunicationGroupConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    properties: {
      value: cdktf.listMapperHcl(communicationsGroupCommunicationGroupConditionsPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "CommunicationsGroupCommunicationGroupConditionsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommunicationsGroupCommunicationGroupConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommunicationsGroupCommunicationGroupConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommunicationsGroupCommunicationGroupConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._id = undefined;
      this._propertyType = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._id = value.id;
      this._propertyType = value.propertyType;
      this._properties.internalValue = value.properties;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new CommunicationsGroupCommunicationGroupConditionsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: CommunicationsGroupCommunicationGroupConditionsProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class CommunicationsGroupCommunicationGroupConditionsList extends cdktf.ComplexList {
  public internalValue? : CommunicationsGroupCommunicationGroupConditions[] | cdktf.IResolvable

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
  public get(index: number): CommunicationsGroupCommunicationGroupConditionsOutputReference {
    return new CommunicationsGroupCommunicationGroupConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommunicationsGroupCommunicationGroupMembers {
  /**
  * Email of the group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#email CommunicationsGroup#email}
  */
  readonly email?: string;
  /**
  * ID of the group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#id CommunicationsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#name CommunicationsGroup#name}
  */
  readonly name?: string;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#user_id CommunicationsGroup#user_id}
  */
  readonly userId?: number;
}

export function communicationsGroupCommunicationGroupMembersToTerraform(struct?: CommunicationsGroupCommunicationGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function communicationsGroupCommunicationGroupMembersToHclTerraform(struct?: CommunicationsGroupCommunicationGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommunicationsGroupCommunicationGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommunicationsGroupCommunicationGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommunicationsGroupCommunicationGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
      this._userId = value.userId;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
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

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class CommunicationsGroupCommunicationGroupMembersList extends cdktf.ComplexList {
  public internalValue? : CommunicationsGroupCommunicationGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): CommunicationsGroupCommunicationGroupMembersOutputReference {
    return new CommunicationsGroupCommunicationGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group rootly_communications_group}
*/
export class CommunicationsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_communications_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommunicationsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommunicationsGroup to import
  * @param importFromId The id of the existing CommunicationsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommunicationsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_communications_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/communications_group rootly_communications_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommunicationsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CommunicationsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_communications_group',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communicationTypeId = config.communicationTypeId;
    this._conditionType = config.conditionType;
    this._description = config.description;
    this._emailChannel = config.emailChannel;
    this._id = config.id;
    this._isPrivate = config.isPrivate;
    this._name = config.name;
    this._slug = config.slug;
    this._smsChannel = config.smsChannel;
    this._communicationExternalGroupMembers.internalValue = config.communicationExternalGroupMembers;
    this._communicationGroupConditions.internalValue = config.communicationGroupConditions;
    this._communicationGroupMembers.internalValue = config.communicationGroupMembers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communication_type_id - computed: false, optional: false, required: true
  private _communicationTypeId?: string; 
  public get communicationTypeId() {
    return this.getStringAttribute('communication_type_id');
  }
  public set communicationTypeId(value: string) {
    this._communicationTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTypeIdInput() {
    return this._communicationTypeId;
  }

  // condition_type - computed: false, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // description - computed: true, optional: true, required: false
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

  // email_channel - computed: true, optional: true, required: false
  private _emailChannel?: boolean | cdktf.IResolvable; 
  public get emailChannel() {
    return this.getBooleanAttribute('email_channel');
  }
  public set emailChannel(value: boolean | cdktf.IResolvable) {
    this._emailChannel = value;
  }
  public resetEmailChannel() {
    this._emailChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailChannelInput() {
    return this._emailChannel;
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

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sms_channel - computed: true, optional: true, required: false
  private _smsChannel?: boolean | cdktf.IResolvable; 
  public get smsChannel() {
    return this.getBooleanAttribute('sms_channel');
  }
  public set smsChannel(value: boolean | cdktf.IResolvable) {
    this._smsChannel = value;
  }
  public resetSmsChannel() {
    this._smsChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsChannelInput() {
    return this._smsChannel;
  }

  // communication_external_group_members - computed: false, optional: true, required: false
  private _communicationExternalGroupMembers = new CommunicationsGroupCommunicationExternalGroupMembersList(this, "communication_external_group_members", false);
  public get communicationExternalGroupMembers() {
    return this._communicationExternalGroupMembers;
  }
  public putCommunicationExternalGroupMembers(value: CommunicationsGroupCommunicationExternalGroupMembers[] | cdktf.IResolvable) {
    this._communicationExternalGroupMembers.internalValue = value;
  }
  public resetCommunicationExternalGroupMembers() {
    this._communicationExternalGroupMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationExternalGroupMembersInput() {
    return this._communicationExternalGroupMembers.internalValue;
  }

  // communication_group_conditions - computed: false, optional: true, required: false
  private _communicationGroupConditions = new CommunicationsGroupCommunicationGroupConditionsList(this, "communication_group_conditions", false);
  public get communicationGroupConditions() {
    return this._communicationGroupConditions;
  }
  public putCommunicationGroupConditions(value: CommunicationsGroupCommunicationGroupConditions[] | cdktf.IResolvable) {
    this._communicationGroupConditions.internalValue = value;
  }
  public resetCommunicationGroupConditions() {
    this._communicationGroupConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationGroupConditionsInput() {
    return this._communicationGroupConditions.internalValue;
  }

  // communication_group_members - computed: false, optional: true, required: false
  private _communicationGroupMembers = new CommunicationsGroupCommunicationGroupMembersList(this, "communication_group_members", false);
  public get communicationGroupMembers() {
    return this._communicationGroupMembers;
  }
  public putCommunicationGroupMembers(value: CommunicationsGroupCommunicationGroupMembers[] | cdktf.IResolvable) {
    this._communicationGroupMembers.internalValue = value;
  }
  public resetCommunicationGroupMembers() {
    this._communicationGroupMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationGroupMembersInput() {
    return this._communicationGroupMembers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_type_id: cdktf.stringToTerraform(this._communicationTypeId),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      description: cdktf.stringToTerraform(this._description),
      email_channel: cdktf.booleanToTerraform(this._emailChannel),
      id: cdktf.stringToTerraform(this._id),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      sms_channel: cdktf.booleanToTerraform(this._smsChannel),
      communication_external_group_members: cdktf.listMapper(communicationsGroupCommunicationExternalGroupMembersToTerraform, true)(this._communicationExternalGroupMembers.internalValue),
      communication_group_conditions: cdktf.listMapper(communicationsGroupCommunicationGroupConditionsToTerraform, true)(this._communicationGroupConditions.internalValue),
      communication_group_members: cdktf.listMapper(communicationsGroupCommunicationGroupMembersToTerraform, true)(this._communicationGroupMembers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_type_id: {
        value: cdktf.stringToHclTerraform(this._communicationTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
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
      email_channel: {
        value: cdktf.booleanToHclTerraform(this._emailChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_channel: {
        value: cdktf.booleanToHclTerraform(this._smsChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      communication_external_group_members: {
        value: cdktf.listMapperHcl(communicationsGroupCommunicationExternalGroupMembersToHclTerraform, true)(this._communicationExternalGroupMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommunicationsGroupCommunicationExternalGroupMembersList",
      },
      communication_group_conditions: {
        value: cdktf.listMapperHcl(communicationsGroupCommunicationGroupConditionsToHclTerraform, true)(this._communicationGroupConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommunicationsGroupCommunicationGroupConditionsList",
      },
      communication_group_members: {
        value: cdktf.listMapperHcl(communicationsGroupCommunicationGroupMembersToHclTerraform, true)(this._communicationGroupMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommunicationsGroupCommunicationGroupMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
