// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbServiceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dependency on site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#dependency_site GslbServiceGroup#dependency_site}
  */
  readonly dependencySite?: number;
  /**
  * Disable all members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#disable GslbServiceGroup#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#id GslbServiceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify aging-time, unit: min, default is 5 (Aging time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#persistent_aging_time GslbServiceGroup#persistent_aging_time}
  */
  readonly persistentAgingTime?: number;
  /**
  * Specify IPv6 mask length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#persistent_ipv6_mask GslbServiceGroup#persistent_ipv6_mask}
  */
  readonly persistentIpv6Mask?: number;
  /**
  * Specify IP mask, default is /32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#persistent_mask GslbServiceGroup#persistent_mask}
  */
  readonly persistentMask?: string;
  /**
  * Persistent based on site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#persistent_site GslbServiceGroup#persistent_site}
  */
  readonly persistentSite?: number;
  /**
  * Specify Service Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#service_group_name GslbServiceGroup#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#user_tag GslbServiceGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#uuid GslbServiceGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * disable_site_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#disable_site_list GslbServiceGroup#disable_site_list}
  */
  readonly disableSiteList?: GslbServiceGroupDisableSiteListStruct[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#member GslbServiceGroup#member}
  */
  readonly member?: GslbServiceGroupMember[] | cdktf.IResolvable;
}
export interface GslbServiceGroupDisableSiteListStruct {
  /**
  * Site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#disable_site GslbServiceGroup#disable_site}
  */
  readonly disableSite?: string;
}

export function gslbServiceGroupDisableSiteListStructToTerraform(struct?: GslbServiceGroupDisableSiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_site: cdktf.stringToTerraform(struct!.disableSite),
  }
}


