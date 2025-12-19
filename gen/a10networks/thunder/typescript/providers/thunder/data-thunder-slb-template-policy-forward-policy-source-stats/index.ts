// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplatePolicyForwardPolicySourceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#id DataThunderSlbTemplatePolicyForwardPolicySourceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * source destination match rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#name DataThunderSlbTemplatePolicyForwardPolicySourceStats#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#policy_name DataThunderSlbTemplatePolicyForwardPolicySourceStats#policy_name}
  */
  readonly policyName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#stats DataThunderSlbTemplatePolicyForwardPolicySourceStats#stats}
  */
  readonly stats?: DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats;
}
export interface DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats {
  /**
  * Number of requests without matching destination rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#destination_match_not_found DataThunderSlbTemplatePolicyForwardPolicySourceStats#destination_match_not_found}
  */
  readonly destinationMatchNotFound?: number;
  /**
  * Number of requests matching this source rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#hits DataThunderSlbTemplatePolicyForwardPolicySourceStats#hits}
  */
  readonly hits?: number;
  /**
  * Failed to parse ip or host information from request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#no_host_info DataThunderSlbTemplatePolicyForwardPolicySourceStats#no_host_info}
  */
  readonly noHostInfo?: number;
}

export function dataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsToTerraform(struct?: DataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsOutputReference | DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_match_not_found: cdktf.numberToTerraform(struct!.destinationMatchNotFound),
    hits: cdktf.numberToTerraform(struct!.hits),
    no_host_info: cdktf.numberToTerraform(struct!.noHostInfo),
  }
}


export function dataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsToHclTerraform(struct?: DataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsOutputReference | DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_match_not_found: {
      value: cdktf.numberToHclTerraform(struct!.destinationMatchNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_host_info: {
      value: cdktf.numberToHclTerraform(struct!.noHostInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationMatchNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMatchNotFound = this._destinationMatchNotFound;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._noHostInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHostInfo = this._noHostInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationMatchNotFound = undefined;
      this._hits = undefined;
      this._noHostInfo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationMatchNotFound = value.destinationMatchNotFound;
      this._hits = value.hits;
      this._noHostInfo = value.noHostInfo;
    }
  }

  // destination_match_not_found - computed: false, optional: true, required: false
  private _destinationMatchNotFound?: number; 
  public get destinationMatchNotFound() {
    return this.getNumberAttribute('destination_match_not_found');
  }
  public set destinationMatchNotFound(value: number) {
    this._destinationMatchNotFound = value;
  }
  public resetDestinationMatchNotFound() {
    this._destinationMatchNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMatchNotFoundInput() {
    return this._destinationMatchNotFound;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // no_host_info - computed: false, optional: true, required: false
  private _noHostInfo?: number; 
  public get noHostInfo() {
    return this.getNumberAttribute('no_host_info');
  }
  public set noHostInfo(value: number) {
    this._noHostInfo = value;
  }
  public resetNoHostInfo() {
    this._noHostInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHostInfoInput() {
    return this._noHostInfo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats thunder_slb_template_policy_forward_policy_source_stats}
*/
export class DataThunderSlbTemplatePolicyForwardPolicySourceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_source_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplatePolicyForwardPolicySourceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplatePolicyForwardPolicySourceStats to import
  * @param importFromId The id of the existing DataThunderSlbTemplatePolicyForwardPolicySourceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplatePolicyForwardPolicySourceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_source_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_stats thunder_slb_template_policy_forward_policy_source_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplatePolicyForwardPolicySourceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplatePolicyForwardPolicySourceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_source_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._policyName = config.policyName;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbTemplatePolicyForwardPolicySourceStatsStats) {
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
      policy_name: cdktf.stringToTerraform(this._policyName),
      stats: dataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsToTerraform(this._stats.internalValue),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplatePolicyForwardPolicySourceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
