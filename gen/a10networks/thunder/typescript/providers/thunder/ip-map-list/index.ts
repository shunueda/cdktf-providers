// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMapListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create/Edit a IP Map List stored as a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#file IpMapList#file}
  */
  readonly file?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#id IpMapList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the IP Map List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#name IpMapList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#user_tag IpMapList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#uuid IpMapList#uuid}
  */
  readonly uuid?: string;
  /**
  * mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#mapping_list IpMapList#mapping_list}
  */
  readonly mappingList?: IpMapListMappingListStruct[] | cdktf.IResolvable;
}
export interface IpMapListMappingListStruct {
  /**
  * Number of addresses to be translated in this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#count1 IpMapList#count1}
  */
  readonly count1?: number;
  /**
  * Global Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#global_start_ip IpMapList#global_start_ip}
  */
  readonly globalStartIp?: string;
  /**
  * Local Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#local_start_ip IpMapList#local_start_ip}
  */
  readonly localStartIp?: string;
}

export function ipMapListMappingListStructToTerraform(struct?: IpMapListMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count1: cdktf.numberToTerraform(struct!.count1),
    global_start_ip: cdktf.stringToTerraform(struct!.globalStartIp),
    local_start_ip: cdktf.stringToTerraform(struct!.localStartIp),
  }
}


export function ipMapListMappingListStructToHclTerraform(struct?: IpMapListMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count1: {
      value: cdktf.numberToHclTerraform(struct!.count1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_start_ip: {
      value: cdktf.stringToHclTerraform(struct!.globalStartIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_start_ip: {
      value: cdktf.stringToHclTerraform(struct!.localStartIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpMapListMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpMapListMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.count1 = this._count1;
    }
    if (this._globalStartIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalStartIp = this._globalStartIp;
    }
    if (this._localStartIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStartIp = this._localStartIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpMapListMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count1 = undefined;
      this._globalStartIp = undefined;
      this._localStartIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count1 = value.count1;
      this._globalStartIp = value.globalStartIp;
      this._localStartIp = value.localStartIp;
    }
  }

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

  // global_start_ip - computed: false, optional: true, required: false
  private _globalStartIp?: string; 
  public get globalStartIp() {
    return this.getStringAttribute('global_start_ip');
  }
  public set globalStartIp(value: string) {
    this._globalStartIp = value;
  }
  public resetGlobalStartIp() {
    this._globalStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalStartIpInput() {
    return this._globalStartIp;
  }

  // local_start_ip - computed: false, optional: true, required: false
  private _localStartIp?: string; 
  public get localStartIp() {
    return this.getStringAttribute('local_start_ip');
  }
  public set localStartIp(value: string) {
    this._localStartIp = value;
  }
  public resetLocalStartIp() {
    this._localStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStartIpInput() {
    return this._localStartIp;
  }
}

export class IpMapListMappingListStructList extends cdktf.ComplexList {
  public internalValue? : IpMapListMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpMapListMappingListStructOutputReference {
    return new IpMapListMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list thunder_ip_map_list}
*/
export class IpMapList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_map_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMapList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMapList to import
  * @param importFromId The id of the existing IpMapList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMapList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_map_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_map_list thunder_ip_map_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMapListConfig
  */
  public constructor(scope: Construct, id: string, config: IpMapListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_map_list',
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
    this._file = config.file;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._mappingList.internalValue = config.mappingList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file - computed: false, optional: true, required: false
  private _file?: number; 
  public get file() {
    return this.getNumberAttribute('file');
  }
  public set file(value: number) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // mapping_list - computed: false, optional: true, required: false
  private _mappingList = new IpMapListMappingListStructList(this, "mapping_list", false);
  public get mappingList() {
    return this._mappingList;
  }
  public putMappingList(value: IpMapListMappingListStruct[] | cdktf.IResolvable) {
    this._mappingList.internalValue = value;
  }
  public resetMappingList() {
    this._mappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingListInput() {
    return this._mappingList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.numberToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      mapping_list: cdktf.listMapper(ipMapListMappingListStructToTerraform, true)(this._mappingList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.numberToHclTerraform(this._file),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      mapping_list: {
        value: cdktf.listMapperHcl(ipMapListMappingListStructToHclTerraform, true)(this._mappingList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpMapListMappingListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
