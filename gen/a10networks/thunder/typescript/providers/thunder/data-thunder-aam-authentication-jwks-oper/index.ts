// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationJwksOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#id DataThunderAamAuthenticationJwksOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#oper DataThunderAamAuthenticationJwksOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationJwksOperOper;
}
export interface DataThunderAamAuthenticationJwksOperOperJwkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#jwk_name DataThunderAamAuthenticationJwksOper#jwk_name}
  */
  readonly jwkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#jwk_size DataThunderAamAuthenticationJwksOper#jwk_size}
  */
  readonly jwkSize?: number;
}

export function dataThunderAamAuthenticationJwksOperOperJwkListStructToTerraform(struct?: DataThunderAamAuthenticationJwksOperOperJwkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwk_name: cdktf.stringToTerraform(struct!.jwkName),
    jwk_size: cdktf.numberToTerraform(struct!.jwkSize),
  }
}


export function dataThunderAamAuthenticationJwksOperOperJwkListStructToHclTerraform(struct?: DataThunderAamAuthenticationJwksOperOperJwkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwk_name: {
      value: cdktf.stringToHclTerraform(struct!.jwkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwk_size: {
      value: cdktf.numberToHclTerraform(struct!.jwkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationJwksOperOperJwkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationJwksOperOperJwkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwkName = this._jwkName;
    }
    if (this._jwkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwkSize = this._jwkSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationJwksOperOperJwkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwkName = undefined;
      this._jwkSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwkName = value.jwkName;
      this._jwkSize = value.jwkSize;
    }
  }

  // jwk_name - computed: false, optional: true, required: false
  private _jwkName?: string; 
  public get jwkName() {
    return this.getStringAttribute('jwk_name');
  }
  public set jwkName(value: string) {
    this._jwkName = value;
  }
  public resetJwkName() {
    this._jwkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwkNameInput() {
    return this._jwkName;
  }

  // jwk_size - computed: false, optional: true, required: false
  private _jwkSize?: number; 
  public get jwkSize() {
    return this.getNumberAttribute('jwk_size');
  }
  public set jwkSize(value: number) {
    this._jwkSize = value;
  }
  public resetJwkSize() {
    this._jwkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwkSizeInput() {
    return this._jwkSize;
  }
}

export class DataThunderAamAuthenticationJwksOperOperJwkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationJwksOperOperJwkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationJwksOperOperJwkListStructOutputReference {
    return new DataThunderAamAuthenticationJwksOperOperJwkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationJwksOperOper {
  /**
  * jwk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#jwk_list DataThunderAamAuthenticationJwksOper#jwk_list}
  */
  readonly jwkList?: DataThunderAamAuthenticationJwksOperOperJwkListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationJwksOperOperToTerraform(struct?: DataThunderAamAuthenticationJwksOperOperOutputReference | DataThunderAamAuthenticationJwksOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwk_list: cdktf.listMapper(dataThunderAamAuthenticationJwksOperOperJwkListStructToTerraform, true)(struct!.jwkList),
  }
}


export function dataThunderAamAuthenticationJwksOperOperToHclTerraform(struct?: DataThunderAamAuthenticationJwksOperOperOutputReference | DataThunderAamAuthenticationJwksOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwk_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationJwksOperOperJwkListStructToHclTerraform, true)(struct!.jwkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationJwksOperOperJwkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationJwksOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationJwksOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwkList = this._jwkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationJwksOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jwkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jwkList.internalValue = value.jwkList;
    }
  }

  // jwk_list - computed: false, optional: true, required: false
  private _jwkList = new DataThunderAamAuthenticationJwksOperOperJwkListStructList(this, "jwk_list", false);
  public get jwkList() {
    return this._jwkList;
  }
  public putJwkList(value: DataThunderAamAuthenticationJwksOperOperJwkListStruct[] | cdktf.IResolvable) {
    this._jwkList.internalValue = value;
  }
  public resetJwkList() {
    this._jwkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwkListInput() {
    return this._jwkList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper thunder_aam_authentication_jwks_oper}
*/
export class DataThunderAamAuthenticationJwksOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_jwks_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationJwksOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationJwksOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationJwksOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationJwksOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_jwks_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_jwks_oper thunder_aam_authentication_jwks_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationJwksOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationJwksOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_jwks_oper',
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
  private _oper = new DataThunderAamAuthenticationJwksOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationJwksOperOper) {
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
      oper: dataThunderAamAuthenticationJwksOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAuthenticationJwksOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationJwksOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
