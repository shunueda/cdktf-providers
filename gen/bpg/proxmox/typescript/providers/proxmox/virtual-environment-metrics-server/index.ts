// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentMetricsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set this to `true` to disable this metric server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#disable VirtualEnvironmentMetricsServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Root graphite path (ex: `proxmox.mycluster.mykey`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#graphite_path VirtualEnvironmentMetricsServer#graphite_path}
  */
  readonly graphitePath?: string;
  /**
  * Protocol to send graphite data. Choice is between `udp` | `tcp`. If not set, PVE default is `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#graphite_proto VirtualEnvironmentMetricsServer#graphite_proto}
  */
  readonly graphiteProto?: string;
  /**
  * An API path prefix inserted between `<host>:<port>/` and `/api2/`. Can be useful if the InfluxDB service runs behind a reverse proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_api_path_prefix VirtualEnvironmentMetricsServer#influx_api_path_prefix}
  */
  readonly influxApiPathPrefix?: string;
  /**
  * The InfluxDB bucket/db. Only necessary when using the http v2 api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_bucket VirtualEnvironmentMetricsServer#influx_bucket}
  */
  readonly influxBucket?: string;
  /**
  * Protocol for InfluxDB. Choice is between `udp` | `http` | `https`. If not set, PVE default is `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_db_proto VirtualEnvironmentMetricsServer#influx_db_proto}
  */
  readonly influxDbProto?: string;
  /**
  * InfluxDB max-body-size in bytes. Requests are batched up to this size. If not set, PVE default is `25000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_max_body_size VirtualEnvironmentMetricsServer#influx_max_body_size}
  */
  readonly influxMaxBodySize?: number;
  /**
  * The InfluxDB organization. Only necessary when using the http v2 api. Has no meaning when using v2 compatibility api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_organization VirtualEnvironmentMetricsServer#influx_organization}
  */
  readonly influxOrganization?: string;
  /**
  * The InfluxDB access token. Only necessary when using the http v2 api. If the v2 compatibility api is used, use `user:password` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_token VirtualEnvironmentMetricsServer#influx_token}
  */
  readonly influxToken?: string;
  /**
  * Set to `false` to disable certificate verification for https endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#influx_verify VirtualEnvironmentMetricsServer#influx_verify}
  */
  readonly influxVerify?: boolean | cdktf.IResolvable;
  /**
  * MTU (maximum transmission unit) for metrics transmission over UDP. If not set, PVE default is `1500` (allowed `512` - `65536`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#mtu VirtualEnvironmentMetricsServer#mtu}
  */
  readonly mtu?: number;
  /**
  * Unique name that will be ID of this metric server in PVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#name VirtualEnvironmentMetricsServer#name}
  */
  readonly name: string;
  /**
  * OpenTelemetry endpoint path (e.g., `/v1/metrics`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#opentelemetry_path VirtualEnvironmentMetricsServer#opentelemetry_path}
  */
  readonly opentelemetryPath?: string;
  /**
  * Protocol for OpenTelemetry. Choice is between `http` | `https`. If not set, PVE default is `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#opentelemetry_proto VirtualEnvironmentMetricsServer#opentelemetry_proto}
  */
  readonly opentelemetryProto?: string;
  /**
  * Server network port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#port VirtualEnvironmentMetricsServer#port}
  */
  readonly port: number;
  /**
  * Server dns name or IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#server VirtualEnvironmentMetricsServer#server}
  */
  readonly server: string;
  /**
  * TCP socket timeout in seconds. If not set, PVE default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#timeout VirtualEnvironmentMetricsServer#timeout}
  */
  readonly timeout?: number;
  /**
  * Plugin type. Choice is between `graphite` | `influxdb` | `opentelemetry`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#type VirtualEnvironmentMetricsServer#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server proxmox_virtual_environment_metrics_server}
*/
export class VirtualEnvironmentMetricsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_metrics_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentMetricsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentMetricsServer to import
  * @param importFromId The id of the existing VirtualEnvironmentMetricsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentMetricsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_metrics_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_metrics_server proxmox_virtual_environment_metrics_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentMetricsServerConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentMetricsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_metrics_server',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._graphitePath = config.graphitePath;
    this._graphiteProto = config.graphiteProto;
    this._influxApiPathPrefix = config.influxApiPathPrefix;
    this._influxBucket = config.influxBucket;
    this._influxDbProto = config.influxDbProto;
    this._influxMaxBodySize = config.influxMaxBodySize;
    this._influxOrganization = config.influxOrganization;
    this._influxToken = config.influxToken;
    this._influxVerify = config.influxVerify;
    this._mtu = config.mtu;
    this._name = config.name;
    this._opentelemetryPath = config.opentelemetryPath;
    this._opentelemetryProto = config.opentelemetryProto;
    this._port = config.port;
    this._server = config.server;
    this._timeout = config.timeout;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // graphite_path - computed: false, optional: true, required: false
  private _graphitePath?: string; 
  public get graphitePath() {
    return this.getStringAttribute('graphite_path');
  }
  public set graphitePath(value: string) {
    this._graphitePath = value;
  }
  public resetGraphitePath() {
    this._graphitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphitePathInput() {
    return this._graphitePath;
  }

  // graphite_proto - computed: false, optional: true, required: false
  private _graphiteProto?: string; 
  public get graphiteProto() {
    return this.getStringAttribute('graphite_proto');
  }
  public set graphiteProto(value: string) {
    this._graphiteProto = value;
  }
  public resetGraphiteProto() {
    this._graphiteProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteProtoInput() {
    return this._graphiteProto;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // influx_api_path_prefix - computed: false, optional: true, required: false
  private _influxApiPathPrefix?: string; 
  public get influxApiPathPrefix() {
    return this.getStringAttribute('influx_api_path_prefix');
  }
  public set influxApiPathPrefix(value: string) {
    this._influxApiPathPrefix = value;
  }
  public resetInfluxApiPathPrefix() {
    this._influxApiPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxApiPathPrefixInput() {
    return this._influxApiPathPrefix;
  }

  // influx_bucket - computed: false, optional: true, required: false
  private _influxBucket?: string; 
  public get influxBucket() {
    return this.getStringAttribute('influx_bucket');
  }
  public set influxBucket(value: string) {
    this._influxBucket = value;
  }
  public resetInfluxBucket() {
    this._influxBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxBucketInput() {
    return this._influxBucket;
  }

  // influx_db_proto - computed: false, optional: true, required: false
  private _influxDbProto?: string; 
  public get influxDbProto() {
    return this.getStringAttribute('influx_db_proto');
  }
  public set influxDbProto(value: string) {
    this._influxDbProto = value;
  }
  public resetInfluxDbProto() {
    this._influxDbProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxDbProtoInput() {
    return this._influxDbProto;
  }

  // influx_max_body_size - computed: false, optional: true, required: false
  private _influxMaxBodySize?: number; 
  public get influxMaxBodySize() {
    return this.getNumberAttribute('influx_max_body_size');
  }
  public set influxMaxBodySize(value: number) {
    this._influxMaxBodySize = value;
  }
  public resetInfluxMaxBodySize() {
    this._influxMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxMaxBodySizeInput() {
    return this._influxMaxBodySize;
  }

  // influx_organization - computed: false, optional: true, required: false
  private _influxOrganization?: string; 
  public get influxOrganization() {
    return this.getStringAttribute('influx_organization');
  }
  public set influxOrganization(value: string) {
    this._influxOrganization = value;
  }
  public resetInfluxOrganization() {
    this._influxOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxOrganizationInput() {
    return this._influxOrganization;
  }

  // influx_token - computed: false, optional: true, required: false
  private _influxToken?: string; 
  public get influxToken() {
    return this.getStringAttribute('influx_token');
  }
  public set influxToken(value: string) {
    this._influxToken = value;
  }
  public resetInfluxToken() {
    this._influxToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxTokenInput() {
    return this._influxToken;
  }

  // influx_verify - computed: false, optional: true, required: false
  private _influxVerify?: boolean | cdktf.IResolvable; 
  public get influxVerify() {
    return this.getBooleanAttribute('influx_verify');
  }
  public set influxVerify(value: boolean | cdktf.IResolvable) {
    this._influxVerify = value;
  }
  public resetInfluxVerify() {
    this._influxVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxVerifyInput() {
    return this._influxVerify;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // opentelemetry_path - computed: false, optional: true, required: false
  private _opentelemetryPath?: string; 
  public get opentelemetryPath() {
    return this.getStringAttribute('opentelemetry_path');
  }
  public set opentelemetryPath(value: string) {
    this._opentelemetryPath = value;
  }
  public resetOpentelemetryPath() {
    this._opentelemetryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetryPathInput() {
    return this._opentelemetryPath;
  }

  // opentelemetry_proto - computed: false, optional: true, required: false
  private _opentelemetryProto?: string; 
  public get opentelemetryProto() {
    return this.getStringAttribute('opentelemetry_proto');
  }
  public set opentelemetryProto(value: string) {
    this._opentelemetryProto = value;
  }
  public resetOpentelemetryProto() {
    this._opentelemetryProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetryProtoInput() {
    return this._opentelemetryProto;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.booleanToTerraform(this._disable),
      graphite_path: cdktf.stringToTerraform(this._graphitePath),
      graphite_proto: cdktf.stringToTerraform(this._graphiteProto),
      influx_api_path_prefix: cdktf.stringToTerraform(this._influxApiPathPrefix),
      influx_bucket: cdktf.stringToTerraform(this._influxBucket),
      influx_db_proto: cdktf.stringToTerraform(this._influxDbProto),
      influx_max_body_size: cdktf.numberToTerraform(this._influxMaxBodySize),
      influx_organization: cdktf.stringToTerraform(this._influxOrganization),
      influx_token: cdktf.stringToTerraform(this._influxToken),
      influx_verify: cdktf.booleanToTerraform(this._influxVerify),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      opentelemetry_path: cdktf.stringToTerraform(this._opentelemetryPath),
      opentelemetry_proto: cdktf.stringToTerraform(this._opentelemetryProto),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graphite_path: {
        value: cdktf.stringToHclTerraform(this._graphitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graphite_proto: {
        value: cdktf.stringToHclTerraform(this._graphiteProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_api_path_prefix: {
        value: cdktf.stringToHclTerraform(this._influxApiPathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_bucket: {
        value: cdktf.stringToHclTerraform(this._influxBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_db_proto: {
        value: cdktf.stringToHclTerraform(this._influxDbProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_max_body_size: {
        value: cdktf.numberToHclTerraform(this._influxMaxBodySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      influx_organization: {
        value: cdktf.stringToHclTerraform(this._influxOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_token: {
        value: cdktf.stringToHclTerraform(this._influxToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      influx_verify: {
        value: cdktf.booleanToHclTerraform(this._influxVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      opentelemetry_path: {
        value: cdktf.stringToHclTerraform(this._opentelemetryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opentelemetry_proto: {
        value: cdktf.stringToHclTerraform(this._opentelemetryProto),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
