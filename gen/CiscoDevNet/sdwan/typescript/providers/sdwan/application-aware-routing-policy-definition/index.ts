// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAwareRoutingPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of default action
  *   - Choices: `slaClass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#default_action ApplicationAwareRoutingPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * SLA class list ID, Attribute conditional on `default_action` being equal to `slaClass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#default_action_sla_class_list_id ApplicationAwareRoutingPolicyDefinition#default_action_sla_class_list_id}
  */
  readonly defaultActionSlaClassListId?: string;
  /**
  * SLA class list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#default_action_sla_class_list_version ApplicationAwareRoutingPolicyDefinition#default_action_sla_class_list_version}
  */
  readonly defaultActionSlaClassListVersion?: number;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#description ApplicationAwareRoutingPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#name ApplicationAwareRoutingPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#sequences ApplicationAwareRoutingPolicyDefinition#sequences}
  */
  readonly sequences: ApplicationAwareRoutingPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters {
  /**
  * preferred color (Single value or multiple values separated by spaces), Attribute conditional on `type` being equal to `preferredColor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#preferred_color ApplicationAwareRoutingPolicyDefinition#preferred_color}
  */
  readonly preferredColor?: string;
  /**
  * Preferred color group list ID, Attribute conditional on `type` being equal to `preferredColorGroup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#preferred_color_group_list_id ApplicationAwareRoutingPolicyDefinition#preferred_color_group_list_id}
  */
  readonly preferredColorGroupListId?: string;
  /**
  * Preferred color group list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#preferred_color_group_list_version ApplicationAwareRoutingPolicyDefinition#preferred_color_group_list_version}
  */
  readonly preferredColorGroupListVersion?: number;
  /**
  * SLA class list ID, Attribute conditional on `type` being equal to `name`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#sla_class_list_id ApplicationAwareRoutingPolicyDefinition#sla_class_list_id}
  */
  readonly slaClassListId?: string;
  /**
  * SLA class list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#sla_class_list_version ApplicationAwareRoutingPolicyDefinition#sla_class_list_version}
  */
  readonly slaClassListVersion?: number;
  /**
  * Type of SLA class parameter
  *   - Choices: `name`, `preferredColor`, `preferredColorGroup`, `strict`, `fallbackToBestPath`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#type ApplicationAwareRoutingPolicyDefinition#type}
  */
  readonly type: string;
}

