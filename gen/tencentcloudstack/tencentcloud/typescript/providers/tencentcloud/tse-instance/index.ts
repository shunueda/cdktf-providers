// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client public network access, `true`: on, `false`: off, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#enable_client_internet_access TseInstance#enable_client_internet_access}
  */
  readonly enableClientInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * engien name. Reference value: nacos-test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_name TseInstance#engine_name}
  */
  readonly engineName: string;
  /**
  * engine node num. see EngineProductVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_node_num TseInstance#engine_node_num}
  */
  readonly engineNodeNum?: number;
  /**
  * Engine product version. Reference value: `Nacos`: `TRIAL`: Development version, optional node num: `1`, optional spec list: `1C1G`; `STANDARD`: Standard versions, optional node num: `3`, `5`, `7`, optional spec list: `1C2G`, `2C4G`, `4C8G`, `8C16G`, `16C32G`. `Zookeeper`: `TRIAL`: Development version, optional node num: `1`, optional spec list: `1C1G`; `STANDARD`: Standard versions, optional node num: `3`, `5`, `7`, optional spec list: `1C2G`, `2C4G`, `4C8G`, `8C16G`, `16C32G`; `PROFESSIONAL`: professional versions, optional node num: `3`, `5`, `7`, optional spec list: `1C2G`, `2C4G`, `4C8G`, `8C16G`, `16C32G`. `Polarismesh`: `BASE`: Base version, optional node num: `1`, optional spec list: `NUM50`; `PROFESSIONAL`: Enterprise versions, optional node num: `2`, `3`, optional spec list: `NUM50`, `NUM100`, `NUM200`, `NUM500`, `NUM1000`, `NUM5000`, `NUM10000`, `NUM50000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_product_version TseInstance#engine_product_version}
  */
  readonly engineProductVersion: string;
  /**
  * engine deploy region. Reference value: `China area` Reference value: `ap-guangzhou`, `ap-beijing`, `ap-chengdu`, `ap-chongqing`, `ap-nanjing`, `ap-shanghai` `ap-beijing-fsi`, `ap-shanghai-fsi`, `ap-shenzhen-fsi`. `Asia Pacific` area Reference value: `ap-hongkong`, `ap-taipei`, `ap-jakarta`, `ap-singapore`, `ap-bangkok`, `ap-seoul`, `ap-tokyo`. `North America area` Reference value: `na-toronto`, `sa-saopaulo`, `na-siliconvalley`, `na-ashburn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_region TseInstance#engine_region}
  */
  readonly engineRegion: string;
  /**
  * engine spec ID. see EngineProductVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_resource_spec TseInstance#engine_resource_spec}
  */
  readonly engineResourceSpec?: string;
  /**
  * engine type. Reference value: `zookeeper`, `nacos`, `polaris`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_type TseInstance#engine_type}
  */
  readonly engineType: string;
  /**
  * An open source version of the engine. Each engine supports different open source versions, refer to the product documentation or console purchase page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_version TseInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#id TseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prepaid time, in monthly units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#prepaid_period TseInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Automatic renewal mark, prepaid only.  Reference value: `0`: No automatic renewal, `1`: Automatic renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#prepaid_renew_flag TseInstance#prepaid_renew_flag}
  */
  readonly prepaidRenewFlag?: number;
  /**
  * subnet ID. Assign an IP address to the engine in the VPC subnet. Reference value: subnet-ahde9me9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#subnet_id TseInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#tags TseInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * trade type. Reference value:- 0:postpaid- 1:Prepaid (Interface does not support the creation of prepaid instances yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#trade_type TseInstance#trade_type}
  */
  readonly tradeType: number;
  /**
  * VPC ID. Assign an IP address to the engine in the VPC subnet. Reference value: vpc-conz6aix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#vpc_id TseInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * engine_region_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_region_infos TseInstance#engine_region_infos}
  */
  readonly engineRegionInfos?: TseInstanceEngineRegionInfos[] | cdktf.IResolvable;
}
export interface TseInstanceEngineRegionInfosVpcInfos {
  /**
  * Intranet access addressNote: This field may return null, indicating that a valid value is not available..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#intranet_address TseInstance#intranet_address}
  */
  readonly intranetAddress?: string;
  /**
  * Subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#subnet_id TseInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Vpc Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#vpc_id TseInstance#vpc_id}
  */
  readonly vpcId: string;
}

