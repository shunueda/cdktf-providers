// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplatePolicyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#id DataThunderSlbTemplatePolicyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#name DataThunderSlbTemplatePolicyStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#stats DataThunderSlbTemplatePolicyStats#stats}
  */
  readonly stats?: DataThunderSlbTemplatePolicyStatsStats;
}
export interface DataThunderSlbTemplatePolicyStatsStats {
  /**
  * Expected Client HELLO requests not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#exp_client_hello_not_found DataThunderSlbTemplatePolicyStats#exp_client_hello_not_found}
  */
  readonly expClientHelloNotFound?: number;
  /**
  * Forward-policy current DNS outstanding requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_dns_outstanding DataThunderSlbTemplatePolicyStats#fwd_policy_dns_outstanding}
  */
  readonly fwdPolicyDnsOutstanding?: number;
  /**
  * Forward-policy unresolved DNS queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_dns_unresolved DataThunderSlbTemplatePolicyStats#fwd_policy_dns_unresolved}
  */
  readonly fwdPolicyDnsUnresolved?: number;
  /**
  * Number of forward-policy requests forwarded to internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_forward_to_internet DataThunderSlbTemplatePolicyStats#fwd_policy_forward_to_internet}
  */
  readonly fwdPolicyForwardToInternet?: number;
  /**
  * Number of forward-policy requests forwarded to proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_forward_to_proxy DataThunderSlbTemplatePolicyStats#fwd_policy_forward_to_proxy}
  */
  readonly fwdPolicyForwardToProxy?: number;
  /**
  * Number of forward-policy requests forwarded to service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_forward_to_service_group DataThunderSlbTemplatePolicyStats#fwd_policy_forward_to_service_group}
  */
  readonly fwdPolicyForwardToServiceGroup?: number;
  /**
  * Number of forward-policy requests for this policy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_hits DataThunderSlbTemplatePolicyStats#fwd_policy_hits}
  */
  readonly fwdPolicyHits?: number;
  /**
  * Number of forward-policy requests dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_policy_drop DataThunderSlbTemplatePolicyStats#fwd_policy_policy_drop}
  */
  readonly fwdPolicyPolicyDrop?: number;
  /**
  * Forward-policy source-nat translation failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_snat_fail DataThunderSlbTemplatePolicyStats#fwd_policy_snat_fail}
  */
  readonly fwdPolicySnatFail?: number;
  /**
  * Forward-policy requests without matching source rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#fwd_policy_source_match_not_found DataThunderSlbTemplatePolicyStats#fwd_policy_source_match_not_found}
  */
  readonly fwdPolicySourceMatchNotFound?: number;
}

export function dataThunderSlbTemplatePolicyStatsStatsToTerraform(struct?: DataThunderSlbTemplatePolicyStatsStatsOutputReference | DataThunderSlbTemplatePolicyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp_client_hello_not_found: cdktf.numberToTerraform(struct!.expClientHelloNotFound),
    fwd_policy_dns_outstanding: cdktf.numberToTerraform(struct!.fwdPolicyDnsOutstanding),
    fwd_policy_dns_unresolved: cdktf.numberToTerraform(struct!.fwdPolicyDnsUnresolved),
    fwd_policy_forward_to_internet: cdktf.numberToTerraform(struct!.fwdPolicyForwardToInternet),
    fwd_policy_forward_to_proxy: cdktf.numberToTerraform(struct!.fwdPolicyForwardToProxy),
    fwd_policy_forward_to_service_group: cdktf.numberToTerraform(struct!.fwdPolicyForwardToServiceGroup),
    fwd_policy_hits: cdktf.numberToTerraform(struct!.fwdPolicyHits),
    fwd_policy_policy_drop: cdktf.numberToTerraform(struct!.fwdPolicyPolicyDrop),
    fwd_policy_snat_fail: cdktf.numberToTerraform(struct!.fwdPolicySnatFail),
    fwd_policy_source_match_not_found: cdktf.numberToTerraform(struct!.fwdPolicySourceMatchNotFound),
  }
}


