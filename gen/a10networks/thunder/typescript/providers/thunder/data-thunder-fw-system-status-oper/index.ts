// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwSystemStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#id DataThunderFwSystemStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#oper DataThunderFwSystemStatusOper#oper}
  */
  readonly oper?: DataThunderFwSystemStatusOperOper;
}
export interface DataThunderFwSystemStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#data_sessions_free DataThunderFwSystemStatusOper#data_sessions_free}
  */
  readonly dataSessionsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#data_sessions_used DataThunderFwSystemStatusOper#data_sessions_used}
  */
  readonly dataSessionsUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#radius_entries_free DataThunderFwSystemStatusOper#radius_entries_free}
  */
  readonly radiusEntriesFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#radius_entries_used DataThunderFwSystemStatusOper#radius_entries_used}
  */
  readonly radiusEntriesUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#smp_sessions_free DataThunderFwSystemStatusOper#smp_sessions_free}
  */
  readonly smpSessionsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#smp_sessions_used DataThunderFwSystemStatusOper#smp_sessions_used}
  */
  readonly smpSessionsUsed?: number;
}

export function dataThunderFwSystemStatusOperOperToTerraform(struct?: DataThunderFwSystemStatusOperOperOutputReference | DataThunderFwSystemStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sessions_free: cdktf.numberToTerraform(struct!.dataSessionsFree),
    data_sessions_used: cdktf.numberToTerraform(struct!.dataSessionsUsed),
    radius_entries_free: cdktf.numberToTerraform(struct!.radiusEntriesFree),
    radius_entries_used: cdktf.numberToTerraform(struct!.radiusEntriesUsed),
    smp_sessions_free: cdktf.numberToTerraform(struct!.smpSessionsFree),
    smp_sessions_used: cdktf.numberToTerraform(struct!.smpSessionsUsed),
  }
}


export function dataThunderFwSystemStatusOperOperToHclTerraform(struct?: DataThunderFwSystemStatusOperOperOutputReference | DataThunderFwSystemStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sessions_free: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sessions_used: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_entries_free: {
      value: cdktf.numberToHclTerraform(struct!.radiusEntriesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_entries_used: {
      value: cdktf.numberToHclTerraform(struct!.radiusEntriesUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_sessions_free: {
      value: cdktf.numberToHclTerraform(struct!.smpSessionsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_sessions_used: {
      value: cdktf.numberToHclTerraform(struct!.smpSessionsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwSystemStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwSystemStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessionsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsFree = this._dataSessionsFree;
    }
    if (this._dataSessionsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsUsed = this._dataSessionsUsed;
    }
    if (this._radiusEntriesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusEntriesFree = this._radiusEntriesFree;
    }
    if (this._radiusEntriesUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusEntriesUsed = this._radiusEntriesUsed;
    }
    if (this._smpSessionsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpSessionsFree = this._smpSessionsFree;
    }
    if (this._smpSessionsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpSessionsUsed = this._smpSessionsUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwSystemStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionsFree = undefined;
      this._dataSessionsUsed = undefined;
      this._radiusEntriesFree = undefined;
      this._radiusEntriesUsed = undefined;
      this._smpSessionsFree = undefined;
      this._smpSessionsUsed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionsFree = value.dataSessionsFree;
      this._dataSessionsUsed = value.dataSessionsUsed;
      this._radiusEntriesFree = value.radiusEntriesFree;
      this._radiusEntriesUsed = value.radiusEntriesUsed;
      this._smpSessionsFree = value.smpSessionsFree;
      this._smpSessionsUsed = value.smpSessionsUsed;
    }
  }

  // data_sessions_free - computed: false, optional: true, required: false
  private _dataSessionsFree?: number; 
  public get dataSessionsFree() {
    return this.getNumberAttribute('data_sessions_free');
  }
  public set dataSessionsFree(value: number) {
    this._dataSessionsFree = value;
  }
  public resetDataSessionsFree() {
    this._dataSessionsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsFreeInput() {
    return this._dataSessionsFree;
  }

  // data_sessions_used - computed: false, optional: true, required: false
  private _dataSessionsUsed?: number; 
  public get dataSessionsUsed() {
    return this.getNumberAttribute('data_sessions_used');
  }
  public set dataSessionsUsed(value: number) {
    this._dataSessionsUsed = value;
  }
  public resetDataSessionsUsed() {
    this._dataSessionsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsUsedInput() {
    return this._dataSessionsUsed;
  }

  // radius_entries_free - computed: false, optional: true, required: false
  private _radiusEntriesFree?: number; 
  public get radiusEntriesFree() {
    return this.getNumberAttribute('radius_entries_free');
  }
  public set radiusEntriesFree(value: number) {
    this._radiusEntriesFree = value;
  }
  public resetRadiusEntriesFree() {
    this._radiusEntriesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusEntriesFreeInput() {
    return this._radiusEntriesFree;
  }

  // radius_entries_used - computed: false, optional: true, required: false
  private _radiusEntriesUsed?: number; 
  public get radiusEntriesUsed() {
    return this.getNumberAttribute('radius_entries_used');
  }
  public set radiusEntriesUsed(value: number) {
    this._radiusEntriesUsed = value;
  }
  public resetRadiusEntriesUsed() {
    this._radiusEntriesUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusEntriesUsedInput() {
    return this._radiusEntriesUsed;
  }

  // smp_sessions_free - computed: false, optional: true, required: false
  private _smpSessionsFree?: number; 
  public get smpSessionsFree() {
    return this.getNumberAttribute('smp_sessions_free');
  }
  public set smpSessionsFree(value: number) {
    this._smpSessionsFree = value;
  }
  public resetSmpSessionsFree() {
    this._smpSessionsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpSessionsFreeInput() {
    return this._smpSessionsFree;
  }

  // smp_sessions_used - computed: false, optional: true, required: false
  private _smpSessionsUsed?: number; 
  public get smpSessionsUsed() {
    return this.getNumberAttribute('smp_sessions_used');
  }
  public set smpSessionsUsed(value: number) {
    this._smpSessionsUsed = value;
  }
  public resetSmpSessionsUsed() {
    this._smpSessionsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpSessionsUsedInput() {
    return this._smpSessionsUsed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper thunder_fw_system_status_oper}
*/
export class DataThunderFwSystemStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_system_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwSystemStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwSystemStatusOper to import
  * @param importFromId The id of the existing DataThunderFwSystemStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwSystemStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_system_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_system_status_oper thunder_fw_system_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwSystemStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwSystemStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_system_status_oper',
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
  private _oper = new DataThunderFwSystemStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwSystemStatusOperOper) {
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
      oper: dataThunderFwSystemStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwSystemStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwSystemStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
