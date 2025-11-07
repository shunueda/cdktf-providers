// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkBpduFwdGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#bpdu_fwd_group_number NetworkBpduFwdGroup#bpdu_fwd_group_number}
  */
  readonly bpduFwdGroupNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#id NetworkBpduFwdGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#user_tag NetworkBpduFwdGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#uuid NetworkBpduFwdGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * ethernet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#ethernet_list NetworkBpduFwdGroup#ethernet_list}
  */
  readonly ethernetList?: NetworkBpduFwdGroupEthernetListStruct[] | cdktf.IResolvable;
}
export interface NetworkBpduFwdGroupEthernetListStruct {
  /**
  * Ethernet Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#ethernet_end NetworkBpduFwdGroup#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet Port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#ethernet_start NetworkBpduFwdGroup#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function networkBpduFwdGroupEthernetListStructToTerraform(struct?: NetworkBpduFwdGroupEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function networkBpduFwdGroupEthernetListStructToHclTerraform(struct?: NetworkBpduFwdGroupEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBpduFwdGroupEthernetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkBpduFwdGroupEthernetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBpduFwdGroupEthernetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class NetworkBpduFwdGroupEthernetListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkBpduFwdGroupEthernetListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkBpduFwdGroupEthernetListStructOutputReference {
    return new NetworkBpduFwdGroupEthernetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group thunder_network_bpdu_fwd_group}
*/
export class NetworkBpduFwdGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_bpdu_fwd_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkBpduFwdGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkBpduFwdGroup to import
  * @param importFromId The id of the existing NetworkBpduFwdGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkBpduFwdGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_bpdu_fwd_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bpdu_fwd_group thunder_network_bpdu_fwd_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkBpduFwdGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkBpduFwdGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_bpdu_fwd_group',
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
    this._bpduFwdGroupNumber = config.bpduFwdGroupNumber;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ethernetList.internalValue = config.ethernetList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bpdu_fwd_group_number - computed: false, optional: false, required: true
  private _bpduFwdGroupNumber?: number; 
  public get bpduFwdGroupNumber() {
    return this.getNumberAttribute('bpdu_fwd_group_number');
  }
  public set bpduFwdGroupNumber(value: number) {
    this._bpduFwdGroupNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFwdGroupNumberInput() {
    return this._bpduFwdGroupNumber;
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

  // ethernet_list - computed: false, optional: true, required: false
  private _ethernetList = new NetworkBpduFwdGroupEthernetListStructList(this, "ethernet_list", false);
  public get ethernetList() {
    return this._ethernetList;
  }
  public putEthernetList(value: NetworkBpduFwdGroupEthernetListStruct[] | cdktf.IResolvable) {
    this._ethernetList.internalValue = value;
  }
  public resetEthernetList() {
    this._ethernetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetListInput() {
    return this._ethernetList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bpdu_fwd_group_number: cdktf.numberToTerraform(this._bpduFwdGroupNumber),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ethernet_list: cdktf.listMapper(networkBpduFwdGroupEthernetListStructToTerraform, true)(this._ethernetList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bpdu_fwd_group_number: {
        value: cdktf.numberToHclTerraform(this._bpduFwdGroupNumber),
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
      ethernet_list: {
        value: cdktf.listMapperHcl(networkBpduFwdGroupEthernetListStructToHclTerraform, true)(this._ethernetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkBpduFwdGroupEthernetListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
