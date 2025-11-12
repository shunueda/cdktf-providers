// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtNetworkImportedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#description NsxtNetworkImported#description}
  */
  readonly description?: string;
  /**
  * DNS server 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#dns1 NsxtNetworkImported#dns1}
  */
  readonly dns1?: string;
  /**
  * DNS server 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#dns2 NsxtNetworkImported#dns2}
  */
  readonly dns2?: string;
  /**
  * DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#dns_suffix NsxtNetworkImported#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Boolean value if Dual-Stack mode should be enabled (default `false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#dual_stack_enabled NsxtNetworkImported#dual_stack_enabled}
  */
  readonly dualStackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of existing Distributed Virtual Port Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#dvpg_name NsxtNetworkImported#dvpg_name}
  */
  readonly dvpgName?: string;
  /**
  * Gateway IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#gateway NsxtNetworkImported#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#id NsxtNetworkImported#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#name NsxtNetworkImported#name}
  */
  readonly name: string;
  /**
  * Name of existing NSX-T Logical Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#nsxt_logical_switch_name NsxtNetworkImported#nsxt_logical_switch_name}
  */
  readonly nsxtLogicalSwitchName?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#org NsxtNetworkImported#org}
  */
  readonly org?: string;
  /**
  * ID of VDC or VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#owner_id NsxtNetworkImported#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Network prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#prefix_length NsxtNetworkImported#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Secondary gateway (can only be IPv6 and requires enabled Dual Stack mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#secondary_gateway NsxtNetworkImported#secondary_gateway}
  */
  readonly secondaryGateway?: string;
  /**
  * Secondary prefix (can only be IPv6 and requires enabled Dual Stack mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#secondary_prefix_length NsxtNetworkImported#secondary_prefix_length}
  */
  readonly secondaryPrefixLength?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#vdc NsxtNetworkImported#vdc}
  */
  readonly vdc?: string;
  /**
  * secondary_static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#secondary_static_ip_pool NsxtNetworkImported#secondary_static_ip_pool}
  */
  readonly secondaryStaticIpPool?: NsxtNetworkImportedSecondaryStaticIpPool[] | cdktf.IResolvable;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#static_ip_pool NsxtNetworkImported#static_ip_pool}
  */
  readonly staticIpPool?: NsxtNetworkImportedStaticIpPool[] | cdktf.IResolvable;
}
export interface NsxtNetworkImportedSecondaryStaticIpPool {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#end_address NsxtNetworkImported#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#start_address NsxtNetworkImported#start_address}
  */
  readonly startAddress: string;
}

