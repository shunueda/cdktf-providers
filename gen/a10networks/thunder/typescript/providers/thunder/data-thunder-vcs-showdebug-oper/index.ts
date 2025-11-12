// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVcsShowdebugOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper#id DataThunderVcsShowdebugOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper#oper DataThunderVcsShowdebugOper#oper}
  */
  readonly oper?: DataThunderVcsShowdebugOperOper;
}
export interface DataThunderVcsShowdebugOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper#debugging_buff_size DataThunderVcsShowdebugOper#debugging_buff_size}
  */
  readonly debuggingBuffSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper#debugging_switches DataThunderVcsShowdebugOper#debugging_switches}
  */
  readonly debuggingSwitches?: string;
}

export function dataThunderVcsShowdebugOperOperToTerraform(struct?: DataThunderVcsShowdebugOperOperOutputReference | DataThunderVcsShowdebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debugging_buff_size: cdktf.numberToTerraform(struct!.debuggingBuffSize),
    debugging_switches: cdktf.stringToTerraform(struct!.debuggingSwitches),
  }
}


export function dataThunderVcsShowdebugOperOperToHclTerraform(struct?: DataThunderVcsShowdebugOperOperOutputReference | DataThunderVcsShowdebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debugging_buff_size: {
      value: cdktf.numberToHclTerraform(struct!.debuggingBuffSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debugging_switches: {
      value: cdktf.stringToHclTerraform(struct!.debuggingSwitches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsShowdebugOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVcsShowdebugOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debuggingBuffSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.debuggingBuffSize = this._debuggingBuffSize;
    }
    if (this._debuggingSwitches !== undefined) {
      hasAnyValues = true;
      internalValueResult.debuggingSwitches = this._debuggingSwitches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsShowdebugOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debuggingBuffSize = undefined;
      this._debuggingSwitches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debuggingBuffSize = value.debuggingBuffSize;
      this._debuggingSwitches = value.debuggingSwitches;
    }
  }

  // debugging_buff_size - computed: false, optional: true, required: false
  private _debuggingBuffSize?: number; 
  public get debuggingBuffSize() {
    return this.getNumberAttribute('debugging_buff_size');
  }
  public set debuggingBuffSize(value: number) {
    this._debuggingBuffSize = value;
  }
  public resetDebuggingBuffSize() {
    this._debuggingBuffSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debuggingBuffSizeInput() {
    return this._debuggingBuffSize;
  }

  // debugging_switches - computed: false, optional: true, required: false
  private _debuggingSwitches?: string; 
  public get debuggingSwitches() {
    return this.getStringAttribute('debugging_switches');
  }
  public set debuggingSwitches(value: string) {
    this._debuggingSwitches = value;
  }
  public resetDebuggingSwitches() {
    this._debuggingSwitches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debuggingSwitchesInput() {
    return this._debuggingSwitches;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper thunder_vcs_showdebug_oper}
*/
export class DataThunderVcsShowdebugOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_showdebug_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVcsShowdebugOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVcsShowdebugOper to import
  * @param importFromId The id of the existing DataThunderVcsShowdebugOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVcsShowdebugOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_showdebug_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_showdebug_oper thunder_vcs_showdebug_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVcsShowdebugOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVcsShowdebugOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_showdebug_oper',
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
  private _oper = new DataThunderVcsShowdebugOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVcsShowdebugOperOper) {
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
      oper: dataThunderVcsShowdebugOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVcsShowdebugOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVcsShowdebugOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
