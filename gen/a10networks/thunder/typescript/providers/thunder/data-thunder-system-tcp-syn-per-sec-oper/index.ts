// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTcpSynPerSecOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper#id DataThunderSystemTcpSynPerSecOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper#oper DataThunderSystemTcpSynPerSecOper#oper}
  */
  readonly oper?: DataThunderSystemTcpSynPerSecOperOper;
}
export interface DataThunderSystemTcpSynPerSecOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper#tcp_syn_per_sec DataThunderSystemTcpSynPerSecOper#tcp_syn_per_sec}
  */
  readonly tcpSynPerSec?: number;
}

export function dataThunderSystemTcpSynPerSecOperOperToTerraform(struct?: DataThunderSystemTcpSynPerSecOperOperOutputReference | DataThunderSystemTcpSynPerSecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_syn_per_sec: cdktf.numberToTerraform(struct!.tcpSynPerSec),
  }
}


export function dataThunderSystemTcpSynPerSecOperOperToHclTerraform(struct?: DataThunderSystemTcpSynPerSecOperOperOutputReference | DataThunderSystemTcpSynPerSecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_syn_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpSynPerSecOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTcpSynPerSecOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpSynPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynPerSec = this._tcpSynPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpSynPerSecOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpSynPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpSynPerSec = value.tcpSynPerSec;
    }
  }

  // tcp_syn_per_sec - computed: false, optional: true, required: false
  private _tcpSynPerSec?: number; 
  public get tcpSynPerSec() {
    return this.getNumberAttribute('tcp_syn_per_sec');
  }
  public set tcpSynPerSec(value: number) {
    this._tcpSynPerSec = value;
  }
  public resetTcpSynPerSec() {
    this._tcpSynPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynPerSecInput() {
    return this._tcpSynPerSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper thunder_system_tcp_syn_per_sec_oper}
*/
export class DataThunderSystemTcpSynPerSecOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_tcp_syn_per_sec_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTcpSynPerSecOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTcpSynPerSecOper to import
  * @param importFromId The id of the existing DataThunderSystemTcpSynPerSecOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTcpSynPerSecOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_tcp_syn_per_sec_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_tcp_syn_per_sec_oper thunder_system_tcp_syn_per_sec_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTcpSynPerSecOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTcpSynPerSecOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_tcp_syn_per_sec_oper',
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
  private _oper = new DataThunderSystemTcpSynPerSecOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTcpSynPerSecOperOper) {
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
      oper: dataThunderSystemTcpSynPerSecOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemTcpSynPerSecOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTcpSynPerSecOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
