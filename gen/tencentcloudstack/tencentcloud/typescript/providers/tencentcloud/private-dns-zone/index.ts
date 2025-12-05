// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * CNAME acceleration: ENABLED, DISABLED, Default value is ENABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#cname_speedup_status PrivateDnsZone#cname_speedup_status}
  */
  readonly cnameSpeedupStatus?: string;
  /**
  * Whether to enable subdomain recursive DNS. Valid values: ENABLED, DISABLED. Default value: DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#dns_forward_status PrivateDnsZone#dns_forward_status}
  */
  readonly dnsForwardStatus?: string;
  /**
  * Domain name, which must be in the format of standard TLD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#domain PrivateDnsZone#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#id PrivateDnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#remark PrivateDnsZone#remark}
  */
  readonly remark?: string;
  /**
  * Tags of the private dns zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * account_vpc_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#account_vpc_set PrivateDnsZone#account_vpc_set}
  */
  readonly accountVpcSet?: PrivateDnsZoneAccountVpcSet[] | cdktf.IResolvable;
  /**
  * tag_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#tag_set PrivateDnsZone#tag_set}
  */
  readonly tagSet?: PrivateDnsZoneTagSet[] | cdktf.IResolvable;
  /**
  * vpc_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#vpc_set PrivateDnsZone#vpc_set}
  */
  readonly vpcSet?: PrivateDnsZoneVpcSet[] | cdktf.IResolvable;
}
export interface PrivateDnsZoneAccountVpcSet {
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#region PrivateDnsZone#region}
  */
  readonly region: string;
  /**
  * UIN of the VPC account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#uin PrivateDnsZone#uin}
  */
  readonly uin: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#uniq_vpc_id PrivateDnsZone#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
  /**
  * VPC NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#vpc_name PrivateDnsZone#vpc_name}
  */
  readonly vpcName: string;
}

export function privateDnsZoneAccountVpcSetToTerraform(struct?: PrivateDnsZoneAccountVpcSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    uin: cdktf.stringToTerraform(struct!.uin),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    vpc_name: cdktf.stringToTerraform(struct!.vpcName),
  }
}


