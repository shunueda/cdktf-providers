// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOdaOdaPrivateEndpointScanProxiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#id DataOciOdaOdaPrivateEndpointScanProxies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxies#oda_private_endpoint_id}
  */
  readonly odaPrivateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#state DataOciOdaOdaPrivateEndpointScanProxies#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#filter DataOciOdaOdaPrivateEndpointScanProxies#filter}
  */
  readonly filter?: DataOciOdaOdaPrivateEndpointScanProxiesFilter[] | cdktf.IResolvable;
}
export interface DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos {
}

export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosToTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosToHclTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scan_listener_fqdn - computed: true, optional: false, required: false
  public get scanListenerFqdn() {
    return this.getStringAttribute('scan_listener_fqdn');
  }

  // scan_listener_ip - computed: true, optional: false, required: false
  public get scanListenerIp() {
    return this.getStringAttribute('scan_listener_ip');
  }

  // scan_listener_port - computed: true, optional: false, required: false
  public get scanListenerPort() {
    return this.getNumberAttribute('scan_listener_port');
  }
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference {
    return new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems {
}

export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsToTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsToHclTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // oda_private_endpoint_id - computed: true, optional: false, required: false
  public get odaPrivateEndpointId() {
    return this.getStringAttribute('oda_private_endpoint_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scan_listener_infos - computed: true, optional: false, required: false
  private _scanListenerInfos = new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList(this, "scan_listener_infos", false);
  public get scanListenerInfos() {
    return this._scanListenerInfos;
  }

  // scan_listener_type - computed: true, optional: false, required: false
  public get scanListenerType() {
    return this.getStringAttribute('scan_listener_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference {
    return new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection {
}

export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionToTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionToHclTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference {
    return new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOdaOdaPrivateEndpointScanProxiesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#name DataOciOdaOdaPrivateEndpointScanProxies#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#regex DataOciOdaOdaPrivateEndpointScanProxies#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#values DataOciOdaOdaPrivateEndpointScanProxies#values}
  */
  readonly values: string[];
}

export function dataOciOdaOdaPrivateEndpointScanProxiesFilterToTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOdaOdaPrivateEndpointScanProxiesFilterToHclTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxiesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaPrivateEndpointScanProxiesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaPrivateEndpointScanProxiesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOdaOdaPrivateEndpointScanProxiesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOdaOdaPrivateEndpointScanProxiesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference {
    return new DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies oci_oda_oda_private_endpoint_scan_proxies}
*/
export class DataOciOdaOdaPrivateEndpointScanProxies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_private_endpoint_scan_proxies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointScanProxies to import
  * @param importFromId The id of the existing DataOciOdaOdaPrivateEndpointScanProxies that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointScanProxies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oda_oda_private_endpoint_scan_proxies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies oci_oda_oda_private_endpoint_scan_proxies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOdaOdaPrivateEndpointScanProxiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointScanProxiesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_private_endpoint_scan_proxies',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._odaPrivateEndpointId = config.odaPrivateEndpointId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
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

  // oda_private_endpoint_id - computed: false, optional: false, required: true
  private _odaPrivateEndpointId?: string; 
  public get odaPrivateEndpointId() {
    return this.getStringAttribute('oda_private_endpoint_id');
  }
  public set odaPrivateEndpointId(value: string) {
    this._odaPrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaPrivateEndpointIdInput() {
    return this._odaPrivateEndpointId;
  }

  // oda_private_endpoint_scan_proxy_collection - computed: true, optional: false, required: false
  private _odaPrivateEndpointScanProxyCollection = new DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList(this, "oda_private_endpoint_scan_proxy_collection", false);
  public get odaPrivateEndpointScanProxyCollection() {
    return this._odaPrivateEndpointScanProxyCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOdaOdaPrivateEndpointScanProxiesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOdaOdaPrivateEndpointScanProxiesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      oda_private_endpoint_id: cdktf.stringToTerraform(this._odaPrivateEndpointId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciOdaOdaPrivateEndpointScanProxiesFilterToTerraform, true)(this._filter.internalValue),
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
      oda_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._odaPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOdaOdaPrivateEndpointScanProxiesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOdaOdaPrivateEndpointScanProxiesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
