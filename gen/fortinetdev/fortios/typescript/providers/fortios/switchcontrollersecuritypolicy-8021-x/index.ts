// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Switchcontrollersecuritypolicy8021XConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#auth_fail_vlan Switchcontrollersecuritypolicy8021X#auth_fail_vlan}
  */
  readonly authFailVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#auth_fail_vlan_id Switchcontrollersecuritypolicy8021X#auth_fail_vlan_id}
  */
  readonly authFailVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#auth_fail_vlanid Switchcontrollersecuritypolicy8021X#auth_fail_vlanid}
  */
  readonly authFailVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#auth_order Switchcontrollersecuritypolicy8021X#auth_order}
  */
  readonly authOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#auth_priority Switchcontrollersecuritypolicy8021X#auth_priority}
  */
  readonly authPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#authserver_timeout_period Switchcontrollersecuritypolicy8021X#authserver_timeout_period}
  */
  readonly authserverTimeoutPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#authserver_timeout_tagged Switchcontrollersecuritypolicy8021X#authserver_timeout_tagged}
  */
  readonly authserverTimeoutTagged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#authserver_timeout_tagged_vlanid Switchcontrollersecuritypolicy8021X#authserver_timeout_tagged_vlanid}
  */
  readonly authserverTimeoutTaggedVlanid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#authserver_timeout_vlan Switchcontrollersecuritypolicy8021X#authserver_timeout_vlan}
  */
  readonly authserverTimeoutVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#authserver_timeout_vlanid Switchcontrollersecuritypolicy8021X#authserver_timeout_vlanid}
  */
  readonly authserverTimeoutVlanid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#dacl Switchcontrollersecuritypolicy8021X#dacl}
  */
  readonly dacl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#dynamic_sort_subtable Switchcontrollersecuritypolicy8021X#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#eap_auto_untagged_vlans Switchcontrollersecuritypolicy8021X#eap_auto_untagged_vlans}
  */
  readonly eapAutoUntaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#eap_passthru Switchcontrollersecuritypolicy8021X#eap_passthru}
  */
  readonly eapPassthru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#framevid_apply Switchcontrollersecuritypolicy8021X#framevid_apply}
  */
  readonly framevidApply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#get_all_tables Switchcontrollersecuritypolicy8021X#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#guest_auth_delay Switchcontrollersecuritypolicy8021X#guest_auth_delay}
  */
  readonly guestAuthDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#guest_vlan Switchcontrollersecuritypolicy8021X#guest_vlan}
  */
  readonly guestVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#guest_vlan_id Switchcontrollersecuritypolicy8021X#guest_vlan_id}
  */
  readonly guestVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#guest_vlanid Switchcontrollersecuritypolicy8021X#guest_vlanid}
  */
  readonly guestVlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#id Switchcontrollersecuritypolicy8021X#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#mac_auth_bypass Switchcontrollersecuritypolicy8021X#mac_auth_bypass}
  */
  readonly macAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#name Switchcontrollersecuritypolicy8021X#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#open_auth Switchcontrollersecuritypolicy8021X#open_auth}
  */
  readonly openAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#policy_type Switchcontrollersecuritypolicy8021X#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#radius_timeout_overwrite Switchcontrollersecuritypolicy8021X#radius_timeout_overwrite}
  */
  readonly radiusTimeoutOverwrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#security_mode Switchcontrollersecuritypolicy8021X#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#vdomparam Switchcontrollersecuritypolicy8021X#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * user_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#user_group Switchcontrollersecuritypolicy8021X#user_group}
  */
  readonly userGroup?: Switchcontrollersecuritypolicy8021XUserGroup[] | cdktf.IResolvable;
}
export interface Switchcontrollersecuritypolicy8021XUserGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#name Switchcontrollersecuritypolicy8021X#name}
  */
  readonly name?: string;
}

