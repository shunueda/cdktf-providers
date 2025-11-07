// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthUpReasonOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper#id DataThunderSlbHealthUpReasonOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper#oper DataThunderSlbHealthUpReasonOper#oper}
  */
  readonly oper?: DataThunderSlbHealthUpReasonOperOper;
}
export interface DataThunderSlbHealthUpReasonOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper#up_id DataThunderSlbHealthUpReasonOper#up_id}
  */
  readonly upId?: number;
  /**
  * health up reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper#up_reason DataThunderSlbHealthUpReasonOper#up_reason}
  */
  readonly upReason?: string;
}

export function dataThunderSlbHealthUpReasonOperOperToTerraform(struct?: DataThunderSlbHealthUpReasonOperOperOutputReference | DataThunderSlbHealthUpReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    up_id: cdktf.numberToTerraform(struct!.upId),
    up_reason: cdktf.stringToTerraform(struct!.upReason),
  }
}


export function dataThunderSlbHealthUpReasonOperOperToHclTerraform(struct?: DataThunderSlbHealthUpReasonOperOperOutputReference | DataThunderSlbHealthUpReasonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    up_id: {
      value: cdktf.numberToHclTerraform(struct!.upId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_reason: {
      value: cdktf.stringToHclTerraform(struct!.upReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthUpReasonOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthUpReasonOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upId !== undefined) {
      hasAnyValues = true;
      internalValueResult.upId = this._upId;
    }
    if (this._upReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.upReason = this._upReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthUpReasonOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upId = undefined;
      this._upReason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upId = value.upId;
      this._upReason = value.upReason;
    }
  }

  // up_id - computed: false, optional: true, required: false
  private _upId?: number; 
  public get upId() {
    return this.getNumberAttribute('up_id');
  }
  public set upId(value: number) {
    this._upId = value;
  }
  public resetUpId() {
    this._upId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upIdInput() {
    return this._upId;
  }

  // up_reason - computed: false, optional: true, required: false
  private _upReason?: string; 
  public get upReason() {
    return this.getStringAttribute('up_reason');
  }
  public set upReason(value: string) {
    this._upReason = value;
  }
  public resetUpReason() {
    this._upReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upReasonInput() {
    return this._upReason;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper thunder_slb_health_up_reason_oper}
*/
export class DataThunderSlbHealthUpReasonOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_up_reason_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthUpReasonOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthUpReasonOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthUpReasonOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthUpReasonOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_up_reason_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_up_reason_oper thunder_slb_health_up_reason_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthUpReasonOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthUpReasonOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_up_reason_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderSlbHealthUpReasonOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthUpReasonOperOper) {
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
      oper: dataThunderSlbHealthUpReasonOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHealthUpReasonOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthUpReasonOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
