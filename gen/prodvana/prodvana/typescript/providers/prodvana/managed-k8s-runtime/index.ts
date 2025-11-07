// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedK8SRuntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment variables to pass to the agent. Useful for cases like passing proxy configuration to the agent if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#agent_env ManagedK8SRuntime#agent_env}
  */
  readonly agentEnv?: { [key: string]: string };
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#client_certificate ManagedK8SRuntime#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#client_key ManagedK8SRuntime#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#cluster_ca_certificate ManagedK8SRuntime#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Context to use from the kube config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#config_context ManagedK8SRuntime#config_context}
  */
  readonly configContext?: string;
  /**
  * Authentication info context of the kube config (name of the kubeconfig user, `--user` flag in `kubectl`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#config_context_auth_info ManagedK8SRuntime#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Cluster context of the kube config (name of the kubeconfig cluster, `--cluster` flag in `kubectl`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#config_context_cluster ManagedK8SRuntime#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#config_path ManagedK8SRuntime#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#config_paths ManagedK8SRuntime#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * Exec configuration for authentication to the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#exec ManagedK8SRuntime#exec}
  */
  readonly exec?: ManagedK8SRuntimeExec;
  /**
  * The address of the Kubernetes cluster (scheme://hostname:port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#host ManagedK8SRuntime#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#insecure ManagedK8SRuntime#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * List of labels to apply to the runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#labels ManagedK8SRuntime#labels}
  */
  readonly labels?: ManagedK8SRuntimeLabels[] | cdktf.IResolvable;
  /**
  * Runtime name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#name ManagedK8SRuntime#name}
  */
  readonly name: string;
  /**
  * Password for basic authentication to the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#password ManagedK8SRuntime#password}
  */
  readonly password?: string;
  /**
  * Proxy URL to use when accessing the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#proxy_url ManagedK8SRuntime#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * How long to wait for the runtime linking to complete. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#timeout ManagedK8SRuntime#timeout}
  */
  readonly timeout?: string;
  /**
  * Server name passed to the server for SNI and is used in the client to check server certificates against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#tls_server_name ManagedK8SRuntime#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to authenticate an service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#token ManagedK8SRuntime#token}
  */
  readonly token?: string;
  /**
  * Username for basic authentication to the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#username ManagedK8SRuntime#username}
  */
  readonly username?: string;
}
export interface ManagedK8SRuntimeExec {
  /**
  * API version of the exec credential plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#api_version ManagedK8SRuntime#api_version}
  */
  readonly apiVersion: string;
  /**
  * Arguments to pass when executing the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#args ManagedK8SRuntime#args}
  */
  readonly args?: string[];
  /**
  * Command to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#command ManagedK8SRuntime#command}
  */
  readonly command: string;
  /**
  * Environment variables to set when executing the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#env ManagedK8SRuntime#env}
  */
  readonly env?: { [key: string]: string };
}

export function managedK8SRuntimeExecToTerraform(struct?: ManagedK8SRuntimeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function managedK8SRuntimeExecToHclTerraform(struct?: ManagedK8SRuntimeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedK8SRuntimeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedK8SRuntimeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedK8SRuntimeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }
}
export interface ManagedK8SRuntimeLabels {
  /**
  * Label name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#label ManagedK8SRuntime#label}
  */
  readonly label: string;
  /**
  * Label value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#value ManagedK8SRuntime#value}
  */
  readonly value: string;
}

