// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * This property informs the check what kind of comparison we are performing. Only certain condition types are valid for time series alerts. Valid values are: "EQUAL_TO", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "INCREASES_BY", "DECREASES_BY", "CHANGES_BY".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#comparison_type Alert#comparison_type}
  */
  readonly comparisonType: string;
  /**
  * Vixie-Style crontab specification when to run. At minumum, it has to be longer than 15 minute intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#cron Alert#cron}
  */
  readonly cron: string;
  /**
  * An optional, user-defined title for the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#custom_title Alert#custom_title}
  */
  readonly customTitle?: string;
  /**
  * ID of the dashboard element associated with the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#dashboard_element_id Alert#dashboard_element_id}
  */
  readonly dashboardElementId?: string;
  /**
  * An optional description for the alert. This supplements the title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#description Alert#description}
  */
  readonly description?: string;
  /**
  * Whether or not the alert is followable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#followable Alert#followable}
  */
  readonly followable?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the alert is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#is_disabled Alert#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the alert is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#is_public Alert#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * User id of alert owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#owner_id Alert#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Value of the alert threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#treshold Alert#treshold}
  */
  readonly treshold: number;
  /**
  * applied_dashboard_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#applied_dashboard_filters Alert#applied_dashboard_filters}
  */
  readonly appliedDashboardFilters?: AlertAppliedDashboardFilters[] | cdktf.IResolvable;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#destinations Alert#destinations}
  */
  readonly destinations: AlertDestinations[] | cdktf.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#field Alert#field}
  */
  readonly field: AlertField[] | cdktf.IResolvable;
}
export interface AlertAppliedDashboardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#filter_description Alert#filter_description}
  */
  readonly filterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#filter_title Alert#filter_title}
  */
  readonly filterTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#filter_value Alert#filter_value}
  */
  readonly filterValue: string;
}

