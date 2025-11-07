// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#id RouterLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging goes to log-buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#log_buffer RouterLog#log_buffer}
  */
  readonly logBuffer?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#uuid RouterLog#uuid}
  */
  readonly uuid?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#file RouterLog#file}
  */
  readonly file?: RouterLogFile;
}
export interface RouterLogFile {
  /**
  * Logging filename (File name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#name RouterLog#name}
  */
  readonly name?: string;
  /**
  * Per protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#per_protocol RouterLog#per_protocol}
  */
  readonly perProtocol?: number;
  /**
  * Log file rotation (Number of backup files)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#rotate RouterLog#rotate}
  */
  readonly rotate?: number;
  /**
  * Log file maximum size (File size in MBytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#size RouterLog#size}
  */
  readonly size?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#uuid RouterLog#uuid}
  */
  readonly uuid?: string;
}

export function routerLogFileToTerraform(struct?: RouterLogFileOutputReference | RouterLogFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    per_protocol: cdktf.numberToTerraform(struct!.perProtocol),
    rotate: cdktf.numberToTerraform(struct!.rotate),
    size: cdktf.numberToTerraform(struct!.size),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerLogFileToHclTerraform(struct?: RouterLogFileOutputReference | RouterLogFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_protocol: {
      value: cdktf.numberToHclTerraform(struct!.perProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rotate: {
      value: cdktf.numberToHclTerraform(struct!.rotate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterLogFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterLogFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._perProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.perProtocol = this._perProtocol;
    }
    if (this._rotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotate = this._rotate;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterLogFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._perProtocol = undefined;
      this._rotate = undefined;
      this._size = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._perProtocol = value.perProtocol;
      this._rotate = value.rotate;
      this._size = value.size;
      this._uuid = value.uuid;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // per_protocol - computed: false, optional: true, required: false
  private _perProtocol?: number; 
  public get perProtocol() {
    return this.getNumberAttribute('per_protocol');
  }
  public set perProtocol(value: number) {
    this._perProtocol = value;
  }
  public resetPerProtocol() {
    this._perProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perProtocolInput() {
    return this._perProtocol;
  }

  // rotate - computed: false, optional: true, required: false
  private _rotate?: number; 
  public get rotate() {
    return this.getNumberAttribute('rotate');
  }
  public set rotate(value: number) {
    this._rotate = value;
  }
  public resetRotate() {
    this._rotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log thunder_router_log}
*/
export class RouterLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterLog to import
  * @param importFromId The id of the existing RouterLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_log thunder_router_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_log',
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
    this._id = config.id;
    this._logBuffer = config.logBuffer;
    this._uuid = config.uuid;
    this._file.internalValue = config.file;
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

  // log_buffer - computed: false, optional: true, required: false
  private _logBuffer?: number; 
  public get logBuffer() {
    return this.getNumberAttribute('log_buffer');
  }
  public set logBuffer(value: number) {
    this._logBuffer = value;
  }
  public resetLogBuffer() {
    this._logBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBufferInput() {
    return this._logBuffer;
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

  // file - computed: false, optional: true, required: false
  private _file = new RouterLogFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: RouterLogFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_buffer: cdktf.numberToTerraform(this._logBuffer),
      uuid: cdktf.stringToTerraform(this._uuid),
      file: routerLogFileToTerraform(this._file.internalValue),
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
      log_buffer: {
        value: cdktf.numberToHclTerraform(this._logBuffer),
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
      file: {
        value: routerLogFileToHclTerraform(this._file.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterLogFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
