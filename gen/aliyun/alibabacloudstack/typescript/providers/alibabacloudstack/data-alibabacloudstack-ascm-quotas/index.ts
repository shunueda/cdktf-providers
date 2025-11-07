// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackAscmQuotasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#id DataAlibabacloudstackAscmQuotas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#ids DataAlibabacloudstackAscmQuotas#ids}
  */
  readonly ids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#output_file DataAlibabacloudstackAscmQuotas#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#product_name DataAlibabacloudstackAscmQuotas#product_name}
  */
  readonly productName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#quota_type DataAlibabacloudstackAscmQuotas#quota_type}
  */
  readonly quotaType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#quota_type_id DataAlibabacloudstackAscmQuotas#quota_type_id}
  */
  readonly quotaTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#target_type DataAlibabacloudstackAscmQuotas#target_type}
  */
  readonly targetType?: string;
}
export interface DataAlibabacloudstackAscmQuotasQuotas {
}

export function dataAlibabacloudstackAscmQuotasQuotasToTerraform(struct?: DataAlibabacloudstackAscmQuotasQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackAscmQuotasQuotasToHclTerraform(struct?: DataAlibabacloudstackAscmQuotasQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackAscmQuotasQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackAscmQuotasQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackAscmQuotasQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate_cpu - computed: true, optional: false, required: false
  public get allocateCpu() {
    return this.getNumberAttribute('allocate_cpu');
  }

  // allocate_disk - computed: true, optional: false, required: false
  public get allocateDisk() {
    return this.getNumberAttribute('allocate_disk');
  }

  // allocate_vip_internal - computed: true, optional: false, required: false
  public get allocateVipInternal() {
    return this.getNumberAttribute('allocate_vip_internal');
  }

  // allocate_vip_public - computed: true, optional: false, required: false
  public get allocateVipPublic() {
    return this.getNumberAttribute('allocate_vip_public');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // quota_type - computed: true, optional: false, required: false
  public get quotaType() {
    return this.getStringAttribute('quota_type');
  }

  // quota_type_id - computed: true, optional: false, required: false
  public get quotaTypeId() {
    return this.getStringAttribute('quota_type_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // total_amount - computed: true, optional: false, required: false
  public get totalAmount() {
    return this.getNumberAttribute('total_amount');
  }

  // total_cpu - computed: true, optional: false, required: false
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }

  // total_cu - computed: true, optional: false, required: false
  public get totalCu() {
    return this.getNumberAttribute('total_cu');
  }

  // total_disk - computed: true, optional: false, required: false
  public get totalDisk() {
    return this.getNumberAttribute('total_disk');
  }

  // total_disk_cloud_efficiency - computed: true, optional: false, required: false
  public get totalDiskCloudEfficiency() {
    return this.getNumberAttribute('total_disk_cloud_efficiency');
  }

  // total_disk_cloud_ssd - computed: true, optional: false, required: false
  public get totalDiskCloudSsd() {
    return this.getNumberAttribute('total_disk_cloud_ssd');
  }

  // total_eip - computed: true, optional: false, required: false
  public get totalEip() {
    return this.getNumberAttribute('total_eip');
  }

  // total_gpu - computed: true, optional: false, required: false
  public get totalGpu() {
    return this.getNumberAttribute('total_gpu');
  }

  // total_mem - computed: true, optional: false, required: false
  public get totalMem() {
    return this.getNumberAttribute('total_mem');
  }

  // total_vip_internal - computed: true, optional: false, required: false
  public get totalVipInternal() {
    return this.getNumberAttribute('total_vip_internal');
  }

  // total_vip_public - computed: true, optional: false, required: false
  public get totalVipPublic() {
    return this.getNumberAttribute('total_vip_public');
  }

  // total_vpc - computed: true, optional: false, required: false
  public get totalVpc() {
    return this.getNumberAttribute('total_vpc');
  }

  // used_disk - computed: true, optional: false, required: false
  public get usedDisk() {
    return this.getNumberAttribute('used_disk');
  }

  // used_mem - computed: true, optional: false, required: false
  public get usedMem() {
    return this.getNumberAttribute('used_mem');
  }

  // used_vip_public - computed: true, optional: false, required: false
  public get usedVipPublic() {
    return this.getNumberAttribute('used_vip_public');
  }
}

export class DataAlibabacloudstackAscmQuotasQuotasList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackAscmQuotasQuotasOutputReference {
    return new DataAlibabacloudstackAscmQuotasQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas alibabacloudstack_ascm_quotas}
*/
export class DataAlibabacloudstackAscmQuotas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_quotas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackAscmQuotas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackAscmQuotas to import
  * @param importFromId The id of the existing DataAlibabacloudstackAscmQuotas that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackAscmQuotas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_quotas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/ascm_quotas alibabacloudstack_ascm_quotas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackAscmQuotasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackAscmQuotasConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_quotas',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._productName = config.productName;
    this._quotaType = config.quotaType;
    this._quotaTypeId = config.quotaTypeId;
    this._targetType = config.targetType;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return this.getNumberListAttribute('ids');
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // quotas - computed: true, optional: false, required: false
  private _quotas = new DataAlibabacloudstackAscmQuotasQuotasList(this, "quotas", false);
  public get quotas() {
    return this._quotas;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product_name: cdktf.stringToTerraform(this._productName),
      quota_type: cdktf.stringToTerraform(this._quotaType),
      quota_type_id: cdktf.stringToTerraform(this._quotaTypeId),
      target_type: cdktf.stringToTerraform(this._targetType),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