export function switchcontrollersecuritypolicy8021XUserGroupToTerraform(struct?: Switchcontrollersecuritypolicy8021XUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollersecuritypolicy8021XUserGroupToHclTerraform(struct?: Switchcontrollersecuritypolicy8021XUserGroup | cdktf.IResolvable): any {
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

export class Switchcontrollersecuritypolicy8021XUserGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Switchcontrollersecuritypolicy8021XUserGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Switchcontrollersecuritypolicy8021XUserGroup | cdktf.IResolvable | undefined) {
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

export class Switchcontrollersecuritypolicy8021XUserGroupList extends cdktf.ComplexList {
  public internalValue? : Switchcontrollersecuritypolicy8021XUserGroup[] | cdktf.IResolvable

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
  public get(index: number): Switchcontrollersecuritypolicy8021XUserGroupOutputReference {
    return new Switchcontrollersecuritypolicy8021XUserGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x fortios_switchcontrollersecuritypolicy_8021X}
*/
export class Switchcontrollersecuritypolicy8021X extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontrollersecuritypolicy_8021X";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Switchcontrollersecuritypolicy8021X resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Switchcontrollersecuritypolicy8021X to import
  * @param importFromId The id of the existing Switchcontrollersecuritypolicy8021X that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Switchcontrollersecuritypolicy8021X to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontrollersecuritypolicy_8021X", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollersecuritypolicy_8021_x fortios_switchcontrollersecuritypolicy_8021X} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Switchcontrollersecuritypolicy8021XConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Switchcontrollersecuritypolicy8021XConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontrollersecuritypolicy_8021X',
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
    this._authFailVlan = config.authFailVlan;
    this._authFailVlanId = config.authFailVlanId;
    this._authFailVlanid = config.authFailVlanid;
    this._authOrder = config.authOrder;
    this._authPriority = config.authPriority;
    this._authserverTimeoutPeriod = config.authserverTimeoutPeriod;
    this._authserverTimeoutTagged = config.authserverTimeoutTagged;
    this._authserverTimeoutTaggedVlanid = config.authserverTimeoutTaggedVlanid;
    this._authserverTimeoutVlan = config.authserverTimeoutVlan;
    this._authserverTimeoutVlanid = config.authserverTimeoutVlanid;
    this._dacl = config.dacl;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eapAutoUntaggedVlans = config.eapAutoUntaggedVlans;
    this._eapPassthru = config.eapPassthru;
    this._framevidApply = config.framevidApply;
    this._getAllTables = config.fetchAllTables;
    this._guestAuthDelay = config.guestAuthDelay;
    this._guestVlan = config.guestVlan;
    this._guestVlanId = config.guestVlanId;
    this._guestVlanid = config.guestVlanid;
    this._id = config.id;
    this._macAuthBypass = config.macAuthBypass;
    this._name = config.name;
    this._openAuth = config.openAuth;
    this._policyType = config.policyType;
    this._radiusTimeoutOverwrite = config.radiusTimeoutOverwrite;
    this._securityMode = config.securityMode;
    this._vdomparam = config.vdomparam;
    this._userGroup.internalValue = config.userGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_fail_vlan - computed: true, optional: true, required: false
  private _authFailVlan?: string; 
  public get authFailVlan() {
    return this.getStringAttribute('auth_fail_vlan');
  }
  public set authFailVlan(value: string) {
    this._authFailVlan = value;
  }
  public resetAuthFailVlan() {
    this._authFailVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanInput() {
    return this._authFailVlan;
  }

  // auth_fail_vlan_id - computed: false, optional: true, required: false
  private _authFailVlanId?: string; 
  public get authFailVlanId() {
    return this.getStringAttribute('auth_fail_vlan_id');
  }
  public set authFailVlanId(value: string) {
    this._authFailVlanId = value;
  }
  public resetAuthFailVlanId() {
    this._authFailVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanIdInput() {
    return this._authFailVlanId;
  }

  // auth_fail_vlanid - computed: false, optional: true, required: false
  private _authFailVlanid?: number; 
  public get authFailVlanid() {
    return this.getNumberAttribute('auth_fail_vlanid');
  }
  public set authFailVlanid(value: number) {
    this._authFailVlanid = value;
  }
  public resetAuthFailVlanid() {
    this._authFailVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailVlanidInput() {
    return this._authFailVlanid;
  }

  // auth_order - computed: true, optional: true, required: false
  private _authOrder?: string; 
  public get authOrder() {
    return this.getStringAttribute('auth_order');
  }
  public set authOrder(value: string) {
    this._authOrder = value;
  }
  public resetAuthOrder() {
    this._authOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOrderInput() {
    return this._authOrder;
  }

  // auth_priority - computed: true, optional: true, required: false
  private _authPriority?: string; 
  public get authPriority() {
    return this.getStringAttribute('auth_priority');
  }
  public set authPriority(value: string) {
    this._authPriority = value;
  }
  public resetAuthPriority() {
    this._authPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPriorityInput() {
    return this._authPriority;
  }

  // authserver_timeout_period - computed: true, optional: true, required: false
  private _authserverTimeoutPeriod?: number; 
  public get authserverTimeoutPeriod() {
    return this.getNumberAttribute('authserver_timeout_period');
  }
  public set authserverTimeoutPeriod(value: number) {
    this._authserverTimeoutPeriod = value;
  }
  public resetAuthserverTimeoutPeriod() {
    this._authserverTimeoutPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutPeriodInput() {
    return this._authserverTimeoutPeriod;
  }

  // authserver_timeout_tagged - computed: true, optional: true, required: false
  private _authserverTimeoutTagged?: string; 
  public get authserverTimeoutTagged() {
    return this.getStringAttribute('authserver_timeout_tagged');
  }
  public set authserverTimeoutTagged(value: string) {
    this._authserverTimeoutTagged = value;
  }
  public resetAuthserverTimeoutTagged() {
    this._authserverTimeoutTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedInput() {
    return this._authserverTimeoutTagged;
  }

  // authserver_timeout_tagged_vlanid - computed: false, optional: true, required: false
  private _authserverTimeoutTaggedVlanid?: string; 
  public get authserverTimeoutTaggedVlanid() {
    return this.getStringAttribute('authserver_timeout_tagged_vlanid');
  }
  public set authserverTimeoutTaggedVlanid(value: string) {
    this._authserverTimeoutTaggedVlanid = value;
  }
  public resetAuthserverTimeoutTaggedVlanid() {
    this._authserverTimeoutTaggedVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutTaggedVlanidInput() {
    return this._authserverTimeoutTaggedVlanid;
  }

  // authserver_timeout_vlan - computed: true, optional: true, required: false
  private _authserverTimeoutVlan?: string; 
  public get authserverTimeoutVlan() {
    return this.getStringAttribute('authserver_timeout_vlan');
  }
  public set authserverTimeoutVlan(value: string) {
    this._authserverTimeoutVlan = value;
  }
  public resetAuthserverTimeoutVlan() {
    this._authserverTimeoutVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanInput() {
    return this._authserverTimeoutVlan;
  }

  // authserver_timeout_vlanid - computed: false, optional: true, required: false
  private _authserverTimeoutVlanid?: string; 
  public get authserverTimeoutVlanid() {
    return this.getStringAttribute('authserver_timeout_vlanid');
  }
  public set authserverTimeoutVlanid(value: string) {
    this._authserverTimeoutVlanid = value;
  }
  public resetAuthserverTimeoutVlanid() {
    this._authserverTimeoutVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authserverTimeoutVlanidInput() {
    return this._authserverTimeoutVlanid;
  }

  // dacl - computed: true, optional: true, required: false
  private _dacl?: string; 
  public get dacl() {
    return this.getStringAttribute('dacl');
  }
  public set dacl(value: string) {
    this._dacl = value;
  }
  public resetDacl() {
    this._dacl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daclInput() {
    return this._dacl;
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

  // eap_auto_untagged_vlans - computed: true, optional: true, required: false
  private _eapAutoUntaggedVlans?: string; 
  public get eapAutoUntaggedVlans() {
    return this.getStringAttribute('eap_auto_untagged_vlans');
  }
  public set eapAutoUntaggedVlans(value: string) {
    this._eapAutoUntaggedVlans = value;
  }
  public resetEapAutoUntaggedVlans() {
    this._eapAutoUntaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAutoUntaggedVlansInput() {
    return this._eapAutoUntaggedVlans;
  }

  // eap_passthru - computed: true, optional: true, required: false
  private _eapPassthru?: string; 
  public get eapPassthru() {
    return this.getStringAttribute('eap_passthru');
  }
  public set eapPassthru(value: string) {
    this._eapPassthru = value;
  }
  public resetEapPassthru() {
    this._eapPassthru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPassthruInput() {
    return this._eapPassthru;
  }

  // framevid_apply - computed: true, optional: true, required: false
  private _framevidApply?: string; 
  public get framevidApply() {
    return this.getStringAttribute('framevid_apply');
  }
  public set framevidApply(value: string) {
    this._framevidApply = value;
  }
  public resetFramevidApply() {
    this._framevidApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framevidApplyInput() {
    return this._framevidApply;
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

  // guest_auth_delay - computed: true, optional: true, required: false
  private _guestAuthDelay?: number; 
  public get guestAuthDelay() {
    return this.getNumberAttribute('guest_auth_delay');
  }
  public set guestAuthDelay(value: number) {
    this._guestAuthDelay = value;
  }
  public resetGuestAuthDelay() {
    this._guestAuthDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthDelayInput() {
    return this._guestAuthDelay;
  }

  // guest_vlan - computed: true, optional: true, required: false
  private _guestVlan?: string; 
  public get guestVlan() {
    return this.getStringAttribute('guest_vlan');
  }
  public set guestVlan(value: string) {
    this._guestVlan = value;
  }
  public resetGuestVlan() {
    this._guestVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanInput() {
    return this._guestVlan;
  }

  // guest_vlan_id - computed: false, optional: true, required: false
  private _guestVlanId?: string; 
  public get guestVlanId() {
    return this.getStringAttribute('guest_vlan_id');
  }
  public set guestVlanId(value: string) {
    this._guestVlanId = value;
  }
  public resetGuestVlanId() {
    this._guestVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanIdInput() {
    return this._guestVlanId;
  }

  // guest_vlanid - computed: false, optional: true, required: false
  private _guestVlanid?: number; 
  public get guestVlanid() {
    return this.getNumberAttribute('guest_vlanid');
  }
  public set guestVlanid(value: number) {
    this._guestVlanid = value;
  }
  public resetGuestVlanid() {
    this._guestVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanidInput() {
    return this._guestVlanid;
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

  // mac_auth_bypass - computed: true, optional: true, required: false
  private _macAuthBypass?: string; 
  public get macAuthBypass() {
    return this.getStringAttribute('mac_auth_bypass');
  }
  public set macAuthBypass(value: string) {
    this._macAuthBypass = value;
  }
  public resetMacAuthBypass() {
    this._macAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthBypassInput() {
    return this._macAuthBypass;
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

  // open_auth - computed: true, optional: true, required: false
  private _openAuth?: string; 
  public get openAuth() {
    return this.getStringAttribute('open_auth');
  }
  public set openAuth(value: string) {
    this._openAuth = value;
  }
  public resetOpenAuth() {
    this._openAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAuthInput() {
    return this._openAuth;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // radius_timeout_overwrite - computed: true, optional: true, required: false
  private _radiusTimeoutOverwrite?: string; 
  public get radiusTimeoutOverwrite() {
    return this.getStringAttribute('radius_timeout_overwrite');
  }
  public set radiusTimeoutOverwrite(value: string) {
    this._radiusTimeoutOverwrite = value;
  }
  public resetRadiusTimeoutOverwrite() {
    this._radiusTimeoutOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTimeoutOverwriteInput() {
    return this._radiusTimeoutOverwrite;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
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

  // user_group - computed: false, optional: true, required: false
  private _userGroup = new Switchcontrollersecuritypolicy8021XUserGroupList(this, "user_group", true);
  public get userGroup() {
    return this._userGroup;
  }
  public putUserGroup(value: Switchcontrollersecuritypolicy8021XUserGroup[] | cdktf.IResolvable) {
    this._userGroup.internalValue = value;
  }
  public resetUserGroup() {
    this._userGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_fail_vlan: cdktf.stringToTerraform(this._authFailVlan),
      auth_fail_vlan_id: cdktf.stringToTerraform(this._authFailVlanId),
      auth_fail_vlanid: cdktf.numberToTerraform(this._authFailVlanid),
      auth_order: cdktf.stringToTerraform(this._authOrder),
      auth_priority: cdktf.stringToTerraform(this._authPriority),
      authserver_timeout_period: cdktf.numberToTerraform(this._authserverTimeoutPeriod),
      authserver_timeout_tagged: cdktf.stringToTerraform(this._authserverTimeoutTagged),
      authserver_timeout_tagged_vlanid: cdktf.stringToTerraform(this._authserverTimeoutTaggedVlanid),
      authserver_timeout_vlan: cdktf.stringToTerraform(this._authserverTimeoutVlan),
      authserver_timeout_vlanid: cdktf.stringToTerraform(this._authserverTimeoutVlanid),
      dacl: cdktf.stringToTerraform(this._dacl),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap_auto_untagged_vlans: cdktf.stringToTerraform(this._eapAutoUntaggedVlans),
      eap_passthru: cdktf.stringToTerraform(this._eapPassthru),
      framevid_apply: cdktf.stringToTerraform(this._framevidApply),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      guest_auth_delay: cdktf.numberToTerraform(this._guestAuthDelay),
      guest_vlan: cdktf.stringToTerraform(this._guestVlan),
      guest_vlan_id: cdktf.stringToTerraform(this._guestVlanId),
      guest_vlanid: cdktf.numberToTerraform(this._guestVlanid),
      id: cdktf.stringToTerraform(this._id),
      mac_auth_bypass: cdktf.stringToTerraform(this._macAuthBypass),
      name: cdktf.stringToTerraform(this._name),
      open_auth: cdktf.stringToTerraform(this._openAuth),
      policy_type: cdktf.stringToTerraform(this._policyType),
      radius_timeout_overwrite: cdktf.stringToTerraform(this._radiusTimeoutOverwrite),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      user_group: cdktf.listMapper(switchcontrollersecuritypolicy8021XUserGroupToTerraform, true)(this._userGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_fail_vlan: {
        value: cdktf.stringToHclTerraform(this._authFailVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_fail_vlan_id: {
        value: cdktf.stringToHclTerraform(this._authFailVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_fail_vlanid: {
        value: cdktf.numberToHclTerraform(this._authFailVlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_order: {
        value: cdktf.stringToHclTerraform(this._authOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_priority: {
        value: cdktf.stringToHclTerraform(this._authPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_period: {
        value: cdktf.numberToHclTerraform(this._authserverTimeoutPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authserver_timeout_tagged: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutTagged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_tagged_vlanid: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutTaggedVlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_vlan: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authserver_timeout_vlanid: {
        value: cdktf.stringToHclTerraform(this._authserverTimeoutVlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dacl: {
        value: cdktf.stringToHclTerraform(this._dacl),
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
      eap_auto_untagged_vlans: {
        value: cdktf.stringToHclTerraform(this._eapAutoUntaggedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_passthru: {
        value: cdktf.stringToHclTerraform(this._eapPassthru),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framevid_apply: {
        value: cdktf.stringToHclTerraform(this._framevidApply),
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
      guest_auth_delay: {
        value: cdktf.numberToHclTerraform(this._guestAuthDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guest_vlan: {
        value: cdktf.stringToHclTerraform(this._guestVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_vlan_id: {
        value: cdktf.stringToHclTerraform(this._guestVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_vlanid: {
        value: cdktf.numberToHclTerraform(this._guestVlanid),
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
      mac_auth_bypass: {
        value: cdktf.stringToHclTerraform(this._macAuthBypass),
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
      open_auth: {
        value: cdktf.stringToHclTerraform(this._openAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_timeout_overwrite: {
        value: cdktf.stringToHclTerraform(this._radiusTimeoutOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
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
      user_group: {
        value: cdktf.listMapperHcl(switchcontrollersecuritypolicy8021XUserGroupToHclTerraform, true)(this._userGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Switchcontrollersecuritypolicy8021XUserGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
