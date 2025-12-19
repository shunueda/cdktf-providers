// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#id DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#policy_name DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#policy_name}
  */
  readonly policyName: string;
  /**
  * Source_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#source_name DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#source_name}
  */
  readonly sourceName: string;
  /**
  * Destination Web Category List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#web_category_list DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#web_category_list}
  */
  readonly webCategoryList: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#stats DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#stats}
  */
  readonly stats?: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats;
}
export interface DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats {
  /**
  * Number of requests matching this destination rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#hits DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsToTerraform(struct?: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsOutputReference | DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsToHclTerraform(struct?: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsOutputReference | DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats thunder_slb_template_policy_forward_policy_source_destination_web_category_list_stats}
*/
export class DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_source_destination_web_category_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats to import
  * @param importFromId The id of the existing DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_source_destination_web_category_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_template_policy_forward_policy_source_destination_web_category_list_stats thunder_slb_template_policy_forward_policy_source_destination_web_category_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_source_destination_web_category_list_stats',
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
    this._policyName = config.policyName;
    this._sourceName = config.sourceName;
    this._webCategoryList = config.webCategoryList;
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

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // web_category_list - computed: false, optional: false, required: true
  private _webCategoryList?: string; 
  public get webCategoryList() {
    return this.getStringAttribute('web_category_list');
  }
  public set webCategoryList(value: string) {
    this._webCategoryList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListInput() {
    return this._webCategoryList;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStats) {
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
      policy_name: cdktf.stringToTerraform(this._policyName),
      source_name: cdktf.stringToTerraform(this._sourceName),
      web_category_list: cdktf.stringToTerraform(this._webCategoryList),
      stats: dataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsToTerraform(this._stats.internalValue),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_category_list: {
        value: cdktf.stringToHclTerraform(this._webCategoryList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
