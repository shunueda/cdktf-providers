// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnDataSessionsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#id DataThunderCgnv6LsnDataSessionsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#oper DataThunderCgnv6LsnDataSessionsOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnDataSessionsOperOper;
}
export interface DataThunderCgnv6LsnDataSessionsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#inside_addr DataThunderCgnv6LsnDataSessionsOper#inside_addr}
  */
  readonly insideAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#inside_addr_end DataThunderCgnv6LsnDataSessionsOper#inside_addr_end}
  */
  readonly insideAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#inside_addr_start DataThunderCgnv6LsnDataSessionsOper#inside_addr_start}
  */
  readonly insideAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#inside_port DataThunderCgnv6LsnDataSessionsOper#inside_port}
  */
  readonly insidePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#nat_addr DataThunderCgnv6LsnDataSessionsOper#nat_addr}
  */
  readonly natAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#nat_addr_end DataThunderCgnv6LsnDataSessionsOper#nat_addr_end}
  */
  readonly natAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#nat_addr_start DataThunderCgnv6LsnDataSessionsOper#nat_addr_start}
  */
  readonly natAddrStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#nat_port DataThunderCgnv6LsnDataSessionsOper#nat_port}
  */
  readonly natPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#status DataThunderCgnv6LsnDataSessionsOper#status}
  */
  readonly status?: string;
}

