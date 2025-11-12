// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag exposing whether default firewall rule creation should be enabled (VCD 10.5.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#default_firewall_rule_creation_enabled IpSpace#default_firewall_rule_creation_enabled}
  */
  readonly defaultFirewallRuleCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag whether NO SNAT rule creation should be enabled (VCD 10.5.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#default_no_snat_rule_creation_enabled IpSpace#default_no_snat_rule_creation_enabled}
  */
  readonly defaultNoSnatRuleCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag whether SNAT rule creation should be enabled (VCD 10.5.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#default_snat_rule_creation_enabled IpSpace#default_snat_rule_creation_enabled}
  */
  readonly defaultSnatRuleCreationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Description of IP space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#description IpSpace#description}
  */
  readonly description?: string;
  /**
  * External scope in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#external_scope IpSpace#external_scope}
  */
  readonly externalScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#id IpSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of internal scope IPs in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#internal_scope IpSpace#internal_scope}
  */
  readonly internalScope: string[];
  /**
  * IP ranges quota. '-1' - unlimited, '0' - no quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#ip_range_quota IpSpace#ip_range_quota}
  */
  readonly ipRangeQuota?: string;
  /**
  * Name of IP space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#name IpSpace#name}
  */
  readonly name: string;
  /**
  * Org ID for 'SHARED' IP spaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#org_id IpSpace#org_id}
  */
  readonly orgId?: string;
  /**
  * Flag whether route advertisement should be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#route_advertisement_enabled IpSpace#route_advertisement_enabled}
  */
  readonly routeAdvertisementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Type of IP space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#type IpSpace#type}
  */
  readonly type: string;
  /**
  * ip_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#ip_prefix IpSpace#ip_prefix}
  */
  readonly ipPrefix?: IpSpaceIpPrefix[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#ip_range IpSpace#ip_range}
  */
  readonly ipRange?: IpSpaceIpRange[] | cdktf.IResolvable;
}
export interface IpSpaceIpPrefixPrefix {
  /**
  * First IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#first_ip IpSpace#first_ip}
  */
  readonly firstIp: string;
  /**
  * Number of prefixes to define
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#prefix_count IpSpace#prefix_count}
  */
  readonly prefixCount: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#prefix_length IpSpace#prefix_length}
  */
  readonly prefixLength: string;
}

export function ipSpaceIpPrefixPrefixToTerraform(struct?: IpSpaceIpPrefixPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_ip: cdktf.stringToTerraform(struct!.firstIp),
    prefix_count: cdktf.stringToTerraform(struct!.prefixCount),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
  }
}


export function ipSpaceIpPrefixPrefixToHclTerraform(struct?: IpSpaceIpPrefixPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_ip: {
      value: cdktf.stringToHclTerraform(struct!.firstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_count: {
      value: cdktf.stringToHclTerraform(struct!.prefixCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpSpaceIpPrefixPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpSpaceIpPrefixPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIp = this._firstIp;
    }
    if (this._prefixCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixCount = this._prefixCount;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSpaceIpPrefixPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstIp = undefined;
      this._prefixCount = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstIp = value.firstIp;
      this._prefixCount = value.prefixCount;
      this._prefixLength = value.prefixLength;
    }
  }

  // first_ip - computed: false, optional: false, required: true
  private _firstIp?: string; 
  public get firstIp() {
    return this.getStringAttribute('first_ip');
  }
  public set firstIp(value: string) {
    this._firstIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpInput() {
    return this._firstIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_count - computed: false, optional: false, required: true
  private _prefixCount?: string; 
  public get prefixCount() {
    return this.getStringAttribute('prefix_count');
  }
  public set prefixCount(value: string) {
    this._prefixCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixCountInput() {
    return this._prefixCount;
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
}

export class IpSpaceIpPrefixPrefixList extends cdktf.ComplexList {
  public internalValue? : IpSpaceIpPrefixPrefix[] | cdktf.IResolvable

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
  public get(index: number): IpSpaceIpPrefixPrefixOutputReference {
    return new IpSpaceIpPrefixPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpSpaceIpPrefix {
  /**
  * Floating IP quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#default_quota IpSpace#default_quota}
  */
  readonly defaultQuota?: string;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#prefix IpSpace#prefix}
  */
  readonly prefix: IpSpaceIpPrefixPrefix[] | cdktf.IResolvable;
}

export function ipSpaceIpPrefixToTerraform(struct?: IpSpaceIpPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_quota: cdktf.stringToTerraform(struct!.defaultQuota),
    prefix: cdktf.listMapper(ipSpaceIpPrefixPrefixToTerraform, true)(struct!.prefix),
  }
}


export function ipSpaceIpPrefixToHclTerraform(struct?: IpSpaceIpPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_quota: {
      value: cdktf.stringToHclTerraform(struct!.defaultQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.listMapperHcl(ipSpaceIpPrefixPrefixToHclTerraform, true)(struct!.prefix),
      isBlock: true,
      type: "set",
      storageClassType: "IpSpaceIpPrefixPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpSpaceIpPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpSpaceIpPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultQuota = this._defaultQuota;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSpaceIpPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultQuota = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultQuota = value.defaultQuota;
      this._prefix.internalValue = value.prefix;
    }
  }

  // default_quota - computed: false, optional: true, required: false
  private _defaultQuota?: string; 
  public get defaultQuota() {
    return this.getStringAttribute('default_quota');
  }
  public set defaultQuota(value: string) {
    this._defaultQuota = value;
  }
  public resetDefaultQuota() {
    this._defaultQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaInput() {
    return this._defaultQuota;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix = new IpSpaceIpPrefixPrefixList(this, "prefix", true);
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: IpSpaceIpPrefixPrefix[] | cdktf.IResolvable) {
    this._prefix.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class IpSpaceIpPrefixList extends cdktf.ComplexList {
  public internalValue? : IpSpaceIpPrefix[] | cdktf.IResolvable

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
  public get(index: number): IpSpaceIpPrefixOutputReference {
    return new IpSpaceIpPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpSpaceIpRange {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#end_address IpSpace#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#start_address IpSpace#start_address}
  */
  readonly startAddress: string;
}

export function ipSpaceIpRangeToTerraform(struct?: IpSpaceIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function ipSpaceIpRangeToHclTerraform(struct?: IpSpaceIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpSpaceIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpSpaceIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpSpaceIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class IpSpaceIpRangeList extends cdktf.ComplexList {
  public internalValue? : IpSpaceIpRange[] | cdktf.IResolvable

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
  public get(index: number): IpSpaceIpRangeOutputReference {
    return new IpSpaceIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space vcd_ip_space}
*/
export class IpSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSpace to import
  * @param importFromId The id of the existing IpSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space vcd_ip_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: IpSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFirewallRuleCreationEnabled = config.defaultFirewallRuleCreationEnabled;
    this._defaultNoSnatRuleCreationEnabled = config.defaultNoSnatRuleCreationEnabled;
    this._defaultSnatRuleCreationEnabled = config.defaultSnatRuleCreationEnabled;
    this._description = config.description;
    this._externalScope = config.externalScope;
    this._id = config.id;
    this._internalScope = config.internalScope;
    this._ipRangeQuota = config.ipRangeQuota;
    this._name = config.name;
    this._orgId = config.orgId;
    this._routeAdvertisementEnabled = config.routeAdvertisementEnabled;
    this._type = config.type;
    this._ipPrefix.internalValue = config.ipPrefix;
    this._ipRange.internalValue = config.ipRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_firewall_rule_creation_enabled - computed: false, optional: true, required: false
  private _defaultFirewallRuleCreationEnabled?: boolean | cdktf.IResolvable; 
  public get defaultFirewallRuleCreationEnabled() {
    return this.getBooleanAttribute('default_firewall_rule_creation_enabled');
  }
  public set defaultFirewallRuleCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultFirewallRuleCreationEnabled = value;
  }
  public resetDefaultFirewallRuleCreationEnabled() {
    this._defaultFirewallRuleCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFirewallRuleCreationEnabledInput() {
    return this._defaultFirewallRuleCreationEnabled;
  }

  // default_no_snat_rule_creation_enabled - computed: false, optional: true, required: false
  private _defaultNoSnatRuleCreationEnabled?: boolean | cdktf.IResolvable; 
  public get defaultNoSnatRuleCreationEnabled() {
    return this.getBooleanAttribute('default_no_snat_rule_creation_enabled');
  }
  public set defaultNoSnatRuleCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultNoSnatRuleCreationEnabled = value;
  }
  public resetDefaultNoSnatRuleCreationEnabled() {
    this._defaultNoSnatRuleCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNoSnatRuleCreationEnabledInput() {
    return this._defaultNoSnatRuleCreationEnabled;
  }

  // default_snat_rule_creation_enabled - computed: false, optional: true, required: false
  private _defaultSnatRuleCreationEnabled?: boolean | cdktf.IResolvable; 
  public get defaultSnatRuleCreationEnabled() {
    return this.getBooleanAttribute('default_snat_rule_creation_enabled');
  }
  public set defaultSnatRuleCreationEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultSnatRuleCreationEnabled = value;
  }
  public resetDefaultSnatRuleCreationEnabled() {
    this._defaultSnatRuleCreationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnatRuleCreationEnabledInput() {
    return this._defaultSnatRuleCreationEnabled;
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

  // external_scope - computed: false, optional: true, required: false
  private _externalScope?: string; 
  public get externalScope() {
    return this.getStringAttribute('external_scope');
  }
  public set externalScope(value: string) {
    this._externalScope = value;
  }
  public resetExternalScope() {
    this._externalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalScopeInput() {
    return this._externalScope;
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

  // internal_scope - computed: false, optional: false, required: true
  private _internalScope?: string[]; 
  public get internalScope() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_scope'));
  }
  public set internalScope(value: string[]) {
    this._internalScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalScopeInput() {
    return this._internalScope;
  }

  // ip_range_quota - computed: true, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // route_advertisement_enabled - computed: false, optional: true, required: false
  private _routeAdvertisementEnabled?: boolean | cdktf.IResolvable; 
  public get routeAdvertisementEnabled() {
    return this.getBooleanAttribute('route_advertisement_enabled');
  }
  public set routeAdvertisementEnabled(value: boolean | cdktf.IResolvable) {
    this._routeAdvertisementEnabled = value;
  }
  public resetRouteAdvertisementEnabled() {
    this._routeAdvertisementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementEnabledInput() {
    return this._routeAdvertisementEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix = new IpSpaceIpPrefixList(this, "ip_prefix", true);
  public get ipPrefix() {
    return this._ipPrefix;
  }
  public putIpPrefix(value: IpSpaceIpPrefix[] | cdktf.IResolvable) {
    this._ipPrefix.internalValue = value;
  }
  public resetIpPrefix() {
    this._ipPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new IpSpaceIpRangeList(this, "ip_range", true);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: IpSpaceIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_firewall_rule_creation_enabled: cdktf.booleanToTerraform(this._defaultFirewallRuleCreationEnabled),
      default_no_snat_rule_creation_enabled: cdktf.booleanToTerraform(this._defaultNoSnatRuleCreationEnabled),
      default_snat_rule_creation_enabled: cdktf.booleanToTerraform(this._defaultSnatRuleCreationEnabled),
      description: cdktf.stringToTerraform(this._description),
      external_scope: cdktf.stringToTerraform(this._externalScope),
      id: cdktf.stringToTerraform(this._id),
      internal_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalScope),
      ip_range_quota: cdktf.stringToTerraform(this._ipRangeQuota),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      route_advertisement_enabled: cdktf.booleanToTerraform(this._routeAdvertisementEnabled),
      type: cdktf.stringToTerraform(this._type),
      ip_prefix: cdktf.listMapper(ipSpaceIpPrefixToTerraform, true)(this._ipPrefix.internalValue),
      ip_range: cdktf.listMapper(ipSpaceIpRangeToTerraform, true)(this._ipRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_firewall_rule_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultFirewallRuleCreationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_no_snat_rule_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultNoSnatRuleCreationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_snat_rule_creation_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultSnatRuleCreationEnabled),
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
      external_scope: {
        value: cdktf.stringToHclTerraform(this._externalScope),
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
      internal_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_range_quota: {
        value: cdktf.stringToHclTerraform(this._ipRangeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      route_advertisement_enabled: {
        value: cdktf.booleanToHclTerraform(this._routeAdvertisementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_prefix: {
        value: cdktf.listMapperHcl(ipSpaceIpPrefixToHclTerraform, true)(this._ipPrefix.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpSpaceIpPrefixList",
      },
      ip_range: {
        value: cdktf.listMapperHcl(ipSpaceIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpSpaceIpRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
