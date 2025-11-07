// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forged transmits (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#forged_transmits Vswitch#forged_transmits}
  */
  readonly forgedTransmits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#id Vswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vswitch Link Discovery Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#link_discovery_mode Vswitch#link_discovery_mode}
  */
  readonly linkDiscoveryMode?: string;
  /**
  * MAC address changes (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#mac_changes Vswitch#mac_changes}
  */
  readonly macChanges?: boolean | cdktf.IResolvable;
  /**
  * vswitch mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#mtu Vswitch#mtu}
  */
  readonly mtu?: number;
  /**
  * vswitch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#name Vswitch#name}
  */
  readonly name: string;
  /**
  * vswitch number of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#ports Vswitch#ports}
  */
  readonly ports?: number;
  /**
  * Promiscuous mode (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#promiscuous_mode Vswitch#promiscuous_mode}
  */
  readonly promiscuousMode?: boolean | cdktf.IResolvable;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#uplink Vswitch#uplink}
  */
  readonly uplink?: VswitchUplink[] | cdktf.IResolvable;
}
export interface VswitchUplink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#name Vswitch#name}
  */
  readonly name: string;
}

export function vswitchUplinkToTerraform(struct?: VswitchUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vswitchUplinkToHclTerraform(struct?: VswitchUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VswitchUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VswitchUplink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VswitchUplink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class VswitchUplinkList extends cdktf.ComplexList {
  public internalValue? : VswitchUplink[] | cdktf.IResolvable

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
  public get(index: number): VswitchUplinkOutputReference {
    return new VswitchUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch esxi_vswitch}
*/
export class Vswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi_vswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vswitch to import
  * @param importFromId The id of the existing Vswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi_vswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/vswitch esxi_vswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VswitchConfig
  */
  public constructor(scope: Construct, id: string, config: VswitchConfig) {
    super(scope, id, {
      terraformResourceType: 'esxi_vswitch',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forgedTransmits = config.forgedTransmits;
    this._id = config.id;
    this._linkDiscoveryMode = config.linkDiscoveryMode;
    this._macChanges = config.macChanges;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ports = config.ports;
    this._promiscuousMode = config.promiscuousMode;
    this._uplink.internalValue = config.uplink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forged_transmits - computed: true, optional: true, required: false
  private _forgedTransmits?: boolean | cdktf.IResolvable; 
  public get forgedTransmits() {
    return this.getBooleanAttribute('forged_transmits');
  }
  public set forgedTransmits(value: boolean | cdktf.IResolvable) {
    this._forgedTransmits = value;
  }
  public resetForgedTransmits() {
    this._forgedTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgedTransmitsInput() {
    return this._forgedTransmits;
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

  // link_discovery_mode - computed: true, optional: true, required: false
  private _linkDiscoveryMode?: string; 
  public get linkDiscoveryMode() {
    return this.getStringAttribute('link_discovery_mode');
  }
  public set linkDiscoveryMode(value: string) {
    this._linkDiscoveryMode = value;
  }
  public resetLinkDiscoveryMode() {
    this._linkDiscoveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDiscoveryModeInput() {
    return this._linkDiscoveryMode;
  }

  // mac_changes - computed: true, optional: true, required: false
  private _macChanges?: boolean | cdktf.IResolvable; 
  public get macChanges() {
    return this.getBooleanAttribute('mac_changes');
  }
  public set macChanges(value: boolean | cdktf.IResolvable) {
    this._macChanges = value;
  }
  public resetMacChanges() {
    this._macChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangesInput() {
    return this._macChanges;
  }

  // mtu - computed: true, optional: true, required: false
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

  // ports - computed: true, optional: true, required: false
  private _ports?: number; 
  public get ports() {
    return this.getNumberAttribute('ports');
  }
  public set ports(value: number) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // promiscuous_mode - computed: true, optional: true, required: false
  private _promiscuousMode?: boolean | cdktf.IResolvable; 
  public get promiscuousMode() {
    return this.getBooleanAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: boolean | cdktf.IResolvable) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink = new VswitchUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: VswitchUplink[] | cdktf.IResolvable) {
    this._uplink.internalValue = value;
  }
  public resetUplink() {
    this._uplink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forged_transmits: cdktf.booleanToTerraform(this._forgedTransmits),
      id: cdktf.stringToTerraform(this._id),
      link_discovery_mode: cdktf.stringToTerraform(this._linkDiscoveryMode),
      mac_changes: cdktf.booleanToTerraform(this._macChanges),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ports: cdktf.numberToTerraform(this._ports),
      promiscuous_mode: cdktf.booleanToTerraform(this._promiscuousMode),
      uplink: cdktf.listMapper(vswitchUplinkToTerraform, true)(this._uplink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forged_transmits: {
        value: cdktf.booleanToHclTerraform(this._forgedTransmits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_discovery_mode: {
        value: cdktf.stringToHclTerraform(this._linkDiscoveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_changes: {
        value: cdktf.booleanToHclTerraform(this._macChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ports: {
        value: cdktf.numberToHclTerraform(this._ports),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      promiscuous_mode: {
        value: cdktf.booleanToHclTerraform(this._promiscuousMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uplink: {
        value: cdktf.listMapperHcl(vswitchUplinkToHclTerraform, true)(this._uplink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VswitchUplinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