export function dataThunderCgnv6LsnDataSessionsOperOperToTerraform(struct?: DataThunderCgnv6LsnDataSessionsOperOperOutputReference | DataThunderCgnv6LsnDataSessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_addr: cdktf.stringToTerraform(struct!.insideAddr),
    inside_addr_end: cdktf.stringToTerraform(struct!.insideAddrEnd),
    inside_addr_start: cdktf.stringToTerraform(struct!.insideAddrStart),
    inside_port: cdktf.numberToTerraform(struct!.insidePort),
    nat_addr: cdktf.stringToTerraform(struct!.natAddr),
    nat_addr_end: cdktf.stringToTerraform(struct!.natAddrEnd),
    nat_addr_start: cdktf.stringToTerraform(struct!.natAddrStart),
    nat_port: cdktf.numberToTerraform(struct!.natPort),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderCgnv6LsnDataSessionsOperOperToHclTerraform(struct?: DataThunderCgnv6LsnDataSessionsOperOperOutputReference | DataThunderCgnv6LsnDataSessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_addr: {
      value: cdktf.stringToHclTerraform(struct!.insideAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_end: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_addr_start: {
      value: cdktf.stringToHclTerraform(struct!.insideAddrStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_port: {
      value: cdktf.numberToHclTerraform(struct!.insidePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_addr: {
      value: cdktf.stringToHclTerraform(struct!.natAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_addr_end: {
      value: cdktf.stringToHclTerraform(struct!.natAddrEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_addr_start: {
      value: cdktf.stringToHclTerraform(struct!.natAddrStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_port: {
      value: cdktf.numberToHclTerraform(struct!.natPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnDataSessionsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnDataSessionsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddr = this._insideAddr;
    }
    if (this._insideAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrEnd = this._insideAddrEnd;
    }
    if (this._insideAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddrStart = this._insideAddrStart;
    }
    if (this._insidePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insidePort = this._insidePort;
    }
    if (this._natAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddr = this._natAddr;
    }
    if (this._natAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrEnd = this._natAddrEnd;
    }
    if (this._natAddrStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddrStart = this._natAddrStart;
    }
    if (this._natPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPort = this._natPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnDataSessionsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideAddr = undefined;
      this._insideAddrEnd = undefined;
      this._insideAddrStart = undefined;
      this._insidePort = undefined;
      this._natAddr = undefined;
      this._natAddrEnd = undefined;
      this._natAddrStart = undefined;
      this._natPort = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideAddr = value.insideAddr;
      this._insideAddrEnd = value.insideAddrEnd;
      this._insideAddrStart = value.insideAddrStart;
      this._insidePort = value.insidePort;
      this._natAddr = value.natAddr;
      this._natAddrEnd = value.natAddrEnd;
      this._natAddrStart = value.natAddrStart;
      this._natPort = value.natPort;
      this._status = value.status;
    }
  }

  // inside_addr - computed: false, optional: true, required: false
  private _insideAddr?: string; 
  public get insideAddr() {
    return this.getStringAttribute('inside_addr');
  }
  public set insideAddr(value: string) {
    this._insideAddr = value;
  }
  public resetInsideAddr() {
    this._insideAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrInput() {
    return this._insideAddr;
  }

  // inside_addr_end - computed: false, optional: true, required: false
  private _insideAddrEnd?: string; 
  public get insideAddrEnd() {
    return this.getStringAttribute('inside_addr_end');
  }
  public set insideAddrEnd(value: string) {
    this._insideAddrEnd = value;
  }
  public resetInsideAddrEnd() {
    this._insideAddrEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrEndInput() {
    return this._insideAddrEnd;
  }

  // inside_addr_start - computed: false, optional: true, required: false
  private _insideAddrStart?: string; 
  public get insideAddrStart() {
    return this.getStringAttribute('inside_addr_start');
  }
  public set insideAddrStart(value: string) {
    this._insideAddrStart = value;
  }
  public resetInsideAddrStart() {
    this._insideAddrStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddrStartInput() {
    return this._insideAddrStart;
  }

  // inside_port - computed: false, optional: true, required: false
  private _insidePort?: number; 
  public get insidePort() {
    return this.getNumberAttribute('inside_port');
  }
  public set insidePort(value: number) {
    this._insidePort = value;
  }
  public resetInsidePort() {
    this._insidePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insidePortInput() {
    return this._insidePort;
  }

  // nat_addr - computed: false, optional: true, required: false
  private _natAddr?: string; 
  public get natAddr() {
    return this.getStringAttribute('nat_addr');
  }
  public set natAddr(value: string) {
    this._natAddr = value;
  }
  public resetNatAddr() {
    this._natAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrInput() {
    return this._natAddr;
  }

  // nat_addr_end - computed: false, optional: true, required: false
  private _natAddrEnd?: string; 
  public get natAddrEnd() {
    return this.getStringAttribute('nat_addr_end');
  }
  public set natAddrEnd(value: string) {
    this._natAddrEnd = value;
  }
  public resetNatAddrEnd() {
    this._natAddrEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrEndInput() {
    return this._natAddrEnd;
  }

  // nat_addr_start - computed: false, optional: true, required: false
  private _natAddrStart?: string; 
  public get natAddrStart() {
    return this.getStringAttribute('nat_addr_start');
  }
  public set natAddrStart(value: string) {
    this._natAddrStart = value;
  }
  public resetNatAddrStart() {
    this._natAddrStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddrStartInput() {
    return this._natAddrStart;
  }

  // nat_port - computed: false, optional: true, required: false
  private _natPort?: number; 
  public get natPort() {
    return this.getNumberAttribute('nat_port');
  }
  public set natPort(value: number) {
    this._natPort = value;
  }
  public resetNatPort() {
    this._natPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortInput() {
    return this._natPort;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper thunder_cgnv6_lsn_data_sessions_oper}
*/
export class DataThunderCgnv6LsnDataSessionsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_data_sessions_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnDataSessionsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnDataSessionsOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnDataSessionsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnDataSessionsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_data_sessions_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_data_sessions_oper thunder_cgnv6_lsn_data_sessions_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnDataSessionsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnDataSessionsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_data_sessions_oper',
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
  private _oper = new DataThunderCgnv6LsnDataSessionsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnDataSessionsOperOper) {
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
      oper: dataThunderCgnv6LsnDataSessionsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LsnDataSessionsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnDataSessionsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
