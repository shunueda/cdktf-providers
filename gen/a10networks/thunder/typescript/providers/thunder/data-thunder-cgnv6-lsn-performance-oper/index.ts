// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnPerformanceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#id DataThunderCgnv6LsnPerformanceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#oper DataThunderCgnv6LsnPerformanceOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnPerformanceOperOper;
}
export interface DataThunderCgnv6LsnPerformanceOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#data_sessions DataThunderCgnv6LsnPerformanceOper#data_sessions}
  */
  readonly dataSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#full_cone_sessions DataThunderCgnv6LsnPerformanceOper#full_cone_sessions}
  */
  readonly fullConeSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#user_quotas DataThunderCgnv6LsnPerformanceOper#user_quotas}
  */
  readonly userQuotas?: number;
}

export function dataThunderCgnv6LsnPerformanceOperOperToTerraform(struct?: DataThunderCgnv6LsnPerformanceOperOperOutputReference | DataThunderCgnv6LsnPerformanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sessions: cdktf.numberToTerraform(struct!.dataSessions),
    full_cone_sessions: cdktf.numberToTerraform(struct!.fullConeSessions),
    user_quotas: cdktf.numberToTerraform(struct!.userQuotas),
  }
}


export function dataThunderCgnv6LsnPerformanceOperOperToHclTerraform(struct?: DataThunderCgnv6LsnPerformanceOperOperOutputReference | DataThunderCgnv6LsnPerformanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sessions: {
      value: cdktf.numberToHclTerraform(struct!.dataSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_cone_sessions: {
      value: cdktf.numberToHclTerraform(struct!.fullConeSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quotas: {
      value: cdktf.numberToHclTerraform(struct!.userQuotas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPerformanceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPerformanceOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessions = this._dataSessions;
    }
    if (this._fullConeSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullConeSessions = this._fullConeSessions;
    }
    if (this._userQuotas !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotas = this._userQuotas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPerformanceOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessions = undefined;
      this._fullConeSessions = undefined;
      this._userQuotas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessions = value.dataSessions;
      this._fullConeSessions = value.fullConeSessions;
      this._userQuotas = value.userQuotas;
    }
  }

  // data_sessions - computed: false, optional: true, required: false
  private _dataSessions?: number; 
  public get dataSessions() {
    return this.getNumberAttribute('data_sessions');
  }
  public set dataSessions(value: number) {
    this._dataSessions = value;
  }
  public resetDataSessions() {
    this._dataSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsInput() {
    return this._dataSessions;
  }

  // full_cone_sessions - computed: false, optional: true, required: false
  private _fullConeSessions?: number; 
  public get fullConeSessions() {
    return this.getNumberAttribute('full_cone_sessions');
  }
  public set fullConeSessions(value: number) {
    this._fullConeSessions = value;
  }
  public resetFullConeSessions() {
    this._fullConeSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullConeSessionsInput() {
    return this._fullConeSessions;
  }

  // user_quotas - computed: false, optional: true, required: false
  private _userQuotas?: number; 
  public get userQuotas() {
    return this.getNumberAttribute('user_quotas');
  }
  public set userQuotas(value: number) {
    this._userQuotas = value;
  }
  public resetUserQuotas() {
    this._userQuotas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotasInput() {
    return this._userQuotas;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper thunder_cgnv6_lsn_performance_oper}
*/
export class DataThunderCgnv6LsnPerformanceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_performance_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnPerformanceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnPerformanceOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnPerformanceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnPerformanceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_performance_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_performance_oper thunder_cgnv6_lsn_performance_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnPerformanceOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnPerformanceOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_performance_oper',
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
  private _oper = new DataThunderCgnv6LsnPerformanceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnPerformanceOperOper) {
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
      oper: dataThunderCgnv6LsnPerformanceOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LsnPerformanceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnPerformanceOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
