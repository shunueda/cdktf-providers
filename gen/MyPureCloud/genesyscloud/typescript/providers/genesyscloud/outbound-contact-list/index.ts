// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundContactListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attempt Limit for this ContactList.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#attempt_limit_id OutboundContactList#attempt_limit_id}
  */
  readonly attemptLimitId?: string;
  /**
  * Indicates if automatic time zone mapping is to be used for this ContactList. Changing the automatic_time_zone_mappings attribute will cause the outboundcontact_list object to be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#automatic_time_zone_mapping OutboundContactList#automatic_time_zone_mapping}
  */
  readonly automaticTimeZoneMapping?: boolean | cdktf.IResolvable;
  /**
  * The names of the contact data columns. Changing the column_names attribute will cause the outbound_contact_list object to be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_names OutboundContactList#column_names}
  */
  readonly columnNames: string[];
  /**
  * The path to a CSV file containing contacts to import into the contact list. When updated, existing contacts will be removed and replaced with contacts from the new file. If not specified, an empty contact list will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#contacts_filepath OutboundContactList#contacts_filepath}
  */
  readonly contactsFilepath?: string;
  /**
  * The name of the column in the CSV file that contains the contact's unique contact id. If updated, the contact list is dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#contacts_id_name OutboundContactList#contacts_id_name}
  */
  readonly contactsIdName?: string;
  /**
  * The division this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#division_id OutboundContactList#division_id}
  */
  readonly divisionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#id OutboundContactList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the contact list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#name OutboundContactList#name}
  */
  readonly name: string;
  /**
  * The values in the previewModeColumnName column that indicate a contact should always be dialed in preview mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#preview_mode_accepted_values OutboundContactList#preview_mode_accepted_values}
  */
  readonly previewModeAcceptedValues?: string[];
  /**
  * A column to check if a contact should always be dialed in preview mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#preview_mode_column_name OutboundContactList#preview_mode_column_name}
  */
  readonly previewModeColumnName?: string;
  /**
  * Indicates if leading and trailing whitespace will be trimmed when importing a contactlist CSV file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#trim_whitespace OutboundContactList#trim_whitespace}
  */
  readonly trimWhitespace?: boolean | cdktf.IResolvable;
  /**
  * The name of contact list column containing the zip code for use with automatic time zone mapping. Only allowed if 'automaticTimeZoneMapping' is set to true. Changing the zip_code_column_name attribute will cause the outboundcontact_list object to be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#zip_code_column_name OutboundContactList#zip_code_column_name}
  */
  readonly zipCodeColumnName?: string;
  /**
  * column_data_type_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_data_type_specifications OutboundContactList#column_data_type_specifications}
  */
  readonly columnDataTypeSpecifications?: OutboundContactListColumnDataTypeSpecifications[] | cdktf.IResolvable;
  /**
  * email_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#email_columns OutboundContactList#email_columns}
  */
  readonly emailColumns?: OutboundContactListEmailColumns[] | cdktf.IResolvable;
  /**
  * phone_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#phone_columns OutboundContactList#phone_columns}
  */
  readonly phoneColumns?: OutboundContactListPhoneColumns[] | cdktf.IResolvable;
}
export interface OutboundContactListColumnDataTypeSpecifications {
  /**
  * The data type of the column selected for dynamic queueing (TEXT, NUMERIC or TIMESTAMP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_data_type OutboundContactList#column_data_type}
  */
  readonly columnDataType?: string;
  /**
  * The column name of a column selected for dynamic queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_name OutboundContactList#column_name}
  */
  readonly columnName: string;
  /**
  * The maximum length of the numeric column selected for dynamic queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#max OutboundContactList#max}
  */
  readonly max?: number;
  /**
  * The maximum length of the text column selected for dynamic queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#max_length OutboundContactList#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum length of the numeric column selected for dynamic queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#min OutboundContactList#min}
  */
  readonly min?: number;
}