export function managedK8SRuntimeLabelsToTerraform(struct?: ManagedK8SRuntimeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managedK8SRuntimeLabelsToHclTerraform(struct?: ManagedK8SRuntimeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedK8SRuntimeLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedK8SRuntimeLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedK8SRuntimeLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: true, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagedK8SRuntimeLabelsList extends cdktf.ComplexList {
  public internalValue? : ManagedK8SRuntimeLabels[] | cdktf.IResolvable

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
  public get(index: number): ManagedK8SRuntimeLabelsOutputReference {
    return new ManagedK8SRuntimeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime prodvana_managed_k8s_runtime}
*/
export class ManagedK8SRuntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_managed_k8s_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedK8SRuntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedK8SRuntime to import
  * @param importFromId The id of the existing ManagedK8SRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedK8SRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_managed_k8s_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/managed_k8s_runtime prodvana_managed_k8s_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedK8SRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedK8SRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_managed_k8s_runtime',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentEnv = config.agentEnv;
    this._clientCertificate = config.clientCertificate;
    this._clientKey = config.clientKey;
    this._clusterCaCertificate = config.clusterCaCertificate;
    this._configContext = config.configContext;
    this._configContextAuthInfo = config.configContextAuthInfo;
    this._configContextCluster = config.configContextCluster;
    this._configPath = config.configPath;
    this._configPaths = config.configPaths;
    this._exec.internalValue = config.exec;
    this._host = config.host;
    this._insecure = config.insecure;
    this._labels.internalValue = config.labels;
    this._name = config.name;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._timeout = config.timeout;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_env - computed: true, optional: true, required: false
  private _agentEnv?: { [key: string]: string }; 
  public get agentEnv() {
    return this.getStringMapAttribute('agent_env');
  }
  public set agentEnv(value: { [key: string]: string }) {
    this._agentEnv = value;
  }
  public resetAgentEnv() {
    this._agentEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEnvInput() {
    return this._agentEnv;
  }

  // agent_externally_managed - computed: true, optional: false, required: false
  public get agentExternallyManaged() {
    return this.getBooleanAttribute('agent_externally_managed');
  }

  // agent_namespace - computed: true, optional: false, required: false
  public get agentNamespace() {
    return this.getStringAttribute('agent_namespace');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: true, optional: true, required: false
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

  // cluster_ca_certificate - computed: true, optional: true, required: false
  private _clusterCaCertificate?: string; 
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }
  public set clusterCaCertificate(value: string) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate;
  }

  // config_context - computed: true, optional: true, required: false
  private _configContext?: string; 
  public get configContext() {
    return this.getStringAttribute('config_context');
  }
  public set configContext(value: string) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext;
  }

  // config_context_auth_info - computed: true, optional: true, required: false
  private _configContextAuthInfo?: string; 
  public get configContextAuthInfo() {
    return this.getStringAttribute('config_context_auth_info');
  }
  public set configContextAuthInfo(value: string) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo;
  }

  // config_context_cluster - computed: true, optional: true, required: false
  private _configContextCluster?: string; 
  public get configContextCluster() {
    return this.getStringAttribute('config_context_cluster');
  }
  public set configContextCluster(value: string) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster;
  }

  // config_path - computed: true, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // config_paths - computed: true, optional: true, required: false
  private _configPaths?: string[]; 
  public get configPaths() {
    return this.getListAttribute('config_paths');
  }
  public set configPaths(value: string[]) {
    this._configPaths = value;
  }
  public resetConfigPaths() {
    this._configPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new ManagedK8SRuntimeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: ManagedK8SRuntimeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure - computed: true, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // labels - computed: true, optional: true, required: false
  private _labels = new ManagedK8SRuntimeLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ManagedK8SRuntimeLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_server_name - computed: true, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: true, optional: true, required: false
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
      agent_env: cdktf.hashMapper(cdktf.stringToTerraform)(this._agentEnv),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_certificate: cdktf.stringToTerraform(this._clusterCaCertificate),
      config_context: cdktf.stringToTerraform(this._configContext),
      config_context_auth_info: cdktf.stringToTerraform(this._configContextAuthInfo),
      config_context_cluster: cdktf.stringToTerraform(this._configContextCluster),
      config_path: cdktf.stringToTerraform(this._configPath),
      config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPaths),
      exec: managedK8SRuntimeExecToTerraform(this._exec.internalValue),
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      labels: cdktf.listMapper(managedK8SRuntimeLabelsToTerraform, false)(this._labels.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      timeout: cdktf.stringToTerraform(this._timeout),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._agentEnv),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
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
      cluster_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._clusterCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context: {
        value: cdktf.stringToHclTerraform(this._configContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_auth_info: {
        value: cdktf.stringToHclTerraform(this._configContextAuthInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_context_cluster: {
        value: cdktf.stringToHclTerraform(this._configContextCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exec: {
        value: managedK8SRuntimeExecToHclTerraform(this._exec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedK8SRuntimeExec",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(managedK8SRuntimeLabelsToHclTerraform, false)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedK8SRuntimeLabelsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_server_name: {
        value: cdktf.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
