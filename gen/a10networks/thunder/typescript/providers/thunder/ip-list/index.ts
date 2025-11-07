// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#id IpList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the ip list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#name IpList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#user_tag IpList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#uuid IpList#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv4_config IpList#ipv4_config}
  */
  readonly ipv4Config?: IpListIpv4Config[] | cdktf.IResolvable;
  /**
  * ipv6_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_config IpList#ipv6_config}
  */
  readonly ipv6Config?: IpListIpv6Config[] | cdktf.IResolvable;
  /**
  * ipv6_prefix_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_prefix_config IpList#ipv6_prefix_config}
  */
  readonly ipv6PrefixConfig?: IpListIpv6PrefixConfig[] | cdktf.IResolvable;
}
export interface IpListIpv4Config {
  /**
  * IPv4 Range End Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv4_end_addr IpList#ipv4_end_addr}
  */
  readonly ipv4EndAddr?: string;
  /**
  * IPv4 Range Start Address / IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv4_start_addr IpList#ipv4_start_addr}
  */
  readonly ipv4StartAddr?: string;
}

export function ipListIpv4ConfigToTerraform(struct?: IpListIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_end_addr: cdktf.stringToTerraform(struct!.ipv4EndAddr),
    ipv4_start_addr: cdktf.stringToTerraform(struct!.ipv4StartAddr),
  }
}


export function ipListIpv4ConfigToHclTerraform(struct?: IpListIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_end_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4EndAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_start_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4StartAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpListIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpListIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4EndAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4EndAddr = this._ipv4EndAddr;
    }
    if (this._ipv4StartAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4StartAddr = this._ipv4StartAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpListIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4EndAddr = undefined;
      this._ipv4StartAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4EndAddr = value.ipv4EndAddr;
      this._ipv4StartAddr = value.ipv4StartAddr;
    }
  }

  // ipv4_end_addr - computed: false, optional: true, required: false
  private _ipv4EndAddr?: string; 
  public get ipv4EndAddr() {
    return this.getStringAttribute('ipv4_end_addr');
  }
  public set ipv4EndAddr(value: string) {
    this._ipv4EndAddr = value;
  }
  public resetIpv4EndAddr() {
    this._ipv4EndAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndAddrInput() {
    return this._ipv4EndAddr;
  }

  // ipv4_start_addr - computed: false, optional: true, required: false
  private _ipv4StartAddr?: string; 
  public get ipv4StartAddr() {
    return this.getStringAttribute('ipv4_start_addr');
  }
  public set ipv4StartAddr(value: string) {
    this._ipv4StartAddr = value;
  }
  public resetIpv4StartAddr() {
    this._ipv4StartAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartAddrInput() {
    return this._ipv4StartAddr;
  }
}

export class IpListIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : IpListIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): IpListIpv4ConfigOutputReference {
    return new IpListIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpListIpv6Config {
  /**
  * IPv6 Range End Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_end_addr IpList#ipv6_end_addr}
  */
  readonly ipv6EndAddr?: string;
  /**
  * IPv6 Range Start Address / IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_start_addr IpList#ipv6_start_addr}
  */
  readonly ipv6StartAddr?: string;
}

export function ipListIpv6ConfigToTerraform(struct?: IpListIpv6Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_end_addr: cdktf.stringToTerraform(struct!.ipv6EndAddr),
    ipv6_start_addr: cdktf.stringToTerraform(struct!.ipv6StartAddr),
  }
}


