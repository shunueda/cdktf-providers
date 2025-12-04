// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisBackupDownloadRestrictionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#id RedisBackupDownloadRestriction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifies whether the customized LimitIP address can download the backup file.- In: Custom IP addresses are available for download.- NotIn: Custom IPs are not available for download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#ip_comparison_symbol RedisBackupDownloadRestriction#ip_comparison_symbol}
  */
  readonly ipComparisonSymbol?: string;
  /**
  * A custom VPC IP address for downloadable backup files.If the parameter LimitType is **Customize**, you need to configure this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#limit_ip RedisBackupDownloadRestriction#limit_ip}
  */
  readonly limitIp?: string[];
  /**
  * Types of network restrictions for downloading backup files:- NoLimit: There is no limit, and backup files can be downloaded from both Tencent Cloud and internal and external networks.- LimitOnlyIntranet: Only intranet addresses automatically assigned by Tencent Cloud can download backup files.- Customize: refers to a user-defined private network downloadable backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#limit_type RedisBackupDownloadRestriction#limit_type}
  */
  readonly limitType: string;
  /**
  * This parameter only supports entering In, which means that the custom LimitVpc can download the backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#vpc_comparison_symbol RedisBackupDownloadRestriction#vpc_comparison_symbol}
  */
  readonly vpcComparisonSymbol?: string;
  /**
  * limit_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#limit_vpc RedisBackupDownloadRestriction#limit_vpc}
  */
  readonly limitVpc?: RedisBackupDownloadRestrictionLimitVpc[] | cdktf.IResolvable;
}
export interface RedisBackupDownloadRestrictionLimitVpc {
  /**
  * Customize the region of the VPC to which the backup file is downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#region RedisBackupDownloadRestriction#region}
  */
  readonly region: string;
  /**
  * Customize the list of VPCs to download backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#vpc_list RedisBackupDownloadRestriction#vpc_list}
  */
  readonly vpcList: string[];
}

export function redisBackupDownloadRestrictionLimitVpcToTerraform(struct?: RedisBackupDownloadRestrictionLimitVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    vpc_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcList),
  }
}


export function redisBackupDownloadRestrictionLimitVpcToHclTerraform(struct?: RedisBackupDownloadRestrictionLimitVpc | cdktf.IResolvable): any {
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

export class RedisBackupDownloadRestrictionLimitVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisBackupDownloadRestrictionLimitVpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisBackupDownloadRestrictionLimitVpc | cdktf.IResolvable | undefined) {
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

export class RedisBackupDownloadRestrictionLimitVpcList extends cdktf.ComplexList {
  public internalValue? : RedisBackupDownloadRestrictionLimitVpc[] | cdktf.IResolvable

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
  public get(index: number): RedisBackupDownloadRestrictionLimitVpcOutputReference {
    return new RedisBackupDownloadRestrictionLimitVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction tencentcloud_redis_backup_download_restriction}
*/
export class RedisBackupDownloadRestriction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_backup_download_restriction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisBackupDownloadRestriction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisBackupDownloadRestriction to import
  * @param importFromId The id of the existing RedisBackupDownloadRestriction that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisBackupDownloadRestriction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_backup_download_restriction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/redis_backup_download_restriction tencentcloud_redis_backup_download_restriction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisBackupDownloadRestrictionConfig
  */
  public constructor(scope: Construct, id: string, config: RedisBackupDownloadRestrictionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_backup_download_restriction',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._ipComparisonSymbol = config.ipComparisonSymbol;
    this._limitIp = config.limitIp;
    this._limitType = config.limitType;
    this._vpcComparisonSymbol = config.vpcComparisonSymbol;
    this._limitVpc.internalValue = config.limitVpc;
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

  // limit_type - computed: false, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
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
  private _limitVpc = new RedisBackupDownloadRestrictionLimitVpcList(this, "limit_vpc", false);
  public get limitVpc() {
    return this._limitVpc;
  }
  public putLimitVpc(value: RedisBackupDownloadRestrictionLimitVpc[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      ip_comparison_symbol: cdktf.stringToTerraform(this._ipComparisonSymbol),
      limit_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limitIp),
      limit_type: cdktf.stringToTerraform(this._limitType),
      vpc_comparison_symbol: cdktf.stringToTerraform(this._vpcComparisonSymbol),
      limit_vpc: cdktf.listMapper(redisBackupDownloadRestrictionLimitVpcToTerraform, true)(this._limitVpc.internalValue),
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
      vpc_comparison_symbol: {
        value: cdktf.stringToHclTerraform(this._vpcComparisonSymbol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_vpc: {
        value: cdktf.listMapperHcl(redisBackupDownloadRestrictionLimitVpcToHclTerraform, true)(this._limitVpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisBackupDownloadRestrictionLimitVpcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
