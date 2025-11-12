// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPlayerIdGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#id DataThunderSlbPlayerIdGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#oper DataThunderSlbPlayerIdGlobalOper#oper}
  */
  readonly oper?: DataThunderSlbPlayerIdGlobalOperOper;
}
export interface DataThunderSlbPlayerIdGlobalOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#state DataThunderSlbPlayerIdGlobalOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#table_count DataThunderSlbPlayerIdGlobalOper#table_count}
  */
  readonly tableCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#time_to_active DataThunderSlbPlayerIdGlobalOper#time_to_active}
  */
  readonly timeToActive?: number;
}

export function dataThunderSlbPlayerIdGlobalOperOperToTerraform(struct?: DataThunderSlbPlayerIdGlobalOperOperOutputReference | DataThunderSlbPlayerIdGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    table_count: cdktf.numberToTerraform(struct!.tableCount),
    time_to_active: cdktf.numberToTerraform(struct!.timeToActive),
  }
}


export function dataThunderSlbPlayerIdGlobalOperOperToHclTerraform(struct?: DataThunderSlbPlayerIdGlobalOperOperOutputReference | DataThunderSlbPlayerIdGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_count: {
      value: cdktf.numberToHclTerraform(struct!.tableCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_active: {
      value: cdktf.numberToHclTerraform(struct!.timeToActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPlayerIdGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPlayerIdGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tableCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCount = this._tableCount;
    }
    if (this._timeToActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToActive = this._timeToActive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPlayerIdGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
      this._tableCount = undefined;
      this._timeToActive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
      this._tableCount = value.tableCount;
      this._timeToActive = value.timeToActive;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // table_count - computed: false, optional: true, required: false
  private _tableCount?: number; 
  public get tableCount() {
    return this.getNumberAttribute('table_count');
  }
  public set tableCount(value: number) {
    this._tableCount = value;
  }
  public resetTableCount() {
    this._tableCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCountInput() {
    return this._tableCount;
  }

  // time_to_active - computed: false, optional: true, required: false
  private _timeToActive?: number; 
  public get timeToActive() {
    return this.getNumberAttribute('time_to_active');
  }
  public set timeToActive(value: number) {
    this._timeToActive = value;
  }
  public resetTimeToActive() {
    this._timeToActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToActiveInput() {
    return this._timeToActive;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper thunder_slb_player_id_global_oper}
*/
export class DataThunderSlbPlayerIdGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_player_id_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPlayerIdGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPlayerIdGlobalOper to import
  * @param importFromId The id of the existing DataThunderSlbPlayerIdGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPlayerIdGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_player_id_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_global_oper thunder_slb_player_id_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPlayerIdGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPlayerIdGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_player_id_global_oper',
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
  private _oper = new DataThunderSlbPlayerIdGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbPlayerIdGlobalOperOper) {
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
      oper: dataThunderSlbPlayerIdGlobalOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbPlayerIdGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPlayerIdGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
