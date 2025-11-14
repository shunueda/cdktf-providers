// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAccessproxyApigatewayRealserversAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#access_proxy ObjectFirewallAccessproxyApigatewayRealserversA#access_proxy}
  */
  readonly accessProxy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#addr_type ObjectFirewallAccessproxyApigatewayRealserversA#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#address ObjectFirewallAccessproxyApigatewayRealserversA#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#adom ObjectFirewallAccessproxyApigatewayRealserversA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#api_gateway ObjectFirewallAccessproxyApigatewayRealserversA#api_gateway}
  */
  readonly apiGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#domain ObjectFirewallAccessproxyApigatewayRealserversA#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#external_auth ObjectFirewallAccessproxyApigatewayRealserversA#external_auth}
  */
  readonly externalAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#fosid ObjectFirewallAccessproxyApigatewayRealserversA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#health_check ObjectFirewallAccessproxyApigatewayRealserversA#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#health_check_proto ObjectFirewallAccessproxyApigatewayRealserversA#health_check_proto}
  */
  readonly healthCheckProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#holddown_interval ObjectFirewallAccessproxyApigatewayRealserversA#holddown_interval}
  */
  readonly holddownInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#http_host ObjectFirewallAccessproxyApigatewayRealserversA#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#id ObjectFirewallAccessproxyApigatewayRealserversA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#ip ObjectFirewallAccessproxyApigatewayRealserversA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#mappedport ObjectFirewallAccessproxyApigatewayRealserversA#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#port ObjectFirewallAccessproxyApigatewayRealserversA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#scopetype ObjectFirewallAccessproxyApigatewayRealserversA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#ssh_client_cert ObjectFirewallAccessproxyApigatewayRealserversA#ssh_client_cert}
  */
  readonly sshClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#ssh_host_key ObjectFirewallAccessproxyApigatewayRealserversA#ssh_host_key}
  */
  readonly sshHostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#ssh_host_key_validation ObjectFirewallAccessproxyApigatewayRealserversA#ssh_host_key_validation}
  */
  readonly sshHostKeyValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#status ObjectFirewallAccessproxyApigatewayRealserversA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#translate_host ObjectFirewallAccessproxyApigatewayRealserversA#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#tunnel_encryption ObjectFirewallAccessproxyApigatewayRealserversA#tunnel_encryption}
  */
  readonly tunnelEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#type ObjectFirewallAccessproxyApigatewayRealserversA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#verify_cert ObjectFirewallAccessproxyApigatewayRealserversA#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#weight ObjectFirewallAccessproxyApigatewayRealserversA#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers fortimanager_object_firewall_accessproxy_apigateway_realservers}
