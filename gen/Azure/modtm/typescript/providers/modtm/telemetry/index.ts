// https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelemetryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Telemetry endpoint to send data to, will override provider's default `endpoint` setting.
  * You can set `endpoint` in this resource, when there's no explicit `setting` in the provider block, it will override provider's default `endpoint`.
  * 
  * |Explicit `endpoint` in `provider` block | `MODTM_ENDPOINT` environment variable set | Explicit `endpoint` in resource block | Telemetry endpoint |
  * |--|--|--|--|
  * | ✓ | ✓ | ✓ | Explicit `endpoint` in `provider` block | 
  * | ✓ | ✓ | × | Explicit `endpoint` in `provider` block | 
  * | ✓ | × | ✓ | Explicit `endpoint` in `provider` block | 
  * | ✓ | × | × | Explicit `endpoint` in `provider` block | 
  * | × | ✓ | ✓ | `MODTM_ENDPOINT` environment variable | 
  * | × | ✓ | × | `MODTM_ENDPOINT` environment variable | 
  * | × | × | ✓ | Explicit `endpoint` in resource block | 
  * | × | × | × | Default Microsoft telemetry service endpoint | 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry#endpoint Telemetry#endpoint}
  */
  readonly endpoint?: string;
  /**
  * An ephemeral number that works with tags-generation tools like [BridgeCrew Yor](https://yor.io/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry#ephemeral_number Telemetry#ephemeral_number}
  */
  readonly ephemeralNumber?: number;
  /**
  * A nonce that works with tags-generation tools like [BridgeCrew Yor](https://yor.io/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry#nonce Telemetry#nonce}
  */
  readonly nonce?: number;
  /**
  * Tags to be sent to telemetry endpoint. The following tags are reserved and cannot be used: `event`. When specififying `module_path`, the `source` and `version` tags will be automatically added to the tags sent to the telemetry endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry#tags Telemetry#tags}
  */
  readonly tags: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry modtm_telemetry}
*/
export class Telemetry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "modtm_telemetry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Telemetry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Telemetry to import
  * @param importFromId The id of the existing Telemetry that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Telemetry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "modtm_telemetry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs/resources/telemetry modtm_telemetry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelemetryConfig
  */
  public constructor(scope: Construct, id: string, config: TelemetryConfig) {
    super(scope, id, {
      terraformResourceType: 'modtm_telemetry',
      terraformGeneratorMetadata: {
        providerName: 'modtm',
        providerVersion: '0.3.5',
        providerVersionConstraint: '0.3.5'
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
    this._ephemeralNumber = config.ephemeralNumber;
    this._nonce = config.nonce;
    this._tags = config.tags;
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

  // ephemeral_number - computed: true, optional: true, required: false
  private _ephemeralNumber?: number; 
  public get ephemeralNumber() {
    return this.getNumberAttribute('ephemeral_number');
  }
  public set ephemeralNumber(value: number) {
    this._ephemeralNumber = value;
  }
  public resetEphemeralNumber() {
    this._ephemeralNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralNumberInput() {
    return this._ephemeralNumber;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nonce - computed: true, optional: true, required: false
  private _nonce?: number; 
  public get nonce() {
    return this.getNumberAttribute('nonce');
  }
  public set nonce(value: number) {
    this._nonce = value;
  }
  public resetNonce() {
    this._nonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonceInput() {
    return this._nonce;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      ephemeral_number: cdktf.numberToTerraform(this._ephemeralNumber),
      nonce: cdktf.numberToTerraform(this._nonce),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      ephemeral_number: {
        value: cdktf.numberToHclTerraform(this._ephemeralNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nonce: {
        value: cdktf.numberToHclTerraform(this._nonce),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
