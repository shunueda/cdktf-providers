// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbProxiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies#db_instance_id DataAlibabacloudstackPolardbProxies#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies#id DataAlibabacloudstackPolardbProxies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies#ids DataAlibabacloudstackPolardbProxies#ids}
  */
  readonly ids?: string[];
}
export interface DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItems {
}

export function dataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsToTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsToHclTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_proxy_connect_string - computed: true, optional: false, required: false
  public get dbProxyConnectString() {
    return this.getStringAttribute('db_proxy_connect_string');
  }

  // db_proxy_connect_string_net_type - computed: true, optional: false, required: false
  public get dbProxyConnectStringNetType() {
    return this.getStringAttribute('db_proxy_connect_string_net_type');
  }

  // db_proxy_connect_string_net_work_type - computed: true, optional: false, required: false
  public get dbProxyConnectStringNetWorkType() {
    return this.getNumberAttribute('db_proxy_connect_string_net_work_type');
  }

  // db_proxy_connect_string_port - computed: true, optional: false, required: false
  public get dbProxyConnectStringPort() {
    return this.getStringAttribute('db_proxy_connect_string_port');
  }

  // db_proxy_endpoint_id - computed: true, optional: false, required: false
  public get dbProxyEndpointId() {
    return this.getNumberAttribute('db_proxy_endpoint_id');
  }
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsOutputReference {
    return new DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItems {
}

export function dataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsToTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsToHclTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_proxy_endpoint_aliases - computed: true, optional: false, required: false
  public get dbProxyEndpointAliases() {
    return this.getStringAttribute('db_proxy_endpoint_aliases');
  }

  // db_proxy_endpoint_name - computed: true, optional: false, required: false
  public get dbProxyEndpointName() {
    return this.getStringAttribute('db_proxy_endpoint_name');
  }

  // db_proxy_endpoint_type - computed: true, optional: false, required: false
  public get dbProxyEndpointType() {
    return this.getStringAttribute('db_proxy_endpoint_type');
  }

  // db_proxy_read_write_mode - computed: true, optional: false, required: false
  public get dbProxyReadWriteMode() {
    return this.getStringAttribute('db_proxy_read_write_mode');
  }
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsOutputReference {
    return new DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackPolardbProxiesDbProxies {
}

export function dataAlibabacloudstackPolardbProxiesDbProxiesToTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbProxiesDbProxiesToHclTerraform(struct?: DataAlibabacloudstackPolardbProxiesDbProxies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbProxiesDbProxies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbProxiesDbProxies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_proxy_connect_string_items - computed: true, optional: false, required: false
  private _dbProxyConnectStringItems = new DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyConnectStringItemsList(this, "db_proxy_connect_string_items", false);
  public get dbProxyConnectStringItems() {
    return this._dbProxyConnectStringItems;
  }

  // db_proxy_endpoint_items - computed: true, optional: false, required: false
  private _dbProxyEndpointItems = new DataAlibabacloudstackPolardbProxiesDbProxiesDbProxyEndpointItemsList(this, "db_proxy_endpoint_items", false);
  public get dbProxyEndpointItems() {
    return this._dbProxyEndpointItems;
  }

  // db_proxy_instance_current_minor_version - computed: true, optional: false, required: false
  public get dbProxyInstanceCurrentMinorVersion() {
    return this.getStringAttribute('db_proxy_instance_current_minor_version');
  }

  // db_proxy_instance_latest_minor_version - computed: true, optional: false, required: false
  public get dbProxyInstanceLatestMinorVersion() {
    return this.getStringAttribute('db_proxy_instance_latest_minor_version');
  }

  // db_proxy_instance_name - computed: true, optional: false, required: false
  public get dbProxyInstanceName() {
    return this.getStringAttribute('db_proxy_instance_name');
  }

  // db_proxy_instance_num - computed: true, optional: false, required: false
  public get dbProxyInstanceNum() {
    return this.getNumberAttribute('db_proxy_instance_num');
  }

  // db_proxy_instance_status - computed: true, optional: false, required: false
  public get dbProxyInstanceStatus() {
    return this.getStringAttribute('db_proxy_instance_status');
  }

  // db_proxy_instance_type - computed: true, optional: false, required: false
  public get dbProxyInstanceType() {
    return this.getStringAttribute('db_proxy_instance_type');
  }

  // db_proxy_service_status - computed: true, optional: false, required: false
  public get dbProxyServiceStatus() {
    return this.getStringAttribute('db_proxy_service_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_network_type - computed: true, optional: false, required: false
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }

  // persistent_connection_status - computed: true, optional: false, required: false
  public get persistentConnectionStatus() {
    return this.getStringAttribute('persistent_connection_status');
  }
}

export class DataAlibabacloudstackPolardbProxiesDbProxiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbProxiesDbProxiesOutputReference {
    return new DataAlibabacloudstackPolardbProxiesDbProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies alibabacloudstack_polardb_proxies}
*/
export class DataAlibabacloudstackPolardbProxies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_proxies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbProxies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbProxies to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbProxies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbProxies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_proxies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_proxies alibabacloudstack_polardb_proxies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbProxiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbProxiesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_proxies',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._ids = config.ids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // db_proxies - computed: true, optional: false, required: false
  private _dbProxies = new DataAlibabacloudstackPolardbProxiesDbProxiesList(this, "db_proxies", false);
  public get dbProxies() {
    return this._dbProxies;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
