// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcLbdnConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of linked auth zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#auth_zones DtcLbdn#auth_zones}
  */
  readonly authZones?: string[];
  /**
  * Flag for enabling auto managing DTC Consolidated Monitors on related DTC Pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#auto_consolidated_monitors DtcLbdn#auto_consolidated_monitors}
  */
  readonly autoConsolidatedMonitors?: boolean | cdktf.IResolvable;
  /**
  * Comment for the DTC LBDN; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#comment DtcLbdn#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether the DTC LBDN is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#disable DtcLbdn#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#extattrs DtcLbdn#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The load balancing method. Used to select pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#lb_method DtcLbdn#lb_method}
  */
  readonly lbMethod: string;
  /**
  * The display name of the DTC LBDN, not DNS related.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#name DtcLbdn#name}
  */
  readonly name: string;
  /**
  * LBDN wildcards for pattern match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#patterns DtcLbdn#patterns}
  */
  readonly patterns?: string[];
  /**
  * Maximum time, in seconds, for which client specific LBDN responses will be cached. Zero specifies no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#persistence DtcLbdn#persistence}
  */
  readonly persistence?: number;
  /**
  * The maximum time, in seconds, for which client specific LBDN responses will be cached. Zero specifies no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#pools DtcLbdn#pools}
  */
  readonly pools?: DtcLbdnPools[] | cdktf.IResolvable;
  /**
  * The LBDN pattern match priority for "overlapping" DTC LBDN objects. LBDNs are "overlapping" if they are simultaneously assigned to a zone and have patterns that can match the same FQDN. The matching LBDN with highest priority (lowest ordinal) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#priority DtcLbdn#priority}
  */
  readonly priority?: number;
  /**
  * The topology rules for TOPOLOGY method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#topology DtcLbdn#topology}
  */
  readonly topology?: string;
  /**
  * Time-to-live value of the record, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#ttl DtcLbdn#ttl}
  */
  readonly ttl?: number;
  /**
  * The list of resource record types supported by LBDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#types DtcLbdn#types}
  */
  readonly types?: string[];
  /**
  * Flag to indicate whether the TTL value should be used for the LBDN record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#use_ttl DtcLbdn#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
}
export interface DtcLbdnHealth {
}

export function dtcLbdnHealthToTerraform(struct?: DtcLbdnHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dtcLbdnHealthToHclTerraform(struct?: DtcLbdnHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DtcLbdnHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtcLbdnHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcLbdnHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled_state - computed: true, optional: false, required: false
  public get enabledState() {
    return this.getStringAttribute('enabled_state');
  }
}
export interface DtcLbdnPools {
  /**
  * The pool to link with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#pool DtcLbdn#pool}
  */
  readonly pool?: string;
  /**
  * The weight of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#ratio DtcLbdn#ratio}
  */
  readonly ratio?: number;
}

export function dtcLbdnPoolsToTerraform(struct?: DtcLbdnPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dtcLbdnPoolsToHclTerraform(struct?: DtcLbdnPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcLbdnPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcLbdnPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcLbdnPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pool = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pool = value.pool;
      this._ratio = value.ratio;
    }
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // ratio - computed: true, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class DtcLbdnPoolsList extends cdktf.ComplexList {
  public internalValue? : DtcLbdnPools[] | cdktf.IResolvable

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
  public get(index: number): DtcLbdnPoolsOutputReference {
    return new DtcLbdnPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn nios_dtc_lbdn}
*/
export class DtcLbdn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dtc_lbdn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcLbdn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcLbdn to import
  * @param importFromId The id of the existing DtcLbdn that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcLbdn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dtc_lbdn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dtc_lbdn nios_dtc_lbdn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcLbdnConfig
  */
  public constructor(scope: Construct, id: string, config: DtcLbdnConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dtc_lbdn',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authZones = config.authZones;
    this._autoConsolidatedMonitors = config.autoConsolidatedMonitors;
    this._comment = config.comment;
    this._disable = config.disable;
    this._extattrs = config.extattrs;
    this._lbMethod = config.lbMethod;
    this._name = config.name;
    this._patterns = config.patterns;
    this._persistence = config.persistence;
    this._pools.internalValue = config.pools;
    this._priority = config.priority;
    this._topology = config.topology;
    this._ttl = config.ttl;
    this._types = config.types;
    this._useTtl = config.useTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_zones - computed: true, optional: true, required: false
  private _authZones?: string[]; 
  public get authZones() {
    return this.getListAttribute('auth_zones');
  }
  public set authZones(value: string[]) {
    this._authZones = value;
  }
  public resetAuthZones() {
    this._authZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authZonesInput() {
    return this._authZones;
  }

  // auto_consolidated_monitors - computed: true, optional: true, required: false
  private _autoConsolidatedMonitors?: boolean | cdktf.IResolvable; 
  public get autoConsolidatedMonitors() {
    return this.getBooleanAttribute('auto_consolidated_monitors');
  }
  public set autoConsolidatedMonitors(value: boolean | cdktf.IResolvable) {
    this._autoConsolidatedMonitors = value;
  }
  public resetAutoConsolidatedMonitors() {
    this._autoConsolidatedMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConsolidatedMonitorsInput() {
    return this._autoConsolidatedMonitors;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // health - computed: true, optional: false, required: false
  private _health = new DtcLbdnHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }

  // lb_method - computed: false, optional: false, required: true
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
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

  // patterns - computed: false, optional: true, required: false
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  public resetPatterns() {
    this._patterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: number; 
  public get persistence() {
    return this.getNumberAttribute('persistence');
  }
  public set persistence(value: number) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // pools - computed: true, optional: true, required: false
  private _pools = new DtcLbdnPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: DtcLbdnPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // topology - computed: true, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authZones),
      auto_consolidated_monitors: cdktf.booleanToTerraform(this._autoConsolidatedMonitors),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      lb_method: cdktf.stringToTerraform(this._lbMethod),
      name: cdktf.stringToTerraform(this._name),
      patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patterns),
      persistence: cdktf.numberToTerraform(this._persistence),
      pools: cdktf.listMapper(dtcLbdnPoolsToTerraform, false)(this._pools.internalValue),
      priority: cdktf.numberToTerraform(this._priority),
      topology: cdktf.stringToTerraform(this._topology),
      ttl: cdktf.numberToTerraform(this._ttl),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_consolidated_monitors: {
        value: cdktf.booleanToHclTerraform(this._autoConsolidatedMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lb_method: {
        value: cdktf.stringToHclTerraform(this._lbMethod),
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
      patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._patterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      persistence: {
        value: cdktf.numberToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pools: {
        value: cdktf.listMapperHcl(dtcLbdnPoolsToHclTerraform, false)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcLbdnPoolsList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
