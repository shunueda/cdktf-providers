// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterIssuesEnrichmentDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * entity_type header parameter. Issue enrichment details can be fetched based on either Issue ID or Client MAC address. This parameter value must either be issue_id/mac_address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details#entity_type DataDnacenterIssuesEnrichmentDetails#entity_type}
  */
  readonly entityType: string;
  /**
  * entity_value header parameter. Contains the actual value for the entity type that has been defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details#entity_value DataDnacenterIssuesEnrichmentDetails#entity_value}
  */
  readonly entityValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details#id DataDnacenterIssuesEnrichmentDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActions {
}

export function dataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsToTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsToHclTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getListAttribute('steps');
  }
}

export class DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsOutputReference {
    return new DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterIssuesEnrichmentDetailsItemIssue {
}

export function dataDnacenterIssuesEnrichmentDetailsItemIssueToTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItemIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterIssuesEnrichmentDetailsItemIssueToHclTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItemIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterIssuesEnrichmentDetailsItemIssueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterIssuesEnrichmentDetailsItemIssue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterIssuesEnrichmentDetailsItemIssue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impacted_hosts - computed: true, optional: false, required: false
  public get impactedHosts() {
    return this.getListAttribute('impacted_hosts');
  }

  // issue_category - computed: true, optional: false, required: false
  public get issueCategory() {
    return this.getStringAttribute('issue_category');
  }

  // issue_description - computed: true, optional: false, required: false
  public get issueDescription() {
    return this.getStringAttribute('issue_description');
  }

  // issue_entity - computed: true, optional: false, required: false
  public get issueEntity() {
    return this.getStringAttribute('issue_entity');
  }

  // issue_entity_value - computed: true, optional: false, required: false
  public get issueEntityValue() {
    return this.getStringAttribute('issue_entity_value');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }

  // issue_name - computed: true, optional: false, required: false
  public get issueName() {
    return this.getStringAttribute('issue_name');
  }

  // issue_priority - computed: true, optional: false, required: false
  public get issuePriority() {
    return this.getStringAttribute('issue_priority');
  }

  // issue_severity - computed: true, optional: false, required: false
  public get issueSeverity() {
    return this.getStringAttribute('issue_severity');
  }

  // issue_source - computed: true, optional: false, required: false
  public get issueSource() {
    return this.getStringAttribute('issue_source');
  }

  // issue_summary - computed: true, optional: false, required: false
  public get issueSummary() {
    return this.getStringAttribute('issue_summary');
  }

  // issue_timestamp - computed: true, optional: false, required: false
  public get issueTimestamp() {
    return this.getNumberAttribute('issue_timestamp');
  }

  // suggested_actions - computed: true, optional: false, required: false
  private _suggestedActions = new DataDnacenterIssuesEnrichmentDetailsItemIssueSuggestedActionsList(this, "suggested_actions", false);
  public get suggestedActions() {
    return this._suggestedActions;
  }
}

export class DataDnacenterIssuesEnrichmentDetailsItemIssueList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterIssuesEnrichmentDetailsItemIssueOutputReference {
    return new DataDnacenterIssuesEnrichmentDetailsItemIssueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterIssuesEnrichmentDetailsItem {
}

export function dataDnacenterIssuesEnrichmentDetailsItemToTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterIssuesEnrichmentDetailsItemToHclTerraform(struct?: DataDnacenterIssuesEnrichmentDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterIssuesEnrichmentDetailsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterIssuesEnrichmentDetailsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterIssuesEnrichmentDetailsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issue - computed: true, optional: false, required: false
  private _issue = new DataDnacenterIssuesEnrichmentDetailsItemIssueList(this, "issue", false);
  public get issue() {
    return this._issue;
  }
}

export class DataDnacenterIssuesEnrichmentDetailsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterIssuesEnrichmentDetailsItemOutputReference {
    return new DataDnacenterIssuesEnrichmentDetailsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details dnacenter_issues_enrichment_details}
*/
export class DataDnacenterIssuesEnrichmentDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_issues_enrichment_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterIssuesEnrichmentDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterIssuesEnrichmentDetails to import
  * @param importFromId The id of the existing DataDnacenterIssuesEnrichmentDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterIssuesEnrichmentDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_issues_enrichment_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/issues_enrichment_details dnacenter_issues_enrichment_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterIssuesEnrichmentDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterIssuesEnrichmentDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_issues_enrichment_details',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityType = config.entityType;
    this._entityValue = config.entityValue;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // entity_value - computed: false, optional: false, required: true
  private _entityValue?: string; 
  public get entityValue() {
    return this.getStringAttribute('entity_value');
  }
  public set entityValue(value: string) {
    this._entityValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityValueInput() {
    return this._entityValue;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterIssuesEnrichmentDetailsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_type: cdktf.stringToTerraform(this._entityType),
      entity_value: cdktf.stringToTerraform(this._entityValue),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_value: {
        value: cdktf.stringToHclTerraform(this._entityValue),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
