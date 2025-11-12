// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneAnycastConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#filters DataBloxoneAnycastConfigs#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Filter by host ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#host_id DataBloxoneAnycastConfigs#host_id}
  */
  readonly hostId?: number;
  /**
  * Filter by configuration status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#is_configured DataBloxoneAnycastConfigs#is_configured}
  */
  readonly isConfigured?: boolean | cdktf.IResolvable;
  /**
  * Filter by service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#service DataBloxoneAnycastConfigs#service}
  */
  readonly service?: string;
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#tag_filters DataBloxoneAnycastConfigs#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneAnycastConfigsResultsOnpremHosts {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#id DataBloxoneAnycastConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * IPv4 address of the host in string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#ip_address DataBloxoneAnycastConfigs#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPv6 address of the host in string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#ipv6_address DataBloxoneAnycastConfigs#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function dataBloxoneAnycastConfigsResultsOnpremHostsToTerraform(struct?: DataBloxoneAnycastConfigsResultsOnpremHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function dataBloxoneAnycastConfigsResultsOnpremHostsToHclTerraform(struct?: DataBloxoneAnycastConfigsResultsOnpremHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneAnycastConfigsResultsOnpremHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneAnycastConfigsResultsOnpremHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneAnycastConfigsResultsOnpremHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._ipAddress = undefined;
      this._ipv6Address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // runtime_status - computed: true, optional: false, required: false
  public get runtimeStatus() {
    return this.getStringAttribute('runtime_status');
  }
}

export class DataBloxoneAnycastConfigsResultsOnpremHostsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneAnycastConfigsResultsOnpremHosts[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneAnycastConfigsResultsOnpremHostsOutputReference {
    return new DataBloxoneAnycastConfigsResultsOnpremHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneAnycastConfigsResults {
  /**
  * IPv4 address of the host in string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#anycast_ip_address DataBloxoneAnycastConfigs#anycast_ip_address}
  */
  readonly anycastIpAddress: string;
  /**
  * IPv6 address of the host in string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#anycast_ipv6_address DataBloxoneAnycastConfigs#anycast_ipv6_address}
  */
  readonly anycastIpv6Address?: string;
  /**
  * The description for the address object. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#description DataBloxoneAnycastConfigs#description}
  */
  readonly description?: string;
  /**
  * The name of the anycast configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#name DataBloxoneAnycastConfigs#name}
  */
  readonly name: string;
  /**
  * The type of the Service used in anycast configuration, supports (`dns`, `dhcp`, `dfp`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#service DataBloxoneAnycastConfigs#service}
  */
  readonly service: string;
  /**
  * The tags for the anycast configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#tags DataBloxoneAnycastConfigs#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneAnycastConfigsResultsToTerraform(struct?: DataBloxoneAnycastConfigsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_ip_address: cdktf.stringToTerraform(struct!.anycastIpAddress),
    anycast_ipv6_address: cdktf.stringToTerraform(struct!.anycastIpv6Address),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.stringToTerraform(struct!.service),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneAnycastConfigsResultsToHclTerraform(struct?: DataBloxoneAnycastConfigsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.anycastIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anycast_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.anycastIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
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

export class DataBloxoneAnycastConfigsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneAnycastConfigsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastIpAddress = this._anycastIpAddress;
    }
    if (this._anycastIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastIpv6Address = this._anycastIpv6Address;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneAnycastConfigsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anycastIpAddress = undefined;
      this._anycastIpv6Address = undefined;
      this._description = undefined;
      this._name = undefined;
      this._service = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anycastIpAddress = value.anycastIpAddress;
      this._anycastIpv6Address = value.anycastIpv6Address;
      this._description = value.description;
      this._name = value.name;
      this._service = value.service;
      this._tags = value.tags;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // anycast_ip_address - computed: true, optional: false, required: true
  private _anycastIpAddress?: string; 
  public get anycastIpAddress() {
    return this.getStringAttribute('anycast_ip_address');
  }
  public set anycastIpAddress(value: string) {
    this._anycastIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastIpAddressInput() {
    return this._anycastIpAddress;
  }

  // anycast_ipv6_address - computed: true, optional: true, required: false
  private _anycastIpv6Address?: string; 
  public get anycastIpv6Address() {
    return this.getStringAttribute('anycast_ipv6_address');
  }
  public set anycastIpv6Address(value: string) {
    this._anycastIpv6Address = value;
  }
  public resetAnycastIpv6Address() {
    this._anycastIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastIpv6AddressInput() {
    return this._anycastIpv6Address;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // is_configured - computed: true, optional: false, required: false
  public get isConfigured() {
    return this.getBooleanAttribute('is_configured');
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

  // onprem_hosts - computed: true, optional: false, required: false
  private _onpremHosts = new DataBloxoneAnycastConfigsResultsOnpremHostsList(this, "onprem_hosts", false);
  public get onpremHosts() {
    return this._onpremHosts;
  }

  // runtime_status - computed: true, optional: false, required: false
  public get runtimeStatus() {
    return this.getStringAttribute('runtime_status');
  }

  // service - computed: true, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataBloxoneAnycastConfigsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneAnycastConfigsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneAnycastConfigsResultsOutputReference {
    return new DataBloxoneAnycastConfigsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs bloxone_anycast_configs}
*/
export class DataBloxoneAnycastConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_anycast_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneAnycastConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneAnycastConfigs to import
  * @param importFromId The id of the existing DataBloxoneAnycastConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneAnycastConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_anycast_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/anycast_configs bloxone_anycast_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneAnycastConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneAnycastConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_anycast_configs',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
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
    this._hostId = config.hostId;
    this._isConfigured = config.isConfigured;
    this._service = config.service;
    this._tagFilters = config.tagFilters;
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

  // host_id - computed: false, optional: true, required: false
  private _hostId?: number; 
  public get hostId() {
    return this.getNumberAttribute('host_id');
  }
  public set hostId(value: number) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // is_configured - computed: false, optional: true, required: false
  private _isConfigured?: boolean | cdktf.IResolvable; 
  public get isConfigured() {
    return this.getBooleanAttribute('is_configured');
  }
  public set isConfigured(value: boolean | cdktf.IResolvable) {
    this._isConfigured = value;
  }
  public resetIsConfigured() {
    this._isConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConfiguredInput() {
    return this._isConfigured;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneAnycastConfigsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      host_id: cdktf.numberToTerraform(this._hostId),
      is_configured: cdktf.booleanToTerraform(this._isConfigured),
      service: cdktf.stringToTerraform(this._service),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
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
      host_id: {
        value: cdktf.numberToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_configured: {
        value: cdktf.booleanToHclTerraform(this._isConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
