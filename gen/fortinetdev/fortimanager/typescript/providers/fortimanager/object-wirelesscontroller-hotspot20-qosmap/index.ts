// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20QosmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#adom ObjectWirelesscontrollerHotspot20Qosmap#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20Qosmap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#id ObjectWirelesscontrollerHotspot20Qosmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#name ObjectWirelesscontrollerHotspot20Qosmap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#scopetype ObjectWirelesscontrollerHotspot20Qosmap#scopetype}
  */
  readonly scopetype?: string;
  /**
  * dscp_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#dscp_except ObjectWirelesscontrollerHotspot20Qosmap#dscp_except}
  */
  readonly dscpExcept?: ObjectWirelesscontrollerHotspot20QosmapDscpExcept[] | cdktf.IResolvable;
  /**
  * dscp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#dscp_range ObjectWirelesscontrollerHotspot20Qosmap#dscp_range}
  */
  readonly dscpRange?: ObjectWirelesscontrollerHotspot20QosmapDscpRange[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20QosmapDscpExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#dscp ObjectWirelesscontrollerHotspot20Qosmap#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#index ObjectWirelesscontrollerHotspot20Qosmap#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#up ObjectWirelesscontrollerHotspot20Qosmap#up}
  */
  readonly up?: number;
}

export function objectWirelesscontrollerHotspot20QosmapDscpExceptToTerraform(struct?: ObjectWirelesscontrollerHotspot20QosmapDscpExcept | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    index: cdktf.numberToTerraform(struct!.index),
    up: cdktf.numberToTerraform(struct!.up),
  }
}


export function objectWirelesscontrollerHotspot20QosmapDscpExceptToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20QosmapDscpExcept | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up: {
      value: cdktf.numberToHclTerraform(struct!.up),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20QosmapDscpExceptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20QosmapDscpExcept | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._up !== undefined) {
      hasAnyValues = true;
      internalValueResult.up = this._up;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20QosmapDscpExcept | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._index = undefined;
      this._up = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._index = value.index;
      this._up = value.up;
    }
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // up - computed: false, optional: true, required: false
  private _up?: number; 
  public get up() {
    return this.getNumberAttribute('up');
  }
  public set up(value: number) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
  }
}

export class ObjectWirelesscontrollerHotspot20QosmapDscpExceptList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20QosmapDscpExcept[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20QosmapDscpExceptOutputReference {
    return new ObjectWirelesscontrollerHotspot20QosmapDscpExceptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerHotspot20QosmapDscpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#high ObjectWirelesscontrollerHotspot20Qosmap#high}
  */
  readonly high?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#index ObjectWirelesscontrollerHotspot20Qosmap#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#low ObjectWirelesscontrollerHotspot20Qosmap#low}
  */
  readonly low?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#up ObjectWirelesscontrollerHotspot20Qosmap#up}
  */
  readonly up?: number;
}

export function objectWirelesscontrollerHotspot20QosmapDscpRangeToTerraform(struct?: ObjectWirelesscontrollerHotspot20QosmapDscpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    index: cdktf.numberToTerraform(struct!.index),
    low: cdktf.numberToTerraform(struct!.low),
    up: cdktf.numberToTerraform(struct!.up),
  }
}


export function objectWirelesscontrollerHotspot20QosmapDscpRangeToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20QosmapDscpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up: {
      value: cdktf.numberToHclTerraform(struct!.up),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20QosmapDscpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20QosmapDscpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._up !== undefined) {
      hasAnyValues = true;
      internalValueResult.up = this._up;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20QosmapDscpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._index = undefined;
      this._low = undefined;
      this._up = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._index = value.index;
      this._low = value.low;
      this._up = value.up;
    }
  }

  // high - computed: true, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // low - computed: true, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }

  // up - computed: false, optional: true, required: false
  private _up?: number; 
  public get up() {
    return this.getNumberAttribute('up');
  }
  public set up(value: number) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
  }
}

export class ObjectWirelesscontrollerHotspot20QosmapDscpRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20QosmapDscpRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20QosmapDscpRangeOutputReference {
    return new ObjectWirelesscontrollerHotspot20QosmapDscpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap fortimanager_object_wirelesscontroller_hotspot20_qosmap}
*/
export class ObjectWirelesscontrollerHotspot20Qosmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_qosmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20Qosmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20Qosmap to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20Qosmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20Qosmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_qosmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_qosmap fortimanager_object_wirelesscontroller_hotspot20_qosmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20QosmapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20QosmapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_qosmap',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._dscpExcept.internalValue = config.dscpExcept;
    this._dscpRange.internalValue = config.dscpRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // dscp_except - computed: false, optional: true, required: false
  private _dscpExcept = new ObjectWirelesscontrollerHotspot20QosmapDscpExceptList(this, "dscp_except", false);
  public get dscpExcept() {
    return this._dscpExcept;
  }
  public putDscpExcept(value: ObjectWirelesscontrollerHotspot20QosmapDscpExcept[] | cdktf.IResolvable) {
    this._dscpExcept.internalValue = value;
  }
  public resetDscpExcept() {
    this._dscpExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpExceptInput() {
    return this._dscpExcept.internalValue;
  }

  // dscp_range - computed: false, optional: true, required: false
  private _dscpRange = new ObjectWirelesscontrollerHotspot20QosmapDscpRangeList(this, "dscp_range", false);
  public get dscpRange() {
    return this._dscpRange;
  }
  public putDscpRange(value: ObjectWirelesscontrollerHotspot20QosmapDscpRange[] | cdktf.IResolvable) {
    this._dscpRange.internalValue = value;
  }
  public resetDscpRange() {
    this._dscpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpRangeInput() {
    return this._dscpRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      dscp_except: cdktf.listMapper(objectWirelesscontrollerHotspot20QosmapDscpExceptToTerraform, true)(this._dscpExcept.internalValue),
      dscp_range: cdktf.listMapper(objectWirelesscontrollerHotspot20QosmapDscpRangeToTerraform, true)(this._dscpRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_except: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20QosmapDscpExceptToHclTerraform, true)(this._dscpExcept.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20QosmapDscpExceptList",
      },
      dscp_range: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20QosmapDscpRangeToHclTerraform, true)(this._dscpRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20QosmapDscpRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
