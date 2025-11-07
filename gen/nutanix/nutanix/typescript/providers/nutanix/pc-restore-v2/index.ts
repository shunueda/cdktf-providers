// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcRestoreV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ext_id PcRestoreV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#id PcRestoreV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#restorable_domain_manager_ext_id PcRestoreV2#restorable_domain_manager_ext_id}
  */
  readonly restorableDomainManagerExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#restore_source_ext_id PcRestoreV2#restore_source_ext_id}
  */
  readonly restoreSourceExtId: string;
  /**
  * domain_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#domain_manager PcRestoreV2#domain_manager}
  */
  readonly domainManager: PcRestoreV2DomainManager;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#timeouts PcRestoreV2#timeouts}
  */
  readonly timeouts?: PcRestoreV2Timeouts;
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#map PcRestoreV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#boolean PcRestoreV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#integer PcRestoreV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#integer_list PcRestoreV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#object PcRestoreV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#string PcRestoreV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#string_list PcRestoreV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#map_of_strings PcRestoreV2#map_of_strings}
  */
  readonly mapOfStrings?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
    map_of_strings: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
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
  private _mapOfStrings = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#name PcRestoreV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
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
  private _value = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#key_value_pairs PcRestoreV2#key_value_pairs}
  */
  readonly keyValuePairs?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
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
  private _keyValuePairs = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value?: string;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#custom_key_values PcRestoreV2#custom_key_values}
  */
  readonly customKeyValues?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#user_data PcRestoreV2#user_data}
  */
  readonly userData?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript | cdktf.IResolvable | undefined) {
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
  private _customKeyValues = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
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
  private _userData = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptUserData[] | cdktf.IResolvable) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#datasource_type PcRestoreV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#metadata PcRestoreV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#cloud_init_script PcRestoreV2#cloud_init_script}
  */
  readonly cloudInitScript?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig | cdktf.IResolvable | undefined) {
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
  private _cloudInitScript = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigCloudInitScript[] | cdktf.IResolvable) {
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigOutputReference {
    return new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#provider_type PcRestoreV2#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#provisioning_type PcRestoreV2#provisioning_type}
  */
  readonly provisioningType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#type PcRestoreV2#type}
  */
  readonly type?: string;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoOutputReference | PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_type: cdktf.stringToTerraform(struct!.providerType),
    provisioning_type: cdktf.stringToTerraform(struct!.provisioningType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoOutputReference | PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_type: {
      value: cdktf.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning_type: {
      value: cdktf.stringToHclTerraform(struct!.provisioningType),
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

export class PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    if (this._provisioningType !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningType = this._provisioningType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._providerType = undefined;
      this._provisioningType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._providerType = value.providerType;
      this._provisioningType = value.provisioningType;
      this._type = value.type;
    }
  }

  // provider_type - computed: true, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // provisioning_type - computed: true, optional: true, required: false
  private _provisioningType?: string; 
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }
  public set provisioningType(value: string) {
    this._provisioningType = value;
  }
  public resetProvisioningType() {
    this._provisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTypeInput() {
    return this._provisioningType;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface PcRestoreV2DomainManagerConfigBootstrapConfig {
  /**
  * cloud_init_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#cloud_init_config PcRestoreV2#cloud_init_config}
  */
  readonly cloudInitConfig?: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig[] | cdktf.IResolvable;
  /**
  * environment_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#environment_info PcRestoreV2#environment_info}
  */
  readonly environmentInfo?: PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo;
}

export function pcRestoreV2DomainManagerConfigBootstrapConfigToTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigOutputReference | PcRestoreV2DomainManagerConfigBootstrapConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init_config: cdktf.listMapper(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigToTerraform, true)(struct!.cloudInitConfig),
    environment_info: pcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoToTerraform(struct!.environmentInfo),
  }
}


export function pcRestoreV2DomainManagerConfigBootstrapConfigToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBootstrapConfigOutputReference | PcRestoreV2DomainManagerConfigBootstrapConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init_config: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigToHclTerraform, true)(struct!.cloudInitConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigList",
    },
    environment_info: {
      value: pcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoToHclTerraform(struct!.environmentInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBootstrapConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerConfigBootstrapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInitConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitConfig = this._cloudInitConfig?.internalValue;
    }
    if (this._environmentInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentInfo = this._environmentInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfigBootstrapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudInitConfig.internalValue = undefined;
      this._environmentInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudInitConfig.internalValue = value.cloudInitConfig;
      this._environmentInfo.internalValue = value.environmentInfo;
    }
  }

  // cloud_init_config - computed: false, optional: true, required: false
  private _cloudInitConfig = new PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfigList(this, "cloud_init_config", false);
  public get cloudInitConfig() {
    return this._cloudInitConfig;
  }
  public putCloudInitConfig(value: PcRestoreV2DomainManagerConfigBootstrapConfigCloudInitConfig[] | cdktf.IResolvable) {
    this._cloudInitConfig.internalValue = value;
  }
  public resetCloudInitConfig() {
    this._cloudInitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitConfigInput() {
    return this._cloudInitConfig.internalValue;
  }

  // environment_info - computed: false, optional: true, required: false
  private _environmentInfo = new PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfoOutputReference(this, "environment_info");
  public get environmentInfo() {
    return this._environmentInfo;
  }
  public putEnvironmentInfo(value: PcRestoreV2DomainManagerConfigBootstrapConfigEnvironmentInfo) {
    this._environmentInfo.internalValue = value;
  }
  public resetEnvironmentInfo() {
    this._environmentInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInfoInput() {
    return this._environmentInfo.internalValue;
  }
}
export interface PcRestoreV2DomainManagerConfigBuildInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#version PcRestoreV2#version}
  */
  readonly version?: string;
}

export function pcRestoreV2DomainManagerConfigBuildInfoToTerraform(struct?: PcRestoreV2DomainManagerConfigBuildInfoOutputReference | PcRestoreV2DomainManagerConfigBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function pcRestoreV2DomainManagerConfigBuildInfoToHclTerraform(struct?: PcRestoreV2DomainManagerConfigBuildInfoOutputReference | PcRestoreV2DomainManagerConfigBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigBuildInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerConfigBuildInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfigBuildInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface PcRestoreV2DomainManagerConfigCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#password PcRestoreV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#username PcRestoreV2#username}
  */
  readonly username: string;
}

export function pcRestoreV2DomainManagerConfigCredentialsToTerraform(struct?: PcRestoreV2DomainManagerConfigCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pcRestoreV2DomainManagerConfigCredentialsToHclTerraform(struct?: PcRestoreV2DomainManagerConfigCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfigCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class PcRestoreV2DomainManagerConfigCredentialsList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigCredentials[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigCredentialsOutputReference {
    return new PcRestoreV2DomainManagerConfigCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfigResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#container_ext_ids PcRestoreV2#container_ext_ids}
  */
  readonly containerExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#data_disk_size_bytes PcRestoreV2#data_disk_size_bytes}
  */
  readonly dataDiskSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#memory_size_bytes PcRestoreV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#num_vcpus PcRestoreV2#num_vcpus}
  */
  readonly numVcpus?: number;
}

export function pcRestoreV2DomainManagerConfigResourceConfigToTerraform(struct?: PcRestoreV2DomainManagerConfigResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerExtIds),
    data_disk_size_bytes: cdktf.numberToTerraform(struct!.dataDiskSizeBytes),
    memory_size_bytes: cdktf.numberToTerraform(struct!.memorySizeBytes),
    num_vcpus: cdktf.numberToTerraform(struct!.numVcpus),
  }
}


export function pcRestoreV2DomainManagerConfigResourceConfigToHclTerraform(struct?: PcRestoreV2DomainManagerConfigResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_ext_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerExtIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.numVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigResourceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfigResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerExtIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerExtIds = this._containerExtIds;
    }
    if (this._dataDiskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSizeBytes = this._dataDiskSizeBytes;
    }
    if (this._memorySizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeBytes = this._memorySizeBytes;
    }
    if (this._numVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVcpus = this._numVcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfigResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerExtIds = undefined;
      this._dataDiskSizeBytes = undefined;
      this._memorySizeBytes = undefined;
      this._numVcpus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerExtIds = value.containerExtIds;
      this._dataDiskSizeBytes = value.dataDiskSizeBytes;
      this._memorySizeBytes = value.memorySizeBytes;
      this._numVcpus = value.numVcpus;
    }
  }

  // container_ext_ids - computed: true, optional: true, required: false
  private _containerExtIds?: string[]; 
  public get containerExtIds() {
    return this.getListAttribute('container_ext_ids');
  }
  public set containerExtIds(value: string[]) {
    this._containerExtIds = value;
  }
  public resetContainerExtIds() {
    this._containerExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExtIdsInput() {
    return this._containerExtIds;
  }

  // data_disk_size_bytes - computed: true, optional: true, required: false
  private _dataDiskSizeBytes?: number; 
  public get dataDiskSizeBytes() {
    return this.getNumberAttribute('data_disk_size_bytes');
  }
  public set dataDiskSizeBytes(value: number) {
    this._dataDiskSizeBytes = value;
  }
  public resetDataDiskSizeBytes() {
    this._dataDiskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeBytesInput() {
    return this._dataDiskSizeBytes;
  }

  // memory_size_bytes - computed: true, optional: true, required: false
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

  // num_vcpus - computed: true, optional: true, required: false
  private _numVcpus?: number; 
  public get numVcpus() {
    return this.getNumberAttribute('num_vcpus');
  }
  public set numVcpus(value: number) {
    this._numVcpus = value;
  }
  public resetNumVcpus() {
    this._numVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVcpusInput() {
    return this._numVcpus;
  }
}

export class PcRestoreV2DomainManagerConfigResourceConfigList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfigResourceConfig[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigResourceConfigOutputReference {
    return new PcRestoreV2DomainManagerConfigResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#name PcRestoreV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#should_enable_lockdown_mode PcRestoreV2#should_enable_lockdown_mode}
  */
  readonly shouldEnableLockdownMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#size PcRestoreV2#size}
  */
  readonly size: string;
  /**
  * bootstrap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#bootstrap_config PcRestoreV2#bootstrap_config}
  */
  readonly bootstrapConfig?: PcRestoreV2DomainManagerConfigBootstrapConfig;
  /**
  * build_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#build_info PcRestoreV2#build_info}
  */
  readonly buildInfo: PcRestoreV2DomainManagerConfigBuildInfo;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#credentials PcRestoreV2#credentials}
  */
  readonly credentials?: PcRestoreV2DomainManagerConfigCredentials[] | cdktf.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#resource_config PcRestoreV2#resource_config}
  */
  readonly resourceConfig?: PcRestoreV2DomainManagerConfigResourceConfig[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerConfigToTerraform(struct?: PcRestoreV2DomainManagerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    should_enable_lockdown_mode: cdktf.booleanToTerraform(struct!.shouldEnableLockdownMode),
    size: cdktf.stringToTerraform(struct!.size),
    bootstrap_config: pcRestoreV2DomainManagerConfigBootstrapConfigToTerraform(struct!.bootstrapConfig),
    build_info: pcRestoreV2DomainManagerConfigBuildInfoToTerraform(struct!.buildInfo),
    credentials: cdktf.listMapper(pcRestoreV2DomainManagerConfigCredentialsToTerraform, true)(struct!.credentials),
    resource_config: cdktf.listMapper(pcRestoreV2DomainManagerConfigResourceConfigToTerraform, true)(struct!.resourceConfig),
  }
}


export function pcRestoreV2DomainManagerConfigToHclTerraform(struct?: PcRestoreV2DomainManagerConfig | cdktf.IResolvable): any {
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
    should_enable_lockdown_mode: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableLockdownMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_config: {
      value: pcRestoreV2DomainManagerConfigBootstrapConfigToHclTerraform(struct!.bootstrapConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBootstrapConfigList",
    },
    build_info: {
      value: pcRestoreV2DomainManagerConfigBuildInfoToHclTerraform(struct!.buildInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigBuildInfoList",
    },
    credentials: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigCredentialsList",
    },
    resource_config: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigResourceConfigToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigResourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shouldEnableLockdownMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableLockdownMode = this._shouldEnableLockdownMode;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._bootstrapConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapConfig = this._bootstrapConfig?.internalValue;
    }
    if (this._buildInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildInfo = this._buildInfo?.internalValue;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._shouldEnableLockdownMode = undefined;
      this._size = undefined;
      this._bootstrapConfig.internalValue = undefined;
      this._buildInfo.internalValue = undefined;
      this._credentials.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._shouldEnableLockdownMode = value.shouldEnableLockdownMode;
      this._size = value.size;
      this._bootstrapConfig.internalValue = value.bootstrapConfig;
      this._buildInfo.internalValue = value.buildInfo;
      this._credentials.internalValue = value.credentials;
      this._resourceConfig.internalValue = value.resourceConfig;
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

  // should_enable_lockdown_mode - computed: true, optional: true, required: false
  private _shouldEnableLockdownMode?: boolean | cdktf.IResolvable; 
  public get shouldEnableLockdownMode() {
    return this.getBooleanAttribute('should_enable_lockdown_mode');
  }
  public set shouldEnableLockdownMode(value: boolean | cdktf.IResolvable) {
    this._shouldEnableLockdownMode = value;
  }
  public resetShouldEnableLockdownMode() {
    this._shouldEnableLockdownMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableLockdownModeInput() {
    return this._shouldEnableLockdownMode;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // bootstrap_config - computed: false, optional: true, required: false
  private _bootstrapConfig = new PcRestoreV2DomainManagerConfigBootstrapConfigOutputReference(this, "bootstrap_config");
  public get bootstrapConfig() {
    return this._bootstrapConfig;
  }
  public putBootstrapConfig(value: PcRestoreV2DomainManagerConfigBootstrapConfig) {
    this._bootstrapConfig.internalValue = value;
  }
  public resetBootstrapConfig() {
    this._bootstrapConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapConfigInput() {
    return this._bootstrapConfig.internalValue;
  }

  // build_info - computed: false, optional: false, required: true
  private _buildInfo = new PcRestoreV2DomainManagerConfigBuildInfoOutputReference(this, "build_info");
  public get buildInfo() {
    return this._buildInfo;
  }
  public putBuildInfo(value: PcRestoreV2DomainManagerConfigBuildInfo) {
    this._buildInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildInfoInput() {
    return this._buildInfo.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PcRestoreV2DomainManagerConfigCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PcRestoreV2DomainManagerConfigCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new PcRestoreV2DomainManagerConfigResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: PcRestoreV2DomainManagerConfigResourceConfig[] | cdktf.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }
}

export class PcRestoreV2DomainManagerConfigList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerConfig[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerConfigOutputReference {
    return new PcRestoreV2DomainManagerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalAddressIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalAddressIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalAddressIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalAddressIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalAddressIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalAddressIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalAddressIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalAddressIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalAddressIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalAddressIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalAddressIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalAddressIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalAddressIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalAddressIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkExternalAddressIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkExternalAddressIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkExternalAddressToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressOutputReference | PcRestoreV2DomainManagerNetworkExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalAddressIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalAddressIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalAddressToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalAddressOutputReference | PcRestoreV2DomainManagerNetworkExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalAddressIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalAddressIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalAddressIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkExternalAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkExternalAddressIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkExternalAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkExternalAddressIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#begin PcRestoreV2#begin}
  */
  readonly begin?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#end PcRestoreV2#end}
  */
  readonly end?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginToTerraform(struct!.begin),
    end: pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndToTerraform(struct!.end),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginToHclTerraform(struct!.begin),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginList",
    },
    end: {
      value: pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: true, required: false
  private _begin = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBeginOutputReference(this, "begin");
  public get begin() {
    return this._begin;
  }
  public putBegin(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesBegin) {
    this._begin.internalValue = value;
  }
  public resetBegin() {
    this._begin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: true, required: false
  private _end = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesOutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskOutputReference | PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkExternalNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#network_ext_id PcRestoreV2#network_ext_id}
  */
  readonly networkExtId: string;
  /**
  * default_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#default_gateway PcRestoreV2#default_gateway}
  */
  readonly defaultGateway: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway;
  /**
  * ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ip_ranges PcRestoreV2#ip_ranges}
  */
  readonly ipRanges: PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges[] | cdktf.IResolvable;
  /**
  * subnet_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#subnet_mask PcRestoreV2#subnet_mask}
  */
  readonly subnetMask: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask;
}

export function pcRestoreV2DomainManagerNetworkExternalNetworksToTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ext_id: cdktf.stringToTerraform(struct!.networkExtId),
    default_gateway: pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayToTerraform(struct!.defaultGateway),
    ip_ranges: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesToTerraform, true)(struct!.ipRanges),
    subnet_mask: pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskToTerraform(struct!.subnetMask),
  }
}


export function pcRestoreV2DomainManagerNetworkExternalNetworksToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.networkExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_gateway: {
      value: pcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayToHclTerraform(struct!.defaultGateway),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayList",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksIpRangesToHclTerraform, true)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesList",
    },
    subnet_mask: {
      value: pcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskToHclTerraform(struct!.subnetMask),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkExternalNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkExtId = this._networkExtId;
    }
    if (this._defaultGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway?.internalValue;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    if (this._subnetMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkExternalNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkExtId = undefined;
      this._defaultGateway.internalValue = undefined;
      this._ipRanges.internalValue = undefined;
      this._subnetMask.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkExtId = value.networkExtId;
      this._defaultGateway.internalValue = value.defaultGateway;
      this._ipRanges.internalValue = value.ipRanges;
      this._subnetMask.internalValue = value.subnetMask;
    }
  }

  // network_ext_id - computed: false, optional: false, required: true
  private _networkExtId?: string; 
  public get networkExtId() {
    return this.getStringAttribute('network_ext_id');
  }
  public set networkExtId(value: string) {
    this._networkExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExtIdInput() {
    return this._networkExtId;
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway = new PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGatewayOutputReference(this, "default_gateway");
  public get defaultGateway() {
    return this._defaultGateway;
  }
  public putDefaultGateway(value: PcRestoreV2DomainManagerNetworkExternalNetworksDefaultGateway) {
    this._defaultGateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway.internalValue;
  }

  // ip_ranges - computed: false, optional: false, required: true
  private _ipRanges = new PcRestoreV2DomainManagerNetworkExternalNetworksIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: PcRestoreV2DomainManagerNetworkExternalNetworksIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask = new PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMaskOutputReference(this, "subnet_mask");
  public get subnetMask() {
    return this._subnetMask;
  }
  public putSubnetMask(value: PcRestoreV2DomainManagerNetworkExternalNetworksSubnetMask) {
    this._subnetMask.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkExternalNetworksList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkExternalNetworks[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkExternalNetworksOutputReference {
    return new PcRestoreV2DomainManagerNetworkExternalNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#begin PcRestoreV2#begin}
  */
  readonly begin?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#end PcRestoreV2#end}
  */
  readonly end?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginToTerraform(struct!.begin),
    end: pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndToTerraform(struct!.end),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginToHclTerraform(struct!.begin),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginList",
    },
    end: {
      value: pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndToHclTerraform(struct!.end),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: true, required: false
  private _begin = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBeginOutputReference(this, "begin");
  public get begin() {
    return this._begin;
  }
  public putBegin(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesBegin) {
    this._begin.internalValue = value;
  }
  public resetBegin() {
    this._begin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: true, required: false
  private _end = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEndOutputReference(this, "end");
  public get end() {
    return this._end;
  }
  public putEnd(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesEnd) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesOutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkInternalNetworks {
  /**
  * default_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#default_gateway PcRestoreV2#default_gateway}
  */
  readonly defaultGateway: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway;
  /**
  * ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ip_ranges PcRestoreV2#ip_ranges}
  */
  readonly ipRanges: PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges[] | cdktf.IResolvable;
  /**
  * subnet_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#subnet_mask PcRestoreV2#subnet_mask}
  */
  readonly subnetMask: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask;
}

export function pcRestoreV2DomainManagerNetworkInternalNetworksToTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayToTerraform(struct!.defaultGateway),
    ip_ranges: cdktf.listMapper(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesToTerraform, true)(struct!.ipRanges),
    subnet_mask: pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskToTerraform(struct!.subnetMask),
  }
}


export function pcRestoreV2DomainManagerNetworkInternalNetworksToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkInternalNetworksOutputReference | PcRestoreV2DomainManagerNetworkInternalNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: pcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayToHclTerraform(struct!.defaultGateway),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayList",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkInternalNetworksIpRangesToHclTerraform, true)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesList",
    },
    subnet_mask: {
      value: pcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskToHclTerraform(struct!.subnetMask),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkInternalNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManagerNetworkInternalNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway?.internalValue;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    if (this._subnetMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkInternalNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway.internalValue = undefined;
      this._ipRanges.internalValue = undefined;
      this._subnetMask.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway.internalValue = value.defaultGateway;
      this._ipRanges.internalValue = value.ipRanges;
      this._subnetMask.internalValue = value.subnetMask;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway = new PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGatewayOutputReference(this, "default_gateway");
  public get defaultGateway() {
    return this._defaultGateway;
  }
  public putDefaultGateway(value: PcRestoreV2DomainManagerNetworkInternalNetworksDefaultGateway) {
    this._defaultGateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway.internalValue;
  }

  // ip_ranges - computed: false, optional: false, required: true
  private _ipRanges = new PcRestoreV2DomainManagerNetworkInternalNetworksIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: PcRestoreV2DomainManagerNetworkInternalNetworksIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask = new PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMaskOutputReference(this, "subnet_mask");
  public get subnetMask() {
    return this._subnetMask;
  }
  public putSubnetMask(value: PcRestoreV2DomainManagerNetworkInternalNetworksSubnetMask) {
    this._subnetMask.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask.internalValue;
  }
}
export interface PcRestoreV2DomainManagerNetworkNameServersFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNameServersFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNameServersFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNameServersFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNameServersFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNameServersFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNameServersFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNameServersFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNameServersFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkNameServersFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNameServersIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNameServersIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNameServersIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNameServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNameServersIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNameServersIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNameServersIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNameServersIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNameServersIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkNameServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNameServersIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNameServersIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNameServersIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServersIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNameServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNameServersIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNameServersIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNameServersIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNameServersIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNameServersIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkNameServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNameServers {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkNameServersFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkNameServersIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkNameServersIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkNameServersToTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNameServersFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNameServersIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNameServersIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkNameServersToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNameServersFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNameServersFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNameServersIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNameServersIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNameServersIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNameServersIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNameServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNameServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkNameServersFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkNameServersFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkNameServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkNameServersIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkNameServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkNameServersIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkNameServersList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNameServers[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNameServersOutputReference {
    return new PcRestoreV2DomainManagerNetworkNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNtpServersFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNtpServersFqdnToTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNtpServersFqdnToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersFqdn | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNtpServersFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNtpServersFqdn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNtpServersFqdn | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNtpServersFqdnList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNtpServersFqdn[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNtpServersFqdnOutputReference {
    return new PcRestoreV2DomainManagerNetworkNtpServersFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNtpServersIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNtpServersIpv4ToTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNtpServersIpv4ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersIpv4 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNtpServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNtpServersIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNtpServersIpv4 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNtpServersIpv4List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNtpServersIpv4[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNtpServersIpv4OutputReference {
    return new PcRestoreV2DomainManagerNetworkNtpServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNtpServersIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#prefix_length PcRestoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#value PcRestoreV2#value}
  */
  readonly value: string;
}

export function pcRestoreV2DomainManagerNetworkNtpServersIpv6ToTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pcRestoreV2DomainManagerNetworkNtpServersIpv6ToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServersIpv6 | cdktf.IResolvable): any {
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

export class PcRestoreV2DomainManagerNetworkNtpServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNtpServersIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNtpServersIpv6 | cdktf.IResolvable | undefined) {
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

export class PcRestoreV2DomainManagerNetworkNtpServersIpv6List extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNtpServersIpv6[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNtpServersIpv6OutputReference {
    return new PcRestoreV2DomainManagerNetworkNtpServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetworkNtpServers {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#fqdn PcRestoreV2#fqdn}
  */
  readonly fqdn?: PcRestoreV2DomainManagerNetworkNtpServersFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv4 PcRestoreV2#ipv4}
  */
  readonly ipv4?: PcRestoreV2DomainManagerNetworkNtpServersIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ipv6 PcRestoreV2#ipv6}
  */
  readonly ipv6?: PcRestoreV2DomainManagerNetworkNtpServersIpv6[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkNtpServersToTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNtpServersFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNtpServersIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNtpServersIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pcRestoreV2DomainManagerNetworkNtpServersToHclTerraform(struct?: PcRestoreV2DomainManagerNetworkNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNtpServersFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNtpServersFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNtpServersIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNtpServersIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNtpServersIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNtpServersIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetworkNtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetworkNtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new PcRestoreV2DomainManagerNetworkNtpServersFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: PcRestoreV2DomainManagerNetworkNtpServersFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PcRestoreV2DomainManagerNetworkNtpServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PcRestoreV2DomainManagerNetworkNtpServersIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PcRestoreV2DomainManagerNetworkNtpServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PcRestoreV2DomainManagerNetworkNtpServersIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkNtpServersList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetworkNtpServers[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkNtpServersOutputReference {
    return new PcRestoreV2DomainManagerNetworkNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManagerNetwork {
  /**
  * external_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#external_address PcRestoreV2#external_address}
  */
  readonly externalAddress?: PcRestoreV2DomainManagerNetworkExternalAddress;
  /**
  * external_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#external_networks PcRestoreV2#external_networks}
  */
  readonly externalNetworks?: PcRestoreV2DomainManagerNetworkExternalNetworks[] | cdktf.IResolvable;
  /**
  * internal_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#internal_networks PcRestoreV2#internal_networks}
  */
  readonly internalNetworks?: PcRestoreV2DomainManagerNetworkInternalNetworks;
  /**
  * name_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#name_servers PcRestoreV2#name_servers}
  */
  readonly nameServers: PcRestoreV2DomainManagerNetworkNameServers[] | cdktf.IResolvable;
  /**
  * ntp_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#ntp_servers PcRestoreV2#ntp_servers}
  */
  readonly ntpServers: PcRestoreV2DomainManagerNetworkNtpServers[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerNetworkToTerraform(struct?: PcRestoreV2DomainManagerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_address: pcRestoreV2DomainManagerNetworkExternalAddressToTerraform(struct!.externalAddress),
    external_networks: cdktf.listMapper(pcRestoreV2DomainManagerNetworkExternalNetworksToTerraform, true)(struct!.externalNetworks),
    internal_networks: pcRestoreV2DomainManagerNetworkInternalNetworksToTerraform(struct!.internalNetworks),
    name_servers: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNameServersToTerraform, true)(struct!.nameServers),
    ntp_servers: cdktf.listMapper(pcRestoreV2DomainManagerNetworkNtpServersToTerraform, true)(struct!.ntpServers),
  }
}


export function pcRestoreV2DomainManagerNetworkToHclTerraform(struct?: PcRestoreV2DomainManagerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_address: {
      value: pcRestoreV2DomainManagerNetworkExternalAddressToHclTerraform(struct!.externalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalAddressList",
    },
    external_networks: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkExternalNetworksToHclTerraform, true)(struct!.externalNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkExternalNetworksList",
    },
    internal_networks: {
      value: pcRestoreV2DomainManagerNetworkInternalNetworksToHclTerraform(struct!.internalNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkInternalNetworksList",
    },
    name_servers: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNameServersToHclTerraform, true)(struct!.nameServers),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNameServersList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkNtpServersToHclTerraform, true)(struct!.ntpServers),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkNtpServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreV2DomainManagerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAddress = this._externalAddress?.internalValue;
    }
    if (this._externalNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNetworks = this._externalNetworks?.internalValue;
    }
    if (this._internalNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalNetworks = this._internalNetworks?.internalValue;
    }
    if (this._nameServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers?.internalValue;
    }
    if (this._ntpServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManagerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalAddress.internalValue = undefined;
      this._externalNetworks.internalValue = undefined;
      this._internalNetworks.internalValue = undefined;
      this._nameServers.internalValue = undefined;
      this._ntpServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalAddress.internalValue = value.externalAddress;
      this._externalNetworks.internalValue = value.externalNetworks;
      this._internalNetworks.internalValue = value.internalNetworks;
      this._nameServers.internalValue = value.nameServers;
      this._ntpServers.internalValue = value.ntpServers;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // external_address - computed: false, optional: true, required: false
  private _externalAddress = new PcRestoreV2DomainManagerNetworkExternalAddressOutputReference(this, "external_address");
  public get externalAddress() {
    return this._externalAddress;
  }
  public putExternalAddress(value: PcRestoreV2DomainManagerNetworkExternalAddress) {
    this._externalAddress.internalValue = value;
  }
  public resetExternalAddress() {
    this._externalAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressInput() {
    return this._externalAddress.internalValue;
  }

  // external_networks - computed: false, optional: true, required: false
  private _externalNetworks = new PcRestoreV2DomainManagerNetworkExternalNetworksList(this, "external_networks", false);
  public get externalNetworks() {
    return this._externalNetworks;
  }
  public putExternalNetworks(value: PcRestoreV2DomainManagerNetworkExternalNetworks[] | cdktf.IResolvable) {
    this._externalNetworks.internalValue = value;
  }
  public resetExternalNetworks() {
    this._externalNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworksInput() {
    return this._externalNetworks.internalValue;
  }

  // internal_networks - computed: false, optional: true, required: false
  private _internalNetworks = new PcRestoreV2DomainManagerNetworkInternalNetworksOutputReference(this, "internal_networks");
  public get internalNetworks() {
    return this._internalNetworks;
  }
  public putInternalNetworks(value: PcRestoreV2DomainManagerNetworkInternalNetworks) {
    this._internalNetworks.internalValue = value;
  }
  public resetInternalNetworks() {
    this._internalNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNetworksInput() {
    return this._internalNetworks.internalValue;
  }

  // name_servers - computed: false, optional: false, required: true
  private _nameServers = new PcRestoreV2DomainManagerNetworkNameServersList(this, "name_servers", false);
  public get nameServers() {
    return this._nameServers;
  }
  public putNameServers(value: PcRestoreV2DomainManagerNetworkNameServers[] | cdktf.IResolvable) {
    this._nameServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers.internalValue;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers = new PcRestoreV2DomainManagerNetworkNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: PcRestoreV2DomainManagerNetworkNtpServers[] | cdktf.IResolvable) {
    this._ntpServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers.internalValue;
  }
}

export class PcRestoreV2DomainManagerNetworkList extends cdktf.ComplexList {
  public internalValue? : PcRestoreV2DomainManagerNetwork[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreV2DomainManagerNetworkOutputReference {
    return new PcRestoreV2DomainManagerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreV2DomainManager {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#should_enable_high_availability PcRestoreV2#should_enable_high_availability}
  */
  readonly shouldEnableHighAvailability?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#config PcRestoreV2#config}
  */
  readonly config: PcRestoreV2DomainManagerConfig[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#network PcRestoreV2#network}
  */
  readonly network: PcRestoreV2DomainManagerNetwork[] | cdktf.IResolvable;
}

export function pcRestoreV2DomainManagerToTerraform(struct?: PcRestoreV2DomainManagerOutputReference | PcRestoreV2DomainManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_enable_high_availability: cdktf.booleanToTerraform(struct!.shouldEnableHighAvailability),
    config: cdktf.listMapper(pcRestoreV2DomainManagerConfigToTerraform, true)(struct!.config),
    network: cdktf.listMapper(pcRestoreV2DomainManagerNetworkToTerraform, true)(struct!.network),
  }
}


export function pcRestoreV2DomainManagerToHclTerraform(struct?: PcRestoreV2DomainManagerOutputReference | PcRestoreV2DomainManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_enable_high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableHighAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerConfigList",
    },
    network: {
      value: cdktf.listMapperHcl(pcRestoreV2DomainManagerNetworkToHclTerraform, true)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreV2DomainManagerNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2DomainManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreV2DomainManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldEnableHighAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableHighAvailability = this._shouldEnableHighAvailability;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2DomainManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldEnableHighAvailability = undefined;
      this._config.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldEnableHighAvailability = value.shouldEnableHighAvailability;
      this._config.internalValue = value.config;
      this._network.internalValue = value.network;
    }
  }

  // hosting_cluster_ext_id - computed: true, optional: false, required: false
  public get hostingClusterExtId() {
    return this.getStringAttribute('hosting_cluster_ext_id');
  }

  // is_registered_with_hosting_cluster - computed: true, optional: false, required: false
  public get isRegisteredWithHostingCluster() {
    return this.getBooleanAttribute('is_registered_with_hosting_cluster');
  }

  // node_ext_ids - computed: true, optional: false, required: false
  public get nodeExtIds() {
    return this.getListAttribute('node_ext_ids');
  }

  // should_enable_high_availability - computed: true, optional: true, required: false
  private _shouldEnableHighAvailability?: boolean | cdktf.IResolvable; 
  public get shouldEnableHighAvailability() {
    return this.getBooleanAttribute('should_enable_high_availability');
  }
  public set shouldEnableHighAvailability(value: boolean | cdktf.IResolvable) {
    this._shouldEnableHighAvailability = value;
  }
  public resetShouldEnableHighAvailability() {
    this._shouldEnableHighAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableHighAvailabilityInput() {
    return this._shouldEnableHighAvailability;
  }

  // config - computed: false, optional: false, required: true
  private _config = new PcRestoreV2DomainManagerConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: PcRestoreV2DomainManagerConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new PcRestoreV2DomainManagerNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: PcRestoreV2DomainManagerNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface PcRestoreV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#create PcRestoreV2#create}
  */
  readonly create?: string;
}

export function pcRestoreV2TimeoutsToTerraform(struct?: PcRestoreV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function pcRestoreV2TimeoutsToHclTerraform(struct?: PcRestoreV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcRestoreV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2 nutanix_pc_restore_v2}
*/
export class PcRestoreV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pc_restore_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PcRestoreV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcRestoreV2 to import
  * @param importFromId The id of the existing PcRestoreV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcRestoreV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pc_restore_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_v2 nutanix_pc_restore_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcRestoreV2Config
  */
  public constructor(scope: Construct, id: string, config: PcRestoreV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pc_restore_v2',
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
    this._extId = config.extId;
    this._id = config.id;
    this._restorableDomainManagerExtId = config.restorableDomainManagerExtId;
    this._restoreSourceExtId = config.restoreSourceExtId;
    this._domainManager.internalValue = config.domainManager;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // restorable_domain_manager_ext_id - computed: false, optional: false, required: true
  private _restorableDomainManagerExtId?: string; 
  public get restorableDomainManagerExtId() {
    return this.getStringAttribute('restorable_domain_manager_ext_id');
  }
  public set restorableDomainManagerExtId(value: string) {
    this._restorableDomainManagerExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restorableDomainManagerExtIdInput() {
    return this._restorableDomainManagerExtId;
  }

  // restore_source_ext_id - computed: false, optional: false, required: true
  private _restoreSourceExtId?: string; 
  public get restoreSourceExtId() {
    return this.getStringAttribute('restore_source_ext_id');
  }
  public set restoreSourceExtId(value: string) {
    this._restoreSourceExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSourceExtIdInput() {
    return this._restoreSourceExtId;
  }

  // domain_manager - computed: false, optional: false, required: true
  private _domainManager = new PcRestoreV2DomainManagerOutputReference(this, "domain_manager");
  public get domainManager() {
    return this._domainManager;
  }
  public putDomainManager(value: PcRestoreV2DomainManager) {
    this._domainManager.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainManagerInput() {
    return this._domainManager.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PcRestoreV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PcRestoreV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      restorable_domain_manager_ext_id: cdktf.stringToTerraform(this._restorableDomainManagerExtId),
      restore_source_ext_id: cdktf.stringToTerraform(this._restoreSourceExtId),
      domain_manager: pcRestoreV2DomainManagerToTerraform(this._domainManager.internalValue),
      timeouts: pcRestoreV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      restorable_domain_manager_ext_id: {
        value: cdktf.stringToHclTerraform(this._restorableDomainManagerExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_source_ext_id: {
        value: cdktf.stringToHclTerraform(this._restoreSourceExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_manager: {
        value: pcRestoreV2DomainManagerToHclTerraform(this._domainManager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PcRestoreV2DomainManagerList",
      },
      timeouts: {
        value: pcRestoreV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcRestoreV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
