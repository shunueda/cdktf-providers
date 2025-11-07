// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcLbdnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag for enabling auto managing DTC Consolidated Monitors on related DTC Pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#auto_consolidated_monitors DtcLbdn#auto_consolidated_monitors}
  */
  readonly autoConsolidatedMonitors?: boolean | cdktf.IResolvable;
  /**
  * Description of the DTC LBDN record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#comment DtcLbdn#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether the DTC LBDN is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#disable DtcLbdn#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the DTC LBDN record to be added/updated, as a map in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#ext_attrs DtcLbdn#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#id DtcLbdn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The load balancing method. Used to select pool. Valid values are GLOBAL_AVAILABILITY, RATIO, ROUND_ROBIN, SOURCE_IP_HASH and TOPOLOGY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#lb_method DtcLbdn#lb_method}
  */
  readonly lbMethod: string;
  /**
  * The display name of the DTC LBDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#name DtcLbdn#name}
  */
  readonly name: string;
  /**
  * LBDN wildcards for pattern match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#patterns DtcLbdn#patterns}
  */
  readonly patterns?: string[];
  /**
  * Maximum time, in seconds, for which client specific LBDN responses will be cached. Zero specifies no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#persistence DtcLbdn#persistence}
  */
  readonly persistence?: number;
  /**
  * The LBDN pattern match priority for “overlapping” DTC LBDN objects. LBDNs are “overlapping” if they are simultaneously assigned to a zone and have patterns that can match the same FQDN. The matching LBDN with highest priority (lowest ordinal) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#priority DtcLbdn#priority}
  */
  readonly priority?: number;
  /**
  * The topology rules for TOPOLOGY method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#topology DtcLbdn#topology}
  */
  readonly topology?: string;
  /**
  * The Time To Live (TTL) value for the DTC LBDN. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#ttl DtcLbdn#ttl}
  */
  readonly ttl?: number;
  /**
  * The list of resource record types supported by LBDN. Valid values are A, AAAA, CNAME, NAPTR, SRV. Default value is A and AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#types DtcLbdn#types}
  */
  readonly types: string[];
  /**
  * auth_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#auth_zones DtcLbdn#auth_zones}
  */
  readonly authZones?: DtcLbdnAuthZones[] | cdktf.IResolvable;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#pools DtcLbdn#pools}
  */
  readonly pools?: DtcLbdnPools[] | cdktf.IResolvable;
}
export interface DtcLbdnAuthZones {
  /**
  * The DNS view in which the zone is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#dns_view DtcLbdn#dns_view}
  */
  readonly dnsView: string;
  /**
  * Fully qualified domain name of an Authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#fqdn DtcLbdn#fqdn}
  */
  readonly fqdn: string;
}

export function dtcLbdnAuthZonesToTerraform(struct?: DtcLbdnAuthZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_view: cdktf.stringToTerraform(struct!.dnsView),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dtcLbdnAuthZonesToHclTerraform(struct?: DtcLbdnAuthZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_view: {
      value: cdktf.stringToHclTerraform(struct!.dnsView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcLbdnAuthZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcLbdnAuthZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsView = this._dnsView;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcLbdnAuthZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsView = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsView = value.dnsView;
      this._fqdn = value.fqdn;
    }
  }

  // dns_view - computed: false, optional: false, required: true
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }
}

export class DtcLbdnAuthZonesList extends cdktf.ComplexList {
  public internalValue? : DtcLbdnAuthZones[] | cdktf.IResolvable

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
  public get(index: number): DtcLbdnAuthZonesOutputReference {
    return new DtcLbdnAuthZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtcLbdnPools {
  /**
  * The pool to link with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#pool DtcLbdn#pool}
  */
  readonly pool: string;
  /**
  * The weight of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#ratio DtcLbdn#ratio}
  */
  readonly ratio: number;
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

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // ratio - computed: false, optional: false, required: true
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
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
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn infoblox_dtc_lbdn}
*/
export class DtcLbdn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_dtc_lbdn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcLbdn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcLbdn to import
  * @param importFromId The id of the existing DtcLbdn that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcLbdn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_dtc_lbdn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_lbdn infoblox_dtc_lbdn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcLbdnConfig
  */
  public constructor(scope: Construct, id: string, config: DtcLbdnConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_dtc_lbdn',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoConsolidatedMonitors = config.autoConsolidatedMonitors;
    this._comment = config.comment;
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._id = config.id;
    this._lbMethod = config.lbMethod;
    this._name = config.name;
    this._patterns = config.patterns;
    this._persistence = config.persistence;
    this._priority = config.priority;
    this._topology = config.topology;
    this._ttl = config.ttl;
    this._types = config.types;
    this._authZones.internalValue = config.authZones;
    this._pools.internalValue = config.pools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_consolidated_monitors - computed: false, optional: true, required: false
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

  // comment - computed: false, optional: true, required: false
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

  // disable - computed: false, optional: true, required: false
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

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // persistence - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
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

  // topology - computed: false, optional: true, required: false
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

  // ttl - computed: false, optional: true, required: false
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

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // auth_zones - computed: false, optional: true, required: false
  private _authZones = new DtcLbdnAuthZonesList(this, "auth_zones", false);
  public get authZones() {
    return this._authZones;
  }
  public putAuthZones(value: DtcLbdnAuthZones[] | cdktf.IResolvable) {
    this._authZones.internalValue = value;
  }
  public resetAuthZones() {
    this._authZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authZonesInput() {
    return this._authZones.internalValue;
  }

  // pools - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_consolidated_monitors: cdktf.booleanToTerraform(this._autoConsolidatedMonitors),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      id: cdktf.stringToTerraform(this._id),
      lb_method: cdktf.stringToTerraform(this._lbMethod),
      name: cdktf.stringToTerraform(this._name),
      patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patterns),
      persistence: cdktf.numberToTerraform(this._persistence),
      priority: cdktf.numberToTerraform(this._priority),
      topology: cdktf.stringToTerraform(this._topology),
      ttl: cdktf.numberToTerraform(this._ttl),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
      auth_zones: cdktf.listMapper(dtcLbdnAuthZonesToTerraform, true)(this._authZones.internalValue),
      pools: cdktf.listMapper(dtcLbdnPoolsToTerraform, true)(this._pools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
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
      auth_zones: {
        value: cdktf.listMapperHcl(dtcLbdnAuthZonesToHclTerraform, true)(this._authZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcLbdnAuthZonesList",
      },
      pools: {
        value: cdktf.listMapperHcl(dtcLbdnPoolsToHclTerraform, true)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcLbdnPoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
