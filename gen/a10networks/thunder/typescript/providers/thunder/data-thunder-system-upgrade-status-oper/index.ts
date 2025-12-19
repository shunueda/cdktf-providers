// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemUpgradeStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#id DataThunderSystemUpgradeStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#oper DataThunderSystemUpgradeStatusOper#oper}
  */
  readonly oper?: DataThunderSystemUpgradeStatusOperOper;
}
export interface DataThunderSystemUpgradeStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#message DataThunderSystemUpgradeStatusOper#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#rollback_pri DataThunderSystemUpgradeStatusOper#rollback_pri}
  */
  readonly rollbackPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#rollback_sec DataThunderSystemUpgradeStatusOper#rollback_sec}
  */
  readonly rollbackSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#status DataThunderSystemUpgradeStatusOper#status}
  */
  readonly status?: number;
}

export function dataThunderSystemUpgradeStatusOperOperToTerraform(struct?: DataThunderSystemUpgradeStatusOperOperOutputReference | DataThunderSystemUpgradeStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    rollback_pri: cdktf.stringToTerraform(struct!.rollbackPri),
    rollback_sec: cdktf.stringToTerraform(struct!.rollbackSec),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function dataThunderSystemUpgradeStatusOperOperToHclTerraform(struct?: DataThunderSystemUpgradeStatusOperOperOutputReference | DataThunderSystemUpgradeStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_pri: {
      value: cdktf.stringToHclTerraform(struct!.rollbackPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_sec: {
      value: cdktf.stringToHclTerraform(struct!.rollbackSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemUpgradeStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemUpgradeStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._rollbackPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackPri = this._rollbackPri;
    }
    if (this._rollbackSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackSec = this._rollbackSec;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemUpgradeStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._rollbackPri = undefined;
      this._rollbackSec = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._rollbackPri = value.rollbackPri;
      this._rollbackSec = value.rollbackSec;
      this._status = value.status;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // rollback_pri - computed: false, optional: true, required: false
  private _rollbackPri?: string; 
  public get rollbackPri() {
    return this.getStringAttribute('rollback_pri');
  }
  public set rollbackPri(value: string) {
    this._rollbackPri = value;
  }
  public resetRollbackPri() {
    this._rollbackPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackPriInput() {
    return this._rollbackPri;
  }

  // rollback_sec - computed: false, optional: true, required: false
  private _rollbackSec?: string; 
  public get rollbackSec() {
    return this.getStringAttribute('rollback_sec');
  }
  public set rollbackSec(value: string) {
    this._rollbackSec = value;
  }
  public resetRollbackSec() {
    this._rollbackSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackSecInput() {
    return this._rollbackSec;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper thunder_system_upgrade_status_oper}
*/
export class DataThunderSystemUpgradeStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_upgrade_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemUpgradeStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemUpgradeStatusOper to import
  * @param importFromId The id of the existing DataThunderSystemUpgradeStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemUpgradeStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_upgrade_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_upgrade_status_oper thunder_system_upgrade_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemUpgradeStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemUpgradeStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_upgrade_status_oper',
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
  private _oper = new DataThunderSystemUpgradeStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemUpgradeStatusOperOper) {
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
      oper: dataThunderSystemUpgradeStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemUpgradeStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemUpgradeStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
