// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'clientside': clientside SSL connection; 'serverside': serverside SSL connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#client_server DebugSsl#client_server}
  */
  readonly clientServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#id DebugSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Application payloads exceeding this limit will be truncated to dump. Set to 0 to disable payload dumping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#payload_dump_max DebugSsl#payload_dump_max}
  */
  readonly payloadDumpMax?: number;
  /**
  * Dump the application payload as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#payload_dump_string DebugSsl#payload_dump_string}
  */
  readonly payloadDumpString?: number;
  /**
  * 'read': read record; 'write': write record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#read_write DebugSsl#read_write}
  */
  readonly readWrite?: string;
  /**
  * The last record number to print debug messages. Default: 0 (no end)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#record_end DebugSsl#record_end}
  */
  readonly recordEnd?: number;
  /**
  * The first record number to debug prints messages. Default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#record_start DebugSsl#record_start}
  */
  readonly recordStart?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#uuid DebugSsl#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl thunder_debug_ssl}
*/
export class DebugSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugSsl to import
  * @param importFromId The id of the existing DebugSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ssl thunder_debug_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugSslConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugSslConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ssl',
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
    this._clientServer = config.clientServer;
    this._id = config.id;
    this._payloadDumpMax = config.payloadDumpMax;
    this._payloadDumpString = config.payloadDumpString;
    this._readWrite = config.readWrite;
    this._recordEnd = config.recordEnd;
    this._recordStart = config.recordStart;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_server - computed: false, optional: true, required: false
  private _clientServer?: string; 
  public get clientServer() {
    return this.getStringAttribute('client_server');
  }
  public set clientServer(value: string) {
    this._clientServer = value;
  }
  public resetClientServer() {
    this._clientServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientServerInput() {
    return this._clientServer;
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

  // payload_dump_max - computed: false, optional: true, required: false
  private _payloadDumpMax?: number; 
  public get payloadDumpMax() {
    return this.getNumberAttribute('payload_dump_max');
  }
  public set payloadDumpMax(value: number) {
    this._payloadDumpMax = value;
  }
  public resetPayloadDumpMax() {
    this._payloadDumpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadDumpMaxInput() {
    return this._payloadDumpMax;
  }

  // payload_dump_string - computed: false, optional: true, required: false
  private _payloadDumpString?: number; 
  public get payloadDumpString() {
    return this.getNumberAttribute('payload_dump_string');
  }
  public set payloadDumpString(value: number) {
    this._payloadDumpString = value;
  }
  public resetPayloadDumpString() {
    this._payloadDumpString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadDumpStringInput() {
    return this._payloadDumpString;
  }

  // read_write - computed: false, optional: true, required: false
  private _readWrite?: string; 
  public get readWrite() {
    return this.getStringAttribute('read_write');
  }
  public set readWrite(value: string) {
    this._readWrite = value;
  }
  public resetReadWrite() {
    this._readWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteInput() {
    return this._readWrite;
  }

  // record_end - computed: false, optional: true, required: false
  private _recordEnd?: number; 
  public get recordEnd() {
    return this.getNumberAttribute('record_end');
  }
  public set recordEnd(value: number) {
    this._recordEnd = value;
  }
  public resetRecordEnd() {
    this._recordEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEndInput() {
    return this._recordEnd;
  }

  // record_start - computed: false, optional: true, required: false
  private _recordStart?: number; 
  public get recordStart() {
    return this.getNumberAttribute('record_start');
  }
  public set recordStart(value: number) {
    this._recordStart = value;
  }
  public resetRecordStart() {
    this._recordStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStartInput() {
    return this._recordStart;
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
      client_server: cdktf.stringToTerraform(this._clientServer),
      id: cdktf.stringToTerraform(this._id),
      payload_dump_max: cdktf.numberToTerraform(this._payloadDumpMax),
      payload_dump_string: cdktf.numberToTerraform(this._payloadDumpString),
      read_write: cdktf.stringToTerraform(this._readWrite),
      record_end: cdktf.numberToTerraform(this._recordEnd),
      record_start: cdktf.numberToTerraform(this._recordStart),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_server: {
        value: cdktf.stringToHclTerraform(this._clientServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_dump_max: {
        value: cdktf.numberToHclTerraform(this._payloadDumpMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payload_dump_string: {
        value: cdktf.numberToHclTerraform(this._payloadDumpString),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_write: {
        value: cdktf.stringToHclTerraform(this._readWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_end: {
        value: cdktf.numberToHclTerraform(this._recordEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_start: {
        value: cdktf.numberToHclTerraform(this._recordStart),
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
