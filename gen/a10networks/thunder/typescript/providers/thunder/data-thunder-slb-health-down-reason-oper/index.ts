// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthDownReasonOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper#id DataThunderSlbHealthDownReasonOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper#oper DataThunderSlbHealthDownReasonOper#oper}
  */
  readonly oper?: DataThunderSlbHealthDownReasonOperOper;
}
export interface DataThunderSlbHealthDownReasonOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper#down_id DataThunderSlbHealthDownReasonOper#down_id}
  */
  readonly downId?: number;
  /**
  * health down reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper#down_reason DataThunderSlbHealthDownReasonOper#down_reason}
  */
  readonly downReason?: string;
}

export function dataThunderSlbHealthDownReasonOperOperToTerraform(struct?: DataThunderSlbHealthDownReasonOperOperOutputReference | DataThunderSlbHealthDownReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_id: cdktf.numberToTerraform(struct!.downId),
    down_reason: cdktf.stringToTerraform(struct!.downReason),
  }
}


export function dataThunderSlbHealthDownReasonOperOperToHclTerraform(struct?: DataThunderSlbHealthDownReasonOperOperOutputReference | DataThunderSlbHealthDownReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_id: {
      value: cdktf.numberToHclTerraform(struct!.downId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_reason: {
      value: cdktf.stringToHclTerraform(struct!.downReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthDownReasonOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthDownReasonOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downId !== undefined) {
      hasAnyValues = true;
      internalValueResult.downId = this._downId;
    }
    if (this._downReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.downReason = this._downReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthDownReasonOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downId = undefined;
      this._downReason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downId = value.downId;
      this._downReason = value.downReason;
    }
  }

  // down_id - computed: false, optional: true, required: false
  private _downId?: number; 
  public get downId() {
    return this.getNumberAttribute('down_id');
  }
  public set downId(value: number) {
    this._downId = value;
  }
  public resetDownId() {
    this._downId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downIdInput() {
    return this._downId;
  }

  // down_reason - computed: false, optional: true, required: false
  private _downReason?: string; 
  public get downReason() {
    return this.getStringAttribute('down_reason');
  }
  public set downReason(value: string) {
    this._downReason = value;
  }
  public resetDownReason() {
    this._downReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downReasonInput() {
    return this._downReason;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper thunder_slb_health_down_reason_oper}
*/
export class DataThunderSlbHealthDownReasonOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_down_reason_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthDownReasonOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthDownReasonOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthDownReasonOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthDownReasonOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_down_reason_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_down_reason_oper thunder_slb_health_down_reason_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthDownReasonOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthDownReasonOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_down_reason_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderSlbHealthDownReasonOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthDownReasonOperOper) {
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
      oper: dataThunderSlbHealthDownReasonOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHealthDownReasonOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthDownReasonOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
