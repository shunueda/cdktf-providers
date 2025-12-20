// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsZoneVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#id PrivateDnsZoneVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PrivateZone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#zone_id PrivateDnsZoneVpcAttachment#zone_id}
  */
  readonly zoneId: string;
  /**
  * account_vpc_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#account_vpc_set PrivateDnsZoneVpcAttachment#account_vpc_set}
  */
  readonly accountVpcSet?: PrivateDnsZoneVpcAttachmentAccountVpcSet;
  /**
  * vpc_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#vpc_set PrivateDnsZoneVpcAttachment#vpc_set}
  */
  readonly vpcSet?: PrivateDnsZoneVpcAttachmentVpcSet;
}
export interface PrivateDnsZoneVpcAttachmentAccountVpcSet {
  /**
  * Vpc region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#region PrivateDnsZoneVpcAttachment#region}
  */
  readonly region: string;
  /**
  * Vpc owner uin. To grant role authorization to this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#uin PrivateDnsZoneVpcAttachment#uin}
  */
  readonly uin: string;
  /**
  * Uniq Vpc Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#uniq_vpc_id PrivateDnsZoneVpcAttachment#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
}

export function privateDnsZoneVpcAttachmentAccountVpcSetToTerraform(struct?: PrivateDnsZoneVpcAttachmentAccountVpcSetOutputReference | PrivateDnsZoneVpcAttachmentAccountVpcSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    uin: cdktf.stringToTerraform(struct!.uin),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
  }
}


export function privateDnsZoneVpcAttachmentAccountVpcSetToHclTerraform(struct?: PrivateDnsZoneVpcAttachmentAccountVpcSetOutputReference | PrivateDnsZoneVpcAttachmentAccountVpcSet): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsZoneVpcAttachmentAccountVpcSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateDnsZoneVpcAttachmentAccountVpcSet | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsZoneVpcAttachmentAccountVpcSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._uin = undefined;
      this._uniqVpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._uin = value.uin;
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
}
export interface PrivateDnsZoneVpcAttachmentVpcSet {
  /**
  * Vpc region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#region PrivateDnsZoneVpcAttachment#region}
  */
  readonly region: string;
  /**
  * Uniq Vpc Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#uniq_vpc_id PrivateDnsZoneVpcAttachment#uniq_vpc_id}
  */
  readonly uniqVpcId: string;
}

export function privateDnsZoneVpcAttachmentVpcSetToTerraform(struct?: PrivateDnsZoneVpcAttachmentVpcSetOutputReference | PrivateDnsZoneVpcAttachmentVpcSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
  }
}


export function privateDnsZoneVpcAttachmentVpcSetToHclTerraform(struct?: PrivateDnsZoneVpcAttachmentVpcSetOutputReference | PrivateDnsZoneVpcAttachmentVpcSet): any {
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

export class PrivateDnsZoneVpcAttachmentVpcSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateDnsZoneVpcAttachmentVpcSet | undefined {
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

  public set internalValue(value: PrivateDnsZoneVpcAttachmentVpcSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._uniqVpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment tencentcloud_private_dns_zone_vpc_attachment}
*/
export class PrivateDnsZoneVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_zone_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsZoneVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsZoneVpcAttachment to import
  * @param importFromId The id of the existing PrivateDnsZoneVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsZoneVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_zone_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_zone_vpc_attachment tencentcloud_private_dns_zone_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsZoneVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsZoneVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_zone_vpc_attachment',
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
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._accountVpcSet.internalValue = config.accountVpcSet;
    this._vpcSet.internalValue = config.vpcSet;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // account_vpc_set - computed: false, optional: true, required: false
  private _accountVpcSet = new PrivateDnsZoneVpcAttachmentAccountVpcSetOutputReference(this, "account_vpc_set");
  public get accountVpcSet() {
    return this._accountVpcSet;
  }
  public putAccountVpcSet(value: PrivateDnsZoneVpcAttachmentAccountVpcSet) {
    this._accountVpcSet.internalValue = value;
  }
  public resetAccountVpcSet() {
    this._accountVpcSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountVpcSetInput() {
    return this._accountVpcSet.internalValue;
  }

  // vpc_set - computed: false, optional: true, required: false
  private _vpcSet = new PrivateDnsZoneVpcAttachmentVpcSetOutputReference(this, "vpc_set");
  public get vpcSet() {
    return this._vpcSet;
  }
  public putVpcSet(value: PrivateDnsZoneVpcAttachmentVpcSet) {
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
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      account_vpc_set: privateDnsZoneVpcAttachmentAccountVpcSetToTerraform(this._accountVpcSet.internalValue),
      vpc_set: privateDnsZoneVpcAttachmentVpcSetToTerraform(this._vpcSet.internalValue),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_vpc_set: {
        value: privateDnsZoneVpcAttachmentAccountVpcSetToHclTerraform(this._accountVpcSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsZoneVpcAttachmentAccountVpcSetList",
      },
      vpc_set: {
        value: privateDnsZoneVpcAttachmentVpcSetToHclTerraform(this._vpcSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsZoneVpcAttachmentVpcSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
