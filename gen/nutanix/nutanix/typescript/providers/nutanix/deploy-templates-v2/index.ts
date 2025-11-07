// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployTemplatesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#cluster_reference DeployTemplatesV2#cluster_reference}
  */
  readonly clusterReference: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ext_id DeployTemplatesV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#id DeployTemplatesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#number_of_vms DeployTemplatesV2#number_of_vms}
  */
  readonly numberOfVms: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#version_id DeployTemplatesV2#version_id}
  */
  readonly versionId?: string;
  /**
  * override_vm_config_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#override_vm_config_map DeployTemplatesV2#override_vm_config_map}
  */
  readonly overrideVmConfigMap?: DeployTemplatesV2OverrideVmConfigMap[] | cdktf.IResolvable;
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#map DeployTemplatesV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#boolean DeployTemplatesV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#integer DeployTemplatesV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#integer_list DeployTemplatesV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#object DeployTemplatesV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#string DeployTemplatesV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#string_list DeployTemplatesV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#map_of_strings DeployTemplatesV2#map_of_strings}
  */
  readonly mapOfStrings?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#name DeployTemplatesV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#key_value_pairs DeployTemplatesV2#key_value_pairs}
  */
  readonly keyValuePairs?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value?: string;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
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

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#custom_key_values DeployTemplatesV2#custom_key_values}
  */
  readonly customKeyValues?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#user_data DeployTemplatesV2#user_data}
  */
  readonly userData?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#datasource_type DeployTemplatesV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#metadata DeployTemplatesV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#cloud_init_script DeployTemplatesV2#cloud_init_script}
  */
  readonly cloudInitScript?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init_script: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._cloudInitScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitScript = this._cloudInitScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceType = undefined;
      this._metadata = undefined;
      this._cloudInitScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceType = value.datasourceType;
      this._metadata = value.metadata;
      this._cloudInitScript.internalValue = value.cloudInitScript;
    }
  }

  // datasource_type - computed: false, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // cloud_init_script - computed: false, optional: true, required: false
  private _cloudInitScript = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
    this._cloudInitScript.internalValue = value;
  }
  public resetCloudInitScript() {
    this._cloudInitScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitScriptInput() {
    return this._cloudInitScript.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#map DeployTemplatesV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#boolean DeployTemplatesV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#integer DeployTemplatesV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#integer_list DeployTemplatesV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#object DeployTemplatesV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#string DeployTemplatesV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#string_list DeployTemplatesV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#map_of_strings DeployTemplatesV2#map_of_strings}
  */
  readonly mapOfStrings?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#name DeployTemplatesV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#key_value_pairs DeployTemplatesV2#key_value_pairs}
  */
  readonly keyValuePairs?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value: string;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#custom_key_values DeployTemplatesV2#custom_key_values}
  */
  readonly customKeyValues?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#unattend_xml DeployTemplatesV2#unattend_xml}
  */
  readonly unattendXml?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._unattendXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unattendXml = this._unattendXml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._unattendXml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._unattendXml.internalValue = value.unattendXml;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // unattend_xml - computed: false, optional: true, required: false
  private _unattendXml = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
    this._unattendXml.internalValue = value;
  }
  public resetUnattendXml() {
    this._unattendXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendXmlInput() {
    return this._unattendXml.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#install_type DeployTemplatesV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#sysprep_script DeployTemplatesV2#sysprep_script}
  */
  readonly sysprepScript?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysprep_script: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._sysprepScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprepScript = this._sysprepScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installType = undefined;
      this._sysprepScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installType = value.installType;
      this._sysprepScript.internalValue = value.sysprepScript;
    }
  }

  // install_type - computed: true, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // sysprep_script - computed: false, optional: true, required: false
  private _sysprepScript = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
    this._sysprepScript.internalValue = value;
  }
  public resetSysprepScript() {
    this._sysprepScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepScriptInput() {
    return this._sysprepScript.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#cloud_init DeployTemplatesV2#cloud_init}
  */
  readonly cloudInit?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#sysprep DeployTemplatesV2#sysprep}
  */
  readonly sysprep?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit?.internalValue;
    }
    if (this._sysprep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprep = this._sysprep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = undefined;
      this._sysprep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = value.cloudInit;
      this._sysprep.internalValue = value.sysprep;
    }
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
    this._sysprep.internalValue = value;
  }
  public resetSysprep() {
    this._sysprep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapGuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#config DeployTemplatesV2#config}
  */
  readonly config?: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function deployTemplatesV2OverrideVmConfigMapGuestCustomizationToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapGuestCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomizationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapGuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapGuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapGuestCustomizationOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#is_connected DeployTemplatesV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#mac_address DeployTemplatesV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#model DeployTemplatesV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#num_queues DeployTemplatesV2#num_queues}
  */
  readonly numQueues?: number;
}

