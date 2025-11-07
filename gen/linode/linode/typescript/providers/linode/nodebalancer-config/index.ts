// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodebalancerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * What algorithm this NodeBalancer should use for routing traffic to backends: roundrobin, leastconn, source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#algorithm NodebalancerConfigA#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down. If none no check is performed. connection requires only a connection to the backend to succeed. http and http_body rely on the backend serving HTTP, and that the response returned matches what is expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check NodebalancerConfigA#check}
  */
  readonly check?: string;
  /**
  * How many times to attempt a check before considering a backend to be down. (1-30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_attempts NodebalancerConfigA#check_attempts}
  */
  readonly checkAttempts?: number;
  /**
  * This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_body NodebalancerConfigA#check_body}
  */
  readonly checkBody?: string;
  /**
  * How often, in seconds, to check that backends are up and serving requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_interval NodebalancerConfigA#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * If true, any response from this backend with a 5xx status code will be enough for it to be considered unhealthy and taken out of rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_passive NodebalancerConfigA#check_passive}
  */
  readonly checkPassive?: boolean | cdktf.IResolvable;
  /**
  * The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_path NodebalancerConfigA#check_path}
  */
  readonly checkPath?: string;
  /**
  * How long, in seconds, to wait for a check attempt before considering it failed. (1-30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#check_timeout NodebalancerConfigA#check_timeout}
  */
  readonly checkTimeout?: number;
  /**
  * What ciphers to use for SSL connections served by this NodeBalancer. `legacy` is considered insecure and should only be used if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#cipher_suite NodebalancerConfigA#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * The ID of the NodeBalancer to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#nodebalancer_id NodebalancerConfigA#nodebalancer_id}
  */
  readonly nodebalancerId: number;
  /**
  * The TCP port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example). While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#port NodebalancerConfigA#port}
  */
  readonly port?: number;
  /**
  * The protocol this port is configured to serve. If this is set to https you must include an ssl_cert and an ssl_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#protocol NodebalancerConfigA#protocol}
  */
  readonly protocol?: string;
  /**
  * The version of ProxyProtocol to use for the underlying NodeBalancer. This requires protocol to be `tcp`. Valid values are `none`, `v1`, and `v2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#proxy_protocol NodebalancerConfigA#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * The certificate this port is serving. This is not returned. If set, this field will come back as `<REDACTED>`. Please use the ssl_commonname and ssl_fingerprint to identify the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#ssl_cert NodebalancerConfigA#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * The private key corresponding to this port's certificate. This is not returned. If set, this field will come back as `<REDACTED>`. Please use the ssl_commonname and ssl_fingerprint to identify the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#ssl_key NodebalancerConfigA#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Controls how session stickiness is handled on this port: 'none', 'table', 'http_cookie'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#stickiness NodebalancerConfigA#stickiness}
  */
  readonly stickiness?: string;
  /**
  * Specifies the port on the backend node used for active health checks, which may differ from the port serving traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#udp_check_port NodebalancerConfigA#udp_check_port}
  */
  readonly udpCheckPort?: number;
}
export interface NodebalancerConfigNodeStatus {
}