export function gslbServiceGroupDisableSiteListStructToHclTerraform(struct?: GslbServiceGroupDisableSiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_site: {
      value: cdktf.stringToHclTerraform(struct!.disableSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbServiceGroupDisableSiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbServiceGroupDisableSiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSite = this._disableSite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbServiceGroupDisableSiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSite = value.disableSite;
    }
  }

  // disable_site - computed: false, optional: true, required: false
  private _disableSite?: string; 
  public get disableSite() {
    return this.getStringAttribute('disable_site');
  }
  public set disableSite(value: string) {
    this._disableSite = value;
  }
  public resetDisableSite() {
    this._disableSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSiteInput() {
    return this._disableSite;
  }
}

export class GslbServiceGroupDisableSiteListStructList extends cdktf.ComplexList {
  public internalValue? : GslbServiceGroupDisableSiteListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbServiceGroupDisableSiteListStructOutputReference {
    return new GslbServiceGroupDisableSiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbServiceGroupMember {
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#member_name GslbServiceGroup#member_name}
  */
  readonly memberName?: string;
}

export function gslbServiceGroupMemberToTerraform(struct?: GslbServiceGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function gslbServiceGroupMemberToHclTerraform(struct?: GslbServiceGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbServiceGroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbServiceGroupMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbServiceGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: false, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class GslbServiceGroupMemberList extends cdktf.ComplexList {
  public internalValue? : GslbServiceGroupMember[] | cdktf.IResolvable

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
  public get(index: number): GslbServiceGroupMemberOutputReference {
    return new GslbServiceGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group thunder_gslb_service_group}
*/
export class GslbServiceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_service_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbServiceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbServiceGroup to import
  * @param importFromId The id of the existing GslbServiceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbServiceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_service_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_service_group thunder_gslb_service_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbServiceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GslbServiceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_service_group',
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
    this._dependencySite = config.dependencySite;
    this._disable = config.disable;
    this._id = config.id;
    this._persistentAgingTime = config.persistentAgingTime;
    this._persistentIpv6Mask = config.persistentIpv6Mask;
    this._persistentMask = config.persistentMask;
    this._persistentSite = config.persistentSite;
    this._serviceGroupName = config.serviceGroupName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._disableSiteList.internalValue = config.disableSiteList;
    this._member.internalValue = config.member;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dependency_site - computed: false, optional: true, required: false
  private _dependencySite?: number; 
  public get dependencySite() {
    return this.getNumberAttribute('dependency_site');
  }
  public set dependencySite(value: number) {
    this._dependencySite = value;
  }
  public resetDependencySite() {
    this._dependencySite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencySiteInput() {
    return this._dependencySite;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // persistent_aging_time - computed: false, optional: true, required: false
  private _persistentAgingTime?: number; 
  public get persistentAgingTime() {
    return this.getNumberAttribute('persistent_aging_time');
  }
  public set persistentAgingTime(value: number) {
    this._persistentAgingTime = value;
  }
  public resetPersistentAgingTime() {
    this._persistentAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentAgingTimeInput() {
    return this._persistentAgingTime;
  }

  // persistent_ipv6_mask - computed: false, optional: true, required: false
  private _persistentIpv6Mask?: number; 
  public get persistentIpv6Mask() {
    return this.getNumberAttribute('persistent_ipv6_mask');
  }
  public set persistentIpv6Mask(value: number) {
    this._persistentIpv6Mask = value;
  }
  public resetPersistentIpv6Mask() {
    this._persistentIpv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentIpv6MaskInput() {
    return this._persistentIpv6Mask;
  }

  // persistent_mask - computed: false, optional: true, required: false
  private _persistentMask?: string; 
  public get persistentMask() {
    return this.getStringAttribute('persistent_mask');
  }
  public set persistentMask(value: string) {
    this._persistentMask = value;
  }
  public resetPersistentMask() {
    this._persistentMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentMaskInput() {
    return this._persistentMask;
  }

  // persistent_site - computed: false, optional: true, required: false
  private _persistentSite?: number; 
  public get persistentSite() {
    return this.getNumberAttribute('persistent_site');
  }
  public set persistentSite(value: number) {
    this._persistentSite = value;
  }
  public resetPersistentSite() {
    this._persistentSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentSiteInput() {
    return this._persistentSite;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
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

  // disable_site_list - computed: false, optional: true, required: false
  private _disableSiteList = new GslbServiceGroupDisableSiteListStructList(this, "disable_site_list", false);
  public get disableSiteList() {
    return this._disableSiteList;
  }
  public putDisableSiteList(value: GslbServiceGroupDisableSiteListStruct[] | cdktf.IResolvable) {
    this._disableSiteList.internalValue = value;
  }
  public resetDisableSiteList() {
    this._disableSiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSiteListInput() {
    return this._disableSiteList.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new GslbServiceGroupMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: GslbServiceGroupMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependency_site: cdktf.numberToTerraform(this._dependencySite),
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      persistent_aging_time: cdktf.numberToTerraform(this._persistentAgingTime),
      persistent_ipv6_mask: cdktf.numberToTerraform(this._persistentIpv6Mask),
      persistent_mask: cdktf.stringToTerraform(this._persistentMask),
      persistent_site: cdktf.numberToTerraform(this._persistentSite),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      disable_site_list: cdktf.listMapper(gslbServiceGroupDisableSiteListStructToTerraform, true)(this._disableSiteList.internalValue),
      member: cdktf.listMapper(gslbServiceGroupMemberToTerraform, true)(this._member.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependency_site: {
        value: cdktf.numberToHclTerraform(this._dependencySite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      persistent_aging_time: {
        value: cdktf.numberToHclTerraform(this._persistentAgingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_ipv6_mask: {
        value: cdktf.numberToHclTerraform(this._persistentIpv6Mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_mask: {
        value: cdktf.stringToHclTerraform(this._persistentMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_site: {
        value: cdktf.numberToHclTerraform(this._persistentSite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
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
      disable_site_list: {
        value: cdktf.listMapperHcl(gslbServiceGroupDisableSiteListStructToHclTerraform, true)(this._disableSiteList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbServiceGroupDisableSiteListStructList",
      },
      member: {
        value: cdktf.listMapperHcl(gslbServiceGroupMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbServiceGroupMemberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
