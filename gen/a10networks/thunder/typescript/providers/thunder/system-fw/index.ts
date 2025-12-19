// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFwAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of flows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#application_flow SystemFwA#application_flow}
  */
  readonly applicationFlow?: number;
  /**
  * Enable application memory pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#application_mempool SystemFwA#application_mempool}
  */
  readonly applicationMempool?: number;
  /**
  * Enable basic dpi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#basic_dpi_enable SystemFwA#basic_dpi_enable}
  */
  readonly basicDpiEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#id SystemFwA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#uuid SystemFwA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw thunder_system_fw}
*/
export class SystemFwA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_fw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFwA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFwA to import
  * @param importFromId The id of the existing SystemFwA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFwA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_fw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_fw thunder_system_fw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFwAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFwAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_fw',
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
    this._applicationFlow = config.applicationFlow;
    this._applicationMempool = config.applicationMempool;
    this._basicDpiEnable = config.basicDpiEnable;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_flow - computed: false, optional: true, required: false
  private _applicationFlow?: number; 
  public get applicationFlow() {
    return this.getNumberAttribute('application_flow');
  }
  public set applicationFlow(value: number) {
    this._applicationFlow = value;
  }
  public resetApplicationFlow() {
    this._applicationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFlowInput() {
    return this._applicationFlow;
  }

  // application_mempool - computed: false, optional: true, required: false
  private _applicationMempool?: number; 
  public get applicationMempool() {
    return this.getNumberAttribute('application_mempool');
  }
  public set applicationMempool(value: number) {
    this._applicationMempool = value;
  }
  public resetApplicationMempool() {
    this._applicationMempool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMempoolInput() {
    return this._applicationMempool;
  }

  // basic_dpi_enable - computed: false, optional: true, required: false
  private _basicDpiEnable?: number; 
  public get basicDpiEnable() {
    return this.getNumberAttribute('basic_dpi_enable');
  }
  public set basicDpiEnable(value: number) {
    this._basicDpiEnable = value;
  }
  public resetBasicDpiEnable() {
    this._basicDpiEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicDpiEnableInput() {
    return this._basicDpiEnable;
  }

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_flow: cdktf.numberToTerraform(this._applicationFlow),
      application_mempool: cdktf.numberToTerraform(this._applicationMempool),
      basic_dpi_enable: cdktf.numberToTerraform(this._basicDpiEnable),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_flow: {
        value: cdktf.numberToHclTerraform(this._applicationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_mempool: {
        value: cdktf.numberToHclTerraform(this._applicationMempool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      basic_dpi_enable: {
        value: cdktf.numberToHclTerraform(this._basicDpiEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
