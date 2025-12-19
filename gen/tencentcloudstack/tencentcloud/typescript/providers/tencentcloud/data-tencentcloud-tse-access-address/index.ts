// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTseAccessAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#engine_region DataTencentcloudTseAccessAddress#engine_region}
  */
  readonly engineRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#id DataTencentcloudTseAccessAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * engine instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#instance_id DataTencentcloudTseAccessAddress#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#result_output_file DataTencentcloudTseAccessAddress#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Subnet ID, Zookeeper does not need to pass vpcid and subnetid; nacos and Polaris need to pass vpcid and subnetid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#subnet_id DataTencentcloudTseAccessAddress#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC ID, Zookeeper does not need to pass vpcid and subnetid; nacos and Polaris need to pass vpcid and subnetid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#vpc_id DataTencentcloudTseAccessAddress#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Name of other engine components(pushgateway, polaris-limiter).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#workload DataTencentcloudTseAccessAddress#workload}
  */
  readonly workload?: string;
}
export interface DataTencentcloudTseAccessAddressEnvAddressInfos {
}

export function dataTencentcloudTseAccessAddressEnvAddressInfosToTerraform(struct?: DataTencentcloudTseAccessAddressEnvAddressInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTseAccessAddressEnvAddressInfosToHclTerraform(struct?: DataTencentcloudTseAccessAddressEnvAddressInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTseAccessAddressEnvAddressInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTseAccessAddressEnvAddressInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTseAccessAddressEnvAddressInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_internet_service_ip - computed: true, optional: false, required: false
  public get configInternetServiceIp() {
    return this.getStringAttribute('config_internet_service_ip');
  }

  // config_intranet_address - computed: true, optional: false, required: false
  public get configIntranetAddress() {
    return this.getStringAttribute('config_intranet_address');
  }

  // enable_config_internet - computed: true, optional: false, required: false
  public get enableConfigInternet() {
    return this.getBooleanAttribute('enable_config_internet');
  }

  // enable_config_intranet - computed: true, optional: false, required: false
  public get enableConfigIntranet() {
    return this.getBooleanAttribute('enable_config_intranet');
  }

  // env_name - computed: true, optional: false, required: false
  public get envName() {
    return this.getStringAttribute('env_name');
  }

  // internet_band_width - computed: true, optional: false, required: false
  public get internetBandWidth() {
    return this.getNumberAttribute('internet_band_width');
  }
}

export class DataTencentcloudTseAccessAddressEnvAddressInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTseAccessAddressEnvAddressInfosOutputReference {
    return new DataTencentcloudTseAccessAddressEnvAddressInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTseAccessAddressLimiterAddressInfos {
}

export function dataTencentcloudTseAccessAddressLimiterAddressInfosToTerraform(struct?: DataTencentcloudTseAccessAddressLimiterAddressInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTseAccessAddressLimiterAddressInfosToHclTerraform(struct?: DataTencentcloudTseAccessAddressLimiterAddressInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTseAccessAddressLimiterAddressInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTseAccessAddressLimiterAddressInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTseAccessAddressLimiterAddressInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intranet_address - computed: true, optional: false, required: false
  public get intranetAddress() {
    return this.getStringAttribute('intranet_address');
  }
}

export class DataTencentcloudTseAccessAddressLimiterAddressInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTseAccessAddressLimiterAddressInfosOutputReference {
    return new DataTencentcloudTseAccessAddressLimiterAddressInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address tencentcloud_tse_access_address}
*/
export class DataTencentcloudTseAccessAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_access_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTseAccessAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTseAccessAddress to import
  * @param importFromId The id of the existing DataTencentcloudTseAccessAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTseAccessAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_access_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/tse_access_address tencentcloud_tse_access_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTseAccessAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTseAccessAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_access_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineRegion = config.engineRegion;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._workload = config.workload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_internet_address - computed: true, optional: false, required: false
  public get consoleInternetAddress() {
    return this.getStringAttribute('console_internet_address');
  }

  // console_internet_band_width - computed: true, optional: false, required: false
  public get consoleInternetBandWidth() {
    return this.getNumberAttribute('console_internet_band_width');
  }

  // console_intranet_address - computed: true, optional: false, required: false
  public get consoleIntranetAddress() {
    return this.getStringAttribute('console_intranet_address');
  }

  // engine_region - computed: false, optional: true, required: false
  private _engineRegion?: string; 
  public get engineRegion() {
    return this.getStringAttribute('engine_region');
  }
  public set engineRegion(value: string) {
    this._engineRegion = value;
  }
  public resetEngineRegion() {
    this._engineRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegionInput() {
    return this._engineRegion;
  }

  // env_address_infos - computed: true, optional: false, required: false
  private _envAddressInfos = new DataTencentcloudTseAccessAddressEnvAddressInfosList(this, "env_address_infos", false);
  public get envAddressInfos() {
    return this._envAddressInfos;
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

  // internet_address - computed: true, optional: false, required: false
  public get internetAddress() {
    return this.getStringAttribute('internet_address');
  }

  // internet_band_width - computed: true, optional: false, required: false
  public get internetBandWidth() {
    return this.getNumberAttribute('internet_band_width');
  }

  // intranet_address - computed: true, optional: false, required: false
  public get intranetAddress() {
    return this.getStringAttribute('intranet_address');
  }

  // limiter_address_infos - computed: true, optional: false, required: false
  private _limiterAddressInfos = new DataTencentcloudTseAccessAddressLimiterAddressInfosList(this, "limiter_address_infos", false);
  public get limiterAddressInfos() {
    return this._limiterAddressInfos;
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

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // workload - computed: false, optional: true, required: false
  private _workload?: string; 
  public get workload() {
    return this.getStringAttribute('workload');
  }
  public set workload(value: string) {
    this._workload = value;
  }
  public resetWorkload() {
    this._workload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_region: cdktf.stringToTerraform(this._engineRegion),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      workload: cdktf.stringToTerraform(this._workload),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_region: {
        value: cdktf.stringToHclTerraform(this._engineRegion),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload: {
        value: cdktf.stringToHclTerraform(this._workload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