export function privateDnsZoneAccountVpcSetToHclTerraform(struct?: PrivateDnsZoneAccountVpcSet | cdktf.IResolvable): any {
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
    uin: {
      value: cdktf.stringToHclTerraform(struct!.uin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsZoneAccountVpcSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateDnsZoneAccountVpcSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._uin !== undefined) {
      hasAnyValues = true;
      internalValueResult.uin = this._uin;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._vpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcName = this._vpcName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneAccountVpcSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._uin = undefined;
      this._uniqVpcId = undefined;
      this._vpcName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._uin = value.uin;
      this._uniqVpcId = value.uniqVpcId;
      this._vpcName = value.vpcName;
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

  // uin - computed: false, optional: false, required: true
  private _uin?: string; 
  public get uin() {
    return this.getStringAttribute('uin');
  }
  public set uin(value: string) {
    this._uin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uinInput() {
    return this._uin;
  }

  // uniq_vpc_id - computed: false, optional: false, required: true
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // vpc_name - computed: false, optional: false, required: true
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }
}

export class PrivateDnsZoneAccountVpcSetList extends cdktf.ComplexList {
  public internalValue? : PrivateDnsZoneAccountVpcSet[] | cdktf.IResolvable

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
  public get(index: number): PrivateDnsZoneAccountVpcSetOutputReference {
    return new PrivateDnsZoneAccountVpcSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateDnsZoneTagSet {
  /**
  * Key of Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#tag_key PrivateDnsZone#tag_key}
  */
  readonly tagKey: string;
  /**
  * Value of Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#tag_value PrivateDnsZone#tag_value}
  */
  readonly tagValue: string;
}

export function privateDnsZoneTagSetToTerraform(struct?: PrivateDnsZoneTagSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function privateDnsZoneTagSetToHclTerraform(struct?: PrivateDnsZoneTagSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsZoneTagSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateDnsZoneTagSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneTagSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class PrivateDnsZoneTagSetList extends cdktf.ComplexList {
  public internalValue? : PrivateDnsZoneTagSet[] | cdktf.IResolvable

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
  public get(index: number): PrivateDnsZoneTagSetOutputReference {
    return new PrivateDnsZoneTagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateDnsZoneVpcSet {
  /**
  * VPC REGION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#region PrivateDnsZone#region}
  */
  readonly region: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#uniq_vpc_id PrivateDnsZone#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
}

export function privateDnsZoneVpcSetToTerraform(struct?: PrivateDnsZoneVpcSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
  }
}


export function privateDnsZoneVpcSetToHclTerraform(struct?: PrivateDnsZoneVpcSet | cdktf.IResolvable): any {
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
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsZoneVpcSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateDnsZoneVpcSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneVpcSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._uniqVpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._uniqVpcId = value.uniqVpcId;
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

  // uniq_vpc_id - computed: false, optional: false, required: true
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }
}

export class PrivateDnsZoneVpcSetList extends cdktf.ComplexList {
  public internalValue? : PrivateDnsZoneVpcSet[] | cdktf.IResolvable

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
  public get(index: number): PrivateDnsZoneVpcSetOutputReference {
    return new PrivateDnsZoneVpcSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone tencentcloud_private_dns_zone}
*/
export class PrivateDnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsZone to import
  * @param importFromId The id of the existing PrivateDnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/private_dns_zone tencentcloud_private_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cnameSpeedupStatus = config.cnameSpeedupStatus;
    this._dnsForwardStatus = config.dnsForwardStatus;
    this._domain = config.domain;
    this._id = config.id;
    this._remark = config.remark;
    this._tags = config.tags;
    this._accountVpcSet.internalValue = config.accountVpcSet;
    this._tagSet.internalValue = config.tagSet;
    this._vpcSet.internalValue = config.vpcSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_speedup_status - computed: false, optional: true, required: false
  private _cnameSpeedupStatus?: string; 
  public get cnameSpeedupStatus() {
    return this.getStringAttribute('cname_speedup_status');
  }
  public set cnameSpeedupStatus(value: string) {
    this._cnameSpeedupStatus = value;
  }
  public resetCnameSpeedupStatus() {
    this._cnameSpeedupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameSpeedupStatusInput() {
    return this._cnameSpeedupStatus;
  }

  // dns_forward_status - computed: false, optional: true, required: false
  private _dnsForwardStatus?: string; 
  public get dnsForwardStatus() {
    return this.getStringAttribute('dns_forward_status');
  }
  public set dnsForwardStatus(value: string) {
    this._dnsForwardStatus = value;
  }
  public resetDnsForwardStatus() {
    this._dnsForwardStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwardStatusInput() {
    return this._dnsForwardStatus;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
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

  // account_vpc_set - computed: false, optional: true, required: false
  private _accountVpcSet = new PrivateDnsZoneAccountVpcSetList(this, "account_vpc_set", false);
  public get accountVpcSet() {
    return this._accountVpcSet;
  }
  public putAccountVpcSet(value: PrivateDnsZoneAccountVpcSet[] | cdktf.IResolvable) {
    this._accountVpcSet.internalValue = value;
  }
  public resetAccountVpcSet() {
    this._accountVpcSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountVpcSetInput() {
    return this._accountVpcSet.internalValue;
  }

  // tag_set - computed: false, optional: true, required: false
  private _tagSet = new PrivateDnsZoneTagSetList(this, "tag_set", false);
  public get tagSet() {
    return this._tagSet;
  }
  public putTagSet(value: PrivateDnsZoneTagSet[] | cdktf.IResolvable) {
    this._tagSet.internalValue = value;
  }
  public resetTagSet() {
    this._tagSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetInput() {
    return this._tagSet.internalValue;
  }

  // vpc_set - computed: false, optional: true, required: false
  private _vpcSet = new PrivateDnsZoneVpcSetList(this, "vpc_set", false);
  public get vpcSet() {
    return this._vpcSet;
  }
  public putVpcSet(value: PrivateDnsZoneVpcSet[] | cdktf.IResolvable) {
    this._vpcSet.internalValue = value;
  }
  public resetVpcSet() {
    this._vpcSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSetInput() {
    return this._vpcSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cname_speedup_status: cdktf.stringToTerraform(this._cnameSpeedupStatus),
      dns_forward_status: cdktf.stringToTerraform(this._dnsForwardStatus),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      account_vpc_set: cdktf.listMapper(privateDnsZoneAccountVpcSetToTerraform, true)(this._accountVpcSet.internalValue),
      tag_set: cdktf.listMapper(privateDnsZoneTagSetToTerraform, true)(this._tagSet.internalValue),
      vpc_set: cdktf.listMapper(privateDnsZoneVpcSetToTerraform, true)(this._vpcSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cname_speedup_status: {
        value: cdktf.stringToHclTerraform(this._cnameSpeedupStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_forward_status: {
        value: cdktf.stringToHclTerraform(this._dnsForwardStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
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
      account_vpc_set: {
        value: cdktf.listMapperHcl(privateDnsZoneAccountVpcSetToHclTerraform, true)(this._accountVpcSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsZoneAccountVpcSetList",
      },
      tag_set: {
        value: cdktf.listMapperHcl(privateDnsZoneTagSetToHclTerraform, true)(this._tagSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsZoneTagSetList",
      },
      vpc_set: {
        value: cdktf.listMapperHcl(privateDnsZoneVpcSetToHclTerraform, true)(this._vpcSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsZoneVpcSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