export function dataThunderSlbTemplatePolicyStatsStatsToHclTerraform(struct?: DataThunderSlbTemplatePolicyStatsStatsOutputReference | DataThunderSlbTemplatePolicyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp_client_hello_not_found: {
      value: cdktf.numberToHclTerraform(struct!.expClientHelloNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_dns_outstanding: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyDnsOutstanding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_dns_unresolved: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyDnsUnresolved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_forward_to_internet: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyForwardToInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_forward_to_proxy: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyForwardToProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_forward_to_service_group: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyForwardToServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_hits: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicyPolicyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicySnatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_policy_source_match_not_found: {
      value: cdktf.numberToHclTerraform(struct!.fwdPolicySourceMatchNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplatePolicyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplatePolicyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expClientHelloNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.expClientHelloNotFound = this._expClientHelloNotFound;
    }
    if (this._fwdPolicyDnsOutstanding !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyDnsOutstanding = this._fwdPolicyDnsOutstanding;
    }
    if (this._fwdPolicyDnsUnresolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyDnsUnresolved = this._fwdPolicyDnsUnresolved;
    }
    if (this._fwdPolicyForwardToInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyForwardToInternet = this._fwdPolicyForwardToInternet;
    }
    if (this._fwdPolicyForwardToProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyForwardToProxy = this._fwdPolicyForwardToProxy;
    }
    if (this._fwdPolicyForwardToServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyForwardToServiceGroup = this._fwdPolicyForwardToServiceGroup;
    }
    if (this._fwdPolicyHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyHits = this._fwdPolicyHits;
    }
    if (this._fwdPolicyPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicyPolicyDrop = this._fwdPolicyPolicyDrop;
    }
    if (this._fwdPolicySnatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicySnatFail = this._fwdPolicySnatFail;
    }
    if (this._fwdPolicySourceMatchNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdPolicySourceMatchNotFound = this._fwdPolicySourceMatchNotFound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplatePolicyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expClientHelloNotFound = undefined;
      this._fwdPolicyDnsOutstanding = undefined;
      this._fwdPolicyDnsUnresolved = undefined;
      this._fwdPolicyForwardToInternet = undefined;
      this._fwdPolicyForwardToProxy = undefined;
      this._fwdPolicyForwardToServiceGroup = undefined;
      this._fwdPolicyHits = undefined;
      this._fwdPolicyPolicyDrop = undefined;
      this._fwdPolicySnatFail = undefined;
      this._fwdPolicySourceMatchNotFound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expClientHelloNotFound = value.expClientHelloNotFound;
      this._fwdPolicyDnsOutstanding = value.fwdPolicyDnsOutstanding;
      this._fwdPolicyDnsUnresolved = value.fwdPolicyDnsUnresolved;
      this._fwdPolicyForwardToInternet = value.fwdPolicyForwardToInternet;
      this._fwdPolicyForwardToProxy = value.fwdPolicyForwardToProxy;
      this._fwdPolicyForwardToServiceGroup = value.fwdPolicyForwardToServiceGroup;
      this._fwdPolicyHits = value.fwdPolicyHits;
      this._fwdPolicyPolicyDrop = value.fwdPolicyPolicyDrop;
      this._fwdPolicySnatFail = value.fwdPolicySnatFail;
      this._fwdPolicySourceMatchNotFound = value.fwdPolicySourceMatchNotFound;
    }
  }

  // exp_client_hello_not_found - computed: false, optional: true, required: false
  private _expClientHelloNotFound?: number; 
  public get expClientHelloNotFound() {
    return this.getNumberAttribute('exp_client_hello_not_found');
  }
  public set expClientHelloNotFound(value: number) {
    this._expClientHelloNotFound = value;
  }
  public resetExpClientHelloNotFound() {
    this._expClientHelloNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expClientHelloNotFoundInput() {
    return this._expClientHelloNotFound;
  }

  // fwd_policy_dns_outstanding - computed: false, optional: true, required: false
  private _fwdPolicyDnsOutstanding?: number; 
  public get fwdPolicyDnsOutstanding() {
    return this.getNumberAttribute('fwd_policy_dns_outstanding');
  }
  public set fwdPolicyDnsOutstanding(value: number) {
    this._fwdPolicyDnsOutstanding = value;
  }
  public resetFwdPolicyDnsOutstanding() {
    this._fwdPolicyDnsOutstanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyDnsOutstandingInput() {
    return this._fwdPolicyDnsOutstanding;
  }

  // fwd_policy_dns_unresolved - computed: false, optional: true, required: false
  private _fwdPolicyDnsUnresolved?: number; 
  public get fwdPolicyDnsUnresolved() {
    return this.getNumberAttribute('fwd_policy_dns_unresolved');
  }
  public set fwdPolicyDnsUnresolved(value: number) {
    this._fwdPolicyDnsUnresolved = value;
  }
  public resetFwdPolicyDnsUnresolved() {
    this._fwdPolicyDnsUnresolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyDnsUnresolvedInput() {
    return this._fwdPolicyDnsUnresolved;
  }

  // fwd_policy_forward_to_internet - computed: false, optional: true, required: false
  private _fwdPolicyForwardToInternet?: number; 
  public get fwdPolicyForwardToInternet() {
    return this.getNumberAttribute('fwd_policy_forward_to_internet');
  }
  public set fwdPolicyForwardToInternet(value: number) {
    this._fwdPolicyForwardToInternet = value;
  }
  public resetFwdPolicyForwardToInternet() {
    this._fwdPolicyForwardToInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyForwardToInternetInput() {
    return this._fwdPolicyForwardToInternet;
  }

  // fwd_policy_forward_to_proxy - computed: false, optional: true, required: false
  private _fwdPolicyForwardToProxy?: number; 
  public get fwdPolicyForwardToProxy() {
    return this.getNumberAttribute('fwd_policy_forward_to_proxy');
  }
  public set fwdPolicyForwardToProxy(value: number) {
    this._fwdPolicyForwardToProxy = value;
  }
  public resetFwdPolicyForwardToProxy() {
    this._fwdPolicyForwardToProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyForwardToProxyInput() {
    return this._fwdPolicyForwardToProxy;
  }

  // fwd_policy_forward_to_service_group - computed: false, optional: true, required: false
  private _fwdPolicyForwardToServiceGroup?: number; 
  public get fwdPolicyForwardToServiceGroup() {
    return this.getNumberAttribute('fwd_policy_forward_to_service_group');
  }
  public set fwdPolicyForwardToServiceGroup(value: number) {
    this._fwdPolicyForwardToServiceGroup = value;
  }
  public resetFwdPolicyForwardToServiceGroup() {
    this._fwdPolicyForwardToServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyForwardToServiceGroupInput() {
    return this._fwdPolicyForwardToServiceGroup;
  }

  // fwd_policy_hits - computed: false, optional: true, required: false
  private _fwdPolicyHits?: number; 
  public get fwdPolicyHits() {
    return this.getNumberAttribute('fwd_policy_hits');
  }
  public set fwdPolicyHits(value: number) {
    this._fwdPolicyHits = value;
  }
  public resetFwdPolicyHits() {
    this._fwdPolicyHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyHitsInput() {
    return this._fwdPolicyHits;
  }

  // fwd_policy_policy_drop - computed: false, optional: true, required: false
  private _fwdPolicyPolicyDrop?: number; 
  public get fwdPolicyPolicyDrop() {
    return this.getNumberAttribute('fwd_policy_policy_drop');
  }
  public set fwdPolicyPolicyDrop(value: number) {
    this._fwdPolicyPolicyDrop = value;
  }
  public resetFwdPolicyPolicyDrop() {
    this._fwdPolicyPolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicyPolicyDropInput() {
    return this._fwdPolicyPolicyDrop;
  }

  // fwd_policy_snat_fail - computed: false, optional: true, required: false
  private _fwdPolicySnatFail?: number; 
  public get fwdPolicySnatFail() {
    return this.getNumberAttribute('fwd_policy_snat_fail');
  }
  public set fwdPolicySnatFail(value: number) {
    this._fwdPolicySnatFail = value;
  }
  public resetFwdPolicySnatFail() {
    this._fwdPolicySnatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicySnatFailInput() {
    return this._fwdPolicySnatFail;
  }

  // fwd_policy_source_match_not_found - computed: false, optional: true, required: false
  private _fwdPolicySourceMatchNotFound?: number; 
  public get fwdPolicySourceMatchNotFound() {
    return this.getNumberAttribute('fwd_policy_source_match_not_found');
  }
  public set fwdPolicySourceMatchNotFound(value: number) {
    this._fwdPolicySourceMatchNotFound = value;
  }
  public resetFwdPolicySourceMatchNotFound() {
    this._fwdPolicySourceMatchNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdPolicySourceMatchNotFoundInput() {
    return this._fwdPolicySourceMatchNotFound;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats thunder_slb_template_policy_stats}
*/
export class DataThunderSlbTemplatePolicyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplatePolicyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplatePolicyStats to import
  * @param importFromId The id of the existing DataThunderSlbTemplatePolicyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplatePolicyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_policy_stats thunder_slb_template_policy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplatePolicyStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplatePolicyStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbTemplatePolicyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbTemplatePolicyStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderSlbTemplatePolicyStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      stats: {
        value: dataThunderSlbTemplatePolicyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplatePolicyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
