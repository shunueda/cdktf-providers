// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserNacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#category UserNacpolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#description UserNacpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#dynamic_sort_subtable UserNacpolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#ems_tag UserNacpolicy#ems_tag}
  */
  readonly emsTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#family UserNacpolicy#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#firewall_address UserNacpolicy#firewall_address}
  */
  readonly firewallAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#fortivoice_tag UserNacpolicy#fortivoice_tag}
  */
  readonly fortivoiceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#get_all_tables UserNacpolicy#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#host UserNacpolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#hw_vendor UserNacpolicy#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#hw_version UserNacpolicy#hw_version}
  */
  readonly hwVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#id UserNacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#mac UserNacpolicy#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#match_period UserNacpolicy#match_period}
  */
  readonly matchPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#match_remove UserNacpolicy#match_remove}
  */
  readonly matchRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#match_type UserNacpolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#name UserNacpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#os UserNacpolicy#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#src UserNacpolicy#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#ssid_policy UserNacpolicy#ssid_policy}
  */
  readonly ssidPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#status UserNacpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#sw_version UserNacpolicy#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_auto_auth UserNacpolicy#switch_auto_auth}
  */
  readonly switchAutoAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_fortilink UserNacpolicy#switch_fortilink}
  */
  readonly switchFortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_mac_policy UserNacpolicy#switch_mac_policy}
  */
  readonly switchMacPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_port_policy UserNacpolicy#switch_port_policy}
  */
  readonly switchPortPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#type UserNacpolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#user UserNacpolicy#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#user_group UserNacpolicy#user_group}
  */
  readonly userGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#vdomparam UserNacpolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#severity UserNacpolicy#severity}
  */
  readonly severity?: UserNacpolicySeverity[] | cdktf.IResolvable;
  /**
  * switch_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_group UserNacpolicy#switch_group}
  */
  readonly switchGroup?: UserNacpolicySwitchGroup[] | cdktf.IResolvable;
  /**
  * switch_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_scope UserNacpolicy#switch_scope}
  */
  readonly switchScope?: UserNacpolicySwitchScope[] | cdktf.IResolvable;
}
export interface UserNacpolicySeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#severity_num UserNacpolicy#severity_num}
  */
  readonly severityNum?: number;
}

export function userNacpolicySeverityToTerraform(struct?: UserNacpolicySeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity_num: cdktf.numberToTerraform(struct!.severityNum),
  }
}