export function applicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_color: cdktf.stringToTerraform(struct!.preferredColor),
    preferred_color_group_list_id: cdktf.stringToTerraform(struct!.preferredColorGroupListId),
    preferred_color_group_list_version: cdktf.numberToTerraform(struct!.preferredColorGroupListVersion),
    sla_class_list_id: cdktf.stringToTerraform(struct!.slaClassListId),
    sla_class_list_version: cdktf.numberToTerraform(struct!.slaClassListVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToHclTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_color: {
      value: cdktf.stringToHclTerraform(struct!.preferredColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_color_group_list_id: {
      value: cdktf.stringToHclTerraform(struct!.preferredColorGroupListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_color_group_list_version: {
      value: cdktf.numberToHclTerraform(struct!.preferredColorGroupListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_class_list_id: {
      value: cdktf.stringToHclTerraform(struct!.slaClassListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_class_list_version: {
      value: cdktf.numberToHclTerraform(struct!.slaClassListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColor = this._preferredColor;
    }
    if (this._preferredColorGroupListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupListId = this._preferredColorGroupListId;
    }
    if (this._preferredColorGroupListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredColorGroupListVersion = this._preferredColorGroupListVersion;
    }
    if (this._slaClassListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClassListId = this._slaClassListId;
    }
    if (this._slaClassListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClassListVersion = this._slaClassListVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredColor = undefined;
      this._preferredColorGroupListId = undefined;
      this._preferredColorGroupListVersion = undefined;
      this._slaClassListId = undefined;
      this._slaClassListVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredColor = value.preferredColor;
      this._preferredColorGroupListId = value.preferredColorGroupListId;
      this._preferredColorGroupListVersion = value.preferredColorGroupListVersion;
      this._slaClassListId = value.slaClassListId;
      this._slaClassListVersion = value.slaClassListVersion;
      this._type = value.type;
    }
  }

  // preferred_color - computed: false, optional: true, required: false
  private _preferredColor?: string; 
  public get preferredColor() {
    return this.getStringAttribute('preferred_color');
  }
  public set preferredColor(value: string) {
    this._preferredColor = value;
  }
  public resetPreferredColor() {
    this._preferredColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorInput() {
    return this._preferredColor;
  }

  // preferred_color_group_list_id - computed: false, optional: true, required: false
  private _preferredColorGroupListId?: string; 
  public get preferredColorGroupListId() {
    return this.getStringAttribute('preferred_color_group_list_id');
  }
  public set preferredColorGroupListId(value: string) {
    this._preferredColorGroupListId = value;
  }
  public resetPreferredColorGroupListId() {
    this._preferredColorGroupListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorGroupListIdInput() {
    return this._preferredColorGroupListId;
  }

  // preferred_color_group_list_version - computed: false, optional: true, required: false
  private _preferredColorGroupListVersion?: number; 
  public get preferredColorGroupListVersion() {
    return this.getNumberAttribute('preferred_color_group_list_version');
  }
  public set preferredColorGroupListVersion(value: number) {
    this._preferredColorGroupListVersion = value;
  }
  public resetPreferredColorGroupListVersion() {
    this._preferredColorGroupListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredColorGroupListVersionInput() {
    return this._preferredColorGroupListVersion;
  }

  // sla_class_list_id - computed: false, optional: true, required: false
  private _slaClassListId?: string; 
  public get slaClassListId() {
    return this.getStringAttribute('sla_class_list_id');
  }
  public set slaClassListId(value: string) {
    this._slaClassListId = value;
  }
  public resetSlaClassListId() {
    this._slaClassListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassListIdInput() {
    return this._slaClassListId;
  }

  // sla_class_list_version - computed: false, optional: true, required: false
  private _slaClassListVersion?: number; 
  public get slaClassListVersion() {
    return this.getNumberAttribute('sla_class_list_version');
  }
  public set slaClassListVersion(value: number) {
    this._slaClassListVersion = value;
  }
  public resetSlaClassListVersion() {
    this._slaClassListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassListVersionInput() {
    return this._slaClassListVersion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersList extends cdktf.ComplexList {
  public internalValue? : ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference {
    return new ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries {
  /**
  * Backup SLA preferred color (Single value or multiple values separated by spaces), Attribute conditional on `type` being equal to `backupSlaPreferredColor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#backup_sla_preferred_color ApplicationAwareRoutingPolicyDefinition#backup_sla_preferred_color}
  */
  readonly backupSlaPreferredColor?: string;
  /**
  * Cloud SLA, Attribute conditional on `type` being equal to `cloudSaas`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#cloud_sla ApplicationAwareRoutingPolicyDefinition#cloud_sla}
  */
  readonly cloudSla?: boolean | cdktf.IResolvable;
  /**
  * Counter name, Attribute conditional on `type` being equal to `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#counter ApplicationAwareRoutingPolicyDefinition#counter}
  */
  readonly counter?: string;
  /**
  * Enable logging, Attribute conditional on `type` being equal to `log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#log ApplicationAwareRoutingPolicyDefinition#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * List of SLA class parameters, Attribute conditional on `type` being equal to `slaClass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#sla_class_parameters ApplicationAwareRoutingPolicyDefinition#sla_class_parameters}
  */
  readonly slaClassParameters?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters[] | cdktf.IResolvable;
  /**
  * Type of action entry
  *   - Choices: `backupSlaPreferredColor`, `count`, `log`, `slaClass`, `cloudSaas`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#type ApplicationAwareRoutingPolicyDefinition#type}
  */
  readonly type: string;
}

export function applicationAwareRoutingPolicyDefinitionSequencesActionEntriesToTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_sla_preferred_color: cdktf.stringToTerraform(struct!.backupSlaPreferredColor),
    cloud_sla: cdktf.booleanToTerraform(struct!.cloudSla),
    counter: cdktf.stringToTerraform(struct!.counter),
    log: cdktf.booleanToTerraform(struct!.log),
    sla_class_parameters: cdktf.listMapper(applicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToTerraform, false)(struct!.slaClassParameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationAwareRoutingPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_sla_preferred_color: {
      value: cdktf.stringToHclTerraform(struct!.backupSlaPreferredColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_sla: {
      value: cdktf.booleanToHclTerraform(struct!.cloudSla),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter: {
      value: cdktf.stringToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sla_class_parameters: {
      value: cdktf.listMapperHcl(applicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersToHclTerraform, false)(struct!.slaClassParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSlaPreferredColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSlaPreferredColor = this._backupSlaPreferredColor;
    }
    if (this._cloudSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSla = this._cloudSla;
    }
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._slaClassParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClassParameters = this._slaClassParameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSlaPreferredColor = undefined;
      this._cloudSla = undefined;
      this._counter = undefined;
      this._log = undefined;
      this._slaClassParameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSlaPreferredColor = value.backupSlaPreferredColor;
      this._cloudSla = value.cloudSla;
      this._counter = value.counter;
      this._log = value.log;
      this._slaClassParameters.internalValue = value.slaClassParameters;
      this._type = value.type;
    }
  }

  // backup_sla_preferred_color - computed: false, optional: true, required: false
  private _backupSlaPreferredColor?: string; 
  public get backupSlaPreferredColor() {
    return this.getStringAttribute('backup_sla_preferred_color');
  }
  public set backupSlaPreferredColor(value: string) {
    this._backupSlaPreferredColor = value;
  }
  public resetBackupSlaPreferredColor() {
    this._backupSlaPreferredColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSlaPreferredColorInput() {
    return this._backupSlaPreferredColor;
  }

  // cloud_sla - computed: false, optional: true, required: false
  private _cloudSla?: boolean | cdktf.IResolvable; 
  public get cloudSla() {
    return this.getBooleanAttribute('cloud_sla');
  }
  public set cloudSla(value: boolean | cdktf.IResolvable) {
    this._cloudSla = value;
  }
  public resetCloudSla() {
    this._cloudSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSlaInput() {
    return this._cloudSla;
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: string; 
  public get counter() {
    return this.getStringAttribute('counter');
  }
  public set counter(value: string) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // sla_class_parameters - computed: false, optional: true, required: false
  private _slaClassParameters = new ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParametersList(this, "sla_class_parameters", false);
  public get slaClassParameters() {
    return this._slaClassParameters;
  }
  public putSlaClassParameters(value: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesSlaClassParameters[] | cdktf.IResolvable) {
    this._slaClassParameters.internalValue = value;
  }
  public resetSlaClassParameters() {
    this._slaClassParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassParametersInput() {
    return this._slaClassParameters.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference {
    return new ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries {
  /**
  * Application list ID, Attribute conditional on `type` being equal to `appList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#application_list_id ApplicationAwareRoutingPolicyDefinition#application_list_id}
  */
  readonly applicationListId?: string;
  /**
  * Application list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#application_list_version ApplicationAwareRoutingPolicyDefinition#application_list_version}
  */
  readonly applicationListVersion?: number;
  /**
  * Destination Data Prefix list ID, Attribute conditional on `type` being equal to `destinationDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#destination_data_prefix_list_id ApplicationAwareRoutingPolicyDefinition#destination_data_prefix_list_id}
  */
  readonly destinationDataPrefixListId?: string;
  /**
  * Destination Data Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#destination_data_prefix_list_version ApplicationAwareRoutingPolicyDefinition#destination_data_prefix_list_version}
  */
  readonly destinationDataPrefixListVersion?: number;
  /**
  * Destination IP, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#destination_ip ApplicationAwareRoutingPolicyDefinition#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination port, 0-65535 (Single value, range or multiple values separated by spaces), Attribute conditional on `type` being equal to `destinationPort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#destination_port ApplicationAwareRoutingPolicyDefinition#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Destination region, Attribute conditional on `type` being equal to `destinationRegion`
  *   - Choices: `primary-region`, `secondary-region`, `other-region`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#destination_region ApplicationAwareRoutingPolicyDefinition#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * DNS request or response, Attribute conditional on `type` being equal to `dns`
  *   - Choices: `request`, `response`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#dns ApplicationAwareRoutingPolicyDefinition#dns}
  */
  readonly dns?: string;
  /**
  * DNS Application list ID, Attribute conditional on `type` being equal to `dnsAppList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#dns_application_list_id ApplicationAwareRoutingPolicyDefinition#dns_application_list_id}
  */
  readonly dnsApplicationListId?: string;
  /**
  * DNS Application list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#dns_application_list_version ApplicationAwareRoutingPolicyDefinition#dns_application_list_version}
  */
  readonly dnsApplicationListVersion?: number;
  /**
  * DSCP value, Attribute conditional on `type` being equal to `dscp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#dscp ApplicationAwareRoutingPolicyDefinition#dscp}
  */
  readonly dscp?: string;
  /**
  * ICMP Message, Attribute conditional on `type` being equal to `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#icmp_message ApplicationAwareRoutingPolicyDefinition#icmp_message}
  */
  readonly icmpMessage?: string;
  /**
  * PLP, Attribute conditional on `type` being equal to `plp`
  *   - Choices: `low`, `high`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#plp ApplicationAwareRoutingPolicyDefinition#plp}
  */
  readonly plp?: string;
  /**
  * IP Protocol, 0-255 (Single value or multiple values separated by spaces), Attribute conditional on `type` being equal to `protocol`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#protocol ApplicationAwareRoutingPolicyDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * Source Data Prefix list ID, Attribute conditional on `type` being equal to `sourceDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#source_data_prefix_list_id ApplicationAwareRoutingPolicyDefinition#source_data_prefix_list_id}
  */
  readonly sourceDataPrefixListId?: string;
  /**
  * Source Data Prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#source_data_prefix_list_version ApplicationAwareRoutingPolicyDefinition#source_data_prefix_list_version}
  */
  readonly sourceDataPrefixListVersion?: number;
  /**
  * Source IP, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#source_ip ApplicationAwareRoutingPolicyDefinition#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source port, 0-65535 (Single value, range or multiple values separated by spaces), Attribute conditional on `type` being equal to `sourcePort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#source_port ApplicationAwareRoutingPolicyDefinition#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Traffic to, Attribute conditional on `type` being equal to `trafficTo`
  *   - Choices: `access`, `core`, `service`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#traffic_to ApplicationAwareRoutingPolicyDefinition#traffic_to}
  */
  readonly trafficTo?: string;
  /**
  * Type of match entry
  *   - Choices: `appList`, `dnsAppList`, `dns`, `dscp`, `plp`, `protocol`, `sourceDataPrefixList`, `sourceIp`, `sourcePort`, `destinationDataPrefixList`, `destinationIp`, `destinationRegion`, `destinationPort`, `trafficTo`, `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#type ApplicationAwareRoutingPolicyDefinition#type}
  */
  readonly type: string;
}

export function applicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_list_id: cdktf.stringToTerraform(struct!.applicationListId),
    application_list_version: cdktf.numberToTerraform(struct!.applicationListVersion),
    destination_data_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataPrefixListId),
    destination_data_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataPrefixListVersion),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    dns: cdktf.stringToTerraform(struct!.dns),
    dns_application_list_id: cdktf.stringToTerraform(struct!.dnsApplicationListId),
    dns_application_list_version: cdktf.numberToTerraform(struct!.dnsApplicationListVersion),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    icmp_message: cdktf.stringToTerraform(struct!.icmpMessage),
    plp: cdktf.stringToTerraform(struct!.plp),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_data_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataPrefixListId),
    source_data_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataPrefixListVersion),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    traffic_to: cdktf.stringToTerraform(struct!.trafficTo),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_list_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_list_version: {
      value: cdktf.numberToHclTerraform(struct!.applicationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_region: {
      value: cdktf.stringToHclTerraform(struct!.destinationRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_application_list_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsApplicationListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_application_list_version: {
      value: cdktf.numberToHclTerraform(struct!.dnsApplicationListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_message: {
      value: cdktf.stringToHclTerraform(struct!.icmpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plp: {
      value: cdktf.stringToHclTerraform(struct!.plp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataPrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataPrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_to: {
      value: cdktf.stringToHclTerraform(struct!.trafficTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationListId = this._applicationListId;
    }
    if (this._applicationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationListVersion = this._applicationListVersion;
    }
    if (this._destinationDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListId = this._destinationDataPrefixListId;
    }
    if (this._destinationDataPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataPrefixListVersion = this._destinationDataPrefixListVersion;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegion = this._destinationRegion;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dnsApplicationListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsApplicationListId = this._dnsApplicationListId;
    }
    if (this._dnsApplicationListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsApplicationListVersion = this._dnsApplicationListVersion;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._icmpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMessage = this._icmpMessage;
    }
    if (this._plp !== undefined) {
      hasAnyValues = true;
      internalValueResult.plp = this._plp;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceDataPrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListId = this._sourceDataPrefixListId;
    }
    if (this._sourceDataPrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataPrefixListVersion = this._sourceDataPrefixListVersion;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._trafficTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTo = this._trafficTo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationListId = undefined;
      this._applicationListVersion = undefined;
      this._destinationDataPrefixListId = undefined;
      this._destinationDataPrefixListVersion = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._destinationRegion = undefined;
      this._dns = undefined;
      this._dnsApplicationListId = undefined;
      this._dnsApplicationListVersion = undefined;
      this._dscp = undefined;
      this._icmpMessage = undefined;
      this._plp = undefined;
      this._protocol = undefined;
      this._sourceDataPrefixListId = undefined;
      this._sourceDataPrefixListVersion = undefined;
      this._sourceIp = undefined;
      this._sourcePort = undefined;
      this._trafficTo = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationListId = value.applicationListId;
      this._applicationListVersion = value.applicationListVersion;
      this._destinationDataPrefixListId = value.destinationDataPrefixListId;
      this._destinationDataPrefixListVersion = value.destinationDataPrefixListVersion;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._destinationRegion = value.destinationRegion;
      this._dns = value.dns;
      this._dnsApplicationListId = value.dnsApplicationListId;
      this._dnsApplicationListVersion = value.dnsApplicationListVersion;
      this._dscp = value.dscp;
      this._icmpMessage = value.icmpMessage;
      this._plp = value.plp;
      this._protocol = value.protocol;
      this._sourceDataPrefixListId = value.sourceDataPrefixListId;
      this._sourceDataPrefixListVersion = value.sourceDataPrefixListVersion;
      this._sourceIp = value.sourceIp;
      this._sourcePort = value.sourcePort;
      this._trafficTo = value.trafficTo;
      this._type = value.type;
    }
  }

  // application_list_id - computed: false, optional: true, required: false
  private _applicationListId?: string; 
  public get applicationListId() {
    return this.getStringAttribute('application_list_id');
  }
  public set applicationListId(value: string) {
    this._applicationListId = value;
  }
  public resetApplicationListId() {
    this._applicationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListIdInput() {
    return this._applicationListId;
  }

  // application_list_version - computed: false, optional: true, required: false
  private _applicationListVersion?: number; 
  public get applicationListVersion() {
    return this.getNumberAttribute('application_list_version');
  }
  public set applicationListVersion(value: number) {
    this._applicationListVersion = value;
  }
  public resetApplicationListVersion() {
    this._applicationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListVersionInput() {
    return this._applicationListVersion;
  }

  // destination_data_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataPrefixListId?: string; 
  public get destinationDataPrefixListId() {
    return this.getStringAttribute('destination_data_prefix_list_id');
  }
  public set destinationDataPrefixListId(value: string) {
    this._destinationDataPrefixListId = value;
  }
  public resetDestinationDataPrefixListId() {
    this._destinationDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListIdInput() {
    return this._destinationDataPrefixListId;
  }

  // destination_data_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataPrefixListVersion?: number; 
  public get destinationDataPrefixListVersion() {
    return this.getNumberAttribute('destination_data_prefix_list_version');
  }
  public set destinationDataPrefixListVersion(value: number) {
    this._destinationDataPrefixListVersion = value;
  }
  public resetDestinationDataPrefixListVersion() {
    this._destinationDataPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataPrefixListVersionInput() {
    return this._destinationDataPrefixListVersion;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_region - computed: false, optional: true, required: false
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  public resetDestinationRegion() {
    this._destinationRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_application_list_id - computed: false, optional: true, required: false
  private _dnsApplicationListId?: string; 
  public get dnsApplicationListId() {
    return this.getStringAttribute('dns_application_list_id');
  }
  public set dnsApplicationListId(value: string) {
    this._dnsApplicationListId = value;
  }
  public resetDnsApplicationListId() {
    this._dnsApplicationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsApplicationListIdInput() {
    return this._dnsApplicationListId;
  }

  // dns_application_list_version - computed: false, optional: true, required: false
  private _dnsApplicationListVersion?: number; 
  public get dnsApplicationListVersion() {
    return this.getNumberAttribute('dns_application_list_version');
  }
  public set dnsApplicationListVersion(value: number) {
    this._dnsApplicationListVersion = value;
  }
  public resetDnsApplicationListVersion() {
    this._dnsApplicationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsApplicationListVersionInput() {
    return this._dnsApplicationListVersion;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // icmp_message - computed: false, optional: true, required: false
  private _icmpMessage?: string; 
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }
  public set icmpMessage(value: string) {
    this._icmpMessage = value;
  }
  public resetIcmpMessage() {
    this._icmpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMessageInput() {
    return this._icmpMessage;
  }

  // plp - computed: false, optional: true, required: false
  private _plp?: string; 
  public get plp() {
    return this.getStringAttribute('plp');
  }
  public set plp(value: string) {
    this._plp = value;
  }
  public resetPlp() {
    this._plp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plpInput() {
    return this._plp;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_data_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataPrefixListId?: string; 
  public get sourceDataPrefixListId() {
    return this.getStringAttribute('source_data_prefix_list_id');
  }
  public set sourceDataPrefixListId(value: string) {
    this._sourceDataPrefixListId = value;
  }
  public resetSourceDataPrefixListId() {
    this._sourceDataPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListIdInput() {
    return this._sourceDataPrefixListId;
  }

  // source_data_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataPrefixListVersion?: number; 
  public get sourceDataPrefixListVersion() {
    return this.getNumberAttribute('source_data_prefix_list_version');
  }
  public set sourceDataPrefixListVersion(value: number) {
    this._sourceDataPrefixListVersion = value;
  }
  public resetSourceDataPrefixListVersion() {
    this._sourceDataPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataPrefixListVersionInput() {
    return this._sourceDataPrefixListVersion;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // traffic_to - computed: false, optional: true, required: false
  private _trafficTo?: string; 
  public get trafficTo() {
    return this.getStringAttribute('traffic_to');
  }
  public set trafficTo(value: string) {
    this._trafficTo = value;
  }
  public resetTrafficTo() {
    this._trafficTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficToInput() {
    return this._trafficTo;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAwareRoutingPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#action_entries ApplicationAwareRoutingPolicyDefinition#action_entries}
  */
  readonly actionEntries?: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Sequence ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#id ApplicationAwareRoutingPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Sequence IP type, either `ipv4`, `ipv6` or `all`
  *   - Choices: `ipv4`, `ipv6`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#ip_type ApplicationAwareRoutingPolicyDefinition#ip_type}
  */
  readonly ipType?: string;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#match_entries ApplicationAwareRoutingPolicyDefinition#match_entries}
  */
  readonly matchEntries?: ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#name ApplicationAwareRoutingPolicyDefinition#name}
  */
  readonly name: string;
}

export function applicationAwareRoutingPolicyDefinitionSequencesToTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(applicationAwareRoutingPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    id: cdktf.numberToTerraform(struct!.id),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    match_entries: cdktf.listMapper(applicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationAwareRoutingPolicyDefinitionSequencesToHclTerraform(struct?: ApplicationAwareRoutingPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(applicationAwareRoutingPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_entries: {
      value: cdktf.listMapperHcl(applicationAwareRoutingPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAwareRoutingPolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAwareRoutingPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._id = undefined;
      this._ipType = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._id = value.id;
      this._ipType = value.ipType;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new ApplicationAwareRoutingPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: ApplicationAwareRoutingPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: ApplicationAwareRoutingPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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
}

export class ApplicationAwareRoutingPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : ApplicationAwareRoutingPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAwareRoutingPolicyDefinitionSequencesOutputReference {
    return new ApplicationAwareRoutingPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition sdwan_application_aware_routing_policy_definition}
*/
export class ApplicationAwareRoutingPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_aware_routing_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAwareRoutingPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAwareRoutingPolicyDefinition to import
  * @param importFromId The id of the existing ApplicationAwareRoutingPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAwareRoutingPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_aware_routing_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_aware_routing_policy_definition sdwan_application_aware_routing_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAwareRoutingPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationAwareRoutingPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_aware_routing_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._defaultActionSlaClassListId = config.defaultActionSlaClassListId;
    this._defaultActionSlaClassListVersion = config.defaultActionSlaClassListVersion;
    this._description = config.description;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // default_action_sla_class_list_id - computed: false, optional: true, required: false
  private _defaultActionSlaClassListId?: string; 
  public get defaultActionSlaClassListId() {
    return this.getStringAttribute('default_action_sla_class_list_id');
  }
  public set defaultActionSlaClassListId(value: string) {
    this._defaultActionSlaClassListId = value;
  }
  public resetDefaultActionSlaClassListId() {
    this._defaultActionSlaClassListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionSlaClassListIdInput() {
    return this._defaultActionSlaClassListId;
  }

  // default_action_sla_class_list_version - computed: false, optional: true, required: false
  private _defaultActionSlaClassListVersion?: number; 
  public get defaultActionSlaClassListVersion() {
    return this.getNumberAttribute('default_action_sla_class_list_version');
  }
  public set defaultActionSlaClassListVersion(value: number) {
    this._defaultActionSlaClassListVersion = value;
  }
  public resetDefaultActionSlaClassListVersion() {
    this._defaultActionSlaClassListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionSlaClassListVersionInput() {
    return this._defaultActionSlaClassListVersion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // sequences - computed: false, optional: false, required: true
  private _sequences = new ApplicationAwareRoutingPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: ApplicationAwareRoutingPolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      default_action_sla_class_list_id: cdktf.stringToTerraform(this._defaultActionSlaClassListId),
      default_action_sla_class_list_version: cdktf.numberToTerraform(this._defaultActionSlaClassListVersion),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(applicationAwareRoutingPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action_sla_class_list_id: {
        value: cdktf.stringToHclTerraform(this._defaultActionSlaClassListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action_sla_class_list_version: {
        value: cdktf.numberToHclTerraform(this._defaultActionSlaClassListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sequences: {
        value: cdktf.listMapperHcl(applicationAwareRoutingPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAwareRoutingPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
