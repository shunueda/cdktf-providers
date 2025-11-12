// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectSlaClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#description PolicyObjectSlaClassList#description}
  */
  readonly description?: string;
  /**
  * Sla class List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#entries PolicyObjectSlaClassList#entries}
  */
  readonly entries: PolicyObjectSlaClassListEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#feature_profile_id PolicyObjectSlaClassList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#name PolicyObjectSlaClassList#name}
  */
  readonly name: string;
}
export interface PolicyObjectSlaClassListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#app_probe_class_list_id PolicyObjectSlaClassList#app_probe_class_list_id}
  */
  readonly appProbeClassListId?: string;
  /**
  * 
  *   - Choices: `jitter`, `latency`, `loss`, `loss-latency`, `loss-jitter`, `latency-loss`, `latency-jitter`, `jitter-latency`, `jitter-loss`, `loss-latency-jitter`, `loss-jitter-latency`, `latency-loss-jitter`, `latency-jitter-loss`, `jitter-latency-loss`, `jitter-loss-latency`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#fallback_best_tunnel_criteria PolicyObjectSlaClassList#fallback_best_tunnel_criteria}
  */
  readonly fallbackBestTunnelCriteria?: string;
  /**
  * 
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#fallback_best_tunnel_jitter_variance PolicyObjectSlaClassList#fallback_best_tunnel_jitter_variance}
  */
  readonly fallbackBestTunnelJitterVariance?: number;
  /**
  * 
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#fallback_best_tunnel_latency_variance PolicyObjectSlaClassList#fallback_best_tunnel_latency_variance}
  */
  readonly fallbackBestTunnelLatencyVariance?: number;
  /**
  * 
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#fallback_best_tunnel_loss_variance PolicyObjectSlaClassList#fallback_best_tunnel_loss_variance}
  */
  readonly fallbackBestTunnelLossVariance?: number;
  /**
  * 
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#jitter PolicyObjectSlaClassList#jitter}
  */
  readonly jitter?: number;
  /**
  * 
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#latency PolicyObjectSlaClassList#latency}
  */
  readonly latency?: number;
  /**
  * 
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#loss PolicyObjectSlaClassList#loss}
  */
  readonly loss?: number;
}

export function policyObjectSlaClassListEntriesToTerraform(struct?: PolicyObjectSlaClassListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_probe_class_list_id: cdktf.stringToTerraform(struct!.appProbeClassListId),
    fallback_best_tunnel_criteria: cdktf.stringToTerraform(struct!.fallbackBestTunnelCriteria),
    fallback_best_tunnel_jitter_variance: cdktf.numberToTerraform(struct!.fallbackBestTunnelJitterVariance),
    fallback_best_tunnel_latency_variance: cdktf.numberToTerraform(struct!.fallbackBestTunnelLatencyVariance),
    fallback_best_tunnel_loss_variance: cdktf.numberToTerraform(struct!.fallbackBestTunnelLossVariance),
    jitter: cdktf.numberToTerraform(struct!.jitter),
    latency: cdktf.numberToTerraform(struct!.latency),
    loss: cdktf.numberToTerraform(struct!.loss),
  }
}


