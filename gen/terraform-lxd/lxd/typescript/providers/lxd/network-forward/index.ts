// https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#config NetworkForward#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#description NetworkForward#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#listen_address NetworkForward#listen_address}
  */
  readonly listenAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#network NetworkForward#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#ports NetworkForward#ports}
  */
  readonly ports?: NetworkForwardPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#project NetworkForward#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#remote NetworkForward#remote}
  */
  readonly remote?: string;
}
export interface NetworkForwardPorts {
  /**
  * Port description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#description NetworkForward#description}
  */
  readonly description?: string;
  /**
  * Listen port to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#listen_port NetworkForward#listen_port}
  */
  readonly listenPort: string;
  /**
  * Port protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#protocol NetworkForward#protocol}
  */
  readonly protocol: string;
  /**
  * Target address to forward listen port to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#target_address NetworkForward#target_address}
  */
  readonly targetAddress: string;
  /**
  * Target port to forward listen port to. Defaults to the value of listen_port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#target_port NetworkForward#target_port}
  */
  readonly targetPort?: string;
}

export function networkForwardPortsToTerraform(struct?: NetworkForwardPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    listen_port: cdktf.stringToTerraform(struct!.listenPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_address: cdktf.stringToTerraform(struct!.targetAddress),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function networkForwardPortsToHclTerraform(struct?: NetworkForwardPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen_port: {
      value: cdktf.stringToHclTerraform(struct!.listenPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_address: {
      value: cdktf.stringToHclTerraform(struct!.targetAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkForwardPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkForwardPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._listenPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenPort = this._listenPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAddress = this._targetAddress;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkForwardPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._listenPort = undefined;
      this._protocol = undefined;
      this._targetAddress = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._listenPort = value.listenPort;
      this._protocol = value.protocol;
      this._targetAddress = value.targetAddress;
      this._targetPort = value.targetPort;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // listen_port - computed: true, optional: false, required: true
  private _listenPort?: string; 
  public get listenPort() {
    return this.getStringAttribute('listen_port');
  }
  public set listenPort(value: string) {
    this._listenPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // protocol - computed: true, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_address - computed: true, optional: false, required: true
  private _targetAddress?: string; 
  public get targetAddress() {
    return this.getStringAttribute('target_address');
  }
  public set targetAddress(value: string) {
    this._targetAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressInput() {
    return this._targetAddress;
  }

  // target_port - computed: true, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class NetworkForwardPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkForwardPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkForwardPortsOutputReference {
    return new NetworkForwardPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward lxd_network_forward}
*/
export class NetworkForward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lxd_network_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkForward to import
  * @param importFromId The id of the existing NetworkForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lxd_network_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_forward lxd_network_forward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkForwardConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'lxd_network_forward',
      terraformGeneratorMetadata: {
        providerName: 'lxd',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._description = config.description;
    this._listenAddress = config.listenAddress;
    this._network = config.network;
    this._ports.internalValue = config.ports;
    this._project = config.project;
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // listen_address - computed: false, optional: false, required: true
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // ports - computed: true, optional: true, required: false
  private _ports = new NetworkForwardPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkForwardPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      description: cdktf.stringToTerraform(this._description),
      listen_address: cdktf.stringToTerraform(this._listenAddress),
      network: cdktf.stringToTerraform(this._network),
      ports: cdktf.listMapper(networkForwardPortsToTerraform, false)(this._ports.internalValue),
      project: cdktf.stringToTerraform(this._project),
      remote: cdktf.stringToTerraform(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_address: {
        value: cdktf.stringToHclTerraform(this._listenAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(networkForwardPortsToHclTerraform, false)(this._ports.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkForwardPortsList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
