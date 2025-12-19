// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemDomainListSettingsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#id DataThunderSystemDomainListSettingsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#oper DataThunderSystemDomainListSettingsOper#oper}
  */
  readonly oper?: DataThunderSystemDomainListSettingsOperOper;
}
export interface DataThunderSystemDomainListSettingsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#exception_entry_num DataThunderSystemDomainListSettingsOper#exception_entry_num}
  */
  readonly exceptionEntryNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#in_prog_entry_num DataThunderSystemDomainListSettingsOper#in_prog_entry_num}
  */
  readonly inProgEntryNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#inited_entry_num DataThunderSystemDomainListSettingsOper#inited_entry_num}
  */
  readonly initedEntryNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#serial_updated DataThunderSystemDomainListSettingsOper#serial_updated}
  */
  readonly serialUpdated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#total_entry_num DataThunderSystemDomainListSettingsOper#total_entry_num}
  */
  readonly totalEntryNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#xfr_parse_fail DataThunderSystemDomainListSettingsOper#xfr_parse_fail}
  */
  readonly xfrParseFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#xfr_start_fail DataThunderSystemDomainListSettingsOper#xfr_start_fail}
  */
  readonly xfrStartFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#xfr_timeout_fail DataThunderSystemDomainListSettingsOper#xfr_timeout_fail}
  */
  readonly xfrTimeoutFail?: number;
}

export function dataThunderSystemDomainListSettingsOperOperToTerraform(struct?: DataThunderSystemDomainListSettingsOperOperOutputReference | DataThunderSystemDomainListSettingsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_entry_num: cdktf.numberToTerraform(struct!.exceptionEntryNum),
    in_prog_entry_num: cdktf.numberToTerraform(struct!.inProgEntryNum),
    inited_entry_num: cdktf.numberToTerraform(struct!.initedEntryNum),
    serial_updated: cdktf.numberToTerraform(struct!.serialUpdated),
    total_entry_num: cdktf.numberToTerraform(struct!.totalEntryNum),
    xfr_parse_fail: cdktf.numberToTerraform(struct!.xfrParseFail),
    xfr_start_fail: cdktf.numberToTerraform(struct!.xfrStartFail),
    xfr_timeout_fail: cdktf.numberToTerraform(struct!.xfrTimeoutFail),
  }
}


