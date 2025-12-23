// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRedisBackupDownloadInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * The backup ID, which can be accessed via [DescribeInstanceBackups](https://cloud.tencent.com/document/product/239/20011) interface returns the parameter RedisBackupSet to get.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#backup_id DataTencentcloudRedisBackupDownloadInfo#backup_id}
  */
  readonly backupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#id DataTencentcloudRedisBackupDownloadInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#instance_id DataTencentcloudRedisBackupDownloadInfo#instance_id}
  */
  readonly instanceId: string;
  /**
  * Identifies whether the customized LimitIP address can download the backup file.- In: Custom IP addresses are available for download.- NotIn: Custom IPs are not available for download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#ip_comparison_symbol DataTencentcloudRedisBackupDownloadInfo#ip_comparison_symbol}
  */
  readonly ipComparisonSymbol?: string;
  /**
  * A custom VPC IP address for downloadable backup files.If the parameter LimitType is **Customize**, you need to configure this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#limit_ip DataTencentcloudRedisBackupDownloadInfo#limit_ip}
  */
  readonly limitIp?: string[];
  /**
  * Types of network restrictions for downloading backup files:- NoLimit: There is no limit, and backup files can be downloaded from both Tencent Cloud and internal and external networks.- LimitOnlyIntranet: Only intranet addresses automatically assigned by Tencent Cloud can download backup files.- Customize: refers to a user-defined private network downloadable backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#limit_type DataTencentcloudRedisBackupDownloadInfo#limit_type}
  */
  readonly limitType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#result_output_file DataTencentcloudRedisBackupDownloadInfo#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * This parameter only supports entering In, which means that the custom LimitVpc can download the backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#vpc_comparison_symbol DataTencentcloudRedisBackupDownloadInfo#vpc_comparison_symbol}
  */
  readonly vpcComparisonSymbol?: string;
  /**
  * limit_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#limit_vpc DataTencentcloudRedisBackupDownloadInfo#limit_vpc}
  */
  readonly limitVpc?: DataTencentcloudRedisBackupDownloadInfoLimitVpc[] | cdktf.IResolvable;
}
export interface DataTencentcloudRedisBackupDownloadInfoBackupInfos {
}

export function dataTencentcloudRedisBackupDownloadInfoBackupInfosToTerraform(struct?: DataTencentcloudRedisBackupDownloadInfoBackupInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRedisBackupDownloadInfoBackupInfosToHclTerraform(struct?: DataTencentcloudRedisBackupDownloadInfoBackupInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRedisBackupDownloadInfoBackupInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisBackupDownloadInfoBackupInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisBackupDownloadInfoBackupInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // inner_download_url - computed: true, optional: false, required: false
  public get innerDownloadUrl() {
    return this.getStringAttribute('inner_download_url');
  }
}

export class DataTencentcloudRedisBackupDownloadInfoBackupInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRedisBackupDownloadInfoBackupInfosOutputReference {
    return new DataTencentcloudRedisBackupDownloadInfoBackupInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudRedisBackupDownloadInfoLimitVpc {
  /**
  * Customize the region of the VPC to which the backup file is downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#region DataTencentcloudRedisBackupDownloadInfo#region}
  */
  readonly region: string;
  /**
  * Customize the list of VPCs to download backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#vpc_list DataTencentcloudRedisBackupDownloadInfo#vpc_list}
  */
  readonly vpcList: string[];
}

export function dataTencentcloudRedisBackupDownloadInfoLimitVpcToTerraform(struct?: DataTencentcloudRedisBackupDownloadInfoLimitVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    vpc_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcList),
  }
}


export function dataTencentcloudRedisBackupDownloadInfoLimitVpcToHclTerraform(struct?: DataTencentcloudRedisBackupDownloadInfoLimitVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudRedisBackupDownloadInfoLimitVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisBackupDownloadInfoLimitVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._vpcList !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcList = this._vpcList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisBackupDownloadInfoLimitVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._vpcList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._vpcList = value.vpcList;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // vpc_list - computed: false, optional: false, required: true
  private _vpcList?: string[]; 
  public get vpcList() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_list'));
  }
  public set vpcList(value: string[]) {
    this._vpcList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcListInput() {
    return this._vpcList;
  }
}

