// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbIpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load IP List file (IP List filename)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#gslb_ip_list_filename GslbIpList#gslb_ip_list_filename}
  */
  readonly gslbIpListFilename?: string;
  /**
  * Specify IP List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#gslb_ip_list_obj_name GslbIpList#gslb_ip_list_obj_name}
  */
  readonly gslbIpListObjName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#id GslbIpList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#user_tag GslbIpList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#uuid GslbIpList#uuid}
  */
  readonly uuid?: string;
  /**
  * gslb_ip_list_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#gslb_ip_list_addr_list GslbIpList#gslb_ip_list_addr_list}
  */
  readonly gslbIpListAddrList?: GslbIpListGslbIpListAddrListStruct[] | cdktf.IResolvable;
}
export interface GslbIpListGslbIpListAddrListStruct {
  /**
  * ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#id1 GslbIpList#id1}
  */
  readonly id1?: number;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#ip GslbIpList#ip}
  */
  readonly ip?: string;
  /**
  * IP mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#ip_mask GslbIpList#ip_mask}
  */
  readonly ipMask?: string;
}

export function gslbIpListGslbIpListAddrListStructToTerraform(struct?: GslbIpListGslbIpListAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id1: cdktf.numberToTerraform(struct!.id1),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}


export function gslbIpListGslbIpListAddrListStructToHclTerraform(struct?: GslbIpListGslbIpListAddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbIpListGslbIpListAddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbIpListGslbIpListAddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbIpListGslbIpListAddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id1 = undefined;
      this._ip = undefined;
      this._ipMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id1 = value.id1;
      this._ip = value.ip;
      this._ipMask = value.ipMask;
    }
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_mask - computed: false, optional: true, required: false
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  public resetIpMask() {
    this._ipMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }
}

export class GslbIpListGslbIpListAddrListStructList extends cdktf.ComplexList {
  public internalValue? : GslbIpListGslbIpListAddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbIpListGslbIpListAddrListStructOutputReference {
    return new GslbIpListGslbIpListAddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list thunder_gslb_ip_list}
*/
export class GslbIpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbIpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbIpList to import
  * @param importFromId The id of the existing GslbIpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbIpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_ip_list thunder_gslb_ip_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbIpListConfig
  */
  public constructor(scope: Construct, id: string, config: GslbIpListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_ip_list',
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
    this._gslbIpListFilename = config.gslbIpListFilename;
    this._gslbIpListObjName = config.gslbIpListObjName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._gslbIpListAddrList.internalValue = config.gslbIpListAddrList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gslb_ip_list_filename - computed: false, optional: true, required: false
  private _gslbIpListFilename?: string; 
  public get gslbIpListFilename() {
    return this.getStringAttribute('gslb_ip_list_filename');
  }
  public set gslbIpListFilename(value: string) {
    this._gslbIpListFilename = value;
  }
  public resetGslbIpListFilename() {
    this._gslbIpListFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListFilenameInput() {
    return this._gslbIpListFilename;
  }

  // gslb_ip_list_obj_name - computed: false, optional: false, required: true
  private _gslbIpListObjName?: string; 
  public get gslbIpListObjName() {
    return this.getStringAttribute('gslb_ip_list_obj_name');
  }
  public set gslbIpListObjName(value: string) {
    this._gslbIpListObjName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListObjNameInput() {
    return this._gslbIpListObjName;
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

  // gslb_ip_list_addr_list - computed: false, optional: true, required: false
  private _gslbIpListAddrList = new GslbIpListGslbIpListAddrListStructList(this, "gslb_ip_list_addr_list", false);
  public get gslbIpListAddrList() {
    return this._gslbIpListAddrList;
  }
  public putGslbIpListAddrList(value: GslbIpListGslbIpListAddrListStruct[] | cdktf.IResolvable) {
    this._gslbIpListAddrList.internalValue = value;
  }
  public resetGslbIpListAddrList() {
    this._gslbIpListAddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListAddrListInput() {
    return this._gslbIpListAddrList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gslb_ip_list_filename: cdktf.stringToTerraform(this._gslbIpListFilename),
      gslb_ip_list_obj_name: cdktf.stringToTerraform(this._gslbIpListObjName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      gslb_ip_list_addr_list: cdktf.listMapper(gslbIpListGslbIpListAddrListStructToTerraform, true)(this._gslbIpListAddrList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gslb_ip_list_filename: {
        value: cdktf.stringToHclTerraform(this._gslbIpListFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_ip_list_obj_name: {
        value: cdktf.stringToHclTerraform(this._gslbIpListObjName),
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
      gslb_ip_list_addr_list: {
        value: cdktf.listMapperHcl(gslbIpListGslbIpListAddrListStructToHclTerraform, true)(this._gslbIpListAddrList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbIpListGslbIpListAddrListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
