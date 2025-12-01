// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementTypeResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow user to remove all entitlements in one request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#allow_remove_all_entitlement_in_request EntitlementTypeResource#allow_remove_all_entitlement_in_request}
  */
  readonly allowRemoveAllEntitlementInRequest?: string;
  /**
  * Query used to determine requestable entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#ars_requestable_entitlement_query EntitlementTypeResource#ars_requestable_entitlement_query}
  */
  readonly arsRequestableEntitlementQuery?: string;
  /**
  * Query used to determine selected entitlements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#ars_selected_entitlement_query EntitlementTypeResource#ars_selected_entitlement_query}
  */
  readonly arsSelectedEntitlementQuery?: string;
  /**
  * Query to fetch available service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#available_query_service_account EntitlementTypeResource#available_query_service_account}
  */
  readonly availableQueryServiceAccount?: string;
  /**
  * Indicates if the entitlement is certifiable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#certifiable EntitlementTypeResource#certifiable}
  */
  readonly certifiable?: boolean | cdktf.IResolvable;
  /**
  * Action(s) to be performed when a task is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#create_task_action EntitlementTypeResource#create_task_action}
  */
  readonly createTaskAction?: string[];
  /**
  * Custom property 1 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property1 EntitlementTypeResource#custom_property1}
  */
  readonly customProperty1?: string;
  /**
  * Custom property 10 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property10 EntitlementTypeResource#custom_property10}
  */
  readonly customProperty10?: string;
  /**
  * Custom property 11 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property11 EntitlementTypeResource#custom_property11}
  */
  readonly customProperty11?: string;
  /**
  * Custom property 12 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property12 EntitlementTypeResource#custom_property12}
  */
  readonly customProperty12?: string;
  /**
  * Custom property 13 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property13 EntitlementTypeResource#custom_property13}
  */
  readonly customProperty13?: string;
  /**
  * Custom property 14 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property14 EntitlementTypeResource#custom_property14}
  */
  readonly customProperty14?: string;
  /**
  * Custom property 15 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property15 EntitlementTypeResource#custom_property15}
  */
  readonly customProperty15?: string;
  /**
  * Custom property 16 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property16 EntitlementTypeResource#custom_property16}
  */
  readonly customProperty16?: string;
  /**
  * Custom property 17 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property17 EntitlementTypeResource#custom_property17}
  */
  readonly customProperty17?: string;
  /**
  * Custom property 18 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property18 EntitlementTypeResource#custom_property18}
  */
  readonly customProperty18?: string;
  /**
  * Custom property 19 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property19 EntitlementTypeResource#custom_property19}
  */
  readonly customProperty19?: string;
  /**
  * Custom property 2 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property2 EntitlementTypeResource#custom_property2}
  */
  readonly customProperty2?: string;
  /**
  * Custom property 20 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property20 EntitlementTypeResource#custom_property20}
  */
  readonly customProperty20?: string;
  /**
  * Custom property 21 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property21 EntitlementTypeResource#custom_property21}
  */
  readonly customProperty21?: string;
  /**
  * Custom property 22 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property22 EntitlementTypeResource#custom_property22}
  */
  readonly customProperty22?: string;
  /**
  * Custom property 23 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property23 EntitlementTypeResource#custom_property23}
  */
  readonly customProperty23?: string;
  /**
  * Custom property 24 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property24 EntitlementTypeResource#custom_property24}
  */
  readonly customProperty24?: string;
  /**
  * Custom property 25 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property25 EntitlementTypeResource#custom_property25}
  */
  readonly customProperty25?: string;
  /**
  * Custom property 26 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property26 EntitlementTypeResource#custom_property26}
  */
  readonly customProperty26?: string;
  /**
  * Custom property 27 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property27 EntitlementTypeResource#custom_property27}
  */
  readonly customProperty27?: string;
  /**
  * Custom property 28 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property28 EntitlementTypeResource#custom_property28}
  */
  readonly customProperty28?: string;
  /**
  * Custom property 29 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property29 EntitlementTypeResource#custom_property29}
  */
  readonly customProperty29?: string;
  /**
  * Custom property 3 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property3 EntitlementTypeResource#custom_property3}
  */
  readonly customProperty3?: string;
  /**
  * Custom property 30 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property30 EntitlementTypeResource#custom_property30}
  */
  readonly customProperty30?: string;
  /**
  * Custom property 31 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property31 EntitlementTypeResource#custom_property31}
  */
  readonly customProperty31?: string;
  /**
  * Custom property 32 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property32 EntitlementTypeResource#custom_property32}
  */
  readonly customProperty32?: string;
  /**
  * Custom property 33 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property33 EntitlementTypeResource#custom_property33}
  */
  readonly customProperty33?: string;
  /**
  * Custom property 34 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property34 EntitlementTypeResource#custom_property34}
  */
  readonly customProperty34?: string;
  /**
  * Custom property 35 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property35 EntitlementTypeResource#custom_property35}
  */
  readonly customProperty35?: string;
  /**
  * Custom property 36 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property36 EntitlementTypeResource#custom_property36}
  */
  readonly customProperty36?: string;
  /**
  * Custom property 37 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property37 EntitlementTypeResource#custom_property37}
  */
  readonly customProperty37?: string;
  /**
  * Custom property 38 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property38 EntitlementTypeResource#custom_property38}
  */
  readonly customProperty38?: string;
  /**
  * Custom property 39 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property39 EntitlementTypeResource#custom_property39}
  */
  readonly customProperty39?: string;
  /**
  * Custom property 4 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property4 EntitlementTypeResource#custom_property4}
  */
  readonly customProperty4?: string;
  /**
  * Custom property 40 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property40 EntitlementTypeResource#custom_property40}
  */
  readonly customProperty40?: string;
  /**
  * Custom property 5 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property5 EntitlementTypeResource#custom_property5}
  */
  readonly customProperty5?: string;
  /**
  * Custom property 6 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property6 EntitlementTypeResource#custom_property6}
  */
  readonly customProperty6?: string;
  /**
  * Custom property 7 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property7 EntitlementTypeResource#custom_property7}
  */
  readonly customProperty7?: string;
  /**
  * Custom property 8 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property8 EntitlementTypeResource#custom_property8}
  */
  readonly customProperty8?: string;
  /**
  * Custom property 9 associated with the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#custom_property9 EntitlementTypeResource#custom_property9}
  */
  readonly customProperty9?: string;
  /**
  * Display name for the entitlement type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#display_name EntitlementTypeResource#display_name}
  */
  readonly displayName?: string;
  /**
  * Enable entitlement to role sync. Can only be set to true when workflow is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#enable_entitlement_to_role_sync EntitlementTypeResource#enable_entitlement_to_role_sync}
  */
  readonly enableEntitlementToRoleSync?: boolean | cdktf.IResolvable;
  /**
  * Enable provisioning priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#enable_provisioning_priority EntitlementTypeResource#enable_provisioning_priority}
  */
  readonly enableProvisioningPriority?: boolean | cdktf.IResolvable;
  /**
  * Name of the endpoint with which the entitlement type is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#endpoint_name EntitlementTypeResource#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Description for the entitlement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#entitlement_description EntitlementTypeResource#entitlement_description}
  */
  readonly entitlementDescription?: string;
  /**
  * Name of the entitlement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#entitlement_name EntitlementTypeResource#entitlement_name}
  */
  readonly entitlementName: string;
  /**
  * Exclude Entitlements Assigned via Rule while Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#exclude_rule_assgn_ents_in_req EntitlementTypeResource#exclude_rule_assgn_ents_in_req}
  */
  readonly excludeRuleAssgnEntsInReq?: boolean | cdktf.IResolvable;
  /**
  * Flag indicating if a hierarchy is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#hierarchy_required EntitlementTypeResource#hierarchy_required}
  */
  readonly hierarchyRequired?: string;
  /**
  * Index to determine the order of processing or display.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#order_index EntitlementTypeResource#order_index}
  */
  readonly orderIndex?: number;
  /**
  * Recon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#recon EntitlementTypeResource#recon}
  */
  readonly recon?: boolean | cdktf.IResolvable;
  /**
  * Configuration in JSON for handling request dates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#request_dates_conf_json EntitlementTypeResource#request_dates_conf_json}
  */
  readonly requestDatesConfJson?: string;
  /**
  * Defines how the entitlement should be presented or requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#request_option EntitlementTypeResource#request_option}
  */
  readonly requestOption?: string;
  /**
  * Flag indicating if this field is required in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#required_in_request EntitlementTypeResource#required_in_request}
  */
  readonly requiredInRequest?: boolean | cdktf.IResolvable;
  /**
  * Flag indicating if this field is required in service request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#required_in_service_request EntitlementTypeResource#required_in_service_request}
  */
  readonly requiredInServiceRequest?: boolean | cdktf.IResolvable;
  /**
  * Query to fetch selected service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#selected_query_service_account EntitlementTypeResource#selected_query_service_account}
  */
  readonly selectedQueryServiceAccount?: string;
  /**
  * Show entitlement type on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#show_ent_type_on EntitlementTypeResource#show_ent_type_on}
  */
  readonly showEntTypeOn?: string;
  /**
  * Include start date in revoke requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#start_date_in_revoke_request EntitlementTypeResource#start_date_in_revoke_request}
  */
  readonly startDateInRevokeRequest?: string;
  /**
  * Include both start and end dates in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#start_end_date_in_request EntitlementTypeResource#start_end_date_in_request}
  */
  readonly startEndDateInRequest?: string;
  /**
  * Workflow associated with the entitlement type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#workflow EntitlementTypeResource#workflow}
  */
  readonly workflow?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource saviynt_entitlement_type_resource}
