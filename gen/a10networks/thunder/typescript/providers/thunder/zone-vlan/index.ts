// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneVlanAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#id ZoneVlanA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#uuid ZoneVlanA#uuid}
  */
  readonly uuid?: string;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#zone_name ZoneVlanA#zone_name}
  */
  readonly zoneName: string;
  /**
  * vlan_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#vlan_list ZoneVlanA#vlan_list}
  */
  readonly vlanList?: ZoneVlanVlanListStructA[] | cdktf.IResolvable;
}
export interface ZoneVlanVlanListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#vlan_end ZoneVlanA#vlan_end}
  */
  readonly vlanEnd?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#vlan_start ZoneVlanA#vlan_start}
  */
  readonly vlanStart?: number;
}

export function zoneVlanVlanListStructAToTerraform(struct?: ZoneVlanVlanListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_end: cdktf.numberToTerraform(struct!.vlanEnd),
    vlan_start: cdktf.numberToTerraform(struct!.vlanStart),
  }
}


export function zoneVlanVlanListStructAToHclTerraform(struct?: ZoneVlanVlanListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_end: {
      value: cdktf.numberToHclTerraform(struct!.vlanEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_start: {
      value: cdktf.numberToHclTerraform(struct!.vlanStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneVlanVlanListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneVlanVlanListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanEnd = this._vlanEnd;
    }
    if (this._vlanStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanStart = this._vlanStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneVlanVlanListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanEnd = undefined;
      this._vlanStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanEnd = value.vlanEnd;
      this._vlanStart = value.vlanStart;
    }
  }

  // vlan_end - computed: false, optional: true, required: false
  private _vlanEnd?: number; 
  public get vlanEnd() {
    return this.getNumberAttribute('vlan_end');
  }
  public set vlanEnd(value: number) {
    this._vlanEnd = value;
  }
  public resetVlanEnd() {
    this._vlanEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEndInput() {
    return this._vlanEnd;
  }

  // vlan_start - computed: false, optional: true, required: false
  private _vlanStart?: number; 
  public get vlanStart() {
    return this.getNumberAttribute('vlan_start');
  }
  public set vlanStart(value: number) {
    this._vlanStart = value;
  }
  public resetVlanStart() {
    this._vlanStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStartInput() {
    return this._vlanStart;
  }
}

export class ZoneVlanVlanListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneVlanVlanListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneVlanVlanListStructAOutputReference {
    return new ZoneVlanVlanListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan thunder_zone_vlan}
*/
export class ZoneVlanA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_zone_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneVlanA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneVlanA to import
  * @param importFromId The id of the existing ZoneVlanA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneVlanA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_zone_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/zone_vlan thunder_zone_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneVlanAConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneVlanAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_zone_vlan',
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
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._vlanList.internalValue = config.vlanList;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // vlan_list - computed: false, optional: true, required: false
  private _vlanList = new ZoneVlanVlanListStructAList(this, "vlan_list", false);
  public get vlanList() {
    return this._vlanList;
  }
  public putVlanList(value: ZoneVlanVlanListStructA[] | cdktf.IResolvable) {
    this._vlanList.internalValue = value;
  }
  public resetVlanList() {
    this._vlanList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      vlan_list: cdktf.listMapper(zoneVlanVlanListStructAToTerraform, true)(this._vlanList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_list: {
        value: cdktf.listMapperHcl(zoneVlanVlanListStructAToHclTerraform, true)(this._vlanList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneVlanVlanListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
