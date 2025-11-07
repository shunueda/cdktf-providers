// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugHcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dump per-request in anomaly cases only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#anomaly DebugHc#anomaly}
  */
  readonly anomaly?: number;
  /**
  * Application service id (virtual-server_port_protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#app_svc_id DebugHc#app_svc_id}
  */
  readonly appSvcId?: string;
  /**
  * Debug logs for harmony controller (error)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#error DebugHc#error}
  */
  readonly error?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#id DebugHc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Debug logs for harmony controller (metrics)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#metrics DebugHc#metrics}
  */
  readonly metrics?: number;
  /**
  * UUID of the object to filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#object_uuid DebugHc#object_uuid}
  */
  readonly objectUuid?: string;
  /**
  * Debug logs for harmony controller (per-connection)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#per_connection DebugHc#per_connection}
  */
  readonly perConnection?: number;
  /**
  * Debug logs for harmony controller (per-request)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#per_request DebugHc#per_request}
  */
  readonly perRequest?: number;
  /**
  * Debug logs for harmony controller (registration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#registration DebugHc#registration}
  */
  readonly registration?: number;
  /**
  * URI of the object to filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#uri DebugHc#uri}
  */
  readonly uri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#uuid DebugHc#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc thunder_debug_hc}
*/
export class DebugHc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_hc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugHc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugHc to import
  * @param importFromId The id of the existing DebugHc that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugHc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_hc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_hc thunder_debug_hc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugHcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugHcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_hc',
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
    this._anomaly = config.anomaly;
    this._appSvcId = config.appSvcId;
    this._error = config.error;
    this._id = config.id;
    this._metrics = config.metrics;
    this._objectUuid = config.objectUuid;
    this._perConnection = config.perConnection;
    this._perRequest = config.perRequest;
    this._registration = config.registration;
    this._uri = config.uri;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly - computed: false, optional: true, required: false
  private _anomaly?: number; 
  public get anomaly() {
    return this.getNumberAttribute('anomaly');
  }
  public set anomaly(value: number) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
  }

  // app_svc_id - computed: false, optional: true, required: false
  private _appSvcId?: string; 
  public get appSvcId() {
    return this.getStringAttribute('app_svc_id');
  }
  public set appSvcId(value: string) {
    this._appSvcId = value;
  }
  public resetAppSvcId() {
    this._appSvcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSvcIdInput() {
    return this._appSvcId;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics?: number; 
  public get metrics() {
    return this.getNumberAttribute('metrics');
  }
  public set metrics(value: number) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // object_uuid - computed: false, optional: true, required: false
  private _objectUuid?: string; 
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
  public set objectUuid(value: string) {
    this._objectUuid = value;
  }
  public resetObjectUuid() {
    this._objectUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectUuidInput() {
    return this._objectUuid;
  }

  // per_connection - computed: false, optional: true, required: false
  private _perConnection?: number; 
  public get perConnection() {
    return this.getNumberAttribute('per_connection');
  }
  public set perConnection(value: number) {
    this._perConnection = value;
  }
  public resetPerConnection() {
    this._perConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnectionInput() {
    return this._perConnection;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: number; 
  public get perRequest() {
    return this.getNumberAttribute('per_request');
  }
  public set perRequest(value: number) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest;
  }

  // registration - computed: false, optional: true, required: false
  private _registration?: number; 
  public get registration() {
    return this.getNumberAttribute('registration');
  }
  public set registration(value: number) {
    this._registration = value;
  }
  public resetRegistration() {
    this._registration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInput() {
    return this._registration;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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
      anomaly: cdktf.numberToTerraform(this._anomaly),
      app_svc_id: cdktf.stringToTerraform(this._appSvcId),
      error: cdktf.numberToTerraform(this._error),
      id: cdktf.stringToTerraform(this._id),
      metrics: cdktf.numberToTerraform(this._metrics),
      object_uuid: cdktf.stringToTerraform(this._objectUuid),
      per_connection: cdktf.numberToTerraform(this._perConnection),
      per_request: cdktf.numberToTerraform(this._perRequest),
      registration: cdktf.numberToTerraform(this._registration),
      uri: cdktf.stringToTerraform(this._uri),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly: {
        value: cdktf.numberToHclTerraform(this._anomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_svc_id: {
        value: cdktf.stringToHclTerraform(this._appSvcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error: {
        value: cdktf.numberToHclTerraform(this._error),
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
      metrics: {
        value: cdktf.numberToHclTerraform(this._metrics),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_uuid: {
        value: cdktf.stringToHclTerraform(this._objectUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_connection: {
        value: cdktf.numberToHclTerraform(this._perConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_request: {
        value: cdktf.numberToHclTerraform(this._perRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registration: {
        value: cdktf.numberToHclTerraform(this._registration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
