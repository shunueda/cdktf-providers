// https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of hosts to configure in parallel. If omitted, the default value is `0` (unlimited).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#concurrency Cluster#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Embedded k0s cluster configuration. When left out, the output of `k0s config create` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#config Cluster#config}
  */
  readonly config?: string;
  /**
  * Enable k0s dynamic config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#dynamic_config Cluster#dynamic_config}
  */
  readonly dynamicConfig?: boolean | cdktf.IResolvable;
  /**
  * Hosts configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#hosts Cluster#hosts}
  */
  readonly hosts: ClusterHosts[] | cdktf.IResolvable;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Do not drain worker nodes when upgrading. If omitted, the default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#no_drain Cluster#no_drain}
  */
  readonly noDrain?: boolean | cdktf.IResolvable;
  /**
  * Do not wait for worker nodes to join. If omitted, the default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#no_wait Cluster#no_wait}
  */
  readonly noWait?: boolean | cdktf.IResolvable;
  /**
  * Desired k0s version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#version Cluster#version}
  */
  readonly version: string;
}
export interface ClusterHostsSsh {
  /**
  * IP address of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#address Cluster#address}
  */
  readonly address: string;
  /**
  * Path to an SSH private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#key_path Cluster#key_path}
  */
  readonly keyPath?: string;
  /**
  * TCP port of the SSH service on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#port Cluster#port}
  */
  readonly port: number;
  /**
  * Username to log in as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#user Cluster#user}
  */
  readonly user?: string;
}

export function clusterHostsSshToTerraform(struct?: ClusterHostsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    port: cdktf.numberToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterHostsSshToHclTerraform(struct?: ClusterHostsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHostsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterHostsSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHostsSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._keyPath = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._keyPath = value.keyPath;
      this._port = value.port;
      this._user = value.user;
    }
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

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ClusterHosts {
  /**
  * List of key-value pairs to set to the target host's environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#environment Cluster#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Override host's hostname. When not set, the hostname reported by the operating system is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#hostname Cluster#hostname}
  */
  readonly hostname?: string;
  /**
  * Extra flags passed to the `k0s install` command on the target host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#install_flags Cluster#install_flags}
  */
  readonly installFlags?: string[];
  /**
  * When `true` and used in conjuction with the `controller+worker` role, the default taints are disabled making regular workloads schedulable on the node. By default, k0s sets a `node-role.kubernetes.io/master:NoSchedule` taint on `controller+worker` nodes and only workloads with toleration for it will be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#no_taints Cluster#no_taints}
  */
  readonly noTaints?: boolean | cdktf.IResolvable;
  /**
  * Override OS distribution auto-detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#os Cluster#os}
  */
  readonly os?: string;
  /**
  * Override private IP address selected by host fact gathering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#private_address Cluster#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Override private network interface selected by host fact gathering. Useful in case fact gathering picks the wrong private network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#private_interface Cluster#private_interface}
  */
  readonly privateInterface?: string;
  /**
  * Role of the host. One of `controller`, `controller+worker`, `single`, `worker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#role Cluster#role}
  */
  readonly role: string;
  /**
  * SSH connection options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#ssh Cluster#ssh}
  */
  readonly ssh: ClusterHostsSsh;
}

export function clusterHostsToTerraform(struct?: ClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    install_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.installFlags),
    no_taints: cdktf.booleanToTerraform(struct!.noTaints),
    os: cdktf.stringToTerraform(struct!.os),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    private_interface: cdktf.stringToTerraform(struct!.privateInterface),
    role: cdktf.stringToTerraform(struct!.role),
    ssh: clusterHostsSshToTerraform(struct!.ssh),
  }
}


