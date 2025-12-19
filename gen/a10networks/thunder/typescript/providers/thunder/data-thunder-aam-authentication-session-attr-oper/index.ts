// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationSessionAttrOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#id DataThunderAamAuthenticationSessionAttrOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#oper DataThunderAamAuthenticationSessionAttrOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationSessionAttrOperOper;
}
export interface DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#attr_name DataThunderAamAuthenticationSessionAttrOper#attr_name}
  */
  readonly attrName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#attr_type DataThunderAamAuthenticationSessionAttrOper#attr_type}
  */
  readonly attrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#attr_value DataThunderAamAuthenticationSessionAttrOper#attr_value}
  */
  readonly attrValue?: string;
}

export function dataThunderAamAuthenticationSessionAttrOperOperAttrListStructToTerraform(struct?: DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_name: cdktf.stringToTerraform(struct!.attrName),
    attr_type: cdktf.stringToTerraform(struct!.attrType),
    attr_value: cdktf.stringToTerraform(struct!.attrValue),
  }
}


export function dataThunderAamAuthenticationSessionAttrOperOperAttrListStructToHclTerraform(struct?: DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_name: {
      value: cdktf.stringToHclTerraform(struct!.attrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_type: {
      value: cdktf.stringToHclTerraform(struct!.attrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_value: {
      value: cdktf.stringToHclTerraform(struct!.attrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSessionAttrOperOperAttrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrName = this._attrName;
    }
    if (this._attrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrType = this._attrType;
    }
    if (this._attrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrValue = this._attrValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrName = undefined;
      this._attrType = undefined;
      this._attrValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrName = value.attrName;
      this._attrType = value.attrType;
      this._attrValue = value.attrValue;
    }
  }

  // attr_name - computed: false, optional: true, required: false
  private _attrName?: string; 
  public get attrName() {
    return this.getStringAttribute('attr_name');
  }
  public set attrName(value: string) {
    this._attrName = value;
  }
  public resetAttrName() {
    this._attrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrNameInput() {
    return this._attrName;
  }

  // attr_type - computed: false, optional: true, required: false
  private _attrType?: string; 
  public get attrType() {
    return this.getStringAttribute('attr_type');
  }
  public set attrType(value: string) {
    this._attrType = value;
  }
  public resetAttrType() {
    this._attrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrTypeInput() {
    return this._attrType;
  }

  // attr_value - computed: false, optional: true, required: false
  private _attrValue?: string; 
  public get attrValue() {
    return this.getStringAttribute('attr_value');
  }
  public set attrValue(value: string) {
    this._attrValue = value;
  }
  public resetAttrValue() {
    this._attrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrValueInput() {
    return this._attrValue;
  }
}

export class DataThunderAamAuthenticationSessionAttrOperOperAttrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSessionAttrOperOperAttrListStructOutputReference {
    return new DataThunderAamAuthenticationSessionAttrOperOperAttrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSessionAttrOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#partition DataThunderAamAuthenticationSessionAttrOper#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#sid DataThunderAamAuthenticationSessionAttrOper#sid}
  */
  readonly sid?: number;
  /**
  * attr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#attr_list DataThunderAamAuthenticationSessionAttrOper#attr_list}
  */
  readonly attrList?: DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationSessionAttrOperOperToTerraform(struct?: DataThunderAamAuthenticationSessionAttrOperOperOutputReference | DataThunderAamAuthenticationSessionAttrOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition: cdktf.stringToTerraform(struct!.partition),
    sid: cdktf.numberToTerraform(struct!.sid),
    attr_list: cdktf.listMapper(dataThunderAamAuthenticationSessionAttrOperOperAttrListStructToTerraform, true)(struct!.attrList),
  }
}


export function dataThunderAamAuthenticationSessionAttrOperOperToHclTerraform(struct?: DataThunderAamAuthenticationSessionAttrOperOperOutputReference | DataThunderAamAuthenticationSessionAttrOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.numberToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSessionAttrOperOperAttrListStructToHclTerraform, true)(struct!.attrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSessionAttrOperOperAttrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSessionAttrOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationSessionAttrOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._attrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrList = this._attrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSessionAttrOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partition = undefined;
      this._sid = undefined;
      this._attrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partition = value.partition;
      this._sid = value.sid;
      this._attrList.internalValue = value.attrList;
    }
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: number; 
  public get sid() {
    return this.getNumberAttribute('sid');
  }
  public set sid(value: number) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // attr_list - computed: false, optional: true, required: false
  private _attrList = new DataThunderAamAuthenticationSessionAttrOperOperAttrListStructList(this, "attr_list", false);
  public get attrList() {
    return this._attrList;
  }
  public putAttrList(value: DataThunderAamAuthenticationSessionAttrOperOperAttrListStruct[] | cdktf.IResolvable) {
    this._attrList.internalValue = value;
  }
  public resetAttrList() {
    this._attrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrListInput() {
    return this._attrList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper thunder_aam_authentication_session_attr_oper}
*/
export class DataThunderAamAuthenticationSessionAttrOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_session_attr_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationSessionAttrOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationSessionAttrOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationSessionAttrOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationSessionAttrOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_session_attr_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_session_attr_oper thunder_aam_authentication_session_attr_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationSessionAttrOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationSessionAttrOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_session_attr_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationSessionAttrOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationSessionAttrOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderAamAuthenticationSessionAttrOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderAamAuthenticationSessionAttrOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationSessionAttrOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
