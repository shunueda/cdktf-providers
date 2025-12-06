// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsqueryQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, the query will be used as compliance check. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#compliance_check_enabled OsqueryQuery#compliance_check_enabled}
  */
  readonly complianceCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Description of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#description OsqueryQuery#description}
  */
  readonly description?: string;
  /**
  * Only run on Osquery versions greater than or equal-to this version string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#minimum_osquery_version OsqueryQuery#minimum_osquery_version}
  */
  readonly minimumOsqueryVersion?: string;
  /**
  * Name of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#name OsqueryQuery#name}
  */
  readonly name: string;
  /**
  * Restrict the query to some platforms, default is 'all' platforms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#platforms OsqueryQuery#platforms}
  */
  readonly platforms?: string[];
  /**
  * Attributes to link a query to a pack for scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#scheduling OsqueryQuery#scheduling}
  */
  readonly scheduling?: OsqueryQueryScheduling;
  /**
  * The SQL query to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#sql OsqueryQuery#sql}
  */
  readonly sql: string;
  /**
  * `ID` of the machine tag that is updated by this query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#tag_id OsqueryQuery#tag_id}
  */
  readonly tagId?: number;
  /**
  * Description of the results returned by the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#value OsqueryQuery#value}
  */
  readonly value?: string;
}
export interface OsqueryQueryScheduling {
  /**
  * If `true`, this query can be denylisted when stopped by the watchdog for excessive resource consumption. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#can_be_denylisted OsqueryQuery#can_be_denylisted}
  */
  readonly canBeDenylisted?: boolean | cdktf.IResolvable;
  /**
  * the query frequency, in seconds. It has a maximum value of 604,800 (1 week).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#interval OsqueryQuery#interval}
  */
  readonly interval: number;
  /**
  * If `true`, remove actions should be logged. Default to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#log_removed_actions OsqueryQuery#log_removed_actions}
  */
  readonly logRemovedActions?: boolean | cdktf.IResolvable;
  /**
  * The `ID` of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#pack_id OsqueryQuery#pack_id}
  */
  readonly packId: number;
  /**
  * Restrict this query to a percentage (1-100) of target hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#shard OsqueryQuery#shard}
  */
  readonly shard?: number;
  /**
  * If `true`, differentials will not be stored and this query will not emulate an event stream. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#snapshot_mode OsqueryQuery#snapshot_mode}
  */
  readonly snapshotMode?: boolean | cdktf.IResolvable;
}

export function osqueryQuerySchedulingToTerraform(struct?: OsqueryQueryScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_be_denylisted: cdktf.booleanToTerraform(struct!.canBeDenylisted),
    interval: cdktf.numberToTerraform(struct!.interval),
    log_removed_actions: cdktf.booleanToTerraform(struct!.logRemovedActions),
    pack_id: cdktf.numberToTerraform(struct!.packId),
    shard: cdktf.numberToTerraform(struct!.shard),
    snapshot_mode: cdktf.booleanToTerraform(struct!.snapshotMode),
  }
}