*/
export class ObjectFirewallAccessproxyApigatewayRealserversA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_accessproxy_apigateway_realservers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAccessproxyApigatewayRealserversA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAccessproxyApigatewayRealserversA to import
  * @param importFromId The id of the existing ObjectFirewallAccessproxyApigatewayRealserversA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAccessproxyApigatewayRealserversA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_accessproxy_apigateway_realservers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway_realservers fortimanager_object_firewall_accessproxy_apigateway_realservers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAccessproxyApigatewayRealserversAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAccessproxyApigatewayRealserversAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_accessproxy_apigateway_realservers',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessProxy = config.accessProxy;
    this._addrType = config.addrType;
    this._address = config.address;
    this._adom = config.adom;
    this._apiGateway = config.apiGateway;
    this._domain = config.domain;
    this._externalAuth = config.externalAuth;
    this._fosid = config.fosid;
    this._healthCheck = config.healthCheck;
    this._healthCheckProto = config.healthCheckProto;
    this._holddownInterval = config.holddownInterval;
    this._httpHost = config.httpHost;
    this._id = config.id;
    this._ip = config.ip;
    this._mappedport = config.mappedport;
    this._port = config.port;
    this._scopetype = config.scopetype;
    this._sshClientCert = config.sshClientCert;
    this._sshHostKey = config.sshHostKey;
    this._sshHostKeyValidation = config.sshHostKeyValidation;
    this._status = config.status;
    this._translateHost = config.translateHost;
    this._tunnelEncryption = config.tunnelEncryption;
    this._type = config.type;
    this._verifyCert = config.verifyCert;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_proxy - computed: false, optional: false, required: true
  private _accessProxy?: string; 
  public get accessProxy() {
    return this.getStringAttribute('access_proxy');
  }
  public set accessProxy(value: string) {
    this._accessProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProxyInput() {
    return this._accessProxy;
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // api_gateway - computed: false, optional: false, required: true
  private _apiGateway?: string; 
  public get apiGateway() {
    return this.getStringAttribute('api_gateway');
  }
  public set apiGateway(value: string) {
    this._apiGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // external_auth - computed: true, optional: true, required: false
  private _externalAuth?: string; 
  public get externalAuth() {
    return this.getStringAttribute('external_auth');
  }
  public set externalAuth(value: string) {
    this._externalAuth = value;
  }
  public resetExternalAuth() {
    this._externalAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthInput() {
    return this._externalAuth;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_proto - computed: true, optional: true, required: false
  private _healthCheckProto?: string; 
  public get healthCheckProto() {
    return this.getStringAttribute('health_check_proto');
  }
  public set healthCheckProto(value: string) {
    this._healthCheckProto = value;
  }
  public resetHealthCheckProto() {
    this._healthCheckProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtoInput() {
    return this._healthCheckProto;
  }

  // holddown_interval - computed: true, optional: true, required: false
  private _holddownInterval?: string; 
  public get holddownInterval() {
    return this.getStringAttribute('holddown_interval');
  }
  public set holddownInterval(value: string) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mappedport - computed: false, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // ssh_client_cert - computed: false, optional: true, required: false
  private _sshClientCert?: string; 
  public get sshClientCert() {
    return this.getStringAttribute('ssh_client_cert');
  }
  public set sshClientCert(value: string) {
    this._sshClientCert = value;
  }
  public resetSshClientCert() {
    this._sshClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertInput() {
    return this._sshClientCert;
  }

  // ssh_host_key - computed: false, optional: true, required: false
  private _sshHostKey?: string; 
  public get sshHostKey() {
    return this.getStringAttribute('ssh_host_key');
  }
  public set sshHostKey(value: string) {
    this._sshHostKey = value;
  }
  public resetSshHostKey() {
    this._sshHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyInput() {
    return this._sshHostKey;
  }

  // ssh_host_key_validation - computed: true, optional: true, required: false
  private _sshHostKeyValidation?: string; 
  public get sshHostKeyValidation() {
    return this.getStringAttribute('ssh_host_key_validation');
  }
  public set sshHostKeyValidation(value: string) {
    this._sshHostKeyValidation = value;
  }
  public resetSshHostKeyValidation() {
    this._sshHostKeyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyValidationInput() {
    return this._sshHostKeyValidation;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // translate_host - computed: true, optional: true, required: false
  private _translateHost?: string; 
  public get translateHost() {
    return this.getStringAttribute('translate_host');
  }
  public set translateHost(value: string) {
    this._translateHost = value;
  }
  public resetTranslateHost() {
    this._translateHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateHostInput() {
    return this._translateHost;
  }

  // tunnel_encryption - computed: true, optional: true, required: false
  private _tunnelEncryption?: string; 
  public get tunnelEncryption() {
    return this.getStringAttribute('tunnel_encryption');
  }
  public set tunnelEncryption(value: string) {
    this._tunnelEncryption = value;
  }
  public resetTunnelEncryption() {
    this._tunnelEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncryptionInput() {
    return this._tunnelEncryption;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: string; 
  public get verifyCert() {
    return this.getStringAttribute('verify_cert');
  }
  public set verifyCert(value: string) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_proxy: cdktf.stringToTerraform(this._accessProxy),
      addr_type: cdktf.stringToTerraform(this._addrType),
      address: cdktf.stringToTerraform(this._address),
      adom: cdktf.stringToTerraform(this._adom),
      api_gateway: cdktf.stringToTerraform(this._apiGateway),
      domain: cdktf.stringToTerraform(this._domain),
      external_auth: cdktf.stringToTerraform(this._externalAuth),
      fosid: cdktf.numberToTerraform(this._fosid),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_proto: cdktf.stringToTerraform(this._healthCheckProto),
      holddown_interval: cdktf.stringToTerraform(this._holddownInterval),
      http_host: cdktf.stringToTerraform(this._httpHost),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      mappedport: cdktf.stringToTerraform(this._mappedport),
      port: cdktf.numberToTerraform(this._port),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssh_client_cert: cdktf.stringToTerraform(this._sshClientCert),
      ssh_host_key: cdktf.stringToTerraform(this._sshHostKey),
      ssh_host_key_validation: cdktf.stringToTerraform(this._sshHostKeyValidation),
      status: cdktf.stringToTerraform(this._status),
      translate_host: cdktf.stringToTerraform(this._translateHost),
      tunnel_encryption: cdktf.stringToTerraform(this._tunnelEncryption),
      type: cdktf.stringToTerraform(this._type),
      verify_cert: cdktf.stringToTerraform(this._verifyCert),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_proxy: {
        value: cdktf.stringToHclTerraform(this._accessProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway: {
        value: cdktf.stringToHclTerraform(this._apiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_auth: {
        value: cdktf.stringToHclTerraform(this._externalAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_proto: {
        value: cdktf.stringToHclTerraform(this._healthCheckProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holddown_interval: {
        value: cdktf.stringToHclTerraform(this._holddownInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_host: {
        value: cdktf.stringToHclTerraform(this._httpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedport: {
        value: cdktf.stringToHclTerraform(this._mappedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_client_cert: {
        value: cdktf.stringToHclTerraform(this._sshClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_host_key: {
        value: cdktf.stringToHclTerraform(this._sshHostKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_host_key_validation: {
        value: cdktf.stringToHclTerraform(this._sshHostKeyValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translate_host: {
        value: cdktf.stringToHclTerraform(this._translateHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_encryption: {
        value: cdktf.stringToHclTerraform(this._tunnelEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_cert: {
        value: cdktf.stringToHclTerraform(this._verifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
