// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudTaurusdbMysqlProxiesV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3#id DataOpentelekomcloudTaurusdbMysqlProxiesV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3#instance_id DataOpentelekomcloudTaurusdbMysqlProxiesV3#instance_id}
  */
  readonly instanceId: string;
}
export interface DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight {
}

export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeight | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes {
}

export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az_code - computed: true, optional: false, required: false
  public get azCode() {
    return this.getStringAttribute('az_code');
  }

  // frozen_flag - computed: true, optional: false, required: false
  public get frozenFlag() {
    return this.getNumberAttribute('frozen_flag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight {
}

export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeight | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct {
}

export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructToTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructToHclTerraform(struct?: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // delay_threshold_in_seconds - computed: true, optional: false, required: false
  public get delayThresholdInSeconds() {
    return this.getNumberAttribute('delay_threshold_in_seconds');
  }

  // elb_vip - computed: true, optional: false, required: false
  public get elbVip() {
    return this.getStringAttribute('elb_vip');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_node_weight - computed: true, optional: false, required: false
  private _masterNodeWeight = new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListMasterNodeWeightList(this, "master_node_weight", false);
  public get masterNodeWeight() {
    return this._masterNodeWeight;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getStringAttribute('ram');
  }

  // readonly_nodes_weight - computed: true, optional: false, required: false
  private _readonlyNodesWeight = new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListReadonlyNodesWeightList(this, "readonly_nodes_weight", false);
  public get readonlyNodesWeight() {
    return this._readonlyNodesWeight;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transaction_split - computed: true, optional: false, required: false
  public get transactionSplit() {
    return this.getStringAttribute('transaction_split');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

export class DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference {
    return new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3 opentelekomcloud_taurusdb_mysql_proxies_v3}
*/
export class DataOpentelekomcloudTaurusdbMysqlProxiesV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_taurusdb_mysql_proxies_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlProxiesV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlProxiesV3 to import
  * @param importFromId The id of the existing DataOpentelekomcloudTaurusdbMysqlProxiesV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlProxiesV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_taurusdb_mysql_proxies_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/taurusdb_mysql_proxies_v3 opentelekomcloud_taurusdb_mysql_proxies_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudTaurusdbMysqlProxiesV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudTaurusdbMysqlProxiesV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_taurusdb_mysql_proxies_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
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
    this._instanceId = config.instanceId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // proxy_list - computed: true, optional: false, required: false
  private _proxyList = new DataOpentelekomcloudTaurusdbMysqlProxiesV3ProxyListStructList(this, "proxy_list", false);
  public get proxyList() {
    return this._proxyList;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