export function deployTemplatesV2OverrideVmConfigMapNicsBackingInfoToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    num_queues: cdktf.numberToTerraform(struct!.numQueues),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsBackingInfoToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_queues: {
      value: cdktf.numberToHclTerraform(struct!.numQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._numQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueues = this._numQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isConnected = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._numQueues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isConnected = value.isConnected;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._numQueues = value.numQueues;
    }
  }

  // is_connected - computed: false, optional: true, required: false
  private _isConnected?: boolean | cdktf.IResolvable; 
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
  public set isConnected(value: boolean | cdktf.IResolvable) {
    this._isConnected = value;
  }
  public resetIsConnected() {
    this._isConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectedInput() {
    return this._isConnected;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // num_queues - computed: false, optional: true, required: false
  private _numQueues?: number; 
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
  public set numQueues(value: number) {
    this._numQueues = value;
  }
  public resetNumQueues() {
    this._numQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueuesInput() {
    return this._numQueues;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#prefix_length DeployTemplatesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value?: string;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#prefix_length DeployTemplatesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value?: string;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#should_assign_ip DeployTemplatesV2#should_assign_ip}
  */
  readonly shouldAssignIp?: boolean | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ip_address DeployTemplatesV2#ip_address}
  */
  readonly ipAddress?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable;
  /**
  * secondary_ip_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#secondary_ip_address_list DeployTemplatesV2#secondary_ip_address_list}
  */
  readonly secondaryIpAddressList?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_assign_ip: cdktf.booleanToTerraform(struct!.shouldAssignIp),
    ip_address: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressToTerraform, true)(struct!.ipAddress),
    secondary_ip_address_list: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform, true)(struct!.secondaryIpAddressList),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_assign_ip: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAssignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressList",
    },
    secondary_ip_address_list: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform, true)(struct!.secondaryIpAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAssignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAssignIp = this._shouldAssignIp;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    if (this._secondaryIpAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAddressList = this._secondaryIpAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAssignIp = undefined;
      this._ipAddress.internalValue = undefined;
      this._secondaryIpAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAssignIp = value.shouldAssignIp;
      this._ipAddress.internalValue = value.ipAddress;
      this._secondaryIpAddressList.internalValue = value.secondaryIpAddressList;
    }
  }

  // should_assign_ip - computed: false, optional: true, required: false
  private _shouldAssignIp?: boolean | cdktf.IResolvable; 
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
  public set shouldAssignIp(value: boolean | cdktf.IResolvable) {
    this._shouldAssignIp = value;
  }
  public resetShouldAssignIp() {
    this._shouldAssignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAssignIpInput() {
    return this._shouldAssignIp;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // secondary_ip_address_list - computed: false, optional: true, required: false
  private _secondaryIpAddressList = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }
  public putSecondaryIpAddressList(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable) {
    this._secondaryIpAddressList.internalValue = value;
  }
  public resetSecondaryIpAddressList() {
    this._secondaryIpAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAddressListInput() {
    return this._secondaryIpAddressList.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#prefix_length DeployTemplatesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#value DeployTemplatesV2#value}
  */
  readonly value: string;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info {
  /**
  * learned_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#learned_ip_addresses DeployTemplatesV2#learned_ip_addresses}
  */
  readonly learnedIpAddresses?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learned_ip_addresses: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform, true)(struct!.learnedIpAddresses),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learned_ip_addresses: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform, true)(struct!.learnedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learnedIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnedIpAddresses = this._learnedIpAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = value.learnedIpAddresses;
    }
  }

  // learned_ip_addresses - computed: false, optional: true, required: false
  private _learnedIpAddresses = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
  public putLearnedIpAddresses(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable) {
    this._learnedIpAddresses.internalValue = value;
  }
  public resetLearnedIpAddresses() {
    this._learnedIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnedIpAddressesInput() {
    return this._learnedIpAddresses.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ext_id DeployTemplatesV2#ext_id}
  */
  readonly extId?: string;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: false, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ext_id DeployTemplatesV2#ext_id}
  */
  readonly extId?: string;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: false, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#network_function_nic_type DeployTemplatesV2#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#nic_type DeployTemplatesV2#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#should_allow_unknown_macs DeployTemplatesV2#should_allow_unknown_macs}
  */
  readonly shouldAllowUnknownMacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#trunked_vlans DeployTemplatesV2#trunked_vlans}
  */
  readonly trunkedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#vlan_mode DeployTemplatesV2#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ipv4_config DeployTemplatesV2#ipv4_config}
  */
  readonly ipv4Config?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config[] | cdktf.IResolvable;
  /**
  * ipv4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#ipv4_info DeployTemplatesV2#ipv4_info}
  */
  readonly ipv4Info?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info[] | cdktf.IResolvable;
  /**
  * network_function_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#network_function_chain DeployTemplatesV2#network_function_chain}
  */
  readonly networkFunctionChain?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#subnet DeployTemplatesV2#subnet}
  */
  readonly subnet?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_function_nic_type: cdktf.stringToTerraform(struct!.networkFunctionNicType),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    should_allow_unknown_macs: cdktf.booleanToTerraform(struct!.shouldAllowUnknownMacs),
    trunked_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.trunkedVlans),
    vlan_mode: cdktf.stringToTerraform(struct!.vlanMode),
    ipv4_config: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigToTerraform, true)(struct!.ipv4Config),
    ipv4_info: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoToTerraform, true)(struct!.ipv4Info),
    network_function_chain: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainToTerraform, true)(struct!.networkFunctionChain),
    subnet: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetToTerraform, true)(struct!.subnet),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_function_nic_type: {
      value: cdktf.stringToHclTerraform(struct!.networkFunctionNicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_allow_unknown_macs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowUnknownMacs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trunked_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.trunkedVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    vlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_config: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigToHclTerraform, true)(struct!.ipv4Config),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigList",
    },
    ipv4_info: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoToHclTerraform, true)(struct!.ipv4Info),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoList",
    },
    network_function_chain: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainToHclTerraform, true)(struct!.networkFunctionChain),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainList",
    },
    subnet: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionNicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionNicType = this._networkFunctionNicType;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._shouldAllowUnknownMacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowUnknownMacs = this._shouldAllowUnknownMacs;
    }
    if (this._trunkedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkedVlans = this._trunkedVlans;
    }
    if (this._vlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMode = this._vlanMode;
    }
    if (this._ipv4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Config = this._ipv4Config?.internalValue;
    }
    if (this._ipv4Info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Info = this._ipv4Info?.internalValue;
    }
    if (this._networkFunctionChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChain = this._networkFunctionChain?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._shouldAllowUnknownMacs = undefined;
      this._trunkedVlans = undefined;
      this._vlanMode = undefined;
      this._ipv4Config.internalValue = undefined;
      this._ipv4Info.internalValue = undefined;
      this._networkFunctionChain.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = value.networkFunctionNicType;
      this._nicType = value.nicType;
      this._shouldAllowUnknownMacs = value.shouldAllowUnknownMacs;
      this._trunkedVlans = value.trunkedVlans;
      this._vlanMode = value.vlanMode;
      this._ipv4Config.internalValue = value.ipv4Config;
      this._ipv4Info.internalValue = value.ipv4Info;
      this._networkFunctionChain.internalValue = value.networkFunctionChain;
      this._subnet.internalValue = value.subnet;
    }
  }

  // network_function_nic_type - computed: false, optional: true, required: false
  private _networkFunctionNicType?: string; 
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }
  public set networkFunctionNicType(value: string) {
    this._networkFunctionNicType = value;
  }
  public resetNetworkFunctionNicType() {
    this._networkFunctionNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionNicTypeInput() {
    return this._networkFunctionNicType;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // should_allow_unknown_macs - computed: false, optional: true, required: false
  private _shouldAllowUnknownMacs?: boolean | cdktf.IResolvable; 
  public get shouldAllowUnknownMacs() {
    return this.getBooleanAttribute('should_allow_unknown_macs');
  }
  public set shouldAllowUnknownMacs(value: boolean | cdktf.IResolvable) {
    this._shouldAllowUnknownMacs = value;
  }
  public resetShouldAllowUnknownMacs() {
    this._shouldAllowUnknownMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowUnknownMacsInput() {
    return this._shouldAllowUnknownMacs;
  }

  // trunked_vlans - computed: false, optional: true, required: false
  private _trunkedVlans?: number[]; 
  public get trunkedVlans() {
    return this.getNumberListAttribute('trunked_vlans');
  }
  public set trunkedVlans(value: number[]) {
    this._trunkedVlans = value;
  }
  public resetTrunkedVlans() {
    this._trunkedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkedVlansInput() {
    return this._trunkedVlans;
  }

  // vlan_mode - computed: false, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // ipv4_config - computed: false, optional: true, required: false
  private _ipv4Config = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // ipv4_info - computed: false, optional: true, required: false
  private _ipv4Info = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }
  public putIpv4Info(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoIpv4Info[] | cdktf.IResolvable) {
    this._ipv4Info.internalValue = value;
  }
  public resetIpv4Info() {
    this._ipv4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InfoInput() {
    return this._ipv4Info.internalValue;
  }

  // network_function_chain - computed: false, optional: true, required: false
  private _networkFunctionChain = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }
  public putNetworkFunctionChain(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable) {
    this._networkFunctionChain.internalValue = value;
  }
  public resetNetworkFunctionChain() {
    this._networkFunctionChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainInput() {
    return this._networkFunctionChain.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMapNics {
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#backing_info DeployTemplatesV2#backing_info}
  */
  readonly backingInfo?: DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#network_info DeployTemplatesV2#network_info}
  */
  readonly networkInfo?: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapNicsToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_info: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsBackingInfoToTerraform, true)(struct!.backingInfo),
    network_info: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function deployTemplatesV2OverrideVmConfigMapNicsToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMapNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_info: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoList",
    },
    network_info: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMapNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMapNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = undefined;
      this._networkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = value.backingInfo;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new DeployTemplatesV2OverrideVmConfigMapNicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: DeployTemplatesV2OverrideVmConfigMapNicsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: DeployTemplatesV2OverrideVmConfigMapNicsNetworkInfo[] | cdktf.IResolvable) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapNicsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMapNics[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapNicsOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplatesV2OverrideVmConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#memory_size_bytes DeployTemplatesV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#name DeployTemplatesV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#num_cores_per_socket DeployTemplatesV2#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#num_sockets DeployTemplatesV2#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#num_threads_per_core DeployTemplatesV2#num_threads_per_core}
  */
  readonly numThreadsPerCore?: number;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#guest_customization DeployTemplatesV2#guest_customization}
  */
  readonly guestCustomization?: DeployTemplatesV2OverrideVmConfigMapGuestCustomization[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#nics DeployTemplatesV2#nics}
  */
  readonly nics?: DeployTemplatesV2OverrideVmConfigMapNics[] | cdktf.IResolvable;
}

export function deployTemplatesV2OverrideVmConfigMapToTerraform(struct?: DeployTemplatesV2OverrideVmConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_size_bytes: cdktf.numberToTerraform(struct!.memorySizeBytes),
    name: cdktf.stringToTerraform(struct!.name),
    num_cores_per_socket: cdktf.numberToTerraform(struct!.numCoresPerSocket),
    num_sockets: cdktf.numberToTerraform(struct!.numSockets),
    num_threads_per_core: cdktf.numberToTerraform(struct!.numThreadsPerCore),
    guest_customization: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapGuestCustomizationToTerraform, true)(struct!.guestCustomization),
    nics: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapNicsToTerraform, true)(struct!.nics),
  }
}


export function deployTemplatesV2OverrideVmConfigMapToHclTerraform(struct?: DeployTemplatesV2OverrideVmConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numCoresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_sockets: {
      value: cdktf.numberToHclTerraform(struct!.numSockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.numThreadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_customization: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapGuestCustomizationToHclTerraform, true)(struct!.guestCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapGuestCustomizationList",
    },
    nics: {
      value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapNicsToHclTerraform, true)(struct!.nics),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplatesV2OverrideVmConfigMapNicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplatesV2OverrideVmConfigMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplatesV2OverrideVmConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memorySizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeBytes = this._memorySizeBytes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numCoresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCoresPerSocket = this._numCoresPerSocket;
    }
    if (this._numSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSockets = this._numSockets;
    }
    if (this._numThreadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.numThreadsPerCore = this._numThreadsPerCore;
    }
    if (this._guestCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestCustomization = this._guestCustomization?.internalValue;
    }
    if (this._nics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplatesV2OverrideVmConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memorySizeBytes = undefined;
      this._name = undefined;
      this._numCoresPerSocket = undefined;
      this._numSockets = undefined;
      this._numThreadsPerCore = undefined;
      this._guestCustomization.internalValue = undefined;
      this._nics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memorySizeBytes = value.memorySizeBytes;
      this._name = value.name;
      this._numCoresPerSocket = value.numCoresPerSocket;
      this._numSockets = value.numSockets;
      this._numThreadsPerCore = value.numThreadsPerCore;
      this._guestCustomization.internalValue = value.guestCustomization;
      this._nics.internalValue = value.nics;
    }
  }

  // memory_size_bytes - computed: false, optional: true, required: false
  private _memorySizeBytes?: number; 
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }
  public set memorySizeBytes(value: number) {
    this._memorySizeBytes = value;
  }
  public resetMemorySizeBytes() {
    this._memorySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeBytesInput() {
    return this._memorySizeBytes;
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

  // num_cores_per_socket - computed: false, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_sockets - computed: false, optional: true, required: false
  private _numSockets?: number; 
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }
  public set numSockets(value: number) {
    this._numSockets = value;
  }
  public resetNumSockets() {
    this._numSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSocketsInput() {
    return this._numSockets;
  }

  // num_threads_per_core - computed: false, optional: true, required: false
  private _numThreadsPerCore?: number; 
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }
  public set numThreadsPerCore(value: number) {
    this._numThreadsPerCore = value;
  }
  public resetNumThreadsPerCore() {
    this._numThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsPerCoreInput() {
    return this._numThreadsPerCore;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new DeployTemplatesV2OverrideVmConfigMapGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: DeployTemplatesV2OverrideVmConfigMapGuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new DeployTemplatesV2OverrideVmConfigMapNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: DeployTemplatesV2OverrideVmConfigMapNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }
}

export class DeployTemplatesV2OverrideVmConfigMapList extends cdktf.ComplexList {
  public internalValue? : DeployTemplatesV2OverrideVmConfigMap[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplatesV2OverrideVmConfigMapOutputReference {
    return new DeployTemplatesV2OverrideVmConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2 nutanix_deploy_templates_v2}
*/
export class DeployTemplatesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_deploy_templates_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployTemplatesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployTemplatesV2 to import
  * @param importFromId The id of the existing DeployTemplatesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployTemplatesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_deploy_templates_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/deploy_templates_v2 nutanix_deploy_templates_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployTemplatesV2Config
  */
  public constructor(scope: Construct, id: string, config: DeployTemplatesV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_deploy_templates_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterReference = config.clusterReference;
    this._extId = config.extId;
    this._id = config.id;
    this._numberOfVms = config.numberOfVms;
    this._versionId = config.versionId;
    this._overrideVmConfigMap.internalValue = config.overrideVmConfigMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_reference - computed: false, optional: false, required: true
  private _clusterReference?: string; 
  public get clusterReference() {
    return this.getStringAttribute('cluster_reference');
  }
  public set clusterReference(value: string) {
    this._clusterReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterReferenceInput() {
    return this._clusterReference;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // number_of_vms - computed: false, optional: false, required: true
  private _numberOfVms?: number; 
  public get numberOfVms() {
    return this.getNumberAttribute('number_of_vms');
  }
  public set numberOfVms(value: number) {
    this._numberOfVms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVmsInput() {
    return this._numberOfVms;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // override_vm_config_map - computed: false, optional: true, required: false
  private _overrideVmConfigMap = new DeployTemplatesV2OverrideVmConfigMapList(this, "override_vm_config_map", false);
  public get overrideVmConfigMap() {
    return this._overrideVmConfigMap;
  }
  public putOverrideVmConfigMap(value: DeployTemplatesV2OverrideVmConfigMap[] | cdktf.IResolvable) {
    this._overrideVmConfigMap.internalValue = value;
  }
  public resetOverrideVmConfigMap() {
    this._overrideVmConfigMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVmConfigMapInput() {
    return this._overrideVmConfigMap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_reference: cdktf.stringToTerraform(this._clusterReference),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      number_of_vms: cdktf.numberToTerraform(this._numberOfVms),
      version_id: cdktf.stringToTerraform(this._versionId),
      override_vm_config_map: cdktf.listMapper(deployTemplatesV2OverrideVmConfigMapToTerraform, true)(this._overrideVmConfigMap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_reference: {
        value: cdktf.stringToHclTerraform(this._clusterReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      number_of_vms: {
        value: cdktf.numberToHclTerraform(this._numberOfVms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_vm_config_map: {
        value: cdktf.listMapperHcl(deployTemplatesV2OverrideVmConfigMapToHclTerraform, true)(this._overrideVmConfigMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeployTemplatesV2OverrideVmConfigMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