export function alertAppliedDashboardFiltersToTerraform(struct?: AlertAppliedDashboardFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter_description: cdktf.stringToTerraform(struct!.filterDescription),
    filter_title: cdktf.stringToTerraform(struct!.filterTitle),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function alertAppliedDashboardFiltersToHclTerraform(struct?: AlertAppliedDashboardFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_description: {
      value: cdktf.stringToHclTerraform(struct!.filterDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_title: {
      value: cdktf.stringToHclTerraform(struct!.filterTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertAppliedDashboardFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertAppliedDashboardFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filterDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDescription = this._filterDescription;
    }
    if (this._filterTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTitle = this._filterTitle;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertAppliedDashboardFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filterDescription = undefined;
      this._filterTitle = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filterDescription = value.filterDescription;
      this._filterTitle = value.filterTitle;
      this._filterValue = value.filterValue;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter_description - computed: false, optional: true, required: false
  private _filterDescription?: string; 
  public get filterDescription() {
    return this.getStringAttribute('filter_description');
  }
  public set filterDescription(value: string) {
    this._filterDescription = value;
  }
  public resetFilterDescription() {
    this._filterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDescriptionInput() {
    return this._filterDescription;
  }

  // filter_title - computed: false, optional: false, required: true
  private _filterTitle?: string; 
  public get filterTitle() {
    return this.getStringAttribute('filter_title');
  }
  public set filterTitle(value: string) {
    this._filterTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTitleInput() {
    return this._filterTitle;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class AlertAppliedDashboardFiltersList extends cdktf.ComplexList {
  public internalValue? : AlertAppliedDashboardFilters[] | cdktf.IResolvable

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
  public get(index: number): AlertAppliedDashboardFiltersOutputReference {
    return new AlertAppliedDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertDestinations {
  /**
  * Action hub form params json for the 'action_hub' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#action_hub_form_params_json Alert#action_hub_form_params_json}
  */
  readonly actionHubFormParamsJson?: string;
  /**
  * Action hub integration id for the 'action_hub' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#action_hub_integration_id Alert#action_hub_integration_id}
  */
  readonly actionHubIntegrationId?: string;
  /**
  * Type of destination that the alert will be sent to Valid values are: "EMAIL", "ACTION_HUB".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#destination_type Alert#destination_type}
  */
  readonly destinationType: string;
  /**
  * Email address for the 'email' type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#email_address Alert#email_address}
  */
  readonly emailAddress?: string;
}

export function alertDestinationsToTerraform(struct?: AlertDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_hub_form_params_json: cdktf.stringToTerraform(struct!.actionHubFormParamsJson),
    action_hub_integration_id: cdktf.stringToTerraform(struct!.actionHubIntegrationId),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
  }
}


export function alertDestinationsToHclTerraform(struct?: AlertDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_hub_form_params_json: {
      value: cdktf.stringToHclTerraform(struct!.actionHubFormParamsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_hub_integration_id: {
      value: cdktf.stringToHclTerraform(struct!.actionHubIntegrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionHubFormParamsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionHubFormParamsJson = this._actionHubFormParamsJson;
    }
    if (this._actionHubIntegrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionHubIntegrationId = this._actionHubIntegrationId;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionHubFormParamsJson = undefined;
      this._actionHubIntegrationId = undefined;
      this._destinationType = undefined;
      this._emailAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionHubFormParamsJson = value.actionHubFormParamsJson;
      this._actionHubIntegrationId = value.actionHubIntegrationId;
      this._destinationType = value.destinationType;
      this._emailAddress = value.emailAddress;
    }
  }

  // action_hub_form_params_json - computed: false, optional: true, required: false
  private _actionHubFormParamsJson?: string; 
  public get actionHubFormParamsJson() {
    return this.getStringAttribute('action_hub_form_params_json');
  }
  public set actionHubFormParamsJson(value: string) {
    this._actionHubFormParamsJson = value;
  }
  public resetActionHubFormParamsJson() {
    this._actionHubFormParamsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionHubFormParamsJsonInput() {
    return this._actionHubFormParamsJson;
  }

  // action_hub_integration_id - computed: false, optional: true, required: false
  private _actionHubIntegrationId?: string; 
  public get actionHubIntegrationId() {
    return this.getStringAttribute('action_hub_integration_id');
  }
  public set actionHubIntegrationId(value: string) {
    this._actionHubIntegrationId = value;
  }
  public resetActionHubIntegrationId() {
    this._actionHubIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionHubIntegrationIdInput() {
    return this._actionHubIntegrationId;
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }
}

export class AlertDestinationsList extends cdktf.ComplexList {
  public internalValue? : AlertDestinations[] | cdktf.IResolvable

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
  public get(index: number): AlertDestinationsOutputReference {
    return new AlertDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertFieldFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#field_name Alert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#field_value Alert#field_value}
  */
  readonly fieldValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#filter_value Alert#filter_value}
  */
  readonly filterValue?: string;
}

export function alertFieldFilterToTerraform(struct?: AlertFieldFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function alertFieldFilterToHclTerraform(struct?: AlertFieldFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertFieldFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertFieldFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertFieldFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldValue = undefined;
      this._filterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldValue = value.fieldValue;
      this._filterValue = value.filterValue;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_value - computed: false, optional: false, required: true
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // filter_value - computed: false, optional: true, required: false
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  public resetFilterValue() {
    this._filterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}

export class AlertFieldFilterList extends cdktf.ComplexList {
  public internalValue? : AlertFieldFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertFieldFilterOutputReference {
    return new AlertFieldFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertField {
  /**
  * Field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * Field's title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#title Alert#title}
  */
  readonly title?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#filter Alert#filter}
  */
  readonly filter?: AlertFieldFilter[] | cdktf.IResolvable;
}

export function alertFieldToTerraform(struct?: AlertField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    filter: cdktf.listMapper(alertFieldFilterToTerraform, true)(struct!.filter),
  }
}


export function alertFieldToHclTerraform(struct?: AlertField | cdktf.IResolvable): any {
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(alertFieldFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "AlertFieldFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._title = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._title = value.title;
      this._filter.internalValue = value.filter;
    }
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new AlertFieldFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AlertFieldFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class AlertFieldList extends cdktf.ComplexList {
  public internalValue? : AlertField[] | cdktf.IResolvable

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
  public get(index: number): AlertFieldOutputReference {
    return new AlertFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert looker_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/alert looker_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_alert',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comparisonType = config.comparisonType;
    this._cron = config.cron;
    this._customTitle = config.customTitle;
    this._dashboardElementId = config.dashboardElementId;
    this._description = config.description;
    this._followable = config.followable;
    this._isDisabled = config.isDisabled;
    this._isPublic = config.isPublic;
    this._ownerId = config.ownerId;
    this._treshold = config.treshold;
    this._appliedDashboardFilters.internalValue = config.appliedDashboardFilters;
    this._destinations.internalValue = config.destinations;
    this._field.internalValue = config.field;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparison_type - computed: false, optional: false, required: true
  private _comparisonType?: string; 
  public get comparisonType() {
    return this.getStringAttribute('comparison_type');
  }
  public set comparisonType(value: string) {
    this._comparisonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonTypeInput() {
    return this._comparisonType;
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // custom_title - computed: false, optional: true, required: false
  private _customTitle?: string; 
  public get customTitle() {
    return this.getStringAttribute('custom_title');
  }
  public set customTitle(value: string) {
    this._customTitle = value;
  }
  public resetCustomTitle() {
    this._customTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTitleInput() {
    return this._customTitle;
  }

  // dashboard_element_id - computed: false, optional: true, required: false
  private _dashboardElementId?: string; 
  public get dashboardElementId() {
    return this.getStringAttribute('dashboard_element_id');
  }
  public set dashboardElementId(value: string) {
    this._dashboardElementId = value;
  }
  public resetDashboardElementId() {
    this._dashboardElementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardElementIdInput() {
    return this._dashboardElementId;
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

  // followable - computed: false, optional: true, required: false
  private _followable?: boolean | cdktf.IResolvable; 
  public get followable() {
    return this.getBooleanAttribute('followable');
  }
  public set followable(value: boolean | cdktf.IResolvable) {
    this._followable = value;
  }
  public resetFollowable() {
    this._followable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followableInput() {
    return this._followable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // owner_display_name - computed: true, optional: false, required: false
  public get ownerDisplayName() {
    return this.getStringAttribute('owner_display_name');
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // treshold - computed: false, optional: false, required: true
  private _treshold?: number; 
  public get treshold() {
    return this.getNumberAttribute('treshold');
  }
  public set treshold(value: number) {
    this._treshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tresholdInput() {
    return this._treshold;
  }

  // applied_dashboard_filters - computed: false, optional: true, required: false
  private _appliedDashboardFilters = new AlertAppliedDashboardFiltersList(this, "applied_dashboard_filters", true);
  public get appliedDashboardFilters() {
    return this._appliedDashboardFilters;
  }
  public putAppliedDashboardFilters(value: AlertAppliedDashboardFilters[] | cdktf.IResolvable) {
    this._appliedDashboardFilters.internalValue = value;
  }
  public resetAppliedDashboardFilters() {
    this._appliedDashboardFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedDashboardFiltersInput() {
    return this._appliedDashboardFilters.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new AlertDestinationsList(this, "destinations", true);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: AlertDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field = new AlertFieldList(this, "field", true);
  public get field() {
    return this._field;
  }
  public putField(value: AlertField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comparison_type: cdktf.stringToTerraform(this._comparisonType),
      cron: cdktf.stringToTerraform(this._cron),
      custom_title: cdktf.stringToTerraform(this._customTitle),
      dashboard_element_id: cdktf.stringToTerraform(this._dashboardElementId),
      description: cdktf.stringToTerraform(this._description),
      followable: cdktf.booleanToTerraform(this._followable),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      treshold: cdktf.numberToTerraform(this._treshold),
      applied_dashboard_filters: cdktf.listMapper(alertAppliedDashboardFiltersToTerraform, true)(this._appliedDashboardFilters.internalValue),
      destinations: cdktf.listMapper(alertDestinationsToTerraform, true)(this._destinations.internalValue),
      field: cdktf.listMapper(alertFieldToTerraform, true)(this._field.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comparison_type: {
        value: cdktf.stringToHclTerraform(this._comparisonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_title: {
        value: cdktf.stringToHclTerraform(this._customTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_element_id: {
        value: cdktf.stringToHclTerraform(this._dashboardElementId),
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
      followable: {
        value: cdktf.booleanToHclTerraform(this._followable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      treshold: {
        value: cdktf.numberToHclTerraform(this._treshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      applied_dashboard_filters: {
        value: cdktf.listMapperHcl(alertAppliedDashboardFiltersToHclTerraform, true)(this._appliedDashboardFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertAppliedDashboardFiltersList",
      },
      destinations: {
        value: cdktf.listMapperHcl(alertDestinationsToHclTerraform, true)(this._destinations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertDestinationsList",
      },
      field: {
        value: cdktf.listMapperHcl(alertFieldToHclTerraform, true)(this._field.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
