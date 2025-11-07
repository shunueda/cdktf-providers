// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsPersistentCacheOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#id DataThunderSlbDnsPersistentCacheOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#oper DataThunderSlbDnsPersistentCacheOper#oper}
  */
  readonly oper?: DataThunderSlbDnsPersistentCacheOperOper;
}
export interface DataThunderSlbDnsPersistentCacheOperOperCacheEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#cache_class DataThunderSlbDnsPersistentCacheOper#cache_class}
  */
  readonly cacheClass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#cache_type DataThunderSlbDnsPersistentCacheOper#cache_type}
  */
  readonly cacheType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#dnssec DataThunderSlbDnsPersistentCacheOper#dnssec}
  */
  readonly dnssec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#domain DataThunderSlbDnsPersistentCacheOper#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#q_length DataThunderSlbDnsPersistentCacheOper#q_length}
  */
  readonly qLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#r_length DataThunderSlbDnsPersistentCacheOper#r_length}
  */
  readonly rLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#ttl DataThunderSlbDnsPersistentCacheOper#ttl}
  */
  readonly ttl?: number;
}

export function dataThunderSlbDnsPersistentCacheOperOperCacheEntryToTerraform(struct?: DataThunderSlbDnsPersistentCacheOperOperCacheEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_class: cdktf.numberToTerraform(struct!.cacheClass),
    cache_type: cdktf.numberToTerraform(struct!.cacheType),
    dnssec: cdktf.numberToTerraform(struct!.dnssec),
    domain: cdktf.stringToTerraform(struct!.domain),
    q_length: cdktf.numberToTerraform(struct!.qLength),
    r_length: cdktf.numberToTerraform(struct!.rLength),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataThunderSlbDnsPersistentCacheOperOperCacheEntryToHclTerraform(struct?: DataThunderSlbDnsPersistentCacheOperOperCacheEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_class: {
      value: cdktf.numberToHclTerraform(struct!.cacheClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_type: {
      value: cdktf.numberToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnssec: {
      value: cdktf.numberToHclTerraform(struct!.dnssec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    q_length: {
      value: cdktf.numberToHclTerraform(struct!.qLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    r_length: {
      value: cdktf.numberToHclTerraform(struct!.rLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsPersistentCacheOperOperCacheEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsPersistentCacheOperOperCacheEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheClass = this._cacheClass;
    }
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._dnssec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssec = this._dnssec;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._qLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.qLength = this._qLength;
    }
    if (this._rLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.rLength = this._rLength;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsPersistentCacheOperOperCacheEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheClass = undefined;
      this._cacheType = undefined;
      this._dnssec = undefined;
      this._domain = undefined;
      this._qLength = undefined;
      this._rLength = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheClass = value.cacheClass;
      this._cacheType = value.cacheType;
      this._dnssec = value.dnssec;
      this._domain = value.domain;
      this._qLength = value.qLength;
      this._rLength = value.rLength;
      this._ttl = value.ttl;
    }
  }

  // cache_class - computed: false, optional: true, required: false
  private _cacheClass?: number; 
  public get cacheClass() {
    return this.getNumberAttribute('cache_class');
  }
  public set cacheClass(value: number) {
    this._cacheClass = value;
  }
  public resetCacheClass() {
    this._cacheClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClassInput() {
    return this._cacheClass;
  }

  // cache_type - computed: false, optional: true, required: false
  private _cacheType?: number; 
  public get cacheType() {
    return this.getNumberAttribute('cache_type');
  }
  public set cacheType(value: number) {
    this._cacheType = value;
  }
  public resetCacheType() {
    this._cacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // dnssec - computed: false, optional: true, required: false
  private _dnssec?: number; 
  public get dnssec() {
    return this.getNumberAttribute('dnssec');
  }
  public set dnssec(value: number) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // q_length - computed: false, optional: true, required: false
  private _qLength?: number; 
  public get qLength() {
    return this.getNumberAttribute('q_length');
  }
  public set qLength(value: number) {
    this._qLength = value;
  }
  public resetQLength() {
    this._qLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qLengthInput() {
    return this._qLength;
  }

  // r_length - computed: false, optional: true, required: false
  private _rLength?: number; 
  public get rLength() {
    return this.getNumberAttribute('r_length');
  }
  public set rLength(value: number) {
    this._rLength = value;
  }
  public resetRLength() {
    this._rLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rLengthInput() {
    return this._rLength;
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
}

export class DataThunderSlbDnsPersistentCacheOperOperCacheEntryList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsPersistentCacheOperOperCacheEntry[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsPersistentCacheOperOperCacheEntryOutputReference {
    return new DataThunderSlbDnsPersistentCacheOperOperCacheEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsPersistentCacheOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#total_cache DataThunderSlbDnsPersistentCacheOper#total_cache}
  */
  readonly totalCache?: number;
  /**
  * cache_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#cache_entry DataThunderSlbDnsPersistentCacheOper#cache_entry}
  */
  readonly cacheEntry?: DataThunderSlbDnsPersistentCacheOperOperCacheEntry[] | cdktf.IResolvable;
}

export function dataThunderSlbDnsPersistentCacheOperOperToTerraform(struct?: DataThunderSlbDnsPersistentCacheOperOperOutputReference | DataThunderSlbDnsPersistentCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_cache: cdktf.numberToTerraform(struct!.totalCache),
    cache_entry: cdktf.listMapper(dataThunderSlbDnsPersistentCacheOperOperCacheEntryToTerraform, true)(struct!.cacheEntry),
  }
}


export function dataThunderSlbDnsPersistentCacheOperOperToHclTerraform(struct?: DataThunderSlbDnsPersistentCacheOperOperOutputReference | DataThunderSlbDnsPersistentCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_cache: {
      value: cdktf.numberToHclTerraform(struct!.totalCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_entry: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsPersistentCacheOperOperCacheEntryToHclTerraform, true)(struct!.cacheEntry),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsPersistentCacheOperOperCacheEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsPersistentCacheOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsPersistentCacheOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCache = this._totalCache;
    }
    if (this._cacheEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEntry = this._cacheEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsPersistentCacheOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalCache = undefined;
      this._cacheEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalCache = value.totalCache;
      this._cacheEntry.internalValue = value.cacheEntry;
    }
  }

  // total_cache - computed: false, optional: true, required: false
  private _totalCache?: number; 
  public get totalCache() {
    return this.getNumberAttribute('total_cache');
  }
  public set totalCache(value: number) {
    this._totalCache = value;
  }
  public resetTotalCache() {
    this._totalCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCacheInput() {
    return this._totalCache;
  }

  // cache_entry - computed: false, optional: true, required: false
  private _cacheEntry = new DataThunderSlbDnsPersistentCacheOperOperCacheEntryList(this, "cache_entry", false);
  public get cacheEntry() {
    return this._cacheEntry;
  }
  public putCacheEntry(value: DataThunderSlbDnsPersistentCacheOperOperCacheEntry[] | cdktf.IResolvable) {
    this._cacheEntry.internalValue = value;
  }
  public resetCacheEntry() {
    this._cacheEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEntryInput() {
    return this._cacheEntry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper thunder_slb_dns_persistent_cache_oper}
*/
export class DataThunderSlbDnsPersistentCacheOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_persistent_cache_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsPersistentCacheOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsPersistentCacheOper to import
  * @param importFromId The id of the existing DataThunderSlbDnsPersistentCacheOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsPersistentCacheOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_persistent_cache_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_persistent_cache_oper thunder_slb_dns_persistent_cache_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsPersistentCacheOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsPersistentCacheOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_persistent_cache_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbDnsPersistentCacheOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbDnsPersistentCacheOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbDnsPersistentCacheOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbDnsPersistentCacheOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsPersistentCacheOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
