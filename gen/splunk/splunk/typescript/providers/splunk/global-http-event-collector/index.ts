// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalHttpEventCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of threads used by HTTP Input server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#dedicated_io_threads GlobalHttpEventCollector#dedicated_io_threads}
  */
  readonly dedicatedIoThreads?: number;
  /**
  * Input disabled indicator: 0 = Input Not disabled, 1 = Input disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#disabled GlobalHttpEventCollector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Enable SSL protocol for HTTP data input. 1 = SSL enabled, 0 = SSL disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#enable_ssl GlobalHttpEventCollector#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#id GlobalHttpEventCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of simultaneous HTTP connections accepted. Adjusting this value may cause server performance issues and is not generally recommended. Possible values for this setting vary by OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#max_sockets GlobalHttpEventCollector#max_sockets}
  */
  readonly maxSockets?: number;
  /**
  * Maximum number of threads that can be used by active HTTP transactions. Adjusting this value may cause server performance issues and is not generally recommended. Possible values for this setting vary by OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#max_threads GlobalHttpEventCollector#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * HTTP data input IP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#port GlobalHttpEventCollector#port}
  */
  readonly port?: number;
  /**
  * Indicates whether the event collector input writes its configuration to a deployment server repository.When this setting is set to 1 (enabled), the input writes its configuration to the directory specified as repositoryLocation in serverclass.conf.Copy the full contents of the splunk_httpinput app directory to this directory for the configuration to work.When enabled, only the tokens defined in the splunk_httpinput app in this repository are viewable and editable on the API and the Data Inputs page in Splunk Web.When disabled, the input writes its configuration to $SPLUNK_HOME/etc/apps by default.Defaults to 0 (disabled). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#use_deployment_server GlobalHttpEventCollector#use_deployment_server}
  */
  readonly useDeploymentServer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector splunk_global_http_event_collector}
*/
export class GlobalHttpEventCollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_global_http_event_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalHttpEventCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalHttpEventCollector to import
  * @param importFromId The id of the existing GlobalHttpEventCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalHttpEventCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_global_http_event_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/global_http_event_collector splunk_global_http_event_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalHttpEventCollectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlobalHttpEventCollectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splunk_global_http_event_collector',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedIoThreads = config.dedicatedIoThreads;
    this._disabled = config.disabled;
    this._enableSsl = config.enableSsl;
    this._id = config.id;
    this._maxSockets = config.maxSockets;
    this._maxThreads = config.maxThreads;
    this._port = config.port;
    this._useDeploymentServer = config.useDeploymentServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_io_threads - computed: true, optional: true, required: false
  private _dedicatedIoThreads?: number; 
  public get dedicatedIoThreads() {
    return this.getNumberAttribute('dedicated_io_threads');
  }
  public set dedicatedIoThreads(value: number) {
    this._dedicatedIoThreads = value;
  }
  public resetDedicatedIoThreads() {
    this._dedicatedIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIoThreadsInput() {
    return this._dedicatedIoThreads;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_ssl - computed: true, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
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

  // max_sockets - computed: true, optional: true, required: false
  private _maxSockets?: number; 
  public get maxSockets() {
    return this.getNumberAttribute('max_sockets');
  }
  public set maxSockets(value: number) {
    this._maxSockets = value;
  }
  public resetMaxSockets() {
    this._maxSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSocketsInput() {
    return this._maxSockets;
  }

  // max_threads - computed: true, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
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

  // use_deployment_server - computed: true, optional: true, required: false
  private _useDeploymentServer?: number; 
  public get useDeploymentServer() {
    return this.getNumberAttribute('use_deployment_server');
  }
  public set useDeploymentServer(value: number) {
    this._useDeploymentServer = value;
  }
  public resetUseDeploymentServer() {
    this._useDeploymentServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDeploymentServerInput() {
    return this._useDeploymentServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_io_threads: cdktf.numberToTerraform(this._dedicatedIoThreads),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      id: cdktf.stringToTerraform(this._id),
      max_sockets: cdktf.numberToTerraform(this._maxSockets),
      max_threads: cdktf.numberToTerraform(this._maxThreads),
      port: cdktf.numberToTerraform(this._port),
      use_deployment_server: cdktf.numberToTerraform(this._useDeploymentServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_io_threads: {
        value: cdktf.numberToHclTerraform(this._dedicatedIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl: {
        value: cdktf.booleanToHclTerraform(this._enableSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sockets: {
        value: cdktf.numberToHclTerraform(this._maxSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_threads: {
        value: cdktf.numberToHclTerraform(this._maxThreads),
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
      use_deployment_server: {
        value: cdktf.numberToHclTerraform(this._useDeploymentServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
