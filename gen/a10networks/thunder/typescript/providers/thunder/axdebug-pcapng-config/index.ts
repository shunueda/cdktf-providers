// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AxdebugPcapngConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Exit from axdebug pcapng mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#exit AxdebugPcapngConfigA#exit}
  */
  readonly exit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#id AxdebugPcapngConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable pcapng
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#pcapng_enable AxdebugPcapngConfigA#pcapng_enable}
  */
  readonly pcapngEnable?: number;
  /**
  * Enable ssl key tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#ssl_key_enable AxdebugPcapngConfigA#ssl_key_enable}
  */
  readonly sslKeyEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#uuid AxdebugPcapngConfigA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config thunder_axdebug_pcapng_config}
*/
export class AxdebugPcapngConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_axdebug_pcapng_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AxdebugPcapngConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AxdebugPcapngConfigA to import
  * @param importFromId The id of the existing AxdebugPcapngConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AxdebugPcapngConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_axdebug_pcapng_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_pcapng_config thunder_axdebug_pcapng_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AxdebugPcapngConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AxdebugPcapngConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_axdebug_pcapng_config',
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
    this._exit = config.exit;
    this._id = config.id;
    this._pcapngEnable = config.pcapngEnable;
    this._sslKeyEnable = config.sslKeyEnable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exit - computed: false, optional: true, required: false
  private _exit?: number; 
  public get exit() {
    return this.getNumberAttribute('exit');
  }
  public set exit(value: number) {
    this._exit = value;
  }
  public resetExit() {
    this._exit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitInput() {
    return this._exit;
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

  // pcapng_enable - computed: false, optional: true, required: false
  private _pcapngEnable?: number; 
  public get pcapngEnable() {
    return this.getNumberAttribute('pcapng_enable');
  }
  public set pcapngEnable(value: number) {
    this._pcapngEnable = value;
  }
  public resetPcapngEnable() {
    this._pcapngEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapngEnableInput() {
    return this._pcapngEnable;
  }

  // ssl_key_enable - computed: false, optional: true, required: false
  private _sslKeyEnable?: number; 
  public get sslKeyEnable() {
    return this.getNumberAttribute('ssl_key_enable');
  }
  public set sslKeyEnable(value: number) {
    this._sslKeyEnable = value;
  }
  public resetSslKeyEnable() {
    this._sslKeyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyEnableInput() {
    return this._sslKeyEnable;
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
      exit: cdktf.numberToTerraform(this._exit),
      id: cdktf.stringToTerraform(this._id),
      pcapng_enable: cdktf.numberToTerraform(this._pcapngEnable),
      ssl_key_enable: cdktf.numberToTerraform(this._sslKeyEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exit: {
        value: cdktf.numberToHclTerraform(this._exit),
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
      pcapng_enable: {
        value: cdktf.numberToHclTerraform(this._pcapngEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_key_enable: {
        value: cdktf.numberToHclTerraform(this._sslKeyEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
