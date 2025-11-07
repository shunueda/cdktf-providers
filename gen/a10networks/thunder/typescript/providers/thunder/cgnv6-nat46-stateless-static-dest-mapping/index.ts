// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat46StatelessStaticDestMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set number of consecutive mappings (Number of mappings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#count1 Cgnv6Nat46StatelessStaticDestMapping#count1}
  */
  readonly count1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#id Cgnv6Nat46StatelessStaticDestMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Share/Expose this mapping with other partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#shared Cgnv6Nat46StatelessStaticDestMapping#shared}
  */
  readonly shared?: number;
  /**
  * Send NATed traffic through shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#to_shared Cgnv6Nat46StatelessStaticDestMapping#to_shared}
  */
  readonly toShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#uuid Cgnv6Nat46StatelessStaticDestMapping#uuid}
  */
  readonly uuid?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#v4_address Cgnv6Nat46StatelessStaticDestMapping#v4_address}
  */
  readonly v4Address: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#v6_address Cgnv6Nat46StatelessStaticDestMapping#v6_address}
  */
  readonly v6Address: string;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#vrid Cgnv6Nat46StatelessStaticDestMapping#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping thunder_cgnv6_nat46_stateless_static_dest_mapping}
*/
export class Cgnv6Nat46StatelessStaticDestMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat46_stateless_static_dest_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat46StatelessStaticDestMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat46StatelessStaticDestMapping to import
  * @param importFromId The id of the existing Cgnv6Nat46StatelessStaticDestMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat46StatelessStaticDestMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat46_stateless_static_dest_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat46_stateless_static_dest_mapping thunder_cgnv6_nat46_stateless_static_dest_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat46StatelessStaticDestMappingConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat46StatelessStaticDestMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat46_stateless_static_dest_mapping',
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
    this._count1 = config.count1;
    this._id = config.id;
    this._shared = config.shared;
    this._toShared = config.toShared;
    this._uuid = config.uuid;
    this._v4Address = config.v4Address;
    this._v6Address = config.v6Address;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // to_shared - computed: false, optional: true, required: false
  private _toShared?: number; 
  public get toShared() {
    return this.getNumberAttribute('to_shared');
  }
  public set toShared(value: number) {
    this._toShared = value;
  }
  public resetToShared() {
    this._toShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSharedInput() {
    return this._toShared;
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

  // v4_address - computed: false, optional: false, required: true
  private _v4Address?: string; 
  public get v4Address() {
    return this.getStringAttribute('v4_address');
  }
  public set v4Address(value: string) {
    this._v4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AddressInput() {
    return this._v4Address;
  }

  // v6_address - computed: false, optional: false, required: true
  private _v6Address?: string; 
  public get v6Address() {
    return this.getStringAttribute('v6_address');
  }
  public set v6Address(value: string) {
    this._v6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AddressInput() {
    return this._v6Address;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      count1: cdktf.numberToTerraform(this._count1),
      id: cdktf.stringToTerraform(this._id),
      shared: cdktf.numberToTerraform(this._shared),
      to_shared: cdktf.numberToTerraform(this._toShared),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_address: cdktf.stringToTerraform(this._v4Address),
      v6_address: cdktf.stringToTerraform(this._v6Address),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      count1: {
        value: cdktf.numberToHclTerraform(this._count1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to_shared: {
        value: cdktf.numberToHclTerraform(this._toShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_address: {
        value: cdktf.stringToHclTerraform(this._v4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_address: {
        value: cdktf.stringToHclTerraform(this._v6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
