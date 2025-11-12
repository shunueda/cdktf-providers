// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_policy#name DataBetteruptimePolicy#name}
  */
  readonly name: string;
}
export interface DataBetteruptimePolicyStepsMetadataValue {
}

export function dataBetteruptimePolicyStepsMetadataValueToTerraform(struct?: DataBetteruptimePolicyStepsMetadataValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimePolicyStepsMetadataValueToHclTerraform(struct?: DataBetteruptimePolicyStepsMetadataValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimePolicyStepsMetadataValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimePolicyStepsMetadataValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimePolicyStepsMetadataValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // item_id - computed: true, optional: false, required: false
  public get itemId() {
    return this.getStringAttribute('item_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataBetteruptimePolicyStepsMetadataValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimePolicyStepsMetadataValueOutputReference {
    return new DataBetteruptimePolicyStepsMetadataValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimePolicyStepsStepMembers {
}

export function dataBetteruptimePolicyStepsStepMembersToTerraform(struct?: DataBetteruptimePolicyStepsStepMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimePolicyStepsStepMembersToHclTerraform(struct?: DataBetteruptimePolicyStepsStepMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimePolicyStepsStepMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimePolicyStepsStepMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimePolicyStepsStepMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // metadata_key - computed: true, optional: false, required: false
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataBetteruptimePolicyStepsStepMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimePolicyStepsStepMembersOutputReference {
    return new DataBetteruptimePolicyStepsStepMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimePolicySteps {
}

export function dataBetteruptimePolicyStepsToTerraform(struct?: DataBetteruptimePolicySteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimePolicyStepsToHclTerraform(struct?: DataBetteruptimePolicySteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimePolicyStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimePolicySteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimePolicySteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }

  // metadata_key - computed: true, optional: false, required: false
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }

  // metadata_value - computed: true, optional: false, required: false
  private _metadataValue = new DataBetteruptimePolicyStepsMetadataValueList(this, "metadata_value", false);
  public get metadataValue() {
    return this._metadataValue;
  }

  // metadata_values - computed: true, optional: false, required: false
  public get metadataValues() {
    return this.getListAttribute('metadata_values');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // policy_metadata_key - computed: true, optional: false, required: false
  public get policyMetadataKey() {
    return this.getStringAttribute('policy_metadata_key');
  }

  // reminder_enabled - computed: true, optional: false, required: false
  public get reminderEnabled() {
    return this.getBooleanAttribute('reminder_enabled');
  }

  // reminder_interval_hours - computed: true, optional: false, required: false
  public get reminderIntervalHours() {
    return this.getNumberAttribute('reminder_interval_hours');
  }

  // step_members - computed: true, optional: false, required: false
  private _stepMembers = new DataBetteruptimePolicyStepsStepMembersList(this, "step_members", false);
  public get stepMembers() {
    return this._stepMembers;
  }

  // time_from - computed: true, optional: false, required: false
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }

  // time_to - computed: true, optional: false, required: false
  public get timeTo() {
    return this.getStringAttribute('time_to');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency_id - computed: true, optional: false, required: false
  public get urgencyId() {
    return this.getNumberAttribute('urgency_id');
  }

  // wait_before - computed: true, optional: false, required: false
  public get waitBefore() {
    return this.getNumberAttribute('wait_before');
  }

  // wait_until_time - computed: true, optional: false, required: false
  public get waitUntilTime() {
    return this.getStringAttribute('wait_until_time');
  }

  // wait_until_timezone - computed: true, optional: false, required: false
  public get waitUntilTimezone() {
    return this.getStringAttribute('wait_until_timezone');
  }
}

export class DataBetteruptimePolicyStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimePolicyStepsOutputReference {
    return new DataBetteruptimePolicyStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_policy betteruptime_policy}
*/
export class DataBetteruptimePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimePolicy to import
  * @param importFromId The id of the existing DataBetteruptimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_policy betteruptime_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_policy',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_token - computed: true, optional: false, required: false
  public get incidentToken() {
    return this.getStringAttribute('incident_token');
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

  // policy_group_id - computed: true, optional: false, required: false
  public get policyGroupId() {
    return this.getNumberAttribute('policy_group_id');
  }

  // repeat_count - computed: true, optional: false, required: false
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }

  // repeat_delay - computed: true, optional: false, required: false
  public get repeatDelay() {
    return this.getNumberAttribute('repeat_delay');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataBetteruptimePolicyStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
