// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the GlobalRouter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#description GlobalRouter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#entity_labels GlobalRouter#entity_labels}
  */
  readonly entityLabels?: { [key: string]: string };
  /**
  * Type of the entity. Valid values are: alerts, unspecified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#entity_type GlobalRouter#entity_type}
  */
  readonly entityType: string;
  /**
  * Fallback routing targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#fallback GlobalRouter#fallback}
  */
  readonly fallback?: GlobalRouterFallback[] | cdktf.IResolvable;
  /**
  * Name of the GlobalRouter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#name GlobalRouter#name}
  */
  readonly name: string;
  /**
  * Routing rules for the GlobalRouter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#rules GlobalRouter#rules}
  */
  readonly rules?: GlobalRouterRules[] | cdktf.IResolvable;
}
export interface GlobalRouterFallback {
  /**
  * ID of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#connector_id GlobalRouter#connector_id}
  */
  readonly connectorId: string;
  /**
  * Custom details for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#custom_details GlobalRouter#custom_details}
  */
  readonly customDetails?: { [key: string]: string };
  /**
  * ID of the preset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#preset_id GlobalRouter#preset_id}
  */
  readonly presetId?: string;
}

export function globalRouterFallbackToTerraform(struct?: GlobalRouterFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDetails),
    preset_id: cdktf.stringToTerraform(struct!.presetId),
  }
}


