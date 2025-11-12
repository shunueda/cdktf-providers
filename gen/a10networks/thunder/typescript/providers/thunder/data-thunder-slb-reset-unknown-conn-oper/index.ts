// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbResetUnknownConnOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#id DataThunderSlbResetUnknownConnOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#oper DataThunderSlbResetUnknownConnOper#oper}
  */
  readonly oper?: DataThunderSlbResetUnknownConnOperOper;
}
export interface DataThunderSlbResetUnknownConnOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#unknown_conn_current_rate DataThunderSlbResetUnknownConnOper#unknown_conn_current_rate}
  */
  readonly unknownConnCurrentRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#unknown_conn_rate_limit DataThunderSlbResetUnknownConnOper#unknown_conn_rate_limit}
  */
  readonly unknownConnRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#unknown_conn_rate_limit_drop DataThunderSlbResetUnknownConnOper#unknown_conn_rate_limit_drop}
  */
  readonly unknownConnRateLimitDrop?: number;
}

export function dataThunderSlbResetUnknownConnOperOperToTerraform(struct?: DataThunderSlbResetUnknownConnOperOperOutputReference | DataThunderSlbResetUnknownConnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknown_conn_current_rate: cdktf.numberToTerraform(struct!.unknownConnCurrentRate),
    unknown_conn_rate_limit: cdktf.numberToTerraform(struct!.unknownConnRateLimit),
    unknown_conn_rate_limit_drop: cdktf.numberToTerraform(struct!.unknownConnRateLimitDrop),
  }
}


export function dataThunderSlbResetUnknownConnOperOperToHclTerraform(struct?: DataThunderSlbResetUnknownConnOperOperOutputReference | DataThunderSlbResetUnknownConnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknown_conn_current_rate: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnCurrentRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_conn_rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnRateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbResetUnknownConnOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbResetUnknownConnOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknownConnCurrentRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnCurrentRate = this._unknownConnCurrentRate;
    }
    if (this._unknownConnRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnRateLimit = this._unknownConnRateLimit;
    }
    if (this._unknownConnRateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnRateLimitDrop = this._unknownConnRateLimitDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbResetUnknownConnOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unknownConnCurrentRate = undefined;
      this._unknownConnRateLimit = undefined;
      this._unknownConnRateLimitDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unknownConnCurrentRate = value.unknownConnCurrentRate;
      this._unknownConnRateLimit = value.unknownConnRateLimit;
      this._unknownConnRateLimitDrop = value.unknownConnRateLimitDrop;
    }
  }

  // unknown_conn_current_rate - computed: false, optional: true, required: false
  private _unknownConnCurrentRate?: number; 
  public get unknownConnCurrentRate() {
    return this.getNumberAttribute('unknown_conn_current_rate');
  }
  public set unknownConnCurrentRate(value: number) {
    this._unknownConnCurrentRate = value;
  }
  public resetUnknownConnCurrentRate() {
    this._unknownConnCurrentRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnCurrentRateInput() {
    return this._unknownConnCurrentRate;
  }

  // unknown_conn_rate_limit - computed: false, optional: true, required: false
  private _unknownConnRateLimit?: number; 
  public get unknownConnRateLimit() {
    return this.getNumberAttribute('unknown_conn_rate_limit');
  }
  public set unknownConnRateLimit(value: number) {
    this._unknownConnRateLimit = value;
  }
  public resetUnknownConnRateLimit() {
    this._unknownConnRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnRateLimitInput() {
    return this._unknownConnRateLimit;
  }

  // unknown_conn_rate_limit_drop - computed: false, optional: true, required: false
  private _unknownConnRateLimitDrop?: number; 
  public get unknownConnRateLimitDrop() {
    return this.getNumberAttribute('unknown_conn_rate_limit_drop');
  }
  public set unknownConnRateLimitDrop(value: number) {
    this._unknownConnRateLimitDrop = value;
  }
  public resetUnknownConnRateLimitDrop() {
    this._unknownConnRateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnRateLimitDropInput() {
    return this._unknownConnRateLimitDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper thunder_slb_reset_unknown_conn_oper}
*/
export class DataThunderSlbResetUnknownConnOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_reset_unknown_conn_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbResetUnknownConnOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbResetUnknownConnOper to import
  * @param importFromId The id of the existing DataThunderSlbResetUnknownConnOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbResetUnknownConnOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_reset_unknown_conn_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_reset_unknown_conn_oper thunder_slb_reset_unknown_conn_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbResetUnknownConnOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbResetUnknownConnOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_reset_unknown_conn_oper',
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
  private _oper = new DataThunderSlbResetUnknownConnOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbResetUnknownConnOperOper) {
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
      oper: dataThunderSlbResetUnknownConnOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbResetUnknownConnOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbResetUnknownConnOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
