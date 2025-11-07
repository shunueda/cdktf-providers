// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#auth SwitchcontrollerVlan#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#color SwitchcontrollerVlan#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#comments SwitchcontrollerVlan#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#dynamic_sort_subtable SwitchcontrollerVlan#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#get_all_tables SwitchcontrollerVlan#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#id SwitchcontrollerVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#name SwitchcontrollerVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#portal_message_override_group SwitchcontrollerVlan#portal_message_override_group}
  */
  readonly portalMessageOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#radius_server SwitchcontrollerVlan#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#security SwitchcontrollerVlan#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#usergroup SwitchcontrollerVlan#usergroup}
  */
  readonly usergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#vdom SwitchcontrollerVlan#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#vdomparam SwitchcontrollerVlan#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#vlanid SwitchcontrollerVlan#vlanid}
  */
  readonly vlanid?: number;
  /**
  * portal_message_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#portal_message_overrides SwitchcontrollerVlan#portal_message_overrides}
  */
  readonly portalMessageOverrides?: SwitchcontrollerVlanPortalMessageOverrides;
  /**
  * selected_usergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#selected_usergroups SwitchcontrollerVlan#selected_usergroups}
  */
  readonly selectedUsergroups?: SwitchcontrollerVlanSelectedUsergroups[] | cdktf.IResolvable;
}
export interface SwitchcontrollerVlanPortalMessageOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#auth_disclaimer_page SwitchcontrollerVlan#auth_disclaimer_page}
  */
  readonly authDisclaimerPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#auth_login_failed_page SwitchcontrollerVlan#auth_login_failed_page}
  */
  readonly authLoginFailedPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#auth_login_page SwitchcontrollerVlan#auth_login_page}
  */
  readonly authLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#auth_reject_page SwitchcontrollerVlan#auth_reject_page}
  */
  readonly authRejectPage?: string;
}

export function switchcontrollerVlanPortalMessageOverridesToTerraform(struct?: SwitchcontrollerVlanPortalMessageOverridesOutputReference | SwitchcontrollerVlanPortalMessageOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_disclaimer_page: cdktf.stringToTerraform(struct!.authDisclaimerPage),
    auth_login_failed_page: cdktf.stringToTerraform(struct!.authLoginFailedPage),
    auth_login_page: cdktf.stringToTerraform(struct!.authLoginPage),
    auth_reject_page: cdktf.stringToTerraform(struct!.authRejectPage),
  }
}


