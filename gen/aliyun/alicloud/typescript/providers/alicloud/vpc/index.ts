// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#cidr_block Vpc#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#classic_link_enabled Vpc#classic_link_enabled}
  */
  readonly classicLinkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#description Vpc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#dns_hostname_status Vpc#dns_hostname_status}
  */
  readonly dnsHostnameStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#dry_run Vpc#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#enable_ipv6 Vpc#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#force_delete Vpc#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#ipv4_cidr_mask Vpc#ipv4_cidr_mask}
  */
  readonly ipv4CidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}
  */
  readonly ipv4IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#ipv6_isp Vpc#ipv6_isp}
  */
  readonly ipv6Isp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#is_default Vpc#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#name Vpc#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#resource_group_id Vpc#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#secondary_cidr_blocks Vpc#secondary_cidr_blocks}
  */
  readonly secondaryCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#secondary_cidr_mask Vpc#secondary_cidr_mask}
  */
  readonly secondaryCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#system_route_table_description Vpc#system_route_table_description}
  */
  readonly systemRouteTableDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#system_route_table_name Vpc#system_route_table_name}
  */
  readonly systemRouteTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#system_route_table_route_propagation_enable Vpc#system_route_table_route_propagation_enable}
  */
  readonly systemRouteTableRoutePropagationEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#tags Vpc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#user_cidrs Vpc#user_cidrs}
  */
  readonly userCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#vpc_name Vpc#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#timeouts Vpc#timeouts}
  */
  readonly timeouts?: VpcTimeouts;
}
export interface VpcIpv6CidrBlocks {
}

