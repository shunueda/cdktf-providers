// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepLocalIpv6AddressAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#id OverlayTunnelVtepLocalIpv6AddressA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#id1 OverlayTunnelVtepLocalIpv6AddressA#id1}
  */
  readonly id1: string;
  /**
  * Source Tunnel End Point IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#ipv6_address OverlayTunnelVtepLocalIpv6AddressA#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#uuid OverlayTunnelVtepLocalIpv6AddressA#uuid}
  */
  readonly uuid?: string;
  /**
  * vni_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#vni_list OverlayTunnelVtepLocalIpv6AddressA#vni_list}
  */
  readonly vniList?: OverlayTunnelVtepLocalIpv6AddressVniListStructA[] | cdktf.IResolvable;
}
export interface OverlayTunnelVtepLocalIpv6AddressVniListStructA {
  /**
  * This is a Gateway segment id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#gateway OverlayTunnelVtepLocalIpv6AddressA#gateway}
  */
  readonly gateway?: number;
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#lif OverlayTunnelVtepLocalIpv6AddressA#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#partition OverlayTunnelVtepLocalIpv6AddressA#partition}
  */
  readonly partition?: string;
  /**
  * Id of the segment that is being extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#segment OverlayTunnelVtepLocalIpv6AddressA#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#uuid OverlayTunnelVtepLocalIpv6AddressA#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepLocalIpv6AddressVniListStructAToTerraform(struct?: OverlayTunnelVtepLocalIpv6AddressVniListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.numberToTerraform(struct!.gateway),
    lif: cdktf.stringToTerraform(struct!.lif),
    partition: cdktf.stringToTerraform(struct!.partition),
    segment: cdktf.numberToTerraform(struct!.segment),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepLocalIpv6AddressVniListStructAToHclTerraform(struct?: OverlayTunnelVtepLocalIpv6AddressVniListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.numberToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepLocalIpv6AddressVniListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepLocalIpv6AddressVniListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepLocalIpv6AddressVniListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._lif = undefined;
      this._partition = undefined;
      this._segment = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._lif = value.lif;
      this._partition = value.partition;
      this._segment = value.segment;
      this._uuid = value.uuid;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: number; 
  public get gateway() {
    return this.getNumberAttribute('gateway');
  }
  public set gateway(value: number) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
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
}

export class OverlayTunnelVtepLocalIpv6AddressVniListStructAList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepLocalIpv6AddressVniListStructA[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepLocalIpv6AddressVniListStructAOutputReference {
    return new OverlayTunnelVtepLocalIpv6AddressVniListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address thunder_overlay_tunnel_vtep_local_ipv6_address}
*/
export class OverlayTunnelVtepLocalIpv6AddressA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_local_ipv6_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepLocalIpv6AddressA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepLocalIpv6AddressA to import
  * @param importFromId The id of the existing OverlayTunnelVtepLocalIpv6AddressA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepLocalIpv6AddressA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_local_ipv6_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address thunder_overlay_tunnel_vtep_local_ipv6_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepLocalIpv6AddressAConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepLocalIpv6AddressAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_local_ipv6_address',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._id1 = config.id1;
    this._ipv6Address = config.ipv6Address;
    this._uuid = config.uuid;
    this._vniList.internalValue = config.vniList;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: string; 
  public get id1() {
    return this.getStringAttribute('id1');
  }
  public set id1(value: string) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // vni_list - computed: false, optional: true, required: false
  private _vniList = new OverlayTunnelVtepLocalIpv6AddressVniListStructAList(this, "vni_list", false);
  public get vniList() {
    return this._vniList;
  }
  public putVniList(value: OverlayTunnelVtepLocalIpv6AddressVniListStructA[] | cdktf.IResolvable) {
    this._vniList.internalValue = value;
  }
  public resetVniList() {
    this._vniList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniListInput() {
    return this._vniList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      uuid: cdktf.stringToTerraform(this._uuid),
      vni_list: cdktf.listMapper(overlayTunnelVtepLocalIpv6AddressVniListStructAToTerraform, true)(this._vniList.internalValue),
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
      id1: {
        value: cdktf.stringToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      vni_list: {
        value: cdktf.listMapperHcl(overlayTunnelVtepLocalIpv6AddressVniListStructAToHclTerraform, true)(this._vniList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepLocalIpv6AddressVniListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