export function policyObjectSlaClassListEntriesToHclTerraform(struct?: PolicyObjectSlaClassListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_probe_class_list_id: {
      value: cdktf.stringToHclTerraform(struct!.appProbeClassListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_best_tunnel_criteria: {
      value: cdktf.stringToHclTerraform(struct!.fallbackBestTunnelCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback_best_tunnel_jitter_variance: {
      value: cdktf.numberToHclTerraform(struct!.fallbackBestTunnelJitterVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback_best_tunnel_latency_variance: {
      value: cdktf.numberToHclTerraform(struct!.fallbackBestTunnelLatencyVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback_best_tunnel_loss_variance: {
      value: cdktf.numberToHclTerraform(struct!.fallbackBestTunnelLossVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter: {
      value: cdktf.numberToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loss: {
      value: cdktf.numberToHclTerraform(struct!.loss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectSlaClassListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectSlaClassListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProbeClassListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProbeClassListId = this._appProbeClassListId;
    }
    if (this._fallbackBestTunnelCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBestTunnelCriteria = this._fallbackBestTunnelCriteria;
    }
    if (this._fallbackBestTunnelJitterVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBestTunnelJitterVariance = this._fallbackBestTunnelJitterVariance;
    }
    if (this._fallbackBestTunnelLatencyVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBestTunnelLatencyVariance = this._fallbackBestTunnelLatencyVariance;
    }
    if (this._fallbackBestTunnelLossVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBestTunnelLossVariance = this._fallbackBestTunnelLossVariance;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._loss !== undefined) {
      hasAnyValues = true;
      internalValueResult.loss = this._loss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectSlaClassListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProbeClassListId = undefined;
      this._fallbackBestTunnelCriteria = undefined;
      this._fallbackBestTunnelJitterVariance = undefined;
      this._fallbackBestTunnelLatencyVariance = undefined;
      this._fallbackBestTunnelLossVariance = undefined;
      this._jitter = undefined;
      this._latency = undefined;
      this._loss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProbeClassListId = value.appProbeClassListId;
      this._fallbackBestTunnelCriteria = value.fallbackBestTunnelCriteria;
      this._fallbackBestTunnelJitterVariance = value.fallbackBestTunnelJitterVariance;
      this._fallbackBestTunnelLatencyVariance = value.fallbackBestTunnelLatencyVariance;
      this._fallbackBestTunnelLossVariance = value.fallbackBestTunnelLossVariance;
      this._jitter = value.jitter;
      this._latency = value.latency;
      this._loss = value.loss;
    }
  }

  // app_probe_class_list_id - computed: false, optional: true, required: false
  private _appProbeClassListId?: string; 
  public get appProbeClassListId() {
    return this.getStringAttribute('app_probe_class_list_id');
  }
  public set appProbeClassListId(value: string) {
    this._appProbeClassListId = value;
  }
  public resetAppProbeClassListId() {
    this._appProbeClassListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProbeClassListIdInput() {
    return this._appProbeClassListId;
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

  // fallback_best_tunnel_jitter_variance - computed: false, optional: true, required: false
  private _fallbackBestTunnelJitterVariance?: number; 
  public get fallbackBestTunnelJitterVariance() {
    return this.getNumberAttribute('fallback_best_tunnel_jitter_variance');
  }
  public set fallbackBestTunnelJitterVariance(value: number) {
    this._fallbackBestTunnelJitterVariance = value;
  }
  public resetFallbackBestTunnelJitterVariance() {
    this._fallbackBestTunnelJitterVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelJitterVarianceInput() {
    return this._fallbackBestTunnelJitterVariance;
  }

  // fallback_best_tunnel_latency_variance - computed: false, optional: true, required: false
  private _fallbackBestTunnelLatencyVariance?: number; 
  public get fallbackBestTunnelLatencyVariance() {
    return this.getNumberAttribute('fallback_best_tunnel_latency_variance');
  }
  public set fallbackBestTunnelLatencyVariance(value: number) {
    this._fallbackBestTunnelLatencyVariance = value;
  }
  public resetFallbackBestTunnelLatencyVariance() {
    this._fallbackBestTunnelLatencyVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelLatencyVarianceInput() {
    return this._fallbackBestTunnelLatencyVariance;
  }

  // fallback_best_tunnel_loss_variance - computed: false, optional: true, required: false
  private _fallbackBestTunnelLossVariance?: number; 
  public get fallbackBestTunnelLossVariance() {
    return this.getNumberAttribute('fallback_best_tunnel_loss_variance');
  }
  public set fallbackBestTunnelLossVariance(value: number) {
    this._fallbackBestTunnelLossVariance = value;
  }
  public resetFallbackBestTunnelLossVariance() {
    this._fallbackBestTunnelLossVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBestTunnelLossVarianceInput() {
    return this._fallbackBestTunnelLossVariance;
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
}

export class PolicyObjectSlaClassListEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectSlaClassListEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectSlaClassListEntriesOutputReference {
    return new PolicyObjectSlaClassListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list sdwan_policy_object_sla_class_list}
*/
export class PolicyObjectSlaClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_sla_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectSlaClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectSlaClassList to import
  * @param importFromId The id of the existing PolicyObjectSlaClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectSlaClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_sla_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_sla_class_list sdwan_policy_object_sla_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectSlaClassListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectSlaClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_sla_class_list',
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
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectSlaClassListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectSlaClassListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectSlaClassListEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(policyObjectSlaClassListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectSlaClassListEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
