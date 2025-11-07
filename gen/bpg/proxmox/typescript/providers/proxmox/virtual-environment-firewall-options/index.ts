// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentFirewallOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the container to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#container_id VirtualEnvironmentFirewallOptions#container_id}
  */
  readonly containerId?: number;
  /**
  * Enable DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#dhcp VirtualEnvironmentFirewallOptions#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#enabled VirtualEnvironmentFirewallOptions#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#id VirtualEnvironmentFirewallOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default policy for incoming traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#input_policy VirtualEnvironmentFirewallOptions#input_policy}
  */
  readonly inputPolicy?: string;
  /**
  * Enable default IP filters. This is equivalent to adding an empty ipfilter-net<id> ipset for every interface. Such ipsets implicitly contain sane default restrictions such as restricting IPv6 link local addresses to the one derived from the interface's MAC address. For containers the configured IP addresses will be implicitly added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#ipfilter VirtualEnvironmentFirewallOptions#ipfilter}
  */
  readonly ipfilter?: boolean | cdktf.IResolvable;
  /**
  * Log level for incoming traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#log_level_in VirtualEnvironmentFirewallOptions#log_level_in}
  */
  readonly logLevelIn?: string;
  /**
  * Log level for outgoing traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#log_level_out VirtualEnvironmentFirewallOptions#log_level_out}
  */
  readonly logLevelOut?: string;
  /**
  * Enable MAC address filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#macfilter VirtualEnvironmentFirewallOptions#macfilter}
  */
  readonly macfilter?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP (Neighbor Discovery Protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#ndp VirtualEnvironmentFirewallOptions#ndp}
  */
  readonly ndp?: boolean | cdktf.IResolvable;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#node_name VirtualEnvironmentFirewallOptions#node_name}
  */
  readonly nodeName: string;
  /**
  * Default policy for outgoing traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#output_policy VirtualEnvironmentFirewallOptions#output_policy}
  */
  readonly outputPolicy?: string;
  /**
  * Allow sending Router Advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#radv VirtualEnvironmentFirewallOptions#radv}
  */
  readonly radv?: boolean | cdktf.IResolvable;
  /**
  * The ID of the VM to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#vm_id VirtualEnvironmentFirewallOptions#vm_id}
  */
  readonly vmId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options proxmox_virtual_environment_firewall_options}
