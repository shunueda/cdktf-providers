// https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BareMetalNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#location_id BareMetalNetwork#location_id}
  */
  readonly locationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#name BareMetalNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#network_size_id BareMetalNetwork#network_size_id}
  */
  readonly networkSizeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#network_type BareMetalNetwork#network_type}
  */
  readonly networkType?: string;
  /**
  * For private networks, this is an existing VRF to be used in creating the new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#vrf BareMetalNetwork#vrf}
  */
  readonly vrf?: string;
  /**
  * For private networks, create a new VRF with this description and use it in creating the new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#vrf_description BareMetalNetwork#vrf_description}
  */
  readonly vrfDescription?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#timeouts BareMetalNetwork#timeouts}
  */
  readonly timeouts?: BareMetalNetworkTimeouts;
}
export interface BareMetalNetworkPrices {
}

export function bareMetalNetworkPricesToTerraform(struct?: BareMetalNetworkPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bareMetalNetworkPricesToHclTerraform(struct?: BareMetalNetworkPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BareMetalNetworkPricesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BareMetalNetworkPrices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalNetworkPrices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BareMetalNetworkPricesList extends cdktf.ComplexList {

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
  public get(index: number): BareMetalNetworkPricesOutputReference {
    return new BareMetalNetworkPricesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BareMetalNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#create BareMetalNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#delete BareMetalNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#read BareMetalNetwork#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#update BareMetalNetwork#update}
  */
  readonly update?: string;
}

export function bareMetalNetworkTimeoutsToTerraform(struct?: BareMetalNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bareMetalNetworkTimeoutsToHclTerraform(struct?: BareMetalNetworkTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BareMetalNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BareMetalNetworkTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalNetworkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network lumen_bare_metal_network}
*/
export class BareMetalNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lumen_bare_metal_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BareMetalNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BareMetalNetwork to import
  * @param importFromId The id of the existing BareMetalNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BareMetalNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lumen_bare_metal_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.2/docs/resources/bare_metal_network lumen_bare_metal_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BareMetalNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: BareMetalNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'lumen_bare_metal_network',
      terraformGeneratorMetadata: {
        providerName: 'lumen',
        providerVersion: '3.0.2',
        providerVersionConstraint: '3.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._locationId = config.locationId;
    this._name = config.name;
    this._networkSizeId = config.networkSizeId;
    this._networkType = config.networkType;
    this._vrf = config.vrf;
    this._vrfDescription = config.vrfDescription;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // available_ips - computed: true, optional: false, required: false
  public get availableIps() {
    return this.getNumberAttribute('available_ips');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_block - computed: true, optional: false, required: false
  public get ipBlock() {
    return this.getStringAttribute('ip_block');
  }

  // ipv6_block - computed: true, optional: false, required: false
  public get ipv6Block() {
    return this.getStringAttribute('ipv6_block');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // network_size_id - computed: false, optional: true, required: false
  private _networkSizeId?: string; 
  public get networkSizeId() {
    return this.getStringAttribute('network_size_id');
  }
  public set networkSizeId(value: string) {
    this._networkSizeId = value;
  }
  public resetNetworkSizeId() {
    this._networkSizeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSizeIdInput() {
    return this._networkSizeId;
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

  // prices - computed: true, optional: false, required: false
  private _prices = new BareMetalNetworkPricesList(this, "prices", false);
  public get prices() {
    return this._prices;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_ips - computed: true, optional: false, required: false
  public get totalIps() {
    return this.getNumberAttribute('total_ips');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vrf_description - computed: false, optional: true, required: false
  private _vrfDescription?: string; 
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }
  public set vrfDescription(value: string) {
    this._vrfDescription = value;
  }
  public resetVrfDescription() {
    this._vrfDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDescriptionInput() {
    return this._vrfDescription;
  }

  // vrf_description_value - computed: true, optional: false, required: false
  public get vrfDescriptionValue() {
    return this.getStringAttribute('vrf_description_value');
  }

  // vrf_value - computed: true, optional: false, required: false
  public get vrfValue() {
    return this.getStringAttribute('vrf_value');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BareMetalNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BareMetalNetworkTimeouts) {
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
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      network_size_id: cdktf.stringToTerraform(this._networkSizeId),
      network_type: cdktf.stringToTerraform(this._networkType),
      vrf: cdktf.stringToTerraform(this._vrf),
      vrf_description: cdktf.stringToTerraform(this._vrfDescription),
      timeouts: bareMetalNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
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
      network_size_id: {
        value: cdktf.stringToHclTerraform(this._networkSizeId),
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
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_description: {
        value: cdktf.stringToHclTerraform(this._vrfDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: bareMetalNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BareMetalNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
