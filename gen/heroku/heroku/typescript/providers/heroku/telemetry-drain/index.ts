// https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelemetryDrainConfig extends cdktf.TerraformMetaArguments {
  /**
  * URI of your OpenTelemetry consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#endpoint TelemetryDrain#endpoint}
  */
  readonly endpoint: string;
  /**
  * Transport type for OpenTelemetry consumer (otlphttp or otlp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#exporter_type TelemetryDrain#exporter_type}
  */
  readonly exporterType: string;
  /**
  * Headers to send to your OpenTelemetry consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#headers TelemetryDrain#headers}
  */
  readonly headers: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#id TelemetryDrain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the app or space that owns this telemetry drain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#owner_id TelemetryDrain#owner_id}
  */
  readonly ownerId: string;
  /**
  * Type of owner (app or space)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#owner_type TelemetryDrain#owner_type}
  */
  readonly ownerType: string;
  /**
  * OpenTelemetry signals to send (traces, metrics, logs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#signals TelemetryDrain#signals}
  */
  readonly signals: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain heroku_telemetry_drain}
*/
export class TelemetryDrain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku_telemetry_drain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelemetryDrain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelemetryDrain to import
  * @param importFromId The id of the existing TelemetryDrain that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelemetryDrain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku_telemetry_drain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/telemetry_drain heroku_telemetry_drain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelemetryDrainConfig
  */
  public constructor(scope: Construct, id: string, config: TelemetryDrainConfig) {
    super(scope, id, {
      terraformResourceType: 'heroku_telemetry_drain',
      terraformGeneratorMetadata: {
        providerName: 'heroku',
        providerVersion: '5.3.2'
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
    this._exporterType = config.exporterType;
    this._headers = config.headers;
    this._id = config.id;
    this._ownerId = config.ownerId;
    this._ownerType = config.ownerType;
    this._signals = config.signals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // exporter_type - computed: false, optional: false, required: true
  private _exporterType?: string; 
  public get exporterType() {
    return this.getStringAttribute('exporter_type');
  }
  public set exporterType(value: string) {
    this._exporterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterTypeInput() {
    return this._exporterType;
  }

  // headers - computed: false, optional: false, required: true
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }

  // signals - computed: false, optional: false, required: true
  private _signals?: string[]; 
  public get signals() {
    return cdktf.Fn.tolist(this.getListAttribute('signals'));
  }
  public set signals(value: string[]) {
    this._signals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalsInput() {
    return this._signals;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      exporter_type: cdktf.stringToTerraform(this._exporterType),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      id: cdktf.stringToTerraform(this._id),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      signals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signals),
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
      exporter_type: {
        value: cdktf.stringToHclTerraform(this._exporterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_type: {
        value: cdktf.stringToHclTerraform(this._ownerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
