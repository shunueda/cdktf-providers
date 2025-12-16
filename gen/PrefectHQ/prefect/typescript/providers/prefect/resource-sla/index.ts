// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceSlaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#account_id ResourceSla#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the Prefect resource to set the SLA for, in the format of `prefect.<resource_type>.<resource_id>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#resource_id ResourceSla#resource_id}
  */
  readonly resourceId: string;
  /**
  * List of SLAs to set for the resource. Note that this is a declarative list, and any SLAs that are not defined in this list will be removed from the resource (if they existed previously). Existing SLAs will be updated to match the definitions in this list. See documentation on [Defining SLAs](https://docs.prefect.io/v3/automate/events/slas#defining-slas) for more information, as well as the [API specification](https://app.prefect.cloud/api/docs#tag/SLAs/operation/apply_slas_api_accounts__account_id__workspaces__workspace_id__slas_apply_resource_slas__resource_id__post) for the SLA payload structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#slas ResourceSla#slas}
  */
  readonly slas: ResourceSlaSlas[] | cdktf.IResolvable;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#workspace_id ResourceSla#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface ResourceSlaSlas {
  /**
  * (TimeToCompletion SLA) The maximum flow run duration in seconds allowed before the SLA is violated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#duration ResourceSla#duration}
  */
  readonly duration?: number;
  /**
  * Whether the SLA is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#enabled ResourceSla#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * (Freshness SLA) The event to expect for this SLA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#expected_event ResourceSla#expected_event}
  */
  readonly expectedEvent?: string;
  /**
  * Name of the SLA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#name ResourceSla#name}
  */
  readonly name: string;
  /**
  * Resource that owns this SLA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#owner_resource ResourceSla#owner_resource}
  */
  readonly ownerResource?: string;
  /**
  * (Freshness SLA) The resource to match for this SLA. Use `jsonencode()`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#resource_match ResourceSla#resource_match}
  */
  readonly resourceMatch?: string;
  /**
  * Severity level of the SLA. Can be one of `minor`, `low`, `moderate`, `high`, or `critical`. Defaults to `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#severity ResourceSla#severity}
  */
  readonly severity?: string;
  /**
  * (Frequency SLA) The amount of time after a flow run is considered stale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#stale_after ResourceSla#stale_after}
  */
  readonly staleAfter?: number;
  /**
  * (Freshness SLA or Lateness SLA) The amount of time after a flow run is considered stale or late.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#within ResourceSla#within}
  */
  readonly within?: number;
}

export function resourceSlaSlasToTerraform(struct?: ResourceSlaSlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expected_event: cdktf.stringToTerraform(struct!.expectedEvent),
    name: cdktf.stringToTerraform(struct!.name),
    owner_resource: cdktf.stringToTerraform(struct!.ownerResource),
    resource_match: cdktf.stringToTerraform(struct!.resourceMatch),
    severity: cdktf.stringToTerraform(struct!.severity),
    stale_after: cdktf.numberToTerraform(struct!.staleAfter),
    within: cdktf.numberToTerraform(struct!.within),
  }
}


export function resourceSlaSlasToHclTerraform(struct?: ResourceSlaSlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expected_event: {
      value: cdktf.stringToHclTerraform(struct!.expectedEvent),
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
    owner_resource: {
      value: cdktf.stringToHclTerraform(struct!.ownerResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_match: {
      value: cdktf.stringToHclTerraform(struct!.resourceMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stale_after: {
      value: cdktf.numberToHclTerraform(struct!.staleAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    within: {
      value: cdktf.numberToHclTerraform(struct!.within),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceSlaSlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSlaSlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expectedEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedEvent = this._expectedEvent;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerResource = this._ownerResource;
    }
    if (this._resourceMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceMatch = this._resourceMatch;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._staleAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleAfter = this._staleAfter;
    }
    if (this._within !== undefined) {
      hasAnyValues = true;
      internalValueResult.within = this._within;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSlaSlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._enabled = undefined;
      this._expectedEvent = undefined;
      this._name = undefined;
      this._ownerResource = undefined;
      this._resourceMatch = undefined;
      this._severity = undefined;
      this._staleAfter = undefined;
      this._within = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._enabled = value.enabled;
      this._expectedEvent = value.expectedEvent;
      this._name = value.name;
      this._ownerResource = value.ownerResource;
      this._resourceMatch = value.resourceMatch;
      this._severity = value.severity;
      this._staleAfter = value.staleAfter;
      this._within = value.within;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expected_event - computed: false, optional: true, required: false
  private _expectedEvent?: string; 
  public get expectedEvent() {
    return this.getStringAttribute('expected_event');
  }
  public set expectedEvent(value: string) {
    this._expectedEvent = value;
  }
  public resetExpectedEvent() {
    this._expectedEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedEventInput() {
    return this._expectedEvent;
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

  // owner_resource - computed: false, optional: true, required: false
  private _ownerResource?: string; 
  public get ownerResource() {
    return this.getStringAttribute('owner_resource');
  }
  public set ownerResource(value: string) {
    this._ownerResource = value;
  }
  public resetOwnerResource() {
    this._ownerResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerResourceInput() {
    return this._ownerResource;
  }

  // resource_match - computed: false, optional: true, required: false
  private _resourceMatch?: string; 
  public get resourceMatch() {
    return this.getStringAttribute('resource_match');
  }
  public set resourceMatch(value: string) {
    this._resourceMatch = value;
  }
  public resetResourceMatch() {
    this._resourceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMatchInput() {
    return this._resourceMatch;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // stale_after - computed: false, optional: true, required: false
  private _staleAfter?: number; 
  public get staleAfter() {
    return this.getNumberAttribute('stale_after');
  }
  public set staleAfter(value: number) {
    this._staleAfter = value;
  }
  public resetStaleAfter() {
    this._staleAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleAfterInput() {
    return this._staleAfter;
  }

  // within - computed: false, optional: true, required: false
  private _within?: number; 
  public get within() {
    return this.getNumberAttribute('within');
  }
  public set within(value: number) {
    this._within = value;
  }
  public resetWithin() {
    this._within = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within;
  }
}

export class ResourceSlaSlasList extends cdktf.ComplexList {
  public internalValue? : ResourceSlaSlas[] | cdktf.IResolvable

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
  public get(index: number): ResourceSlaSlasOutputReference {
    return new ResourceSlaSlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla prefect_resource_sla}
*/
export class ResourceSla extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_resource_sla";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceSla resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceSla to import
  * @param importFromId The id of the existing ResourceSla that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceSla to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_resource_sla", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/resource_sla prefect_resource_sla} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceSlaConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceSlaConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_resource_sla',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._resourceId = config.resourceId;
    this._slas.internalValue = config.slas;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // slas - computed: false, optional: false, required: true
  private _slas = new ResourceSlaSlasList(this, "slas", false);
  public get slas() {
    return this._slas;
  }
  public putSlas(value: ResourceSlaSlas[] | cdktf.IResolvable) {
    this._slas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slasInput() {
    return this._slas.internalValue;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      slas: cdktf.listMapper(resourceSlaSlasToTerraform, false)(this._slas.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slas: {
        value: cdktf.listMapperHcl(resourceSlaSlasToHclTerraform, false)(this._slas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceSlaSlasList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
