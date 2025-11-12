// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntEntitlementTypeDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store sensitive attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#authenticate DataSaviyntEntitlementTypeDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The endpoint name associated with the entitlement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#endpoint_name DataSaviyntEntitlementTypeDatasource#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * The name of the entitlement type to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#entitlement_name DataSaviyntEntitlementTypeDatasource#entitlement_name}
  */
  readonly entitlementName?: string;
  /**
  * Maximum number of entitlement types to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#max DataSaviyntEntitlementTypeDatasource#max}
  */
  readonly max?: string;
  /**
  * Pagination offset for retrieving entitlement types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#offset DataSaviyntEntitlementTypeDatasource#offset}
  */
  readonly offset?: string;
}
export interface DataSaviyntEntitlementTypeDatasourceResults {
}

export function dataSaviyntEntitlementTypeDatasourceResultsToTerraform(struct?: DataSaviyntEntitlementTypeDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntEntitlementTypeDatasourceResultsToHclTerraform(struct?: DataSaviyntEntitlementTypeDatasourceResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntEntitlementTypeDatasourceResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSaviyntEntitlementTypeDatasourceResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEntitlementTypeDatasourceResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ars_requestable_entitlement_sql_query - computed: true, optional: false, required: false
  public get arsRequestableEntitlementSqlQuery() {
    return this.getStringAttribute('ars_requestable_entitlement_sql_query');
  }

  // ars_selected_entitlement_sql_query - computed: true, optional: false, required: false
  public get arsSelectedEntitlementSqlQuery() {
    return this.getStringAttribute('ars_selected_entitlement_sql_query');
  }

  // available_query_service_account - computed: true, optional: false, required: false
  public get availableQueryServiceAccount() {
    return this.getStringAttribute('available_query_service_account');
  }

  // certifiable - computed: true, optional: false, required: false
  public get certifiable() {
    return this.getStringAttribute('certifiable');
  }

  // create_task_action - computed: true, optional: false, required: false
  public get createTaskAction() {
    return this.getStringAttribute('create_task_action');
  }

  // customproperty10_label - computed: true, optional: false, required: false
  public get customproperty10Label() {
    return this.getStringAttribute('customproperty10_label');
  }

  // customproperty11_label - computed: true, optional: false, required: false
  public get customproperty11Label() {
    return this.getStringAttribute('customproperty11_label');
  }

  // customproperty12_label - computed: true, optional: false, required: false
  public get customproperty12Label() {
    return this.getStringAttribute('customproperty12_label');
  }

  // customproperty13_label - computed: true, optional: false, required: false
  public get customproperty13Label() {
    return this.getStringAttribute('customproperty13_label');
  }

  // customproperty14_label - computed: true, optional: false, required: false
  public get customproperty14Label() {
    return this.getStringAttribute('customproperty14_label');
  }

  // customproperty15_label - computed: true, optional: false, required: false
  public get customproperty15Label() {
    return this.getStringAttribute('customproperty15_label');
  }

  // customproperty16_label - computed: true, optional: false, required: false
  public get customproperty16Label() {
    return this.getStringAttribute('customproperty16_label');
  }

  // customproperty17_label - computed: true, optional: false, required: false
  public get customproperty17Label() {
    return this.getStringAttribute('customproperty17_label');
  }

  // customproperty18_label - computed: true, optional: false, required: false
  public get customproperty18Label() {
    return this.getStringAttribute('customproperty18_label');
  }

  // customproperty19_label - computed: true, optional: false, required: false
  public get customproperty19Label() {
    return this.getStringAttribute('customproperty19_label');
  }

  // customproperty1_label - computed: true, optional: false, required: false
  public get customproperty1Label() {
    return this.getStringAttribute('customproperty1_label');
  }

  // customproperty20_label - computed: true, optional: false, required: false
  public get customproperty20Label() {
    return this.getStringAttribute('customproperty20_label');
  }

  // customproperty21_label - computed: true, optional: false, required: false
  public get customproperty21Label() {
    return this.getStringAttribute('customproperty21_label');
  }

  // customproperty22_label - computed: true, optional: false, required: false
  public get customproperty22Label() {
    return this.getStringAttribute('customproperty22_label');
  }

  // customproperty23_label - computed: true, optional: false, required: false
  public get customproperty23Label() {
    return this.getStringAttribute('customproperty23_label');
  }

  // customproperty24_label - computed: true, optional: false, required: false
  public get customproperty24Label() {
    return this.getStringAttribute('customproperty24_label');
  }

  // customproperty25_label - computed: true, optional: false, required: false
  public get customproperty25Label() {
    return this.getStringAttribute('customproperty25_label');
  }

  // customproperty26_label - computed: true, optional: false, required: false
  public get customproperty26Label() {
    return this.getStringAttribute('customproperty26_label');
  }

  // customproperty27_label - computed: true, optional: false, required: false
  public get customproperty27Label() {
    return this.getStringAttribute('customproperty27_label');
  }

  // customproperty28_label - computed: true, optional: false, required: false
  public get customproperty28Label() {
    return this.getStringAttribute('customproperty28_label');
  }

  // customproperty29_label - computed: true, optional: false, required: false
  public get customproperty29Label() {
    return this.getStringAttribute('customproperty29_label');
  }

  // customproperty2_label - computed: true, optional: false, required: false
  public get customproperty2Label() {
    return this.getStringAttribute('customproperty2_label');
  }

  // customproperty30_label - computed: true, optional: false, required: false
  public get customproperty30Label() {
    return this.getStringAttribute('customproperty30_label');
  }

  // customproperty31_label - computed: true, optional: false, required: false
  public get customproperty31Label() {
    return this.getStringAttribute('customproperty31_label');
  }

  // customproperty32_label - computed: true, optional: false, required: false
  public get customproperty32Label() {
    return this.getStringAttribute('customproperty32_label');
  }

  // customproperty33_label - computed: true, optional: false, required: false
  public get customproperty33Label() {
    return this.getStringAttribute('customproperty33_label');
  }

  // customproperty34_label - computed: true, optional: false, required: false
  public get customproperty34Label() {
    return this.getStringAttribute('customproperty34_label');
  }

  // customproperty35_label - computed: true, optional: false, required: false
  public get customproperty35Label() {
    return this.getStringAttribute('customproperty35_label');
  }

  // customproperty36_label - computed: true, optional: false, required: false
  public get customproperty36Label() {
    return this.getStringAttribute('customproperty36_label');
  }

  // customproperty37_label - computed: true, optional: false, required: false
  public get customproperty37Label() {
    return this.getStringAttribute('customproperty37_label');
  }

  // customproperty38_label - computed: true, optional: false, required: false
  public get customproperty38Label() {
    return this.getStringAttribute('customproperty38_label');
  }

  // customproperty39_label - computed: true, optional: false, required: false
  public get customproperty39Label() {
    return this.getStringAttribute('customproperty39_label');
  }

  // customproperty3_label - computed: true, optional: false, required: false
  public get customproperty3Label() {
    return this.getStringAttribute('customproperty3_label');
  }

  // customproperty40_label - computed: true, optional: false, required: false
  public get customproperty40Label() {
    return this.getStringAttribute('customproperty40_label');
  }

  // customproperty4_label - computed: true, optional: false, required: false
  public get customproperty4Label() {
    return this.getStringAttribute('customproperty4_label');
  }

  // customproperty5_label - computed: true, optional: false, required: false
  public get customproperty5Label() {
    return this.getStringAttribute('customproperty5_label');
  }

  // customproperty6_label - computed: true, optional: false, required: false
  public get customproperty6Label() {
    return this.getStringAttribute('customproperty6_label');
  }

  // customproperty7_label - computed: true, optional: false, required: false
  public get customproperty7Label() {
    return this.getStringAttribute('customproperty7_label');
  }

  // customproperty8_label - computed: true, optional: false, required: false
  public get customproperty8Label() {
    return this.getStringAttribute('customproperty8_label');
  }

  // customproperty9_label - computed: true, optional: false, required: false
  public get customproperty9Label() {
    return this.getStringAttribute('customproperty9_label');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enable_entitlement_to_role_sync - computed: true, optional: false, required: false
  public get enableEntitlementToRoleSync() {
    return this.getBooleanAttribute('enable_entitlement_to_role_sync');
  }

  // enable_provisioning_priority - computed: true, optional: false, required: false
  public get enableProvisioningPriority() {
    return this.getStringAttribute('enable_provisioning_priority');
  }

  // endpoint_key - computed: true, optional: false, required: false
  public get endpointKey() {
    return this.getNumberAttribute('endpoint_key');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // entitlement_description - computed: true, optional: false, required: false
  public get entitlementDescription() {
    return this.getStringAttribute('entitlement_description');
  }

  // entitlement_name - computed: true, optional: false, required: false
  public get entitlementName() {
    return this.getStringAttribute('entitlement_name');
  }

  // entitlement_type_key - computed: true, optional: false, required: false
  public get entitlementTypeKey() {
    return this.getNumberAttribute('entitlement_type_key');
  }

  // exclude_rule_assigned_ents_in_request - computed: true, optional: false, required: false
  public get excludeRuleAssignedEntsInRequest() {
    return this.getStringAttribute('exclude_rule_assigned_ents_in_request');
  }

  // hierarchy_required - computed: true, optional: false, required: false
  public get hierarchyRequired() {
    return this.getStringAttribute('hierarchy_required');
  }

  // order_index - computed: true, optional: false, required: false
  public get orderIndex() {
    return this.getStringAttribute('order_index');
  }

  // recon - computed: true, optional: false, required: false
  public get recon() {
    return this.getStringAttribute('recon');
  }

  // request_dates_conf_json - computed: true, optional: false, required: false
  public get requestDatesConfJson() {
    return this.getStringAttribute('request_dates_conf_json');
  }

  // request_option - computed: true, optional: false, required: false
  public get requestOption() {
    return this.getStringAttribute('request_option');
  }

  // required_in_request - computed: true, optional: false, required: false
  public get requiredInRequest() {
    return this.getStringAttribute('required_in_request');
  }

  // required_in_service_request - computed: true, optional: false, required: false
  public get requiredInServiceRequest() {
    return this.getStringAttribute('required_in_service_request');
  }

  // security_system - computed: true, optional: false, required: false
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }

  // selected_query_service_account - computed: true, optional: false, required: false
  public get selectedQueryServiceAccount() {
    return this.getStringAttribute('selected_query_service_account');
  }

  // show_ent_type_on - computed: true, optional: false, required: false
  public get showEntTypeOn() {
    return this.getStringAttribute('show_ent_type_on');
  }

  // show_on_child - computed: true, optional: false, required: false
  public get showOnChild() {
    return this.getStringAttribute('show_on_child');
  }

  // workflow - computed: true, optional: false, required: false
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
}

export class DataSaviyntEntitlementTypeDatasourceResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataSaviyntEntitlementTypeDatasourceResultsOutputReference {
    return new DataSaviyntEntitlementTypeDatasourceResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource saviynt_entitlement_type_datasource}
*/
export class DataSaviyntEntitlementTypeDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entitlement_type_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntEntitlementTypeDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntEntitlementTypeDatasource to import
  * @param importFromId The id of the existing DataSaviyntEntitlementTypeDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntEntitlementTypeDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entitlement_type_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/data-sources/entitlement_type_datasource saviynt_entitlement_type_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntEntitlementTypeDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntEntitlementTypeDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entitlement_type_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticate = config.authenticate;
    this._endpointName = config.endpointName;
    this._entitlementName = config.entitlementName;
    this._max = config.max;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // display_count - computed: true, optional: false, required: false
  public get displayCount() {
    return this.getNumberAttribute('display_count');
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // entitlement_name - computed: false, optional: true, required: false
  private _entitlementName?: string; 
  public get entitlementName() {
    return this.getStringAttribute('entitlement_name');
  }
  public set entitlementName(value: string) {
    this._entitlementName = value;
  }
  public resetEntitlementName() {
    this._entitlementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementNameInput() {
    return this._entitlementName;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataSaviyntEntitlementTypeDatasourceResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      entitlement_name: cdktf.stringToTerraform(this._entitlementName),
      max: cdktf.stringToTerraform(this._max),
      offset: cdktf.stringToTerraform(this._offset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement_name: {
        value: cdktf.stringToHclTerraform(this._entitlementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.stringToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.stringToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