export function globalRouterFallbackToHclTerraform(struct?: GlobalRouterFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preset_id: {
      value: cdktf.stringToHclTerraform(struct!.presetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalRouterFallbackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalRouterFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._customDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDetails = this._customDetails;
    }
    if (this._presetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetId = this._presetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalRouterFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._customDetails = undefined;
      this._presetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._customDetails = value.customDetails;
      this._presetId = value.presetId;
    }
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // custom_details - computed: false, optional: true, required: false
  private _customDetails?: { [key: string]: string }; 
  public get customDetails() {
    return this.getStringMapAttribute('custom_details');
  }
  public set customDetails(value: { [key: string]: string }) {
    this._customDetails = value;
  }
  public resetCustomDetails() {
    this._customDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDetailsInput() {
    return this._customDetails;
  }

  // preset_id - computed: false, optional: true, required: false
  private _presetId?: string; 
  public get presetId() {
    return this.getStringAttribute('preset_id');
  }
  public set presetId(value: string) {
    this._presetId = value;
  }
  public resetPresetId() {
    this._presetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }
}

export class GlobalRouterFallbackList extends cdktf.ComplexList {
  public internalValue? : GlobalRouterFallback[] | cdktf.IResolvable

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
  public get(index: number): GlobalRouterFallbackOutputReference {
    return new GlobalRouterFallbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalRouterRulesTargets {
  /**
  * ID of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#connector_id GlobalRouter#connector_id}
  */
  readonly connectorId: string;
  /**
  * Custom details for the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#custom_details GlobalRouter#custom_details}
  */
  readonly customDetails?: { [key: string]: string };
  /**
  * ID of the preset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#preset_id GlobalRouter#preset_id}
  */
  readonly presetId?: string;
}

export function globalRouterRulesTargetsToTerraform(struct?: GlobalRouterRulesTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDetails),
    preset_id: cdktf.stringToTerraform(struct!.presetId),
  }
}


export function globalRouterRulesTargetsToHclTerraform(struct?: GlobalRouterRulesTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preset_id: {
      value: cdktf.stringToHclTerraform(struct!.presetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalRouterRulesTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalRouterRulesTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._customDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDetails = this._customDetails;
    }
    if (this._presetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetId = this._presetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalRouterRulesTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._customDetails = undefined;
      this._presetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._customDetails = value.customDetails;
      this._presetId = value.presetId;
    }
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // custom_details - computed: false, optional: true, required: false
  private _customDetails?: { [key: string]: string }; 
  public get customDetails() {
    return this.getStringMapAttribute('custom_details');
  }
  public set customDetails(value: { [key: string]: string }) {
    this._customDetails = value;
  }
  public resetCustomDetails() {
    this._customDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDetailsInput() {
    return this._customDetails;
  }

  // preset_id - computed: false, optional: true, required: false
  private _presetId?: string; 
  public get presetId() {
    return this.getStringAttribute('preset_id');
  }
  public set presetId(value: string) {
    this._presetId = value;
  }
  public resetPresetId() {
    this._presetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }
}

export class GlobalRouterRulesTargetsList extends cdktf.ComplexList {
  public internalValue? : GlobalRouterRulesTargets[] | cdktf.IResolvable

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
  public get(index: number): GlobalRouterRulesTargetsOutputReference {
    return new GlobalRouterRulesTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalRouterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#condition GlobalRouter#condition}
  */
  readonly condition: string;
  /**
  * Custom details for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#custom_details GlobalRouter#custom_details}
  */
  readonly customDetails?: { [key: string]: string };
  /**
  * Name of the routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#name GlobalRouter#name}
  */
  readonly name: string;
  /**
  * Routing targets for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#targets GlobalRouter#targets}
  */
  readonly targets?: GlobalRouterRulesTargets[] | cdktf.IResolvable;
}

export function globalRouterRulesToTerraform(struct?: GlobalRouterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDetails),
    name: cdktf.stringToTerraform(struct!.name),
    targets: cdktf.listMapper(globalRouterRulesTargetsToTerraform, false)(struct!.targets),
  }
}


export function globalRouterRulesToHclTerraform(struct?: GlobalRouterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(globalRouterRulesTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalRouterRulesTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalRouterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalRouterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._customDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDetails = this._customDetails;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalRouterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._customDetails = undefined;
      this._name = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._customDetails = value.customDetails;
      this._name = value.name;
      this._targets.internalValue = value.targets;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // custom_details - computed: false, optional: true, required: false
  private _customDetails?: { [key: string]: string }; 
  public get customDetails() {
    return this.getStringMapAttribute('custom_details');
  }
  public set customDetails(value: { [key: string]: string }) {
    this._customDetails = value;
  }
  public resetCustomDetails() {
    this._customDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDetailsInput() {
    return this._customDetails;
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

  // targets - computed: false, optional: true, required: false
  private _targets = new GlobalRouterRulesTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GlobalRouterRulesTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class GlobalRouterRulesList extends cdktf.ComplexList {
  public internalValue? : GlobalRouterRules[] | cdktf.IResolvable

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
  public get(index: number): GlobalRouterRulesOutputReference {
    return new GlobalRouterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router coralogix_global_router}
*/
export class GlobalRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_global_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalRouter to import
  * @param importFromId The id of the existing GlobalRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_global_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/global_router coralogix_global_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalRouterConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_global_router',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._entityLabels = config.entityLabels;
    this._entityType = config.entityType;
    this._fallback.internalValue = config.fallback;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entity_labels - computed: false, optional: true, required: false
  private _entityLabels?: { [key: string]: string }; 
  public get entityLabels() {
    return this.getStringMapAttribute('entity_labels');
  }
  public set entityLabels(value: { [key: string]: string }) {
    this._entityLabels = value;
  }
  public resetEntityLabels() {
    this._entityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityLabelsInput() {
    return this._entityLabels;
  }

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

  // fallback - computed: false, optional: true, required: false
  private _fallback = new GlobalRouterFallbackList(this, "fallback", false);
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: GlobalRouterFallback[] | cdktf.IResolvable) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new GlobalRouterRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GlobalRouterRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entity_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._entityLabels),
      entity_type: cdktf.stringToTerraform(this._entityType),
      fallback: cdktf.listMapper(globalRouterFallbackToTerraform, false)(this._fallback.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(globalRouterRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entityLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback: {
        value: cdktf.listMapperHcl(globalRouterFallbackToHclTerraform, false)(this._fallback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalRouterFallbackList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(globalRouterRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalRouterRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
