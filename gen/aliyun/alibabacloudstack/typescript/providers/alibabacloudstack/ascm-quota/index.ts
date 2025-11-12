// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AscmQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#cluster_name AscmQuota#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#id AscmQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#product_name AscmQuota#product_name}
  */
  readonly productName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#quota_type AscmQuota#quota_type}
  */
  readonly quotaType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#quota_type_id AscmQuota#quota_type_id}
  */
  readonly quotaTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#region_name AscmQuota#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#target_type AscmQuota#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_amount AscmQuota#total_amount}
  */
  readonly totalAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_cpu AscmQuota#total_cpu}
  */
  readonly totalCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_cu AscmQuota#total_cu}
  */
  readonly totalCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_disk AscmQuota#total_disk}
  */
  readonly totalDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_disk_cloud_efficiency AscmQuota#total_disk_cloud_efficiency}
  */
  readonly totalDiskCloudEfficiency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_disk_cloud_ssd AscmQuota#total_disk_cloud_ssd}
  */
  readonly totalDiskCloudSsd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_eip AscmQuota#total_eip}
  */
  readonly totalEip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_gpu AscmQuota#total_gpu}
  */
  readonly totalGpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_mem AscmQuota#total_mem}
  */
  readonly totalMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_vip_internal AscmQuota#total_vip_internal}
  */
  readonly totalVipInternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_vip_public AscmQuota#total_vip_public}
  */
  readonly totalVipPublic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#total_vpc AscmQuota#total_vpc}
  */
  readonly totalVpc?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota alibabacloudstack_ascm_quota}
