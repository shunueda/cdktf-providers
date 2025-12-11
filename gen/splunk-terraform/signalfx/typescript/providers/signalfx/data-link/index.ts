// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dashobard ID to which this data link will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#context_dashboard_id DataLink#context_dashboard_id}
  */
  readonly contextDashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#id DataLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name (key) of the metadata that's the trigger of a data link. If you specify `property_value`, you must specify `property_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#property_name DataLink#property_name}
  */
  readonly propertyName?: string;
  /**
  * Value of the metadata that's the trigger of a data link. If you specify this property, you must also specify `property_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#property_value DataLink#property_value}
  */
  readonly propertyValue?: string;
  /**
  * target_appd_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#target_appd_url DataLink#target_appd_url}
  */
  readonly targetAppdUrl?: DataLinkTargetAppdUrl[] | cdktf.IResolvable;
  /**
  * target_external_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#target_external_url DataLink#target_external_url}
  */
  readonly targetExternalUrl?: DataLinkTargetExternalUrl[] | cdktf.IResolvable;
  /**
  * target_signalfx_dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#target_signalfx_dashboard DataLink#target_signalfx_dashboard}
  */
  readonly targetSignalfxDashboard?: DataLinkTargetSignalfxDashboard[] | cdktf.IResolvable;
  /**
  * target_splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#target_splunk DataLink#target_splunk}
  */
  readonly targetSplunk?: DataLinkTargetSplunk[] | cdktf.IResolvable;
}
export interface DataLinkTargetAppdUrl {
  /**
  * User-assigned target name. Use this value to differentiate between the link targets for a data link object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#name DataLink#name}
  */
  readonly name: string;
  /**
  * URL string for an AppDyanmics data link target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#url DataLink#url}
  */
  readonly url: string;
}

