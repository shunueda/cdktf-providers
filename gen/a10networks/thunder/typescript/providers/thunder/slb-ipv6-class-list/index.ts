// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbIpv6ClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#id SlbIpv6ClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the class list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#name SlbIpv6ClassList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#user_tag SlbIpv6ClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#ipv6_list SlbIpv6ClassList#ipv6_list}
  */
  readonly ipv6List?: SlbIpv6ClassListIpv6ListStruct[] | cdktf.IResolvable;
}
export interface SlbIpv6ClassListIpv6ListStruct {
  /**
  * 'add': Add the entry; 'delete': Delete the entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#action SlbIpv6ClassList#action}
  */
  readonly action?: string;
  /**
  * Use global Limit ID (Specify global LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#glid SlbIpv6ClassList#glid}
  */
  readonly glid?: string;
  /**
  * Specify IPv6 host or subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#ipv6_addr SlbIpv6ClassList#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Use Limit ID defined in template (Specify LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#lid SlbIpv6ClassList#lid}
  */
  readonly lid?: number;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#lsn_lid SlbIpv6ClassList#lsn_lid}
  */
  readonly lsnLid?: number;
  /**
  * LSN RADIUS Profile Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#lsn_radius_profile SlbIpv6ClassList#lsn_radius_profile}
  */
  readonly lsnRadiusProfile?: number;
}

export function slbIpv6ClassListIpv6ListStructToTerraform(struct?: SlbIpv6ClassListIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    glid: cdktf.stringToTerraform(struct!.glid),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    lid: cdktf.numberToTerraform(struct!.lid),
    lsn_lid: cdktf.numberToTerraform(struct!.lsnLid),
    lsn_radius_profile: cdktf.numberToTerraform(struct!.lsnRadiusProfile),
  }
}


export function slbIpv6ClassListIpv6ListStructToHclTerraform(struct?: SlbIpv6ClassListIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lid: {
      value: cdktf.numberToHclTerraform(struct!.lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.lsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_radius_profile: {
      value: cdktf.numberToHclTerraform(struct!.lsnRadiusProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbIpv6ClassListIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbIpv6ClassListIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lid = this._lid;
    }
    if (this._lsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnLid = this._lsnLid;
    }
    if (this._lsnRadiusProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnRadiusProfile = this._lsnRadiusProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbIpv6ClassListIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._glid = undefined;
      this._ipv6Addr = undefined;
      this._lid = undefined;
      this._lsnLid = undefined;
      this._lsnRadiusProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._glid = value.glid;
      this._ipv6Addr = value.ipv6Addr;
      this._lid = value.lid;
      this._lsnLid = value.lsnLid;
      this._lsnRadiusProfile = value.lsnRadiusProfile;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // lid - computed: false, optional: true, required: false
  private _lid?: number; 
  public get lid() {
    return this.getNumberAttribute('lid');
  }
  public set lid(value: number) {
    this._lid = value;
  }
  public resetLid() {
    this._lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidInput() {
    return this._lid;
  }

  // lsn_lid - computed: false, optional: true, required: false
  private _lsnLid?: number; 
  public get lsnLid() {
    return this.getNumberAttribute('lsn_lid');
  }
  public set lsnLid(value: number) {
    this._lsnLid = value;
  }
  public resetLsnLid() {
    this._lsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnLidInput() {
    return this._lsnLid;
  }

  // lsn_radius_profile - computed: false, optional: true, required: false
  private _lsnRadiusProfile?: number; 
  public get lsnRadiusProfile() {
    return this.getNumberAttribute('lsn_radius_profile');
  }
  public set lsnRadiusProfile(value: number) {
    this._lsnRadiusProfile = value;
  }
  public resetLsnRadiusProfile() {
    this._lsnRadiusProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnRadiusProfileInput() {
    return this._lsnRadiusProfile;
  }
}

export class SlbIpv6ClassListIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbIpv6ClassListIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbIpv6ClassListIpv6ListStructOutputReference {
    return new SlbIpv6ClassListIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list thunder_slb_ipv6_class_list}
*/
export class SlbIpv6ClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ipv6_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbIpv6ClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbIpv6ClassList to import
  * @param importFromId The id of the existing SlbIpv6ClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbIpv6ClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ipv6_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ipv6_class_list thunder_slb_ipv6_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbIpv6ClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbIpv6ClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ipv6_class_list',
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._ipv6List.internalValue = config.ipv6List;
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

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new SlbIpv6ClassListIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: SlbIpv6ClassListIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      ipv6_list: cdktf.listMapper(slbIpv6ClassListIpv6ListStructToTerraform, true)(this._ipv6List.internalValue),
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
      ipv6_list: {
        value: cdktf.listMapperHcl(slbIpv6ClassListIpv6ListStructToHclTerraform, true)(this._ipv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbIpv6ClassListIpv6ListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
