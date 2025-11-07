// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how the traffic on the VLAN will be disaggregated. The value selected determines the traffic disaggregation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#cmp_hash NetVlan#cmp_hash}
  */
  readonly cmpHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#id NetVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum Transmission Unit (MTU) for the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#mtu NetVlan#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#name NetVlan#name}
  */
  readonly name: string;
  /**
  * VLAN ID (tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#tag NetVlan#tag}
  */
  readonly tag?: number;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#interfaces NetVlan#interfaces}
  */
  readonly interfaces?: NetVlanInterfaces[] | cdktf.IResolvable;
}
export interface NetVlanInterfaces {
  /**
  * Interface tagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#tagged NetVlan#tagged}
  */
  readonly tagged?: boolean | cdktf.IResolvable;
  /**
  * Vlan name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#vlanport NetVlan#vlanport}
  */
  readonly vlanport?: string;
}

export function netVlanInterfacesToTerraform(struct?: NetVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tagged: cdktf.booleanToTerraform(struct!.tagged),
    vlanport: cdktf.stringToTerraform(struct!.vlanport),
  }
}


export function netVlanInterfacesToHclTerraform(struct?: NetVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tagged: {
      value: cdktf.booleanToHclTerraform(struct!.tagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlanport: {
      value: cdktf.stringToHclTerraform(struct!.vlanport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetVlanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetVlanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagged = this._tagged;
    }
    if (this._vlanport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanport = this._vlanport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetVlanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagged = undefined;
      this._vlanport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagged = value.tagged;
      this._vlanport = value.vlanport;
    }
  }

  // tagged - computed: false, optional: true, required: false
  private _tagged?: boolean | cdktf.IResolvable; 
  public get tagged() {
    return this.getBooleanAttribute('tagged');
  }
  public set tagged(value: boolean | cdktf.IResolvable) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // vlanport - computed: false, optional: true, required: false
  private _vlanport?: string; 
  public get vlanport() {
    return this.getStringAttribute('vlanport');
  }
  public set vlanport(value: string) {
    this._vlanport = value;
  }
  public resetVlanport() {
    this._vlanport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanportInput() {
    return this._vlanport;
  }
}

export class NetVlanInterfacesList extends cdktf.ComplexList {
  public internalValue? : NetVlanInterfaces[] | cdktf.IResolvable

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
  public get(index: number): NetVlanInterfacesOutputReference {
    return new NetVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan bigip_net_vlan}
*/
export class NetVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_net_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetVlan to import
  * @param importFromId The id of the existing NetVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_net_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_vlan bigip_net_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetVlanConfig
  */
  public constructor(scope: Construct, id: string, config: NetVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_net_vlan',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cmpHash = config.cmpHash;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._tag = config.tag;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmp_hash - computed: true, optional: true, required: false
  private _cmpHash?: string; 
  public get cmpHash() {
    return this.getStringAttribute('cmp_hash');
  }
  public set cmpHash(value: string) {
    this._cmpHash = value;
  }
  public resetCmpHash() {
    this._cmpHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpHashInput() {
    return this._cmpHash;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new NetVlanInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: NetVlanInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmp_hash: cdktf.stringToTerraform(this._cmpHash),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      tag: cdktf.numberToTerraform(this._tag),
      interfaces: cdktf.listMapper(netVlanInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmp_hash: {
        value: cdktf.stringToHclTerraform(this._cmpHash),
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
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interfaces: {
        value: cdktf.listMapperHcl(netVlanInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetVlanInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