export function vpcIpv6CidrBlocksToTerraform(struct?: VpcIpv6CidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcIpv6CidrBlocksToHclTerraform(struct?: VpcIpv6CidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcIpv6CidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcIpv6CidrBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpv6CidrBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // ipv6_isp - computed: true, optional: false, required: false
  public get ipv6Isp() {
    return this.getStringAttribute('ipv6_isp');
  }
}

export class VpcIpv6CidrBlocksList extends cdktf.ComplexList {

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
  public get(index: number): VpcIpv6CidrBlocksOutputReference {
    return new VpcIpv6CidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#create Vpc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#delete Vpc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#update Vpc#update}
  */
  readonly update?: string;
}

export function vpcTimeoutsToTerraform(struct?: VpcTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpcTimeoutsToHclTerraform(struct?: VpcTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc alicloud_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpc to import
  * @param importFromId The id of the existing Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc alicloud_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._classicLinkEnabled = config.classicLinkEnabled;
    this._description = config.description;
    this._dnsHostnameStatus = config.dnsHostnameStatus;
    this._dryRun = config.dryRun;
    this._enableIpv6 = config.enableIpv6;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._ipv4CidrMask = config.ipv4CidrMask;
    this._ipv4IpamPoolId = config.ipv4IpamPoolId;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._ipv6Isp = config.ipv6Isp;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
    this._secondaryCidrBlocks = config.secondaryCidrBlocks;
    this._secondaryCidrMask = config.secondaryCidrMask;
    this._systemRouteTableDescription = config.systemRouteTableDescription;
    this._systemRouteTableName = config.systemRouteTableName;
    this._systemRouteTableRoutePropagationEnable = config.systemRouteTableRoutePropagationEnable;
    this._tags = config.tags;
    this._userCidrs = config.userCidrs;
    this._vpcName = config.vpcName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // classic_link_enabled - computed: false, optional: true, required: false
  private _classicLinkEnabled?: boolean | cdktf.IResolvable; 
  public get classicLinkEnabled() {
    return this.getBooleanAttribute('classic_link_enabled');
  }
  public set classicLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._classicLinkEnabled = value;
  }
  public resetClassicLinkEnabled() {
    this._classicLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicLinkEnabledInput() {
    return this._classicLinkEnabled;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_hostname_status - computed: true, optional: true, required: false
  private _dnsHostnameStatus?: string; 
  public get dnsHostnameStatus() {
    return this.getStringAttribute('dns_hostname_status');
  }
  public set dnsHostnameStatus(value: string) {
    this._dnsHostnameStatus = value;
  }
  public resetDnsHostnameStatus() {
    this._dnsHostnameStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostnameStatusInput() {
    return this._dnsHostnameStatus;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // ipv4_cidr_mask - computed: false, optional: true, required: false
  private _ipv4CidrMask?: number; 
  public get ipv4CidrMask() {
    return this.getNumberAttribute('ipv4_cidr_mask');
  }
  public set ipv4CidrMask(value: number) {
    this._ipv4CidrMask = value;
  }
  public resetIpv4CidrMask() {
    this._ipv4CidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrMaskInput() {
    return this._ipv4CidrMask;
  }

  // ipv4_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv4IpamPoolId?: string; 
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv4_ipam_pool_id');
  }
  public set ipv4IpamPoolId(value: string) {
    this._ipv4IpamPoolId = value;
  }
  public resetIpv4IpamPoolId() {
    this._ipv4IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpamPoolIdInput() {
    return this._ipv4IpamPoolId;
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_cidr_blocks - computed: true, optional: false, required: false
  private _ipv6CidrBlocks = new VpcIpv6CidrBlocksList(this, "ipv6_cidr_blocks", false);
  public get ipv6CidrBlocks() {
    return this._ipv6CidrBlocks;
  }

  // ipv6_isp - computed: false, optional: true, required: false
  private _ipv6Isp?: string; 
  public get ipv6Isp() {
    return this.getStringAttribute('ipv6_isp');
  }
  public set ipv6Isp(value: string) {
    this._ipv6Isp = value;
  }
  public resetIpv6Isp() {
    this._ipv6Isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IspInput() {
    return this._ipv6Isp;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_table_id - computed: true, optional: false, required: false
  public get routerTableId() {
    return this.getStringAttribute('router_table_id');
  }

  // secondary_cidr_blocks - computed: true, optional: true, required: false
  private _secondaryCidrBlocks?: string[]; 
  public get secondaryCidrBlocks() {
    return this.getListAttribute('secondary_cidr_blocks');
  }
  public set secondaryCidrBlocks(value: string[]) {
    this._secondaryCidrBlocks = value;
  }
  public resetSecondaryCidrBlocks() {
    this._secondaryCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCidrBlocksInput() {
    return this._secondaryCidrBlocks;
  }

  // secondary_cidr_mask - computed: false, optional: true, required: false
  private _secondaryCidrMask?: number; 
  public get secondaryCidrMask() {
    return this.getNumberAttribute('secondary_cidr_mask');
  }
  public set secondaryCidrMask(value: number) {
    this._secondaryCidrMask = value;
  }
  public resetSecondaryCidrMask() {
    this._secondaryCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCidrMaskInput() {
    return this._secondaryCidrMask;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_route_table_description - computed: false, optional: true, required: false
  private _systemRouteTableDescription?: string; 
  public get systemRouteTableDescription() {
    return this.getStringAttribute('system_route_table_description');
  }
  public set systemRouteTableDescription(value: string) {
    this._systemRouteTableDescription = value;
  }
  public resetSystemRouteTableDescription() {
    this._systemRouteTableDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRouteTableDescriptionInput() {
    return this._systemRouteTableDescription;
  }

  // system_route_table_name - computed: false, optional: true, required: false
  private _systemRouteTableName?: string; 
  public get systemRouteTableName() {
    return this.getStringAttribute('system_route_table_name');
  }
  public set systemRouteTableName(value: string) {
    this._systemRouteTableName = value;
  }
  public resetSystemRouteTableName() {
    this._systemRouteTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRouteTableNameInput() {
    return this._systemRouteTableName;
  }

  // system_route_table_route_propagation_enable - computed: true, optional: true, required: false
  private _systemRouteTableRoutePropagationEnable?: boolean | cdktf.IResolvable; 
  public get systemRouteTableRoutePropagationEnable() {
    return this.getBooleanAttribute('system_route_table_route_propagation_enable');
  }
  public set systemRouteTableRoutePropagationEnable(value: boolean | cdktf.IResolvable) {
    this._systemRouteTableRoutePropagationEnable = value;
  }
  public resetSystemRouteTableRoutePropagationEnable() {
    this._systemRouteTableRoutePropagationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRouteTableRoutePropagationEnableInput() {
    return this._systemRouteTableRoutePropagationEnable;
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

  // user_cidrs - computed: true, optional: true, required: false
  private _userCidrs?: string[]; 
  public get userCidrs() {
    return this.getListAttribute('user_cidrs');
  }
  public set userCidrs(value: string[]) {
    this._userCidrs = value;
  }
  public resetUserCidrs() {
    this._userCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCidrsInput() {
    return this._userCidrs;
  }

  // vpc_name - computed: true, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      classic_link_enabled: cdktf.booleanToTerraform(this._classicLinkEnabled),
      description: cdktf.stringToTerraform(this._description),
      dns_hostname_status: cdktf.stringToTerraform(this._dnsHostnameStatus),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      ipv4_cidr_mask: cdktf.numberToTerraform(this._ipv4CidrMask),
      ipv4_ipam_pool_id: cdktf.stringToTerraform(this._ipv4IpamPoolId),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6_isp: cdktf.stringToTerraform(this._ipv6Isp),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      secondary_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryCidrBlocks),
      secondary_cidr_mask: cdktf.numberToTerraform(this._secondaryCidrMask),
      system_route_table_description: cdktf.stringToTerraform(this._systemRouteTableDescription),
      system_route_table_name: cdktf.stringToTerraform(this._systemRouteTableName),
      system_route_table_route_propagation_enable: cdktf.booleanToTerraform(this._systemRouteTableRoutePropagationEnable),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userCidrs),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      timeouts: vpcTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      classic_link_enabled: {
        value: cdktf.booleanToHclTerraform(this._classicLinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_hostname_status: {
        value: cdktf.stringToHclTerraform(this._dnsHostnameStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._ipv4CidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipv4IpamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_cidr_block: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_isp: {
        value: cdktf.stringToHclTerraform(this._ipv6Isp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      secondary_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryCidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._secondaryCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_route_table_description: {
        value: cdktf.stringToHclTerraform(this._systemRouteTableDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_route_table_name: {
        value: cdktf.stringToHclTerraform(this._systemRouteTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_route_table_route_propagation_enable: {
        value: cdktf.booleanToHclTerraform(this._systemRouteTableRoutePropagationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
