// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderMiscelleniousAlbOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#id DataThunderMiscelleniousAlbOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#oper DataThunderMiscelleniousAlbOper#oper}
  */
  readonly oper?: DataThunderMiscelleniousAlbOperOper;
}
export interface DataThunderMiscelleniousAlbOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#crash_count DataThunderMiscelleniousAlbOper#crash_count}
  */
  readonly crashCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#reboot_num DataThunderMiscelleniousAlbOper#reboot_num}
  */
  readonly rebootNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#uptime DataThunderMiscelleniousAlbOper#uptime}
  */
  readonly uptime?: number;
}

export function dataThunderMiscelleniousAlbOperOperToTerraform(struct?: DataThunderMiscelleniousAlbOperOperOutputReference | DataThunderMiscelleniousAlbOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crash_count: cdktf.numberToTerraform(struct!.crashCount),
    reboot_num: cdktf.numberToTerraform(struct!.rebootNum),
    uptime: cdktf.numberToTerraform(struct!.uptime),
  }
}


export function dataThunderMiscelleniousAlbOperOperToHclTerraform(struct?: DataThunderMiscelleniousAlbOperOperOutputReference | DataThunderMiscelleniousAlbOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crash_count: {
      value: cdktf.numberToHclTerraform(struct!.crashCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_num: {
      value: cdktf.numberToHclTerraform(struct!.rebootNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uptime: {
      value: cdktf.numberToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderMiscelleniousAlbOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderMiscelleniousAlbOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crashCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashCount = this._crashCount;
    }
    if (this._rebootNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootNum = this._rebootNum;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderMiscelleniousAlbOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crashCount = undefined;
      this._rebootNum = undefined;
      this._uptime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crashCount = value.crashCount;
      this._rebootNum = value.rebootNum;
      this._uptime = value.uptime;
    }
  }

  // crash_count - computed: false, optional: true, required: false
  private _crashCount?: number; 
  public get crashCount() {
    return this.getNumberAttribute('crash_count');
  }
  public set crashCount(value: number) {
    this._crashCount = value;
  }
  public resetCrashCount() {
    this._crashCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashCountInput() {
    return this._crashCount;
  }

  // reboot_num - computed: false, optional: true, required: false
  private _rebootNum?: number; 
  public get rebootNum() {
    return this.getNumberAttribute('reboot_num');
  }
  public set rebootNum(value: number) {
    this._rebootNum = value;
  }
  public resetRebootNum() {
    this._rebootNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootNumInput() {
    return this._rebootNum;
  }

  // uptime - computed: false, optional: true, required: false
  private _uptime?: number; 
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }
  public set uptime(value: number) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper thunder_miscellenious_alb_oper}
*/
export class DataThunderMiscelleniousAlbOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_miscellenious_alb_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderMiscelleniousAlbOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderMiscelleniousAlbOper to import
  * @param importFromId The id of the existing DataThunderMiscelleniousAlbOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderMiscelleniousAlbOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_miscellenious_alb_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/miscellenious_alb_oper thunder_miscellenious_alb_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderMiscelleniousAlbOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderMiscelleniousAlbOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_miscellenious_alb_oper',
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
  private _oper = new DataThunderMiscelleniousAlbOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderMiscelleniousAlbOperOper) {
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
      oper: dataThunderMiscelleniousAlbOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderMiscelleniousAlbOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderMiscelleniousAlbOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
