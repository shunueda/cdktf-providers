// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDtcLbdnConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#extattrfilters DataNiosDtcLbdn#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#filters DataNiosDtcLbdn#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#max_results DataNiosDtcLbdn#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#paging DataNiosDtcLbdn#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDtcLbdnResultHealth {
}

export function dataNiosDtcLbdnResultHealthToTerraform(struct?: DataNiosDtcLbdnResultHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDtcLbdnResultHealthToHclTerraform(struct?: DataNiosDtcLbdnResultHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDtcLbdnResultHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDtcLbdnResultHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDtcLbdnResultHealth | undefined) {
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
export interface DataNiosDtcLbdnResultPools {
  /**
  * The pool to link with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#pool DataNiosDtcLbdn#pool}
  */
  readonly pool?: string;
  /**
  * The weight of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#ratio DataNiosDtcLbdn#ratio}
  */
  readonly ratio?: number;
}

export function dataNiosDtcLbdnResultPoolsToTerraform(struct?: DataNiosDtcLbdnResultPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dataNiosDtcLbdnResultPoolsToHclTerraform(struct?: DataNiosDtcLbdnResultPools | cdktf.IResolvable): any {
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

export class DataNiosDtcLbdnResultPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDtcLbdnResultPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDtcLbdnResultPools | cdktf.IResolvable | undefined) {
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

export class DataNiosDtcLbdnResultPoolsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDtcLbdnResultPools[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDtcLbdnResultPoolsOutputReference {
    return new DataNiosDtcLbdnResultPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDtcLbdnResult {
  /**
  * List of linked auth zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#auth_zones DataNiosDtcLbdn#auth_zones}
  */
  readonly authZones?: string[];
  /**
  * Flag for enabling auto managing DTC Consolidated Monitors on related DTC Pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#auto_consolidated_monitors DataNiosDtcLbdn#auto_consolidated_monitors}
  */
  readonly autoConsolidatedMonitors?: boolean | cdktf.IResolvable;
  /**
  * Comment for the DTC LBDN; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#comment DataNiosDtcLbdn#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether the DTC LBDN is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#disable DataNiosDtcLbdn#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#extattrs DataNiosDtcLbdn#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The load balancing method. Used to select pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#lb_method DataNiosDtcLbdn#lb_method}
  */
  readonly lbMethod: string;
  /**
  * The display name of the DTC LBDN, not DNS related.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#name DataNiosDtcLbdn#name}
  */
  readonly name: string;
  /**
  * LBDN wildcards for pattern match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#patterns DataNiosDtcLbdn#patterns}
  */
  readonly patterns?: string[];
  /**
  * Maximum time, in seconds, for which client specific LBDN responses will be cached. Zero specifies no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#persistence DataNiosDtcLbdn#persistence}
  */
  readonly persistence?: number;
  /**
  * The maximum time, in seconds, for which client specific LBDN responses will be cached. Zero specifies no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#pools DataNiosDtcLbdn#pools}
  */
  readonly pools?: DataNiosDtcLbdnResultPools[] | cdktf.IResolvable;
  /**
  * The LBDN pattern match priority for "overlapping" DTC LBDN objects. LBDNs are "overlapping" if they are simultaneously assigned to a zone and have patterns that can match the same FQDN. The matching LBDN with highest priority (lowest ordinal) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#priority DataNiosDtcLbdn#priority}
  */
  readonly priority?: number;
  /**
  * The topology rules for TOPOLOGY method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#topology DataNiosDtcLbdn#topology}
  */
  readonly topology?: string;
  /**
  * Time-to-live value of the record, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#ttl DataNiosDtcLbdn#ttl}
  */
  readonly ttl?: number;
  /**
  * The list of resource record types supported by LBDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#types DataNiosDtcLbdn#types}
  */
  readonly types?: string[];
  /**
  * Flag to indicate whether the TTL value should be used for the LBDN record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#use_ttl DataNiosDtcLbdn#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
}

export function dataNiosDtcLbdnResultToTerraform(struct?: DataNiosDtcLbdnResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authZones),
    auto_consolidated_monitors: cdktf.booleanToTerraform(struct!.autoConsolidatedMonitors),
    comment: cdktf.stringToTerraform(struct!.comment),
    disable: cdktf.booleanToTerraform(struct!.disable),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    name: cdktf.stringToTerraform(struct!.name),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
    persistence: cdktf.numberToTerraform(struct!.persistence),
    pools: cdktf.listMapper(dataNiosDtcLbdnResultPoolsToTerraform, false)(struct!.pools),
    priority: cdktf.numberToTerraform(struct!.priority),
    topology: cdktf.stringToTerraform(struct!.topology),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    use_ttl: cdktf.booleanToTerraform(struct!.useTtl),
  }
}


export function dataNiosDtcLbdnResultToHclTerraform(struct?: DataNiosDtcLbdnResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auto_consolidated_monitors: {
      value: cdktf.booleanToHclTerraform(struct!.autoConsolidatedMonitors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
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
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    persistence: {
      value: cdktf.numberToHclTerraform(struct!.persistence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pools: {
      value: cdktf.listMapperHcl(dataNiosDtcLbdnResultPoolsToHclTerraform, false)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDtcLbdnResultPoolsList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDtcLbdnResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDtcLbdnResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.authZones = this._authZones;
    }
    if (this._autoConsolidatedMonitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConsolidatedMonitors = this._autoConsolidatedMonitors;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._persistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._useTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTtl = this._useTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDtcLbdnResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authZones = undefined;
      this._autoConsolidatedMonitors = undefined;
      this._comment = undefined;
      this._disable = undefined;
      this._extattrs = undefined;
      this._lbMethod = undefined;
      this._name = undefined;
      this._patterns = undefined;
      this._persistence = undefined;
      this._pools.internalValue = undefined;
      this._priority = undefined;
      this._topology = undefined;
      this._ttl = undefined;
      this._types = undefined;
      this._useTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authZones = value.authZones;
      this._autoConsolidatedMonitors = value.autoConsolidatedMonitors;
      this._comment = value.comment;
      this._disable = value.disable;
      this._extattrs = value.extattrs;
      this._lbMethod = value.lbMethod;
      this._name = value.name;
      this._patterns = value.patterns;
      this._persistence = value.persistence;
      this._pools.internalValue = value.pools;
      this._priority = value.priority;
      this._topology = value.topology;
      this._ttl = value.ttl;
      this._types = value.types;
      this._useTtl = value.useTtl;
    }
  }

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
  private _health = new DataNiosDtcLbdnResultHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }

  // lb_method - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // patterns - computed: true, optional: true, required: false
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
  private _pools = new DataNiosDtcLbdnResultPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: DataNiosDtcLbdnResultPools[] | cdktf.IResolvable) {
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
}

export class DataNiosDtcLbdnResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDtcLbdnResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDtcLbdnResultOutputReference {
    return new DataNiosDtcLbdnResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn nios_dtc_lbdn}
*/
export class DataNiosDtcLbdn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dtc_lbdn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDtcLbdn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDtcLbdn to import
  * @param importFromId The id of the existing DataNiosDtcLbdn that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDtcLbdn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dtc_lbdn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dtc_lbdn nios_dtc_lbdn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDtcLbdnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDtcLbdnConfig = {}) {
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
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDtcLbdnResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
