// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeCloudRiskFindingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * FQL filter string. Supported fields: `account_id`, `account_name`, `asset_gcrn`, `asset_id`, `asset_name`, `asset_region`, `asset_type`, `cloud_group`, `cloud_provider`, `first_seen`, `last_seen`, `resolved_at`, `risk_factor`, `rule_id`, `rule_name`, `service_category`, `severity`, `status`, `suppressed_by`, `suppressed_reason`, `tags`. Example: `severity:'High'+status:'open'`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings#filter DataCrowdstrikeCloudRiskFindings#filter}
  */
  readonly filter?: string;
  /**
  * The field to sort on. Use `.asc` or `.desc` suffix to specify sort direction. Supported fields: `account_id`, `account_name`, `asset_id`, `asset_name`, `asset_region`, `asset_type`, `cloud_provider`, `first_seen`, `last_seen`, `resolved_at`, `rule_name`, `service_category`, `severity`, `status`. Example: `first_seen.desc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings#sort DataCrowdstrikeCloudRiskFindings#sort}
  */
  readonly sort?: string;
}
export interface DataCrowdstrikeCloudRiskFindingsRisks {
}

export function dataCrowdstrikeCloudRiskFindingsRisksToTerraform(struct?: DataCrowdstrikeCloudRiskFindingsRisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeCloudRiskFindingsRisksToHclTerraform(struct?: DataCrowdstrikeCloudRiskFindingsRisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeCloudRiskFindingsRisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCrowdstrikeCloudRiskFindingsRisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeCloudRiskFindingsRisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // asset_gcrn - computed: true, optional: false, required: false
  public get assetGcrn() {
    return this.getStringAttribute('asset_gcrn');
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // asset_name - computed: true, optional: false, required: false
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }

  // asset_region - computed: true, optional: false, required: false
  public get assetRegion() {
    return this.getStringAttribute('asset_region');
  }

  // asset_tags - computed: true, optional: false, required: false
  public get assetTags() {
    return this.getListAttribute('asset_tags');
  }

  // asset_type - computed: true, optional: false, required: false
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }

  // cloud_groups - computed: true, optional: false, required: false
  public get cloudGroups() {
    return this.getListAttribute('cloud_groups');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // first_seen - computed: true, optional: false, required: false
  public get firstSeen() {
    return this.getStringAttribute('first_seen');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // resolved_at - computed: true, optional: false, required: false
  public get resolvedAt() {
    return this.getStringAttribute('resolved_at');
  }

  // rule_description - computed: true, optional: false, required: false
  public get ruleDescription() {
    return this.getStringAttribute('rule_description');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // service_category - computed: true, optional: false, required: false
  public get serviceCategory() {
    return this.getStringAttribute('service_category');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCrowdstrikeCloudRiskFindingsRisksList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeCloudRiskFindingsRisksOutputReference {
    return new DataCrowdstrikeCloudRiskFindingsRisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings crowdstrike_cloud_risk_findings}
*/
export class DataCrowdstrikeCloudRiskFindings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_risk_findings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeCloudRiskFindings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeCloudRiskFindings to import
  * @param importFromId The id of the existing DataCrowdstrikeCloudRiskFindings that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeCloudRiskFindings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_risk_findings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/data-sources/cloud_risk_findings crowdstrike_cloud_risk_findings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeCloudRiskFindingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeCloudRiskFindingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_risk_findings',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.50',
        providerVersionConstraint: '0.0.50'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // risks - computed: true, optional: false, required: false
  private _risks = new DataCrowdstrikeCloudRiskFindingsRisksList(this, "risks", true);
  public get risks() {
    return this._risks;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
