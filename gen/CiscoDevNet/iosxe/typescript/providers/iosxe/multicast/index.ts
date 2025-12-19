// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#delete_mode Multicast#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#device Multicast#device}
  */
  readonly device?: string;
  /**
  * RPF across equal-cost paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#multipath Multicast#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Per-(source, group) load sharing algorithm selection
  *   - Choices: `basic`, `next-hop-based`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#multipath_s_g_hash Multicast#multipath_s_g_hash}
  */
  readonly multipathSGHash?: string;
  /**
  * Select VPN Routing/Forwarding instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#vrfs Multicast#vrfs}
  */
  readonly vrfs?: MulticastVrfs[] | cdktf.IResolvable;
}
export interface MulticastVrfs {
  /**
  * RPF across equal-cost paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#multipath Multicast#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Per-(source, group) load sharing algorithm selection
  *   - Choices: `basic`, `next-hop-based`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#multipath_s_g_hash Multicast#multipath_s_g_hash}
  */
  readonly multipathSGHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#vrf Multicast#vrf}
  */
  readonly vrf: string;
}

export function multicastVrfsToTerraform(struct?: MulticastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    multipath_s_g_hash: cdktf.stringToTerraform(struct!.multipathSGHash),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function multicastVrfsToHclTerraform(struct?: MulticastVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multipath_s_g_hash: {
      value: cdktf.stringToHclTerraform(struct!.multipathSGHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MulticastVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MulticastVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._multipathSGHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipathSGHash = this._multipathSGHash;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MulticastVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multipath = undefined;
      this._multipathSGHash = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multipath = value.multipath;
      this._multipathSGHash = value.multipathSGHash;
      this._vrf = value.vrf;
    }
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // multipath_s_g_hash - computed: false, optional: true, required: false
  private _multipathSGHash?: string; 
  public get multipathSGHash() {
    return this.getStringAttribute('multipath_s_g_hash');
  }
  public set multipathSGHash(value: string) {
    this._multipathSGHash = value;
  }
  public resetMultipathSGHash() {
    this._multipathSGHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathSGHashInput() {
    return this._multipathSGHash;
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

export class MulticastVrfsList extends cdktf.ComplexList {
  public internalValue? : MulticastVrfs[] | cdktf.IResolvable

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
  public get(index: number): MulticastVrfsOutputReference {
    return new MulticastVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast iosxe_multicast}
*/
export class Multicast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Multicast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Multicast to import
  * @param importFromId The id of the existing Multicast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Multicast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/multicast iosxe_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MulticastConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MulticastConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_multicast',
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
    this._multipath = config.multipath;
    this._multipathSGHash = config.multipathSGHash;
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

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // multipath_s_g_hash - computed: false, optional: true, required: false
  private _multipathSGHash?: string; 
  public get multipathSGHash() {
    return this.getStringAttribute('multipath_s_g_hash');
  }
  public set multipathSGHash(value: string) {
    this._multipathSGHash = value;
  }
  public resetMultipathSGHash() {
    this._multipathSGHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathSGHashInput() {
    return this._multipathSGHash;
  }

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new MulticastVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: MulticastVrfs[] | cdktf.IResolvable) {
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
      multipath: cdktf.booleanToTerraform(this._multipath),
      multipath_s_g_hash: cdktf.stringToTerraform(this._multipathSGHash),
      vrfs: cdktf.listMapper(multicastVrfsToTerraform, false)(this._vrfs.internalValue),
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
      multipath: {
        value: cdktf.booleanToHclTerraform(this._multipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multipath_s_g_hash: {
        value: cdktf.stringToHclTerraform(this._multipathSGHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrfs: {
        value: cdktf.listMapperHcl(multicastVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MulticastVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
