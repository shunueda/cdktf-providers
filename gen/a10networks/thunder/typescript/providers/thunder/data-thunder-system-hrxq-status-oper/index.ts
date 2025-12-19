// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemHrxqStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper#id DataThunderSystemHrxqStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper#oper DataThunderSystemHrxqStatusOper#oper}
  */
  readonly oper?: DataThunderSystemHrxqStatusOperOper;
}
export interface DataThunderSystemHrxqStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper#deep_hrxq_enable DataThunderSystemHrxqStatusOper#deep_hrxq_enable}
  */
  readonly deepHrxqEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper#hrxq_num_chunks DataThunderSystemHrxqStatusOper#hrxq_num_chunks}
  */
  readonly hrxqNumChunks?: number;
}

export function dataThunderSystemHrxqStatusOperOperToTerraform(struct?: DataThunderSystemHrxqStatusOperOperOutputReference | DataThunderSystemHrxqStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deep_hrxq_enable: cdktf.stringToTerraform(struct!.deepHrxqEnable),
    hrxq_num_chunks: cdktf.numberToTerraform(struct!.hrxqNumChunks),
  }
}


export function dataThunderSystemHrxqStatusOperOperToHclTerraform(struct?: DataThunderSystemHrxqStatusOperOperOutputReference | DataThunderSystemHrxqStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deep_hrxq_enable: {
      value: cdktf.stringToHclTerraform(struct!.deepHrxqEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hrxq_num_chunks: {
      value: cdktf.numberToHclTerraform(struct!.hrxqNumChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemHrxqStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemHrxqStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deepHrxqEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepHrxqEnable = this._deepHrxqEnable;
    }
    if (this._hrxqNumChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.hrxqNumChunks = this._hrxqNumChunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemHrxqStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deepHrxqEnable = undefined;
      this._hrxqNumChunks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deepHrxqEnable = value.deepHrxqEnable;
      this._hrxqNumChunks = value.hrxqNumChunks;
    }
  }

  // deep_hrxq_enable - computed: false, optional: true, required: false
  private _deepHrxqEnable?: string; 
  public get deepHrxqEnable() {
    return this.getStringAttribute('deep_hrxq_enable');
  }
  public set deepHrxqEnable(value: string) {
    this._deepHrxqEnable = value;
  }
  public resetDeepHrxqEnable() {
    this._deepHrxqEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepHrxqEnableInput() {
    return this._deepHrxqEnable;
  }

  // hrxq_num_chunks - computed: false, optional: true, required: false
  private _hrxqNumChunks?: number; 
  public get hrxqNumChunks() {
    return this.getNumberAttribute('hrxq_num_chunks');
  }
  public set hrxqNumChunks(value: number) {
    this._hrxqNumChunks = value;
  }
  public resetHrxqNumChunks() {
    this._hrxqNumChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrxqNumChunksInput() {
    return this._hrxqNumChunks;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper thunder_system_hrxq_status_oper}
*/
export class DataThunderSystemHrxqStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_hrxq_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemHrxqStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemHrxqStatusOper to import
  * @param importFromId The id of the existing DataThunderSystemHrxqStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemHrxqStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_hrxq_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hrxq_status_oper thunder_system_hrxq_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemHrxqStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemHrxqStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_hrxq_status_oper',
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
  private _oper = new DataThunderSystemHrxqStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemHrxqStatusOperOper) {
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
      oper: dataThunderSystemHrxqStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemHrxqStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemHrxqStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
