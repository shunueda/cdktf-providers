// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemFpgaCoreCrcOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#id DataThunderSystemFpgaCoreCrcOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#oper DataThunderSystemFpgaCoreCrcOper#oper}
  */
  readonly oper?: DataThunderSystemFpgaCoreCrcOperOper;
}
export interface DataThunderSystemFpgaCoreCrcOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#crc_error_present DataThunderSystemFpgaCoreCrcOper#crc_error_present}
  */
  readonly crcErrorPresent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#enable_val DataThunderSystemFpgaCoreCrcOper#enable_val}
  */
  readonly enableVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#reboot_val DataThunderSystemFpgaCoreCrcOper#reboot_val}
  */
  readonly rebootVal?: string;
}

export function dataThunderSystemFpgaCoreCrcOperOperToTerraform(struct?: DataThunderSystemFpgaCoreCrcOperOperOutputReference | DataThunderSystemFpgaCoreCrcOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crc_error_present: cdktf.stringToTerraform(struct!.crcErrorPresent),
    enable_val: cdktf.stringToTerraform(struct!.enableVal),
    reboot_val: cdktf.stringToTerraform(struct!.rebootVal),
  }
}


export function dataThunderSystemFpgaCoreCrcOperOperToHclTerraform(struct?: DataThunderSystemFpgaCoreCrcOperOperOutputReference | DataThunderSystemFpgaCoreCrcOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crc_error_present: {
      value: cdktf.stringToHclTerraform(struct!.crcErrorPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_val: {
      value: cdktf.stringToHclTerraform(struct!.enableVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot_val: {
      value: cdktf.stringToHclTerraform(struct!.rebootVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemFpgaCoreCrcOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemFpgaCoreCrcOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crcErrorPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.crcErrorPresent = this._crcErrorPresent;
    }
    if (this._enableVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVal = this._enableVal;
    }
    if (this._rebootVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootVal = this._rebootVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemFpgaCoreCrcOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crcErrorPresent = undefined;
      this._enableVal = undefined;
      this._rebootVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crcErrorPresent = value.crcErrorPresent;
      this._enableVal = value.enableVal;
      this._rebootVal = value.rebootVal;
    }
  }

  // crc_error_present - computed: false, optional: true, required: false
  private _crcErrorPresent?: string; 
  public get crcErrorPresent() {
    return this.getStringAttribute('crc_error_present');
  }
  public set crcErrorPresent(value: string) {
    this._crcErrorPresent = value;
  }
  public resetCrcErrorPresent() {
    this._crcErrorPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcErrorPresentInput() {
    return this._crcErrorPresent;
  }

  // enable_val - computed: false, optional: true, required: false
  private _enableVal?: string; 
  public get enableVal() {
    return this.getStringAttribute('enable_val');
  }
  public set enableVal(value: string) {
    this._enableVal = value;
  }
  public resetEnableVal() {
    this._enableVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableValInput() {
    return this._enableVal;
  }

  // reboot_val - computed: false, optional: true, required: false
  private _rebootVal?: string; 
  public get rebootVal() {
    return this.getStringAttribute('reboot_val');
  }
  public set rebootVal(value: string) {
    this._rebootVal = value;
  }
  public resetRebootVal() {
    this._rebootVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootValInput() {
    return this._rebootVal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper thunder_system_fpga_core_crc_oper}
*/
export class DataThunderSystemFpgaCoreCrcOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_fpga_core_crc_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemFpgaCoreCrcOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemFpgaCoreCrcOper to import
  * @param importFromId The id of the existing DataThunderSystemFpgaCoreCrcOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemFpgaCoreCrcOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_fpga_core_crc_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_core_crc_oper thunder_system_fpga_core_crc_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemFpgaCoreCrcOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemFpgaCoreCrcOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_fpga_core_crc_oper',
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
  private _oper = new DataThunderSystemFpgaCoreCrcOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemFpgaCoreCrcOperOper) {
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
      oper: dataThunderSystemFpgaCoreCrcOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemFpgaCoreCrcOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemFpgaCoreCrcOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