export function clusterHostsToHclTerraform(struct?: ClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.installFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    no_taints: {
      value: cdktf.booleanToHclTerraform(struct!.noTaints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_interface: {
      value: cdktf.stringToHclTerraform(struct!.privateInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: clusterHostsSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterHostsSsh",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._installFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.installFlags = this._installFlags;
    }
    if (this._noTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTaints = this._noTaints;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._privateInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateInterface = this._privateInterface;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._hostname = undefined;
      this._installFlags = undefined;
      this._noTaints = undefined;
      this._os = undefined;
      this._privateAddress = undefined;
      this._privateInterface = undefined;
      this._role = undefined;
      this._ssh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._hostname = value.hostname;
      this._installFlags = value.installFlags;
      this._noTaints = value.noTaints;
      this._os = value.os;
      this._privateAddress = value.privateAddress;
      this._privateInterface = value.privateInterface;
      this._role = value.role;
      this._ssh.internalValue = value.ssh;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // install_flags - computed: false, optional: true, required: false
  private _installFlags?: string[]; 
  public get installFlags() {
    return this.getListAttribute('install_flags');
  }
  public set installFlags(value: string[]) {
    this._installFlags = value;
  }
  public resetInstallFlags() {
    this._installFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installFlagsInput() {
    return this._installFlags;
  }

  // no_taints - computed: false, optional: true, required: false
  private _noTaints?: boolean | cdktf.IResolvable; 
  public get noTaints() {
    return this.getBooleanAttribute('no_taints');
  }
  public set noTaints(value: boolean | cdktf.IResolvable) {
    this._noTaints = value;
  }
  public resetNoTaints() {
    this._noTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTaintsInput() {
    return this._noTaints;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // private_address - computed: false, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // private_interface - computed: false, optional: true, required: false
  private _privateInterface?: string; 
  public get privateInterface() {
    return this.getStringAttribute('private_interface');
  }
  public set privateInterface(value: string) {
    this._privateInterface = value;
  }
  public resetPrivateInterface() {
    this._privateInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInterfaceInput() {
    return this._privateInterface;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssh - computed: false, optional: false, required: true
  private _ssh = new ClusterHostsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: ClusterHostsSsh) {
    this._ssh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

export class ClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ClusterHostsOutputReference {
    return new ClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster k0s_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k0s_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k0s_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alessiodionisi/k0s/0.2.2/docs/resources/cluster k0s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'k0s_cluster',
      terraformGeneratorMetadata: {
        providerName: 'k0s',
        providerVersion: '0.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrency = config.concurrency;
    this._config = config.config;
    this._dynamicConfig = config.dynamicConfig;
    this._hosts.internalValue = config.hosts;
    this._name = config.name;
    this._noDrain = config.noDrain;
    this._noWait = config.noWait;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // dynamic_config - computed: false, optional: true, required: false
  private _dynamicConfig?: boolean | cdktf.IResolvable; 
  public get dynamicConfig() {
    return this.getBooleanAttribute('dynamic_config');
  }
  public set dynamicConfig(value: boolean | cdktf.IResolvable) {
    this._dynamicConfig = value;
  }
  public resetDynamicConfig() {
    this._dynamicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfigInput() {
    return this._dynamicConfig;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new ClusterHostsList(this, "hosts", true);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
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

  // no_drain - computed: false, optional: true, required: false
  private _noDrain?: boolean | cdktf.IResolvable; 
  public get noDrain() {
    return this.getBooleanAttribute('no_drain');
  }
  public set noDrain(value: boolean | cdktf.IResolvable) {
    this._noDrain = value;
  }
  public resetNoDrain() {
    this._noDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDrainInput() {
    return this._noDrain;
  }

  // no_wait - computed: false, optional: true, required: false
  private _noWait?: boolean | cdktf.IResolvable; 
  public get noWait() {
    return this.getBooleanAttribute('no_wait');
  }
  public set noWait(value: boolean | cdktf.IResolvable) {
    this._noWait = value;
  }
  public resetNoWait() {
    this._noWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWaitInput() {
    return this._noWait;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrency: cdktf.numberToTerraform(this._concurrency),
      config: cdktf.stringToTerraform(this._config),
      dynamic_config: cdktf.booleanToTerraform(this._dynamicConfig),
      hosts: cdktf.listMapper(clusterHostsToTerraform, false)(this._hosts.internalValue),
      name: cdktf.stringToTerraform(this._name),
      no_drain: cdktf.booleanToTerraform(this._noDrain),
      no_wait: cdktf.booleanToTerraform(this._noWait),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_config: {
        value: cdktf.booleanToHclTerraform(this._dynamicConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(clusterHostsToHclTerraform, false)(this._hosts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterHostsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_drain: {
        value: cdktf.booleanToHclTerraform(this._noDrain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_wait: {
        value: cdktf.booleanToHclTerraform(this._noWait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
