// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#auto_balanced_collector_group_id Device#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#contains_multi_value Device#contains_multi_value}
  */
  readonly containsMultiValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#current_collector_id Device#current_collector_id}
  */
  readonly currentCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#current_log_collector_id Device#current_log_collector_id}
  */
  readonly currentLogCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#custom_properties Device#custom_properties}
  */
  readonly customProperties?: DeviceCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#description Device#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#device_type Device#device_type}
  */
  readonly deviceType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#disable_alerting Device#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#display_name Device#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#enable_netflow Device#enable_netflow}
  */
  readonly enableNetflow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#host_group_ids Device#host_group_ids}
  */
  readonly hostGroupIds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#is_preferred_log_collector_configured Device#is_preferred_log_collector_configured}
  */
  readonly isPreferredLogCollectorConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#link Device#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#log_collector_id Device#log_collector_id}
  */
  readonly logCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#name Device#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#need_stc_grp_and_sorted_c_p Device#need_stc_grp_and_sorted_c_p}
  */
  readonly needStcGrpAndSortedCP?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#netflow_collector_id Device#netflow_collector_id}
  */
  readonly netflowCollectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#op Device#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#preferred_collector_id Device#preferred_collector_id}
  */
  readonly preferredCollectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#related_device_id Device#related_device_id}
  */
  readonly relatedDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#resource_ids Device#resource_ids}
  */
  readonly resourceIds?: DeviceResourceIds[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#synthetics_collector_ids Device#synthetics_collector_ids}
  */
  readonly syntheticsCollectorIds?: number[];
}
export interface DeviceAutoProperties {
}

