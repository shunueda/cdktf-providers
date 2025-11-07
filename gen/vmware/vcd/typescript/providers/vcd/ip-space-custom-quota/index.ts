// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSpaceCustomQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#id IpSpaceCustomQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP range quota. '-1' - unlimited, '0' - no quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#ip_range_quota IpSpaceCustomQuota#ip_range_quota}
  */
  readonly ipRangeQuota?: string;
  /**
  * ID of IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#ip_space_id IpSpaceCustomQuota#ip_space_id}
  */
  readonly ipSpaceId: string;
  /**
  * Organization ID for setting custom quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#org_id IpSpaceCustomQuota#org_id}
  */
  readonly orgId: string;
  /**
  * ip_prefix_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#ip_prefix_quota IpSpaceCustomQuota#ip_prefix_quota}
  */
  readonly ipPrefixQuota?: IpSpaceCustomQuotaIpPrefixQuota[] | cdktf.IResolvable;
}
export interface IpSpaceCustomQuotaIpPrefixQuota {
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#prefix_length IpSpaceCustomQuota#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * IP Prefix Quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#quota IpSpaceCustomQuota#quota}
  */
  readonly quota: string;
}

export function ipSpaceCustomQuotaIpPrefixQuotaToTerraform(struct?: IpSpaceCustomQuotaIpPrefixQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    quota: cdktf.stringToTerraform(struct!.quota),
  }
}


export function ipSpaceCustomQuotaIpPrefixQuotaToHclTerraform(struct?: IpSpaceCustomQuotaIpPrefixQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.stringToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpSpaceCustomQuotaIpPrefixQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpSpaceCustomQuotaIpPrefixQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSpaceCustomQuotaIpPrefixQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._quota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._quota = value.quota;
    }
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // quota - computed: false, optional: false, required: true
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }
}

export class IpSpaceCustomQuotaIpPrefixQuotaList extends cdktf.ComplexList {
  public internalValue? : IpSpaceCustomQuotaIpPrefixQuota[] | cdktf.IResolvable

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
  public get(index: number): IpSpaceCustomQuotaIpPrefixQuotaOutputReference {
    return new IpSpaceCustomQuotaIpPrefixQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota vcd_ip_space_custom_quota}
*/
export class IpSpaceCustomQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space_custom_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSpaceCustomQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSpaceCustomQuota to import
  * @param importFromId The id of the existing IpSpaceCustomQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSpaceCustomQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space_custom_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_custom_quota vcd_ip_space_custom_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSpaceCustomQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: IpSpaceCustomQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space_custom_quota',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._ipRangeQuota = config.ipRangeQuota;
    this._ipSpaceId = config.ipSpaceId;
    this._orgId = config.orgId;
    this._ipPrefixQuota.internalValue = config.ipPrefixQuota;
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

  // ip_range_quota - computed: false, optional: true, required: false
  private _ipRangeQuota?: string; 
  public get ipRangeQuota() {
    return this.getStringAttribute('ip_range_quota');
  }
  public set ipRangeQuota(value: string) {
    this._ipRangeQuota = value;
  }
  public resetIpRangeQuota() {
    this._ipRangeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeQuotaInput() {
    return this._ipRangeQuota;
  }

  // ip_space_id - computed: false, optional: false, required: true
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdInput() {
    return this._ipSpaceId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // ip_prefix_quota - computed: false, optional: true, required: false
  private _ipPrefixQuota = new IpSpaceCustomQuotaIpPrefixQuotaList(this, "ip_prefix_quota", true);
  public get ipPrefixQuota() {
    return this._ipPrefixQuota;
  }
  public putIpPrefixQuota(value: IpSpaceCustomQuotaIpPrefixQuota[] | cdktf.IResolvable) {
    this._ipPrefixQuota.internalValue = value;
  }
  public resetIpPrefixQuota() {
    this._ipPrefixQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixQuotaInput() {
    return this._ipPrefixQuota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_range_quota: cdktf.stringToTerraform(this._ipRangeQuota),
      ip_space_id: cdktf.stringToTerraform(this._ipSpaceId),
      org_id: cdktf.stringToTerraform(this._orgId),
      ip_prefix_quota: cdktf.listMapper(ipSpaceCustomQuotaIpPrefixQuotaToTerraform, true)(this._ipPrefixQuota.internalValue),
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
      ip_range_quota: {
        value: cdktf.stringToHclTerraform(this._ipRangeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_space_id: {
        value: cdktf.stringToHclTerraform(this._ipSpaceId),
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
      ip_prefix_quota: {
        value: cdktf.listMapperHcl(ipSpaceCustomQuotaIpPrefixQuotaToHclTerraform, true)(this._ipPrefixQuota.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpSpaceCustomQuotaIpPrefixQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