export function tseInstanceEngineRegionInfosVpcInfosToTerraform(struct?: TseInstanceEngineRegionInfosVpcInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intranet_address: cdktf.stringToTerraform(struct!.intranetAddress),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function tseInstanceEngineRegionInfosVpcInfosToHclTerraform(struct?: TseInstanceEngineRegionInfosVpcInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intranet_address: {
      value: cdktf.stringToHclTerraform(struct!.intranetAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseInstanceEngineRegionInfosVpcInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseInstanceEngineRegionInfosVpcInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intranetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.intranetAddress = this._intranetAddress;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseInstanceEngineRegionInfosVpcInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intranetAddress = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intranetAddress = value.intranetAddress;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // intranet_address - computed: false, optional: true, required: false
  private _intranetAddress?: string; 
  public get intranetAddress() {
    return this.getStringAttribute('intranet_address');
  }
  public set intranetAddress(value: string) {
    this._intranetAddress = value;
  }
  public resetIntranetAddress() {
    this._intranetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetAddressInput() {
    return this._intranetAddress;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class TseInstanceEngineRegionInfosVpcInfosList extends cdktf.ComplexList {
  public internalValue? : TseInstanceEngineRegionInfosVpcInfos[] | cdktf.IResolvable

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
  public get(index: number): TseInstanceEngineRegionInfosVpcInfosOutputReference {
    return new TseInstanceEngineRegionInfosVpcInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseInstanceEngineRegionInfos {
  /**
  * Engine node region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#engine_region TseInstance#engine_region}
  */
  readonly engineRegion: string;
  /**
  * The number of nodes allocated in this region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#replica TseInstance#replica}
  */
  readonly replica: number;
  /**
  * vpc_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#vpc_infos TseInstance#vpc_infos}
  */
  readonly vpcInfos: TseInstanceEngineRegionInfosVpcInfos[] | cdktf.IResolvable;
}

export function tseInstanceEngineRegionInfosToTerraform(struct?: TseInstanceEngineRegionInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_region: cdktf.stringToTerraform(struct!.engineRegion),
    replica: cdktf.numberToTerraform(struct!.replica),
    vpc_infos: cdktf.listMapper(tseInstanceEngineRegionInfosVpcInfosToTerraform, true)(struct!.vpcInfos),
  }
}


export function tseInstanceEngineRegionInfosToHclTerraform(struct?: TseInstanceEngineRegionInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_region: {
      value: cdktf.stringToHclTerraform(struct!.engineRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica: {
      value: cdktf.numberToHclTerraform(struct!.replica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_infos: {
      value: cdktf.listMapperHcl(tseInstanceEngineRegionInfosVpcInfosToHclTerraform, true)(struct!.vpcInfos),
      isBlock: true,
      type: "list",
      storageClassType: "TseInstanceEngineRegionInfosVpcInfosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseInstanceEngineRegionInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseInstanceEngineRegionInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineRegion = this._engineRegion;
    }
    if (this._replica !== undefined) {
      hasAnyValues = true;
      internalValueResult.replica = this._replica;
    }
    if (this._vpcInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInfos = this._vpcInfos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseInstanceEngineRegionInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineRegion = undefined;
      this._replica = undefined;
      this._vpcInfos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineRegion = value.engineRegion;
      this._replica = value.replica;
      this._vpcInfos.internalValue = value.vpcInfos;
    }
  }

  // engine_region - computed: false, optional: false, required: true
  private _engineRegion?: string; 
  public get engineRegion() {
    return this.getStringAttribute('engine_region');
  }
  public set engineRegion(value: string) {
    this._engineRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegionInput() {
    return this._engineRegion;
  }

  // replica - computed: false, optional: false, required: true
  private _replica?: number; 
  public get replica() {
    return this.getNumberAttribute('replica');
  }
  public set replica(value: number) {
    this._replica = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
  }

  // vpc_infos - computed: false, optional: false, required: true
  private _vpcInfos = new TseInstanceEngineRegionInfosVpcInfosList(this, "vpc_infos", false);
  public get vpcInfos() {
    return this._vpcInfos;
  }
  public putVpcInfos(value: TseInstanceEngineRegionInfosVpcInfos[] | cdktf.IResolvable) {
    this._vpcInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInfosInput() {
    return this._vpcInfos.internalValue;
  }
}

export class TseInstanceEngineRegionInfosList extends cdktf.ComplexList {
  public internalValue? : TseInstanceEngineRegionInfos[] | cdktf.IResolvable

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
  public get(index: number): TseInstanceEngineRegionInfosOutputReference {
    return new TseInstanceEngineRegionInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance tencentcloud_tse_instance}
*/
export class TseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseInstance to import
  * @param importFromId The id of the existing TseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_instance tencentcloud_tse_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableClientInternetAccess = config.enableClientInternetAccess;
    this._engineName = config.engineName;
    this._engineNodeNum = config.engineNodeNum;
    this._engineProductVersion = config.engineProductVersion;
    this._engineRegion = config.engineRegion;
    this._engineResourceSpec = config.engineResourceSpec;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._prepaidPeriod = config.prepaidPeriod;
    this._prepaidRenewFlag = config.prepaidRenewFlag;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tradeType = config.tradeType;
    this._vpcId = config.vpcId;
    this._engineRegionInfos.internalValue = config.engineRegionInfos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_client_internet_access - computed: false, optional: true, required: false
  private _enableClientInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableClientInternetAccess() {
    return this.getBooleanAttribute('enable_client_internet_access');
  }
  public set enableClientInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableClientInternetAccess = value;
  }
  public resetEnableClientInternetAccess() {
    this._enableClientInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientInternetAccessInput() {
    return this._enableClientInternetAccess;
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // engine_node_num - computed: false, optional: true, required: false
  private _engineNodeNum?: number; 
  public get engineNodeNum() {
    return this.getNumberAttribute('engine_node_num');
  }
  public set engineNodeNum(value: number) {
    this._engineNodeNum = value;
  }
  public resetEngineNodeNum() {
    this._engineNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNodeNumInput() {
    return this._engineNodeNum;
  }

  // engine_product_version - computed: false, optional: false, required: true
  private _engineProductVersion?: string; 
  public get engineProductVersion() {
    return this.getStringAttribute('engine_product_version');
  }
  public set engineProductVersion(value: string) {
    this._engineProductVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineProductVersionInput() {
    return this._engineProductVersion;
  }

  // engine_region - computed: false, optional: false, required: true
  private _engineRegion?: string; 
  public get engineRegion() {
    return this.getStringAttribute('engine_region');
  }
  public set engineRegion(value: string) {
    this._engineRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegionInput() {
    return this._engineRegion;
  }

  // engine_resource_spec - computed: false, optional: true, required: false
  private _engineResourceSpec?: string; 
  public get engineResourceSpec() {
    return this.getStringAttribute('engine_resource_spec');
  }
  public set engineResourceSpec(value: string) {
    this._engineResourceSpec = value;
  }
  public resetEngineResourceSpec() {
    this._engineResourceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineResourceSpecInput() {
    return this._engineResourceSpec;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
  }

  // prepaid_renew_flag - computed: false, optional: true, required: false
  private _prepaidRenewFlag?: number; 
  public get prepaidRenewFlag() {
    return this.getNumberAttribute('prepaid_renew_flag');
  }
  public set prepaidRenewFlag(value: number) {
    this._prepaidRenewFlag = value;
  }
  public resetPrepaidRenewFlag() {
    this._prepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidRenewFlagInput() {
    return this._prepaidRenewFlag;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trade_type - computed: false, optional: false, required: true
  private _tradeType?: number; 
  public get tradeType() {
    return this.getNumberAttribute('trade_type');
  }
  public set tradeType(value: number) {
    this._tradeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tradeTypeInput() {
    return this._tradeType;
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

  // engine_region_infos - computed: false, optional: true, required: false
  private _engineRegionInfos = new TseInstanceEngineRegionInfosList(this, "engine_region_infos", false);
  public get engineRegionInfos() {
    return this._engineRegionInfos;
  }
  public putEngineRegionInfos(value: TseInstanceEngineRegionInfos[] | cdktf.IResolvable) {
    this._engineRegionInfos.internalValue = value;
  }
  public resetEngineRegionInfos() {
    this._engineRegionInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegionInfosInput() {
    return this._engineRegionInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_client_internet_access: cdktf.booleanToTerraform(this._enableClientInternetAccess),
      engine_name: cdktf.stringToTerraform(this._engineName),
      engine_node_num: cdktf.numberToTerraform(this._engineNodeNum),
      engine_product_version: cdktf.stringToTerraform(this._engineProductVersion),
      engine_region: cdktf.stringToTerraform(this._engineRegion),
      engine_resource_spec: cdktf.stringToTerraform(this._engineResourceSpec),
      engine_type: cdktf.stringToTerraform(this._engineType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      prepaid_renew_flag: cdktf.numberToTerraform(this._prepaidRenewFlag),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trade_type: cdktf.numberToTerraform(this._tradeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      engine_region_infos: cdktf.listMapper(tseInstanceEngineRegionInfosToTerraform, true)(this._engineRegionInfos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_client_internet_access: {
        value: cdktf.booleanToHclTerraform(this._enableClientInternetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_name: {
        value: cdktf.stringToHclTerraform(this._engineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_node_num: {
        value: cdktf.numberToHclTerraform(this._engineNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_product_version: {
        value: cdktf.stringToHclTerraform(this._engineProductVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_region: {
        value: cdktf.stringToHclTerraform(this._engineRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_resource_spec: {
        value: cdktf.stringToHclTerraform(this._engineResourceSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_renew_flag: {
        value: cdktf.numberToHclTerraform(this._prepaidRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trade_type: {
        value: cdktf.numberToHclTerraform(this._tradeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_region_infos: {
        value: cdktf.listMapperHcl(tseInstanceEngineRegionInfosToHclTerraform, true)(this._engineRegionInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseInstanceEngineRegionInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
