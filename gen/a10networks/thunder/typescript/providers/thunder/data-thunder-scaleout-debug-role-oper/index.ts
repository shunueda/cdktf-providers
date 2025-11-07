// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugRoleOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper#id DataThunderScaleoutDebugRoleOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper#oper DataThunderScaleoutDebugRoleOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugRoleOperOper;
}
export interface DataThunderScaleoutDebugRoleOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper#scaleout_role_action DataThunderScaleoutDebugRoleOper#scaleout_role_action}
  */
  readonly scaleoutRoleAction?: string;
}

export function dataThunderScaleoutDebugRoleOperOperToTerraform(struct?: DataThunderScaleoutDebugRoleOperOperOutputReference | DataThunderScaleoutDebugRoleOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaleout_role_action: cdktf.stringToTerraform(struct!.scaleoutRoleAction),
  }
}


export function dataThunderScaleoutDebugRoleOperOperToHclTerraform(struct?: DataThunderScaleoutDebugRoleOperOperOutputReference | DataThunderScaleoutDebugRoleOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaleout_role_action: {
      value: cdktf.stringToHclTerraform(struct!.scaleoutRoleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRoleOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugRoleOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleoutRoleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutRoleAction = this._scaleoutRoleAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRoleOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleoutRoleAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleoutRoleAction = value.scaleoutRoleAction;
    }
  }

  // scaleout_role_action - computed: false, optional: true, required: false
  private _scaleoutRoleAction?: string; 
  public get scaleoutRoleAction() {
    return this.getStringAttribute('scaleout_role_action');
  }
  public set scaleoutRoleAction(value: string) {
    this._scaleoutRoleAction = value;
  }
  public resetScaleoutRoleAction() {
    this._scaleoutRoleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutRoleActionInput() {
    return this._scaleoutRoleAction;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper thunder_scaleout_debug_role_oper}
*/
export class DataThunderScaleoutDebugRoleOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_role_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugRoleOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugRoleOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugRoleOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugRoleOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_role_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_role_oper thunder_scaleout_debug_role_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugRoleOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugRoleOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_role_oper',
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
  private _oper = new DataThunderScaleoutDebugRoleOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugRoleOperOper) {
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
      oper: dataThunderScaleoutDebugRoleOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugRoleOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugRoleOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
