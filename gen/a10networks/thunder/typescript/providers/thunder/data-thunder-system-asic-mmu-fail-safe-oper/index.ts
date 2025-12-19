// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemAsicMmuFailSafeOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#id DataThunderSystemAsicMmuFailSafeOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#oper DataThunderSystemAsicMmuFailSafeOper#oper}
  */
  readonly oper?: DataThunderSystemAsicMmuFailSafeOperOper;
}
export interface DataThunderSystemAsicMmuFailSafeOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#enable_val DataThunderSystemAsicMmuFailSafeOper#enable_val}
  */
  readonly enableVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#mmu_ser DataThunderSystemAsicMmuFailSafeOper#mmu_ser}
  */
  readonly mmuSer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#mmu_total_error DataThunderSystemAsicMmuFailSafeOper#mmu_total_error}
  */
  readonly mmuTotalError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_bst DataThunderSystemAsicMmuFailSafeOper#parity_bst}
  */
  readonly parityBst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_ecc DataThunderSystemAsicMmuFailSafeOper#parity_ecc}
  */
  readonly parityEcc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_error DataThunderSystemAsicMmuFailSafeOper#parity_error}
  */
  readonly parityError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_ser DataThunderSystemAsicMmuFailSafeOper#parity_ser}
  */
  readonly paritySer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_start_err DataThunderSystemAsicMmuFailSafeOper#parity_start_err}
  */
  readonly parityStartErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#parity_unrecov DataThunderSystemAsicMmuFailSafeOper#parity_unrecov}
  */
  readonly parityUnrecov?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#period_val DataThunderSystemAsicMmuFailSafeOper#period_val}
  */
  readonly periodVal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#reboot_val DataThunderSystemAsicMmuFailSafeOper#reboot_val}
  */
  readonly rebootVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#threshold_val DataThunderSystemAsicMmuFailSafeOper#threshold_val}
  */
  readonly thresholdVal?: number;
}

export function dataThunderSystemAsicMmuFailSafeOperOperToTerraform(struct?: DataThunderSystemAsicMmuFailSafeOperOperOutputReference | DataThunderSystemAsicMmuFailSafeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_val: cdktf.stringToTerraform(struct!.enableVal),
    mmu_ser: cdktf.numberToTerraform(struct!.mmuSer),
    mmu_total_error: cdktf.numberToTerraform(struct!.mmuTotalError),
    parity_bst: cdktf.numberToTerraform(struct!.parityBst),
    parity_ecc: cdktf.numberToTerraform(struct!.parityEcc),
    parity_error: cdktf.numberToTerraform(struct!.parityError),
    parity_ser: cdktf.numberToTerraform(struct!.paritySer),
    parity_start_err: cdktf.numberToTerraform(struct!.parityStartErr),
    parity_unrecov: cdktf.numberToTerraform(struct!.parityUnrecov),
    period_val: cdktf.numberToTerraform(struct!.periodVal),
    reboot_val: cdktf.stringToTerraform(struct!.rebootVal),
    threshold_val: cdktf.numberToTerraform(struct!.thresholdVal),
  }
}