export function userNacpolicySeverityToHclTerraform(struct?: UserNacpolicySeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity_num: {
      value: cdktf.numberToHclTerraform(struct!.severityNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserNacpolicySeverityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserNacpolicySeverity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severityNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityNum = this._severityNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserNacpolicySeverity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._severityNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._severityNum = value.severityNum;
    }
  }

  // severity_num - computed: false, optional: true, required: false
  private _severityNum?: number; 
  public get severityNum() {
    return this.getNumberAttribute('severity_num');
  }
  public set severityNum(value: number) {
    this._severityNum = value;
  }
  public resetSeverityNum() {
    this._severityNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityNumInput() {
    return this._severityNum;
  }
}

export class UserNacpolicySeverityList extends cdktf.ComplexList {
  public internalValue? : UserNacpolicySeverity[] | cdktf.IResolvable

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
  public get(index: number): UserNacpolicySeverityOutputReference {
    return new UserNacpolicySeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserNacpolicySwitchGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#name UserNacpolicy#name}
  */
  readonly name?: string;
}

export function userNacpolicySwitchGroupToTerraform(struct?: UserNacpolicySwitchGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userNacpolicySwitchGroupToHclTerraform(struct?: UserNacpolicySwitchGroup | cdktf.IResolvable): any {
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

export class UserNacpolicySwitchGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserNacpolicySwitchGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserNacpolicySwitchGroup | cdktf.IResolvable | undefined) {
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

export class UserNacpolicySwitchGroupList extends cdktf.ComplexList {
  public internalValue? : UserNacpolicySwitchGroup[] | cdktf.IResolvable

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
  public get(index: number): UserNacpolicySwitchGroupOutputReference {
    return new UserNacpolicySwitchGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserNacpolicySwitchScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#switch_id UserNacpolicy#switch_id}
  */
  readonly switchId?: string;
}

export function userNacpolicySwitchScopeToTerraform(struct?: UserNacpolicySwitchScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch_id: cdktf.stringToTerraform(struct!.switchId),
  }
}


export function userNacpolicySwitchScopeToHclTerraform(struct?: UserNacpolicySwitchScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch_id: {
      value: cdktf.stringToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserNacpolicySwitchScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserNacpolicySwitchScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserNacpolicySwitchScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._switchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._switchId = value.switchId;
    }
  }

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }
}

export class UserNacpolicySwitchScopeList extends cdktf.ComplexList {
  public internalValue? : UserNacpolicySwitchScope[] | cdktf.IResolvable

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
  public get(index: number): UserNacpolicySwitchScopeOutputReference {
    return new UserNacpolicySwitchScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy fortios_user_nacpolicy}
*/
export class UserNacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_nacpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserNacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserNacpolicy to import
  * @param importFromId The id of the existing UserNacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserNacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_nacpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_nacpolicy fortios_user_nacpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserNacpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserNacpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_nacpolicy',
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
    this._category = config.category;
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emsTag = config.emsTag;
    this._family = config.family;
    this._firewallAddress = config.firewallAddress;
    this._fortivoiceTag = config.fortivoiceTag;
    this._getAllTables = config.fetchAllTables;
    this._host = config.host;
    this._hwVendor = config.hwVendor;
    this._hwVersion = config.hwVersion;
    this._id = config.id;
    this._mac = config.mac;
    this._matchPeriod = config.matchPeriod;
    this._matchRemove = config.matchRemove;
    this._matchType = config.matchType;
    this._name = config.name;
    this._os = config.os;
    this._src = config.src;
    this._ssidPolicy = config.ssidPolicy;
    this._status = config.status;
    this._swVersion = config.swVersion;
    this._switchAutoAuth = config.switchAutoAuth;
    this._switchFortilink = config.switchFortilink;
    this._switchMacPolicy = config.switchMacPolicy;
    this._switchPortPolicy = config.switchPortPolicy;
    this._type = config.type;
    this._user = config.user;
    this._userGroup = config.userGroup;
    this._vdomparam = config.vdomparam;
    this._severity.internalValue = config.severity;
    this._switchGroup.internalValue = config.switchGroup;
    this._switchScope.internalValue = config.switchScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ems_tag - computed: false, optional: true, required: false
  private _emsTag?: string; 
  public get emsTag() {
    return this.getStringAttribute('ems_tag');
  }
  public set emsTag(value: string) {
    this._emsTag = value;
  }
  public resetEmsTag() {
    this._emsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsTagInput() {
    return this._emsTag;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // firewall_address - computed: false, optional: true, required: false
  private _firewallAddress?: string; 
  public get firewallAddress() {
    return this.getStringAttribute('firewall_address');
  }
  public set firewallAddress(value: string) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // fortivoice_tag - computed: false, optional: true, required: false
  private _fortivoiceTag?: string; 
  public get fortivoiceTag() {
    return this.getStringAttribute('fortivoice_tag');
  }
  public set fortivoiceTag(value: string) {
    this._fortivoiceTag = value;
  }
  public resetFortivoiceTag() {
    this._fortivoiceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortivoiceTagInput() {
    return this._fortivoiceTag;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
  }

  // hw_version - computed: false, optional: true, required: false
  private _hwVersion?: string; 
  public get hwVersion() {
    return this.getStringAttribute('hw_version');
  }
  public set hwVersion(value: string) {
    this._hwVersion = value;
  }
  public resetHwVersion() {
    this._hwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVersionInput() {
    return this._hwVersion;
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

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_period - computed: false, optional: true, required: false
  private _matchPeriod?: number; 
  public get matchPeriod() {
    return this.getNumberAttribute('match_period');
  }
  public set matchPeriod(value: number) {
    this._matchPeriod = value;
  }
  public resetMatchPeriod() {
    this._matchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPeriodInput() {
    return this._matchPeriod;
  }

  // match_remove - computed: true, optional: true, required: false
  private _matchRemove?: string; 
  public get matchRemove() {
    return this.getStringAttribute('match_remove');
  }
  public set matchRemove(value: string) {
    this._matchRemove = value;
  }
  public resetMatchRemove() {
    this._matchRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRemoveInput() {
    return this._matchRemove;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // ssid_policy - computed: false, optional: true, required: false
  private _ssidPolicy?: string; 
  public get ssidPolicy() {
    return this.getStringAttribute('ssid_policy');
  }
  public set ssidPolicy(value: string) {
    this._ssidPolicy = value;
  }
  public resetSsidPolicy() {
    this._ssidPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidPolicyInput() {
    return this._ssidPolicy;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
  }

  // switch_auto_auth - computed: true, optional: true, required: false
  private _switchAutoAuth?: string; 
  public get switchAutoAuth() {
    return this.getStringAttribute('switch_auto_auth');
  }
  public set switchAutoAuth(value: string) {
    this._switchAutoAuth = value;
  }
  public resetSwitchAutoAuth() {
    this._switchAutoAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchAutoAuthInput() {
    return this._switchAutoAuth;
  }

  // switch_fortilink - computed: true, optional: true, required: false
  private _switchFortilink?: string; 
  public get switchFortilink() {
    return this.getStringAttribute('switch_fortilink');
  }
  public set switchFortilink(value: string) {
    this._switchFortilink = value;
  }
  public resetSwitchFortilink() {
    this._switchFortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchFortilinkInput() {
    return this._switchFortilink;
  }

  // switch_mac_policy - computed: false, optional: true, required: false
  private _switchMacPolicy?: string; 
  public get switchMacPolicy() {
    return this.getStringAttribute('switch_mac_policy');
  }
  public set switchMacPolicy(value: string) {
    this._switchMacPolicy = value;
  }
  public resetSwitchMacPolicy() {
    this._switchMacPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMacPolicyInput() {
    return this._switchMacPolicy;
  }

  // switch_port_policy - computed: false, optional: true, required: false
  private _switchPortPolicy?: string; 
  public get switchPortPolicy() {
    return this.getStringAttribute('switch_port_policy');
  }
  public set switchPortPolicy(value: string) {
    this._switchPortPolicy = value;
  }
  public resetSwitchPortPolicy() {
    this._switchPortPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortPolicyInput() {
    return this._switchPortPolicy;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
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

  // severity - computed: false, optional: true, required: false
  private _severity = new UserNacpolicySeverityList(this, "severity", true);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: UserNacpolicySeverity[] | cdktf.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // switch_group - computed: false, optional: true, required: false
  private _switchGroup = new UserNacpolicySwitchGroupList(this, "switch_group", true);
  public get switchGroup() {
    return this._switchGroup;
  }
  public putSwitchGroup(value: UserNacpolicySwitchGroup[] | cdktf.IResolvable) {
    this._switchGroup.internalValue = value;
  }
  public resetSwitchGroup() {
    this._switchGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchGroupInput() {
    return this._switchGroup.internalValue;
  }

  // switch_scope - computed: false, optional: true, required: false
  private _switchScope = new UserNacpolicySwitchScopeList(this, "switch_scope", true);
  public get switchScope() {
    return this._switchScope;
  }
  public putSwitchScope(value: UserNacpolicySwitchScope[] | cdktf.IResolvable) {
    this._switchScope.internalValue = value;
  }
  public resetSwitchScope() {
    this._switchScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchScopeInput() {
    return this._switchScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      ems_tag: cdktf.stringToTerraform(this._emsTag),
      family: cdktf.stringToTerraform(this._family),
      firewall_address: cdktf.stringToTerraform(this._firewallAddress),
      fortivoice_tag: cdktf.stringToTerraform(this._fortivoiceTag),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      host: cdktf.stringToTerraform(this._host),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      hw_version: cdktf.stringToTerraform(this._hwVersion),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      match_period: cdktf.numberToTerraform(this._matchPeriod),
      match_remove: cdktf.stringToTerraform(this._matchRemove),
      match_type: cdktf.stringToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      src: cdktf.stringToTerraform(this._src),
      ssid_policy: cdktf.stringToTerraform(this._ssidPolicy),
      status: cdktf.stringToTerraform(this._status),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      switch_auto_auth: cdktf.stringToTerraform(this._switchAutoAuth),
      switch_fortilink: cdktf.stringToTerraform(this._switchFortilink),
      switch_mac_policy: cdktf.stringToTerraform(this._switchMacPolicy),
      switch_port_policy: cdktf.stringToTerraform(this._switchPortPolicy),
      type: cdktf.stringToTerraform(this._type),
      user: cdktf.stringToTerraform(this._user),
      user_group: cdktf.stringToTerraform(this._userGroup),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      severity: cdktf.listMapper(userNacpolicySeverityToTerraform, true)(this._severity.internalValue),
      switch_group: cdktf.listMapper(userNacpolicySwitchGroupToTerraform, true)(this._switchGroup.internalValue),
      switch_scope: cdktf.listMapper(userNacpolicySwitchScopeToTerraform, true)(this._switchScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ems_tag: {
        value: cdktf.stringToHclTerraform(this._emsTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_address: {
        value: cdktf.stringToHclTerraform(this._firewallAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortivoice_tag: {
        value: cdktf.stringToHclTerraform(this._fortivoiceTag),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_vendor: {
        value: cdktf.stringToHclTerraform(this._hwVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_version: {
        value: cdktf.stringToHclTerraform(this._hwVersion),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_period: {
        value: cdktf.numberToHclTerraform(this._matchPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_remove: {
        value: cdktf.stringToHclTerraform(this._matchRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_policy: {
        value: cdktf.stringToHclTerraform(this._ssidPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_version: {
        value: cdktf.stringToHclTerraform(this._swVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_auto_auth: {
        value: cdktf.stringToHclTerraform(this._switchAutoAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_fortilink: {
        value: cdktf.stringToHclTerraform(this._switchFortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_mac_policy: {
        value: cdktf.stringToHclTerraform(this._switchMacPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_port_policy: {
        value: cdktf.stringToHclTerraform(this._switchPortPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group: {
        value: cdktf.stringToHclTerraform(this._userGroup),
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
      severity: {
        value: cdktf.listMapperHcl(userNacpolicySeverityToHclTerraform, true)(this._severity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserNacpolicySeverityList",
      },
      switch_group: {
        value: cdktf.listMapperHcl(userNacpolicySwitchGroupToHclTerraform, true)(this._switchGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserNacpolicySwitchGroupList",
      },
      switch_scope: {
        value: cdktf.listMapperHcl(userNacpolicySwitchScopeToHclTerraform, true)(this._switchScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserNacpolicySwitchScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
