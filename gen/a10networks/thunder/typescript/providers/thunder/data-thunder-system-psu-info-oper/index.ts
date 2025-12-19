// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPsuInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#id DataThunderSystemPsuInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#oper DataThunderSystemPsuInfoOper#oper}
  */
  readonly oper?: DataThunderSystemPsuInfoOperOper;
}
export interface DataThunderSystemPsuInfoOperOperPsuInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#error DataThunderSystemPsuInfoOper#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#left_serial_number DataThunderSystemPsuInfoOper#left_serial_number}
  */
  readonly leftSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#lower_left_serial_number DataThunderSystemPsuInfoOper#lower_left_serial_number}
  */
  readonly lowerLeftSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#lower_right_serial_number DataThunderSystemPsuInfoOper#lower_right_serial_number}
  */
  readonly lowerRightSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#right_serial_number DataThunderSystemPsuInfoOper#right_serial_number}
  */
  readonly rightSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#upper_left_serial_number DataThunderSystemPsuInfoOper#upper_left_serial_number}
  */
  readonly upperLeftSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#upper_right_serial_number DataThunderSystemPsuInfoOper#upper_right_serial_number}
  */
  readonly upperRightSerialNumber?: string;
}

export function dataThunderSystemPsuInfoOperOperPsuInfoToTerraform(struct?: DataThunderSystemPsuInfoOperOperPsuInfoOutputReference | DataThunderSystemPsuInfoOperOperPsuInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    left_serial_number: cdktf.stringToTerraform(struct!.leftSerialNumber),
    lower_left_serial_number: cdktf.stringToTerraform(struct!.lowerLeftSerialNumber),
    lower_right_serial_number: cdktf.stringToTerraform(struct!.lowerRightSerialNumber),
    right_serial_number: cdktf.stringToTerraform(struct!.rightSerialNumber),
    upper_left_serial_number: cdktf.stringToTerraform(struct!.upperLeftSerialNumber),
    upper_right_serial_number: cdktf.stringToTerraform(struct!.upperRightSerialNumber),
  }
}


