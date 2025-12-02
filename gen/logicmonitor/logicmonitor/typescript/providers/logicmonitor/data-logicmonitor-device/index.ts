// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#auto_balanced_collector_group_id DataLogicmonitorDevice#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#auto_properties DataLogicmonitorDevice#auto_properties}
  */
  readonly autoProperties?: DataLogicmonitorDeviceAutoProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#auto_props_assigned_on DataLogicmonitorDevice#auto_props_assigned_on}
  */
  readonly autoPropsAssignedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#auto_props_updated_on DataLogicmonitorDevice#auto_props_updated_on}
  */
  readonly autoPropsUpdatedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#aws_state DataLogicmonitorDevice#aws_state}
  */
  readonly awsState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#azure_state DataLogicmonitorDevice#azure_state}
  */
  readonly azureState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#collector_description DataLogicmonitorDevice#collector_description}
  */
  readonly collectorDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#contains_multi_value DataLogicmonitorDevice#contains_multi_value}
  */
  readonly containsMultiValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#created_on DataLogicmonitorDevice#created_on}
  */
  readonly createdOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#current_collector_id DataLogicmonitorDevice#current_collector_id}
  */
  readonly currentCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#current_log_collector_id DataLogicmonitorDevice#current_log_collector_id}
  */
  readonly currentLogCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#custom_properties DataLogicmonitorDevice#custom_properties}
  */
  readonly customProperties?: DataLogicmonitorDeviceCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#deleted_time_in_ms DataLogicmonitorDevice#deleted_time_in_ms}
  */
  readonly deletedTimeInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#description DataLogicmonitorDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#device_type DataLogicmonitorDevice#device_type}
  */
  readonly deviceType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#disable_alerting DataLogicmonitorDevice#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#display_name DataLogicmonitorDevice#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#enable_netflow DataLogicmonitorDevice#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#filter DataLogicmonitorDevice#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#gcp_state DataLogicmonitorDevice#gcp_state}
  */
  readonly gcpState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#host_group_ids DataLogicmonitorDevice#host_group_ids}
  */
  readonly hostGroupIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#host_status DataLogicmonitorDevice#host_status}
  */
  readonly hostStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#id DataLogicmonitorDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#inherited_properties DataLogicmonitorDevice#inherited_properties}
  */
  readonly inheritedProperties?: DataLogicmonitorDeviceInheritedProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#is_preferred_log_collector_configured DataLogicmonitorDevice#is_preferred_log_collector_configured}
  */
  readonly isPreferredLogCollectorConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#last_data_time DataLogicmonitorDevice#last_data_time}
  */
  readonly lastDataTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#last_rawdata_time DataLogicmonitorDevice#last_rawdata_time}
  */
  readonly lastRawdataTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#link DataLogicmonitorDevice#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#log_collector_id DataLogicmonitorDevice#log_collector_id}
  */
  readonly logCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#need_stc_grp_and_sorted_c_p DataLogicmonitorDevice#need_stc_grp_and_sorted_c_p}
  */
  readonly needStcGrpAndSortedCP?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#netflow_collector_description DataLogicmonitorDevice#netflow_collector_description}
  */
  readonly netflowCollectorDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#netflow_collector_group_id DataLogicmonitorDevice#netflow_collector_group_id}
  */
  readonly netflowCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#netflow_collector_group_name DataLogicmonitorDevice#netflow_collector_group_name}
  */
  readonly netflowCollectorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#netflow_collector_id DataLogicmonitorDevice#netflow_collector_id}
  */
  readonly netflowCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#op DataLogicmonitorDevice#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#preferred_collector_group_id DataLogicmonitorDevice#preferred_collector_group_id}
  */
  readonly preferredCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#preferred_collector_group_name DataLogicmonitorDevice#preferred_collector_group_name}
  */
  readonly preferredCollectorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#preferred_collector_id DataLogicmonitorDevice#preferred_collector_id}
  */
  readonly preferredCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#related_device_id DataLogicmonitorDevice#related_device_id}
  */
  readonly relatedDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#resource_ids DataLogicmonitorDevice#resource_ids}
  */
  readonly resourceIds?: DataLogicmonitorDeviceResourceIds[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#scan_config_id DataLogicmonitorDevice#scan_config_id}
  */
  readonly scanConfigId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#synthetics_collector_ids DataLogicmonitorDevice#synthetics_collector_ids}
  */
  readonly syntheticsCollectorIds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#system_properties DataLogicmonitorDevice#system_properties}
  */
  readonly systemProperties?: DataLogicmonitorDeviceSystemProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#to_delete_time_in_ms DataLogicmonitorDevice#to_delete_time_in_ms}
  */
  readonly toDeleteTimeInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#up_time_in_seconds DataLogicmonitorDevice#up_time_in_seconds}
  */
  readonly upTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#updated_on DataLogicmonitorDevice#updated_on}
  */
  readonly updatedOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#user_permission DataLogicmonitorDevice#user_permission}
  */
  readonly userPermission?: string;
}
export interface DataLogicmonitorDeviceAutoProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#value DataLogicmonitorDevice#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceAutoPropertiesToTerraform(struct?: DataLogicmonitorDeviceAutoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceAutoPropertiesToHclTerraform(struct?: DataLogicmonitorDeviceAutoProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorDeviceAutoPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDeviceAutoProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataLogicmonitorDeviceAutoProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class DataLogicmonitorDeviceAutoPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceAutoProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDeviceAutoPropertiesOutputReference {
    return new DataLogicmonitorDeviceAutoPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#value DataLogicmonitorDevice#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceCustomPropertiesToTerraform(struct?: DataLogicmonitorDeviceCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceCustomPropertiesToHclTerraform(struct?: DataLogicmonitorDeviceCustomProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorDeviceCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDeviceCustomProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataLogicmonitorDeviceCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class DataLogicmonitorDeviceCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDeviceCustomPropertiesOutputReference {
    return new DataLogicmonitorDeviceCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceInheritedProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#value DataLogicmonitorDevice#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceInheritedPropertiesToTerraform(struct?: DataLogicmonitorDeviceInheritedProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceInheritedPropertiesToHclTerraform(struct?: DataLogicmonitorDeviceInheritedProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorDeviceInheritedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDeviceInheritedProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataLogicmonitorDeviceInheritedProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class DataLogicmonitorDeviceInheritedPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceInheritedProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDeviceInheritedPropertiesOutputReference {
    return new DataLogicmonitorDeviceInheritedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceResourceIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#value DataLogicmonitorDevice#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceResourceIdsToTerraform(struct?: DataLogicmonitorDeviceResourceIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceResourceIdsToHclTerraform(struct?: DataLogicmonitorDeviceResourceIds | cdktf.IResolvable): any {
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

export class DataLogicmonitorDeviceResourceIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDeviceResourceIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataLogicmonitorDeviceResourceIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class DataLogicmonitorDeviceResourceIdsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceResourceIds[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDeviceResourceIdsOutputReference {
    return new DataLogicmonitorDeviceResourceIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceSystemProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#name DataLogicmonitorDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#value DataLogicmonitorDevice#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceSystemPropertiesToTerraform(struct?: DataLogicmonitorDeviceSystemProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceSystemPropertiesToHclTerraform(struct?: DataLogicmonitorDeviceSystemProperties | cdktf.IResolvable): any {
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

export class DataLogicmonitorDeviceSystemPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDeviceSystemProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataLogicmonitorDeviceSystemProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class DataLogicmonitorDeviceSystemPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceSystemProperties[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDeviceSystemPropertiesOutputReference {
    return new DataLogicmonitorDeviceSystemPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device logicmonitor_device}
*/
export class DataLogicmonitorDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorDevice to import
  * @param importFromId The id of the existing DataLogicmonitorDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device logicmonitor_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_device',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoBalancedCollectorGroupId = config.autoBalancedCollectorGroupId;
    this._autoProperties.internalValue = config.autoProperties;
    this._autoPropsAssignedOn = config.autoPropsAssignedOn;
    this._autoPropsUpdatedOn = config.autoPropsUpdatedOn;
    this._awsState = config.awsState;
    this._azureState = config.azureState;
    this._collectorDescription = config.collectorDescription;
    this._containsMultiValue = config.containsMultiValue;
    this._createdOn = config.createdOn;
    this._currentCollectorId = config.currentCollectorId;
    this._currentLogCollectorId = config.currentLogCollectorId;
    this._customProperties.internalValue = config.customProperties;
    this._deletedTimeInMs = config.deletedTimeInMs;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._disableAlerting = config.disableAlerting;
    this._displayName = config.displayName;
    this._enableNetflow = config.enableNetflow;
    this._filter = config.filter;
    this._gcpState = config.gcpState;
    this._hostGroupIds = config.hostGroupIds;
    this._hostStatus = config.hostStatus;
    this._id = config.id;
    this._inheritedProperties.internalValue = config.inheritedProperties;
    this._isPreferredLogCollectorConfigured = config.isPreferredLogCollectorConfigured;
    this._lastDataTime = config.lastDataTime;
    this._lastRawdataTime = config.lastRawdataTime;
    this._link = config.link;
    this._logCollectorId = config.logCollectorId;
    this._name = config.name;
    this._needStcGrpAndSortedCP = config.needStcGrpAndSortedCP;
    this._netflowCollectorDescription = config.netflowCollectorDescription;
    this._netflowCollectorGroupId = config.netflowCollectorGroupId;
    this._netflowCollectorGroupName = config.netflowCollectorGroupName;
    this._netflowCollectorId = config.netflowCollectorId;
    this._op = config.op;
    this._preferredCollectorGroupId = config.preferredCollectorGroupId;
    this._preferredCollectorGroupName = config.preferredCollectorGroupName;
    this._preferredCollectorId = config.preferredCollectorId;
    this._relatedDeviceId = config.relatedDeviceId;
    this._resourceIds.internalValue = config.resourceIds;
    this._scanConfigId = config.scanConfigId;
    this._syntheticsCollectorIds = config.syntheticsCollectorIds;
    this._systemProperties.internalValue = config.systemProperties;
    this._toDeleteTimeInMs = config.toDeleteTimeInMs;
    this._upTimeInSeconds = config.upTimeInSeconds;
    this._updatedOn = config.updatedOn;
    this._userPermission = config.userPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // auto_properties - computed: false, optional: true, required: false
  private _autoProperties = new DataLogicmonitorDeviceAutoPropertiesList(this, "auto_properties", false);
  public get autoProperties() {
    return this._autoProperties;
  }
  public putAutoProperties(value: DataLogicmonitorDeviceAutoProperties[] | cdktf.IResolvable) {
    this._autoProperties.internalValue = value;
  }
  public resetAutoProperties() {
    this._autoProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPropertiesInput() {
    return this._autoProperties.internalValue;
  }

  // auto_props_assigned_on - computed: false, optional: true, required: false
  private _autoPropsAssignedOn?: number; 
  public get autoPropsAssignedOn() {
    return this.getNumberAttribute('auto_props_assigned_on');
  }
  public set autoPropsAssignedOn(value: number) {
    this._autoPropsAssignedOn = value;
  }
  public resetAutoPropsAssignedOn() {
    this._autoPropsAssignedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPropsAssignedOnInput() {
    return this._autoPropsAssignedOn;
  }

  // auto_props_updated_on - computed: false, optional: true, required: false
  private _autoPropsUpdatedOn?: number; 
  public get autoPropsUpdatedOn() {
    return this.getNumberAttribute('auto_props_updated_on');
  }
  public set autoPropsUpdatedOn(value: number) {
    this._autoPropsUpdatedOn = value;
  }
  public resetAutoPropsUpdatedOn() {
    this._autoPropsUpdatedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPropsUpdatedOnInput() {
    return this._autoPropsUpdatedOn;
  }

  // aws_state - computed: false, optional: true, required: false
  private _awsState?: number; 
  public get awsState() {
    return this.getNumberAttribute('aws_state');
  }
  public set awsState(value: number) {
    this._awsState = value;
  }
  public resetAwsState() {
    this._awsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStateInput() {
    return this._awsState;
  }

  // azure_state - computed: false, optional: true, required: false
  private _azureState?: number; 
  public get azureState() {
    return this.getNumberAttribute('azure_state');
  }
  public set azureState(value: number) {
    this._azureState = value;
  }
  public resetAzureState() {
    this._azureState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStateInput() {
    return this._azureState;
  }

  // collector_description - computed: false, optional: true, required: false
  private _collectorDescription?: string; 
  public get collectorDescription() {
    return this.getStringAttribute('collector_description');
  }
  public set collectorDescription(value: string) {
    this._collectorDescription = value;
  }
  public resetCollectorDescription() {
    this._collectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorDescriptionInput() {
    return this._collectorDescription;
  }

  // contains_multi_value - computed: false, optional: true, required: false
  private _containsMultiValue?: boolean | cdktf.IResolvable; 
  public get containsMultiValue() {
    return this.getBooleanAttribute('contains_multi_value');
  }
  public set containsMultiValue(value: boolean | cdktf.IResolvable) {
    this._containsMultiValue = value;
  }
  public resetContainsMultiValue() {
    this._containsMultiValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsMultiValueInput() {
    return this._containsMultiValue;
  }

  // created_on - computed: false, optional: true, required: false
  private _createdOn?: number; 
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }
  public set createdOn(value: number) {
    this._createdOn = value;
  }
  public resetCreatedOn() {
    this._createdOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdOnInput() {
    return this._createdOn;
  }

  // current_collector_id - computed: false, optional: true, required: false
  private _currentCollectorId?: number; 
  public get currentCollectorId() {
    return this.getNumberAttribute('current_collector_id');
  }
  public set currentCollectorId(value: number) {
    this._currentCollectorId = value;
  }
  public resetCurrentCollectorId() {
    this._currentCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentCollectorIdInput() {
    return this._currentCollectorId;
  }

  // current_log_collector_id - computed: false, optional: true, required: false
  private _currentLogCollectorId?: number; 
  public get currentLogCollectorId() {
    return this.getNumberAttribute('current_log_collector_id');
  }
  public set currentLogCollectorId(value: number) {
    this._currentLogCollectorId = value;
  }
  public resetCurrentLogCollectorId() {
    this._currentLogCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLogCollectorIdInput() {
    return this._currentLogCollectorId;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataLogicmonitorDeviceCustomPropertiesList(this, "custom_properties", false);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataLogicmonitorDeviceCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // deleted_time_in_ms - computed: false, optional: true, required: false
  private _deletedTimeInMs?: number; 
  public get deletedTimeInMs() {
    return this.getNumberAttribute('deleted_time_in_ms');
  }
  public set deletedTimeInMs(value: number) {
    this._deletedTimeInMs = value;
  }
  public resetDeletedTimeInMs() {
    this._deletedTimeInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedTimeInMsInput() {
    return this._deletedTimeInMs;
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

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: number; 
  public get deviceType() {
    return this.getNumberAttribute('device_type');
  }
  public set deviceType(value: number) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // disable_alerting - computed: false, optional: true, required: false
  private _disableAlerting?: boolean | cdktf.IResolvable; 
  public get disableAlerting() {
    return this.getBooleanAttribute('disable_alerting');
  }
  public set disableAlerting(value: boolean | cdktf.IResolvable) {
    this._disableAlerting = value;
  }
  public resetDisableAlerting() {
    this._disableAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertingInput() {
    return this._disableAlerting;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_netflow - computed: false, optional: true, required: false
  private _enableNetflow?: boolean | cdktf.IResolvable; 
  public get enableNetflow() {
    return this.getBooleanAttribute('enable_netflow');
  }
  public set enableNetflow(value: boolean | cdktf.IResolvable) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // gcp_state - computed: false, optional: true, required: false
  private _gcpState?: number; 
  public get gcpState() {
    return this.getNumberAttribute('gcp_state');
  }
  public set gcpState(value: number) {
    this._gcpState = value;
  }
  public resetGcpState() {
    this._gcpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpStateInput() {
    return this._gcpState;
  }

  // host_group_ids - computed: false, optional: true, required: false
  private _hostGroupIds?: string; 
  public get hostGroupIds() {
    return this.getStringAttribute('host_group_ids');
  }
  public set hostGroupIds(value: string) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
  }

  // host_status - computed: false, optional: true, required: false
  private _hostStatus?: string; 
  public get hostStatus() {
    return this.getStringAttribute('host_status');
  }
  public set hostStatus(value: string) {
    this._hostStatus = value;
  }
  public resetHostStatus() {
    this._hostStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStatusInput() {
    return this._hostStatus;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inherited_properties - computed: false, optional: true, required: false
  private _inheritedProperties = new DataLogicmonitorDeviceInheritedPropertiesList(this, "inherited_properties", false);
  public get inheritedProperties() {
    return this._inheritedProperties;
  }
  public putInheritedProperties(value: DataLogicmonitorDeviceInheritedProperties[] | cdktf.IResolvable) {
    this._inheritedProperties.internalValue = value;
  }
  public resetInheritedProperties() {
    this._inheritedProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedPropertiesInput() {
    return this._inheritedProperties.internalValue;
  }

  // is_preferred_log_collector_configured - computed: false, optional: true, required: false
  private _isPreferredLogCollectorConfigured?: boolean | cdktf.IResolvable; 
  public get isPreferredLogCollectorConfigured() {
    return this.getBooleanAttribute('is_preferred_log_collector_configured');
  }
  public set isPreferredLogCollectorConfigured(value: boolean | cdktf.IResolvable) {
    this._isPreferredLogCollectorConfigured = value;
  }
  public resetIsPreferredLogCollectorConfigured() {
    this._isPreferredLogCollectorConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreferredLogCollectorConfiguredInput() {
    return this._isPreferredLogCollectorConfigured;
  }

  // last_data_time - computed: false, optional: true, required: false
  private _lastDataTime?: number; 
  public get lastDataTime() {
    return this.getNumberAttribute('last_data_time');
  }
  public set lastDataTime(value: number) {
    this._lastDataTime = value;
  }
  public resetLastDataTime() {
    this._lastDataTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDataTimeInput() {
    return this._lastDataTime;
  }

  // last_rawdata_time - computed: false, optional: true, required: false
  private _lastRawdataTime?: number; 
  public get lastRawdataTime() {
    return this.getNumberAttribute('last_rawdata_time');
  }
  public set lastRawdataTime(value: number) {
    this._lastRawdataTime = value;
  }
  public resetLastRawdataTime() {
    this._lastRawdataTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRawdataTimeInput() {
    return this._lastRawdataTime;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // log_collector_id - computed: false, optional: true, required: false
  private _logCollectorId?: number; 
  public get logCollectorId() {
    return this.getNumberAttribute('log_collector_id');
  }
  public set logCollectorId(value: number) {
    this._logCollectorId = value;
  }
  public resetLogCollectorId() {
    this._logCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectorIdInput() {
    return this._logCollectorId;
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

  // need_stc_grp_and_sorted_c_p - computed: false, optional: true, required: false
  private _needStcGrpAndSortedCP?: boolean | cdktf.IResolvable; 
  public get needStcGrpAndSortedCP() {
    return this.getBooleanAttribute('need_stc_grp_and_sorted_c_p');
  }
  public set needStcGrpAndSortedCP(value: boolean | cdktf.IResolvable) {
    this._needStcGrpAndSortedCP = value;
  }
  public resetNeedStcGrpAndSortedCP() {
    this._needStcGrpAndSortedCP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needStcGrpAndSortedCPInput() {
    return this._needStcGrpAndSortedCP;
  }

  // netflow_collector_description - computed: false, optional: true, required: false
  private _netflowCollectorDescription?: string; 
  public get netflowCollectorDescription() {
    return this.getStringAttribute('netflow_collector_description');
  }
  public set netflowCollectorDescription(value: string) {
    this._netflowCollectorDescription = value;
  }
  public resetNetflowCollectorDescription() {
    this._netflowCollectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorDescriptionInput() {
    return this._netflowCollectorDescription;
  }

  // netflow_collector_group_id - computed: false, optional: true, required: false
  private _netflowCollectorGroupId?: number; 
  public get netflowCollectorGroupId() {
    return this.getNumberAttribute('netflow_collector_group_id');
  }
  public set netflowCollectorGroupId(value: number) {
    this._netflowCollectorGroupId = value;
  }
  public resetNetflowCollectorGroupId() {
    this._netflowCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorGroupIdInput() {
    return this._netflowCollectorGroupId;
  }

  // netflow_collector_group_name - computed: false, optional: true, required: false
  private _netflowCollectorGroupName?: string; 
  public get netflowCollectorGroupName() {
    return this.getStringAttribute('netflow_collector_group_name');
  }
  public set netflowCollectorGroupName(value: string) {
    this._netflowCollectorGroupName = value;
  }
  public resetNetflowCollectorGroupName() {
    this._netflowCollectorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorGroupNameInput() {
    return this._netflowCollectorGroupName;
  }

  // netflow_collector_id - computed: false, optional: true, required: false
  private _netflowCollectorId?: number; 
  public get netflowCollectorId() {
    return this.getNumberAttribute('netflow_collector_id');
  }
  public set netflowCollectorId(value: number) {
    this._netflowCollectorId = value;
  }
  public resetNetflowCollectorId() {
    this._netflowCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorIdInput() {
    return this._netflowCollectorId;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // preferred_collector_group_id - computed: false, optional: true, required: false
  private _preferredCollectorGroupId?: number; 
  public get preferredCollectorGroupId() {
    return this.getNumberAttribute('preferred_collector_group_id');
  }
  public set preferredCollectorGroupId(value: number) {
    this._preferredCollectorGroupId = value;
  }
  public resetPreferredCollectorGroupId() {
    this._preferredCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCollectorGroupIdInput() {
    return this._preferredCollectorGroupId;
  }

  // preferred_collector_group_name - computed: false, optional: true, required: false
  private _preferredCollectorGroupName?: string; 
  public get preferredCollectorGroupName() {
    return this.getStringAttribute('preferred_collector_group_name');
  }
  public set preferredCollectorGroupName(value: string) {
    this._preferredCollectorGroupName = value;
  }
  public resetPreferredCollectorGroupName() {
    this._preferredCollectorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCollectorGroupNameInput() {
    return this._preferredCollectorGroupName;
  }

  // preferred_collector_id - computed: false, optional: true, required: false
  private _preferredCollectorId?: number; 
  public get preferredCollectorId() {
    return this.getNumberAttribute('preferred_collector_id');
  }
  public set preferredCollectorId(value: number) {
    this._preferredCollectorId = value;
  }
  public resetPreferredCollectorId() {
    this._preferredCollectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCollectorIdInput() {
    return this._preferredCollectorId;
  }

  // related_device_id - computed: false, optional: true, required: false
  private _relatedDeviceId?: number; 
  public get relatedDeviceId() {
    return this.getNumberAttribute('related_device_id');
  }
  public set relatedDeviceId(value: number) {
    this._relatedDeviceId = value;
  }
  public resetRelatedDeviceId() {
    this._relatedDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedDeviceIdInput() {
    return this._relatedDeviceId;
  }

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds = new DataLogicmonitorDeviceResourceIdsList(this, "resource_ids", false);
  public get resourceIds() {
    return this._resourceIds;
  }
  public putResourceIds(value: DataLogicmonitorDeviceResourceIds[] | cdktf.IResolvable) {
    this._resourceIds.internalValue = value;
  }
  public resetResourceIds() {
    this._resourceIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds.internalValue;
  }

  // scan_config_id - computed: false, optional: true, required: false
  private _scanConfigId?: number; 
  public get scanConfigId() {
    return this.getNumberAttribute('scan_config_id');
  }
  public set scanConfigId(value: number) {
    this._scanConfigId = value;
  }
  public resetScanConfigId() {
    this._scanConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanConfigIdInput() {
    return this._scanConfigId;
  }

  // synthetics_collector_ids - computed: false, optional: true, required: false
  private _syntheticsCollectorIds?: number; 
  public get syntheticsCollectorIds() {
    return this.getNumberAttribute('synthetics_collector_ids');
  }
  public set syntheticsCollectorIds(value: number) {
    this._syntheticsCollectorIds = value;
  }
  public resetSyntheticsCollectorIds() {
    this._syntheticsCollectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticsCollectorIdsInput() {
    return this._syntheticsCollectorIds;
  }

  // system_properties - computed: false, optional: true, required: false
  private _systemProperties = new DataLogicmonitorDeviceSystemPropertiesList(this, "system_properties", false);
  public get systemProperties() {
    return this._systemProperties;
  }
  public putSystemProperties(value: DataLogicmonitorDeviceSystemProperties[] | cdktf.IResolvable) {
    this._systemProperties.internalValue = value;
  }
  public resetSystemProperties() {
    this._systemProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPropertiesInput() {
    return this._systemProperties.internalValue;
  }

  // to_delete_time_in_ms - computed: false, optional: true, required: false
  private _toDeleteTimeInMs?: number; 
  public get toDeleteTimeInMs() {
    return this.getNumberAttribute('to_delete_time_in_ms');
  }
  public set toDeleteTimeInMs(value: number) {
    this._toDeleteTimeInMs = value;
  }
  public resetToDeleteTimeInMs() {
    this._toDeleteTimeInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toDeleteTimeInMsInput() {
    return this._toDeleteTimeInMs;
  }

  // up_time_in_seconds - computed: false, optional: true, required: false
  private _upTimeInSeconds?: number; 
  public get upTimeInSeconds() {
    return this.getNumberAttribute('up_time_in_seconds');
  }
  public set upTimeInSeconds(value: number) {
    this._upTimeInSeconds = value;
  }
  public resetUpTimeInSeconds() {
    this._upTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInSecondsInput() {
    return this._upTimeInSeconds;
  }

  // updated_on - computed: false, optional: true, required: false
  private _updatedOn?: number; 
  public get updatedOn() {
    return this.getNumberAttribute('updated_on');
  }
  public set updatedOn(value: number) {
    this._updatedOn = value;
  }
  public resetUpdatedOn() {
    this._updatedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedOnInput() {
    return this._updatedOn;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_balanced_collector_group_id: cdktf.numberToTerraform(this._autoBalancedCollectorGroupId),
      auto_properties: cdktf.listMapper(dataLogicmonitorDeviceAutoPropertiesToTerraform, false)(this._autoProperties.internalValue),
      auto_props_assigned_on: cdktf.numberToTerraform(this._autoPropsAssignedOn),
      auto_props_updated_on: cdktf.numberToTerraform(this._autoPropsUpdatedOn),
      aws_state: cdktf.numberToTerraform(this._awsState),
      azure_state: cdktf.numberToTerraform(this._azureState),
      collector_description: cdktf.stringToTerraform(this._collectorDescription),
      contains_multi_value: cdktf.booleanToTerraform(this._containsMultiValue),
      created_on: cdktf.numberToTerraform(this._createdOn),
      current_collector_id: cdktf.numberToTerraform(this._currentCollectorId),
      current_log_collector_id: cdktf.numberToTerraform(this._currentLogCollectorId),
      custom_properties: cdktf.listMapper(dataLogicmonitorDeviceCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      deleted_time_in_ms: cdktf.numberToTerraform(this._deletedTimeInMs),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.numberToTerraform(this._deviceType),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      filter: cdktf.stringToTerraform(this._filter),
      gcp_state: cdktf.numberToTerraform(this._gcpState),
      host_group_ids: cdktf.stringToTerraform(this._hostGroupIds),
      host_status: cdktf.stringToTerraform(this._hostStatus),
      id: cdktf.numberToTerraform(this._id),
      inherited_properties: cdktf.listMapper(dataLogicmonitorDeviceInheritedPropertiesToTerraform, false)(this._inheritedProperties.internalValue),
      is_preferred_log_collector_configured: cdktf.booleanToTerraform(this._isPreferredLogCollectorConfigured),
      last_data_time: cdktf.numberToTerraform(this._lastDataTime),
      last_rawdata_time: cdktf.numberToTerraform(this._lastRawdataTime),
      link: cdktf.stringToTerraform(this._link),
      log_collector_id: cdktf.numberToTerraform(this._logCollectorId),
      name: cdktf.stringToTerraform(this._name),
      need_stc_grp_and_sorted_c_p: cdktf.booleanToTerraform(this._needStcGrpAndSortedCP),
      netflow_collector_description: cdktf.stringToTerraform(this._netflowCollectorDescription),
      netflow_collector_group_id: cdktf.numberToTerraform(this._netflowCollectorGroupId),
      netflow_collector_group_name: cdktf.stringToTerraform(this._netflowCollectorGroupName),
      netflow_collector_id: cdktf.numberToTerraform(this._netflowCollectorId),
      op: cdktf.stringToTerraform(this._op),
      preferred_collector_group_id: cdktf.numberToTerraform(this._preferredCollectorGroupId),
      preferred_collector_group_name: cdktf.stringToTerraform(this._preferredCollectorGroupName),
      preferred_collector_id: cdktf.numberToTerraform(this._preferredCollectorId),
      related_device_id: cdktf.numberToTerraform(this._relatedDeviceId),
      resource_ids: cdktf.listMapper(dataLogicmonitorDeviceResourceIdsToTerraform, false)(this._resourceIds.internalValue),
      scan_config_id: cdktf.numberToTerraform(this._scanConfigId),
      synthetics_collector_ids: cdktf.numberToTerraform(this._syntheticsCollectorIds),
      system_properties: cdktf.listMapper(dataLogicmonitorDeviceSystemPropertiesToTerraform, false)(this._systemProperties.internalValue),
      to_delete_time_in_ms: cdktf.numberToTerraform(this._toDeleteTimeInMs),
      up_time_in_seconds: cdktf.numberToTerraform(this._upTimeInSeconds),
      updated_on: cdktf.numberToTerraform(this._updatedOn),
      user_permission: cdktf.stringToTerraform(this._userPermission),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_balanced_collector_group_id: {
        value: cdktf.numberToHclTerraform(this._autoBalancedCollectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceAutoPropertiesToHclTerraform, false)(this._autoProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceAutoPropertiesList",
      },
      auto_props_assigned_on: {
        value: cdktf.numberToHclTerraform(this._autoPropsAssignedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_props_updated_on: {
        value: cdktf.numberToHclTerraform(this._autoPropsUpdatedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_state: {
        value: cdktf.numberToHclTerraform(this._awsState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      azure_state: {
        value: cdktf.numberToHclTerraform(this._azureState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collector_description: {
        value: cdktf.stringToHclTerraform(this._collectorDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contains_multi_value: {
        value: cdktf.booleanToHclTerraform(this._containsMultiValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      created_on: {
        value: cdktf.numberToHclTerraform(this._createdOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_collector_id: {
        value: cdktf.numberToHclTerraform(this._currentCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_log_collector_id: {
        value: cdktf.numberToHclTerraform(this._currentLogCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceCustomPropertiesList",
      },
      deleted_time_in_ms: {
        value: cdktf.numberToHclTerraform(this._deletedTimeInMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.numberToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_alerting: {
        value: cdktf.booleanToHclTerraform(this._disableAlerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_netflow: {
        value: cdktf.booleanToHclTerraform(this._enableNetflow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_state: {
        value: cdktf.numberToHclTerraform(this._gcpState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_group_ids: {
        value: cdktf.stringToHclTerraform(this._hostGroupIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_status: {
        value: cdktf.stringToHclTerraform(this._hostStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inherited_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceInheritedPropertiesToHclTerraform, false)(this._inheritedProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceInheritedPropertiesList",
      },
      is_preferred_log_collector_configured: {
        value: cdktf.booleanToHclTerraform(this._isPreferredLogCollectorConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_data_time: {
        value: cdktf.numberToHclTerraform(this._lastDataTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_rawdata_time: {
        value: cdktf.numberToHclTerraform(this._lastRawdataTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_collector_id: {
        value: cdktf.numberToHclTerraform(this._logCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_stc_grp_and_sorted_c_p: {
        value: cdktf.booleanToHclTerraform(this._needStcGrpAndSortedCP),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netflow_collector_description: {
        value: cdktf.stringToHclTerraform(this._netflowCollectorDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_collector_group_id: {
        value: cdktf.numberToHclTerraform(this._netflowCollectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_collector_group_name: {
        value: cdktf.stringToHclTerraform(this._netflowCollectorGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_collector_id: {
        value: cdktf.numberToHclTerraform(this._netflowCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      op: {
        value: cdktf.stringToHclTerraform(this._op),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_collector_group_id: {
        value: cdktf.numberToHclTerraform(this._preferredCollectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_collector_group_name: {
        value: cdktf.stringToHclTerraform(this._preferredCollectorGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_collector_id: {
        value: cdktf.numberToHclTerraform(this._preferredCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      related_device_id: {
        value: cdktf.numberToHclTerraform(this._relatedDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_ids: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceResourceIdsToHclTerraform, false)(this._resourceIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceResourceIdsList",
      },
      scan_config_id: {
        value: cdktf.numberToHclTerraform(this._scanConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synthetics_collector_ids: {
        value: cdktf.numberToHclTerraform(this._syntheticsCollectorIds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_properties: {
        value: cdktf.listMapperHcl(dataLogicmonitorDeviceSystemPropertiesToHclTerraform, false)(this._systemProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDeviceSystemPropertiesList",
      },
      to_delete_time_in_ms: {
        value: cdktf.numberToHclTerraform(this._toDeleteTimeInMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_time_in_seconds: {
        value: cdktf.numberToHclTerraform(this._upTimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_on: {
        value: cdktf.numberToHclTerraform(this._updatedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
