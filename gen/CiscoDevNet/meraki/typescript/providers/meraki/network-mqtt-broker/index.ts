// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkMqttBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password for the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#authentication_password NetworkMqttBroker#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Username for the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#authentication_username NetworkMqttBroker#authentication_username}
  */
  readonly authenticationUsername?: string;
  /**
  * Host name/IP address where the MQTT broker runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#host NetworkMqttBroker#host}
  */
  readonly host: string;
  /**
  * Name of the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#name NetworkMqttBroker#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#network_id NetworkMqttBroker#network_id}
  */
  readonly networkId: string;
  /**
  * Host port though which the MQTT broker can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#port NetworkMqttBroker#port}
  */
  readonly port: number;
  /**
  * Security protocol of the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#security_mode NetworkMqttBroker#security_mode}
  */
  readonly securityMode?: string;
  /**
  * CA Certificate of the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#security_tls_ca_certificate NetworkMqttBroker#security_tls_ca_certificate}
  */
  readonly securityTlsCaCertificate?: string;
  /**
  * Whether the TLS hostname verification is enabled for the MQTT broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#security_tls_verify_hostnames NetworkMqttBroker#security_tls_verify_hostnames}
  */
  readonly securityTlsVerifyHostnames?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker meraki_network_mqtt_broker}
*/
export class NetworkMqttBroker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_mqtt_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkMqttBroker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkMqttBroker to import
  * @param importFromId The id of the existing NetworkMqttBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkMqttBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_mqtt_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_mqtt_broker meraki_network_mqtt_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkMqttBrokerConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkMqttBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_mqtt_broker',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationPassword = config.authenticationPassword;
    this._authenticationUsername = config.authenticationUsername;
    this._host = config.host;
    this._name = config.name;
    this._networkId = config.networkId;
    this._port = config.port;
    this._securityMode = config.securityMode;
    this._securityTlsCaCertificate = config.securityTlsCaCertificate;
    this._securityTlsVerifyHostnames = config.securityTlsVerifyHostnames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_username - computed: false, optional: true, required: false
  private _authenticationUsername?: string; 
  public get authenticationUsername() {
    return this.getStringAttribute('authentication_username');
  }
  public set authenticationUsername(value: string) {
    this._authenticationUsername = value;
  }
  public resetAuthenticationUsername() {
    this._authenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUsernameInput() {
    return this._authenticationUsername;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // security_tls_ca_certificate - computed: false, optional: true, required: false
  private _securityTlsCaCertificate?: string; 
  public get securityTlsCaCertificate() {
    return this.getStringAttribute('security_tls_ca_certificate');
  }
  public set securityTlsCaCertificate(value: string) {
    this._securityTlsCaCertificate = value;
  }
  public resetSecurityTlsCaCertificate() {
    this._securityTlsCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTlsCaCertificateInput() {
    return this._securityTlsCaCertificate;
  }

  // security_tls_verify_hostnames - computed: false, optional: true, required: false
  private _securityTlsVerifyHostnames?: boolean | cdktf.IResolvable; 
  public get securityTlsVerifyHostnames() {
    return this.getBooleanAttribute('security_tls_verify_hostnames');
  }
  public set securityTlsVerifyHostnames(value: boolean | cdktf.IResolvable) {
    this._securityTlsVerifyHostnames = value;
  }
  public resetSecurityTlsVerifyHostnames() {
    this._securityTlsVerifyHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTlsVerifyHostnamesInput() {
    return this._securityTlsVerifyHostnames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      authentication_username: cdktf.stringToTerraform(this._authenticationUsername),
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      port: cdktf.numberToTerraform(this._port),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      security_tls_ca_certificate: cdktf.stringToTerraform(this._securityTlsCaCertificate),
      security_tls_verify_hostnames: cdktf.booleanToTerraform(this._securityTlsVerifyHostnames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_username: {
        value: cdktf.stringToHclTerraform(this._authenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_tls_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._securityTlsCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_tls_verify_hostnames: {
        value: cdktf.booleanToHclTerraform(this._securityTlsVerifyHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
