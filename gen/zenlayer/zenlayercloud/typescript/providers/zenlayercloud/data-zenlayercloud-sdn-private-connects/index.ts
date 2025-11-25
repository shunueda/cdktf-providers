// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudSdnPrivateConnectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the private connect to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects#connect_ids DataZenlayercloudSdnPrivateConnects#connect_ids}
  */
  readonly connectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects#id DataZenlayercloudSdnPrivateConnects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects#result_output_file DataZenlayercloudSdnPrivateConnects#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudSdnPrivateConnectsConnectListEndpoints {
}

export function dataZenlayercloudSdnPrivateConnectsConnectListEndpointsToTerraform(struct?: DataZenlayercloudSdnPrivateConnectsConnectListEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudSdnPrivateConnectsConnectListEndpointsToHclTerraform(struct?: DataZenlayercloudSdnPrivateConnectsConnectListEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudSdnPrivateConnectsConnectListEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudSdnPrivateConnectsConnectListEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudSdnPrivateConnectsConnectListEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_account - computed: true, optional: false, required: false
  public get cloudAccount() {
    return this.getStringAttribute('cloud_account');
  }

  // cloud_region - computed: true, optional: false, required: false
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }

  // connectivity_status - computed: true, optional: false, required: false
  public get connectivityStatus() {
    return this.getStringAttribute('connectivity_status');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataZenlayercloudSdnPrivateConnectsConnectListEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudSdnPrivateConnectsConnectListEndpointsOutputReference {
    return new DataZenlayercloudSdnPrivateConnectsConnectListEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudSdnPrivateConnectsConnectListStruct {
}

export function dataZenlayercloudSdnPrivateConnectsConnectListStructToTerraform(struct?: DataZenlayercloudSdnPrivateConnectsConnectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudSdnPrivateConnectsConnectListStructToHclTerraform(struct?: DataZenlayercloudSdnPrivateConnectsConnectListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudSdnPrivateConnectsConnectListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudSdnPrivateConnectsConnectListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudSdnPrivateConnectsConnectListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_bandwidth - computed: true, optional: false, required: false
  public get connectBandwidth() {
    return this.getNumberAttribute('connect_bandwidth');
  }

  // connect_id - computed: true, optional: false, required: false
  public get connectId() {
    return this.getStringAttribute('connect_id');
  }

  // connect_name - computed: true, optional: false, required: false
  public get connectName() {
    return this.getStringAttribute('connect_name');
  }

  // connect_status - computed: true, optional: false, required: false
  public get connectStatus() {
    return this.getStringAttribute('connect_status');
  }

  // connectivity_status - computed: true, optional: false, required: false
  public get connectivityStatus() {
    return this.getStringAttribute('connectivity_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataZenlayercloudSdnPrivateConnectsConnectListEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
}

export class DataZenlayercloudSdnPrivateConnectsConnectListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudSdnPrivateConnectsConnectListStructOutputReference {
    return new DataZenlayercloudSdnPrivateConnectsConnectListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects zenlayercloud_sdn_private_connects}
*/
export class DataZenlayercloudSdnPrivateConnects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_sdn_private_connects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudSdnPrivateConnects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudSdnPrivateConnects to import
  * @param importFromId The id of the existing DataZenlayercloudSdnPrivateConnects that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudSdnPrivateConnects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_sdn_private_connects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/sdn_private_connects zenlayercloud_sdn_private_connects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudSdnPrivateConnectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudSdnPrivateConnectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_sdn_private_connects',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectIds = config.connectIds;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_ids - computed: false, optional: true, required: false
  private _connectIds?: string[]; 
  public get connectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connect_ids'));
  }
  public set connectIds(value: string[]) {
    this._connectIds = value;
  }
  public resetConnectIds() {
    this._connectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectIdsInput() {
    return this._connectIds;
  }

  // connect_list - computed: true, optional: false, required: false
  private _connectList = new DataZenlayercloudSdnPrivateConnectsConnectListStructList(this, "connect_list", false);
  public get connectList() {
    return this._connectList;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectIds),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
