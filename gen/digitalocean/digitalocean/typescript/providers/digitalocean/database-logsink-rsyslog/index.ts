// https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseLogsinkRsyslogConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA certificate for TLS verification (PEM format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#ca_cert DatabaseLogsinkRsyslog#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate for mTLS (PEM format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#client_cert DatabaseLogsinkRsyslog#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client private key for mTLS (PEM format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#client_key DatabaseLogsinkRsyslog#client_key}
  */
  readonly clientKey?: string;
  /**
  * UUID of the source database cluster that will forward logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#cluster_id DatabaseLogsinkRsyslog#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Log format: rfc5424, rfc3164, or custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#format DatabaseLogsinkRsyslog#format}
  */
  readonly format?: string;
  /**
  * Custom logline template (required when format is 'custom')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#logline DatabaseLogsinkRsyslog#logline}
  */
  readonly logline?: string;
  /**
  * Display name for the logsink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#name DatabaseLogsinkRsyslog#name}
  */
  readonly name: string;
  /**
  * Port number for the rsyslog server (1-65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#port DatabaseLogsinkRsyslog#port}
  */
  readonly port: number;
  /**
  * Hostname or IP address of the rsyslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#server DatabaseLogsinkRsyslog#server}
  */
  readonly server: string;
  /**
  * Structured data for rsyslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#structured_data DatabaseLogsinkRsyslog#structured_data}
  */
  readonly structuredData?: string;
  /**
  * Enable TLS encryption for rsyslog connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#tls DatabaseLogsinkRsyslog#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog digitalocean_database_logsink_rsyslog}
*/
export class DatabaseLogsinkRsyslog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_logsink_rsyslog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseLogsinkRsyslog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseLogsinkRsyslog to import
  * @param importFromId The id of the existing DatabaseLogsinkRsyslog that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseLogsinkRsyslog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_logsink_rsyslog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_rsyslog digitalocean_database_logsink_rsyslog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseLogsinkRsyslogConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseLogsinkRsyslogConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_logsink_rsyslog',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.72.0',
        providerVersionConstraint: '2.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._clusterId = config.clusterId;
    this._format = config.format;
    this._logline = config.logline;
    this._name = config.name;
    this._port = config.port;
    this._server = config.server;
    this._structuredData = config.structuredData;
    this._tls = config.tls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logline - computed: false, optional: true, required: false
  private _logline?: string; 
  public get logline() {
    return this.getStringAttribute('logline');
  }
  public set logline(value: string) {
    this._logline = value;
  }
  public resetLogline() {
    this._logline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglineInput() {
    return this._logline;
  }

  // logsink_id - computed: true, optional: false, required: false
  public get logsinkId() {
    return this.getStringAttribute('logsink_id');
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

  // structured_data - computed: false, optional: true, required: false
  private _structuredData?: string; 
  public get structuredData() {
    return this.getStringAttribute('structured_data');
  }
  public set structuredData(value: string) {
    this._structuredData = value;
  }
  public resetStructuredData() {
    this._structuredData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDataInput() {
    return this._structuredData;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      format: cdktf.stringToTerraform(this._format),
      logline: cdktf.stringToTerraform(this._logline),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      structured_data: cdktf.stringToTerraform(this._structuredData),
      tls: cdktf.booleanToTerraform(this._tls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logline: {
        value: cdktf.stringToHclTerraform(this._logline),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structured_data: {
        value: cdktf.stringToHclTerraform(this._structuredData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.booleanToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
