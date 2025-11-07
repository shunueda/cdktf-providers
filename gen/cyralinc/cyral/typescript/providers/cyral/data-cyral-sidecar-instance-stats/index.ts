// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSidecarInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sidecar instance identifier. See also data source [`cyral_sidecar_instance`](../data-sources/sidecar_instance.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats#instance_id DataCyralSidecarInstanceStats#instance_id}
  */
  readonly instanceId: string;
  /**
  * Sidecar identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats#sidecar_id DataCyralSidecarInstanceStats#sidecar_id}
  */
  readonly sidecarId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats cyral_sidecar_instance_stats}
*/
export class DataCyralSidecarInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSidecarInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSidecarInstanceStats to import
  * @param importFromId The id of the existing DataCyralSidecarInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSidecarInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_instance_stats cyral_sidecar_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSidecarInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCyralSidecarInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar_instance_stats',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._sidecarId = config.sidecarId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // queries_per_second - computed: true, optional: false, required: false
  public get queriesPerSecond() {
    return this.getNumberAttribute('queries_per_second');
  }

  // sidecar_id - computed: false, optional: false, required: true
  private _sidecarId?: string; 
  public get sidecarId() {
    return this.getStringAttribute('sidecar_id');
  }
  public set sidecarId(value: string) {
    this._sidecarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarIdInput() {
    return this._sidecarId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      sidecar_id: cdktf.stringToTerraform(this._sidecarId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidecar_id: {
        value: cdktf.stringToHclTerraform(this._sidecarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