export function switchcontrollerVlanPortalMessageOverridesToHclTerraform(struct?: SwitchcontrollerVlanPortalMessageOverridesOutputReference | SwitchcontrollerVlanPortalMessageOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_disclaimer_page: {
      value: cdktf.stringToHclTerraform(struct!.authDisclaimerPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_login_failed_page: {
      value: cdktf.stringToHclTerraform(struct!.authLoginFailedPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_login_page: {
      value: cdktf.stringToHclTerraform(struct!.authLoginPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_reject_page: {
      value: cdktf.stringToHclTerraform(struct!.authRejectPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerVlanPortalMessageOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerVlanPortalMessageOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authDisclaimerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authDisclaimerPage = this._authDisclaimerPage;
    }
    if (this._authLoginFailedPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLoginFailedPage = this._authLoginFailedPage;
    }
    if (this._authLoginPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLoginPage = this._authLoginPage;
    }
    if (this._authRejectPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRejectPage = this._authRejectPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerVlanPortalMessageOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authDisclaimerPage = undefined;
      this._authLoginFailedPage = undefined;
      this._authLoginPage = undefined;
      this._authRejectPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authDisclaimerPage = value.authDisclaimerPage;
      this._authLoginFailedPage = value.authLoginFailedPage;
      this._authLoginPage = value.authLoginPage;
      this._authRejectPage = value.authRejectPage;
    }
  }

  // auth_disclaimer_page - computed: false, optional: true, required: false
  private _authDisclaimerPage?: string; 
  public get authDisclaimerPage() {
    return this.getStringAttribute('auth_disclaimer_page');
  }
  public set authDisclaimerPage(value: string) {
    this._authDisclaimerPage = value;
  }
  public resetAuthDisclaimerPage() {
    this._authDisclaimerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDisclaimerPageInput() {
    return this._authDisclaimerPage;
  }

  // auth_login_failed_page - computed: false, optional: true, required: false
  private _authLoginFailedPage?: string; 
  public get authLoginFailedPage() {
    return this.getStringAttribute('auth_login_failed_page');
  }
  public set authLoginFailedPage(value: string) {
    this._authLoginFailedPage = value;
  }
  public resetAuthLoginFailedPage() {
    this._authLoginFailedPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginFailedPageInput() {
    return this._authLoginFailedPage;
  }

  // auth_login_page - computed: false, optional: true, required: false
  private _authLoginPage?: string; 
  public get authLoginPage() {
    return this.getStringAttribute('auth_login_page');
  }
  public set authLoginPage(value: string) {
    this._authLoginPage = value;
  }
  public resetAuthLoginPage() {
    this._authLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginPageInput() {
    return this._authLoginPage;
  }

  // auth_reject_page - computed: false, optional: true, required: false
  private _authRejectPage?: string; 
  public get authRejectPage() {
    return this.getStringAttribute('auth_reject_page');
  }
  public set authRejectPage(value: string) {
    this._authRejectPage = value;
  }
  public resetAuthRejectPage() {
    this._authRejectPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRejectPageInput() {
    return this._authRejectPage;
  }
}
export interface SwitchcontrollerVlanSelectedUsergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#name SwitchcontrollerVlan#name}
  */
  readonly name?: string;
}

export function switchcontrollerVlanSelectedUsergroupsToTerraform(struct?: SwitchcontrollerVlanSelectedUsergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollerVlanSelectedUsergroupsToHclTerraform(struct?: SwitchcontrollerVlanSelectedUsergroups | cdktf.IResolvable): any {
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

export class SwitchcontrollerVlanSelectedUsergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerVlanSelectedUsergroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerVlanSelectedUsergroups | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class SwitchcontrollerVlanSelectedUsergroupsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerVlanSelectedUsergroups[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerVlanSelectedUsergroupsOutputReference {
    return new SwitchcontrollerVlanSelectedUsergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan fortios_switchcontroller_vlan}
*/
export class SwitchcontrollerVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerVlan to import
  * @param importFromId The id of the existing SwitchcontrollerVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_vlan fortios_switchcontroller_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerVlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerVlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_vlan',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth = config.auth;
    this._color = config.color;
    this._comments = config.comments;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._portalMessageOverrideGroup = config.portalMessageOverrideGroup;
    this._radiusServer = config.radiusServer;
    this._security = config.security;
    this._usergroup = config.usergroup;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._vlanid = config.vlanid;
    this._portalMessageOverrides.internalValue = config.portalMessageOverrides;
    this._selectedUsergroups.internalValue = config.selectedUsergroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // portal_message_override_group - computed: false, optional: true, required: false
  private _portalMessageOverrideGroup?: string; 
  public get portalMessageOverrideGroup() {
    return this.getStringAttribute('portal_message_override_group');
  }
  public set portalMessageOverrideGroup(value: string) {
    this._portalMessageOverrideGroup = value;
  }
  public resetPortalMessageOverrideGroup() {
    this._portalMessageOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalMessageOverrideGroupInput() {
    return this._portalMessageOverrideGroup;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup?: string; 
  public get usergroup() {
    return this.getStringAttribute('usergroup');
  }
  public set usergroup(value: string) {
    this._usergroup = value;
  }
  public resetUsergroup() {
    this._usergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // portal_message_overrides - computed: false, optional: true, required: false
  private _portalMessageOverrides = new SwitchcontrollerVlanPortalMessageOverridesOutputReference(this, "portal_message_overrides");
  public get portalMessageOverrides() {
    return this._portalMessageOverrides;
  }
  public putPortalMessageOverrides(value: SwitchcontrollerVlanPortalMessageOverrides) {
    this._portalMessageOverrides.internalValue = value;
  }
  public resetPortalMessageOverrides() {
    this._portalMessageOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalMessageOverridesInput() {
    return this._portalMessageOverrides.internalValue;
  }

  // selected_usergroups - computed: false, optional: true, required: false
  private _selectedUsergroups = new SwitchcontrollerVlanSelectedUsergroupsList(this, "selected_usergroups", false);
  public get selectedUsergroups() {
    return this._selectedUsergroups;
  }
  public putSelectedUsergroups(value: SwitchcontrollerVlanSelectedUsergroups[] | cdktf.IResolvable) {
    this._selectedUsergroups.internalValue = value;
  }
  public resetSelectedUsergroups() {
    this._selectedUsergroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedUsergroupsInput() {
    return this._selectedUsergroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      color: cdktf.numberToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      portal_message_override_group: cdktf.stringToTerraform(this._portalMessageOverrideGroup),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      security: cdktf.stringToTerraform(this._security),
      usergroup: cdktf.stringToTerraform(this._usergroup),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      portal_message_overrides: switchcontrollerVlanPortalMessageOverridesToTerraform(this._portalMessageOverrides.internalValue),
      selected_usergroups: cdktf.listMapper(switchcontrollerVlanSelectedUsergroupsToTerraform, true)(this._selectedUsergroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_message_override_group: {
        value: cdktf.stringToHclTerraform(this._portalMessageOverrideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usergroup: {
        value: cdktf.stringToHclTerraform(this._usergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanid: {
        value: cdktf.numberToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      portal_message_overrides: {
        value: switchcontrollerVlanPortalMessageOverridesToHclTerraform(this._portalMessageOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerVlanPortalMessageOverridesList",
      },
      selected_usergroups: {
        value: cdktf.listMapperHcl(switchcontrollerVlanSelectedUsergroupsToHclTerraform, true)(this._selectedUsergroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerVlanSelectedUsergroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