*/
export class VirtualEnvironmentFirewallOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_firewall_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentFirewallOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentFirewallOptions to import
  * @param importFromId The id of the existing VirtualEnvironmentFirewallOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentFirewallOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_firewall_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_options proxmox_virtual_environment_firewall_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentFirewallOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentFirewallOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_firewall_options',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerId = config.containerId;
    this._dhcp = config.dhcp;
    this._enabled = config.enabled;
    this._id = config.id;
    this._inputPolicy = config.inputPolicy;
    this._ipfilter = config.ipfilter;
    this._logLevelIn = config.logLevelIn;
    this._logLevelOut = config.logLevelOut;
    this._macfilter = config.macfilter;
    this._ndp = config.ndp;
    this._nodeName = config.nodeName;
    this._outputPolicy = config.outputPolicy;
    this._radv = config.radv;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_id - computed: false, optional: true, required: false
  private _containerId?: number; 
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }
  public set containerId(value: number) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // input_policy - computed: false, optional: true, required: false
  private _inputPolicy?: string; 
  public get inputPolicy() {
    return this.getStringAttribute('input_policy');
  }
  public set inputPolicy(value: string) {
    this._inputPolicy = value;
  }
  public resetInputPolicy() {
    this._inputPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPolicyInput() {
    return this._inputPolicy;
  }

  // ipfilter - computed: false, optional: true, required: false
  private _ipfilter?: boolean | cdktf.IResolvable; 
  public get ipfilter() {
    return this.getBooleanAttribute('ipfilter');
  }
  public set ipfilter(value: boolean | cdktf.IResolvable) {
    this._ipfilter = value;
  }
  public resetIpfilter() {
    this._ipfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfilterInput() {
    return this._ipfilter;
  }

  // log_level_in - computed: false, optional: true, required: false
  private _logLevelIn?: string; 
  public get logLevelIn() {
    return this.getStringAttribute('log_level_in');
  }
  public set logLevelIn(value: string) {
    this._logLevelIn = value;
  }
  public resetLogLevelIn() {
    this._logLevelIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInInput() {
    return this._logLevelIn;
  }

  // log_level_out - computed: false, optional: true, required: false
  private _logLevelOut?: string; 
  public get logLevelOut() {
    return this.getStringAttribute('log_level_out');
  }
  public set logLevelOut(value: string) {
    this._logLevelOut = value;
  }
  public resetLogLevelOut() {
    this._logLevelOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelOutInput() {
    return this._logLevelOut;
  }

  // macfilter - computed: false, optional: true, required: false
  private _macfilter?: boolean | cdktf.IResolvable; 
  public get macfilter() {
    return this.getBooleanAttribute('macfilter');
  }
  public set macfilter(value: boolean | cdktf.IResolvable) {
    this._macfilter = value;
  }
  public resetMacfilter() {
    this._macfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macfilterInput() {
    return this._macfilter;
  }

  // ndp - computed: false, optional: true, required: false
  private _ndp?: boolean | cdktf.IResolvable; 
  public get ndp() {
    return this.getBooleanAttribute('ndp');
  }
  public set ndp(value: boolean | cdktf.IResolvable) {
    this._ndp = value;
  }
  public resetNdp() {
    this._ndp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpInput() {
    return this._ndp;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // output_policy - computed: false, optional: true, required: false
  private _outputPolicy?: string; 
  public get outputPolicy() {
    return this.getStringAttribute('output_policy');
  }
  public set outputPolicy(value: string) {
    this._outputPolicy = value;
  }
  public resetOutputPolicy() {
    this._outputPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPolicyInput() {
    return this._outputPolicy;
  }

  // radv - computed: false, optional: true, required: false
  private _radv?: boolean | cdktf.IResolvable; 
  public get radv() {
    return this.getBooleanAttribute('radv');
  }
  public set radv(value: boolean | cdktf.IResolvable) {
    this._radv = value;
  }
  public resetRadv() {
    this._radv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radvInput() {
    return this._radv;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_id: cdktf.numberToTerraform(this._containerId),
      dhcp: cdktf.booleanToTerraform(this._dhcp),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      input_policy: cdktf.stringToTerraform(this._inputPolicy),
      ipfilter: cdktf.booleanToTerraform(this._ipfilter),
      log_level_in: cdktf.stringToTerraform(this._logLevelIn),
      log_level_out: cdktf.stringToTerraform(this._logLevelOut),
      macfilter: cdktf.booleanToTerraform(this._macfilter),
      ndp: cdktf.booleanToTerraform(this._ndp),
      node_name: cdktf.stringToTerraform(this._nodeName),
      output_policy: cdktf.stringToTerraform(this._outputPolicy),
      radv: cdktf.booleanToTerraform(this._radv),
      vm_id: cdktf.numberToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_id: {
        value: cdktf.numberToHclTerraform(this._containerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp: {
        value: cdktf.booleanToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      input_policy: {
        value: cdktf.stringToHclTerraform(this._inputPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipfilter: {
        value: cdktf.booleanToHclTerraform(this._ipfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_in: {
        value: cdktf.stringToHclTerraform(this._logLevelIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level_out: {
        value: cdktf.stringToHclTerraform(this._logLevelOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macfilter: {
        value: cdktf.booleanToHclTerraform(this._macfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ndp: {
        value: cdktf.booleanToHclTerraform(this._ndp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_policy: {
        value: cdktf.stringToHclTerraform(this._outputPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radv: {
        value: cdktf.booleanToHclTerraform(this._radv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
