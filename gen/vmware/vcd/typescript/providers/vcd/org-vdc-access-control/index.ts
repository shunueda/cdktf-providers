// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVdcAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access level when the VDC is shared with everyone (only ReadOnly is available). Required when shared_with_everyone is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#everyone_access_level OrgVdcAccessControl#everyone_access_level}
  */
  readonly everyoneAccessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#id OrgVdcAccessControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#org OrgVdcAccessControl#org}
  */
  readonly org?: string;
  /**
  * Whether the VDC is shared with everyone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#shared_with_everyone OrgVdcAccessControl#shared_with_everyone}
  */
  readonly sharedWithEveryone: boolean | cdktf.IResolvable;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#vdc OrgVdcAccessControl#vdc}
  */
  readonly vdc?: string;
  /**
  * shared_with block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#shared_with OrgVdcAccessControl#shared_with}
  */
  readonly sharedWith?: OrgVdcAccessControlSharedWith[] | cdktf.IResolvable;
}
export interface OrgVdcAccessControlSharedWith {
  /**
  * The access level for the user or group to which we are sharing. (Only ReadOnly is available)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#access_level OrgVdcAccessControl#access_level}
  */
  readonly accessLevel: string;
  /**
  * ID of the group to which we are sharing. Required if user_id is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#group_id OrgVdcAccessControl#group_id}
  */
  readonly groupId?: string;
  /**
  * ID of the user to which we are sharing. Required if group_id is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#user_id OrgVdcAccessControl#user_id}
  */
  readonly userId?: string;
}

export function orgVdcAccessControlSharedWithToTerraform(struct?: OrgVdcAccessControlSharedWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function orgVdcAccessControlSharedWithToHclTerraform(struct?: OrgVdcAccessControlSharedWith | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcAccessControlSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVdcAccessControlSharedWith | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcAccessControlSharedWith | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._groupId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class OrgVdcAccessControlSharedWithList extends cdktf.ComplexList {
  public internalValue? : OrgVdcAccessControlSharedWith[] | cdktf.IResolvable

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
  public get(index: number): OrgVdcAccessControlSharedWithOutputReference {
    return new OrgVdcAccessControlSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control vcd_org_vdc_access_control}
*/
export class OrgVdcAccessControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVdcAccessControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVdcAccessControl to import
  * @param importFromId The id of the existing OrgVdcAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVdcAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_access_control vcd_org_vdc_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVdcAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: OrgVdcAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_vdc_access_control',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._everyoneAccessLevel = config.everyoneAccessLevel;
    this._id = config.id;
    this._org = config.org;
    this._sharedWithEveryone = config.sharedWithEveryone;
    this._vdc = config.vdc;
    this._sharedWith.internalValue = config.sharedWith;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // everyone_access_level - computed: false, optional: true, required: false
  private _everyoneAccessLevel?: string; 
  public get everyoneAccessLevel() {
    return this.getStringAttribute('everyone_access_level');
  }
  public set everyoneAccessLevel(value: string) {
    this._everyoneAccessLevel = value;
  }
  public resetEveryoneAccessLevel() {
    this._everyoneAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneAccessLevelInput() {
    return this._everyoneAccessLevel;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // shared_with_everyone - computed: false, optional: false, required: true
  private _sharedWithEveryone?: boolean | cdktf.IResolvable; 
  public get sharedWithEveryone() {
    return this.getBooleanAttribute('shared_with_everyone');
  }
  public set sharedWithEveryone(value: boolean | cdktf.IResolvable) {
    this._sharedWithEveryone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithEveryoneInput() {
    return this._sharedWithEveryone;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // shared_with - computed: false, optional: true, required: false
  private _sharedWith = new OrgVdcAccessControlSharedWithList(this, "shared_with", true);
  public get sharedWith() {
    return this._sharedWith;
  }
  public putSharedWith(value: OrgVdcAccessControlSharedWith[] | cdktf.IResolvable) {
    this._sharedWith.internalValue = value;
  }
  public resetSharedWith() {
    this._sharedWith.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithInput() {
    return this._sharedWith.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      everyone_access_level: cdktf.stringToTerraform(this._everyoneAccessLevel),
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      shared_with_everyone: cdktf.booleanToTerraform(this._sharedWithEveryone),
      vdc: cdktf.stringToTerraform(this._vdc),
      shared_with: cdktf.listMapper(orgVdcAccessControlSharedWithToTerraform, true)(this._sharedWith.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      everyone_access_level: {
        value: cdktf.stringToHclTerraform(this._everyoneAccessLevel),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_with_everyone: {
        value: cdktf.booleanToHclTerraform(this._sharedWithEveryone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_with: {
        value: cdktf.listMapperHcl(orgVdcAccessControlSharedWithToHclTerraform, true)(this._sharedWith.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgVdcAccessControlSharedWithList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