*/
export class EntitlementTypeResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entitlement_type_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntitlementTypeResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntitlementTypeResource to import
  * @param importFromId The id of the existing EntitlementTypeResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntitlementTypeResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entitlement_type_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/entitlement_type_resource saviynt_entitlement_type_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementTypeResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementTypeResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entitlement_type_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRemoveAllEntitlementInRequest = config.allowRemoveAllEntitlementInRequest;
    this._arsRequestableEntitlementQuery = config.arsRequestableEntitlementQuery;
    this._arsSelectedEntitlementQuery = config.arsSelectedEntitlementQuery;
    this._availableQueryServiceAccount = config.availableQueryServiceAccount;
    this._certifiable = config.certifiable;
    this._createTaskAction = config.createTaskAction;
    this._customProperty1 = config.customProperty1;
    this._customProperty10 = config.customProperty10;
    this._customProperty11 = config.customProperty11;
    this._customProperty12 = config.customProperty12;
    this._customProperty13 = config.customProperty13;
    this._customProperty14 = config.customProperty14;
    this._customProperty15 = config.customProperty15;
    this._customProperty16 = config.customProperty16;
    this._customProperty17 = config.customProperty17;
    this._customProperty18 = config.customProperty18;
    this._customProperty19 = config.customProperty19;
    this._customProperty2 = config.customProperty2;
    this._customProperty20 = config.customProperty20;
    this._customProperty21 = config.customProperty21;
    this._customProperty22 = config.customProperty22;
    this._customProperty23 = config.customProperty23;
    this._customProperty24 = config.customProperty24;
    this._customProperty25 = config.customProperty25;
    this._customProperty26 = config.customProperty26;
    this._customProperty27 = config.customProperty27;
    this._customProperty28 = config.customProperty28;
    this._customProperty29 = config.customProperty29;
    this._customProperty3 = config.customProperty3;
    this._customProperty30 = config.customProperty30;
    this._customProperty31 = config.customProperty31;
    this._customProperty32 = config.customProperty32;
    this._customProperty33 = config.customProperty33;
    this._customProperty34 = config.customProperty34;
    this._customProperty35 = config.customProperty35;
    this._customProperty36 = config.customProperty36;
    this._customProperty37 = config.customProperty37;
    this._customProperty38 = config.customProperty38;
    this._customProperty39 = config.customProperty39;
    this._customProperty4 = config.customProperty4;
    this._customProperty40 = config.customProperty40;
    this._customProperty5 = config.customProperty5;
    this._customProperty6 = config.customProperty6;
    this._customProperty7 = config.customProperty7;
    this._customProperty8 = config.customProperty8;
    this._customProperty9 = config.customProperty9;
    this._displayName = config.displayName;
    this._enableEntitlementToRoleSync = config.enableEntitlementToRoleSync;
    this._enableProvisioningPriority = config.enableProvisioningPriority;
    this._endpointName = config.endpointName;
    this._entitlementDescription = config.entitlementDescription;
    this._entitlementName = config.entitlementName;
    this._excludeRuleAssgnEntsInReq = config.excludeRuleAssgnEntsInReq;
    this._hierarchyRequired = config.hierarchyRequired;
    this._orderIndex = config.orderIndex;
    this._recon = config.recon;
    this._requestDatesConfJson = config.requestDatesConfJson;
    this._requestOption = config.requestOption;
    this._requiredInRequest = config.requiredInRequest;
    this._requiredInServiceRequest = config.requiredInServiceRequest;
    this._selectedQueryServiceAccount = config.selectedQueryServiceAccount;
    this._showEntTypeOn = config.showEntTypeOn;
    this._startDateInRevokeRequest = config.startDateInRevokeRequest;
    this._startEndDateInRequest = config.startEndDateInRequest;
    this._workflow = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_remove_all_entitlement_in_request - computed: true, optional: true, required: false
  private _allowRemoveAllEntitlementInRequest?: string; 
  public get allowRemoveAllEntitlementInRequest() {
    return this.getStringAttribute('allow_remove_all_entitlement_in_request');
  }
  public set allowRemoveAllEntitlementInRequest(value: string) {
    this._allowRemoveAllEntitlementInRequest = value;
  }
  public resetAllowRemoveAllEntitlementInRequest() {
    this._allowRemoveAllEntitlementInRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoveAllEntitlementInRequestInput() {
    return this._allowRemoveAllEntitlementInRequest;
  }

  // ars_requestable_entitlement_query - computed: true, optional: true, required: false
  private _arsRequestableEntitlementQuery?: string; 
  public get arsRequestableEntitlementQuery() {
    return this.getStringAttribute('ars_requestable_entitlement_query');
  }
  public set arsRequestableEntitlementQuery(value: string) {
    this._arsRequestableEntitlementQuery = value;
  }
  public resetArsRequestableEntitlementQuery() {
    this._arsRequestableEntitlementQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsRequestableEntitlementQueryInput() {
    return this._arsRequestableEntitlementQuery;
  }

  // ars_selected_entitlement_query - computed: true, optional: true, required: false
  private _arsSelectedEntitlementQuery?: string; 
  public get arsSelectedEntitlementQuery() {
    return this.getStringAttribute('ars_selected_entitlement_query');
  }
  public set arsSelectedEntitlementQuery(value: string) {
    this._arsSelectedEntitlementQuery = value;
  }
  public resetArsSelectedEntitlementQuery() {
    this._arsSelectedEntitlementQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsSelectedEntitlementQueryInput() {
    return this._arsSelectedEntitlementQuery;
  }

  // available_query_service_account - computed: true, optional: true, required: false
  private _availableQueryServiceAccount?: string; 
  public get availableQueryServiceAccount() {
    return this.getStringAttribute('available_query_service_account');
  }
  public set availableQueryServiceAccount(value: string) {
    this._availableQueryServiceAccount = value;
  }
  public resetAvailableQueryServiceAccount() {
    this._availableQueryServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableQueryServiceAccountInput() {
    return this._availableQueryServiceAccount;
  }

  // certifiable - computed: true, optional: true, required: false
  private _certifiable?: boolean | cdktf.IResolvable; 
  public get certifiable() {
    return this.getBooleanAttribute('certifiable');
  }
  public set certifiable(value: boolean | cdktf.IResolvable) {
    this._certifiable = value;
  }
  public resetCertifiable() {
    this._certifiable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certifiableInput() {
    return this._certifiable;
  }

  // create_task_action - computed: true, optional: true, required: false
  private _createTaskAction?: string[]; 
  public get createTaskAction() {
    return cdktf.Fn.tolist(this.getListAttribute('create_task_action'));
  }
  public set createTaskAction(value: string[]) {
    this._createTaskAction = value;
  }
  public resetCreateTaskAction() {
    this._createTaskAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTaskActionInput() {
    return this._createTaskAction;
  }

  // custom_property1 - computed: true, optional: true, required: false
  private _customProperty1?: string; 
  public get customProperty1() {
    return this.getStringAttribute('custom_property1');
  }
  public set customProperty1(value: string) {
    this._customProperty1 = value;
  }
  public resetCustomProperty1() {
    this._customProperty1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty1Input() {
    return this._customProperty1;
  }

  // custom_property10 - computed: true, optional: true, required: false
  private _customProperty10?: string; 
  public get customProperty10() {
    return this.getStringAttribute('custom_property10');
  }
  public set customProperty10(value: string) {
    this._customProperty10 = value;
  }
  public resetCustomProperty10() {
    this._customProperty10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty10Input() {
    return this._customProperty10;
  }

  // custom_property11 - computed: true, optional: true, required: false
  private _customProperty11?: string; 
  public get customProperty11() {
    return this.getStringAttribute('custom_property11');
  }
  public set customProperty11(value: string) {
    this._customProperty11 = value;
  }
  public resetCustomProperty11() {
    this._customProperty11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty11Input() {
    return this._customProperty11;
  }

  // custom_property12 - computed: true, optional: true, required: false
  private _customProperty12?: string; 
  public get customProperty12() {
    return this.getStringAttribute('custom_property12');
  }
  public set customProperty12(value: string) {
    this._customProperty12 = value;
  }
  public resetCustomProperty12() {
    this._customProperty12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty12Input() {
    return this._customProperty12;
  }

  // custom_property13 - computed: true, optional: true, required: false
  private _customProperty13?: string; 
  public get customProperty13() {
    return this.getStringAttribute('custom_property13');
  }
  public set customProperty13(value: string) {
    this._customProperty13 = value;
  }
  public resetCustomProperty13() {
    this._customProperty13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty13Input() {
    return this._customProperty13;
  }

  // custom_property14 - computed: true, optional: true, required: false
  private _customProperty14?: string; 
  public get customProperty14() {
    return this.getStringAttribute('custom_property14');
  }
  public set customProperty14(value: string) {
    this._customProperty14 = value;
  }
  public resetCustomProperty14() {
    this._customProperty14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty14Input() {
    return this._customProperty14;
  }

  // custom_property15 - computed: true, optional: true, required: false
  private _customProperty15?: string; 
  public get customProperty15() {
    return this.getStringAttribute('custom_property15');
  }
  public set customProperty15(value: string) {
    this._customProperty15 = value;
  }
  public resetCustomProperty15() {
    this._customProperty15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty15Input() {
    return this._customProperty15;
  }

  // custom_property16 - computed: true, optional: true, required: false
  private _customProperty16?: string; 
  public get customProperty16() {
    return this.getStringAttribute('custom_property16');
  }
  public set customProperty16(value: string) {
    this._customProperty16 = value;
  }
  public resetCustomProperty16() {
    this._customProperty16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty16Input() {
    return this._customProperty16;
  }

  // custom_property17 - computed: true, optional: true, required: false
  private _customProperty17?: string; 
  public get customProperty17() {
    return this.getStringAttribute('custom_property17');
  }
  public set customProperty17(value: string) {
    this._customProperty17 = value;
  }
  public resetCustomProperty17() {
    this._customProperty17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty17Input() {
    return this._customProperty17;
  }

  // custom_property18 - computed: true, optional: true, required: false
  private _customProperty18?: string; 
  public get customProperty18() {
    return this.getStringAttribute('custom_property18');
  }
  public set customProperty18(value: string) {
    this._customProperty18 = value;
  }
  public resetCustomProperty18() {
    this._customProperty18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty18Input() {
    return this._customProperty18;
  }

  // custom_property19 - computed: true, optional: true, required: false
  private _customProperty19?: string; 
  public get customProperty19() {
    return this.getStringAttribute('custom_property19');
  }
  public set customProperty19(value: string) {
    this._customProperty19 = value;
  }
  public resetCustomProperty19() {
    this._customProperty19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty19Input() {
    return this._customProperty19;
  }

  // custom_property2 - computed: true, optional: true, required: false
  private _customProperty2?: string; 
  public get customProperty2() {
    return this.getStringAttribute('custom_property2');
  }
  public set customProperty2(value: string) {
    this._customProperty2 = value;
  }
  public resetCustomProperty2() {
    this._customProperty2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty2Input() {
    return this._customProperty2;
  }

  // custom_property20 - computed: true, optional: true, required: false
  private _customProperty20?: string; 
  public get customProperty20() {
    return this.getStringAttribute('custom_property20');
  }
  public set customProperty20(value: string) {
    this._customProperty20 = value;
  }
  public resetCustomProperty20() {
    this._customProperty20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty20Input() {
    return this._customProperty20;
  }

  // custom_property21 - computed: true, optional: true, required: false
  private _customProperty21?: string; 
  public get customProperty21() {
    return this.getStringAttribute('custom_property21');
  }
  public set customProperty21(value: string) {
    this._customProperty21 = value;
  }
  public resetCustomProperty21() {
    this._customProperty21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty21Input() {
    return this._customProperty21;
  }

  // custom_property22 - computed: true, optional: true, required: false
  private _customProperty22?: string; 
  public get customProperty22() {
    return this.getStringAttribute('custom_property22');
  }
  public set customProperty22(value: string) {
    this._customProperty22 = value;
  }
  public resetCustomProperty22() {
    this._customProperty22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty22Input() {
    return this._customProperty22;
  }

  // custom_property23 - computed: true, optional: true, required: false
  private _customProperty23?: string; 
  public get customProperty23() {
    return this.getStringAttribute('custom_property23');
  }
  public set customProperty23(value: string) {
    this._customProperty23 = value;
  }
  public resetCustomProperty23() {
    this._customProperty23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty23Input() {
    return this._customProperty23;
  }

  // custom_property24 - computed: true, optional: true, required: false
  private _customProperty24?: string; 
  public get customProperty24() {
    return this.getStringAttribute('custom_property24');
  }
  public set customProperty24(value: string) {
    this._customProperty24 = value;
  }
  public resetCustomProperty24() {
    this._customProperty24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty24Input() {
    return this._customProperty24;
  }

  // custom_property25 - computed: true, optional: true, required: false
  private _customProperty25?: string; 
  public get customProperty25() {
    return this.getStringAttribute('custom_property25');
  }
  public set customProperty25(value: string) {
    this._customProperty25 = value;
  }
  public resetCustomProperty25() {
    this._customProperty25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty25Input() {
    return this._customProperty25;
  }

  // custom_property26 - computed: true, optional: true, required: false
  private _customProperty26?: string; 
  public get customProperty26() {
    return this.getStringAttribute('custom_property26');
  }
  public set customProperty26(value: string) {
    this._customProperty26 = value;
  }
  public resetCustomProperty26() {
    this._customProperty26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty26Input() {
    return this._customProperty26;
  }

  // custom_property27 - computed: true, optional: true, required: false
  private _customProperty27?: string; 
  public get customProperty27() {
    return this.getStringAttribute('custom_property27');
  }
  public set customProperty27(value: string) {
    this._customProperty27 = value;
  }
  public resetCustomProperty27() {
    this._customProperty27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty27Input() {
    return this._customProperty27;
  }

  // custom_property28 - computed: true, optional: true, required: false
  private _customProperty28?: string; 
  public get customProperty28() {
    return this.getStringAttribute('custom_property28');
  }
  public set customProperty28(value: string) {
    this._customProperty28 = value;
  }
  public resetCustomProperty28() {
    this._customProperty28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty28Input() {
    return this._customProperty28;
  }

  // custom_property29 - computed: true, optional: true, required: false
  private _customProperty29?: string; 
  public get customProperty29() {
    return this.getStringAttribute('custom_property29');
  }
  public set customProperty29(value: string) {
    this._customProperty29 = value;
  }
  public resetCustomProperty29() {
    this._customProperty29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty29Input() {
    return this._customProperty29;
  }

  // custom_property3 - computed: true, optional: true, required: false
  private _customProperty3?: string; 
  public get customProperty3() {
    return this.getStringAttribute('custom_property3');
  }
  public set customProperty3(value: string) {
    this._customProperty3 = value;
  }
  public resetCustomProperty3() {
    this._customProperty3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty3Input() {
    return this._customProperty3;
  }

  // custom_property30 - computed: true, optional: true, required: false
  private _customProperty30?: string; 
  public get customProperty30() {
    return this.getStringAttribute('custom_property30');
  }
  public set customProperty30(value: string) {
    this._customProperty30 = value;
  }
  public resetCustomProperty30() {
    this._customProperty30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty30Input() {
    return this._customProperty30;
  }

  // custom_property31 - computed: true, optional: true, required: false
  private _customProperty31?: string; 
  public get customProperty31() {
    return this.getStringAttribute('custom_property31');
  }
  public set customProperty31(value: string) {
    this._customProperty31 = value;
  }
  public resetCustomProperty31() {
    this._customProperty31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31Input() {
    return this._customProperty31;
  }

  // custom_property32 - computed: true, optional: true, required: false
  private _customProperty32?: string; 
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }
  public set customProperty32(value: string) {
    this._customProperty32 = value;
  }
  public resetCustomProperty32() {
    this._customProperty32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32Input() {
    return this._customProperty32;
  }

  // custom_property33 - computed: true, optional: true, required: false
  private _customProperty33?: string; 
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }
  public set customProperty33(value: string) {
    this._customProperty33 = value;
  }
  public resetCustomProperty33() {
    this._customProperty33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33Input() {
    return this._customProperty33;
  }

  // custom_property34 - computed: true, optional: true, required: false
  private _customProperty34?: string; 
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }
  public set customProperty34(value: string) {
    this._customProperty34 = value;
  }
  public resetCustomProperty34() {
    this._customProperty34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34Input() {
    return this._customProperty34;
  }

  // custom_property35 - computed: true, optional: true, required: false
  private _customProperty35?: string; 
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }
  public set customProperty35(value: string) {
    this._customProperty35 = value;
  }
  public resetCustomProperty35() {
    this._customProperty35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35Input() {
    return this._customProperty35;
  }

  // custom_property36 - computed: true, optional: true, required: false
  private _customProperty36?: string; 
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }
  public set customProperty36(value: string) {
    this._customProperty36 = value;
  }
  public resetCustomProperty36() {
    this._customProperty36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36Input() {
    return this._customProperty36;
  }

  // custom_property37 - computed: true, optional: true, required: false
  private _customProperty37?: string; 
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }
  public set customProperty37(value: string) {
    this._customProperty37 = value;
  }
  public resetCustomProperty37() {
    this._customProperty37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37Input() {
    return this._customProperty37;
  }

  // custom_property38 - computed: true, optional: true, required: false
  private _customProperty38?: string; 
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }
  public set customProperty38(value: string) {
    this._customProperty38 = value;
  }
  public resetCustomProperty38() {
    this._customProperty38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38Input() {
    return this._customProperty38;
  }

  // custom_property39 - computed: true, optional: true, required: false
  private _customProperty39?: string; 
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }
  public set customProperty39(value: string) {
    this._customProperty39 = value;
  }
  public resetCustomProperty39() {
    this._customProperty39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39Input() {
    return this._customProperty39;
  }

  // custom_property4 - computed: true, optional: true, required: false
  private _customProperty4?: string; 
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }
  public set customProperty4(value: string) {
    this._customProperty4 = value;
  }
  public resetCustomProperty4() {
    this._customProperty4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty4Input() {
    return this._customProperty4;
  }

  // custom_property40 - computed: true, optional: true, required: false
  private _customProperty40?: string; 
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }
  public set customProperty40(value: string) {
    this._customProperty40 = value;
  }
  public resetCustomProperty40() {
    this._customProperty40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40Input() {
    return this._customProperty40;
  }

  // custom_property5 - computed: true, optional: true, required: false
  private _customProperty5?: string; 
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }
  public set customProperty5(value: string) {
    this._customProperty5 = value;
  }
  public resetCustomProperty5() {
    this._customProperty5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty5Input() {
    return this._customProperty5;
  }

  // custom_property6 - computed: true, optional: true, required: false
  private _customProperty6?: string; 
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }
  public set customProperty6(value: string) {
    this._customProperty6 = value;
  }
  public resetCustomProperty6() {
    this._customProperty6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty6Input() {
    return this._customProperty6;
  }

  // custom_property7 - computed: true, optional: true, required: false
  private _customProperty7?: string; 
  public get customProperty7() {
    return this.getStringAttribute('custom_property7');
  }
  public set customProperty7(value: string) {
    this._customProperty7 = value;
  }
  public resetCustomProperty7() {
    this._customProperty7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty7Input() {
    return this._customProperty7;
  }

  // custom_property8 - computed: true, optional: true, required: false
  private _customProperty8?: string; 
  public get customProperty8() {
    return this.getStringAttribute('custom_property8');
  }
  public set customProperty8(value: string) {
    this._customProperty8 = value;
  }
  public resetCustomProperty8() {
    this._customProperty8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty8Input() {
    return this._customProperty8;
  }

  // custom_property9 - computed: true, optional: true, required: false
  private _customProperty9?: string; 
  public get customProperty9() {
    return this.getStringAttribute('custom_property9');
  }
  public set customProperty9(value: string) {
    this._customProperty9 = value;
  }
  public resetCustomProperty9() {
    this._customProperty9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty9Input() {
    return this._customProperty9;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_entitlement_to_role_sync - computed: true, optional: true, required: false
  private _enableEntitlementToRoleSync?: boolean | cdktf.IResolvable; 
  public get enableEntitlementToRoleSync() {
    return this.getBooleanAttribute('enable_entitlement_to_role_sync');
  }
  public set enableEntitlementToRoleSync(value: boolean | cdktf.IResolvable) {
    this._enableEntitlementToRoleSync = value;
  }
  public resetEnableEntitlementToRoleSync() {
    this._enableEntitlementToRoleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEntitlementToRoleSyncInput() {
    return this._enableEntitlementToRoleSync;
  }

  // enable_provisioning_priority - computed: true, optional: true, required: false
  private _enableProvisioningPriority?: boolean | cdktf.IResolvable; 
  public get enableProvisioningPriority() {
    return this.getBooleanAttribute('enable_provisioning_priority');
  }
  public set enableProvisioningPriority(value: boolean | cdktf.IResolvable) {
    this._enableProvisioningPriority = value;
  }
  public resetEnableProvisioningPriority() {
    this._enableProvisioningPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProvisioningPriorityInput() {
    return this._enableProvisioningPriority;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // entitlement_description - computed: true, optional: true, required: false
  private _entitlementDescription?: string; 
  public get entitlementDescription() {
    return this.getStringAttribute('entitlement_description');
  }
  public set entitlementDescription(value: string) {
    this._entitlementDescription = value;
  }
  public resetEntitlementDescription() {
    this._entitlementDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementDescriptionInput() {
    return this._entitlementDescription;
  }

  // entitlement_name - computed: false, optional: false, required: true
  private _entitlementName?: string; 
  public get entitlementName() {
    return this.getStringAttribute('entitlement_name');
  }
  public set entitlementName(value: string) {
    this._entitlementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementNameInput() {
    return this._entitlementName;
  }

  // exclude_rule_assgn_ents_in_req - computed: true, optional: true, required: false
  private _excludeRuleAssgnEntsInReq?: boolean | cdktf.IResolvable; 
  public get excludeRuleAssgnEntsInReq() {
    return this.getBooleanAttribute('exclude_rule_assgn_ents_in_req');
  }
  public set excludeRuleAssgnEntsInReq(value: boolean | cdktf.IResolvable) {
    this._excludeRuleAssgnEntsInReq = value;
  }
  public resetExcludeRuleAssgnEntsInReq() {
    this._excludeRuleAssgnEntsInReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRuleAssgnEntsInReqInput() {
    return this._excludeRuleAssgnEntsInReq;
  }

  // hierarchy_required - computed: true, optional: true, required: false
  private _hierarchyRequired?: string; 
  public get hierarchyRequired() {
    return this.getStringAttribute('hierarchy_required');
  }
  public set hierarchyRequired(value: string) {
    this._hierarchyRequired = value;
  }
  public resetHierarchyRequired() {
    this._hierarchyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyRequiredInput() {
    return this._hierarchyRequired;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order_index - computed: true, optional: true, required: false
  private _orderIndex?: number; 
  public get orderIndex() {
    return this.getNumberAttribute('order_index');
  }
  public set orderIndex(value: number) {
    this._orderIndex = value;
  }
  public resetOrderIndex() {
    this._orderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIndexInput() {
    return this._orderIndex;
  }

  // recon - computed: true, optional: true, required: false
  private _recon?: boolean | cdktf.IResolvable; 
  public get recon() {
    return this.getBooleanAttribute('recon');
  }
  public set recon(value: boolean | cdktf.IResolvable) {
    this._recon = value;
  }
  public resetRecon() {
    this._recon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconInput() {
    return this._recon;
  }

  // request_dates_conf_json - computed: true, optional: true, required: false
  private _requestDatesConfJson?: string; 
  public get requestDatesConfJson() {
    return this.getStringAttribute('request_dates_conf_json');
  }
  public set requestDatesConfJson(value: string) {
    this._requestDatesConfJson = value;
  }
  public resetRequestDatesConfJson() {
    this._requestDatesConfJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDatesConfJsonInput() {
    return this._requestDatesConfJson;
  }

  // request_option - computed: true, optional: true, required: false
  private _requestOption?: string; 
  public get requestOption() {
    return this.getStringAttribute('request_option');
  }
  public set requestOption(value: string) {
    this._requestOption = value;
  }
  public resetRequestOption() {
    this._requestOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOptionInput() {
    return this._requestOption;
  }

  // required_in_request - computed: true, optional: true, required: false
  private _requiredInRequest?: boolean | cdktf.IResolvable; 
  public get requiredInRequest() {
    return this.getBooleanAttribute('required_in_request');
  }
  public set requiredInRequest(value: boolean | cdktf.IResolvable) {
    this._requiredInRequest = value;
  }
  public resetRequiredInRequest() {
    this._requiredInRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInRequestInput() {
    return this._requiredInRequest;
  }

  // required_in_service_request - computed: true, optional: true, required: false
  private _requiredInServiceRequest?: boolean | cdktf.IResolvable; 
  public get requiredInServiceRequest() {
    return this.getBooleanAttribute('required_in_service_request');
  }
  public set requiredInServiceRequest(value: boolean | cdktf.IResolvable) {
    this._requiredInServiceRequest = value;
  }
  public resetRequiredInServiceRequest() {
    this._requiredInServiceRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInServiceRequestInput() {
    return this._requiredInServiceRequest;
  }

  // selected_query_service_account - computed: true, optional: true, required: false
  private _selectedQueryServiceAccount?: string; 
  public get selectedQueryServiceAccount() {
    return this.getStringAttribute('selected_query_service_account');
  }
  public set selectedQueryServiceAccount(value: string) {
    this._selectedQueryServiceAccount = value;
  }
  public resetSelectedQueryServiceAccount() {
    this._selectedQueryServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedQueryServiceAccountInput() {
    return this._selectedQueryServiceAccount;
  }

  // show_ent_type_on - computed: true, optional: true, required: false
  private _showEntTypeOn?: string; 
  public get showEntTypeOn() {
    return this.getStringAttribute('show_ent_type_on');
  }
  public set showEntTypeOn(value: string) {
    this._showEntTypeOn = value;
  }
  public resetShowEntTypeOn() {
    this._showEntTypeOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEntTypeOnInput() {
    return this._showEntTypeOn;
  }

  // start_date_in_revoke_request - computed: true, optional: true, required: false
  private _startDateInRevokeRequest?: string; 
  public get startDateInRevokeRequest() {
    return this.getStringAttribute('start_date_in_revoke_request');
  }
  public set startDateInRevokeRequest(value: string) {
    this._startDateInRevokeRequest = value;
  }
  public resetStartDateInRevokeRequest() {
    this._startDateInRevokeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInRevokeRequestInput() {
    return this._startDateInRevokeRequest;
  }

  // start_end_date_in_request - computed: true, optional: true, required: false
  private _startEndDateInRequest?: string; 
  public get startEndDateInRequest() {
    return this.getStringAttribute('start_end_date_in_request');
  }
  public set startEndDateInRequest(value: string) {
    this._startEndDateInRequest = value;
  }
  public resetStartEndDateInRequest() {
    this._startEndDateInRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startEndDateInRequestInput() {
    return this._startEndDateInRequest;
  }

  // workflow - computed: true, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_remove_all_entitlement_in_request: cdktf.stringToTerraform(this._allowRemoveAllEntitlementInRequest),
      ars_requestable_entitlement_query: cdktf.stringToTerraform(this._arsRequestableEntitlementQuery),
      ars_selected_entitlement_query: cdktf.stringToTerraform(this._arsSelectedEntitlementQuery),
      available_query_service_account: cdktf.stringToTerraform(this._availableQueryServiceAccount),
      certifiable: cdktf.booleanToTerraform(this._certifiable),
      create_task_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._createTaskAction),
      custom_property1: cdktf.stringToTerraform(this._customProperty1),
      custom_property10: cdktf.stringToTerraform(this._customProperty10),
      custom_property11: cdktf.stringToTerraform(this._customProperty11),
      custom_property12: cdktf.stringToTerraform(this._customProperty12),
      custom_property13: cdktf.stringToTerraform(this._customProperty13),
      custom_property14: cdktf.stringToTerraform(this._customProperty14),
      custom_property15: cdktf.stringToTerraform(this._customProperty15),
      custom_property16: cdktf.stringToTerraform(this._customProperty16),
      custom_property17: cdktf.stringToTerraform(this._customProperty17),
      custom_property18: cdktf.stringToTerraform(this._customProperty18),
      custom_property19: cdktf.stringToTerraform(this._customProperty19),
      custom_property2: cdktf.stringToTerraform(this._customProperty2),
      custom_property20: cdktf.stringToTerraform(this._customProperty20),
      custom_property21: cdktf.stringToTerraform(this._customProperty21),
      custom_property22: cdktf.stringToTerraform(this._customProperty22),
      custom_property23: cdktf.stringToTerraform(this._customProperty23),
      custom_property24: cdktf.stringToTerraform(this._customProperty24),
      custom_property25: cdktf.stringToTerraform(this._customProperty25),
      custom_property26: cdktf.stringToTerraform(this._customProperty26),
      custom_property27: cdktf.stringToTerraform(this._customProperty27),
      custom_property28: cdktf.stringToTerraform(this._customProperty28),
      custom_property29: cdktf.stringToTerraform(this._customProperty29),
      custom_property3: cdktf.stringToTerraform(this._customProperty3),
      custom_property30: cdktf.stringToTerraform(this._customProperty30),
      custom_property31: cdktf.stringToTerraform(this._customProperty31),
      custom_property32: cdktf.stringToTerraform(this._customProperty32),
      custom_property33: cdktf.stringToTerraform(this._customProperty33),
      custom_property34: cdktf.stringToTerraform(this._customProperty34),
      custom_property35: cdktf.stringToTerraform(this._customProperty35),
      custom_property36: cdktf.stringToTerraform(this._customProperty36),
      custom_property37: cdktf.stringToTerraform(this._customProperty37),
      custom_property38: cdktf.stringToTerraform(this._customProperty38),
      custom_property39: cdktf.stringToTerraform(this._customProperty39),
      custom_property4: cdktf.stringToTerraform(this._customProperty4),
      custom_property40: cdktf.stringToTerraform(this._customProperty40),
      custom_property5: cdktf.stringToTerraform(this._customProperty5),
      custom_property6: cdktf.stringToTerraform(this._customProperty6),
      custom_property7: cdktf.stringToTerraform(this._customProperty7),
      custom_property8: cdktf.stringToTerraform(this._customProperty8),
      custom_property9: cdktf.stringToTerraform(this._customProperty9),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_entitlement_to_role_sync: cdktf.booleanToTerraform(this._enableEntitlementToRoleSync),
      enable_provisioning_priority: cdktf.booleanToTerraform(this._enableProvisioningPriority),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      entitlement_description: cdktf.stringToTerraform(this._entitlementDescription),
      entitlement_name: cdktf.stringToTerraform(this._entitlementName),
      exclude_rule_assgn_ents_in_req: cdktf.booleanToTerraform(this._excludeRuleAssgnEntsInReq),
      hierarchy_required: cdktf.stringToTerraform(this._hierarchyRequired),
      order_index: cdktf.numberToTerraform(this._orderIndex),
      recon: cdktf.booleanToTerraform(this._recon),
      request_dates_conf_json: cdktf.stringToTerraform(this._requestDatesConfJson),
      request_option: cdktf.stringToTerraform(this._requestOption),
      required_in_request: cdktf.booleanToTerraform(this._requiredInRequest),
      required_in_service_request: cdktf.booleanToTerraform(this._requiredInServiceRequest),
      selected_query_service_account: cdktf.stringToTerraform(this._selectedQueryServiceAccount),
      show_ent_type_on: cdktf.stringToTerraform(this._showEntTypeOn),
      start_date_in_revoke_request: cdktf.stringToTerraform(this._startDateInRevokeRequest),
      start_end_date_in_request: cdktf.stringToTerraform(this._startEndDateInRequest),
      workflow: cdktf.stringToTerraform(this._workflow),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_remove_all_entitlement_in_request: {
        value: cdktf.stringToHclTerraform(this._allowRemoveAllEntitlementInRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ars_requestable_entitlement_query: {
        value: cdktf.stringToHclTerraform(this._arsRequestableEntitlementQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ars_selected_entitlement_query: {
        value: cdktf.stringToHclTerraform(this._arsSelectedEntitlementQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_query_service_account: {
        value: cdktf.stringToHclTerraform(this._availableQueryServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certifiable: {
        value: cdktf.booleanToHclTerraform(this._certifiable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_task_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._createTaskAction),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_property1: {
        value: cdktf.stringToHclTerraform(this._customProperty1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property10: {
        value: cdktf.stringToHclTerraform(this._customProperty10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property11: {
        value: cdktf.stringToHclTerraform(this._customProperty11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property12: {
        value: cdktf.stringToHclTerraform(this._customProperty12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property13: {
        value: cdktf.stringToHclTerraform(this._customProperty13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property14: {
        value: cdktf.stringToHclTerraform(this._customProperty14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property15: {
        value: cdktf.stringToHclTerraform(this._customProperty15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property16: {
        value: cdktf.stringToHclTerraform(this._customProperty16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property17: {
        value: cdktf.stringToHclTerraform(this._customProperty17),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property18: {
        value: cdktf.stringToHclTerraform(this._customProperty18),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property19: {
        value: cdktf.stringToHclTerraform(this._customProperty19),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property2: {
        value: cdktf.stringToHclTerraform(this._customProperty2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property20: {
        value: cdktf.stringToHclTerraform(this._customProperty20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property21: {
        value: cdktf.stringToHclTerraform(this._customProperty21),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property22: {
        value: cdktf.stringToHclTerraform(this._customProperty22),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property23: {
        value: cdktf.stringToHclTerraform(this._customProperty23),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property24: {
        value: cdktf.stringToHclTerraform(this._customProperty24),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property25: {
        value: cdktf.stringToHclTerraform(this._customProperty25),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property26: {
        value: cdktf.stringToHclTerraform(this._customProperty26),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property27: {
        value: cdktf.stringToHclTerraform(this._customProperty27),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property28: {
        value: cdktf.stringToHclTerraform(this._customProperty28),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property29: {
        value: cdktf.stringToHclTerraform(this._customProperty29),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property3: {
        value: cdktf.stringToHclTerraform(this._customProperty3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property30: {
        value: cdktf.stringToHclTerraform(this._customProperty30),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property31: {
        value: cdktf.stringToHclTerraform(this._customProperty31),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property32: {
        value: cdktf.stringToHclTerraform(this._customProperty32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property33: {
        value: cdktf.stringToHclTerraform(this._customProperty33),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property34: {
        value: cdktf.stringToHclTerraform(this._customProperty34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property35: {
        value: cdktf.stringToHclTerraform(this._customProperty35),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property36: {
        value: cdktf.stringToHclTerraform(this._customProperty36),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property37: {
        value: cdktf.stringToHclTerraform(this._customProperty37),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property38: {
        value: cdktf.stringToHclTerraform(this._customProperty38),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property39: {
        value: cdktf.stringToHclTerraform(this._customProperty39),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property4: {
        value: cdktf.stringToHclTerraform(this._customProperty4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property40: {
        value: cdktf.stringToHclTerraform(this._customProperty40),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property5: {
        value: cdktf.stringToHclTerraform(this._customProperty5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property6: {
        value: cdktf.stringToHclTerraform(this._customProperty6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property7: {
        value: cdktf.stringToHclTerraform(this._customProperty7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property8: {
        value: cdktf.stringToHclTerraform(this._customProperty8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property9: {
        value: cdktf.stringToHclTerraform(this._customProperty9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_entitlement_to_role_sync: {
        value: cdktf.booleanToHclTerraform(this._enableEntitlementToRoleSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_provisioning_priority: {
        value: cdktf.booleanToHclTerraform(this._enableProvisioningPriority),
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
      entitlement_description: {
        value: cdktf.stringToHclTerraform(this._entitlementDescription),
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
      exclude_rule_assgn_ents_in_req: {
        value: cdktf.booleanToHclTerraform(this._excludeRuleAssgnEntsInReq),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hierarchy_required: {
        value: cdktf.stringToHclTerraform(this._hierarchyRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_index: {
        value: cdktf.numberToHclTerraform(this._orderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recon: {
        value: cdktf.booleanToHclTerraform(this._recon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_dates_conf_json: {
        value: cdktf.stringToHclTerraform(this._requestDatesConfJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_option: {
        value: cdktf.stringToHclTerraform(this._requestOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required_in_request: {
        value: cdktf.booleanToHclTerraform(this._requiredInRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_in_service_request: {
        value: cdktf.booleanToHclTerraform(this._requiredInServiceRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_query_service_account: {
        value: cdktf.stringToHclTerraform(this._selectedQueryServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_ent_type_on: {
        value: cdktf.stringToHclTerraform(this._showEntTypeOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date_in_revoke_request: {
        value: cdktf.stringToHclTerraform(this._startDateInRevokeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_end_date_in_request: {
        value: cdktf.stringToHclTerraform(this._startEndDateInRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow: {
        value: cdktf.stringToHclTerraform(this._workflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
