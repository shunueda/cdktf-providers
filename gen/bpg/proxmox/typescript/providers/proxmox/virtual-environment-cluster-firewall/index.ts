// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentClusterFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable ebtables cluster-wide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#ebtables VirtualEnvironmentClusterFirewall#ebtables}
  */
  readonly ebtables?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the firewall cluster-wide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#enabled VirtualEnvironmentClusterFirewall#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Default policy for forwarded traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#forward_policy VirtualEnvironmentClusterFirewall#forward_policy}
  */
  readonly forwardPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#id VirtualEnvironmentClusterFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default policy for incoming traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#input_policy VirtualEnvironmentClusterFirewall#input_policy}
  */
  readonly inputPolicy?: string;
  /**
  * Default policy for outgoing traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#output_policy VirtualEnvironmentClusterFirewall#output_policy}
  */
  readonly outputPolicy?: string;
  /**
  * log_ratelimit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#log_ratelimit VirtualEnvironmentClusterFirewall#log_ratelimit}
  */
  readonly logRatelimit?: VirtualEnvironmentClusterFirewallLogRatelimit;
}
export interface VirtualEnvironmentClusterFirewallLogRatelimit {
  /**
  * Initial burst of packages which will always get logged before the rate is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#burst VirtualEnvironmentClusterFirewall#burst}
  */
  readonly burst?: number;
  /**
  * Enable or disable log ratelimiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#enabled VirtualEnvironmentClusterFirewall#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency with which the burst bucket gets refilled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#rate VirtualEnvironmentClusterFirewall#rate}
  */
  readonly rate?: string;
}

export function virtualEnvironmentClusterFirewallLogRatelimitToTerraform(struct?: VirtualEnvironmentClusterFirewallLogRatelimitOutputReference | VirtualEnvironmentClusterFirewallLogRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function virtualEnvironmentClusterFirewallLogRatelimitToHclTerraform(struct?: VirtualEnvironmentClusterFirewallLogRatelimitOutputReference | VirtualEnvironmentClusterFirewallLogRatelimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClusterFirewallLogRatelimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentClusterFirewallLogRatelimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClusterFirewallLogRatelimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burst = undefined;
      this._enabled = undefined;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burst = value.burst;
      this._enabled = value.enabled;
      this._rate = value.rate;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
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

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall proxmox_virtual_environment_cluster_firewall}
*/
export class VirtualEnvironmentClusterFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_cluster_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentClusterFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentClusterFirewall to import
  * @param importFromId The id of the existing VirtualEnvironmentClusterFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentClusterFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_cluster_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_cluster_firewall proxmox_virtual_environment_cluster_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentClusterFirewallConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentClusterFirewallConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_cluster_firewall',
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
    this._ebtables = config.ebtables;
    this._enabled = config.enabled;
    this._forwardPolicy = config.forwardPolicy;
    this._id = config.id;
    this._inputPolicy = config.inputPolicy;
    this._outputPolicy = config.outputPolicy;
    this._logRatelimit.internalValue = config.logRatelimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ebtables - computed: false, optional: true, required: false
  private _ebtables?: boolean | cdktf.IResolvable; 
  public get ebtables() {
    return this.getBooleanAttribute('ebtables');
  }
  public set ebtables(value: boolean | cdktf.IResolvable) {
    this._ebtables = value;
  }
  public resetEbtables() {
    this._ebtables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebtablesInput() {
    return this._ebtables;
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

  // forward_policy - computed: false, optional: true, required: false
  private _forwardPolicy?: string; 
  public get forwardPolicy() {
    return this.getStringAttribute('forward_policy');
  }
  public set forwardPolicy(value: string) {
    this._forwardPolicy = value;
  }
  public resetForwardPolicy() {
    this._forwardPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPolicyInput() {
    return this._forwardPolicy;
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

  // log_ratelimit - computed: false, optional: true, required: false
  private _logRatelimit = new VirtualEnvironmentClusterFirewallLogRatelimitOutputReference(this, "log_ratelimit");
  public get logRatelimit() {
    return this._logRatelimit;
  }
  public putLogRatelimit(value: VirtualEnvironmentClusterFirewallLogRatelimit) {
    this._logRatelimit.internalValue = value;
  }
  public resetLogRatelimit() {
    this._logRatelimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRatelimitInput() {
    return this._logRatelimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ebtables: cdktf.booleanToTerraform(this._ebtables),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forward_policy: cdktf.stringToTerraform(this._forwardPolicy),
      id: cdktf.stringToTerraform(this._id),
      input_policy: cdktf.stringToTerraform(this._inputPolicy),
      output_policy: cdktf.stringToTerraform(this._outputPolicy),
      log_ratelimit: virtualEnvironmentClusterFirewallLogRatelimitToTerraform(this._logRatelimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ebtables: {
        value: cdktf.booleanToHclTerraform(this._ebtables),
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
      forward_policy: {
        value: cdktf.stringToHclTerraform(this._forwardPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      output_policy: {
        value: cdktf.stringToHclTerraform(this._outputPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_ratelimit: {
        value: virtualEnvironmentClusterFirewallLogRatelimitToHclTerraform(this._logRatelimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentClusterFirewallLogRatelimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
