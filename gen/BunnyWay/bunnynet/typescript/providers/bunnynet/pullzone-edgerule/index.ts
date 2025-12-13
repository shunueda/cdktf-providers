// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneEdgeruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Options: `BlockRequest`, `BypassAwsS3Authentication`, `BypassPermaCache`, `DisableOptimizer`, `DisableShield`, `DisableShieldAccessLists`, `DisableShieldBotDetection`, `DisableShieldChallenge`, `DisableShieldRateLimiting`, `DisableTokenAuthentication`, `DisableWAF`, `EnableTokenAuthentication`, `ForceCompression`, `ForceDownload`, `ForceSSL`, `IgnoreQueryString`, `OriginMagicContainers`, `OriginStorage`, `OriginUrl`, `OverrideBrowserCacheResponseHeader`, `OverrideBrowserCacheTime`, `OverrideCacheTime`, `OverrideCacheTimePublic`, `Redirect`, `RemoveBrowserCacheResponseHeader`, `RetryOrigin`, `RunEdgeScript`, `SetConnectionLimit`, `SetNetworkRateLimit`, `SetRequestHeader`, `SetRequestsPerSecondLimit`, `SetResponseHeader`, `SetStatusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#action PullzoneEdgerule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#action_parameter1 PullzoneEdgerule#action_parameter1}
  */
  readonly actionParameter1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#action_parameter2 PullzoneEdgerule#action_parameter2}
  */
  readonly actionParameter2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#action_parameter3 PullzoneEdgerule#action_parameter3}
  */
  readonly actionParameter3?: string;
  /**
  * List of actions for the edge rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#actions PullzoneEdgerule#actions}
  */
  readonly actions?: PullzoneEdgeruleActions[] | cdktf.IResolvable;
  /**
  * The description of the edge rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#description PullzoneEdgerule#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the edge rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#enabled PullzoneEdgerule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Options: `MatchAll`, `MatchAny`, `MatchNone`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#match_type PullzoneEdgerule#match_type}
  */
  readonly matchType?: string;
  /**
  * The priority of the edge rule. The lower number is executed first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#priority PullzoneEdgerule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#pullzone PullzoneEdgerule#pullzone}
  */
  readonly pullzone: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#triggers PullzoneEdgerule#triggers}
  */
  readonly triggers: PullzoneEdgeruleTriggers[] | cdktf.IResolvable;
}
export interface PullzoneEdgeruleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#parameter1 PullzoneEdgerule#parameter1}
  */
  readonly parameter1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#parameter2 PullzoneEdgerule#parameter2}
  */
  readonly parameter2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#parameter3 PullzoneEdgerule#parameter3}
  */
  readonly parameter3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#type PullzoneEdgerule#type}
  */
  readonly type?: string;
}

