// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionalityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Backstage entity id associated to this functionality. eg: :namespace/:kind/:entity_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#backstage_id Functionality#backstage_id}
  */
  readonly backstageId?: string;
  /**
  * The hex color of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#color Functionality#color}
  */
  readonly color?: string;
  /**
  * The Cortex group id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#cortex_id Functionality#cortex_id}
  */
  readonly cortexId?: string;
  /**
  * The description of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#description Functionality#description}
  */
  readonly description?: string;
  /**
  * Environments associated with this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#environment_ids Functionality#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * The external id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#external_id Functionality#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#id Functionality#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#name Functionality#name}
  */
  readonly name: string;
  /**
  * Emails attached to the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#notify_emails Functionality#notify_emails}
  */
  readonly notifyEmails?: string[];
  /**
  * The Opsgenie service id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#opsgenie_id Functionality#opsgenie_id}
  */
  readonly opsgenieId?: string;
  /**
  * The Opsgenie team id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#opsgenie_team_id Functionality#opsgenie_team_id}
  */
  readonly opsgenieTeamId?: string;
  /**
  * Owner Teams associated with this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#owner_group_ids Functionality#owner_group_ids}
  */
  readonly ownerGroupIds?: string[];
  /**
  * Owner Users associated with this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#owner_user_ids Functionality#owner_user_ids}
  */
  readonly ownerUserIds?: number[];
  /**
  * The PagerDuty service id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#pagerduty_id Functionality#pagerduty_id}
  */
  readonly pagerdutyId?: string;
  /**
  * Position of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#position Functionality#position}
  */
  readonly position?: number;
  /**
  * The public description of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#public_description Functionality#public_description}
  */
  readonly publicDescription?: string;
  /**
  * Services associated with this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#service_ids Functionality#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * The Service Now CI sys id associated to this functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#service_now_ci_sys_id Functionality#service_now_ci_sys_id}
  */
  readonly serviceNowCiSysId?: string;
  /**
  * The slug of the functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#slug Functionality#slug}
  */
  readonly slug?: string;
  /**
  * slack_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#slack_aliases Functionality#slack_aliases}
  */
  readonly slackAliases?: FunctionalitySlackAliases[] | cdktf.IResolvable;
  /**
  * slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#slack_channels Functionality#slack_channels}
  */
  readonly slackChannels?: FunctionalitySlackChannels[] | cdktf.IResolvable;
}
export interface FunctionalitySlackAliases {
  /**
  * Slack alias ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#id Functionality#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#name Functionality#name}
  */
  readonly name?: string;
}

