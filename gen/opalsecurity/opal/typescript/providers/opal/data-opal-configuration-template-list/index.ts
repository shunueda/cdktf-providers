// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/configuration_template_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalConfigurationTemplateListConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOpalConfigurationTemplateListResultsTicketPropagation {
}

export function dataOpalConfigurationTemplateListResultsTicketPropagationToTerraform(struct?: DataOpalConfigurationTemplateListResultsTicketPropagation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalConfigurationTemplateListResultsTicketPropagationToHclTerraform(struct?: DataOpalConfigurationTemplateListResultsTicketPropagation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalConfigurationTemplateListResultsTicketPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalConfigurationTemplateListResultsTicketPropagation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalConfigurationTemplateListResultsTicketPropagation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_on_grant - computed: true, optional: false, required: false
  public get enabledOnGrant() {
    return this.getBooleanAttribute('enabled_on_grant');
  }

  // enabled_on_revocation - computed: true, optional: false, required: false
  public get enabledOnRevocation() {
    return this.getBooleanAttribute('enabled_on_revocation');
  }

  // ticket_project_id - computed: true, optional: false, required: false
  public get ticketProjectId() {
    return this.getStringAttribute('ticket_project_id');
  }

  // ticket_provider - computed: true, optional: false, required: false
  public get ticketProvider() {
    return this.getStringAttribute('ticket_provider');
  }
}
export interface DataOpalConfigurationTemplateListResultsVisibility {
}

export function dataOpalConfigurationTemplateListResultsVisibilityToTerraform(struct?: DataOpalConfigurationTemplateListResultsVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalConfigurationTemplateListResultsVisibilityToHclTerraform(struct?: DataOpalConfigurationTemplateListResultsVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalConfigurationTemplateListResultsVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalConfigurationTemplateListResultsVisibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalConfigurationTemplateListResultsVisibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // visibility_group_ids - computed: true, optional: false, required: false
  public get visibilityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_group_ids'));
  }
}
export interface DataOpalConfigurationTemplateListResults {
}

export function dataOpalConfigurationTemplateListResultsToTerraform(struct?: DataOpalConfigurationTemplateListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalConfigurationTemplateListResultsToHclTerraform(struct?: DataOpalConfigurationTemplateListResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalConfigurationTemplateListResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalConfigurationTemplateListResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalConfigurationTemplateListResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_owner_id - computed: true, optional: false, required: false
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }

  // break_glass_user_ids - computed: true, optional: false, required: false
  public get breakGlassUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('break_glass_user_ids'));
  }

  // configuration_template_id - computed: true, optional: false, required: false
  public get configurationTemplateId() {
    return this.getStringAttribute('configuration_template_id');
  }

  // custom_request_notification - computed: true, optional: false, required: false
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }

  // linked_audit_message_channel_ids - computed: true, optional: false, required: false
  public get linkedAuditMessageChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('linked_audit_message_channel_ids'));
  }

  // member_on_call_schedule_ids - computed: true, optional: false, required: false
  public get memberOnCallScheduleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_on_call_schedule_ids'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_configuration_id - computed: true, optional: false, required: false
  public get requestConfigurationId() {
    return this.getStringAttribute('request_configuration_id');
  }

  // require_mfa_to_approve - computed: true, optional: false, required: false
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }

  // require_mfa_to_connect - computed: true, optional: false, required: false
  public get requireMfaToConnect() {
    return this.getBooleanAttribute('require_mfa_to_connect');
  }

  // ticket_propagation - computed: true, optional: false, required: false
  private _ticketPropagation = new DataOpalConfigurationTemplateListResultsTicketPropagationOutputReference(this, "ticket_propagation");
  public get ticketPropagation() {
    return this._ticketPropagation;
  }

  // visibility - computed: true, optional: false, required: false
  private _visibility = new DataOpalConfigurationTemplateListResultsVisibilityOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
}

export class DataOpalConfigurationTemplateListResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalConfigurationTemplateListResultsOutputReference {
    return new DataOpalConfigurationTemplateListResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/configuration_template_list opal_configuration_template_list}
*/
export class DataOpalConfigurationTemplateList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_configuration_template_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalConfigurationTemplateList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalConfigurationTemplateList to import
  * @param importFromId The id of the existing DataOpalConfigurationTemplateList that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/configuration_template_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalConfigurationTemplateList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_configuration_template_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/configuration_template_list opal_configuration_template_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalConfigurationTemplateListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalConfigurationTemplateListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_configuration_template_list',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalConfigurationTemplateListResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
