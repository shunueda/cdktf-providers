// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/metrics_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRenderMetricsStreamConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/metrics_stream render_metrics_stream}
*/
export class DataRenderMetricsStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_metrics_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRenderMetricsStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRenderMetricsStream to import
  * @param importFromId The id of the existing DataRenderMetricsStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/metrics_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRenderMetricsStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_metrics_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/metrics_stream render_metrics_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRenderMetricsStreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRenderMetricsStreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'render_metrics_stream',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metrics_provider - computed: true, optional: false, required: false
  public get metricsProvider() {
    return this.getStringAttribute('metrics_provider');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
