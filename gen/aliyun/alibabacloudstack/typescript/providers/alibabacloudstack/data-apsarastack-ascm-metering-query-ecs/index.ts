// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackAscmMeteringQueryEcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#end_time DataApsarastackAscmMeteringQueryEcs#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#id DataApsarastackAscmMeteringQueryEcs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#ins_id DataApsarastackAscmMeteringQueryEcs#ins_id}
  */
  readonly insId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#is_parent_id DataApsarastackAscmMeteringQueryEcs#is_parent_id}
  */
  readonly isParentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#name_regex DataApsarastackAscmMeteringQueryEcs#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#org_id DataApsarastackAscmMeteringQueryEcs#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#output_file DataApsarastackAscmMeteringQueryEcs#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#product_name DataApsarastackAscmMeteringQueryEcs#product_name}
  */
  readonly productName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#region DataApsarastackAscmMeteringQueryEcs#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#resource_group_id DataApsarastackAscmMeteringQueryEcs#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#start_time DataApsarastackAscmMeteringQueryEcs#start_time}
  */
  readonly startTime: string;
}
export interface DataApsarastackAscmMeteringQueryEcsData {
}

export function dataApsarastackAscmMeteringQueryEcsDataToTerraform(struct?: DataApsarastackAscmMeteringQueryEcsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackAscmMeteringQueryEcsDataToHclTerraform(struct?: DataApsarastackAscmMeteringQueryEcsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackAscmMeteringQueryEcsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackAscmMeteringQueryEcsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackAscmMeteringQueryEcsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_disk_size - computed: true, optional: false, required: false
  public get dataDiskSize() {
    return this.getNumberAttribute('data_disk_size');
  }

  // eip_address - computed: true, optional: false, required: false
  public get eipAddress() {
    return this.getStringAttribute('eip_address');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // gpu_amount - computed: true, optional: false, required: false
  public get gpuAmount() {
    return this.getNumberAttribute('gpu_amount');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_network_type - computed: true, optional: false, required: false
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_type_family - computed: true, optional: false, required: false
  public get instanceTypeFamily() {
    return this.getStringAttribute('instance_type_family');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // resource_g_name - computed: true, optional: false, required: false
  public get resourceGName() {
    return this.getStringAttribute('resource_g_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sys_disk_size - computed: true, optional: false, required: false
  public get sysDiskSize() {
    return this.getNumberAttribute('sys_disk_size');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataApsarastackAscmMeteringQueryEcsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackAscmMeteringQueryEcsDataOutputReference {
    return new DataApsarastackAscmMeteringQueryEcsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs apsarastack_ascm_metering_query_ecs}
*/
export class DataApsarastackAscmMeteringQueryEcs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_metering_query_ecs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackAscmMeteringQueryEcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackAscmMeteringQueryEcs to import
  * @param importFromId The id of the existing DataApsarastackAscmMeteringQueryEcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackAscmMeteringQueryEcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_metering_query_ecs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ascm_metering_query_ecs apsarastack_ascm_metering_query_ecs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackAscmMeteringQueryEcsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackAscmMeteringQueryEcsConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_metering_query_ecs',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._insId = config.insId;
    this._isParentId = config.isParentId;
    this._nameRegex = config.nameRegex;
    this._orgId = config.orgId;
    this._outputFile = config.outputFile;
    this._productName = config.productName;
    this._region = config.region;
    this._resourceGroupId = config.resourceGroupId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataApsarastackAscmMeteringQueryEcsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // ins_id - computed: false, optional: true, required: false
  private _insId?: string; 
  public get insId() {
    return this.getStringAttribute('ins_id');
  }
  public set insId(value: string) {
    this._insId = value;
  }
  public resetInsId() {
    this._insId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insIdInput() {
    return this._insId;
  }

  // is_parent_id - computed: false, optional: true, required: false
  private _isParentId?: string; 
  public get isParentId() {
    return this.getStringAttribute('is_parent_id');
  }
  public set isParentId(value: string) {
    this._isParentId = value;
  }
  public resetIsParentId() {
    this._isParentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isParentIdInput() {
    return this._isParentId;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ins_id: cdktf.stringToTerraform(this._insId),
      is_parent_id: cdktf.stringToTerraform(this._isParentId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      org_id: cdktf.stringToTerraform(this._orgId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product_name: cdktf.stringToTerraform(this._productName),
      region: cdktf.stringToTerraform(this._region),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      ins_id: {
        value: cdktf.stringToHclTerraform(this._insId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_parent_id: {
        value: cdktf.stringToHclTerraform(this._isParentId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