export function nodebalancerConfigNodeStatusToTerraform(struct?: NodebalancerConfigNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodebalancerConfigNodeStatusToHclTerraform(struct?: NodebalancerConfigNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodebalancerConfigNodeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodebalancerConfigNodeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerConfigNodeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down - computed: true, optional: false, required: false
  public get down() {
    return this.getNumberAttribute('down');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }
}

export class NodebalancerConfigNodeStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NodebalancerConfigNodeStatusOutputReference {
    return new NodebalancerConfigNodeStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config linode_nodebalancer_config}
*/
export class NodebalancerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_nodebalancer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodebalancerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodebalancerConfigA to import
  * @param importFromId The id of the existing NodebalancerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodebalancerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_nodebalancer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer_config linode_nodebalancer_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodebalancerConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: NodebalancerConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_nodebalancer_config',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._check = config.check;
    this._checkAttempts = config.checkAttempts;
    this._checkBody = config.checkBody;
    this._checkInterval = config.checkInterval;
    this._checkPassive = config.checkPassive;
    this._checkPath = config.checkPath;
    this._checkTimeout = config.checkTimeout;
    this._cipherSuite = config.cipherSuite;
    this._nodebalancerId = config.nodebalancerId;
    this._port = config.port;
    this._protocol = config.protocol;
    this._proxyProtocol = config.proxyProtocol;
    this._sslCert = config.sslCert;
    this._sslKey = config.sslKey;
    this._stickiness = config.stickiness;
    this._udpCheckPort = config.udpCheckPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // check - computed: true, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // check_attempts - computed: true, optional: true, required: false
  private _checkAttempts?: number; 
  public get checkAttempts() {
    return this.getNumberAttribute('check_attempts');
  }
  public set checkAttempts(value: number) {
    this._checkAttempts = value;
  }
  public resetCheckAttempts() {
    this._checkAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkAttemptsInput() {
    return this._checkAttempts;
  }

  // check_body - computed: true, optional: true, required: false
  private _checkBody?: string; 
  public get checkBody() {
    return this.getStringAttribute('check_body');
  }
  public set checkBody(value: string) {
    this._checkBody = value;
  }
  public resetCheckBody() {
    this._checkBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBodyInput() {
    return this._checkBody;
  }

  // check_interval - computed: true, optional: true, required: false
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // check_passive - computed: true, optional: true, required: false
  private _checkPassive?: boolean | cdktf.IResolvable; 
  public get checkPassive() {
    return this.getBooleanAttribute('check_passive');
  }
  public set checkPassive(value: boolean | cdktf.IResolvable) {
    this._checkPassive = value;
  }
  public resetCheckPassive() {
    this._checkPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPassiveInput() {
    return this._checkPassive;
  }

  // check_path - computed: true, optional: true, required: false
  private _checkPath?: string; 
  public get checkPath() {
    return this.getStringAttribute('check_path');
  }
  public set checkPath(value: string) {
    this._checkPath = value;
  }
  public resetCheckPath() {
    this._checkPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPathInput() {
    return this._checkPath;
  }

  // check_timeout - computed: true, optional: true, required: false
  private _checkTimeout?: number; 
  public get checkTimeout() {
    return this.getNumberAttribute('check_timeout');
  }
  public set checkTimeout(value: number) {
    this._checkTimeout = value;
  }
  public resetCheckTimeout() {
    this._checkTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTimeoutInput() {
    return this._checkTimeout;
  }

  // cipher_suite - computed: true, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_status - computed: true, optional: false, required: false
  private _nodeStatus = new NodebalancerConfigNodeStatusList(this, "node_status", false);
  public get nodeStatus() {
    return this._nodeStatus;
  }

  // nodebalancer_id - computed: false, optional: false, required: true
  private _nodebalancerId?: number; 
  public get nodebalancerId() {
    return this.getNumberAttribute('nodebalancer_id');
  }
  public set nodebalancerId(value: number) {
    this._nodebalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerIdInput() {
    return this._nodebalancerId;
  }

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_protocol - computed: true, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_commonname - computed: true, optional: false, required: false
  public get sslCommonname() {
    return this.getStringAttribute('ssl_commonname');
  }

  // ssl_fingerprint - computed: true, optional: false, required: false
  public get sslFingerprint() {
    return this.getStringAttribute('ssl_fingerprint');
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // stickiness - computed: true, optional: true, required: false
  private _stickiness?: string; 
  public get stickiness() {
    return this.getStringAttribute('stickiness');
  }
  public set stickiness(value: string) {
    this._stickiness = value;
  }
  public resetStickiness() {
    this._stickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness;
  }

  // udp_check_port - computed: true, optional: true, required: false
  private _udpCheckPort?: number; 
  public get udpCheckPort() {
    return this.getNumberAttribute('udp_check_port');
  }
  public set udpCheckPort(value: number) {
    this._udpCheckPort = value;
  }
  public resetUdpCheckPort() {
    this._udpCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCheckPortInput() {
    return this._udpCheckPort;
  }

  // udp_session_timeout - computed: true, optional: false, required: false
  public get udpSessionTimeout() {
    return this.getNumberAttribute('udp_session_timeout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      check: cdktf.stringToTerraform(this._check),
      check_attempts: cdktf.numberToTerraform(this._checkAttempts),
      check_body: cdktf.stringToTerraform(this._checkBody),
      check_interval: cdktf.numberToTerraform(this._checkInterval),
      check_passive: cdktf.booleanToTerraform(this._checkPassive),
      check_path: cdktf.stringToTerraform(this._checkPath),
      check_timeout: cdktf.numberToTerraform(this._checkTimeout),
      cipher_suite: cdktf.stringToTerraform(this._cipherSuite),
      nodebalancer_id: cdktf.numberToTerraform(this._nodebalancerId),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      stickiness: cdktf.stringToTerraform(this._stickiness),
      udp_check_port: cdktf.numberToTerraform(this._udpCheckPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check: {
        value: cdktf.stringToHclTerraform(this._check),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_attempts: {
        value: cdktf.numberToHclTerraform(this._checkAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_body: {
        value: cdktf.stringToHclTerraform(this._checkBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_interval: {
        value: cdktf.numberToHclTerraform(this._checkInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_passive: {
        value: cdktf.booleanToHclTerraform(this._checkPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_path: {
        value: cdktf.stringToHclTerraform(this._checkPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_timeout: {
        value: cdktf.numberToHclTerraform(this._checkTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_suite: {
        value: cdktf.stringToHclTerraform(this._cipherSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodebalancer_id: {
        value: cdktf.numberToHclTerraform(this._nodebalancerId),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_protocol: {
        value: cdktf.stringToHclTerraform(this._proxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key: {
        value: cdktf.stringToHclTerraform(this._sslKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stickiness: {
        value: cdktf.stringToHclTerraform(this._stickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_check_port: {
        value: cdktf.numberToHclTerraform(this._udpCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