export function nsxtNetworkImportedSecondaryStaticIpPoolToTerraform(struct?: NsxtNetworkImportedSecondaryStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function nsxtNetworkImportedSecondaryStaticIpPoolToHclTerraform(struct?: NsxtNetworkImportedSecondaryStaticIpPool | cdktf.IResolvable): any {
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

export class NsxtNetworkImportedSecondaryStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtNetworkImportedSecondaryStaticIpPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtNetworkImportedSecondaryStaticIpPool | cdktf.IResolvable | undefined) {
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

export class NsxtNetworkImportedSecondaryStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : NsxtNetworkImportedSecondaryStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): NsxtNetworkImportedSecondaryStaticIpPoolOutputReference {
    return new NsxtNetworkImportedSecondaryStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtNetworkImportedStaticIpPool {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#end_address NsxtNetworkImported#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#start_address NsxtNetworkImported#start_address}
  */
  readonly startAddress: string;
}

export function nsxtNetworkImportedStaticIpPoolToTerraform(struct?: NsxtNetworkImportedStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function nsxtNetworkImportedStaticIpPoolToHclTerraform(struct?: NsxtNetworkImportedStaticIpPool | cdktf.IResolvable): any {
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

export class NsxtNetworkImportedStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtNetworkImportedStaticIpPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtNetworkImportedStaticIpPool | cdktf.IResolvable | undefined) {
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

export class NsxtNetworkImportedStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : NsxtNetworkImportedStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): NsxtNetworkImportedStaticIpPoolOutputReference {
    return new NsxtNetworkImportedStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported vcd_nsxt_network_imported}
*/
export class NsxtNetworkImported extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_network_imported";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtNetworkImported resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtNetworkImported to import
  * @param importFromId The id of the existing NsxtNetworkImported that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtNetworkImported to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_network_imported", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_network_imported vcd_nsxt_network_imported} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtNetworkImportedConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtNetworkImportedConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_network_imported',
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
    this._description = config.description;
    this._dns1 = config.dns1;
    this._dns2 = config.dns2;
    this._dnsSuffix = config.dnsSuffix;
    this._dualStackEnabled = config.dualStackEnabled;
    this._dvpgName = config.dvpgName;
    this._gateway = config.gateway;
    this._id = config.id;
    this._name = config.name;
    this._nsxtLogicalSwitchName = config.nsxtLogicalSwitchName;
    this._org = config.org;
    this._ownerId = config.ownerId;
    this._prefixLength = config.prefixLength;
    this._secondaryGateway = config.secondaryGateway;
    this._secondaryPrefixLength = config.secondaryPrefixLength;
    this._vdc = config.vdc;
    this._secondaryStaticIpPool.internalValue = config.secondaryStaticIpPool;
    this._staticIpPool.internalValue = config.staticIpPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // dual_stack_enabled - computed: false, optional: true, required: false
  private _dualStackEnabled?: boolean | cdktf.IResolvable; 
  public get dualStackEnabled() {
    return this.getBooleanAttribute('dual_stack_enabled');
  }
  public set dualStackEnabled(value: boolean | cdktf.IResolvable) {
    this._dualStackEnabled = value;
  }
  public resetDualStackEnabled() {
    this._dualStackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackEnabledInput() {
    return this._dualStackEnabled;
  }

  // dvpg_id - computed: true, optional: false, required: false
  public get dvpgId() {
    return this.getStringAttribute('dvpg_id');
  }

  // dvpg_name - computed: false, optional: true, required: false
  private _dvpgName?: string; 
  public get dvpgName() {
    return this.getStringAttribute('dvpg_name');
  }
  public set dvpgName(value: string) {
    this._dvpgName = value;
  }
  public resetDvpgName() {
    this._dvpgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvpgNameInput() {
    return this._dvpgName;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // nsxt_logical_switch_id - computed: true, optional: false, required: false
  public get nsxtLogicalSwitchId() {
    return this.getStringAttribute('nsxt_logical_switch_id');
  }

  // nsxt_logical_switch_name - computed: false, optional: true, required: false
  private _nsxtLogicalSwitchName?: string; 
  public get nsxtLogicalSwitchName() {
    return this.getStringAttribute('nsxt_logical_switch_name');
  }
  public set nsxtLogicalSwitchName(value: string) {
    this._nsxtLogicalSwitchName = value;
  }
  public resetNsxtLogicalSwitchName() {
    this._nsxtLogicalSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtLogicalSwitchNameInput() {
    return this._nsxtLogicalSwitchName;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // secondary_gateway - computed: false, optional: true, required: false
  private _secondaryGateway?: string; 
  public get secondaryGateway() {
    return this.getStringAttribute('secondary_gateway');
  }
  public set secondaryGateway(value: string) {
    this._secondaryGateway = value;
  }
  public resetSecondaryGateway() {
    this._secondaryGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGatewayInput() {
    return this._secondaryGateway;
  }

  // secondary_prefix_length - computed: false, optional: true, required: false
  private _secondaryPrefixLength?: string; 
  public get secondaryPrefixLength() {
    return this.getStringAttribute('secondary_prefix_length');
  }
  public set secondaryPrefixLength(value: string) {
    this._secondaryPrefixLength = value;
  }
  public resetSecondaryPrefixLength() {
    this._secondaryPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrefixLengthInput() {
    return this._secondaryPrefixLength;
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // secondary_static_ip_pool - computed: false, optional: true, required: false
  private _secondaryStaticIpPool = new NsxtNetworkImportedSecondaryStaticIpPoolList(this, "secondary_static_ip_pool", true);
  public get secondaryStaticIpPool() {
    return this._secondaryStaticIpPool;
  }
  public putSecondaryStaticIpPool(value: NsxtNetworkImportedSecondaryStaticIpPool[] | cdktf.IResolvable) {
    this._secondaryStaticIpPool.internalValue = value;
  }
  public resetSecondaryStaticIpPool() {
    this._secondaryStaticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryStaticIpPoolInput() {
    return this._secondaryStaticIpPool.internalValue;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new NsxtNetworkImportedStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: NsxtNetworkImportedStaticIpPool[] | cdktf.IResolvable) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns1: cdktf.stringToTerraform(this._dns1),
      dns2: cdktf.stringToTerraform(this._dns2),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      dual_stack_enabled: cdktf.booleanToTerraform(this._dualStackEnabled),
      dvpg_name: cdktf.stringToTerraform(this._dvpgName),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsxt_logical_switch_name: cdktf.stringToTerraform(this._nsxtLogicalSwitchName),
      org: cdktf.stringToTerraform(this._org),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      secondary_gateway: cdktf.stringToTerraform(this._secondaryGateway),
      secondary_prefix_length: cdktf.stringToTerraform(this._secondaryPrefixLength),
      vdc: cdktf.stringToTerraform(this._vdc),
      secondary_static_ip_pool: cdktf.listMapper(nsxtNetworkImportedSecondaryStaticIpPoolToTerraform, true)(this._secondaryStaticIpPool.internalValue),
      static_ip_pool: cdktf.listMapper(nsxtNetworkImportedStaticIpPoolToTerraform, true)(this._staticIpPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns1: {
        value: cdktf.stringToHclTerraform(this._dns1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns2: {
        value: cdktf.stringToHclTerraform(this._dns2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dual_stack_enabled: {
        value: cdktf.booleanToHclTerraform(this._dualStackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dvpg_name: {
        value: cdktf.stringToHclTerraform(this._dvpgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_logical_switch_name: {
        value: cdktf.stringToHclTerraform(this._nsxtLogicalSwitchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_gateway: {
        value: cdktf.stringToHclTerraform(this._secondaryGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_prefix_length: {
        value: cdktf.stringToHclTerraform(this._secondaryPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_static_ip_pool: {
        value: cdktf.listMapperHcl(nsxtNetworkImportedSecondaryStaticIpPoolToHclTerraform, true)(this._secondaryStaticIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtNetworkImportedSecondaryStaticIpPoolList",
      },
      static_ip_pool: {
        value: cdktf.listMapperHcl(nsxtNetworkImportedStaticIpPoolToHclTerraform, true)(this._staticIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtNetworkImportedStaticIpPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