export function ipListIpv6ConfigToHclTerraform(struct?: IpListIpv6Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_end_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6EndAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_start_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6StartAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpListIpv6ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpListIpv6Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6EndAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EndAddr = this._ipv6EndAddr;
    }
    if (this._ipv6StartAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6StartAddr = this._ipv6StartAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpListIpv6Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6EndAddr = undefined;
      this._ipv6StartAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6EndAddr = value.ipv6EndAddr;
      this._ipv6StartAddr = value.ipv6StartAddr;
    }
  }

  // ipv6_end_addr - computed: false, optional: true, required: false
  private _ipv6EndAddr?: string; 
  public get ipv6EndAddr() {
    return this.getStringAttribute('ipv6_end_addr');
  }
  public set ipv6EndAddr(value: string) {
    this._ipv6EndAddr = value;
  }
  public resetIpv6EndAddr() {
    this._ipv6EndAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EndAddrInput() {
    return this._ipv6EndAddr;
  }

  // ipv6_start_addr - computed: false, optional: true, required: false
  private _ipv6StartAddr?: string; 
  public get ipv6StartAddr() {
    return this.getStringAttribute('ipv6_start_addr');
  }
  public set ipv6StartAddr(value: string) {
    this._ipv6StartAddr = value;
  }
  public resetIpv6StartAddr() {
    this._ipv6StartAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StartAddrInput() {
    return this._ipv6StartAddr;
  }
}

export class IpListIpv6ConfigList extends cdktf.ComplexList {
  public internalValue? : IpListIpv6Config[] | cdktf.IResolvable

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
  public get(index: number): IpListIpv6ConfigOutputReference {
    return new IpListIpv6ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpListIpv6PrefixConfig {
  /**
  * Number of IPv6 prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#count1 IpList#count1}
  */
  readonly count1?: number;
  /**
  * IPv6 Prefix Range Start / IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_addr_prefix IpList#ipv6_addr_prefix}
  */
  readonly ipv6AddrPrefix?: string;
  /**
  * IPv6 Prefix Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#ipv6_prefix_to IpList#ipv6_prefix_to}
  */
  readonly ipv6PrefixTo?: string;
}

export function ipListIpv6PrefixConfigToTerraform(struct?: IpListIpv6PrefixConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count1: cdktf.numberToTerraform(struct!.count1),
    ipv6_addr_prefix: cdktf.stringToTerraform(struct!.ipv6AddrPrefix),
    ipv6_prefix_to: cdktf.stringToTerraform(struct!.ipv6PrefixTo),
  }
}


export function ipListIpv6PrefixConfigToHclTerraform(struct?: IpListIpv6PrefixConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count1: {
      value: cdktf.numberToHclTerraform(struct!.count1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddrPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_to: {
      value: cdktf.stringToHclTerraform(struct!.ipv6PrefixTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpListIpv6PrefixConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpListIpv6PrefixConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.count1 = this._count1;
    }
    if (this._ipv6AddrPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddrPrefix = this._ipv6AddrPrefix;
    }
    if (this._ipv6PrefixTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixTo = this._ipv6PrefixTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpListIpv6PrefixConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count1 = undefined;
      this._ipv6AddrPrefix = undefined;
      this._ipv6PrefixTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count1 = value.count1;
      this._ipv6AddrPrefix = value.ipv6AddrPrefix;
      this._ipv6PrefixTo = value.ipv6PrefixTo;
    }
  }

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
  }

  // ipv6_addr_prefix - computed: false, optional: true, required: false
  private _ipv6AddrPrefix?: string; 
  public get ipv6AddrPrefix() {
    return this.getStringAttribute('ipv6_addr_prefix');
  }
  public set ipv6AddrPrefix(value: string) {
    this._ipv6AddrPrefix = value;
  }
  public resetIpv6AddrPrefix() {
    this._ipv6AddrPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrPrefixInput() {
    return this._ipv6AddrPrefix;
  }

  // ipv6_prefix_to - computed: false, optional: true, required: false
  private _ipv6PrefixTo?: string; 
  public get ipv6PrefixTo() {
    return this.getStringAttribute('ipv6_prefix_to');
  }
  public set ipv6PrefixTo(value: string) {
    this._ipv6PrefixTo = value;
  }
  public resetIpv6PrefixTo() {
    this._ipv6PrefixTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixToInput() {
    return this._ipv6PrefixTo;
  }
}

export class IpListIpv6PrefixConfigList extends cdktf.ComplexList {
  public internalValue? : IpListIpv6PrefixConfig[] | cdktf.IResolvable

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
  public get(index: number): IpListIpv6PrefixConfigOutputReference {
    return new IpListIpv6PrefixConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list thunder_ip_list}
*/
export class IpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpList to import
  * @param importFromId The id of the existing IpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_list thunder_ip_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpListConfig
  */
  public constructor(scope: Construct, id: string, config: IpListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ipv4Config.internalValue = config.ipv4Config;
    this._ipv6Config.internalValue = config.ipv6Config;
    this._ipv6PrefixConfig.internalValue = config.ipv6PrefixConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ipv4_config - computed: false, optional: true, required: false
  private _ipv4Config = new IpListIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: IpListIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // ipv6_config - computed: false, optional: true, required: false
  private _ipv6Config = new IpListIpv6ConfigList(this, "ipv6_config", false);
  public get ipv6Config() {
    return this._ipv6Config;
  }
  public putIpv6Config(value: IpListIpv6Config[] | cdktf.IResolvable) {
    this._ipv6Config.internalValue = value;
  }
  public resetIpv6Config() {
    this._ipv6Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConfigInput() {
    return this._ipv6Config.internalValue;
  }

  // ipv6_prefix_config - computed: false, optional: true, required: false
  private _ipv6PrefixConfig = new IpListIpv6PrefixConfigList(this, "ipv6_prefix_config", false);
  public get ipv6PrefixConfig() {
    return this._ipv6PrefixConfig;
  }
  public putIpv6PrefixConfig(value: IpListIpv6PrefixConfig[] | cdktf.IResolvable) {
    this._ipv6PrefixConfig.internalValue = value;
  }
  public resetIpv6PrefixConfig() {
    this._ipv6PrefixConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixConfigInput() {
    return this._ipv6PrefixConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ipv4_config: cdktf.listMapper(ipListIpv4ConfigToTerraform, true)(this._ipv4Config.internalValue),
      ipv6_config: cdktf.listMapper(ipListIpv6ConfigToTerraform, true)(this._ipv6Config.internalValue),
      ipv6_prefix_config: cdktf.listMapper(ipListIpv6PrefixConfigToTerraform, true)(this._ipv6PrefixConfig.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_config: {
        value: cdktf.listMapperHcl(ipListIpv4ConfigToHclTerraform, true)(this._ipv4Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpListIpv4ConfigList",
      },
      ipv6_config: {
        value: cdktf.listMapperHcl(ipListIpv6ConfigToHclTerraform, true)(this._ipv6Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpListIpv6ConfigList",
      },
      ipv6_prefix_config: {
        value: cdktf.listMapperHcl(ipListIpv6PrefixConfigToHclTerraform, true)(this._ipv6PrefixConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpListIpv6PrefixConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
