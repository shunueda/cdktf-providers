// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetMgmtSnmpEngineIdOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper#id DataThunderNetMgmtSnmpEngineIdOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper#oper DataThunderNetMgmtSnmpEngineIdOper#oper}
  */
  readonly oper?: DataThunderNetMgmtSnmpEngineIdOperOper;
}
export interface DataThunderNetMgmtSnmpEngineIdOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper#engineid DataThunderNetMgmtSnmpEngineIdOper#engineid}
  */
  readonly engineid?: string;
}

export function dataThunderNetMgmtSnmpEngineIdOperOperToTerraform(struct?: DataThunderNetMgmtSnmpEngineIdOperOperOutputReference | DataThunderNetMgmtSnmpEngineIdOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engineid: cdktf.stringToTerraform(struct!.engineid),
  }
}


export function dataThunderNetMgmtSnmpEngineIdOperOperToHclTerraform(struct?: DataThunderNetMgmtSnmpEngineIdOperOperOutputReference | DataThunderNetMgmtSnmpEngineIdOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engineid: {
      value: cdktf.stringToHclTerraform(struct!.engineid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetMgmtSnmpEngineIdOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetMgmtSnmpEngineIdOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineid !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineid = this._engineid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetMgmtSnmpEngineIdOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engineid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engineid = value.engineid;
    }
  }

  // engineid - computed: false, optional: true, required: false
  private _engineid?: string; 
  public get engineid() {
    return this.getStringAttribute('engineid');
  }
  public set engineid(value: string) {
    this._engineid = value;
  }
  public resetEngineid() {
    this._engineid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineidInput() {
    return this._engineid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper thunder_net_mgmt_snmp_engineID_oper}
*/
export class DataThunderNetMgmtSnmpEngineIdOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_net_mgmt_snmp_engineID_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetMgmtSnmpEngineIdOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetMgmtSnmpEngineIdOper to import
  * @param importFromId The id of the existing DataThunderNetMgmtSnmpEngineIdOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetMgmtSnmpEngineIdOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_net_mgmt_snmp_engineID_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/net_mgmt_snmp_engine_id_oper thunder_net_mgmt_snmp_engineID_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetMgmtSnmpEngineIdOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetMgmtSnmpEngineIdOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_net_mgmt_snmp_engineID_oper',
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
  private _oper = new DataThunderNetMgmtSnmpEngineIdOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetMgmtSnmpEngineIdOperOper) {
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
      oper: dataThunderNetMgmtSnmpEngineIdOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetMgmtSnmpEngineIdOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetMgmtSnmpEngineIdOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
