// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#id PlatformSlo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#identifier PlatformSlo#identifier}
  */
  readonly identifier: string;
  /**
  * Identifier of the organization in which the SLO is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#org_id PlatformSlo#org_id}
  */
  readonly orgId: string;
  /**
  * Identifier of the project in which the SLO is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#project_id PlatformSlo#project_id}
  */
  readonly projectId: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#request PlatformSlo#request}
  */
  readonly request?: PlatformSloRequest;
}
export interface PlatformSloRequestNotificationRuleRefs {
  /**
  * Enable or disable notification rule reference for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#enabled PlatformSlo#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Notification rule reference for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#notification_rule_ref PlatformSlo#notification_rule_ref}
  */
  readonly notificationRuleRef: string;
}

export function platformSloRequestNotificationRuleRefsToTerraform(struct?: PlatformSloRequestNotificationRuleRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notification_rule_ref: cdktf.stringToTerraform(struct!.notificationRuleRef),
  }
}


export function platformSloRequestNotificationRuleRefsToHclTerraform(struct?: PlatformSloRequestNotificationRuleRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_rule_ref: {
      value: cdktf.stringToHclTerraform(struct!.notificationRuleRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloRequestNotificationRuleRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformSloRequestNotificationRuleRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notificationRuleRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRuleRef = this._notificationRuleRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloRequestNotificationRuleRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._notificationRuleRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._notificationRuleRef = value.notificationRuleRef;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // notification_rule_ref - computed: false, optional: false, required: true
  private _notificationRuleRef?: string; 
  public get notificationRuleRef() {
    return this.getStringAttribute('notification_rule_ref');
  }
  public set notificationRuleRef(value: string) {
    this._notificationRuleRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleRefInput() {
    return this._notificationRuleRef;
  }
}

export class PlatformSloRequestNotificationRuleRefsList extends cdktf.ComplexList {
  public internalValue? : PlatformSloRequestNotificationRuleRefs[] | cdktf.IResolvable

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
  public get(index: number): PlatformSloRequestNotificationRuleRefsOutputReference {
    return new PlatformSloRequestNotificationRuleRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformSloRequestSloTarget {
  /**
  * Target percentage for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#slo_target_percentage PlatformSlo#slo_target_percentage}
  */
  readonly sloTargetPercentage: number;
  /**
  * Specification of the SLO Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#spec PlatformSlo#spec}
  */
  readonly spec: string;
  /**
  * Type of the SLO target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#type PlatformSlo#type}
  */
  readonly type: string;
}

export function platformSloRequestSloTargetToTerraform(struct?: PlatformSloRequestSloTargetOutputReference | PlatformSloRequestSloTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_target_percentage: cdktf.numberToTerraform(struct!.sloTargetPercentage),
    spec: cdktf.stringToTerraform(struct!.spec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformSloRequestSloTargetToHclTerraform(struct?: PlatformSloRequestSloTargetOutputReference | PlatformSloRequestSloTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_target_percentage: {
      value: cdktf.numberToHclTerraform(struct!.sloTargetPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
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

export class PlatformSloRequestSloTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloRequestSloTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloTargetPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloTargetPercentage = this._sloTargetPercentage;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloRequestSloTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sloTargetPercentage = undefined;
      this._spec = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sloTargetPercentage = value.sloTargetPercentage;
      this._spec = value.spec;
      this._type = value.type;
    }
  }

  // slo_target_percentage - computed: false, optional: false, required: true
  private _sloTargetPercentage?: number; 
  public get sloTargetPercentage() {
    return this.getNumberAttribute('slo_target_percentage');
  }
  public set sloTargetPercentage(value: number) {
    this._sloTargetPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloTargetPercentageInput() {
    return this._sloTargetPercentage;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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
export interface PlatformSloRequest {
  /**
  * Description for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#description PlatformSlo#description}
  */
  readonly description?: string;
  /**
  * Name for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#name PlatformSlo#name}
  */
  readonly name: string;
  /**
  * Specification of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#spec PlatformSlo#spec}
  */
  readonly spec: string;
  /**
  * Tags for the SLO. comma-separated key value string pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#tags PlatformSlo#tags}
  */
  readonly tags?: string[];
  /**
  * Type of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#type PlatformSlo#type}
  */
  readonly type: string;
  /**
  * User journey reference list for the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#user_journey_refs PlatformSlo#user_journey_refs}
  */
  readonly userJourneyRefs: string[];
  /**
  * notification_rule_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#notification_rule_refs PlatformSlo#notification_rule_refs}
  */
  readonly notificationRuleRefs?: PlatformSloRequestNotificationRuleRefs[] | cdktf.IResolvable;
  /**
  * slo_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#slo_target PlatformSlo#slo_target}
  */
  readonly sloTarget: PlatformSloRequestSloTarget;
}

export function platformSloRequestToTerraform(struct?: PlatformSloRequestOutputReference | PlatformSloRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    spec: cdktf.stringToTerraform(struct!.spec),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    user_journey_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userJourneyRefs),
    notification_rule_refs: cdktf.listMapper(platformSloRequestNotificationRuleRefsToTerraform, true)(struct!.notificationRuleRefs),
    slo_target: platformSloRequestSloTargetToTerraform(struct!.sloTarget),
  }
}


export function platformSloRequestToHclTerraform(struct?: PlatformSloRequestOutputReference | PlatformSloRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_journey_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userJourneyRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_rule_refs: {
      value: cdktf.listMapperHcl(platformSloRequestNotificationRuleRefsToHclTerraform, true)(struct!.notificationRuleRefs),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSloRequestNotificationRuleRefsList",
    },
    slo_target: {
      value: platformSloRequestSloTargetToHclTerraform(struct!.sloTarget),
      isBlock: true,
      type: "set",
      storageClassType: "PlatformSloRequestSloTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSloRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSloRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userJourneyRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.userJourneyRefs = this._userJourneyRefs;
    }
    if (this._notificationRuleRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRuleRefs = this._notificationRuleRefs?.internalValue;
    }
    if (this._sloTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloTarget = this._sloTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSloRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._spec = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._userJourneyRefs = undefined;
      this._notificationRuleRefs.internalValue = undefined;
      this._sloTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._spec = value.spec;
      this._tags = value.tags;
      this._type = value.type;
      this._userJourneyRefs = value.userJourneyRefs;
      this._notificationRuleRefs.internalValue = value.notificationRuleRefs;
      this._sloTarget.internalValue = value.sloTarget;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // user_journey_refs - computed: false, optional: false, required: true
  private _userJourneyRefs?: string[]; 
  public get userJourneyRefs() {
    return this.getListAttribute('user_journey_refs');
  }
  public set userJourneyRefs(value: string[]) {
    this._userJourneyRefs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userJourneyRefsInput() {
    return this._userJourneyRefs;
  }

  // notification_rule_refs - computed: false, optional: true, required: false
  private _notificationRuleRefs = new PlatformSloRequestNotificationRuleRefsList(this, "notification_rule_refs", false);
  public get notificationRuleRefs() {
    return this._notificationRuleRefs;
  }
  public putNotificationRuleRefs(value: PlatformSloRequestNotificationRuleRefs[] | cdktf.IResolvable) {
    this._notificationRuleRefs.internalValue = value;
  }
  public resetNotificationRuleRefs() {
    this._notificationRuleRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleRefsInput() {
    return this._notificationRuleRefs.internalValue;
  }

  // slo_target - computed: false, optional: false, required: true
  private _sloTarget = new PlatformSloRequestSloTargetOutputReference(this, "slo_target");
  public get sloTarget() {
    return this._sloTarget;
  }
  public putSloTarget(value: PlatformSloRequestSloTarget) {
    this._sloTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloTargetInput() {
    return this._sloTarget.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo harness_platform_slo}
*/
export class PlatformSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformSlo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformSlo to import
  * @param importFromId The id of the existing PlatformSlo that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformSlo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_slo harness_platform_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformSloConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformSloConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_slo',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
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
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._request.internalValue = config.request;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // request - computed: false, optional: true, required: false
  private _request = new PlatformSloRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: PlatformSloRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      request: platformSloRequestToTerraform(this._request.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: platformSloRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSloRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