export function outboundContactListColumnDataTypeSpecificationsToTerraform(struct?: OutboundContactListColumnDataTypeSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_data_type: cdktf.stringToTerraform(struct!.columnDataType),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    max: cdktf.numberToTerraform(struct!.max),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function outboundContactListColumnDataTypeSpecificationsToHclTerraform(struct?: OutboundContactListColumnDataTypeSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_data_type: {
      value: cdktf.stringToHclTerraform(struct!.columnDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactListColumnDataTypeSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListColumnDataTypeSpecifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDataType = this._columnDataType;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListColumnDataTypeSpecifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnDataType = undefined;
      this._columnName = undefined;
      this._max = undefined;
      this._maxLength = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnDataType = value.columnDataType;
      this._columnName = value.columnName;
      this._max = value.max;
      this._maxLength = value.maxLength;
      this._min = value.min;
    }
  }

  // column_data_type - computed: true, optional: true, required: false
  private _columnDataType?: string; 
  public get columnDataType() {
    return this.getStringAttribute('column_data_type');
  }
  public set columnDataType(value: string) {
    this._columnDataType = value;
  }
  public resetColumnDataType() {
    this._columnDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataTypeInput() {
    return this._columnDataType;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class OutboundContactListColumnDataTypeSpecificationsList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListColumnDataTypeSpecifications[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListColumnDataTypeSpecificationsOutputReference {
    return new OutboundContactListColumnDataTypeSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundContactListEmailColumns {
  /**
  * The name of the email column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_name OutboundContactList#column_name}
  */
  readonly columnName: string;
  /**
  * A column that indicates the timezone to use for a given contact when checking contactable times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#contactable_time_column OutboundContactList#contactable_time_column}
  */
  readonly contactableTimeColumn?: string;
  /**
  * Indicates the type of the email column. For example, 'work' or 'personal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#type OutboundContactList#type}
  */
  readonly type: string;
}

export function outboundContactListEmailColumnsToTerraform(struct?: OutboundContactListEmailColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    contactable_time_column: cdktf.stringToTerraform(struct!.contactableTimeColumn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function outboundContactListEmailColumnsToHclTerraform(struct?: OutboundContactListEmailColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contactable_time_column: {
      value: cdktf.stringToHclTerraform(struct!.contactableTimeColumn),
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

export class OutboundContactListEmailColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListEmailColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._contactableTimeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactableTimeColumn = this._contactableTimeColumn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListEmailColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._contactableTimeColumn = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._contactableTimeColumn = value.contactableTimeColumn;
      this._type = value.type;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // contactable_time_column - computed: false, optional: true, required: false
  private _contactableTimeColumn?: string; 
  public get contactableTimeColumn() {
    return this.getStringAttribute('contactable_time_column');
  }
  public set contactableTimeColumn(value: string) {
    this._contactableTimeColumn = value;
  }
  public resetContactableTimeColumn() {
    this._contactableTimeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactableTimeColumnInput() {
    return this._contactableTimeColumn;
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

export class OutboundContactListEmailColumnsList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListEmailColumns[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListEmailColumnsOutputReference {
    return new OutboundContactListEmailColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundContactListPhoneColumns {
  /**
  * A column that indicates the timezone to use for a given contact when checking callable times. Not allowed if 'automaticTimeZoneMapping' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#callable_time_column OutboundContactList#callable_time_column}
  */
  readonly callableTimeColumn?: string;
  /**
  * The name of the phone column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#column_name OutboundContactList#column_name}
  */
  readonly columnName: string;
  /**
  * Indicates the type of the phone column. For example, 'cell' or 'home'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#type OutboundContactList#type}
  */
  readonly type: string;
}

export function outboundContactListPhoneColumnsToTerraform(struct?: OutboundContactListPhoneColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callable_time_column: cdktf.stringToTerraform(struct!.callableTimeColumn),
    column_name: cdktf.stringToTerraform(struct!.columnName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function outboundContactListPhoneColumnsToHclTerraform(struct?: OutboundContactListPhoneColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callable_time_column: {
      value: cdktf.stringToHclTerraform(struct!.callableTimeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
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

export class OutboundContactListPhoneColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListPhoneColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callableTimeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.callableTimeColumn = this._callableTimeColumn;
    }
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListPhoneColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callableTimeColumn = undefined;
      this._columnName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callableTimeColumn = value.callableTimeColumn;
      this._columnName = value.columnName;
      this._type = value.type;
    }
  }

  // callable_time_column - computed: false, optional: true, required: false
  private _callableTimeColumn?: string; 
  public get callableTimeColumn() {
    return this.getStringAttribute('callable_time_column');
  }
  public set callableTimeColumn(value: string) {
    this._callableTimeColumn = value;
  }
  public resetCallableTimeColumn() {
    this._callableTimeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableTimeColumnInput() {
    return this._callableTimeColumn;
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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

export class OutboundContactListPhoneColumnsList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListPhoneColumns[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListPhoneColumnsOutputReference {
    return new OutboundContactListPhoneColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list genesyscloud_outbound_contact_list}
*/
export class OutboundContactList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_contact_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundContactList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundContactList to import
  * @param importFromId The id of the existing OutboundContactList that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundContactList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_contact_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_contact_list genesyscloud_outbound_contact_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundContactListConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundContactListConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_contact_list',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attemptLimitId = config.attemptLimitId;
    this._automaticTimeZoneMapping = config.automaticTimeZoneMapping;
    this._columnNames = config.columnNames;
    this._contactsFilepath = config.contactsFilepath;
    this._contactsIdName = config.contactsIdName;
    this._divisionId = config.divisionId;
    this._id = config.id;
    this._name = config.name;
    this._previewModeAcceptedValues = config.previewModeAcceptedValues;
    this._previewModeColumnName = config.previewModeColumnName;
    this._trimWhitespace = config.trimWhitespace;
    this._zipCodeColumnName = config.zipCodeColumnName;
    this._columnDataTypeSpecifications.internalValue = config.columnDataTypeSpecifications;
    this._emailColumns.internalValue = config.emailColumns;
    this._phoneColumns.internalValue = config.phoneColumns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_limit_id - computed: false, optional: true, required: false
  private _attemptLimitId?: string; 
  public get attemptLimitId() {
    return this.getStringAttribute('attempt_limit_id');
  }
  public set attemptLimitId(value: string) {
    this._attemptLimitId = value;
  }
  public resetAttemptLimitId() {
    this._attemptLimitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptLimitIdInput() {
    return this._attemptLimitId;
  }

  // automatic_time_zone_mapping - computed: false, optional: true, required: false
  private _automaticTimeZoneMapping?: boolean | cdktf.IResolvable; 
  public get automaticTimeZoneMapping() {
    return this.getBooleanAttribute('automatic_time_zone_mapping');
  }
  public set automaticTimeZoneMapping(value: boolean | cdktf.IResolvable) {
    this._automaticTimeZoneMapping = value;
  }
  public resetAutomaticTimeZoneMapping() {
    this._automaticTimeZoneMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTimeZoneMappingInput() {
    return this._automaticTimeZoneMapping;
  }

  // column_names - computed: false, optional: false, required: true
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // contacts_file_content_hash - computed: true, optional: false, required: false
  public get contactsFileContentHash() {
    return this.getStringAttribute('contacts_file_content_hash');
  }

  // contacts_filepath - computed: false, optional: true, required: false
  private _contactsFilepath?: string; 
  public get contactsFilepath() {
    return this.getStringAttribute('contacts_filepath');
  }
  public set contactsFilepath(value: string) {
    this._contactsFilepath = value;
  }
  public resetContactsFilepath() {
    this._contactsFilepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsFilepathInput() {
    return this._contactsFilepath;
  }

  // contacts_id_name - computed: false, optional: true, required: false
  private _contactsIdName?: string; 
  public get contactsIdName() {
    return this.getStringAttribute('contacts_id_name');
  }
  public set contactsIdName(value: string) {
    this._contactsIdName = value;
  }
  public resetContactsIdName() {
    this._contactsIdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsIdNameInput() {
    return this._contactsIdName;
  }

  // contacts_record_count - computed: true, optional: false, required: false
  public get contactsRecordCount() {
    return this.getNumberAttribute('contacts_record_count');
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // preview_mode_accepted_values - computed: false, optional: true, required: false
  private _previewModeAcceptedValues?: string[]; 
  public get previewModeAcceptedValues() {
    return this.getListAttribute('preview_mode_accepted_values');
  }
  public set previewModeAcceptedValues(value: string[]) {
    this._previewModeAcceptedValues = value;
  }
  public resetPreviewModeAcceptedValues() {
    this._previewModeAcceptedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewModeAcceptedValuesInput() {
    return this._previewModeAcceptedValues;
  }

  // preview_mode_column_name - computed: false, optional: true, required: false
  private _previewModeColumnName?: string; 
  public get previewModeColumnName() {
    return this.getStringAttribute('preview_mode_column_name');
  }
  public set previewModeColumnName(value: string) {
    this._previewModeColumnName = value;
  }
  public resetPreviewModeColumnName() {
    this._previewModeColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewModeColumnNameInput() {
    return this._previewModeColumnName;
  }

  // trim_whitespace - computed: false, optional: true, required: false
  private _trimWhitespace?: boolean | cdktf.IResolvable; 
  public get trimWhitespace() {
    return this.getBooleanAttribute('trim_whitespace');
  }
  public set trimWhitespace(value: boolean | cdktf.IResolvable) {
    this._trimWhitespace = value;
  }
  public resetTrimWhitespace() {
    this._trimWhitespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimWhitespaceInput() {
    return this._trimWhitespace;
  }

  // zip_code_column_name - computed: false, optional: true, required: false
  private _zipCodeColumnName?: string; 
  public get zipCodeColumnName() {
    return this.getStringAttribute('zip_code_column_name');
  }
  public set zipCodeColumnName(value: string) {
    this._zipCodeColumnName = value;
  }
  public resetZipCodeColumnName() {
    this._zipCodeColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeColumnNameInput() {
    return this._zipCodeColumnName;
  }

  // column_data_type_specifications - computed: false, optional: true, required: false
  private _columnDataTypeSpecifications = new OutboundContactListColumnDataTypeSpecificationsList(this, "column_data_type_specifications", false);
  public get columnDataTypeSpecifications() {
    return this._columnDataTypeSpecifications;
  }
  public putColumnDataTypeSpecifications(value: OutboundContactListColumnDataTypeSpecifications[] | cdktf.IResolvable) {
    this._columnDataTypeSpecifications.internalValue = value;
  }
  public resetColumnDataTypeSpecifications() {
    this._columnDataTypeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataTypeSpecificationsInput() {
    return this._columnDataTypeSpecifications.internalValue;
  }

  // email_columns - computed: false, optional: true, required: false
  private _emailColumns = new OutboundContactListEmailColumnsList(this, "email_columns", true);
  public get emailColumns() {
    return this._emailColumns;
  }
  public putEmailColumns(value: OutboundContactListEmailColumns[] | cdktf.IResolvable) {
    this._emailColumns.internalValue = value;
  }
  public resetEmailColumns() {
    this._emailColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailColumnsInput() {
    return this._emailColumns.internalValue;
  }

  // phone_columns - computed: false, optional: true, required: false
  private _phoneColumns = new OutboundContactListPhoneColumnsList(this, "phone_columns", true);
  public get phoneColumns() {
    return this._phoneColumns;
  }
  public putPhoneColumns(value: OutboundContactListPhoneColumns[] | cdktf.IResolvable) {
    this._phoneColumns.internalValue = value;
  }
  public resetPhoneColumns() {
    this._phoneColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneColumnsInput() {
    return this._phoneColumns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_limit_id: cdktf.stringToTerraform(this._attemptLimitId),
      automatic_time_zone_mapping: cdktf.booleanToTerraform(this._automaticTimeZoneMapping),
      column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnNames),
      contacts_filepath: cdktf.stringToTerraform(this._contactsFilepath),
      contacts_id_name: cdktf.stringToTerraform(this._contactsIdName),
      division_id: cdktf.stringToTerraform(this._divisionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      preview_mode_accepted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._previewModeAcceptedValues),
      preview_mode_column_name: cdktf.stringToTerraform(this._previewModeColumnName),
      trim_whitespace: cdktf.booleanToTerraform(this._trimWhitespace),
      zip_code_column_name: cdktf.stringToTerraform(this._zipCodeColumnName),
      column_data_type_specifications: cdktf.listMapper(outboundContactListColumnDataTypeSpecificationsToTerraform, true)(this._columnDataTypeSpecifications.internalValue),
      email_columns: cdktf.listMapper(outboundContactListEmailColumnsToTerraform, true)(this._emailColumns.internalValue),
      phone_columns: cdktf.listMapper(outboundContactListPhoneColumnsToTerraform, true)(this._phoneColumns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attempt_limit_id: {
        value: cdktf.stringToHclTerraform(this._attemptLimitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_time_zone_mapping: {
        value: cdktf.booleanToHclTerraform(this._automaticTimeZoneMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      column_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contacts_filepath: {
        value: cdktf.stringToHclTerraform(this._contactsFilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contacts_id_name: {
        value: cdktf.stringToHclTerraform(this._contactsIdName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
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
      preview_mode_accepted_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._previewModeAcceptedValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preview_mode_column_name: {
        value: cdktf.stringToHclTerraform(this._previewModeColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim_whitespace: {
        value: cdktf.booleanToHclTerraform(this._trimWhitespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zip_code_column_name: {
        value: cdktf.stringToHclTerraform(this._zipCodeColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_data_type_specifications: {
        value: cdktf.listMapperHcl(outboundContactListColumnDataTypeSpecificationsToHclTerraform, true)(this._columnDataTypeSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundContactListColumnDataTypeSpecificationsList",
      },
      email_columns: {
        value: cdktf.listMapperHcl(outboundContactListEmailColumnsToHclTerraform, true)(this._emailColumns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundContactListEmailColumnsList",
      },
      phone_columns: {
        value: cdktf.listMapperHcl(outboundContactListPhoneColumnsToHclTerraform, true)(this._phoneColumns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundContactListPhoneColumnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
