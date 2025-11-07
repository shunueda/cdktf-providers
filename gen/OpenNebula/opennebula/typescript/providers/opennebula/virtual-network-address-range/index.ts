// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkAddressRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the Address Range: IP4, IP6. Default is 'IP4'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#ar_type VirtualNetworkAddressRange#ar_type}
  */
  readonly arType?: string;
  /**
  * Add custom attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#custom VirtualNetworkAddressRange#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * Global prefix for IP6 or IP4_6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#global_prefix VirtualNetworkAddressRange#global_prefix}
  */
  readonly globalPrefix?: string;
  /**
  * List of IPs to be held from this address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#hold_ips VirtualNetworkAddressRange#hold_ips}
  */
  readonly holdIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#id VirtualNetworkAddressRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Start IPv4 of the range to be allocated (Required if IP4 or IP4_6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#ip4 VirtualNetworkAddressRange#ip4}
  */
  readonly ip4?: string;
  /**
  * Start IPv6 of the range to be allocated (Required if IP6_STATIC or IP4_6_STATIC)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#ip6 VirtualNetworkAddressRange#ip6}
  */
  readonly ip6?: string;
  /**
  * IPAM driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#ipam VirtualNetworkAddressRange#ipam}
  */
  readonly ipam?: string;
  /**
  * Start MAC of the range to be allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#mac VirtualNetworkAddressRange#mac}
  */
  readonly mac?: string;
  /**
  * Prefix length Only needed for IP6_STATIC or IP4_6_STATIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#prefix_length VirtualNetworkAddressRange#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Count of addresses in the ip range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#size VirtualNetworkAddressRange#size}
  */
  readonly size: number;
  /**
  * ULA prefix for IP6 or IP4_6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#ula_prefix VirtualNetworkAddressRange#ula_prefix}
  */
  readonly ulaPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#virtual_network_id VirtualNetworkAddressRange#virtual_network_id}
  */
  readonly virtualNetworkId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#timeouts VirtualNetworkAddressRange#timeouts}
  */
  readonly timeouts?: VirtualNetworkAddressRangeTimeouts;
}
export interface VirtualNetworkAddressRangeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#create VirtualNetworkAddressRange#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#delete VirtualNetworkAddressRange#delete}
  */
  readonly delete?: string;
}

export function virtualNetworkAddressRangeTimeoutsToTerraform(struct?: VirtualNetworkAddressRangeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function virtualNetworkAddressRangeTimeoutsToHclTerraform(struct?: VirtualNetworkAddressRangeTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkAddressRangeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkAddressRangeTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkAddressRangeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range opennebula_virtual_network_address_range}
*/
export class VirtualNetworkAddressRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_network_address_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkAddressRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkAddressRange to import
  * @param importFromId The id of the existing VirtualNetworkAddressRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkAddressRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_network_address_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network_address_range opennebula_virtual_network_address_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkAddressRangeConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkAddressRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_network_address_range',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arType = config.arType;
    this._custom = config.custom;
    this._globalPrefix = config.globalPrefix;
    this._holdIps = config.holdIps;
    this._id = config.id;
    this._ip4 = config.ip4;
    this._ip6 = config.ip6;
    this._ipam = config.ipam;
    this._mac = config.mac;
    this._prefixLength = config.prefixLength;
    this._size = config.size;
    this._ulaPrefix = config.ulaPrefix;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ar_type - computed: false, optional: true, required: false
  private _arType?: string; 
  public get arType() {
    return this.getStringAttribute('ar_type');
  }
  public set arType(value: string) {
    this._arType = value;
  }
  public resetArType() {
    this._arType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arTypeInput() {
    return this._arType;
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // global_prefix - computed: false, optional: true, required: false
  private _globalPrefix?: string; 
  public get globalPrefix() {
    return this.getStringAttribute('global_prefix');
  }
  public set globalPrefix(value: string) {
    this._globalPrefix = value;
  }
  public resetGlobalPrefix() {
    this._globalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPrefixInput() {
    return this._globalPrefix;
  }

  // held_ips - computed: true, optional: false, required: false
  public get heldIps() {
    return cdktf.Fn.tolist(this.getListAttribute('held_ips'));
  }

  // hold_ips - computed: false, optional: true, required: false
  private _holdIps?: string[]; 
  public get holdIps() {
    return cdktf.Fn.tolist(this.getListAttribute('hold_ips'));
  }
  public set holdIps(value: string[]) {
    this._holdIps = value;
  }
  public resetHoldIps() {
    this._holdIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIpsInput() {
    return this._holdIps;
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

  // ip4 - computed: false, optional: true, required: false
  private _ip4?: string; 
  public get ip4() {
    return this.getStringAttribute('ip4');
  }
  public set ip4(value: string) {
    this._ip4 = value;
  }
  public resetIp4() {
    this._ip4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4Input() {
    return this._ip4;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // ipam - computed: false, optional: true, required: false
  private _ipam?: string; 
  public get ipam() {
    return this.getStringAttribute('ipam');
  }
  public set ipam(value: string) {
    this._ipam = value;
  }
  public resetIpam() {
    this._ipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ula_prefix - computed: false, optional: true, required: false
  private _ulaPrefix?: string; 
  public get ulaPrefix() {
    return this.getStringAttribute('ula_prefix');
  }
  public set ulaPrefix(value: string) {
    this._ulaPrefix = value;
  }
  public resetUlaPrefix() {
    this._ulaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulaPrefixInput() {
    return this._ulaPrefix;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: number; 
  public get virtualNetworkId() {
    return this.getNumberAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: number) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkAddressRangeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkAddressRangeTimeouts) {
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
      ar_type: cdktf.stringToTerraform(this._arType),
      custom: cdktf.hashMapper(cdktf.stringToTerraform)(this._custom),
      global_prefix: cdktf.stringToTerraform(this._globalPrefix),
      hold_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._holdIps),
      id: cdktf.stringToTerraform(this._id),
      ip4: cdktf.stringToTerraform(this._ip4),
      ip6: cdktf.stringToTerraform(this._ip6),
      ipam: cdktf.stringToTerraform(this._ipam),
      mac: cdktf.stringToTerraform(this._mac),
      prefix_length: cdktf.stringToTerraform(this._prefixLength),
      size: cdktf.numberToTerraform(this._size),
      ula_prefix: cdktf.stringToTerraform(this._ulaPrefix),
      virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
      timeouts: virtualNetworkAddressRangeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ar_type: {
        value: cdktf.stringToHclTerraform(this._arType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._custom),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      global_prefix: {
        value: cdktf.stringToHclTerraform(this._globalPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._holdIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip4: {
        value: cdktf.stringToHclTerraform(this._ip4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam: {
        value: cdktf.stringToHclTerraform(this._ipam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.stringToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ula_prefix: {
        value: cdktf.stringToHclTerraform(this._ulaPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.numberToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: virtualNetworkAddressRangeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkAddressRangeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
