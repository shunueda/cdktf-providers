// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#delete_mode PimIpv6#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#device PimIpv6#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address PimIpv6#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address_access_list PimIpv6#rp_address_access_list}
  */
  readonly rpAddressAccessList?: string;
  /**
  * Specify keyword bidir to configure a bidir RP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address_bidir PimIpv6#rp_address_bidir}
  */
  readonly rpAddressBidir?: boolean | cdktf.IResolvable;
  /**
  * Select VPN Routing/Forwarding instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#vrfs PimIpv6#vrfs}
  */
  readonly vrfs?: PimIpv6Vrfs[] | cdktf.IResolvable;
}
export interface PimIpv6Vrfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address PimIpv6#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address_access_list PimIpv6#rp_address_access_list}
  */
  readonly rpAddressAccessList?: string;
  /**
  * Specify keyword bidir to configure a bidir RP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#rp_address_bidir PimIpv6#rp_address_bidir}
  */
  readonly rpAddressBidir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#vrf PimIpv6#vrf}
  */
  readonly vrf: string;
}

export function pimIpv6VrfsToTerraform(struct?: PimIpv6Vrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rp_address: cdktf.stringToTerraform(struct!.rpAddress),
    rp_address_access_list: cdktf.stringToTerraform(struct!.rpAddressAccessList),
    rp_address_bidir: cdktf.booleanToTerraform(struct!.rpAddressBidir),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function pimIpv6VrfsToHclTerraform(struct?: PimIpv6Vrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rp_address: {
      value: cdktf.stringToHclTerraform(struct!.rpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_address_access_list: {
      value: cdktf.stringToHclTerraform(struct!.rpAddressAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_address_bidir: {
      value: cdktf.booleanToHclTerraform(struct!.rpAddressBidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimIpv6VrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimIpv6Vrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress;
    }
    if (this._rpAddressAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddressAccessList = this._rpAddressAccessList;
    }
    if (this._rpAddressBidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddressBidir = this._rpAddressBidir;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimIpv6Vrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpAddress = undefined;
      this._rpAddressAccessList = undefined;
      this._rpAddressBidir = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpAddress = value.rpAddress;
      this._rpAddressAccessList = value.rpAddressAccessList;
      this._rpAddressBidir = value.rpAddressBidir;
      this._vrf = value.vrf;
    }
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_address_access_list - computed: false, optional: true, required: false
  private _rpAddressAccessList?: string; 
  public get rpAddressAccessList() {
    return this.getStringAttribute('rp_address_access_list');
  }
  public set rpAddressAccessList(value: string) {
    this._rpAddressAccessList = value;
  }
  public resetRpAddressAccessList() {
    this._rpAddressAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressAccessListInput() {
    return this._rpAddressAccessList;
  }

  // rp_address_bidir - computed: false, optional: true, required: false
  private _rpAddressBidir?: boolean | cdktf.IResolvable; 
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }
  public set rpAddressBidir(value: boolean | cdktf.IResolvable) {
    this._rpAddressBidir = value;
  }
  public resetRpAddressBidir() {
    this._rpAddressBidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressBidirInput() {
    return this._rpAddressBidir;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class PimIpv6VrfsList extends cdktf.ComplexList {
  public internalValue? : PimIpv6Vrfs[] | cdktf.IResolvable

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
  public get(index: number): PimIpv6VrfsOutputReference {
    return new PimIpv6VrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6 iosxe_pim_ipv6}
*/
export class PimIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_pim_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimIpv6 to import
  * @param importFromId The id of the existing PimIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_pim_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/pim_ipv6 iosxe_pim_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimIpv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: PimIpv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_pim_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._rpAddress = config.rpAddress;
    this._rpAddressAccessList = config.rpAddressAccessList;
    this._rpAddressBidir = config.rpAddressBidir;
    this._vrfs.internalValue = config.vrfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_address_access_list - computed: false, optional: true, required: false
  private _rpAddressAccessList?: string; 
  public get rpAddressAccessList() {
    return this.getStringAttribute('rp_address_access_list');
  }
  public set rpAddressAccessList(value: string) {
    this._rpAddressAccessList = value;
  }
  public resetRpAddressAccessList() {
    this._rpAddressAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressAccessListInput() {
    return this._rpAddressAccessList;
  }

  // rp_address_bidir - computed: false, optional: true, required: false
  private _rpAddressBidir?: boolean | cdktf.IResolvable; 
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }
  public set rpAddressBidir(value: boolean | cdktf.IResolvable) {
    this._rpAddressBidir = value;
  }
  public resetRpAddressBidir() {
    this._rpAddressBidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressBidirInput() {
    return this._rpAddressBidir;
  }

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new PimIpv6VrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: PimIpv6Vrfs[] | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  public resetVrfs() {
    this._vrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      rp_address: cdktf.stringToTerraform(this._rpAddress),
      rp_address_access_list: cdktf.stringToTerraform(this._rpAddressAccessList),
      rp_address_bidir: cdktf.booleanToTerraform(this._rpAddressBidir),
      vrfs: cdktf.listMapper(pimIpv6VrfsToTerraform, false)(this._vrfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_address: {
        value: cdktf.stringToHclTerraform(this._rpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_address_access_list: {
        value: cdktf.stringToHclTerraform(this._rpAddressAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_address_bidir: {
        value: cdktf.booleanToHclTerraform(this._rpAddressBidir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrfs: {
        value: cdktf.listMapperHcl(pimIpv6VrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimIpv6VrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
