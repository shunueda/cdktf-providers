// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20AnqpnairealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#adom ObjectWirelesscontrollerHotspot20Anqpnairealm#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#dynamic_sort_subtable ObjectWirelesscontrollerHotspot20Anqpnairealm#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#id ObjectWirelesscontrollerHotspot20Anqpnairealm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#name ObjectWirelesscontrollerHotspot20Anqpnairealm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#scopetype ObjectWirelesscontrollerHotspot20Anqpnairealm#scopetype}
  */
  readonly scopetype?: string;
  /**
  * nai_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#nai_list ObjectWirelesscontrollerHotspot20Anqpnairealm#nai_list}
  */
  readonly naiList?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#id ObjectWirelesscontrollerHotspot20Anqpnairealm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#index ObjectWirelesscontrollerHotspot20Anqpnairealm#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#val ObjectWirelesscontrollerHotspot20Anqpnairealm#val}
  */
  readonly val?: string;
}

export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamToTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.numberToTerraform(struct!.index),
    val: cdktf.stringToTerraform(struct!.val),
  }
}


export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    val: {
      value: cdktf.stringToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._index = undefined;
      this._val = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._index = value.index;
      this._val = value.val;
    }
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

  // val - computed: true, optional: true, required: false
  private _val?: string; 
  public get val() {
    return this.getStringAttribute('val');
  }
  public set val(value: string) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamOutputReference {
    return new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#index ObjectWirelesscontrollerHotspot20Anqpnairealm#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#method ObjectWirelesscontrollerHotspot20Anqpnairealm#method}
  */
  readonly method?: string;
  /**
  * auth_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#auth_param ObjectWirelesscontrollerHotspot20Anqpnairealm#auth_param}
  */
  readonly authParam?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam[] | cdktf.IResolvable;
}

export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodToTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    method: cdktf.stringToTerraform(struct!.method),
    auth_param: cdktf.listMapper(objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamToTerraform, true)(struct!.authParam),
  }
}


export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_param: {
      value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamToHclTerraform, true)(struct!.authParam),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._authParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authParam = this._authParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._method = undefined;
      this._authParam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._method = value.method;
      this._authParam.internalValue = value.authParam;
    }
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

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // auth_param - computed: false, optional: true, required: false
  private _authParam = new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParamList(this, "auth_param", false);
  public get authParam() {
    return this._authParam;
  }
  public putAuthParam(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodAuthParam[] | cdktf.IResolvable) {
    this._authParam.internalValue = value;
  }
  public resetAuthParam() {
    this._authParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParamInput() {
    return this._authParam.internalValue;
  }
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodOutputReference {
    return new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#encoding ObjectWirelesscontrollerHotspot20Anqpnairealm#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#nai_realm ObjectWirelesscontrollerHotspot20Anqpnairealm#nai_realm}
  */
  readonly naiRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#name ObjectWirelesscontrollerHotspot20Anqpnairealm#name}
  */
  readonly name?: string;
  /**
  * eap_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#eap_method ObjectWirelesscontrollerHotspot20Anqpnairealm#eap_method}
  */
  readonly eapMethod?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod[] | cdktf.IResolvable;
}

export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListStructToTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    nai_realm: cdktf.stringToTerraform(struct!.naiRealm),
    name: cdktf.stringToTerraform(struct!.name),
    eap_method: cdktf.listMapper(objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodToTerraform, true)(struct!.eapMethod),
  }
}


export function objectWirelesscontrollerHotspot20AnqpnairealmNaiListStructToHclTerraform(struct?: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nai_realm: {
      value: cdktf.stringToHclTerraform(struct!.naiRealm),
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
    eap_method: {
      value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodToHclTerraform, true)(struct!.eapMethod),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._naiRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.naiRealm = this._naiRealm;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._eapMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapMethod = this._eapMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._naiRealm = undefined;
      this._name = undefined;
      this._eapMethod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._naiRealm = value.naiRealm;
      this._name = value.name;
      this._eapMethod.internalValue = value.eapMethod;
    }
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // nai_realm - computed: false, optional: true, required: false
  private _naiRealm?: string; 
  public get naiRealm() {
    return this.getStringAttribute('nai_realm');
  }
  public set naiRealm(value: string) {
    this._naiRealm = value;
  }
  public resetNaiRealm() {
    this._naiRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmInput() {
    return this._naiRealm;
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

  // eap_method - computed: false, optional: true, required: false
  private _eapMethod = new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethodList(this, "eap_method", false);
  public get eapMethod() {
    return this._eapMethod;
  }
  public putEapMethod(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListEapMethod[] | cdktf.IResolvable) {
    this._eapMethod.internalValue = value;
  }
  public resetEapMethod() {
    this._eapMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodInput() {
    return this._eapMethod.internalValue;
  }
}

export class ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructOutputReference {
    return new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm}
*/
export class ObjectWirelesscontrollerHotspot20Anqpnairealm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20Anqpnairealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20Anqpnairealm to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20Anqpnairealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20Anqpnairealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_anqpnairealm fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20AnqpnairealmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20AnqpnairealmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_anqpnairealm',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._naiList.internalValue = config.naiList;
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

  // nai_list - computed: false, optional: true, required: false
  private _naiList = new ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructList(this, "nai_list", false);
  public get naiList() {
    return this._naiList;
  }
  public putNaiList(value: ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStruct[] | cdktf.IResolvable) {
    this._naiList.internalValue = value;
  }
  public resetNaiList() {
    this._naiList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiListInput() {
    return this._naiList.internalValue;
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
      nai_list: cdktf.listMapper(objectWirelesscontrollerHotspot20AnqpnairealmNaiListStructToTerraform, true)(this._naiList.internalValue),
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
      nai_list: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerHotspot20AnqpnairealmNaiListStructToHclTerraform, true)(this._naiList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerHotspot20AnqpnairealmNaiListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
