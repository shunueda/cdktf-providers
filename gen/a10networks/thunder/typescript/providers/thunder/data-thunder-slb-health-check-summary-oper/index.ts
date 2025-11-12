// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthCheckSummaryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#id DataThunderSlbHealthCheckSummaryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#oper DataThunderSlbHealthCheckSummaryOper#oper}
  */
  readonly oper?: DataThunderSlbHealthCheckSummaryOperOper;
}
export interface DataThunderSlbHealthCheckSummaryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#server_down DataThunderSlbHealthCheckSummaryOper#server_down}
  */
  readonly serverDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#server_port_down DataThunderSlbHealthCheckSummaryOper#server_port_down}
  */
  readonly serverPortDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#server_port_up DataThunderSlbHealthCheckSummaryOper#server_port_up}
  */
  readonly serverPortUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#server_up DataThunderSlbHealthCheckSummaryOper#server_up}
  */
  readonly serverUp?: number;
}

export function dataThunderSlbHealthCheckSummaryOperOperToTerraform(struct?: DataThunderSlbHealthCheckSummaryOperOperOutputReference | DataThunderSlbHealthCheckSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_down: cdktf.numberToTerraform(struct!.serverDown),
    server_port_down: cdktf.numberToTerraform(struct!.serverPortDown),
    server_port_up: cdktf.numberToTerraform(struct!.serverPortUp),
    server_up: cdktf.numberToTerraform(struct!.serverUp),
  }
}


export function dataThunderSlbHealthCheckSummaryOperOperToHclTerraform(struct?: DataThunderSlbHealthCheckSummaryOperOperOutputReference | DataThunderSlbHealthCheckSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_down: {
      value: cdktf.numberToHclTerraform(struct!.serverDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_port_down: {
      value: cdktf.numberToHclTerraform(struct!.serverPortDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_port_up: {
      value: cdktf.numberToHclTerraform(struct!.serverPortUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_up: {
      value: cdktf.numberToHclTerraform(struct!.serverUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthCheckSummaryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthCheckSummaryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDown = this._serverDown;
    }
    if (this._serverPortDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPortDown = this._serverPortDown;
    }
    if (this._serverPortUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPortUp = this._serverPortUp;
    }
    if (this._serverUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUp = this._serverUp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthCheckSummaryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverDown = undefined;
      this._serverPortDown = undefined;
      this._serverPortUp = undefined;
      this._serverUp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverDown = value.serverDown;
      this._serverPortDown = value.serverPortDown;
      this._serverPortUp = value.serverPortUp;
      this._serverUp = value.serverUp;
    }
  }

  // server_down - computed: false, optional: true, required: false
  private _serverDown?: number; 
  public get serverDown() {
    return this.getNumberAttribute('server_down');
  }
  public set serverDown(value: number) {
    this._serverDown = value;
  }
  public resetServerDown() {
    this._serverDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownInput() {
    return this._serverDown;
  }

  // server_port_down - computed: false, optional: true, required: false
  private _serverPortDown?: number; 
  public get serverPortDown() {
    return this.getNumberAttribute('server_port_down');
  }
  public set serverPortDown(value: number) {
    this._serverPortDown = value;
  }
  public resetServerPortDown() {
    this._serverPortDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortDownInput() {
    return this._serverPortDown;
  }

  // server_port_up - computed: false, optional: true, required: false
  private _serverPortUp?: number; 
  public get serverPortUp() {
    return this.getNumberAttribute('server_port_up');
  }
  public set serverPortUp(value: number) {
    this._serverPortUp = value;
  }
  public resetServerPortUp() {
    this._serverPortUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortUpInput() {
    return this._serverPortUp;
  }

  // server_up - computed: false, optional: true, required: false
  private _serverUp?: number; 
  public get serverUp() {
    return this.getNumberAttribute('server_up');
  }
  public set serverUp(value: number) {
    this._serverUp = value;
  }
  public resetServerUp() {
    this._serverUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUpInput() {
    return this._serverUp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper thunder_slb_health_check_summary_oper}
*/
export class DataThunderSlbHealthCheckSummaryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_check_summary_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthCheckSummaryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthCheckSummaryOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthCheckSummaryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthCheckSummaryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_check_summary_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_check_summary_oper thunder_slb_health_check_summary_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthCheckSummaryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthCheckSummaryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_check_summary_oper',
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
  private _oper = new DataThunderSlbHealthCheckSummaryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthCheckSummaryOperOper) {
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
      oper: dataThunderSlbHealthCheckSummaryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHealthCheckSummaryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthCheckSummaryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