export function functionalitySlackAliasesToTerraform(struct?: FunctionalitySlackAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function functionalitySlackAliasesToHclTerraform(struct?: FunctionalitySlackAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class FunctionalitySlackAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionalitySlackAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionalitySlackAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class FunctionalitySlackAliasesList extends cdktf.ComplexList {
  public internalValue? : FunctionalitySlackAliases[] | cdktf.IResolvable

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
  public get(index: number): FunctionalitySlackAliasesOutputReference {
    return new FunctionalitySlackAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionalitySlackChannels {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#id Functionality#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#name Functionality#name}
  */
  readonly name?: string;
}

export function functionalitySlackChannelsToTerraform(struct?: FunctionalitySlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function functionalitySlackChannelsToHclTerraform(struct?: FunctionalitySlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class FunctionalitySlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionalitySlackChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionalitySlackChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class FunctionalitySlackChannelsList extends cdktf.ComplexList {
  public internalValue? : FunctionalitySlackChannels[] | cdktf.IResolvable

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
  public get(index: number): FunctionalitySlackChannelsOutputReference {
    return new FunctionalitySlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality rootly_functionality}
*/
export class Functionality extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_functionality";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Functionality resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Functionality to import
  * @param importFromId The id of the existing Functionality that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Functionality to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_functionality", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/functionality rootly_functionality} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionalityConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionalityConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_functionality',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backstageId = config.backstageId;
    this._color = config.color;
    this._cortexId = config.cortexId;
    this._description = config.description;
    this._environmentIds = config.environmentIds;
    this._externalId = config.externalId;
    this._id = config.id;
    this._name = config.name;
    this._notifyEmails = config.notifyEmails;
    this._opsgenieId = config.opsgenieId;
    this._opsgenieTeamId = config.opsgenieTeamId;
    this._ownerGroupIds = config.ownerGroupIds;
    this._ownerUserIds = config.ownerUserIds;
    this._pagerdutyId = config.pagerdutyId;
    this._position = config.position;
    this._publicDescription = config.publicDescription;
    this._serviceIds = config.serviceIds;
    this._serviceNowCiSysId = config.serviceNowCiSysId;
    this._slug = config.slug;
    this._slackAliases.internalValue = config.slackAliases;
    this._slackChannels.internalValue = config.slackChannels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backstage_id - computed: true, optional: true, required: false
  private _backstageId?: string; 
  public get backstageId() {
    return this.getStringAttribute('backstage_id');
  }
  public set backstageId(value: string) {
    this._backstageId = value;
  }
  public resetBackstageId() {
    this._backstageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backstageIdInput() {
    return this._backstageId;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // cortex_id - computed: true, optional: true, required: false
  private _cortexId?: string; 
  public get cortexId() {
    return this.getStringAttribute('cortex_id');
  }
  public set cortexId(value: string) {
    this._cortexId = value;
  }
  public resetCortexId() {
    this._cortexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexIdInput() {
    return this._cortexId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // notify_emails - computed: false, optional: true, required: false
  private _notifyEmails?: string[]; 
  public get notifyEmails() {
    return this.getListAttribute('notify_emails');
  }
  public set notifyEmails(value: string[]) {
    this._notifyEmails = value;
  }
  public resetNotifyEmails() {
    this._notifyEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailsInput() {
    return this._notifyEmails;
  }

  // opsgenie_id - computed: true, optional: true, required: false
  private _opsgenieId?: string; 
  public get opsgenieId() {
    return this.getStringAttribute('opsgenie_id');
  }
  public set opsgenieId(value: string) {
    this._opsgenieId = value;
  }
  public resetOpsgenieId() {
    this._opsgenieId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieIdInput() {
    return this._opsgenieId;
  }

  // opsgenie_team_id - computed: true, optional: true, required: false
  private _opsgenieTeamId?: string; 
  public get opsgenieTeamId() {
    return this.getStringAttribute('opsgenie_team_id');
  }
  public set opsgenieTeamId(value: string) {
    this._opsgenieTeamId = value;
  }
  public resetOpsgenieTeamId() {
    this._opsgenieTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieTeamIdInput() {
    return this._opsgenieTeamId;
  }

  // owner_group_ids - computed: false, optional: true, required: false
  private _ownerGroupIds?: string[]; 
  public get ownerGroupIds() {
    return this.getListAttribute('owner_group_ids');
  }
  public set ownerGroupIds(value: string[]) {
    this._ownerGroupIds = value;
  }
  public resetOwnerGroupIds() {
    this._ownerGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdsInput() {
    return this._ownerGroupIds;
  }

  // owner_user_ids - computed: false, optional: true, required: false
  private _ownerUserIds?: number[]; 
  public get ownerUserIds() {
    return this.getNumberListAttribute('owner_user_ids');
  }
  public set ownerUserIds(value: number[]) {
    this._ownerUserIds = value;
  }
  public resetOwnerUserIds() {
    this._ownerUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdsInput() {
    return this._ownerUserIds;
  }

  // pagerduty_id - computed: true, optional: true, required: false
  private _pagerdutyId?: string; 
  public get pagerdutyId() {
    return this.getStringAttribute('pagerduty_id');
  }
  public set pagerdutyId(value: string) {
    this._pagerdutyId = value;
  }
  public resetPagerdutyId() {
    this._pagerdutyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyIdInput() {
    return this._pagerdutyId;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // public_description - computed: true, optional: true, required: false
  private _publicDescription?: string; 
  public get publicDescription() {
    return this.getStringAttribute('public_description');
  }
  public set publicDescription(value: string) {
    this._publicDescription = value;
  }
  public resetPublicDescription() {
    this._publicDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDescriptionInput() {
    return this._publicDescription;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // service_now_ci_sys_id - computed: true, optional: true, required: false
  private _serviceNowCiSysId?: string; 
  public get serviceNowCiSysId() {
    return this.getStringAttribute('service_now_ci_sys_id');
  }
  public set serviceNowCiSysId(value: string) {
    this._serviceNowCiSysId = value;
  }
  public resetServiceNowCiSysId() {
    this._serviceNowCiSysId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowCiSysIdInput() {
    return this._serviceNowCiSysId;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // slack_aliases - computed: false, optional: true, required: false
  private _slackAliases = new FunctionalitySlackAliasesList(this, "slack_aliases", false);
  public get slackAliases() {
    return this._slackAliases;
  }
  public putSlackAliases(value: FunctionalitySlackAliases[] | cdktf.IResolvable) {
    this._slackAliases.internalValue = value;
  }
  public resetSlackAliases() {
    this._slackAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAliasesInput() {
    return this._slackAliases.internalValue;
  }

  // slack_channels - computed: false, optional: true, required: false
  private _slackChannels = new FunctionalitySlackChannelsList(this, "slack_channels", false);
  public get slackChannels() {
    return this._slackChannels;
  }
  public putSlackChannels(value: FunctionalitySlackChannels[] | cdktf.IResolvable) {
    this._slackChannels.internalValue = value;
  }
  public resetSlackChannels() {
    this._slackChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelsInput() {
    return this._slackChannels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backstage_id: cdktf.stringToTerraform(this._backstageId),
      color: cdktf.stringToTerraform(this._color),
      cortex_id: cdktf.stringToTerraform(this._cortexId),
      description: cdktf.stringToTerraform(this._description),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      opsgenie_id: cdktf.stringToTerraform(this._opsgenieId),
      opsgenie_team_id: cdktf.stringToTerraform(this._opsgenieTeamId),
      owner_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownerGroupIds),
      owner_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserIds),
      pagerduty_id: cdktf.stringToTerraform(this._pagerdutyId),
      position: cdktf.numberToTerraform(this._position),
      public_description: cdktf.stringToTerraform(this._publicDescription),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      service_now_ci_sys_id: cdktf.stringToTerraform(this._serviceNowCiSysId),
      slug: cdktf.stringToTerraform(this._slug),
      slack_aliases: cdktf.listMapper(functionalitySlackAliasesToTerraform, true)(this._slackAliases.internalValue),
      slack_channels: cdktf.listMapper(functionalitySlackChannelsToTerraform, true)(this._slackChannels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backstage_id: {
        value: cdktf.stringToHclTerraform(this._backstageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cortex_id: {
        value: cdktf.stringToHclTerraform(this._cortexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opsgenie_id: {
        value: cdktf.stringToHclTerraform(this._opsgenieId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opsgenie_team_id: {
        value: cdktf.stringToHclTerraform(this._opsgenieTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownerGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      owner_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      pagerduty_id: {
        value: cdktf.stringToHclTerraform(this._pagerdutyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_description: {
        value: cdktf.stringToHclTerraform(this._publicDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_now_ci_sys_id: {
        value: cdktf.stringToHclTerraform(this._serviceNowCiSysId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_aliases: {
        value: cdktf.listMapperHcl(functionalitySlackAliasesToHclTerraform, true)(this._slackAliases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionalitySlackAliasesList",
      },
      slack_channels: {
        value: cdktf.listMapperHcl(functionalitySlackChannelsToHclTerraform, true)(this._slackChannels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionalitySlackChannelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
