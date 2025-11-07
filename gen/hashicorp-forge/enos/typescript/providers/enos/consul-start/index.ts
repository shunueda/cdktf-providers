// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulStartConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified path to the Consul binary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#bin_path ConsulStart#bin_path}
  */
  readonly binPath: string;
  /**
  * 
  * - `config.bind_addr` (String) The Consul [bind_addr](https://developer.hashicorp.com/consul/docs/agent/config/config-files#bind_addr) value
  * - `config.datacenter` (String) The Consul [datacenter](https://developer.hashicorp.com/consul/docs/agent/config/config-files#datacenter) value
  * - `config.data_dir` (String) The Consul [data_dir](https://developer.hashicorp.com/consul/docs/agent/config/config-files#data_dir) value
  * - `config.retry_join` (List of String) The Consul [retry_join](https://developer.hashicorp.com/consul/docs/agent/config/config-files#retry_join) value
  * - `config.bootstrap_expect` (Number) The Consul [bootstrap_expect](https://developer.hashicorp.com/consul/docs/agent/config/config-files#bootstrap_expect) value
  * - `config.server` (Bool) The Consul [server](https://developer.hashicorp.com/consul/docs/agent/config/config-files#server_rpc_port) value
  * - `config.log_file` (String) The Consul [log_file](https://developer.hashicorp.com/consul/docs/agent/config/config-files#log_file) value
  * - `config.log_level` (String) The Consul [log_level](https://developer.hashicorp.com/consul/docs/agent/config/config-files#log_level) value
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#config ConsulStart#config}
  */
  readonly config?: ConsulStartConfigA;
  /**
  * The directory where the consul configuration resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#config_dir ConsulStart#config_dir}
  */
  readonly configDir?: string;
  /**
  * The directory where Consul state will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#data_dir ConsulStart#data_dir}
  */
  readonly dataDir?: string;
  /**
  * A Consul Enterprise license. This is only required if you are starting a Consul Enterprise cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#license ConsulStart#license}
  */
  readonly license?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#transport ConsulStart#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The name of the systemd unit to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#unit_name ConsulStart#unit_name}
  */
  readonly unitName?: string;
  /**
  * The name of the local user for the consul service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#username ConsulStart#username}
  */
  readonly username?: string;
}
export interface ConsulStartConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#bind_addr ConsulStart#bind_addr}
  */
  readonly bindAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#bootstrap_expect ConsulStart#bootstrap_expect}
  */
  readonly bootstrapExpect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#data_dir ConsulStart#data_dir}
  */
  readonly dataDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#datacenter ConsulStart#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#log_file ConsulStart#log_file}
  */
  readonly logFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#log_level ConsulStart#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#retry_join ConsulStart#retry_join}
  */
  readonly retryJoin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#server ConsulStart#server}
  */
  readonly server?: boolean | cdktf.IResolvable;
}

export function consulStartConfigAToTerraform(struct?: ConsulStartConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_addr: cdktf.stringToTerraform(struct!.bindAddr),
    bootstrap_expect: cdktf.numberToTerraform(struct!.bootstrapExpect),
    data_dir: cdktf.stringToTerraform(struct!.dataDir),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    log_file: cdktf.stringToTerraform(struct!.logFile),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    retry_join: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryJoin),
    server: cdktf.booleanToTerraform(struct!.server),
  }
}


