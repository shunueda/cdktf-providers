// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of vCPUs that should be added to the tenant.
  * Required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#cpu_cores Tenant#cpu_cores}
  */
  readonly cpuCores: number;
  /**
  * Whether crypto and compression hardware offload should be enabled on the tenant.
  * We recommend it is enabled, otherwise crypto and compression may be processed in CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#cryptos Tenant#cryptos}
  */
  readonly cryptos?: string;
  /**
  * Configuring DAG Global IPv6 Prefix Length,value Range from `1` to `128`.Default is `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#dag_ipv6_prefix_length Tenant#dag_ipv6_prefix_length}
  */
  readonly dagIpv6PrefixLength?: number;
  /**
  * Deployment file used for BIG-IP-Next .
  * Required for if `type` is `BIG-IP-Next`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#deployment_file Tenant#deployment_file}
  */
  readonly deploymentFile?: string;
  /**
  * Name of the tenant image to be used.
  * Required for create operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#image_name Tenant#image_name}
  */
  readonly imageName: string;
  /**
  * Configure a BIG-IP tenant on these systems to use contiguous block of MAC allocation.
  * Default value is `one`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#mac_block_size Tenant#mac_block_size}
  */
  readonly macBlockSize?: string;
  /**
  * The amount of memory that should be provided to the tenant in MB.
  *  More information on memory sizing for [Velos](https://clouddocs.f5.com/training/community/velos-training/html/velos_performance_and_sizing.html#memory-sizing)/[rSeries](https://clouddocs.f5.com/training/community/rseries-training/html/rseries_performance_and_sizing.html#memory-sizing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#memory Tenant#memory}
  */
  readonly memory?: number;
  /**
  * Tenant management gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#mgmt_gateway Tenant#mgmt_gateway}
  */
  readonly mgmtGateway: string;
  /**
  * IP address used to connect to the deployed tenant.
  * Required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#mgmt_ip Tenant#mgmt_ip}
  */
  readonly mgmtIp: string;
  /**
  * Tenant management CIDR prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#mgmt_prefix Tenant#mgmt_prefix}
  */
  readonly mgmtPrefix: number;
  /**
  * Name of the tenant.
  * The first character must be a letter.
  * Only lowercase alphanumeric characters are allowed.
  * No special or extended characters are allowed except for hyphens.
  * The name cannot exceed 50 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#name Tenant#name}
  */
  readonly name: string;
  /**
  * List of integers. Specifies on which blades nodes the tenants are deployed.
  * Required for create operations.
  * For single blade platforms like rSeries only the value of 1 should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#nodes Tenant#nodes}
  */
  readonly nodes?: number[];
  /**
  * Desired running_state of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#running_state Tenant#running_state}
  */
  readonly runningState?: string;
  /**
  * The number of seconds to wait for image import to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#timeout Tenant#timeout}
  */
  readonly timeout?: number;
  /**
  * Name of the tenant image to be used.
  * Required for create operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#type Tenant#type}
  */
  readonly type?: string;
  /**
  * Minimum virtual disk size required for Tenant deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#virtual_disk_size Tenant#virtual_disk_size}
  */
  readonly virtualDiskSize: number;
  /**
  * The existing VLAN IDs in the chassis partition that should be added to the tenant.
  * The order of these VLANs is ignored.
  * This module orders the VLANs automatically, if you deliberately re-order them in subsequent tasks, this module will not register a change.
  * Required for create operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#vlans Tenant#vlans}
  */
  readonly vlans?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant f5os_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant f5os_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_tenant',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuCores = config.cpuCores;
    this._cryptos = config.cryptos;
    this._dagIpv6PrefixLength = config.dagIpv6PrefixLength;
    this._deploymentFile = config.deploymentFile;
    this._imageName = config.imageName;
    this._macBlockSize = config.macBlockSize;
    this._memory = config.memory;
    this._mgmtGateway = config.mgmtGateway;
    this._mgmtIp = config.mgmtIp;
    this._mgmtPrefix = config.mgmtPrefix;
    this._name = config.name;
    this._nodes = config.nodes;
    this._runningState = config.runningState;
    this._timeout = config.timeout;
    this._type = config.type;
    this._virtualDiskSize = config.virtualDiskSize;
    this._vlans = config.vlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_cores - computed: false, optional: false, required: true
  private _cpuCores?: number; 
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }
  public set cpuCores(value: number) {
    this._cpuCores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoresInput() {
    return this._cpuCores;
  }

  // cryptos - computed: true, optional: true, required: false
  private _cryptos?: string; 
  public get cryptos() {
    return this.getStringAttribute('cryptos');
  }
  public set cryptos(value: string) {
    this._cryptos = value;
  }
  public resetCryptos() {
    this._cryptos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptosInput() {
    return this._cryptos;
  }

  // dag_ipv6_prefix_length - computed: true, optional: true, required: false
  private _dagIpv6PrefixLength?: number; 
  public get dagIpv6PrefixLength() {
    return this.getNumberAttribute('dag_ipv6_prefix_length');
  }
  public set dagIpv6PrefixLength(value: number) {
    this._dagIpv6PrefixLength = value;
  }
  public resetDagIpv6PrefixLength() {
    this._dagIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagIpv6PrefixLengthInput() {
    return this._dagIpv6PrefixLength;
  }

  // deployment_file - computed: false, optional: true, required: false
  private _deploymentFile?: string; 
  public get deploymentFile() {
    return this.getStringAttribute('deployment_file');
  }
  public set deploymentFile(value: string) {
    this._deploymentFile = value;
  }
  public resetDeploymentFile() {
    this._deploymentFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFileInput() {
    return this._deploymentFile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // mac_block_size - computed: true, optional: true, required: false
  private _macBlockSize?: string; 
  public get macBlockSize() {
    return this.getStringAttribute('mac_block_size');
  }
  public set macBlockSize(value: string) {
    this._macBlockSize = value;
  }
  public resetMacBlockSize() {
    this._macBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macBlockSizeInput() {
    return this._macBlockSize;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // mgmt_gateway - computed: false, optional: false, required: true
  private _mgmtGateway?: string; 
  public get mgmtGateway() {
    return this.getStringAttribute('mgmt_gateway');
  }
  public set mgmtGateway(value: string) {
    this._mgmtGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtGatewayInput() {
    return this._mgmtGateway;
  }

  // mgmt_ip - computed: false, optional: false, required: true
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // mgmt_prefix - computed: false, optional: false, required: true
  private _mgmtPrefix?: number; 
  public get mgmtPrefix() {
    return this.getNumberAttribute('mgmt_prefix');
  }
  public set mgmtPrefix(value: number) {
    this._mgmtPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPrefixInput() {
    return this._mgmtPrefix;
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

  // nodes - computed: true, optional: true, required: false
  private _nodes?: number[]; 
  public get nodes() {
    return this.getNumberListAttribute('nodes');
  }
  public set nodes(value: number[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // running_state - computed: true, optional: true, required: false
  private _runningState?: string; 
  public get runningState() {
    return this.getStringAttribute('running_state');
  }
  public set runningState(value: string) {
    this._runningState = value;
  }
  public resetRunningState() {
    this._runningState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningStateInput() {
    return this._runningState;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: true, optional: true, required: false
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

  // virtual_disk_size - computed: false, optional: false, required: true
  private _virtualDiskSize?: number; 
  public get virtualDiskSize() {
    return this.getNumberAttribute('virtual_disk_size');
  }
  public set virtualDiskSize(value: number) {
    this._virtualDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskSizeInput() {
    return this._virtualDiskSize;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: number[]; 
  public get vlans() {
    return this.getNumberListAttribute('vlans');
  }
  public set vlans(value: number[]) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_cores: cdktf.numberToTerraform(this._cpuCores),
      cryptos: cdktf.stringToTerraform(this._cryptos),
      dag_ipv6_prefix_length: cdktf.numberToTerraform(this._dagIpv6PrefixLength),
      deployment_file: cdktf.stringToTerraform(this._deploymentFile),
      image_name: cdktf.stringToTerraform(this._imageName),
      mac_block_size: cdktf.stringToTerraform(this._macBlockSize),
      memory: cdktf.numberToTerraform(this._memory),
      mgmt_gateway: cdktf.stringToTerraform(this._mgmtGateway),
      mgmt_ip: cdktf.stringToTerraform(this._mgmtIp),
      mgmt_prefix: cdktf.numberToTerraform(this._mgmtPrefix),
      name: cdktf.stringToTerraform(this._name),
      nodes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._nodes),
      running_state: cdktf.stringToTerraform(this._runningState),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      virtual_disk_size: cdktf.numberToTerraform(this._virtualDiskSize),
      vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vlans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_cores: {
        value: cdktf.numberToHclTerraform(this._cpuCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cryptos: {
        value: cdktf.stringToHclTerraform(this._cryptos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dag_ipv6_prefix_length: {
        value: cdktf.numberToHclTerraform(this._dagIpv6PrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_file: {
        value: cdktf.stringToHclTerraform(this._deploymentFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_block_size: {
        value: cdktf.stringToHclTerraform(this._macBlockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_gateway: {
        value: cdktf.stringToHclTerraform(this._mgmtGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip: {
        value: cdktf.stringToHclTerraform(this._mgmtIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_prefix: {
        value: cdktf.numberToHclTerraform(this._mgmtPrefix),
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
      nodes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      running_state: {
        value: cdktf.stringToHclTerraform(this._runningState),
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
      virtual_disk_size: {
        value: cdktf.numberToHclTerraform(this._virtualDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlans: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vlans),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
