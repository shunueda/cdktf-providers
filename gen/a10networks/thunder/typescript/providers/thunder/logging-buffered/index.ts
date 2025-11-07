// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingBufferedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Logging buffer size (in items), default 30000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#buffersize LoggingBuffered#buffersize}
  */
  readonly buffersize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#id LoggingBuffered#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'disable': Do not send log to buffer; 'emergency': System unusable log messages      (severity=0); 'alert': Action must be taken immediately  (severity=1); 'critical': Critical conditions               (severity=2); 'error': Error conditions                  (severity=3); 'warning': Warning conditions                (severity=4); 'notification': Normal but significant conditions (severity=5); 'information': Informational messages            (severity=6); 'debugging': Debug level messages              (severity=7);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#levelname LoggingBuffered#levelname}
  */
  readonly levelname?: string;
  /**
  * Logging buffer size (in items), default 3000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#partition_buffersize LoggingBuffered#partition_buffersize}
  */
  readonly partitionBuffersize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#uuid LoggingBuffered#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered thunder_logging_buffered}
*/
export class LoggingBuffered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_buffered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingBuffered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingBuffered to import
  * @param importFromId The id of the existing LoggingBuffered that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingBuffered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_buffered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_buffered thunder_logging_buffered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingBufferedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingBufferedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_buffered',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buffersize = config.buffersize;
    this._id = config.id;
    this._levelname = config.levelname;
    this._partitionBuffersize = config.partitionBuffersize;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffersize - computed: false, optional: true, required: false
  private _buffersize?: number; 
  public get buffersize() {
    return this.getNumberAttribute('buffersize');
  }
  public set buffersize(value: number) {
    this._buffersize = value;
  }
  public resetBuffersize() {
    this._buffersize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersizeInput() {
    return this._buffersize;
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

  // levelname - computed: false, optional: true, required: false
  private _levelname?: string; 
  public get levelname() {
    return this.getStringAttribute('levelname');
  }
  public set levelname(value: string) {
    this._levelname = value;
  }
  public resetLevelname() {
    this._levelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelnameInput() {
    return this._levelname;
  }

  // partition_buffersize - computed: false, optional: true, required: false
  private _partitionBuffersize?: number; 
  public get partitionBuffersize() {
    return this.getNumberAttribute('partition_buffersize');
  }
  public set partitionBuffersize(value: number) {
    this._partitionBuffersize = value;
  }
  public resetPartitionBuffersize() {
    this._partitionBuffersize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionBuffersizeInput() {
    return this._partitionBuffersize;
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
      buffersize: cdktf.numberToTerraform(this._buffersize),
      id: cdktf.stringToTerraform(this._id),
      levelname: cdktf.stringToTerraform(this._levelname),
      partition_buffersize: cdktf.numberToTerraform(this._partitionBuffersize),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffersize: {
        value: cdktf.numberToHclTerraform(this._buffersize),
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
      levelname: {
        value: cdktf.stringToHclTerraform(this._levelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_buffersize: {
        value: cdktf.numberToHclTerraform(this._partitionBuffersize),
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
