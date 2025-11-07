// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZecEipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of associated resource to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#associated_id DataZenlayercloudZecEips#associated_id}
  */
  readonly associatedId?: string;
  /**
  * The ID of cidr that the EIP allocated from to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#cidr_ids DataZenlayercloudZecEips#cidr_ids}
  */
  readonly cidrIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#id DataZenlayercloudZecEips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of the EIPs to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#ids DataZenlayercloudZecEips#ids}
  */
  readonly ids?: string[];
  /**
  * Indicates whether it is the default EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#is_default DataZenlayercloudZecEips#is_default}
  */
  readonly isDefault?: string;
  /**
  * A regex string to apply to the elastic IP list returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#name_regex DataZenlayercloudZecEips#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The private ipv4 address that the EIP attached to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#private_ip_address DataZenlayercloudZecEips#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * The elastic ipv4 address to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#public_ip_address DataZenlayercloudZecEips#public_ip_address}
  */
  readonly publicIpAddress?: string;
  /**
  * The region ID that the elastic IP locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#region_id DataZenlayercloudZecEips#region_id}
  */
  readonly regionId?: string;
  /**
  * Resource group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#resource_group_id DataZenlayercloudZecEips#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#result_output_file DataZenlayercloudZecEips#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Status of the elastic IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#status DataZenlayercloudZecEips#status}
  */
  readonly status?: string;
}
export interface DataZenlayercloudZecEipsResult {
}

export function dataZenlayercloudZecEipsResultToTerraform(struct?: DataZenlayercloudZecEipsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecEipsResultToHclTerraform(struct?: DataZenlayercloudZecEipsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecEipsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecEipsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecEipsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_id - computed: true, optional: false, required: false
  public get associatedId() {
    return this.getStringAttribute('associated_id');
  }

  // associated_type - computed: true, optional: false, required: false
  public get associatedType() {
    return this.getStringAttribute('associated_type');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bandwidth_cluster_id - computed: true, optional: false, required: false
  public get bandwidthClusterId() {
    return this.getStringAttribute('bandwidth_cluster_id');
  }

  // bandwidth_cluster_name - computed: true, optional: false, required: false
  public get bandwidthClusterName() {
    return this.getStringAttribute('bandwidth_cluster_name');
  }

  // bind_type - computed: true, optional: false, required: false
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }

  // cidr_id - computed: true, optional: false, required: false
  public get cidrId() {
    return this.getStringAttribute('cidr_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // flow_package_size - computed: true, optional: false, required: false
  public get flowPackageSize() {
    return this.getNumberAttribute('flow_package_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_region_id - computed: true, optional: false, required: false
  public get peerRegionId() {
    return this.getStringAttribute('peer_region_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataZenlayercloudZecEipsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecEipsResultOutputReference {
    return new DataZenlayercloudZecEipsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips zenlayercloud_zec_eips}
*/
export class DataZenlayercloudZecEips extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_eips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZecEips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZecEips to import
  * @param importFromId The id of the existing DataZenlayercloudZecEips that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZecEips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_eips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/data-sources/zec_eips zenlayercloud_zec_eips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZecEipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZecEipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_eips',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedId = config.associatedId;
    this._cidrIds = config.cidrIds;
    this._id = config.id;
    this._ids = config.ids;
    this._isDefault = config.isDefault;
    this._nameRegex = config.nameRegex;
    this._privateIpAddress = config.privateIpAddress;
    this._publicIpAddress = config.publicIpAddress;
    this._regionId = config.regionId;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_id - computed: false, optional: true, required: false
  private _associatedId?: string; 
  public get associatedId() {
    return this.getStringAttribute('associated_id');
  }
  public set associatedId(value: string) {
    this._associatedId = value;
  }
  public resetAssociatedId() {
    this._associatedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedIdInput() {
    return this._associatedId;
  }

  // cidr_ids - computed: false, optional: true, required: false
  private _cidrIds?: string[]; 
  public get cidrIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_ids'));
  }
  public set cidrIds(value: string[]) {
    this._cidrIds = value;
  }
  public resetCidrIds() {
    this._cidrIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIdsInput() {
    return this._cidrIds;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: string; 
  public get isDefault() {
    return this.getStringAttribute('is_default');
  }
  public set isDefault(value: string) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // public_ip_address - computed: false, optional: true, required: false
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  public resetPublicIpAddress() {
    this._publicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataZenlayercloudZecEipsResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_id: cdktf.stringToTerraform(this._associatedId),
      cidr_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrIds),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_default: cdktf.stringToTerraform(this._isDefault),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      public_ip_address: cdktf.stringToTerraform(this._publicIpAddress),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_id: {
        value: cdktf.stringToHclTerraform(this._associatedId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrIds),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_default: {
        value: cdktf.stringToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_address: {
        value: cdktf.stringToHclTerraform(this._publicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
