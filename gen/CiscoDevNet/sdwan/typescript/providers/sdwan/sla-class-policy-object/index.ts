// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlaClassPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * App Probe Class Policy Object ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#app_probe_class_id SlaClassPolicyObject#app_probe_class_id}
  */
  readonly appProbeClassId?: string;
  /**
  * App Probe Class Policy Object version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#app_probe_class_version SlaClassPolicyObject#app_probe_class_version}
  */
  readonly appProbeClassVersion?: number;
  /**
  * 
  *   - Choices: `loss`, `latency`, `jitter`, `loss-latency`, `loss-jitter`, `latency-loss`, `latency-jitter`, `jitter-latency`, `jitter-loss`, `loss-latency-jitter`, `loss-jitter-latency`, `latency-loss-jitter`, `latency-jitter-loss`, `jitter-latency-loss`, `jitter-loss-latency`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#fallback_best_tunnel_criteria SlaClassPolicyObject#fallback_best_tunnel_criteria}
  */
  readonly fallbackBestTunnelCriteria?: string;
  /**
  * Jitter variance in ms
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#fallback_best_tunnel_jitter SlaClassPolicyObject#fallback_best_tunnel_jitter}
  */
  readonly fallbackBestTunnelJitter?: number;
  /**
  * Latency variance in ms
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#fallback_best_tunnel_latency SlaClassPolicyObject#fallback_best_tunnel_latency}
  */
  readonly fallbackBestTunnelLatency?: number;
  /**
  * Loss variance in percent
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#fallback_best_tunnel_loss SlaClassPolicyObject#fallback_best_tunnel_loss}
  */
  readonly fallbackBestTunnelLoss?: number;
  /**
  * Jitter in ms
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#jitter SlaClassPolicyObject#jitter}
  */
  readonly jitter?: number;
  /**
  * Latency in ms
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#latency SlaClassPolicyObject#latency}
  */
  readonly latency?: number;
  /**
  * Loss in percent
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#loss SlaClassPolicyObject#loss}
  */
  readonly loss?: number;
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#name SlaClassPolicyObject#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object sdwan_sla_class_policy_object}
*/
export class SlaClassPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_sla_class_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlaClassPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlaClassPolicyObject to import
  * @param importFromId The id of the existing SlaClassPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlaClassPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_sla_class_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/sla_class_policy_object sdwan_sla_class_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlaClassPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: SlaClassPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_sla_class_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appProbeClassId = config.appProbeClassId;
    this._appProbeClassVersion = config.appProbeClassVersion;
    this._fallbackBestTunnelCriteria = config.fallbackBestTunnelCriteria;
    this._fallbackBestTunnelJitter = config.fallbackBestTunnelJitter;
    this._fallbackBestTunnelLatency = config.fallbackBestTunnelLatency;
    this._fallbackBestTunnelLoss = config.fallbackBestTunnelLoss;
    this._jitter = config.jitter;
    this._latency = config.latency;
    this._loss = config.loss;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_probe_class_id - computed: false, optional: true, required: false
  private _appProbeClassId?: string; 
  public get appProbeClassId() {
    return this.getStringAttribute('app_probe_class_id');
  }
  public set appProbeClassId(value: string) {
    this._appProbeClassId = value;
  }
  public resetAppProbeClassId() {
    this._appProbeClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProbeClassIdInput() {
    return this._appProbeClassId;
  }

  // app_probe_class_version - computed: false, optional: true, required: false
  private _appProbeClassVersion?: number; 
  public get appProbeClassVersion() {
    return this.getNumberAttribute('app_probe_class_version');
  }
  public set appProbeClassVersion(value: number) {
    this._appProbeClassVersion = value;
  }
  public resetAppProbeClassVersion() {
    this._appProbeClassVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProbeClassVersionInput() {
    return this._appProbeClassVersion;
  }

  // fallback_best_tunnel_criteria - computed: false, optional: true, required: false
  private _fallbackBestTunnelCriteria?: string; 
  public get fallbackBestTunnelCriteria() {
    return this.getStringAttribute('fallback_best_tunnel_criteria');
  }
  public set fallbackBestTunnelCriteria(value: string) {
    this._fallbackBestTunnelCriteria = value;
  }
  public resetFallbackBestTunnelCriteria() {
    this._fallbackBestTunnelCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelCriteriaInput() {
    return this._fallbackBestTunnelCriteria;
  }

  // fallback_best_tunnel_jitter - computed: false, optional: true, required: false
  private _fallbackBestTunnelJitter?: number; 
  public get fallbackBestTunnelJitter() {
    return this.getNumberAttribute('fallback_best_tunnel_jitter');
  }
  public set fallbackBestTunnelJitter(value: number) {
    this._fallbackBestTunnelJitter = value;
  }
  public resetFallbackBestTunnelJitter() {
    this._fallbackBestTunnelJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelJitterInput() {
    return this._fallbackBestTunnelJitter;
  }

  // fallback_best_tunnel_latency - computed: false, optional: true, required: false
  private _fallbackBestTunnelLatency?: number; 
  public get fallbackBestTunnelLatency() {
    return this.getNumberAttribute('fallback_best_tunnel_latency');
  }
  public set fallbackBestTunnelLatency(value: number) {
    this._fallbackBestTunnelLatency = value;
  }
  public resetFallbackBestTunnelLatency() {
    this._fallbackBestTunnelLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelLatencyInput() {
    return this._fallbackBestTunnelLatency;
  }

  // fallback_best_tunnel_loss - computed: false, optional: true, required: false
  private _fallbackBestTunnelLoss?: number; 
  public get fallbackBestTunnelLoss() {
    return this.getNumberAttribute('fallback_best_tunnel_loss');
  }
  public set fallbackBestTunnelLoss(value: number) {
    this._fallbackBestTunnelLoss = value;
  }
  public resetFallbackBestTunnelLoss() {
    this._fallbackBestTunnelLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelLossInput() {
    return this._fallbackBestTunnelLoss;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: number; 
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }
  public set jitter(value: number) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // loss - computed: false, optional: true, required: false
  private _loss?: number; 
  public get loss() {
    return this.getNumberAttribute('loss');
  }
  public set loss(value: number) {
    this._loss = value;
  }
  public resetLoss() {
    this._loss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossInput() {
    return this._loss;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_probe_class_id: cdktf.stringToTerraform(this._appProbeClassId),
      app_probe_class_version: cdktf.numberToTerraform(this._appProbeClassVersion),
      fallback_best_tunnel_criteria: cdktf.stringToTerraform(this._fallbackBestTunnelCriteria),
      fallback_best_tunnel_jitter: cdktf.numberToTerraform(this._fallbackBestTunnelJitter),
      fallback_best_tunnel_latency: cdktf.numberToTerraform(this._fallbackBestTunnelLatency),
      fallback_best_tunnel_loss: cdktf.numberToTerraform(this._fallbackBestTunnelLoss),
      jitter: cdktf.numberToTerraform(this._jitter),
      latency: cdktf.numberToTerraform(this._latency),
      loss: cdktf.numberToTerraform(this._loss),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_probe_class_id: {
        value: cdktf.stringToHclTerraform(this._appProbeClassId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_probe_class_version: {
        value: cdktf.numberToHclTerraform(this._appProbeClassVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_best_tunnel_criteria: {
        value: cdktf.stringToHclTerraform(this._fallbackBestTunnelCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_best_tunnel_jitter: {
        value: cdktf.numberToHclTerraform(this._fallbackBestTunnelJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_best_tunnel_latency: {
        value: cdktf.numberToHclTerraform(this._fallbackBestTunnelLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_best_tunnel_loss: {
        value: cdktf.numberToHclTerraform(this._fallbackBestTunnelLoss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jitter: {
        value: cdktf.numberToHclTerraform(this._jitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency: {
        value: cdktf.numberToHclTerraform(this._latency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loss: {
        value: cdktf.numberToHclTerraform(this._loss),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
