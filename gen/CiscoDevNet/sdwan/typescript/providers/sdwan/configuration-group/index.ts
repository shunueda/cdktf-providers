// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#description ConfigurationGroup#description}
  */
  readonly description: string;
  /**
  * List of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#devices ConfigurationGroup#devices}
  */
  readonly devices?: ConfigurationGroupDevices[] | cdktf.IResolvable;
  /**
  * List of feature profile IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#feature_profile_ids ConfigurationGroup#feature_profile_ids}
  */
  readonly featureProfileIds?: string[];
  /**
  * List of all associated feature versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#feature_versions ConfigurationGroup#feature_versions}
  */
  readonly featureVersions?: string[];
  /**
  * The name of the configuration group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#name ConfigurationGroup#name}
  */
  readonly name: string;
  /**
  * Type of solution
  *   - Choices: `mobility`, `sdwan`, `nfvirtual`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#solution ConfigurationGroup#solution}
  */
  readonly solution: string;
  /**
  * List of topology device types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#topology_devices ConfigurationGroup#topology_devices}
  */
  readonly topologyDevices?: ConfigurationGroupTopologyDevices[] | cdktf.IResolvable;
  /**
  * Number of devices per site
  *   - Range: `1`-`20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#topology_site_devices ConfigurationGroup#topology_site_devices}
  */
  readonly topologySiteDevices?: number;
}
export interface ConfigurationGroupDevicesVariables {
  /**
  * Use this instead of `value` in case value is of type `List`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#list_value ConfigurationGroup#list_value}
  */
  readonly listValue?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#name ConfigurationGroup#name}
  */
  readonly name: string;
  /**
  * Variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#value ConfigurationGroup#value}
  */
  readonly value?: string;
}

