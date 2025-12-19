// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnErrordumpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper#id DataThunderVpnErrordumpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper#oper DataThunderVpnErrordumpOper#oper}
  */
  readonly oper?: DataThunderVpnErrordumpOperOper;
}
export interface DataThunderVpnErrordumpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper#ipsec_error_dump_path DataThunderVpnErrordumpOper#ipsec_error_dump_path}
  */
  readonly ipsecErrorDumpPath?: string;
}

export function dataThunderVpnErrordumpOperOperToTerraform(struct?: DataThunderVpnErrordumpOperOperOutputReference | DataThunderVpnErrordumpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_error_dump_path: cdktf.stringToTerraform(struct!.ipsecErrorDumpPath),
  }
}


export function dataThunderVpnErrordumpOperOperToHclTerraform(struct?: DataThunderVpnErrordumpOperOperOutputReference | DataThunderVpnErrordumpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_error_dump_path: {
      value: cdktf.stringToHclTerraform(struct!.ipsecErrorDumpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnErrordumpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnErrordumpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecErrorDumpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecErrorDumpPath = this._ipsecErrorDumpPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnErrordumpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecErrorDumpPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecErrorDumpPath = value.ipsecErrorDumpPath;
    }
  }

  // ipsec_error_dump_path - computed: false, optional: true, required: false
  private _ipsecErrorDumpPath?: string; 
  public get ipsecErrorDumpPath() {
    return this.getStringAttribute('ipsec_error_dump_path');
  }
  public set ipsecErrorDumpPath(value: string) {
    this._ipsecErrorDumpPath = value;
  }
  public resetIpsecErrorDumpPath() {
    this._ipsecErrorDumpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecErrorDumpPathInput() {
    return this._ipsecErrorDumpPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper thunder_vpn_errordump_oper}
*/
export class DataThunderVpnErrordumpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_errordump_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnErrordumpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnErrordumpOper to import
  * @param importFromId The id of the existing DataThunderVpnErrordumpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnErrordumpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_errordump_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_errordump_oper thunder_vpn_errordump_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnErrordumpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnErrordumpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_errordump_oper',
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
  private _oper = new DataThunderVpnErrordumpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnErrordumpOperOper) {
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
      oper: dataThunderVpnErrordumpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnErrordumpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnErrordumpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