export function deviceAutoPropertiesToTerraform(struct?: DeviceAutoProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceAutoPropertiesToHclTerraform(struct?: DeviceAutoProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceAutoPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceAutoProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAutoProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DeviceAutoPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DeviceAutoPropertiesOutputReference {
    return new DeviceAutoPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#value Device#value}
  */
  readonly value?: string;
}

export function deviceCustomPropertiesToTerraform(struct?: DeviceCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceCustomPropertiesToHclTerraform(struct?: DeviceCustomProperties | cdktf.IResolvable): any {
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

export class DeviceCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeviceCustomProperties | cdktf.IResolvable | undefined) {
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

export class DeviceCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DeviceCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): DeviceCustomPropertiesOutputReference {
    return new DeviceCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceInheritedProperties {
}

export function deviceInheritedPropertiesToTerraform(struct?: DeviceInheritedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceInheritedPropertiesToHclTerraform(struct?: DeviceInheritedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceInheritedPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceInheritedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceInheritedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DeviceInheritedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DeviceInheritedPropertiesOutputReference {
    return new DeviceInheritedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceResourceIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#value Device#value}
  */
  readonly value?: string;
}

export function deviceResourceIdsToTerraform(struct?: DeviceResourceIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceResourceIdsToHclTerraform(struct?: DeviceResourceIds | cdktf.IResolvable): any {
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

export class DeviceResourceIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceResourceIds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeviceResourceIds | cdktf.IResolvable | undefined) {
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

export class DeviceResourceIdsList extends cdktf.ComplexList {
  public internalValue? : DeviceResourceIds[] | cdktf.IResolvable

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
  public get(index: number): DeviceResourceIdsOutputReference {
    return new DeviceResourceIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSystemProperties {
}

export function deviceSystemPropertiesToTerraform(struct?: DeviceSystemProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceSystemPropertiesToHclTerraform(struct?: DeviceSystemProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceSystemPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceSystemProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSystemProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DeviceSystemPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DeviceSystemPropertiesOutputReference {
    return new DeviceSystemPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device logicmonitor_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/device logicmonitor_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
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
    this._containsMultiValue = config.containsMultiValue;
    this._currentCollectorId = config.currentCollectorId;
    this._currentLogCollectorId = config.currentLogCollectorId;
    this._customProperties.internalValue = config.customProperties;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._disableAlerting = config.disableAlerting;
    this._displayName = config.displayName;
    this._enableNetflow = config.enableNetflow;
    this._hostGroupIds = config.hostGroupIds;
    this._isPreferredLogCollectorConfigured = config.isPreferredLogCollectorConfigured;
    this._link = config.link;
    this._logCollectorId = config.logCollectorId;
    this._name = config.name;
    this._needStcGrpAndSortedCP = config.needStcGrpAndSortedCP;
    this._netflowCollectorId = config.netflowCollectorId;
    this._op = config.op;
    this._preferredCollectorId = config.preferredCollectorId;
    this._relatedDeviceId = config.relatedDeviceId;
    this._resourceIds.internalValue = config.resourceIds;
    this._syntheticsCollectorIds = config.syntheticsCollectorIds;
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

  // auto_properties - computed: true, optional: false, required: false
  private _autoProperties = new DeviceAutoPropertiesList(this, "auto_properties", true);
  public get autoProperties() {
    return this._autoProperties;
  }

  // auto_props_assigned_on - computed: true, optional: false, required: false
  public get autoPropsAssignedOn() {
    return this.getNumberAttribute('auto_props_assigned_on');
  }

  // auto_props_updated_on - computed: true, optional: false, required: false
  public get autoPropsUpdatedOn() {
    return this.getNumberAttribute('auto_props_updated_on');
  }

  // aws_state - computed: true, optional: false, required: false
  public get awsState() {
    return this.getNumberAttribute('aws_state');
  }

  // azure_state - computed: true, optional: false, required: false
  public get azureState() {
    return this.getNumberAttribute('azure_state');
  }

  // collector_description - computed: true, optional: false, required: false
  public get collectorDescription() {
    return this.getStringAttribute('collector_description');
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
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
  private _customProperties = new DeviceCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DeviceCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // deleted_time_in_ms - computed: true, optional: false, required: false
  public get deletedTimeInMs() {
    return this.getNumberAttribute('deleted_time_in_ms');
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

  // gcp_state - computed: true, optional: false, required: false
  public get gcpState() {
    return this.getNumberAttribute('gcp_state');
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

  // host_status - computed: true, optional: false, required: false
  public get hostStatus() {
    return this.getStringAttribute('host_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited_properties - computed: true, optional: false, required: false
  private _inheritedProperties = new DeviceInheritedPropertiesList(this, "inherited_properties", true);
  public get inheritedProperties() {
    return this._inheritedProperties;
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

  // last_data_time - computed: true, optional: false, required: false
  public get lastDataTime() {
    return this.getNumberAttribute('last_data_time');
  }

  // last_rawdata_time - computed: true, optional: false, required: false
  public get lastRawdataTime() {
    return this.getNumberAttribute('last_rawdata_time');
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

  // netflow_collector_description - computed: true, optional: false, required: false
  public get netflowCollectorDescription() {
    return this.getStringAttribute('netflow_collector_description');
  }

  // netflow_collector_group_id - computed: true, optional: false, required: false
  public get netflowCollectorGroupId() {
    return this.getNumberAttribute('netflow_collector_group_id');
  }

  // netflow_collector_group_name - computed: true, optional: false, required: false
  public get netflowCollectorGroupName() {
    return this.getStringAttribute('netflow_collector_group_name');
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

  // preferred_collector_group_id - computed: true, optional: false, required: false
  public get preferredCollectorGroupId() {
    return this.getNumberAttribute('preferred_collector_group_id');
  }

  // preferred_collector_group_name - computed: true, optional: false, required: false
  public get preferredCollectorGroupName() {
    return this.getStringAttribute('preferred_collector_group_name');
  }

  // preferred_collector_id - computed: false, optional: false, required: true
  private _preferredCollectorId?: number; 
  public get preferredCollectorId() {
    return this.getNumberAttribute('preferred_collector_id');
  }
  public set preferredCollectorId(value: number) {
    this._preferredCollectorId = value;
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
  private _resourceIds = new DeviceResourceIdsList(this, "resource_ids", true);
  public get resourceIds() {
    return this._resourceIds;
  }
  public putResourceIds(value: DeviceResourceIds[] | cdktf.IResolvable) {
    this._resourceIds.internalValue = value;
  }
  public resetResourceIds() {
    this._resourceIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds.internalValue;
  }

  // scan_config_id - computed: true, optional: false, required: false
  public get scanConfigId() {
    return this.getNumberAttribute('scan_config_id');
  }

  // synthetics_collector_ids - computed: false, optional: true, required: false
  private _syntheticsCollectorIds?: number[]; 
  public get syntheticsCollectorIds() {
    return this.getNumberListAttribute('synthetics_collector_ids');
  }
  public set syntheticsCollectorIds(value: number[]) {
    this._syntheticsCollectorIds = value;
  }
  public resetSyntheticsCollectorIds() {
    this._syntheticsCollectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticsCollectorIdsInput() {
    return this._syntheticsCollectorIds;
  }

  // system_properties - computed: true, optional: false, required: false
  private _systemProperties = new DeviceSystemPropertiesList(this, "system_properties", true);
  public get systemProperties() {
    return this._systemProperties;
  }

  // to_delete_time_in_ms - computed: true, optional: false, required: false
  public get toDeleteTimeInMs() {
    return this.getNumberAttribute('to_delete_time_in_ms');
  }

  // up_time_in_seconds - computed: true, optional: false, required: false
  public get upTimeInSeconds() {
    return this.getNumberAttribute('up_time_in_seconds');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getNumberAttribute('updated_on');
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_balanced_collector_group_id: cdktf.numberToTerraform(this._autoBalancedCollectorGroupId),
      contains_multi_value: cdktf.booleanToTerraform(this._containsMultiValue),
      current_collector_id: cdktf.numberToTerraform(this._currentCollectorId),
      current_log_collector_id: cdktf.numberToTerraform(this._currentLogCollectorId),
      custom_properties: cdktf.listMapper(deviceCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.numberToTerraform(this._deviceType),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_netflow: cdktf.booleanToTerraform(this._enableNetflow),
      host_group_ids: cdktf.stringToTerraform(this._hostGroupIds),
      is_preferred_log_collector_configured: cdktf.booleanToTerraform(this._isPreferredLogCollectorConfigured),
      link: cdktf.stringToTerraform(this._link),
      log_collector_id: cdktf.numberToTerraform(this._logCollectorId),
      name: cdktf.stringToTerraform(this._name),
      need_stc_grp_and_sorted_c_p: cdktf.booleanToTerraform(this._needStcGrpAndSortedCP),
      netflow_collector_id: cdktf.numberToTerraform(this._netflowCollectorId),
      op: cdktf.stringToTerraform(this._op),
      preferred_collector_id: cdktf.numberToTerraform(this._preferredCollectorId),
      related_device_id: cdktf.numberToTerraform(this._relatedDeviceId),
      resource_ids: cdktf.listMapper(deviceResourceIdsToTerraform, false)(this._resourceIds.internalValue),
      synthetics_collector_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._syntheticsCollectorIds),
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
      contains_multi_value: {
        value: cdktf.booleanToHclTerraform(this._containsMultiValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cdktf.listMapperHcl(deviceCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeviceCustomPropertiesList",
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
      host_group_ids: {
        value: cdktf.stringToHclTerraform(this._hostGroupIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_preferred_log_collector_configured: {
        value: cdktf.booleanToHclTerraform(this._isPreferredLogCollectorConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cdktf.listMapperHcl(deviceResourceIdsToHclTerraform, false)(this._resourceIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeviceResourceIdsList",
      },
      synthetics_collector_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._syntheticsCollectorIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
