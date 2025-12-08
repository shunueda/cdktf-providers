// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#authorized_writer_teams DashboardGroup#authorized_writer_teams}
  */
  readonly authorizedWriterTeams?: string[];
  /**
  * User IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#authorized_writer_users DashboardGroup#authorized_writer_users}
  */
  readonly authorizedWriterUsers?: string[];
  /**
  * Description of the dashboard group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#description DashboardGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#id DashboardGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the dashboard group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#name DashboardGroup#name}
  */
  readonly name: string;
  /**
  * Team IDs to associate the dashboard group to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#teams DashboardGroup#teams}
  */
  readonly teams?: string[];
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#dashboard DashboardGroup#dashboard}
  */
  readonly dashboard?: DashboardGroupDashboard[] | cdktf.IResolvable;
  /**
  * import_qualifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#import_qualifier DashboardGroup#import_qualifier}
  */
  readonly importQualifier?: DashboardGroupImportQualifier[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#permissions DashboardGroup#permissions}
  */
  readonly permissions?: DashboardGroupPermissions[] | cdktf.IResolvable;
}
export interface DashboardGroupDashboardFilterOverride {
  /**
  * (false by default) Whether this filter should be a "not" filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#negated DashboardGroup#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#property DashboardGroup#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#values DashboardGroup#values}
  */
  readonly values: string[];
}

