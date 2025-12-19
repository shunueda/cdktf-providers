// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewHotfixOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper#id DataThunderSystemViewHotfixOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper#oper DataThunderSystemViewHotfixOper#oper}
  */
  readonly oper?: DataThunderSystemViewHotfixOperOper;
}
export interface DataThunderSystemViewHotfixOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper#applied DataThunderSystemViewHotfixOper#applied}
  */
  readonly applied?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper#copied DataThunderSystemViewHotfixOper#copied}
  */
  readonly copied?: string;
}

export function dataThunderSystemViewHotfixOperOperToTerraform(struct?: DataThunderSystemViewHotfixOperOperOutputReference | DataThunderSystemViewHotfixOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applied: cdktf.stringToTerraform(struct!.applied),
    copied: cdktf.stringToTerraform(struct!.copied),
  }
}


export function dataThunderSystemViewHotfixOperOperToHclTerraform(struct?: DataThunderSystemViewHotfixOperOperOutputReference | DataThunderSystemViewHotfixOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applied: {
      value: cdktf.stringToHclTerraform(struct!.applied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copied: {
      value: cdktf.stringToHclTerraform(struct!.copied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHotfixOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewHotfixOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applied !== undefined) {
      hasAnyValues = true;
      internalValueResult.applied = this._applied;
    }
    if (this._copied !== undefined) {
      hasAnyValues = true;
      internalValueResult.copied = this._copied;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHotfixOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applied = undefined;
      this._copied = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applied = value.applied;
      this._copied = value.copied;
    }
  }

  // applied - computed: false, optional: true, required: false
  private _applied?: string; 
  public get applied() {
    return this.getStringAttribute('applied');
  }
  public set applied(value: string) {
    this._applied = value;
  }
  public resetApplied() {
    this._applied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedInput() {
    return this._applied;
  }

  // copied - computed: false, optional: true, required: false
  private _copied?: string; 
  public get copied() {
    return this.getStringAttribute('copied');
  }
  public set copied(value: string) {
    this._copied = value;
  }
  public resetCopied() {
    this._copied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copiedInput() {
    return this._copied;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper thunder_system_view_hotfix_oper}
*/
export class DataThunderSystemViewHotfixOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_hotfix_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewHotfixOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewHotfixOper to import
  * @param importFromId The id of the existing DataThunderSystemViewHotfixOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewHotfixOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_hotfix_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_view_hotfix_oper thunder_system_view_hotfix_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewHotfixOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewHotfixOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_hotfix_oper',
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
  private _oper = new DataThunderSystemViewHotfixOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewHotfixOperOper) {
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
      oper: dataThunderSystemViewHotfixOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewHotfixOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewHotfixOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
