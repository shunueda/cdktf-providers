// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * RADIUS server accounting port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#accounting_port SystemRadiusServer#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Accounting retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#accounting_retry SystemRadiusServer#accounting_retry}
  */
  readonly accountingRetry?: number;
  /**
  * Accounting request timeout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#accounting_timeout SystemRadiusServer#accounting_timeout}
  */
  readonly accountingTimeout?: number;
  /**
  * RADIUS server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#address SystemRadiusServer#address}
  */
  readonly address: string;
  /**
  * RADIUS client dynamic request port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#dynamic_request_port SystemRadiusServer#dynamic_request_port}
  */
  readonly dynamicRequestPort?: number;
  /**
  * Maximum requests in flight to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#max_outstanding_requests SystemRadiusServer#max_outstanding_requests}
  */
  readonly maxOutstandingRequests?: number;
  /**
  * RADIUS server authentication port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#port SystemRadiusServer#port}
  */
  readonly port?: number;
  /**
  * RADIUS server preauthentication port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#preauthentication_port SystemRadiusServer#preauthentication_port}
  */
  readonly preauthenticationPort?: number;
  /**
  * Shared secret with the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#preauthentication_secret SystemRadiusServer#preauthentication_secret}
  */
  readonly preauthenticationSecret?: string;
  /**
  * Retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#retry SystemRadiusServer#retry}
  */
  readonly retry?: number;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#routing_instance SystemRadiusServer#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Shared secret with the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#secret SystemRadiusServer#secret}
  */
  readonly secret: string;
  /**
  * Use specified address as source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#source_address SystemRadiusServer#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Request timeout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#timeout SystemRadiusServer#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server junos_system_radius_server}
*/
export class SystemRadiusServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRadiusServer to import
  * @param importFromId The id of the existing SystemRadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/system_radius_server junos_system_radius_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRadiusServerConfig
  */
  public constructor(scope: Construct, id: string, config: SystemRadiusServerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_radius_server',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingPort = config.accountingPort;
    this._accountingRetry = config.accountingRetry;
    this._accountingTimeout = config.accountingTimeout;
    this._address = config.address;
    this._dynamicRequestPort = config.dynamicRequestPort;
    this._maxOutstandingRequests = config.maxOutstandingRequests;
    this._port = config.port;
    this._preauthenticationPort = config.preauthenticationPort;
    this._preauthenticationSecret = config.preauthenticationSecret;
    this._retry = config.retry;
    this._routingInstance = config.routingInstance;
    this._secret = config.secret;
    this._sourceAddress = config.sourceAddress;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // accounting_retry - computed: false, optional: true, required: false
  private _accountingRetry?: number; 
  public get accountingRetry() {
    return this.getNumberAttribute('accounting_retry');
  }
  public set accountingRetry(value: number) {
    this._accountingRetry = value;
  }
  public resetAccountingRetry() {
    this._accountingRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingRetryInput() {
    return this._accountingRetry;
  }

  // accounting_timeout - computed: false, optional: true, required: false
  private _accountingTimeout?: number; 
  public get accountingTimeout() {
    return this.getNumberAttribute('accounting_timeout');
  }
  public set accountingTimeout(value: number) {
    this._accountingTimeout = value;
  }
  public resetAccountingTimeout() {
    this._accountingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingTimeoutInput() {
    return this._accountingTimeout;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dynamic_request_port - computed: false, optional: true, required: false
  private _dynamicRequestPort?: number; 
  public get dynamicRequestPort() {
    return this.getNumberAttribute('dynamic_request_port');
  }
  public set dynamicRequestPort(value: number) {
    this._dynamicRequestPort = value;
  }
  public resetDynamicRequestPort() {
    this._dynamicRequestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRequestPortInput() {
    return this._dynamicRequestPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_outstanding_requests - computed: false, optional: true, required: false
  private _maxOutstandingRequests?: number; 
  public get maxOutstandingRequests() {
    return this.getNumberAttribute('max_outstanding_requests');
  }
  public set maxOutstandingRequests(value: number) {
    this._maxOutstandingRequests = value;
  }
  public resetMaxOutstandingRequests() {
    this._maxOutstandingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutstandingRequestsInput() {
    return this._maxOutstandingRequests;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preauthentication_port - computed: false, optional: true, required: false
  private _preauthenticationPort?: number; 
  public get preauthenticationPort() {
    return this.getNumberAttribute('preauthentication_port');
  }
  public set preauthenticationPort(value: number) {
    this._preauthenticationPort = value;
  }
  public resetPreauthenticationPort() {
    this._preauthenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationPortInput() {
    return this._preauthenticationPort;
  }

  // preauthentication_secret - computed: false, optional: true, required: false
  private _preauthenticationSecret?: string; 
  public get preauthenticationSecret() {
    return this.getStringAttribute('preauthentication_secret');
  }
  public set preauthenticationSecret(value: string) {
    this._preauthenticationSecret = value;
  }
  public resetPreauthenticationSecret() {
    this._preauthenticationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationSecretInput() {
    return this._preauthenticationSecret;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // timeout - computed: false, optional: true, required: false
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
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      accounting_retry: cdktf.numberToTerraform(this._accountingRetry),
      accounting_timeout: cdktf.numberToTerraform(this._accountingTimeout),
      address: cdktf.stringToTerraform(this._address),
      dynamic_request_port: cdktf.numberToTerraform(this._dynamicRequestPort),
      max_outstanding_requests: cdktf.numberToTerraform(this._maxOutstandingRequests),
      port: cdktf.numberToTerraform(this._port),
      preauthentication_port: cdktf.numberToTerraform(this._preauthenticationPort),
      preauthentication_secret: cdktf.stringToTerraform(this._preauthenticationSecret),
      retry: cdktf.numberToTerraform(this._retry),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      secret: cdktf.stringToTerraform(this._secret),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      accounting_retry: {
        value: cdktf.numberToHclTerraform(this._accountingRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      accounting_timeout: {
        value: cdktf.numberToHclTerraform(this._accountingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_request_port: {
        value: cdktf.numberToHclTerraform(this._dynamicRequestPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_outstanding_requests: {
        value: cdktf.numberToHclTerraform(this._maxOutstandingRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preauthentication_port: {
        value: cdktf.numberToHclTerraform(this._preauthenticationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preauthentication_secret: {
        value: cdktf.stringToHclTerraform(this._preauthenticationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
