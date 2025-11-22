// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingPulsarTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster where the Pulsar tenant is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token#cluster StreamingPulsarToken#cluster}
  */
  readonly cluster: string;
  /**
  * Name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token#tenant StreamingPulsarToken#tenant}
  */
  readonly tenant: string;
  /**
  * The relative time until the token expires.  For example 1h, 1d, 1y, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token#time_to_live StreamingPulsarToken#time_to_live}
  */
  readonly timeToLive?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token astra_streaming_pulsar_token}
*/
export class StreamingPulsarToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_streaming_pulsar_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingPulsarToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingPulsarToken to import
  * @param importFromId The id of the existing StreamingPulsarToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingPulsarToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_streaming_pulsar_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/streaming_pulsar_token astra_streaming_pulsar_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingPulsarTokenConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingPulsarTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_streaming_pulsar_token',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._tenant = config.tenant;
    this._timeToLive = config.timeToLive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: string; 
  public get timeToLive() {
    return this.getStringAttribute('time_to_live');
  }
  public set timeToLive(value: string) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      tenant: cdktf.stringToTerraform(this._tenant),
      time_to_live: cdktf.stringToTerraform(this._timeToLive),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live: {
        value: cdktf.stringToHclTerraform(this._timeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