export function dataThunderSystemAsicMmuFailSafeOperOperToHclTerraform(struct?: DataThunderSystemAsicMmuFailSafeOperOperOutputReference | DataThunderSystemAsicMmuFailSafeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_val: {
      value: cdktf.stringToHclTerraform(struct!.enableVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mmu_ser: {
      value: cdktf.numberToHclTerraform(struct!.mmuSer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mmu_total_error: {
      value: cdktf.numberToHclTerraform(struct!.mmuTotalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_bst: {
      value: cdktf.numberToHclTerraform(struct!.parityBst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_ecc: {
      value: cdktf.numberToHclTerraform(struct!.parityEcc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_error: {
      value: cdktf.numberToHclTerraform(struct!.parityError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_ser: {
      value: cdktf.numberToHclTerraform(struct!.paritySer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_start_err: {
      value: cdktf.numberToHclTerraform(struct!.parityStartErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parity_unrecov: {
      value: cdktf.numberToHclTerraform(struct!.parityUnrecov),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_val: {
      value: cdktf.numberToHclTerraform(struct!.periodVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_val: {
      value: cdktf.stringToHclTerraform(struct!.rebootVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_val: {
      value: cdktf.numberToHclTerraform(struct!.thresholdVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemAsicMmuFailSafeOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemAsicMmuFailSafeOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVal = this._enableVal;
    }
    if (this._mmuSer !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmuSer = this._mmuSer;
    }
    if (this._mmuTotalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmuTotalError = this._mmuTotalError;
    }
    if (this._parityBst !== undefined) {
      hasAnyValues = true;
      internalValueResult.parityBst = this._parityBst;
    }
    if (this._parityEcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.parityEcc = this._parityEcc;
    }
    if (this._parityError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parityError = this._parityError;
    }
    if (this._paritySer !== undefined) {
      hasAnyValues = true;
      internalValueResult.paritySer = this._paritySer;
    }
    if (this._parityStartErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.parityStartErr = this._parityStartErr;
    }
    if (this._parityUnrecov !== undefined) {
      hasAnyValues = true;
      internalValueResult.parityUnrecov = this._parityUnrecov;
    }
    if (this._periodVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodVal = this._periodVal;
    }
    if (this._rebootVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootVal = this._rebootVal;
    }
    if (this._thresholdVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVal = this._thresholdVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemAsicMmuFailSafeOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableVal = undefined;
      this._mmuSer = undefined;
      this._mmuTotalError = undefined;
      this._parityBst = undefined;
      this._parityEcc = undefined;
      this._parityError = undefined;
      this._paritySer = undefined;
      this._parityStartErr = undefined;
      this._parityUnrecov = undefined;
      this._periodVal = undefined;
      this._rebootVal = undefined;
      this._thresholdVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableVal = value.enableVal;
      this._mmuSer = value.mmuSer;
      this._mmuTotalError = value.mmuTotalError;
      this._parityBst = value.parityBst;
      this._parityEcc = value.parityEcc;
      this._parityError = value.parityError;
      this._paritySer = value.paritySer;
      this._parityStartErr = value.parityStartErr;
      this._parityUnrecov = value.parityUnrecov;
      this._periodVal = value.periodVal;
      this._rebootVal = value.rebootVal;
      this._thresholdVal = value.thresholdVal;
    }
  }

  // enable_val - computed: false, optional: true, required: false
  private _enableVal?: string; 
  public get enableVal() {
    return this.getStringAttribute('enable_val');
  }
  public set enableVal(value: string) {
    this._enableVal = value;
  }
  public resetEnableVal() {
    this._enableVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableValInput() {
    return this._enableVal;
  }

  // mmu_ser - computed: false, optional: true, required: false
  private _mmuSer?: number; 
  public get mmuSer() {
    return this.getNumberAttribute('mmu_ser');
  }
  public set mmuSer(value: number) {
    this._mmuSer = value;
  }
  public resetMmuSer() {
    this._mmuSer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmuSerInput() {
    return this._mmuSer;
  }

  // mmu_total_error - computed: false, optional: true, required: false
  private _mmuTotalError?: number; 
  public get mmuTotalError() {
    return this.getNumberAttribute('mmu_total_error');
  }
  public set mmuTotalError(value: number) {
    this._mmuTotalError = value;
  }
  public resetMmuTotalError() {
    this._mmuTotalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmuTotalErrorInput() {
    return this._mmuTotalError;
  }

  // parity_bst - computed: false, optional: true, required: false
  private _parityBst?: number; 
  public get parityBst() {
    return this.getNumberAttribute('parity_bst');
  }
  public set parityBst(value: number) {
    this._parityBst = value;
  }
  public resetParityBst() {
    this._parityBst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityBstInput() {
    return this._parityBst;
  }

  // parity_ecc - computed: false, optional: true, required: false
  private _parityEcc?: number; 
  public get parityEcc() {
    return this.getNumberAttribute('parity_ecc');
  }
  public set parityEcc(value: number) {
    this._parityEcc = value;
  }
  public resetParityEcc() {
    this._parityEcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityEccInput() {
    return this._parityEcc;
  }

  // parity_error - computed: false, optional: true, required: false
  private _parityError?: number; 
  public get parityError() {
    return this.getNumberAttribute('parity_error');
  }
  public set parityError(value: number) {
    this._parityError = value;
  }
  public resetParityError() {
    this._parityError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityErrorInput() {
    return this._parityError;
  }

  // parity_ser - computed: false, optional: true, required: false
  private _paritySer?: number; 
  public get paritySer() {
    return this.getNumberAttribute('parity_ser');
  }
  public set paritySer(value: number) {
    this._paritySer = value;
  }
  public resetParitySer() {
    this._paritySer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paritySerInput() {
    return this._paritySer;
  }

  // parity_start_err - computed: false, optional: true, required: false
  private _parityStartErr?: number; 
  public get parityStartErr() {
    return this.getNumberAttribute('parity_start_err');
  }
  public set parityStartErr(value: number) {
    this._parityStartErr = value;
  }
  public resetParityStartErr() {
    this._parityStartErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityStartErrInput() {
    return this._parityStartErr;
  }

  // parity_unrecov - computed: false, optional: true, required: false
  private _parityUnrecov?: number; 
  public get parityUnrecov() {
    return this.getNumberAttribute('parity_unrecov');
  }
  public set parityUnrecov(value: number) {
    this._parityUnrecov = value;
  }
  public resetParityUnrecov() {
    this._parityUnrecov = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parityUnrecovInput() {
    return this._parityUnrecov;
  }

  // period_val - computed: false, optional: true, required: false
  private _periodVal?: number; 
  public get periodVal() {
    return this.getNumberAttribute('period_val');
  }
  public set periodVal(value: number) {
    this._periodVal = value;
  }
  public resetPeriodVal() {
    this._periodVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodValInput() {
    return this._periodVal;
  }

  // reboot_val - computed: false, optional: true, required: false
  private _rebootVal?: string; 
  public get rebootVal() {
    return this.getStringAttribute('reboot_val');
  }
  public set rebootVal(value: string) {
    this._rebootVal = value;
  }
  public resetRebootVal() {
    this._rebootVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootValInput() {
    return this._rebootVal;
  }

  // threshold_val - computed: false, optional: true, required: false
  private _thresholdVal?: number; 
  public get thresholdVal() {
    return this.getNumberAttribute('threshold_val');
  }
  public set thresholdVal(value: number) {
    this._thresholdVal = value;
  }
  public resetThresholdVal() {
    this._thresholdVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValInput() {
    return this._thresholdVal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper thunder_system_asic_mmu_fail_safe_oper}
*/
export class DataThunderSystemAsicMmuFailSafeOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_asic_mmu_fail_safe_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemAsicMmuFailSafeOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemAsicMmuFailSafeOper to import
  * @param importFromId The id of the existing DataThunderSystemAsicMmuFailSafeOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemAsicMmuFailSafeOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_asic_mmu_fail_safe_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_asic_mmu_fail_safe_oper thunder_system_asic_mmu_fail_safe_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemAsicMmuFailSafeOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemAsicMmuFailSafeOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_asic_mmu_fail_safe_oper',
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
  private _oper = new DataThunderSystemAsicMmuFailSafeOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemAsicMmuFailSafeOperOper) {
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
      oper: dataThunderSystemAsicMmuFailSafeOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemAsicMmuFailSafeOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemAsicMmuFailSafeOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