export function dataThunderSystemPsuInfoOperOperPsuInfoToHclTerraform(struct?: DataThunderSystemPsuInfoOperOperPsuInfoOutputReference | DataThunderSystemPsuInfoOperOperPsuInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.leftSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lower_left_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.lowerLeftSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lower_right_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.lowerRightSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.rightSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upper_left_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.upperLeftSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upper_right_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.upperRightSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPsuInfoOperOperPsuInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPsuInfoOperOperPsuInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._leftSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftSerialNumber = this._leftSerialNumber;
    }
    if (this._lowerLeftSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerLeftSerialNumber = this._lowerLeftSerialNumber;
    }
    if (this._lowerRightSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerRightSerialNumber = this._lowerRightSerialNumber;
    }
    if (this._rightSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightSerialNumber = this._rightSerialNumber;
    }
    if (this._upperLeftSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperLeftSerialNumber = this._upperLeftSerialNumber;
    }
    if (this._upperRightSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperRightSerialNumber = this._upperRightSerialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPsuInfoOperOperPsuInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._error = undefined;
      this._leftSerialNumber = undefined;
      this._lowerLeftSerialNumber = undefined;
      this._lowerRightSerialNumber = undefined;
      this._rightSerialNumber = undefined;
      this._upperLeftSerialNumber = undefined;
      this._upperRightSerialNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._error = value.error;
      this._leftSerialNumber = value.leftSerialNumber;
      this._lowerLeftSerialNumber = value.lowerLeftSerialNumber;
      this._lowerRightSerialNumber = value.lowerRightSerialNumber;
      this._rightSerialNumber = value.rightSerialNumber;
      this._upperLeftSerialNumber = value.upperLeftSerialNumber;
      this._upperRightSerialNumber = value.upperRightSerialNumber;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // left_serial_number - computed: false, optional: true, required: false
  private _leftSerialNumber?: string; 
  public get leftSerialNumber() {
    return this.getStringAttribute('left_serial_number');
  }
  public set leftSerialNumber(value: string) {
    this._leftSerialNumber = value;
  }
  public resetLeftSerialNumber() {
    this._leftSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftSerialNumberInput() {
    return this._leftSerialNumber;
  }

  // lower_left_serial_number - computed: false, optional: true, required: false
  private _lowerLeftSerialNumber?: string; 
  public get lowerLeftSerialNumber() {
    return this.getStringAttribute('lower_left_serial_number');
  }
  public set lowerLeftSerialNumber(value: string) {
    this._lowerLeftSerialNumber = value;
  }
  public resetLowerLeftSerialNumber() {
    this._lowerLeftSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerLeftSerialNumberInput() {
    return this._lowerLeftSerialNumber;
  }

  // lower_right_serial_number - computed: false, optional: true, required: false
  private _lowerRightSerialNumber?: string; 
  public get lowerRightSerialNumber() {
    return this.getStringAttribute('lower_right_serial_number');
  }
  public set lowerRightSerialNumber(value: string) {
    this._lowerRightSerialNumber = value;
  }
  public resetLowerRightSerialNumber() {
    this._lowerRightSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerRightSerialNumberInput() {
    return this._lowerRightSerialNumber;
  }

  // right_serial_number - computed: false, optional: true, required: false
  private _rightSerialNumber?: string; 
  public get rightSerialNumber() {
    return this.getStringAttribute('right_serial_number');
  }
  public set rightSerialNumber(value: string) {
    this._rightSerialNumber = value;
  }
  public resetRightSerialNumber() {
    this._rightSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightSerialNumberInput() {
    return this._rightSerialNumber;
  }

  // upper_left_serial_number - computed: false, optional: true, required: false
  private _upperLeftSerialNumber?: string; 
  public get upperLeftSerialNumber() {
    return this.getStringAttribute('upper_left_serial_number');
  }
  public set upperLeftSerialNumber(value: string) {
    this._upperLeftSerialNumber = value;
  }
  public resetUpperLeftSerialNumber() {
    this._upperLeftSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperLeftSerialNumberInput() {
    return this._upperLeftSerialNumber;
  }

  // upper_right_serial_number - computed: false, optional: true, required: false
  private _upperRightSerialNumber?: string; 
  public get upperRightSerialNumber() {
    return this.getStringAttribute('upper_right_serial_number');
  }
  public set upperRightSerialNumber(value: string) {
    this._upperRightSerialNumber = value;
  }
  public resetUpperRightSerialNumber() {
    this._upperRightSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperRightSerialNumberInput() {
    return this._upperRightSerialNumber;
  }
}
export interface DataThunderSystemPsuInfoOperOper {
  /**
  * psu_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#psu_info DataThunderSystemPsuInfoOper#psu_info}
  */
  readonly psuInfo?: DataThunderSystemPsuInfoOperOperPsuInfo;
}

export function dataThunderSystemPsuInfoOperOperToTerraform(struct?: DataThunderSystemPsuInfoOperOperOutputReference | DataThunderSystemPsuInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psu_info: dataThunderSystemPsuInfoOperOperPsuInfoToTerraform(struct!.psuInfo),
  }
}


export function dataThunderSystemPsuInfoOperOperToHclTerraform(struct?: DataThunderSystemPsuInfoOperOperOutputReference | DataThunderSystemPsuInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psu_info: {
      value: dataThunderSystemPsuInfoOperOperPsuInfoToHclTerraform(struct!.psuInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemPsuInfoOperOperPsuInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPsuInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPsuInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._psuInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.psuInfo = this._psuInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPsuInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._psuInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._psuInfo.internalValue = value.psuInfo;
    }
  }

  // psu_info - computed: false, optional: true, required: false
  private _psuInfo = new DataThunderSystemPsuInfoOperOperPsuInfoOutputReference(this, "psu_info");
  public get psuInfo() {
    return this._psuInfo;
  }
  public putPsuInfo(value: DataThunderSystemPsuInfoOperOperPsuInfo) {
    this._psuInfo.internalValue = value;
  }
  public resetPsuInfo() {
    this._psuInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psuInfoInput() {
    return this._psuInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper thunder_system_psu_info_oper}
*/
export class DataThunderSystemPsuInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_psu_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPsuInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPsuInfoOper to import
  * @param importFromId The id of the existing DataThunderSystemPsuInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPsuInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_psu_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_psu_info_oper thunder_system_psu_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPsuInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPsuInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_psu_info_oper',
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
  private _oper = new DataThunderSystemPsuInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemPsuInfoOperOper) {
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
      oper: dataThunderSystemPsuInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemPsuInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPsuInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