*/
export class AscmQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AscmQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AscmQuota to import
  * @param importFromId The id of the existing AscmQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AscmQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ascm_quota alibabacloudstack_ascm_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AscmQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: AscmQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_quota',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._productName = config.productName;
    this._quotaType = config.quotaType;
    this._quotaTypeId = config.quotaTypeId;
    this._regionName = config.regionName;
    this._targetType = config.targetType;
    this._totalAmount = config.totalAmount;
    this._totalCpu = config.totalCpu;
    this._totalCu = config.totalCu;
    this._totalDisk = config.totalDisk;
    this._totalDiskCloudEfficiency = config.totalDiskCloudEfficiency;
    this._totalDiskCloudSsd = config.totalDiskCloudSsd;
    this._totalEip = config.totalEip;
    this._totalGpu = config.totalGpu;
    this._totalMem = config.totalMem;
    this._totalVipInternal = config.totalVipInternal;
    this._totalVipPublic = config.totalVipPublic;
    this._totalVpc = config.totalVpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // quota_id - computed: true, optional: false, required: false
  public get quotaId() {
    return this.getNumberAttribute('quota_id');
  }

  // quota_type - computed: false, optional: false, required: true
  private _quotaType?: string; 
  public get quotaType() {
    return this.getStringAttribute('quota_type');
  }
  public set quotaType(value: string) {
    this._quotaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTypeInput() {
    return this._quotaType;
  }

  // quota_type_id - computed: false, optional: false, required: true
  private _quotaTypeId?: string; 
  public get quotaTypeId() {
    return this.getStringAttribute('quota_type_id');
  }
  public set quotaTypeId(value: string) {
    this._quotaTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTypeIdInput() {
    return this._quotaTypeId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // total_amount - computed: false, optional: true, required: false
  private _totalAmount?: number; 
  public get totalAmount() {
    return this.getNumberAttribute('total_amount');
  }
  public set totalAmount(value: number) {
    this._totalAmount = value;
  }
  public resetTotalAmount() {
    this._totalAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAmountInput() {
    return this._totalAmount;
  }

  // total_cpu - computed: false, optional: true, required: false
  private _totalCpu?: number; 
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }
  public set totalCpu(value: number) {
    this._totalCpu = value;
  }
  public resetTotalCpu() {
    this._totalCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCpuInput() {
    return this._totalCpu;
  }

  // total_cu - computed: false, optional: true, required: false
  private _totalCu?: number; 
  public get totalCu() {
    return this.getNumberAttribute('total_cu');
  }
  public set totalCu(value: number) {
    this._totalCu = value;
  }
  public resetTotalCu() {
    this._totalCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCuInput() {
    return this._totalCu;
  }

  // total_disk - computed: false, optional: true, required: false
  private _totalDisk?: number; 
  public get totalDisk() {
    return this.getNumberAttribute('total_disk');
  }
  public set totalDisk(value: number) {
    this._totalDisk = value;
  }
  public resetTotalDisk() {
    this._totalDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDiskInput() {
    return this._totalDisk;
  }

  // total_disk_cloud_efficiency - computed: false, optional: true, required: false
  private _totalDiskCloudEfficiency?: number; 
  public get totalDiskCloudEfficiency() {
    return this.getNumberAttribute('total_disk_cloud_efficiency');
  }
  public set totalDiskCloudEfficiency(value: number) {
    this._totalDiskCloudEfficiency = value;
  }
  public resetTotalDiskCloudEfficiency() {
    this._totalDiskCloudEfficiency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDiskCloudEfficiencyInput() {
    return this._totalDiskCloudEfficiency;
  }

  // total_disk_cloud_ssd - computed: false, optional: true, required: false
  private _totalDiskCloudSsd?: number; 
  public get totalDiskCloudSsd() {
    return this.getNumberAttribute('total_disk_cloud_ssd');
  }
  public set totalDiskCloudSsd(value: number) {
    this._totalDiskCloudSsd = value;
  }
  public resetTotalDiskCloudSsd() {
    this._totalDiskCloudSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDiskCloudSsdInput() {
    return this._totalDiskCloudSsd;
  }

  // total_eip - computed: false, optional: true, required: false
  private _totalEip?: number; 
  public get totalEip() {
    return this.getNumberAttribute('total_eip');
  }
  public set totalEip(value: number) {
    this._totalEip = value;
  }
  public resetTotalEip() {
    this._totalEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEipInput() {
    return this._totalEip;
  }

  // total_gpu - computed: false, optional: true, required: false
  private _totalGpu?: number; 
  public get totalGpu() {
    return this.getNumberAttribute('total_gpu');
  }
  public set totalGpu(value: number) {
    this._totalGpu = value;
  }
  public resetTotalGpu() {
    this._totalGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalGpuInput() {
    return this._totalGpu;
  }

  // total_mem - computed: false, optional: true, required: false
  private _totalMem?: number; 
  public get totalMem() {
    return this.getNumberAttribute('total_mem');
  }
  public set totalMem(value: number) {
    this._totalMem = value;
  }
  public resetTotalMem() {
    this._totalMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemInput() {
    return this._totalMem;
  }

  // total_vip_internal - computed: false, optional: true, required: false
  private _totalVipInternal?: number; 
  public get totalVipInternal() {
    return this.getNumberAttribute('total_vip_internal');
  }
  public set totalVipInternal(value: number) {
    this._totalVipInternal = value;
  }
  public resetTotalVipInternal() {
    this._totalVipInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalVipInternalInput() {
    return this._totalVipInternal;
  }

  // total_vip_public - computed: false, optional: true, required: false
  private _totalVipPublic?: number; 
  public get totalVipPublic() {
    return this.getNumberAttribute('total_vip_public');
  }
  public set totalVipPublic(value: number) {
    this._totalVipPublic = value;
  }
  public resetTotalVipPublic() {
    this._totalVipPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalVipPublicInput() {
    return this._totalVipPublic;
  }

  // total_vpc - computed: false, optional: true, required: false
  private _totalVpc?: number; 
  public get totalVpc() {
    return this.getNumberAttribute('total_vpc');
  }
  public set totalVpc(value: number) {
    this._totalVpc = value;
  }
  public resetTotalVpc() {
    this._totalVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalVpcInput() {
    return this._totalVpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      product_name: cdktf.stringToTerraform(this._productName),
      quota_type: cdktf.stringToTerraform(this._quotaType),
      quota_type_id: cdktf.stringToTerraform(this._quotaTypeId),
      region_name: cdktf.stringToTerraform(this._regionName),
      target_type: cdktf.stringToTerraform(this._targetType),
      total_amount: cdktf.numberToTerraform(this._totalAmount),
      total_cpu: cdktf.numberToTerraform(this._totalCpu),
      total_cu: cdktf.numberToTerraform(this._totalCu),
      total_disk: cdktf.numberToTerraform(this._totalDisk),
      total_disk_cloud_efficiency: cdktf.numberToTerraform(this._totalDiskCloudEfficiency),
      total_disk_cloud_ssd: cdktf.numberToTerraform(this._totalDiskCloudSsd),
      total_eip: cdktf.numberToTerraform(this._totalEip),
      total_gpu: cdktf.numberToTerraform(this._totalGpu),
      total_mem: cdktf.numberToTerraform(this._totalMem),
      total_vip_internal: cdktf.numberToTerraform(this._totalVipInternal),
      total_vip_public: cdktf.numberToTerraform(this._totalVipPublic),
      total_vpc: cdktf.numberToTerraform(this._totalVpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_type: {
        value: cdktf.stringToHclTerraform(this._quotaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_type_id: {
        value: cdktf.stringToHclTerraform(this._quotaTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_amount: {
        value: cdktf.numberToHclTerraform(this._totalAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_cpu: {
        value: cdktf.numberToHclTerraform(this._totalCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_cu: {
        value: cdktf.numberToHclTerraform(this._totalCu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_disk: {
        value: cdktf.numberToHclTerraform(this._totalDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_disk_cloud_efficiency: {
        value: cdktf.numberToHclTerraform(this._totalDiskCloudEfficiency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_disk_cloud_ssd: {
        value: cdktf.numberToHclTerraform(this._totalDiskCloudSsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_eip: {
        value: cdktf.numberToHclTerraform(this._totalEip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_gpu: {
        value: cdktf.numberToHclTerraform(this._totalGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_mem: {
        value: cdktf.numberToHclTerraform(this._totalMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_vip_internal: {
        value: cdktf.numberToHclTerraform(this._totalVipInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_vip_public: {
        value: cdktf.numberToHclTerraform(this._totalVipPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_vpc: {
        value: cdktf.numberToHclTerraform(this._totalVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
