// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QkviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to exclude cores from the qkview. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#exclude_cores Qkview#exclude_cores}
  */
  readonly excludeCores?: boolean | cdktf.IResolvable;
  /**
  * Name of the qkview file to generate (without .tar extension).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#filename Qkview#filename}
  */
  readonly filename: string;
  /**
  * Maximum core size in megabytes. Must be between 2-1000. Default is 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#max_core_size Qkview#max_core_size}
  */
  readonly maxCoreSize?: number;
  /**
  * Maximum file size in megabytes. Must be between 2-1000. Default is 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#max_file_size Qkview#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Timeout value in seconds for qkview generation. Default is 0 (no timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#timeout Qkview#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview f5os_qkview}
*/
export class Qkview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_qkview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Qkview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Qkview to import
  * @param importFromId The id of the existing Qkview that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Qkview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_qkview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/qkview f5os_qkview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QkviewConfig
  */
  public constructor(scope: Construct, id: string, config: QkviewConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_qkview',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeCores = config.excludeCores;
    this._filename = config.filename;
    this._maxCoreSize = config.maxCoreSize;
    this._maxFileSize = config.maxFileSize;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_cores - computed: true, optional: true, required: false
  private _excludeCores?: boolean | cdktf.IResolvable; 
  public get excludeCores() {
    return this.getBooleanAttribute('exclude_cores');
  }
  public set excludeCores(value: boolean | cdktf.IResolvable) {
    this._excludeCores = value;
  }
  public resetExcludeCores() {
    this._excludeCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCoresInput() {
    return this._excludeCores;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // generated_file - computed: true, optional: false, required: false
  public get generatedFile() {
    return this.getStringAttribute('generated_file');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_core_size - computed: true, optional: true, required: false
  private _maxCoreSize?: number; 
  public get maxCoreSize() {
    return this.getNumberAttribute('max_core_size');
  }
  public set maxCoreSize(value: number) {
    this._maxCoreSize = value;
  }
  public resetMaxCoreSize() {
    this._maxCoreSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoreSizeInput() {
    return this._maxCoreSize;
  }

  // max_file_size - computed: true, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_cores: cdktf.booleanToTerraform(this._excludeCores),
      filename: cdktf.stringToTerraform(this._filename),
      max_core_size: cdktf.numberToTerraform(this._maxCoreSize),
      max_file_size: cdktf.numberToTerraform(this._maxFileSize),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_cores: {
        value: cdktf.booleanToHclTerraform(this._excludeCores),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_core_size: {
        value: cdktf.numberToHclTerraform(this._maxCoreSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_file_size: {
        value: cdktf.numberToHclTerraform(this._maxFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
