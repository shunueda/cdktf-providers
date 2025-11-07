// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteSyslogConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#ca_certificate_file RemoteSyslog#ca_certificate_file}
  */
  readonly caCertificateFile?: string;
  /**
  * List of excluded gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#excluded_gateways RemoteSyslog#excluded_gateways}
  */
  readonly excludedGateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#id RemoteSyslog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A total of 10 profiles from index 0 to 9 are supported for remote syslog, while index 9 is reserved for CoPilot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#index RemoteSyslog#index}
  */
  readonly index?: number;
  /**
  * Profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#name RemoteSyslog#name}
  */
  readonly name?: string;
  /**
  * Listening port of the remote syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#port RemoteSyslog#port}
  */
  readonly port: number;
  /**
  * Private key of the controller that pairs with the public certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#private_key_file RemoteSyslog#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * TCP or UDP (TCP by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#protocol RemoteSyslog#protocol}
  */
  readonly protocol?: string;
  /**
  * Public certificate of the controller signed by the same CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#public_certificate_file RemoteSyslog#public_certificate_file}
  */
  readonly publicCertificateFile?: string;
  /**
  * FQDN or IP address of the remote syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#server RemoteSyslog#server}
  */
  readonly server: string;
  /**
  * Useful when forwarding to 3rd party servers like Datadog or Sumo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#template RemoteSyslog#template}
  */
  readonly template?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog aviatrix_remote_syslog}
*/
export class RemoteSyslog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_remote_syslog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteSyslog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteSyslog to import
  * @param importFromId The id of the existing RemoteSyslog that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteSyslog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_remote_syslog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/remote_syslog aviatrix_remote_syslog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteSyslogConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteSyslogConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_remote_syslog',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertificateFile = config.caCertificateFile;
    this._excludedGateways = config.excludedGateways;
    this._id = config.id;
    this._index = config.index;
    this._name = config.name;
    this._port = config.port;
    this._privateKeyFile = config.privateKeyFile;
    this._protocol = config.protocol;
    this._publicCertificateFile = config.publicCertificateFile;
    this._server = config.server;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate_file - computed: false, optional: true, required: false
  private _caCertificateFile?: string; 
  public get caCertificateFile() {
    return this.getStringAttribute('ca_certificate_file');
  }
  public set caCertificateFile(value: string) {
    this._caCertificateFile = value;
  }
  public resetCaCertificateFile() {
    this._caCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateFileInput() {
    return this._caCertificateFile;
  }

  // excluded_gateways - computed: false, optional: true, required: false
  private _excludedGateways?: string[]; 
  public get excludedGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_gateways'));
  }
  public set excludedGateways(value: string[]) {
    this._excludedGateways = value;
  }
  public resetExcludedGateways() {
    this._excludedGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGatewaysInput() {
    return this._excludedGateways;
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

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notls - computed: true, optional: false, required: false
  public get notls() {
    return this.getBooleanAttribute('notls');
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

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // protocol - computed: false, optional: true, required: false
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

  // public_certificate_file - computed: false, optional: true, required: false
  private _publicCertificateFile?: string; 
  public get publicCertificateFile() {
    return this.getStringAttribute('public_certificate_file');
  }
  public set publicCertificateFile(value: string) {
    this._publicCertificateFile = value;
  }
  public resetPublicCertificateFile() {
    this._publicCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateFileInput() {
    return this._publicCertificateFile;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate_file: cdktf.stringToTerraform(this._caCertificateFile),
      excluded_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedGateways),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      private_key_file: cdktf.stringToTerraform(this._privateKeyFile),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_certificate_file: cdktf.stringToTerraform(this._publicCertificateFile),
      server: cdktf.stringToTerraform(this._server),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate_file: {
        value: cdktf.stringToHclTerraform(this._caCertificateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      private_key_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate_file: {
        value: cdktf.stringToHclTerraform(this._publicCertificateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
