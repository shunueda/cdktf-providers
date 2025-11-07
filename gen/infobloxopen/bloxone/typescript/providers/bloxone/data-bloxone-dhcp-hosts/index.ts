// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDhcpHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#filters DataBloxoneDhcpHosts#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * If set to `true`, the data source will retry until a matching host is found, or until the Read Timeout expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#retry_if_not_found DataBloxoneDhcpHosts#retry_if_not_found}
  */
  readonly retryIfNotFound?: boolean | cdktf.IResolvable;
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#tag_filters DataBloxoneDhcpHosts#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#timeouts DataBloxoneDhcpHosts#timeouts}
  */
  readonly timeouts?: DataBloxoneDhcpHostsTimeouts;
}
export interface DataBloxoneDhcpHostsResultsAssociatedServer {
}

export function dataBloxoneDhcpHostsResultsAssociatedServerToTerraform(struct?: DataBloxoneDhcpHostsResultsAssociatedServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpHostsResultsAssociatedServerToHclTerraform(struct?: DataBloxoneDhcpHostsResultsAssociatedServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpHostsResultsAssociatedServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpHostsResultsAssociatedServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpHostsResultsAssociatedServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataBloxoneDhcpHostsResults {
  /**
  * The DHCP Config Profile for the on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#associated_server DataBloxoneDhcpHosts#associated_server}
  */
  readonly associatedServer?: DataBloxoneDhcpHostsResultsAssociatedServer;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#ip_space DataBloxoneDhcpHosts#ip_space}
  */
  readonly ipSpace?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#server DataBloxoneDhcpHosts#server}
  */
  readonly server?: string;
  /**
  * The tags of the on-prem host in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#tags DataBloxoneDhcpHosts#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneDhcpHostsResultsToTerraform(struct?: DataBloxoneDhcpHostsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_server: dataBloxoneDhcpHostsResultsAssociatedServerToTerraform(struct!.associatedServer),
    ip_space: cdktf.stringToTerraform(struct!.ipSpace),
    server: cdktf.stringToTerraform(struct!.server),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneDhcpHostsResultsToHclTerraform(struct?: DataBloxoneDhcpHostsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_server: {
      value: dataBloxoneDhcpHostsResultsAssociatedServerToHclTerraform(struct!.associatedServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDhcpHostsResultsAssociatedServer",
    },
    ip_space: {
      value: cdktf.stringToHclTerraform(struct!.ipSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpHostsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpHostsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedServer = this._associatedServer?.internalValue;
    }
    if (this._ipSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSpace = this._ipSpace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpHostsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedServer.internalValue = undefined;
      this._ipSpace = undefined;
      this._server = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedServer.internalValue = value.associatedServer;
      this._ipSpace = value.ipSpace;
      this._server = value.server;
      this._tags = value.tags;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // anycast_addresses - computed: true, optional: false, required: false
  public get anycastAddresses() {
    return this.getListAttribute('anycast_addresses');
  }

  // associated_server - computed: true, optional: true, required: false
  private _associatedServer = new DataBloxoneDhcpHostsResultsAssociatedServerOutputReference(this, "associated_server");
  public get associatedServer() {
    return this._associatedServer;
  }
  public putAssociatedServer(value: DataBloxoneDhcpHostsResultsAssociatedServer) {
    this._associatedServer.internalValue = value;
  }
  public resetAssociatedServer() {
    this._associatedServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedServerInput() {
    return this._associatedServer.internalValue;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_space - computed: true, optional: true, required: false
  private _ipSpace?: string; 
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }
  public set ipSpace(value: string) {
    this._ipSpace = value;
  }
  public resetIpSpace() {
    this._ipSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceInput() {
    return this._ipSpace;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataBloxoneDhcpHostsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpHostsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpHostsResultsOutputReference {
    return new DataBloxoneDhcpHostsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpHostsTimeouts {
  /**
  * [Duration](https://pkg.go.dev/time#ParseDuration) to wait before being considered a timeout during read operations. Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Default is 20m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#read DataBloxoneDhcpHosts#read}
  */
  readonly read?: string;
}

export function dataBloxoneDhcpHostsTimeoutsToTerraform(struct?: DataBloxoneDhcpHostsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataBloxoneDhcpHostsTimeoutsToHclTerraform(struct?: DataBloxoneDhcpHostsTimeouts | cdktf.IResolvable): any {
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

export class DataBloxoneDhcpHostsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDhcpHostsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDhcpHostsTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts bloxone_dhcp_hosts}
*/
export class DataBloxoneDhcpHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDhcpHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDhcpHosts to import
  * @param importFromId The id of the existing DataBloxoneDhcpHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDhcpHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dhcp_hosts bloxone_dhcp_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDhcpHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDhcpHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_hosts',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._retryIfNotFound = config.retryIfNotFound;
    this._tagFilters = config.tagFilters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneDhcpHostsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // retry_if_not_found - computed: false, optional: true, required: false
  private _retryIfNotFound?: boolean | cdktf.IResolvable; 
  public get retryIfNotFound() {
    return this.getBooleanAttribute('retry_if_not_found');
  }
  public set retryIfNotFound(value: boolean | cdktf.IResolvable) {
    this._retryIfNotFound = value;
  }
  public resetRetryIfNotFound() {
    this._retryIfNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIfNotFoundInput() {
    return this._retryIfNotFound;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataBloxoneDhcpHostsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataBloxoneDhcpHostsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      retry_if_not_found: cdktf.booleanToTerraform(this._retryIfNotFound),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
      timeouts: dataBloxoneDhcpHostsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retry_if_not_found: {
        value: cdktf.booleanToHclTerraform(this._retryIfNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: dataBloxoneDhcpHostsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBloxoneDhcpHostsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
