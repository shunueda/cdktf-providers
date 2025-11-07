// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxHostgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#timeouts DataPowermaxHostgroup#timeouts}
  */
  readonly timeouts?: DataPowermaxHostgroupTimeouts;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#filter DataPowermaxHostgroup#filter}
  */
  readonly filter?: DataPowermaxHostgroupFilter;
}
export interface DataPowermaxHostgroupHostGroupDetailsHost {
  /**
  * The host initators associated with the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#initiator DataPowermaxHostgroup#initiator}
  */
  readonly initiator?: string[];
}

export function dataPowermaxHostgroupHostGroupDetailsHostToTerraform(struct?: DataPowermaxHostgroupHostGroupDetailsHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initiator: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.initiator),
  }
}


export function dataPowermaxHostgroupHostGroupDetailsHostToHclTerraform(struct?: DataPowermaxHostgroupHostGroupDetailsHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initiator: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.initiator),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostgroupHostGroupDetailsHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxHostgroupHostGroupDetailsHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostgroupHostGroupDetailsHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initiator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initiator = value.initiator;
    }
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // initiator - computed: true, optional: true, required: false
  private _initiator?: string[]; 
  public get initiator() {
    return this.getListAttribute('initiator');
  }
  public set initiator(value: string[]) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }
}

export class DataPowermaxHostgroupHostGroupDetailsHostList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxHostgroupHostGroupDetailsHost[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxHostgroupHostGroupDetailsHostOutputReference {
    return new DataPowermaxHostgroupHostGroupDetailsHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxHostgroupHostGroupDetails {
  /**
  * List of related host ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#host DataPowermaxHostgroup#host}
  */
  readonly host?: DataPowermaxHostgroupHostGroupDetailsHost[] | cdktf.IResolvable;
  /**
  * List of masking views ids related to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#maskingview DataPowermaxHostgroup#maskingview}
  */
  readonly maskingview?: string[];
}

export function dataPowermaxHostgroupHostGroupDetailsToTerraform(struct?: DataPowermaxHostgroupHostGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.listMapper(dataPowermaxHostgroupHostGroupDetailsHostToTerraform, false)(struct!.host),
    maskingview: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maskingview),
  }
}


export function dataPowermaxHostgroupHostGroupDetailsToHclTerraform(struct?: DataPowermaxHostgroupHostGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.listMapperHcl(dataPowermaxHostgroupHostGroupDetailsHostToHclTerraform, false)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowermaxHostgroupHostGroupDetailsHostList",
    },
    maskingview: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maskingview),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostgroupHostGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxHostgroupHostGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._maskingview !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingview = this._maskingview;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostgroupHostGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host.internalValue = undefined;
      this._maskingview = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host.internalValue = value.host;
      this._maskingview = value.maskingview;
    }
  }

  // consistent_lun - computed: true, optional: false, required: false
  public get consistentLun() {
    return this.getBooleanAttribute('consistent_lun');
  }

  // host - computed: true, optional: true, required: false
  private _host = new DataPowermaxHostgroupHostGroupDetailsHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: DataPowermaxHostgroupHostGroupDetailsHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // host_group_id - computed: true, optional: false, required: false
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }

  // maskingview - computed: true, optional: true, required: false
  private _maskingview?: string[]; 
  public get maskingview() {
    return this.getListAttribute('maskingview');
  }
  public set maskingview(value: string[]) {
    this._maskingview = value;
  }
  public resetMaskingview() {
    this._maskingview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingviewInput() {
    return this._maskingview;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_of_hosts - computed: true, optional: false, required: false
  public get numOfHosts() {
    return this.getNumberAttribute('num_of_hosts');
  }

  // num_of_initiators - computed: true, optional: false, required: false
  public get numOfInitiators() {
    return this.getNumberAttribute('num_of_initiators');
  }

  // num_of_masking_views - computed: true, optional: false, required: false
  public get numOfMaskingViews() {
    return this.getNumberAttribute('num_of_masking_views');
  }

  // port_flags_override - computed: true, optional: false, required: false
  public get portFlagsOverride() {
    return this.getBooleanAttribute('port_flags_override');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowermaxHostgroupHostGroupDetailsList extends cdktf.ComplexList {
  public internalValue? : DataPowermaxHostgroupHostGroupDetails[] | cdktf.IResolvable

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
  public get(index: number): DataPowermaxHostgroupHostGroupDetailsOutputReference {
    return new DataPowermaxHostgroupHostGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxHostgroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#read DataPowermaxHostgroup#read}
  */
  readonly read?: string;
}

export function dataPowermaxHostgroupTimeoutsToTerraform(struct?: DataPowermaxHostgroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxHostgroupTimeoutsToHclTerraform(struct?: DataPowermaxHostgroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostgroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostgroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostgroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxHostgroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#names DataPowermaxHostgroup#names}
  */
  readonly names?: string[];
}

export function dataPowermaxHostgroupFilterToTerraform(struct?: DataPowermaxHostgroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataPowermaxHostgroupFilterToHclTerraform(struct?: DataPowermaxHostgroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxHostgroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxHostgroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxHostgroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup powermax_hostgroup}
*/
export class DataPowermaxHostgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_hostgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxHostgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxHostgroup to import
  * @param importFromId The id of the existing DataPowermaxHostgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxHostgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_hostgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/hostgroup powermax_hostgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxHostgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxHostgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax_hostgroup',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_group_details - computed: true, optional: false, required: false
  private _hostGroupDetails = new DataPowermaxHostgroupHostGroupDetailsList(this, "host_group_details", false);
  public get hostGroupDetails() {
    return this._hostGroupDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxHostgroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxHostgroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowermaxHostgroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowermaxHostgroupFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataPowermaxHostgroupTimeoutsToTerraform(this._timeouts.internalValue),
      filter: dataPowermaxHostgroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxHostgroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxHostgroupTimeouts",
      },
      filter: {
        value: dataPowermaxHostgroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxHostgroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
