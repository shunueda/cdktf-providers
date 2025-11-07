// https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#dns_suffix NetworkProfile#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#gateway NetworkProfile#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#id NetworkProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#mtu NetworkProfile#mtu}
  */
  readonly mtu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#name NetworkProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#network_name NetworkProfile#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#network_type NetworkProfile#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#prefix_length NetworkProfile#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#primary_dns NetworkProfile#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#secondary_dns NetworkProfile#secondary_dns}
  */
  readonly secondaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#site_pairing NetworkProfile#site_pairing}
  */
  readonly sitePairing: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#vmc NetworkProfile#vmc}
  */
  readonly vmc?: boolean | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#ip_range NetworkProfile#ip_range}
  */
  readonly ipRange: NetworkProfileIpRange[] | cdktf.IResolvable;
}
export interface NetworkProfileIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#end_address NetworkProfile#end_address}
  */
  readonly endAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#start_address NetworkProfile#start_address}
  */
  readonly startAddress: string;
}

export function networkProfileIpRangeToTerraform(struct?: NetworkProfileIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function networkProfileIpRangeToHclTerraform(struct?: NetworkProfileIpRange | cdktf.IResolvable): any {
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

export class NetworkProfileIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkProfileIpRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkProfileIpRange | cdktf.IResolvable | undefined) {
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

export class NetworkProfileIpRangeList extends cdktf.ComplexList {
  public internalValue? : NetworkProfileIpRange[] | cdktf.IResolvable

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
  public get(index: number): NetworkProfileIpRangeOutputReference {
    return new NetworkProfileIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile hcx_network_profile}
*/
export class NetworkProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcx_network_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkProfile to import
  * @param importFromId The id of the existing NetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcx_network_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/network_profile hcx_network_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'hcx_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'hcx',
        providerVersion: '0.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsSuffix = config.dnsSuffix;
    this._gateway = config.gateway;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkName = config.networkName;
    this._networkType = config.networkType;
    this._prefixLength = config.prefixLength;
    this._primaryDns = config.primaryDns;
    this._secondaryDns = config.secondaryDns;
    this._sitePairing = config.sitePairing;
    this._vmc = config.vmc;
    this._ipRange.internalValue = config.ipRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
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

  // mtu - computed: false, optional: false, required: true
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // primary_dns - computed: false, optional: true, required: false
  private _primaryDns?: string; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns;
  }

  // secondary_dns - computed: false, optional: true, required: false
  private _secondaryDns?: string; 
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }
  public set secondaryDns(value: string) {
    this._secondaryDns = value;
  }
  public resetSecondaryDns() {
    this._secondaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsInput() {
    return this._secondaryDns;
  }

  // site_pairing - computed: false, optional: false, required: true
  private _sitePairing?: { [key: string]: string }; 
  public get sitePairing() {
    return this.getStringMapAttribute('site_pairing');
  }
  public set sitePairing(value: { [key: string]: string }) {
    this._sitePairing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePairingInput() {
    return this._sitePairing;
  }

  // vmc - computed: false, optional: true, required: false
  private _vmc?: boolean | cdktf.IResolvable; 
  public get vmc() {
    return this.getBooleanAttribute('vmc');
  }
  public set vmc(value: boolean | cdktf.IResolvable) {
    this._vmc = value;
  }
  public resetVmc() {
    this._vmc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcInput() {
    return this._vmc;
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange = new NetworkProfileIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: NetworkProfileIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
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
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_name: cdktf.stringToTerraform(this._networkName),
      network_type: cdktf.stringToTerraform(this._networkType),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      primary_dns: cdktf.stringToTerraform(this._primaryDns),
      secondary_dns: cdktf.stringToTerraform(this._secondaryDns),
      site_pairing: cdktf.hashMapper(cdktf.stringToTerraform)(this._sitePairing),
      vmc: cdktf.booleanToTerraform(this._vmc),
      ip_range: cdktf.listMapper(networkProfileIpRangeToTerraform, true)(this._ipRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
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
      primary_dns: {
        value: cdktf.stringToHclTerraform(this._primaryDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns: {
        value: cdktf.stringToHclTerraform(this._secondaryDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_pairing: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sitePairing),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vmc: {
        value: cdktf.booleanToHclTerraform(this._vmc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_range: {
        value: cdktf.listMapperHcl(networkProfileIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkProfileIpRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