export function dataThunderSystemDomainListSettingsOperOperToHclTerraform(struct?: DataThunderSystemDomainListSettingsOperOperOutputReference | DataThunderSystemDomainListSettingsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.exceptionEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_prog_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.inProgEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inited_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.initedEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_updated: {
      value: cdktf.numberToHclTerraform(struct!.serialUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.totalEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xfr_parse_fail: {
      value: cdktf.numberToHclTerraform(struct!.xfrParseFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xfr_start_fail: {
      value: cdktf.numberToHclTerraform(struct!.xfrStartFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xfr_timeout_fail: {
      value: cdktf.numberToHclTerraform(struct!.xfrTimeoutFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemDomainListSettingsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemDomainListSettingsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionEntryNum = this._exceptionEntryNum;
    }
    if (this._inProgEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.inProgEntryNum = this._inProgEntryNum;
    }
    if (this._initedEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.initedEntryNum = this._initedEntryNum;
    }
    if (this._serialUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialUpdated = this._serialUpdated;
    }
    if (this._totalEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntryNum = this._totalEntryNum;
    }
    if (this._xfrParseFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfrParseFail = this._xfrParseFail;
    }
    if (this._xfrStartFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfrStartFail = this._xfrStartFail;
    }
    if (this._xfrTimeoutFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfrTimeoutFail = this._xfrTimeoutFail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemDomainListSettingsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionEntryNum = undefined;
      this._inProgEntryNum = undefined;
      this._initedEntryNum = undefined;
      this._serialUpdated = undefined;
      this._totalEntryNum = undefined;
      this._xfrParseFail = undefined;
      this._xfrStartFail = undefined;
      this._xfrTimeoutFail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionEntryNum = value.exceptionEntryNum;
      this._inProgEntryNum = value.inProgEntryNum;
      this._initedEntryNum = value.initedEntryNum;
      this._serialUpdated = value.serialUpdated;
      this._totalEntryNum = value.totalEntryNum;
      this._xfrParseFail = value.xfrParseFail;
      this._xfrStartFail = value.xfrStartFail;
      this._xfrTimeoutFail = value.xfrTimeoutFail;
    }
  }

  // exception_entry_num - computed: false, optional: true, required: false
  private _exceptionEntryNum?: number; 
  public get exceptionEntryNum() {
    return this.getNumberAttribute('exception_entry_num');
  }
  public set exceptionEntryNum(value: number) {
    this._exceptionEntryNum = value;
  }
  public resetExceptionEntryNum() {
    this._exceptionEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEntryNumInput() {
    return this._exceptionEntryNum;
  }

  // in_prog_entry_num - computed: false, optional: true, required: false
  private _inProgEntryNum?: number; 
  public get inProgEntryNum() {
    return this.getNumberAttribute('in_prog_entry_num');
  }
  public set inProgEntryNum(value: number) {
    this._inProgEntryNum = value;
  }
  public resetInProgEntryNum() {
    this._inProgEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgEntryNumInput() {
    return this._inProgEntryNum;
  }

  // inited_entry_num - computed: false, optional: true, required: false
  private _initedEntryNum?: number; 
  public get initedEntryNum() {
    return this.getNumberAttribute('inited_entry_num');
  }
  public set initedEntryNum(value: number) {
    this._initedEntryNum = value;
  }
  public resetInitedEntryNum() {
    this._initedEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initedEntryNumInput() {
    return this._initedEntryNum;
  }

  // serial_updated - computed: false, optional: true, required: false
  private _serialUpdated?: number; 
  public get serialUpdated() {
    return this.getNumberAttribute('serial_updated');
  }
  public set serialUpdated(value: number) {
    this._serialUpdated = value;
  }
  public resetSerialUpdated() {
    this._serialUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialUpdatedInput() {
    return this._serialUpdated;
  }

  // total_entry_num - computed: false, optional: true, required: false
  private _totalEntryNum?: number; 
  public get totalEntryNum() {
    return this.getNumberAttribute('total_entry_num');
  }
  public set totalEntryNum(value: number) {
    this._totalEntryNum = value;
  }
  public resetTotalEntryNum() {
    this._totalEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntryNumInput() {
    return this._totalEntryNum;
  }

  // xfr_parse_fail - computed: false, optional: true, required: false
  private _xfrParseFail?: number; 
  public get xfrParseFail() {
    return this.getNumberAttribute('xfr_parse_fail');
  }
  public set xfrParseFail(value: number) {
    this._xfrParseFail = value;
  }
  public resetXfrParseFail() {
    this._xfrParseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfrParseFailInput() {
    return this._xfrParseFail;
  }

  // xfr_start_fail - computed: false, optional: true, required: false
  private _xfrStartFail?: number; 
  public get xfrStartFail() {
    return this.getNumberAttribute('xfr_start_fail');
  }
  public set xfrStartFail(value: number) {
    this._xfrStartFail = value;
  }
  public resetXfrStartFail() {
    this._xfrStartFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfrStartFailInput() {
    return this._xfrStartFail;
  }

  // xfr_timeout_fail - computed: false, optional: true, required: false
  private _xfrTimeoutFail?: number; 
  public get xfrTimeoutFail() {
    return this.getNumberAttribute('xfr_timeout_fail');
  }
  public set xfrTimeoutFail(value: number) {
    this._xfrTimeoutFail = value;
  }
  public resetXfrTimeoutFail() {
    this._xfrTimeoutFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfrTimeoutFailInput() {
    return this._xfrTimeoutFail;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper thunder_system_domain_list_settings_oper}
*/
export class DataThunderSystemDomainListSettingsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_domain_list_settings_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemDomainListSettingsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemDomainListSettingsOper to import
  * @param importFromId The id of the existing DataThunderSystemDomainListSettingsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemDomainListSettingsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_domain_list_settings_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_domain_list_settings_oper thunder_system_domain_list_settings_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemDomainListSettingsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemDomainListSettingsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_domain_list_settings_oper',
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
  private _oper = new DataThunderSystemDomainListSettingsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemDomainListSettingsOperOper) {
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
      oper: dataThunderSystemDomainListSettingsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemDomainListSettingsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemDomainListSettingsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