export function osqueryQuerySchedulingToHclTerraform(struct?: OsqueryQueryScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_be_denylisted: {
      value: cdktf.booleanToHclTerraform(struct!.canBeDenylisted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_removed_actions: {
      value: cdktf.booleanToHclTerraform(struct!.logRemovedActions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pack_id: {
      value: cdktf.numberToHclTerraform(struct!.packId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard: {
      value: cdktf.numberToHclTerraform(struct!.shard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_mode: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsqueryQuerySchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsqueryQueryScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canBeDenylisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.canBeDenylisted = this._canBeDenylisted;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._logRemovedActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRemovedActions = this._logRemovedActions;
    }
    if (this._packId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packId = this._packId;
    }
    if (this._shard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard;
    }
    if (this._snapshotMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotMode = this._snapshotMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsqueryQueryScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canBeDenylisted = undefined;
      this._interval = undefined;
      this._logRemovedActions = undefined;
      this._packId = undefined;
      this._shard = undefined;
      this._snapshotMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canBeDenylisted = value.canBeDenylisted;
      this._interval = value.interval;
      this._logRemovedActions = value.logRemovedActions;
      this._packId = value.packId;
      this._shard = value.shard;
      this._snapshotMode = value.snapshotMode;
    }
  }

  // can_be_denylisted - computed: true, optional: true, required: false
  private _canBeDenylisted?: boolean | cdktf.IResolvable; 
  public get canBeDenylisted() {
    return this.getBooleanAttribute('can_be_denylisted');
  }
  public set canBeDenylisted(value: boolean | cdktf.IResolvable) {
    this._canBeDenylisted = value;
  }
  public resetCanBeDenylisted() {
    this._canBeDenylisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canBeDenylistedInput() {
    return this._canBeDenylisted;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // log_removed_actions - computed: true, optional: true, required: false
  private _logRemovedActions?: boolean | cdktf.IResolvable; 
  public get logRemovedActions() {
    return this.getBooleanAttribute('log_removed_actions');
  }
  public set logRemovedActions(value: boolean | cdktf.IResolvable) {
    this._logRemovedActions = value;
  }
  public resetLogRemovedActions() {
    this._logRemovedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRemovedActionsInput() {
    return this._logRemovedActions;
  }

  // pack_id - computed: false, optional: false, required: true
  private _packId?: number; 
  public get packId() {
    return this.getNumberAttribute('pack_id');
  }
  public set packId(value: number) {
    this._packId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packIdInput() {
    return this._packId;
  }

  // shard - computed: false, optional: true, required: false
  private _shard?: number; 
  public get shard() {
    return this.getNumberAttribute('shard');
  }
  public set shard(value: number) {
    this._shard = value;
  }
  public resetShard() {
    this._shard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // snapshot_mode - computed: true, optional: true, required: false
  private _snapshotMode?: boolean | cdktf.IResolvable; 
  public get snapshotMode() {
    return this.getBooleanAttribute('snapshot_mode');
  }
  public set snapshotMode(value: boolean | cdktf.IResolvable) {
    this._snapshotMode = value;
  }
  public resetSnapshotMode() {
    this._snapshotMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotModeInput() {
    return this._snapshotMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query zentral_osquery_query}
*/
export class OsqueryQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsqueryQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsqueryQuery to import
  * @param importFromId The id of the existing OsqueryQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsqueryQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_query zentral_osquery_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsqueryQueryConfig
  */
  public constructor(scope: Construct, id: string, config: OsqueryQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_query',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complianceCheckEnabled = config.complianceCheckEnabled;
    this._description = config.description;
    this._minimumOsqueryVersion = config.minimumOsqueryVersion;
    this._name = config.name;
    this._platforms = config.platforms;
    this._scheduling.internalValue = config.scheduling;
    this._sql = config.sql;
    this._tagId = config.tagId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_check_enabled - computed: true, optional: true, required: false
  private _complianceCheckEnabled?: boolean | cdktf.IResolvable; 
  public get complianceCheckEnabled() {
    return this.getBooleanAttribute('compliance_check_enabled');
  }
  public set complianceCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._complianceCheckEnabled = value;
  }
  public resetComplianceCheckEnabled() {
    this._complianceCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckEnabledInput() {
    return this._complianceCheckEnabled;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_osquery_version - computed: false, optional: true, required: false
  private _minimumOsqueryVersion?: string; 
  public get minimumOsqueryVersion() {
    return this.getStringAttribute('minimum_osquery_version');
  }
  public set minimumOsqueryVersion(value: string) {
    this._minimumOsqueryVersion = value;
  }
  public resetMinimumOsqueryVersion() {
    this._minimumOsqueryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumOsqueryVersionInput() {
    return this._minimumOsqueryVersion;
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

  // platforms - computed: true, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new OsqueryQuerySchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: OsqueryQueryScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // tag_id - computed: false, optional: true, required: false
  private _tagId?: number; 
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }
  public set tagId(value: number) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
      compliance_check_enabled: cdktf.booleanToTerraform(this._complianceCheckEnabled),
      description: cdktf.stringToTerraform(this._description),
      minimum_osquery_version: cdktf.stringToTerraform(this._minimumOsqueryVersion),
      name: cdktf.stringToTerraform(this._name),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      scheduling: osqueryQuerySchedulingToTerraform(this._scheduling.internalValue),
      sql: cdktf.stringToTerraform(this._sql),
      tag_id: cdktf.numberToTerraform(this._tagId),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._complianceCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_osquery_version: {
        value: cdktf.stringToHclTerraform(this._minimumOsqueryVersion),
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
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scheduling: {
        value: osqueryQuerySchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsqueryQueryScheduling",
      },
      sql: {
        value: cdktf.stringToHclTerraform(this._sql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_id: {
        value: cdktf.numberToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