export function dashboardGroupDashboardFilterOverrideToTerraform(struct?: DashboardGroupDashboardFilterOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negated: cdktf.booleanToTerraform(struct!.negated),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardGroupDashboardFilterOverrideToHclTerraform(struct?: DashboardGroupDashboardFilterOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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

export class DashboardGroupDashboardFilterOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupDashboardFilterOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupDashboardFilterOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negated = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negated = value.negated;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // negated - computed: false, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
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

export class DashboardGroupDashboardFilterOverrideList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupDashboardFilterOverride[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupDashboardFilterOverrideOutputReference {
    return new DashboardGroupDashboardFilterOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupDashboardVariableOverride {
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#property DashboardGroup#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#values DashboardGroup#values}
  */
  readonly values?: string[];
  /**
  * A list of strings of suggested values for this variable; these suggestions will receive priority when values are autosuggested for this variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#values_suggested DashboardGroup#values_suggested}
  */
  readonly valuesSuggested?: string[];
}

export function dashboardGroupDashboardVariableOverrideToTerraform(struct?: DashboardGroupDashboardVariableOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    values_suggested: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesSuggested),
  }
}


export function dashboardGroupDashboardVariableOverrideToHclTerraform(struct?: DashboardGroupDashboardVariableOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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
    values_suggested: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesSuggested),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupDashboardVariableOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupDashboardVariableOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesSuggested !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesSuggested = this._valuesSuggested;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupDashboardVariableOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._property = undefined;
      this._values = undefined;
      this._valuesSuggested = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._property = value.property;
      this._values = value.values;
      this._valuesSuggested = value.valuesSuggested;
    }
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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

  // values_suggested - computed: false, optional: true, required: false
  private _valuesSuggested?: string[]; 
  public get valuesSuggested() {
    return cdktf.Fn.tolist(this.getListAttribute('values_suggested'));
  }
  public set valuesSuggested(value: string[]) {
    this._valuesSuggested = value;
  }
  public resetValuesSuggested() {
    this._valuesSuggested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesSuggestedInput() {
    return this._valuesSuggested;
  }
}

export class DashboardGroupDashboardVariableOverrideList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupDashboardVariableOverride[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupDashboardVariableOverrideOutputReference {
    return new DashboardGroupDashboardVariableOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupDashboard {
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#dashboard_id DashboardGroup#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * String that provides a description override for a mirrored dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#description_override DashboardGroup#description_override}
  */
  readonly descriptionOverride?: string;
  /**
  * String that provides a name override for a mirrored dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#name_override DashboardGroup#name_override}
  */
  readonly nameOverride?: string;
  /**
  * filter_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#filter_override DashboardGroup#filter_override}
  */
  readonly filterOverride?: DashboardGroupDashboardFilterOverride[] | cdktf.IResolvable;
  /**
  * variable_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#variable_override DashboardGroup#variable_override}
  */
  readonly variableOverride?: DashboardGroupDashboardVariableOverride[] | cdktf.IResolvable;
}

export function dashboardGroupDashboardToTerraform(struct?: DashboardGroupDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    description_override: cdktf.stringToTerraform(struct!.descriptionOverride),
    name_override: cdktf.stringToTerraform(struct!.nameOverride),
    filter_override: cdktf.listMapper(dashboardGroupDashboardFilterOverrideToTerraform, true)(struct!.filterOverride),
    variable_override: cdktf.listMapper(dashboardGroupDashboardVariableOverrideToTerraform, true)(struct!.variableOverride),
  }
}


export function dashboardGroupDashboardToHclTerraform(struct?: DashboardGroupDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_override: {
      value: cdktf.stringToHclTerraform(struct!.descriptionOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_override: {
      value: cdktf.stringToHclTerraform(struct!.nameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_override: {
      value: cdktf.listMapperHcl(dashboardGroupDashboardFilterOverrideToHclTerraform, true)(struct!.filterOverride),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupDashboardFilterOverrideList",
    },
    variable_override: {
      value: cdktf.listMapperHcl(dashboardGroupDashboardVariableOverrideToHclTerraform, true)(struct!.variableOverride),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupDashboardVariableOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._descriptionOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionOverride = this._descriptionOverride;
    }
    if (this._nameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOverride = this._nameOverride;
    }
    if (this._filterOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOverride = this._filterOverride?.internalValue;
    }
    if (this._variableOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableOverride = this._variableOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardId = undefined;
      this._descriptionOverride = undefined;
      this._nameOverride = undefined;
      this._filterOverride.internalValue = undefined;
      this._variableOverride.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardId = value.dashboardId;
      this._descriptionOverride = value.descriptionOverride;
      this._nameOverride = value.nameOverride;
      this._filterOverride.internalValue = value.filterOverride;
      this._variableOverride.internalValue = value.variableOverride;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // description_override - computed: false, optional: true, required: false
  private _descriptionOverride?: string; 
  public get descriptionOverride() {
    return this.getStringAttribute('description_override');
  }
  public set descriptionOverride(value: string) {
    this._descriptionOverride = value;
  }
  public resetDescriptionOverride() {
    this._descriptionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionOverrideInput() {
    return this._descriptionOverride;
  }

  // name_override - computed: false, optional: true, required: false
  private _nameOverride?: string; 
  public get nameOverride() {
    return this.getStringAttribute('name_override');
  }
  public set nameOverride(value: string) {
    this._nameOverride = value;
  }
  public resetNameOverride() {
    this._nameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOverrideInput() {
    return this._nameOverride;
  }

  // filter_override - computed: false, optional: true, required: false
  private _filterOverride = new DashboardGroupDashboardFilterOverrideList(this, "filter_override", true);
  public get filterOverride() {
    return this._filterOverride;
  }
  public putFilterOverride(value: DashboardGroupDashboardFilterOverride[] | cdktf.IResolvable) {
    this._filterOverride.internalValue = value;
  }
  public resetFilterOverride() {
    this._filterOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOverrideInput() {
    return this._filterOverride.internalValue;
  }

  // variable_override - computed: false, optional: true, required: false
  private _variableOverride = new DashboardGroupDashboardVariableOverrideList(this, "variable_override", true);
  public get variableOverride() {
    return this._variableOverride;
  }
  public putVariableOverride(value: DashboardGroupDashboardVariableOverride[] | cdktf.IResolvable) {
    this._variableOverride.internalValue = value;
  }
  public resetVariableOverride() {
    this._variableOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableOverrideInput() {
    return this._variableOverride.internalValue;
  }
}

export class DashboardGroupDashboardList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupDashboard[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupDashboardOutputReference {
    return new DashboardGroupDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupImportQualifierFilters {
  /**
  * (false by default) Whether this filter should be a "not" filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#negated DashboardGroup#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#property DashboardGroup#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#values DashboardGroup#values}
  */
  readonly values: string[];
}

export function dashboardGroupImportQualifierFiltersToTerraform(struct?: DashboardGroupImportQualifierFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negated: cdktf.booleanToTerraform(struct!.negated),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardGroupImportQualifierFiltersToHclTerraform(struct?: DashboardGroupImportQualifierFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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

export class DashboardGroupImportQualifierFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupImportQualifierFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupImportQualifierFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negated = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negated = value.negated;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // negated - computed: false, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
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

export class DashboardGroupImportQualifierFiltersList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupImportQualifierFilters[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupImportQualifierFiltersOutputReference {
    return new DashboardGroupImportQualifierFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupImportQualifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#metric DashboardGroup#metric}
  */
  readonly metric?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#filters DashboardGroup#filters}
  */
  readonly filters?: DashboardGroupImportQualifierFilters[] | cdktf.IResolvable;
}

export function dashboardGroupImportQualifierToTerraform(struct?: DashboardGroupImportQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    filters: cdktf.listMapper(dashboardGroupImportQualifierFiltersToTerraform, true)(struct!.filters),
  }
}


export function dashboardGroupImportQualifierToHclTerraform(struct?: DashboardGroupImportQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(dashboardGroupImportQualifierFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupImportQualifierFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupImportQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupImportQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupImportQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._filters.internalValue = value.filters;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardGroupImportQualifierFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardGroupImportQualifierFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class DashboardGroupImportQualifierList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupImportQualifier[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupImportQualifierOutputReference {
    return new DashboardGroupImportQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupPermissions {
  /**
  * Actions level, possible values: READ, WRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#actions DashboardGroup#actions}
  */
  readonly actions?: string[];
  /**
  * ID of the principal with access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#principal_id DashboardGroup#principal_id}
  */
  readonly principalId: string;
  /**
  * Type of principal, possible values: ORG, TEAM, USER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#principal_type DashboardGroup#principal_type}
  */
  readonly principalType: string;
}

export function dashboardGroupPermissionsToTerraform(struct?: DashboardGroupPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    principal_type: cdktf.stringToTerraform(struct!.principalType),
  }
}


export function dashboardGroupPermissionsToHclTerraform(struct?: DashboardGroupPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktf.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DashboardGroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupPermissionsOutputReference {
    return new DashboardGroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group signalfx_dashboard_group}
*/
export class DashboardGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_dashboard_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardGroup to import
  * @param importFromId The id of the existing DashboardGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_dashboard_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard_group signalfx_dashboard_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_dashboard_group',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedWriterTeams = config.authorizedWriterTeams;
    this._authorizedWriterUsers = config.authorizedWriterUsers;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._teams = config.teams;
    this._dashboard.internalValue = config.dashboard;
    this._importQualifier.internalValue = config.importQualifier;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_writer_teams - computed: false, optional: true, required: false
  private _authorizedWriterTeams?: string[]; 
  public get authorizedWriterTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_teams'));
  }
  public set authorizedWriterTeams(value: string[]) {
    this._authorizedWriterTeams = value;
  }
  public resetAuthorizedWriterTeams() {
    this._authorizedWriterTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterTeamsInput() {
    return this._authorizedWriterTeams;
  }

  // authorized_writer_users - computed: false, optional: true, required: false
  private _authorizedWriterUsers?: string[]; 
  public get authorizedWriterUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_users'));
  }
  public set authorizedWriterUsers(value: string[]) {
    this._authorizedWriterUsers = value;
  }
  public resetAuthorizedWriterUsers() {
    this._authorizedWriterUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterUsersInput() {
    return this._authorizedWriterUsers;
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new DashboardGroupDashboardList(this, "dashboard", false);
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: DashboardGroupDashboard[] | cdktf.IResolvable) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // import_qualifier - computed: false, optional: true, required: false
  private _importQualifier = new DashboardGroupImportQualifierList(this, "import_qualifier", true);
  public get importQualifier() {
    return this._importQualifier;
  }
  public putImportQualifier(value: DashboardGroupImportQualifier[] | cdktf.IResolvable) {
    this._importQualifier.internalValue = value;
  }
  public resetImportQualifier() {
    this._importQualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importQualifierInput() {
    return this._importQualifier.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DashboardGroupPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DashboardGroupPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_writer_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterTeams),
      authorized_writer_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterUsers),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      dashboard: cdktf.listMapper(dashboardGroupDashboardToTerraform, true)(this._dashboard.internalValue),
      import_qualifier: cdktf.listMapper(dashboardGroupImportQualifierToTerraform, true)(this._importQualifier.internalValue),
      permissions: cdktf.listMapper(dashboardGroupPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_writer_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorized_writer_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dashboard: {
        value: cdktf.listMapperHcl(dashboardGroupDashboardToHclTerraform, true)(this._dashboard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardGroupDashboardList",
      },
      import_qualifier: {
        value: cdktf.listMapperHcl(dashboardGroupImportQualifierToHclTerraform, true)(this._importQualifier.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardGroupImportQualifierList",
      },
      permissions: {
        value: cdktf.listMapperHcl(dashboardGroupPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardGroupPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
