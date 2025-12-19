// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGeolocListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#id SystemGeolocList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of Geolocation list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#name SystemGeolocList#name}
  */
  readonly name: string;
  /**
  * Enable sharing with other partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#shared SystemGeolocList#shared}
  */
  readonly shared?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#user_tag SystemGeolocList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#uuid SystemGeolocList#uuid}
  */
  readonly uuid?: string;
  /**
  * exclude_geoloc_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#exclude_geoloc_name_list SystemGeolocList#exclude_geoloc_name_list}
  */
  readonly excludeGeolocNameList?: SystemGeolocListExcludeGeolocNameListStruct[] | cdktf.IResolvable;
  /**
  * include_geoloc_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#include_geoloc_name_list SystemGeolocList#include_geoloc_name_list}
  */
  readonly includeGeolocNameList?: SystemGeolocListIncludeGeolocNameListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#sampling_enable SystemGeolocList#sampling_enable}
  */
  readonly samplingEnable?: SystemGeolocListSamplingEnable[] | cdktf.IResolvable;
}
export interface SystemGeolocListExcludeGeolocNameListStruct {
  /**
  * Geolocation name to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#exclude_geoloc_name_val SystemGeolocList#exclude_geoloc_name_val}
  */
  readonly excludeGeolocNameVal?: string;
}

export function systemGeolocListExcludeGeolocNameListStructToTerraform(struct?: SystemGeolocListExcludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_geoloc_name_val: cdktf.stringToTerraform(struct!.excludeGeolocNameVal),
  }
}


export function systemGeolocListExcludeGeolocNameListStructToHclTerraform(struct?: SystemGeolocListExcludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_geoloc_name_val: {
      value: cdktf.stringToHclTerraform(struct!.excludeGeolocNameVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListExcludeGeolocNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListExcludeGeolocNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeGeolocNameVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeGeolocNameVal = this._excludeGeolocNameVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListExcludeGeolocNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeGeolocNameVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeGeolocNameVal = value.excludeGeolocNameVal;
    }
  }

  // exclude_geoloc_name_val - computed: false, optional: true, required: false
  private _excludeGeolocNameVal?: string; 
  public get excludeGeolocNameVal() {
    return this.getStringAttribute('exclude_geoloc_name_val');
  }
  public set excludeGeolocNameVal(value: string) {
    this._excludeGeolocNameVal = value;
  }
  public resetExcludeGeolocNameVal() {
    this._excludeGeolocNameVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGeolocNameValInput() {
    return this._excludeGeolocNameVal;
  }
}

export class SystemGeolocListExcludeGeolocNameListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListExcludeGeolocNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListExcludeGeolocNameListStructOutputReference {
    return new SystemGeolocListExcludeGeolocNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocListIncludeGeolocNameListStruct {
  /**
  * Geolocation name to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#include_geoloc_name_val SystemGeolocList#include_geoloc_name_val}
  */
  readonly includeGeolocNameVal?: string;
}

export function systemGeolocListIncludeGeolocNameListStructToTerraform(struct?: SystemGeolocListIncludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_geoloc_name_val: cdktf.stringToTerraform(struct!.includeGeolocNameVal),
  }
}


export function systemGeolocListIncludeGeolocNameListStructToHclTerraform(struct?: SystemGeolocListIncludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_geoloc_name_val: {
      value: cdktf.stringToHclTerraform(struct!.includeGeolocNameVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListIncludeGeolocNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListIncludeGeolocNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeGeolocNameVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGeolocNameVal = this._includeGeolocNameVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListIncludeGeolocNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeGeolocNameVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeGeolocNameVal = value.includeGeolocNameVal;
    }
  }

  // include_geoloc_name_val - computed: false, optional: true, required: false
  private _includeGeolocNameVal?: string; 
  public get includeGeolocNameVal() {
    return this.getStringAttribute('include_geoloc_name_val');
  }
  public set includeGeolocNameVal(value: string) {
    this._includeGeolocNameVal = value;
  }
  public resetIncludeGeolocNameVal() {
    this._includeGeolocNameVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGeolocNameValInput() {
    return this._includeGeolocNameVal;
  }
}

export class SystemGeolocListIncludeGeolocNameListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListIncludeGeolocNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListIncludeGeolocNameListStructOutputReference {
    return new SystemGeolocListIncludeGeolocNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocListSamplingEnable {
  /**
  * 'all': all; 'hit-count': hit-count; 'total-geoloc': total-geoloc; 'total-active': total-active;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#counters1 SystemGeolocList#counters1}
  */
  readonly counters1?: string;
}

export function systemGeolocListSamplingEnableToTerraform(struct?: SystemGeolocListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemGeolocListSamplingEnableToHclTerraform(struct?: SystemGeolocListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemGeolocListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListSamplingEnableOutputReference {
    return new SystemGeolocListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list thunder_system_geoloc_list}
*/
export class SystemGeolocList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_geoloc_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGeolocList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGeolocList to import
  * @param importFromId The id of the existing SystemGeolocList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGeolocList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_geoloc_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geoloc_list thunder_system_geoloc_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGeolocListConfig
  */
  public constructor(scope: Construct, id: string, config: SystemGeolocListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_geoloc_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._shared = config.shared;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._excludeGeolocNameList.internalValue = config.excludeGeolocNameList;
    this._includeGeolocNameList.internalValue = config.includeGeolocNameList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // exclude_geoloc_name_list - computed: false, optional: true, required: false
  private _excludeGeolocNameList = new SystemGeolocListExcludeGeolocNameListStructList(this, "exclude_geoloc_name_list", false);
  public get excludeGeolocNameList() {
    return this._excludeGeolocNameList;
  }
  public putExcludeGeolocNameList(value: SystemGeolocListExcludeGeolocNameListStruct[] | cdktf.IResolvable) {
    this._excludeGeolocNameList.internalValue = value;
  }
  public resetExcludeGeolocNameList() {
    this._excludeGeolocNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGeolocNameListInput() {
    return this._excludeGeolocNameList.internalValue;
  }

  // include_geoloc_name_list - computed: false, optional: true, required: false
  private _includeGeolocNameList = new SystemGeolocListIncludeGeolocNameListStructList(this, "include_geoloc_name_list", false);
  public get includeGeolocNameList() {
    return this._includeGeolocNameList;
  }
  public putIncludeGeolocNameList(value: SystemGeolocListIncludeGeolocNameListStruct[] | cdktf.IResolvable) {
    this._includeGeolocNameList.internalValue = value;
  }
  public resetIncludeGeolocNameList() {
    this._includeGeolocNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGeolocNameListInput() {
    return this._includeGeolocNameList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemGeolocListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemGeolocListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shared: cdktf.numberToTerraform(this._shared),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      exclude_geoloc_name_list: cdktf.listMapper(systemGeolocListExcludeGeolocNameListStructToTerraform, true)(this._excludeGeolocNameList.internalValue),
      include_geoloc_name_list: cdktf.listMapper(systemGeolocListIncludeGeolocNameListStructToTerraform, true)(this._includeGeolocNameList.internalValue),
      sampling_enable: cdktf.listMapper(systemGeolocListSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_geoloc_name_list: {
        value: cdktf.listMapperHcl(systemGeolocListExcludeGeolocNameListStructToHclTerraform, true)(this._excludeGeolocNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGeolocListExcludeGeolocNameListStructList",
      },
      include_geoloc_name_list: {
        value: cdktf.listMapperHcl(systemGeolocListIncludeGeolocNameListStructToHclTerraform, true)(this._includeGeolocNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGeolocListIncludeGeolocNameListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(systemGeolocListSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGeolocListSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