export function pullzoneEdgeruleActionsToTerraform(struct?: PullzoneEdgeruleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter1: cdktf.stringToTerraform(struct!.parameter1),
    parameter2: cdktf.stringToTerraform(struct!.parameter2),
    parameter3: cdktf.stringToTerraform(struct!.parameter3),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pullzoneEdgeruleActionsToHclTerraform(struct?: PullzoneEdgeruleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter1: {
      value: cdktf.stringToHclTerraform(struct!.parameter1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter2: {
      value: cdktf.stringToHclTerraform(struct!.parameter2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter3: {
      value: cdktf.stringToHclTerraform(struct!.parameter3),
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

export class PullzoneEdgeruleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PullzoneEdgeruleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter1 = this._parameter1;
    }
    if (this._parameter2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter2 = this._parameter2;
    }
    if (this._parameter3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter3 = this._parameter3;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneEdgeruleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter1 = undefined;
      this._parameter2 = undefined;
      this._parameter3 = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter1 = value.parameter1;
      this._parameter2 = value.parameter2;
      this._parameter3 = value.parameter3;
      this._type = value.type;
    }
  }

  // parameter1 - computed: true, optional: true, required: false
  private _parameter1?: string; 
  public get parameter1() {
    return this.getStringAttribute('parameter1');
  }
  public set parameter1(value: string) {
    this._parameter1 = value;
  }
  public resetParameter1() {
    this._parameter1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameter1Input() {
    return this._parameter1;
  }

  // parameter2 - computed: true, optional: true, required: false
  private _parameter2?: string; 
  public get parameter2() {
    return this.getStringAttribute('parameter2');
  }
  public set parameter2(value: string) {
    this._parameter2 = value;
  }
  public resetParameter2() {
    this._parameter2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameter2Input() {
    return this._parameter2;
  }

  // parameter3 - computed: true, optional: true, required: false
  private _parameter3?: string; 
  public get parameter3() {
    return this.getStringAttribute('parameter3');
  }
  public set parameter3(value: string) {
    this._parameter3 = value;
  }
  public resetParameter3() {
    this._parameter3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameter3Input() {
    return this._parameter3;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PullzoneEdgeruleActionsList extends cdktf.ComplexList {
  public internalValue? : PullzoneEdgeruleActions[] | cdktf.IResolvable

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
  public get(index: number): PullzoneEdgeruleActionsOutputReference {
    return new PullzoneEdgeruleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PullzoneEdgeruleTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#match_type PullzoneEdgerule#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#parameter1 PullzoneEdgerule#parameter1}
  */
  readonly parameter1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#parameter2 PullzoneEdgerule#parameter2}
  */
  readonly parameter2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#patterns PullzoneEdgerule#patterns}
  */
  readonly patterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#type PullzoneEdgerule#type}
  */
  readonly type: string;
}

export function pullzoneEdgeruleTriggersToTerraform(struct?: PullzoneEdgeruleTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    parameter1: cdktf.stringToTerraform(struct!.parameter1),
    parameter2: cdktf.stringToTerraform(struct!.parameter2),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pullzoneEdgeruleTriggersToHclTerraform(struct?: PullzoneEdgeruleTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter1: {
      value: cdktf.stringToHclTerraform(struct!.parameter1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter2: {
      value: cdktf.stringToHclTerraform(struct!.parameter2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class PullzoneEdgeruleTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PullzoneEdgeruleTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._parameter1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter1 = this._parameter1;
    }
    if (this._parameter2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter2 = this._parameter2;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneEdgeruleTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._parameter1 = undefined;
      this._parameter2 = undefined;
      this._patterns = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._parameter1 = value.parameter1;
      this._parameter2 = value.parameter2;
      this._patterns = value.patterns;
      this._type = value.type;
    }
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // parameter1 - computed: false, optional: false, required: true
  private _parameter1?: string; 
  public get parameter1() {
    return this.getStringAttribute('parameter1');
  }
  public set parameter1(value: string) {
    this._parameter1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameter1Input() {
    return this._parameter1;
  }

  // parameter2 - computed: false, optional: false, required: true
  private _parameter2?: string; 
  public get parameter2() {
    return this.getStringAttribute('parameter2');
  }
  public set parameter2(value: string) {
    this._parameter2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameter2Input() {
    return this._parameter2;
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
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

export class PullzoneEdgeruleTriggersList extends cdktf.ComplexList {
  public internalValue? : PullzoneEdgeruleTriggers[] | cdktf.IResolvable

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
  public get(index: number): PullzoneEdgeruleTriggersOutputReference {
    return new PullzoneEdgeruleTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule bunnynet_pullzone_edgerule}
*/
export class PullzoneEdgerule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_edgerule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneEdgerule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneEdgerule to import
  * @param importFromId The id of the existing PullzoneEdgerule that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneEdgerule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_edgerule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_edgerule bunnynet_pullzone_edgerule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneEdgeruleConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneEdgeruleConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_edgerule',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.4',
        providerVersionConstraint: '0.11.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._actionParameter1 = config.actionParameter1;
    this._actionParameter2 = config.actionParameter2;
    this._actionParameter3 = config.actionParameter3;
    this._actions.internalValue = config.actions;
    this._description = config.description;
    this._enabled = config.enabled;
    this._matchType = config.matchType;
    this._priority = config.priority;
    this._pullzone = config.pullzone;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_parameter1 - computed: false, optional: true, required: false
  private _actionParameter1?: string; 
  public get actionParameter1() {
    return this.getStringAttribute('action_parameter1');
  }
  public set actionParameter1(value: string) {
    this._actionParameter1 = value;
  }
  public resetActionParameter1() {
    this._actionParameter1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParameter1Input() {
    return this._actionParameter1;
  }

  // action_parameter2 - computed: false, optional: true, required: false
  private _actionParameter2?: string; 
  public get actionParameter2() {
    return this.getStringAttribute('action_parameter2');
  }
  public set actionParameter2(value: string) {
    this._actionParameter2 = value;
  }
  public resetActionParameter2() {
    this._actionParameter2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParameter2Input() {
    return this._actionParameter2;
  }

  // action_parameter3 - computed: false, optional: true, required: false
  private _actionParameter3?: string; 
  public get actionParameter3() {
    return this.getStringAttribute('action_parameter3');
  }
  public set actionParameter3(value: string) {
    this._actionParameter3 = value;
  }
  public resetActionParameter3() {
    this._actionParameter3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParameter3Input() {
    return this._actionParameter3;
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new PullzoneEdgeruleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: PullzoneEdgeruleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new PullzoneEdgeruleTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: PullzoneEdgeruleTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      action_parameter1: cdktf.stringToTerraform(this._actionParameter1),
      action_parameter2: cdktf.stringToTerraform(this._actionParameter2),
      action_parameter3: cdktf.stringToTerraform(this._actionParameter3),
      actions: cdktf.listMapper(pullzoneEdgeruleActionsToTerraform, false)(this._actions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      match_type: cdktf.stringToTerraform(this._matchType),
      priority: cdktf.numberToTerraform(this._priority),
      pullzone: cdktf.numberToTerraform(this._pullzone),
      triggers: cdktf.listMapper(pullzoneEdgeruleTriggersToTerraform, false)(this._triggers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_parameter1: {
        value: cdktf.stringToHclTerraform(this._actionParameter1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_parameter2: {
        value: cdktf.stringToHclTerraform(this._actionParameter2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_parameter3: {
        value: cdktf.stringToHclTerraform(this._actionParameter3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(pullzoneEdgeruleActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PullzoneEdgeruleActionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      triggers: {
        value: cdktf.listMapperHcl(pullzoneEdgeruleTriggersToHclTerraform, false)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PullzoneEdgeruleTriggersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