export function dataLinkTargetAppdUrlToTerraform(struct?: DataLinkTargetAppdUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataLinkTargetAppdUrlToHclTerraform(struct?: DataLinkTargetAppdUrl | cdktf.IResolvable): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinkTargetAppdUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinkTargetAppdUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinkTargetAppdUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataLinkTargetAppdUrlList extends cdktf.ComplexList {
  public internalValue? : DataLinkTargetAppdUrl[] | cdktf.IResolvable

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
  public get(index: number): DataLinkTargetAppdUrlOutputReference {
    return new DataLinkTargetAppdUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinkTargetExternalUrl {
  /**
  * The minimum time window for a search sent to an external site. Depends on the value set for `time_format`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#minimum_time_window DataLink#minimum_time_window}
  */
  readonly minimumTimeWindow?: string;
  /**
  * User-assigned target name. Use this value to differentiate between the link targets for a data link object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#name DataLink#name}
  */
  readonly name: string;
  /**
  * Describes the relationship between Splunk Observability Cloud metadata keys and external system properties when the key names are different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#property_key_mapping DataLink#property_key_mapping}
  */
  readonly propertyKeyMapping?: { [key: string]: string };
  /**
  * Designates the format of minimumTimeWindow in the same data link target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#time_format DataLink#time_format}
  */
  readonly timeFormat?: string;
  /**
  * URL string for a Splunk instance or external system data link target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#url DataLink#url}
  */
  readonly url: string;
}

export function dataLinkTargetExternalUrlToTerraform(struct?: DataLinkTargetExternalUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_time_window: cdktf.stringToTerraform(struct!.minimumTimeWindow),
    name: cdktf.stringToTerraform(struct!.name),
    property_key_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertyKeyMapping),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataLinkTargetExternalUrlToHclTerraform(struct?: DataLinkTargetExternalUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_time_window: {
      value: cdktf.stringToHclTerraform(struct!.minimumTimeWindow),
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
    property_key_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.propertyKeyMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinkTargetExternalUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinkTargetExternalUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumTimeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTimeWindow = this._minimumTimeWindow;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyKeyMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyKeyMapping = this._propertyKeyMapping;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinkTargetExternalUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumTimeWindow = undefined;
      this._name = undefined;
      this._propertyKeyMapping = undefined;
      this._timeFormat = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumTimeWindow = value.minimumTimeWindow;
      this._name = value.name;
      this._propertyKeyMapping = value.propertyKeyMapping;
      this._timeFormat = value.timeFormat;
      this._url = value.url;
    }
  }

  // minimum_time_window - computed: false, optional: true, required: false
  private _minimumTimeWindow?: string; 
  public get minimumTimeWindow() {
    return this.getStringAttribute('minimum_time_window');
  }
  public set minimumTimeWindow(value: string) {
    this._minimumTimeWindow = value;
  }
  public resetMinimumTimeWindow() {
    this._minimumTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTimeWindowInput() {
    return this._minimumTimeWindow;
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

  // property_key_mapping - computed: false, optional: true, required: false
  private _propertyKeyMapping?: { [key: string]: string }; 
  public get propertyKeyMapping() {
    return this.getStringMapAttribute('property_key_mapping');
  }
  public set propertyKeyMapping(value: { [key: string]: string }) {
    this._propertyKeyMapping = value;
  }
  public resetPropertyKeyMapping() {
    this._propertyKeyMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyKeyMappingInput() {
    return this._propertyKeyMapping;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataLinkTargetExternalUrlList extends cdktf.ComplexList {
  public internalValue? : DataLinkTargetExternalUrl[] | cdktf.IResolvable

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
  public get(index: number): DataLinkTargetExternalUrlOutputReference {
    return new DataLinkTargetExternalUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinkTargetSignalfxDashboard {
  /**
  * SignalFx-assigned ID of the dashboard link target's dashboard group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#dashboard_group_id DataLink#dashboard_group_id}
  */
  readonly dashboardGroupId: string;
  /**
  * SignalFx-assigned ID of the dashboard link target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#dashboard_id DataLink#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Flag that designates a target as the default for a data link object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#is_default DataLink#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * User-assigned target name. Use this value to differentiate between the link targets for a data link object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#name DataLink#name}
  */
  readonly name: string;
}

export function dataLinkTargetSignalfxDashboardToTerraform(struct?: DataLinkTargetSignalfxDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_group_id: cdktf.stringToTerraform(struct!.dashboardGroupId),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLinkTargetSignalfxDashboardToHclTerraform(struct?: DataLinkTargetSignalfxDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_group_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataLinkTargetSignalfxDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinkTargetSignalfxDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardGroupId = this._dashboardGroupId;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinkTargetSignalfxDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardGroupId = undefined;
      this._dashboardId = undefined;
      this._isDefault = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardGroupId = value.dashboardGroupId;
      this._dashboardId = value.dashboardId;
      this._isDefault = value.isDefault;
      this._name = value.name;
    }
  }

  // dashboard_group_id - computed: false, optional: false, required: true
  private _dashboardGroupId?: string; 
  public get dashboardGroupId() {
    return this.getStringAttribute('dashboard_group_id');
  }
  public set dashboardGroupId(value: string) {
    this._dashboardGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardGroupIdInput() {
    return this._dashboardGroupId;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

export class DataLinkTargetSignalfxDashboardList extends cdktf.ComplexList {
  public internalValue? : DataLinkTargetSignalfxDashboard[] | cdktf.IResolvable

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
  public get(index: number): DataLinkTargetSignalfxDashboardOutputReference {
    return new DataLinkTargetSignalfxDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinkTargetSplunk {
  /**
  * User-assigned target name. Use this value to differentiate between the link targets for a data link object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#name DataLink#name}
  */
  readonly name: string;
  /**
  * Describes the relationship between Splunk Observability Cloud metadata keys and external system properties when the key names are different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#property_key_mapping DataLink#property_key_mapping}
  */
  readonly propertyKeyMapping?: { [key: string]: string };
}

export function dataLinkTargetSplunkToTerraform(struct?: DataLinkTargetSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    property_key_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertyKeyMapping),
  }
}


export function dataLinkTargetSplunkToHclTerraform(struct?: DataLinkTargetSplunk | cdktf.IResolvable): any {
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
    property_key_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.propertyKeyMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinkTargetSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinkTargetSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertyKeyMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyKeyMapping = this._propertyKeyMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinkTargetSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._propertyKeyMapping = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._propertyKeyMapping = value.propertyKeyMapping;
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

  // property_key_mapping - computed: false, optional: true, required: false
  private _propertyKeyMapping?: { [key: string]: string }; 
  public get propertyKeyMapping() {
    return this.getStringMapAttribute('property_key_mapping');
  }
  public set propertyKeyMapping(value: { [key: string]: string }) {
    this._propertyKeyMapping = value;
  }
  public resetPropertyKeyMapping() {
    this._propertyKeyMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyKeyMappingInput() {
    return this._propertyKeyMapping;
  }
}

export class DataLinkTargetSplunkList extends cdktf.ComplexList {
  public internalValue? : DataLinkTargetSplunk[] | cdktf.IResolvable

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
  public get(index: number): DataLinkTargetSplunkOutputReference {
    return new DataLinkTargetSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link signalfx_data_link}
*/
export class DataLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_data_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLink to import
  * @param importFromId The id of the existing DataLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_data_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/data_link signalfx_data_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'signalfx_data_link',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextDashboardId = config.contextDashboardId;
    this._id = config.id;
    this._propertyName = config.propertyName;
    this._propertyValue = config.propertyValue;
    this._targetAppdUrl.internalValue = config.targetAppdUrl;
    this._targetExternalUrl.internalValue = config.targetExternalUrl;
    this._targetSignalfxDashboard.internalValue = config.targetSignalfxDashboard;
    this._targetSplunk.internalValue = config.targetSplunk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_dashboard_id - computed: false, optional: true, required: false
  private _contextDashboardId?: string; 
  public get contextDashboardId() {
    return this.getStringAttribute('context_dashboard_id');
  }
  public set contextDashboardId(value: string) {
    this._contextDashboardId = value;
  }
  public resetContextDashboardId() {
    this._contextDashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDashboardIdInput() {
    return this._contextDashboardId;
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

  // property_name - computed: false, optional: true, required: false
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  public resetPropertyName() {
    this._propertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_value - computed: false, optional: true, required: false
  private _propertyValue?: string; 
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
  public set propertyValue(value: string) {
    this._propertyValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue;
  }

  // target_appd_url - computed: false, optional: true, required: false
  private _targetAppdUrl = new DataLinkTargetAppdUrlList(this, "target_appd_url", true);
  public get targetAppdUrl() {
    return this._targetAppdUrl;
  }
  public putTargetAppdUrl(value: DataLinkTargetAppdUrl[] | cdktf.IResolvable) {
    this._targetAppdUrl.internalValue = value;
  }
  public resetTargetAppdUrl() {
    this._targetAppdUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAppdUrlInput() {
    return this._targetAppdUrl.internalValue;
  }

  // target_external_url - computed: false, optional: true, required: false
  private _targetExternalUrl = new DataLinkTargetExternalUrlList(this, "target_external_url", true);
  public get targetExternalUrl() {
    return this._targetExternalUrl;
  }
  public putTargetExternalUrl(value: DataLinkTargetExternalUrl[] | cdktf.IResolvable) {
    this._targetExternalUrl.internalValue = value;
  }
  public resetTargetExternalUrl() {
    this._targetExternalUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetExternalUrlInput() {
    return this._targetExternalUrl.internalValue;
  }

  // target_signalfx_dashboard - computed: false, optional: true, required: false
  private _targetSignalfxDashboard = new DataLinkTargetSignalfxDashboardList(this, "target_signalfx_dashboard", true);
  public get targetSignalfxDashboard() {
    return this._targetSignalfxDashboard;
  }
  public putTargetSignalfxDashboard(value: DataLinkTargetSignalfxDashboard[] | cdktf.IResolvable) {
    this._targetSignalfxDashboard.internalValue = value;
  }
  public resetTargetSignalfxDashboard() {
    this._targetSignalfxDashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSignalfxDashboardInput() {
    return this._targetSignalfxDashboard.internalValue;
  }

  // target_splunk - computed: false, optional: true, required: false
  private _targetSplunk = new DataLinkTargetSplunkList(this, "target_splunk", true);
  public get targetSplunk() {
    return this._targetSplunk;
  }
  public putTargetSplunk(value: DataLinkTargetSplunk[] | cdktf.IResolvable) {
    this._targetSplunk.internalValue = value;
  }
  public resetTargetSplunk() {
    this._targetSplunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSplunkInput() {
    return this._targetSplunk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_dashboard_id: cdktf.stringToTerraform(this._contextDashboardId),
      id: cdktf.stringToTerraform(this._id),
      property_name: cdktf.stringToTerraform(this._propertyName),
      property_value: cdktf.stringToTerraform(this._propertyValue),
      target_appd_url: cdktf.listMapper(dataLinkTargetAppdUrlToTerraform, true)(this._targetAppdUrl.internalValue),
      target_external_url: cdktf.listMapper(dataLinkTargetExternalUrlToTerraform, true)(this._targetExternalUrl.internalValue),
      target_signalfx_dashboard: cdktf.listMapper(dataLinkTargetSignalfxDashboardToTerraform, true)(this._targetSignalfxDashboard.internalValue),
      target_splunk: cdktf.listMapper(dataLinkTargetSplunkToTerraform, true)(this._targetSplunk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_dashboard_id: {
        value: cdktf.stringToHclTerraform(this._contextDashboardId),
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
      property_name: {
        value: cdktf.stringToHclTerraform(this._propertyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_value: {
        value: cdktf.stringToHclTerraform(this._propertyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_appd_url: {
        value: cdktf.listMapperHcl(dataLinkTargetAppdUrlToHclTerraform, true)(this._targetAppdUrl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinkTargetAppdUrlList",
      },
      target_external_url: {
        value: cdktf.listMapperHcl(dataLinkTargetExternalUrlToHclTerraform, true)(this._targetExternalUrl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinkTargetExternalUrlList",
      },
      target_signalfx_dashboard: {
        value: cdktf.listMapperHcl(dataLinkTargetSignalfxDashboardToHclTerraform, true)(this._targetSignalfxDashboard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinkTargetSignalfxDashboardList",
      },
      target_splunk: {
        value: cdktf.listMapperHcl(dataLinkTargetSplunkToHclTerraform, true)(this._targetSplunk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinkTargetSplunkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
