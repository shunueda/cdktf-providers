// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/log_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRenderLogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/log_stream#endpoint DataRenderLogStream#endpoint}
  */
  readonly endpoint?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/log_stream render_log_stream}
*/
export class DataRenderLogStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_log_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRenderLogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRenderLogStream to import
  * @param importFromId The id of the existing DataRenderLogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/log_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRenderLogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_log_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/log_stream render_log_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRenderLogStreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRenderLogStreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'render_log_stream',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // preview - computed: true, optional: false, required: false
  public get preview() {
    return this.getStringAttribute('preview');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
