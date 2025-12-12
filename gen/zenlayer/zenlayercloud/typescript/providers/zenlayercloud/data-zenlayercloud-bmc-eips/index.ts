// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudBmcEipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of instance to bind with EIPs to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#associated_instance_id DataZenlayercloudBmcEips#associated_instance_id}
  */
  readonly associatedInstanceId?: string;
  /**
  * The ID of zone that the EIPs locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#availability_zone DataZenlayercloudBmcEips#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * IDs of the EIP to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#eip_ids DataZenlayercloudBmcEips#eip_ids}
  */
  readonly eipIds?: string[];
  /**
  * The status of elastic ip to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#eip_status DataZenlayercloudBmcEips#eip_status}
  */
  readonly eipStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#id DataZenlayercloudBmcEips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The address of elastic ip to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#public_ip DataZenlayercloudBmcEips#public_ip}
  */
  readonly publicIp?: string;
  /**
  * The ID of resource group grouped instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#resource_group_id DataZenlayercloudBmcEips#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#result_output_file DataZenlayercloudBmcEips#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudBmcEipsEipListStruct {
}

export function dataZenlayercloudBmcEipsEipListStructToTerraform(struct?: DataZenlayercloudBmcEipsEipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudBmcEipsEipListStructToHclTerraform(struct?: DataZenlayercloudBmcEipsEipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudBmcEipsEipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudBmcEipsEipListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudBmcEipsEipListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eip_charge_type - computed: true, optional: false, required: false
  public get eipChargeType() {
    return this.getStringAttribute('eip_charge_type');
  }

  // eip_id - computed: true, optional: false, required: false
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }

  // eip_status - computed: true, optional: false, required: false
  public get eipStatus() {
    return this.getStringAttribute('eip_status');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
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

export class DataZenlayercloudBmcEipsEipListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudBmcEipsEipListStructOutputReference {
    return new DataZenlayercloudBmcEipsEipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips zenlayercloud_bmc_eips}
*/
export class DataZenlayercloudBmcEips extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_eips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudBmcEips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudBmcEips to import
  * @param importFromId The id of the existing DataZenlayercloudBmcEips that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudBmcEips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_eips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/bmc_eips zenlayercloud_bmc_eips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudBmcEipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudBmcEipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_eips',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.17',
        providerVersionConstraint: '0.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedInstanceId = config.associatedInstanceId;
    this._availabilityZone = config.availabilityZone;
    this._eipIds = config.eipIds;
    this._eipStatus = config.eipStatus;
    this._id = config.id;
    this._publicIp = config.publicIp;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_instance_id - computed: false, optional: true, required: false
  private _associatedInstanceId?: string; 
  public get associatedInstanceId() {
    return this.getStringAttribute('associated_instance_id');
  }
  public set associatedInstanceId(value: string) {
    this._associatedInstanceId = value;
  }
  public resetAssociatedInstanceId() {
    this._associatedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInstanceIdInput() {
    return this._associatedInstanceId;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // eip_ids - computed: false, optional: true, required: false
  private _eipIds?: string[]; 
  public get eipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('eip_ids'));
  }
  public set eipIds(value: string[]) {
    this._eipIds = value;
  }
  public resetEipIds() {
    this._eipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdsInput() {
    return this._eipIds;
  }

  // eip_list - computed: true, optional: false, required: false
  private _eipList = new DataZenlayercloudBmcEipsEipListStructList(this, "eip_list", false);
  public get eipList() {
    return this._eipList;
  }

  // eip_status - computed: false, optional: true, required: false
  private _eipStatus?: string; 
  public get eipStatus() {
    return this.getStringAttribute('eip_status');
  }
  public set eipStatus(value: string) {
    this._eipStatus = value;
  }
  public resetEipStatus() {
    this._eipStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipStatusInput() {
    return this._eipStatus;
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
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
      associated_instance_id: cdktf.stringToTerraform(this._associatedInstanceId),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      eip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eipIds),
      eip_status: cdktf.stringToTerraform(this._eipStatus),
      id: cdktf.stringToTerraform(this._id),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_instance_id: {
        value: cdktf.stringToHclTerraform(this._associatedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eipIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eip_status: {
        value: cdktf.stringToHclTerraform(this._eipStatus),
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
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