export function consulStartConfigAToHclTerraform(struct?: ConsulStartConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_addr: {
      value: cdktf.stringToHclTerraform(struct!.bindAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_expect: {
      value: cdktf.numberToHclTerraform(struct!.bootstrapExpect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_dir: {
      value: cdktf.stringToHclTerraform(struct!.dataDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_file: {
      value: cdktf.stringToHclTerraform(struct!.logFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_join: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryJoin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: cdktf.booleanToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsulStartConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsulStartConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddr = this._bindAddr;
    }
    if (this._bootstrapExpect !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapExpect = this._bootstrapExpect;
    }
    if (this._dataDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDir = this._dataDir;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._logFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFile = this._logFile;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._retryJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryJoin = this._retryJoin;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsulStartConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindAddr = undefined;
      this._bootstrapExpect = undefined;
      this._dataDir = undefined;
      this._datacenter = undefined;
      this._logFile = undefined;
      this._logLevel = undefined;
      this._retryJoin = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindAddr = value.bindAddr;
      this._bootstrapExpect = value.bootstrapExpect;
      this._dataDir = value.dataDir;
      this._datacenter = value.datacenter;
      this._logFile = value.logFile;
      this._logLevel = value.logLevel;
      this._retryJoin = value.retryJoin;
      this._server = value.server;
    }
  }

  // bind_addr - computed: false, optional: true, required: false
  private _bindAddr?: string; 
  public get bindAddr() {
    return this.getStringAttribute('bind_addr');
  }
  public set bindAddr(value: string) {
    this._bindAddr = value;
  }
  public resetBindAddr() {
    this._bindAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddrInput() {
    return this._bindAddr;
  }

  // bootstrap_expect - computed: false, optional: true, required: false
  private _bootstrapExpect?: number; 
  public get bootstrapExpect() {
    return this.getNumberAttribute('bootstrap_expect');
  }
  public set bootstrapExpect(value: number) {
    this._bootstrapExpect = value;
  }
  public resetBootstrapExpect() {
    this._bootstrapExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapExpectInput() {
    return this._bootstrapExpect;
  }

  // data_dir - computed: false, optional: true, required: false
  private _dataDir?: string; 
  public get dataDir() {
    return this.getStringAttribute('data_dir');
  }
  public set dataDir(value: string) {
    this._dataDir = value;
  }
  public resetDataDir() {
    this._dataDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDirInput() {
    return this._dataDir;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // retry_join - computed: false, optional: true, required: false
  private _retryJoin?: string[]; 
  public get retryJoin() {
    return this.getListAttribute('retry_join');
  }
  public set retryJoin(value: string[]) {
    this._retryJoin = value;
  }
  public resetRetryJoin() {
    this._retryJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryJoinInput() {
    return this._retryJoin;
  }

  // server - computed: false, optional: true, required: false
  private _server?: boolean | cdktf.IResolvable; 
  public get server() {
    return this.getBooleanAttribute('server');
  }
  public set server(value: boolean | cdktf.IResolvable) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start enos_consul_start}
*/
export class ConsulStart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_consul_start";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsulStart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsulStart to import
  * @param importFromId The id of the existing ConsulStart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsulStart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_consul_start", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/consul_start enos_consul_start} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulStartConfig
  */
  public constructor(scope: Construct, id: string, config: ConsulStartConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_consul_start',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binPath = config.binPath;
    this._config.internalValue = config.config;
    this._configDir = config.configDir;
    this._dataDir = config.dataDir;
    this._license = config.license;
    this._transport = config.transport;
    this._unitName = config.unitName;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_path - computed: false, optional: false, required: true
  private _binPath?: string; 
  public get binPath() {
    return this.getStringAttribute('bin_path');
  }
  public set binPath(value: string) {
    this._binPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binPathInput() {
    return this._binPath;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ConsulStartConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ConsulStartConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_dir - computed: false, optional: true, required: false
  private _configDir?: string; 
  public get configDir() {
    return this.getStringAttribute('config_dir');
  }
  public set configDir(value: string) {
    this._configDir = value;
  }
  public resetConfigDir() {
    this._configDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDirInput() {
    return this._configDir;
  }

  // data_dir - computed: false, optional: true, required: false
  private _dataDir?: string; 
  public get dataDir() {
    return this.getStringAttribute('data_dir');
  }
  public set dataDir(value: string) {
    this._dataDir = value;
  }
  public resetDataDir() {
    this._dataDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDirInput() {
    return this._dataDir;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // unit_name - computed: false, optional: true, required: false
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  public resetUnitName() {
    this._unitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_path: cdktf.stringToTerraform(this._binPath),
      config: consulStartConfigAToTerraform(this._config.internalValue),
      config_dir: cdktf.stringToTerraform(this._configDir),
      data_dir: cdktf.stringToTerraform(this._dataDir),
      license: cdktf.stringToTerraform(this._license),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      unit_name: cdktf.stringToTerraform(this._unitName),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_path: {
        value: cdktf.stringToHclTerraform(this._binPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: consulStartConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsulStartConfigA",
      },
      config_dir: {
        value: cdktf.stringToHclTerraform(this._configDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_dir: {
        value: cdktf.stringToHclTerraform(this._dataDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      unit_name: {
        value: cdktf.stringToHclTerraform(this._unitName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