export class DataTencentcloudRedisBackupDownloadInfoLimitVpcList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudRedisBackupDownloadInfoLimitVpc[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudRedisBackupDownloadInfoLimitVpcOutputReference {
    return new DataTencentcloudRedisBackupDownloadInfoLimitVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info tencentcloud_redis_backup_download_info}
*/
export class DataTencentcloudRedisBackupDownloadInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_backup_download_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRedisBackupDownloadInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRedisBackupDownloadInfo to import
  * @param importFromId The id of the existing DataTencentcloudRedisBackupDownloadInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRedisBackupDownloadInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_backup_download_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/redis_backup_download_info tencentcloud_redis_backup_download_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRedisBackupDownloadInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRedisBackupDownloadInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_backup_download_info',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipComparisonSymbol = config.ipComparisonSymbol;
    this._limitIp = config.limitIp;
    this._limitType = config.limitType;
    this._resultOutputFile = config.resultOutputFile;
    this._vpcComparisonSymbol = config.vpcComparisonSymbol;
    this._limitVpc.internalValue = config.limitVpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_infos - computed: true, optional: false, required: false
  private _backupInfos = new DataTencentcloudRedisBackupDownloadInfoBackupInfosList(this, "backup_infos", false);
  public get backupInfos() {
    return this._backupInfos;
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

  // ip_comparison_symbol - computed: false, optional: true, required: false
  private _ipComparisonSymbol?: string; 
  public get ipComparisonSymbol() {
    return this.getStringAttribute('ip_comparison_symbol');
  }
  public set ipComparisonSymbol(value: string) {
    this._ipComparisonSymbol = value;
  }
  public resetIpComparisonSymbol() {
    this._ipComparisonSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipComparisonSymbolInput() {
    return this._ipComparisonSymbol;
  }

  // limit_ip - computed: false, optional: true, required: false
  private _limitIp?: string[]; 
  public get limitIp() {
    return cdktf.Fn.tolist(this.getListAttribute('limit_ip'));
  }
  public set limitIp(value: string[]) {
    this._limitIp = value;
  }
  public resetLimitIp() {
    this._limitIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIpInput() {
    return this._limitIp;
  }

  // limit_type - computed: false, optional: true, required: false
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  public resetLimitType() {
    this._limitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
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

  // vpc_comparison_symbol - computed: false, optional: true, required: false
  private _vpcComparisonSymbol?: string; 
  public get vpcComparisonSymbol() {
    return this.getStringAttribute('vpc_comparison_symbol');
  }
  public set vpcComparisonSymbol(value: string) {
    this._vpcComparisonSymbol = value;
  }
  public resetVpcComparisonSymbol() {
    this._vpcComparisonSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcComparisonSymbolInput() {
    return this._vpcComparisonSymbol;
  }

  // limit_vpc - computed: false, optional: true, required: false
  private _limitVpc = new DataTencentcloudRedisBackupDownloadInfoLimitVpcList(this, "limit_vpc", false);
  public get limitVpc() {
    return this._limitVpc;
  }
  public putLimitVpc(value: DataTencentcloudRedisBackupDownloadInfoLimitVpc[] | cdktf.IResolvable) {
    this._limitVpc.internalValue = value;
  }
  public resetLimitVpc() {
    this._limitVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVpcInput() {
    return this._limitVpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_comparison_symbol: cdktf.stringToTerraform(this._ipComparisonSymbol),
      limit_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitIp),
      limit_type: cdktf.stringToTerraform(this._limitType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      vpc_comparison_symbol: cdktf.stringToTerraform(this._vpcComparisonSymbol),
      limit_vpc: cdktf.listMapper(dataTencentcloudRedisBackupDownloadInfoLimitVpcToTerraform, true)(this._limitVpc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_comparison_symbol: {
        value: cdktf.stringToHclTerraform(this._ipComparisonSymbol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limitIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      limit_type: {
        value: cdktf.stringToHclTerraform(this._limitType),
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
      vpc_comparison_symbol: {
        value: cdktf.stringToHclTerraform(this._vpcComparisonSymbol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_vpc: {
        value: cdktf.listMapperHcl(dataTencentcloudRedisBackupDownloadInfoLimitVpcToHclTerraform, true)(this._limitVpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudRedisBackupDownloadInfoLimitVpcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
