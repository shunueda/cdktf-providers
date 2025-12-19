// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewChassisDetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#id DataThunderSystemViewChassisDetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#oper DataThunderSystemViewChassisDetailOper#oper}
  */
  readonly oper?: DataThunderSystemViewChassisDetailOperOper;
}
export interface DataThunderSystemViewChassisDetailOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#is_now_single_board DataThunderSystemViewChassisDetailOper#is_now_single_board}
  */
  readonly isNowSingleBoard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#platform_name DataThunderSystemViewChassisDetailOper#platform_name}
  */
  readonly platformName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#single_brd_mode_fallback DataThunderSystemViewChassisDetailOper#single_brd_mode_fallback}
  */
  readonly singleBrdModeFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#single_brd_mode_forced DataThunderSystemViewChassisDetailOper#single_brd_mode_forced}
  */
  readonly singleBrdModeForced?: string;
}

export function dataThunderSystemViewChassisDetailOperOperToTerraform(struct?: DataThunderSystemViewChassisDetailOperOperOutputReference | DataThunderSystemViewChassisDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_now_single_board: cdktf.stringToTerraform(struct!.isNowSingleBoard),
    platform_name: cdktf.stringToTerraform(struct!.platformName),
    single_brd_mode_fallback: cdktf.stringToTerraform(struct!.singleBrdModeFallback),
    single_brd_mode_forced: cdktf.stringToTerraform(struct!.singleBrdModeForced),
  }
}


export function dataThunderSystemViewChassisDetailOperOperToHclTerraform(struct?: DataThunderSystemViewChassisDetailOperOperOutputReference | DataThunderSystemViewChassisDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_now_single_board: {
      value: cdktf.stringToHclTerraform(struct!.isNowSingleBoard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_name: {
      value: cdktf.stringToHclTerraform(struct!.platformName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_brd_mode_fallback: {
      value: cdktf.stringToHclTerraform(struct!.singleBrdModeFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_brd_mode_forced: {
      value: cdktf.stringToHclTerraform(struct!.singleBrdModeForced),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewChassisDetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewChassisDetailOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isNowSingleBoard !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNowSingleBoard = this._isNowSingleBoard;
    }
    if (this._platformName !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformName = this._platformName;
    }
    if (this._singleBrdModeFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleBrdModeFallback = this._singleBrdModeFallback;
    }
    if (this._singleBrdModeForced !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleBrdModeForced = this._singleBrdModeForced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewChassisDetailOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isNowSingleBoard = undefined;
      this._platformName = undefined;
      this._singleBrdModeFallback = undefined;
      this._singleBrdModeForced = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isNowSingleBoard = value.isNowSingleBoard;
      this._platformName = value.platformName;
      this._singleBrdModeFallback = value.singleBrdModeFallback;
      this._singleBrdModeForced = value.singleBrdModeForced;
    }
  }

  // is_now_single_board - computed: false, optional: true, required: false
  private _isNowSingleBoard?: string; 
  public get isNowSingleBoard() {
    return this.getStringAttribute('is_now_single_board');
  }
  public set isNowSingleBoard(value: string) {
    this._isNowSingleBoard = value;
  }
  public resetIsNowSingleBoard() {
    this._isNowSingleBoard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNowSingleBoardInput() {
    return this._isNowSingleBoard;
  }

  // platform_name - computed: false, optional: true, required: false
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  public resetPlatformName() {
    this._platformName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // single_brd_mode_fallback - computed: false, optional: true, required: false
  private _singleBrdModeFallback?: string; 
  public get singleBrdModeFallback() {
    return this.getStringAttribute('single_brd_mode_fallback');
  }
  public set singleBrdModeFallback(value: string) {
    this._singleBrdModeFallback = value;
  }
  public resetSingleBrdModeFallback() {
    this._singleBrdModeFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleBrdModeFallbackInput() {
    return this._singleBrdModeFallback;
  }

  // single_brd_mode_forced - computed: false, optional: true, required: false
  private _singleBrdModeForced?: string; 
  public get singleBrdModeForced() {
    return this.getStringAttribute('single_brd_mode_forced');
  }
  public set singleBrdModeForced(value: string) {
    this._singleBrdModeForced = value;
  }
  public resetSingleBrdModeForced() {
    this._singleBrdModeForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleBrdModeForcedInput() {
    return this._singleBrdModeForced;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper thunder_system_view_chassis_detail_oper}
*/
export class DataThunderSystemViewChassisDetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_chassis_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewChassisDetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewChassisDetailOper to import
  * @param importFromId The id of the existing DataThunderSystemViewChassisDetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewChassisDetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_chassis_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_chassis_detail_oper thunder_system_view_chassis_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewChassisDetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewChassisDetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_chassis_detail_oper',
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
  private _oper = new DataThunderSystemViewChassisDetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewChassisDetailOperOper) {
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
      oper: dataThunderSystemViewChassisDetailOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewChassisDetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewChassisDetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
