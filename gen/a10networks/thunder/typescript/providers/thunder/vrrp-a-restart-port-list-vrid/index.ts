// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpARestartPortListVridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#id VrrpARestartPortListVrid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#user_tag VrrpARestartPortListVrid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#uuid VrrpARestartPortListVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#vrid_val VrrpARestartPortListVrid#vrid_val}
  */
  readonly vridVal: number;
  /**
  * ethernet_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#ethernet_cfg VrrpARestartPortListVrid#ethernet_cfg}
  */
  readonly ethernetCfg?: VrrpARestartPortListVridEthernetCfg[] | cdktf.IResolvable;
}
export interface VrrpARestartPortListVridEthernetCfg {
  /**
  * Ethernet Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#flap_ethernet_end VrrpARestartPortListVrid#flap_ethernet_end}
  */
  readonly flapEthernetEnd?: number;
  /**
  * Ethernet Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#flap_ethernet_start VrrpARestartPortListVrid#flap_ethernet_start}
  */
  readonly flapEthernetStart?: number;
}

export function vrrpARestartPortListVridEthernetCfgToTerraform(struct?: VrrpARestartPortListVridEthernetCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flap_ethernet_end: cdktf.numberToTerraform(struct!.flapEthernetEnd),
    flap_ethernet_start: cdktf.numberToTerraform(struct!.flapEthernetStart),
  }
}


export function vrrpARestartPortListVridEthernetCfgToHclTerraform(struct?: VrrpARestartPortListVridEthernetCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flap_ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.flapEthernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.flapEthernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpARestartPortListVridEthernetCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpARestartPortListVridEthernetCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flapEthernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapEthernetEnd = this._flapEthernetEnd;
    }
    if (this._flapEthernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapEthernetStart = this._flapEthernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpARestartPortListVridEthernetCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flapEthernetEnd = undefined;
      this._flapEthernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flapEthernetEnd = value.flapEthernetEnd;
      this._flapEthernetStart = value.flapEthernetStart;
    }
  }

  // flap_ethernet_end - computed: false, optional: true, required: false
  private _flapEthernetEnd?: number; 
  public get flapEthernetEnd() {
    return this.getNumberAttribute('flap_ethernet_end');
  }
  public set flapEthernetEnd(value: number) {
    this._flapEthernetEnd = value;
  }
  public resetFlapEthernetEnd() {
    this._flapEthernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapEthernetEndInput() {
    return this._flapEthernetEnd;
  }

  // flap_ethernet_start - computed: false, optional: true, required: false
  private _flapEthernetStart?: number; 
  public get flapEthernetStart() {
    return this.getNumberAttribute('flap_ethernet_start');
  }
  public set flapEthernetStart(value: number) {
    this._flapEthernetStart = value;
  }
  public resetFlapEthernetStart() {
    this._flapEthernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapEthernetStartInput() {
    return this._flapEthernetStart;
  }
}

export class VrrpARestartPortListVridEthernetCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpARestartPortListVridEthernetCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpARestartPortListVridEthernetCfgOutputReference {
    return new VrrpARestartPortListVridEthernetCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid thunder_vrrp_a_restart_port_list_vrid}
*/
export class VrrpARestartPortListVrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_restart_port_list_vrid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpARestartPortListVrid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpARestartPortListVrid to import
  * @param importFromId The id of the existing VrrpARestartPortListVrid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpARestartPortListVrid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_restart_port_list_vrid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_restart_port_list_vrid thunder_vrrp_a_restart_port_list_vrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpARestartPortListVridConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpARestartPortListVridConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_restart_port_list_vrid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vridVal = config.vridVal;
    this._ethernetCfg.internalValue = config.ethernetCfg;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: number; 
  public get vridVal() {
    return this.getNumberAttribute('vrid_val');
  }
  public set vridVal(value: number) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // ethernet_cfg - computed: false, optional: true, required: false
  private _ethernetCfg = new VrrpARestartPortListVridEthernetCfgList(this, "ethernet_cfg", false);
  public get ethernetCfg() {
    return this._ethernetCfg;
  }
  public putEthernetCfg(value: VrrpARestartPortListVridEthernetCfg[] | cdktf.IResolvable) {
    this._ethernetCfg.internalValue = value;
  }
  public resetEthernetCfg() {
    this._ethernetCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetCfgInput() {
    return this._ethernetCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_val: cdktf.numberToTerraform(this._vridVal),
      ethernet_cfg: cdktf.listMapper(vrrpARestartPortListVridEthernetCfgToTerraform, true)(this._ethernetCfg.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      vrid_val: {
        value: cdktf.numberToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet_cfg: {
        value: cdktf.listMapperHcl(vrrpARestartPortListVridEthernetCfgToHclTerraform, true)(this._ethernetCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpARestartPortListVridEthernetCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