export function configurationGroupDevicesVariablesToTerraform(struct?: ConfigurationGroupDevicesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function configurationGroupDevicesVariablesToHclTerraform(struct?: ConfigurationGroupDevicesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listValue),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ConfigurationGroupDevicesVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationGroupDevicesVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listValue = this._listValue;
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

  public set internalValue(value: ConfigurationGroupDevicesVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listValue = undefined;
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
      this._listValue = value.listValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // list_value - computed: false, optional: true, required: false
  private _listValue?: string[]; 
  public get listValue() {
    return this.getListAttribute('list_value');
  }
  public set listValue(value: string[]) {
    this._listValue = value;
  }
  public resetListValue() {
    this._listValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listValueInput() {
    return this._listValue;
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

export class ConfigurationGroupDevicesVariablesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationGroupDevicesVariables[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationGroupDevicesVariablesOutputReference {
    return new ConfigurationGroupDevicesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationGroupDevices {
  /**
  * Deploy to device if enabled.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#deploy ConfigurationGroup#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#id ConfigurationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#variables ConfigurationGroup#variables}
  */
  readonly variables?: ConfigurationGroupDevicesVariables[] | cdktf.IResolvable;
}

export function configurationGroupDevicesToTerraform(struct?: ConfigurationGroupDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy: cdktf.booleanToTerraform(struct!.deploy),
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.listMapper(configurationGroupDevicesVariablesToTerraform, false)(struct!.variables),
  }
}


export function configurationGroupDevicesToHclTerraform(struct?: ConfigurationGroupDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy: {
      value: cdktf.booleanToHclTerraform(struct!.deploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(configurationGroupDevicesVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigurationGroupDevicesVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationGroupDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationGroupDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploy = this._deploy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationGroupDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploy = undefined;
      this._id = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploy = value.deploy;
      this._id = value.id;
      this._variables.internalValue = value.variables;
    }
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // id - computed: false, optional: true, required: false
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

  // variables - computed: false, optional: true, required: false
  private _variables = new ConfigurationGroupDevicesVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ConfigurationGroupDevicesVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ConfigurationGroupDevicesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationGroupDevices[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationGroupDevicesOutputReference {
    return new ConfigurationGroupDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationGroupTopologyDevicesUnsupportedFeatures {
  /**
  * Parcel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#parcel_id ConfigurationGroup#parcel_id}
  */
  readonly parcelId?: string;
  /**
  * Parcel type
  *   - Choices: `wan/vpn/interface/gre`, `wan/vpn/interface/ethernet`, `wan/vpn/interface/cellular`, `wan/vpn/interface/ipsec`, `wan/vpn/interface/serial`, `route-policy`, `routing/bgp`, `routing/ospf`, `lan/vpn/interface/ethernet`, `lan/vpn/interface/svi`, `lan/vpn/interface/ipsec`, `lan/vpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#parcel_type ConfigurationGroup#parcel_type}
  */
  readonly parcelType?: string;
}

export function configurationGroupTopologyDevicesUnsupportedFeaturesToTerraform(struct?: ConfigurationGroupTopologyDevicesUnsupportedFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parcel_id: cdktf.stringToTerraform(struct!.parcelId),
    parcel_type: cdktf.stringToTerraform(struct!.parcelType),
  }
}


export function configurationGroupTopologyDevicesUnsupportedFeaturesToHclTerraform(struct?: ConfigurationGroupTopologyDevicesUnsupportedFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parcel_id: {
      value: cdktf.stringToHclTerraform(struct!.parcelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parcel_type: {
      value: cdktf.stringToHclTerraform(struct!.parcelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationGroupTopologyDevicesUnsupportedFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationGroupTopologyDevicesUnsupportedFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parcelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parcelId = this._parcelId;
    }
    if (this._parcelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parcelType = this._parcelType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationGroupTopologyDevicesUnsupportedFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parcelId = undefined;
      this._parcelType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parcelId = value.parcelId;
      this._parcelType = value.parcelType;
    }
  }

  // parcel_id - computed: false, optional: true, required: false
  private _parcelId?: string; 
  public get parcelId() {
    return this.getStringAttribute('parcel_id');
  }
  public set parcelId(value: string) {
    this._parcelId = value;
  }
  public resetParcelId() {
    this._parcelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parcelIdInput() {
    return this._parcelId;
  }

  // parcel_type - computed: false, optional: true, required: false
  private _parcelType?: string; 
  public get parcelType() {
    return this.getStringAttribute('parcel_type');
  }
  public set parcelType(value: string) {
    this._parcelType = value;
  }
  public resetParcelType() {
    this._parcelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parcelTypeInput() {
    return this._parcelType;
  }
}

export class ConfigurationGroupTopologyDevicesUnsupportedFeaturesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationGroupTopologyDevicesUnsupportedFeatures[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationGroupTopologyDevicesUnsupportedFeaturesOutputReference {
    return new ConfigurationGroupTopologyDevicesUnsupportedFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationGroupTopologyDevices {
  /**
  * Criteria attribute
  *   - Choices: `tag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#criteria_attribute ConfigurationGroup#criteria_attribute}
  */
  readonly criteriaAttribute: string;
  /**
  * Criteria value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#criteria_value ConfigurationGroup#criteria_value}
  */
  readonly criteriaValue?: string;
  /**
  * List of unsupported features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#unsupported_features ConfigurationGroup#unsupported_features}
  */
  readonly unsupportedFeatures?: ConfigurationGroupTopologyDevicesUnsupportedFeatures[] | cdktf.IResolvable;
}

export function configurationGroupTopologyDevicesToTerraform(struct?: ConfigurationGroupTopologyDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria_attribute: cdktf.stringToTerraform(struct!.criteriaAttribute),
    criteria_value: cdktf.stringToTerraform(struct!.criteriaValue),
    unsupported_features: cdktf.listMapper(configurationGroupTopologyDevicesUnsupportedFeaturesToTerraform, false)(struct!.unsupportedFeatures),
  }
}


export function configurationGroupTopologyDevicesToHclTerraform(struct?: ConfigurationGroupTopologyDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria_attribute: {
      value: cdktf.stringToHclTerraform(struct!.criteriaAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria_value: {
      value: cdktf.stringToHclTerraform(struct!.criteriaValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsupported_features: {
      value: cdktf.listMapperHcl(configurationGroupTopologyDevicesUnsupportedFeaturesToHclTerraform, false)(struct!.unsupportedFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationGroupTopologyDevicesUnsupportedFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationGroupTopologyDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationGroupTopologyDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteriaAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaAttribute = this._criteriaAttribute;
    }
    if (this._criteriaValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaValue = this._criteriaValue;
    }
    if (this._unsupportedFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedFeatures = this._unsupportedFeatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationGroupTopologyDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteriaAttribute = undefined;
      this._criteriaValue = undefined;
      this._unsupportedFeatures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteriaAttribute = value.criteriaAttribute;
      this._criteriaValue = value.criteriaValue;
      this._unsupportedFeatures.internalValue = value.unsupportedFeatures;
    }
  }

  // criteria_attribute - computed: false, optional: false, required: true
  private _criteriaAttribute?: string; 
  public get criteriaAttribute() {
    return this.getStringAttribute('criteria_attribute');
  }
  public set criteriaAttribute(value: string) {
    this._criteriaAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaAttributeInput() {
    return this._criteriaAttribute;
  }

  // criteria_value - computed: false, optional: true, required: false
  private _criteriaValue?: string; 
  public get criteriaValue() {
    return this.getStringAttribute('criteria_value');
  }
  public set criteriaValue(value: string) {
    this._criteriaValue = value;
  }
  public resetCriteriaValue() {
    this._criteriaValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaValueInput() {
    return this._criteriaValue;
  }

  // unsupported_features - computed: false, optional: true, required: false
  private _unsupportedFeatures = new ConfigurationGroupTopologyDevicesUnsupportedFeaturesList(this, "unsupported_features", false);
  public get unsupportedFeatures() {
    return this._unsupportedFeatures;
  }
  public putUnsupportedFeatures(value: ConfigurationGroupTopologyDevicesUnsupportedFeatures[] | cdktf.IResolvable) {
    this._unsupportedFeatures.internalValue = value;
  }
  public resetUnsupportedFeatures() {
    this._unsupportedFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedFeaturesInput() {
    return this._unsupportedFeatures.internalValue;
  }
}

export class ConfigurationGroupTopologyDevicesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationGroupTopologyDevices[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationGroupTopologyDevicesOutputReference {
    return new ConfigurationGroupTopologyDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group sdwan_configuration_group}
*/
export class ConfigurationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_configuration_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationGroup to import
  * @param importFromId The id of the existing ConfigurationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_configuration_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/configuration_group sdwan_configuration_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_configuration_group',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._devices.internalValue = config.devices;
    this._featureProfileIds = config.featureProfileIds;
    this._featureVersions = config.featureVersions;
    this._name = config.name;
    this._solution = config.solution;
    this._topologyDevices.internalValue = config.topologyDevices;
    this._topologySiteDevices = config.topologySiteDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new ConfigurationGroupDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: ConfigurationGroupDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // feature_profile_ids - computed: false, optional: true, required: false
  private _featureProfileIds?: string[]; 
  public get featureProfileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_profile_ids'));
  }
  public set featureProfileIds(value: string[]) {
    this._featureProfileIds = value;
  }
  public resetFeatureProfileIds() {
    this._featureProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdsInput() {
    return this._featureProfileIds;
  }

  // feature_versions - computed: false, optional: true, required: false
  private _featureVersions?: string[]; 
  public get featureVersions() {
    return this.getListAttribute('feature_versions');
  }
  public set featureVersions(value: string[]) {
    this._featureVersions = value;
  }
  public resetFeatureVersions() {
    this._featureVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureVersionsInput() {
    return this._featureVersions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // solution - computed: false, optional: false, required: true
  private _solution?: string; 
  public get solution() {
    return this.getStringAttribute('solution');
  }
  public set solution(value: string) {
    this._solution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionInput() {
    return this._solution;
  }

  // topology_devices - computed: false, optional: true, required: false
  private _topologyDevices = new ConfigurationGroupTopologyDevicesList(this, "topology_devices", false);
  public get topologyDevices() {
    return this._topologyDevices;
  }
  public putTopologyDevices(value: ConfigurationGroupTopologyDevices[] | cdktf.IResolvable) {
    this._topologyDevices.internalValue = value;
  }
  public resetTopologyDevices() {
    this._topologyDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyDevicesInput() {
    return this._topologyDevices.internalValue;
  }

  // topology_site_devices - computed: false, optional: true, required: false
  private _topologySiteDevices?: number; 
  public get topologySiteDevices() {
    return this.getNumberAttribute('topology_site_devices');
  }
  public set topologySiteDevices(value: number) {
    this._topologySiteDevices = value;
  }
  public resetTopologySiteDevices() {
    this._topologySiteDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySiteDevicesInput() {
    return this._topologySiteDevices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      devices: cdktf.listMapper(configurationGroupDevicesToTerraform, false)(this._devices.internalValue),
      feature_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureProfileIds),
      feature_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureVersions),
      name: cdktf.stringToTerraform(this._name),
      solution: cdktf.stringToTerraform(this._solution),
      topology_devices: cdktf.listMapper(configurationGroupTopologyDevicesToTerraform, false)(this._topologyDevices.internalValue),
      topology_site_devices: cdktf.numberToTerraform(this._topologySiteDevices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(configurationGroupDevicesToHclTerraform, false)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationGroupDevicesList",
      },
      feature_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      feature_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solution: {
        value: cdktf.stringToHclTerraform(this._solution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_devices: {
        value: cdktf.listMapperHcl(configurationGroupTopologyDevicesToHclTerraform, false)(this._topologyDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationGroupTopologyDevicesList",
      },
      topology_site_devices: {
        value: cdktf.numberToHclTerraform(this._topologySiteDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
