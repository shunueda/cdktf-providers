// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAuthportalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#dynamic_sort_subtable FirewallAuthportal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#get_all_tables FirewallAuthportal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#id FirewallAuthportal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#identity_based_route FirewallAuthportal#identity_based_route}
  */
  readonly identityBasedRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#portal_addr FirewallAuthportal#portal_addr}
  */
  readonly portalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#portal_addr6 FirewallAuthportal#portal_addr6}
  */
  readonly portalAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#proxy_auth FirewallAuthportal#proxy_auth}
  */
  readonly proxyAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#vdomparam FirewallAuthportal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#groups FirewallAuthportal#groups}
  */
  readonly groups?: FirewallAuthportalGroups[] | cdktf.IResolvable;
}
export interface FirewallAuthportalGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#name FirewallAuthportal#name}
  */
  readonly name?: string;
}

export function firewallAuthportalGroupsToTerraform(struct?: FirewallAuthportalGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallAuthportalGroupsToHclTerraform(struct?: FirewallAuthportalGroups | cdktf.IResolvable): any {
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

export class FirewallAuthportalGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAuthportalGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallAuthportalGroups | cdktf.IResolvable | undefined) {
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

export class FirewallAuthportalGroupsList extends cdktf.ComplexList {
  public internalValue? : FirewallAuthportalGroups[] | cdktf.IResolvable

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
  public get(index: number): FirewallAuthportalGroupsOutputReference {
    return new FirewallAuthportalGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal fortios_firewall_authportal}
*/
export class FirewallAuthportal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_authportal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAuthportal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAuthportal to import
  * @param importFromId The id of the existing FirewallAuthportal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAuthportal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_authportal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_authportal fortios_firewall_authportal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAuthportalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallAuthportalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_authportal',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._identityBasedRoute = config.identityBasedRoute;
    this._portalAddr = config.portalAddr;
    this._portalAddr6 = config.portalAddr6;
    this._proxyAuth = config.proxyAuth;
    this._vdomparam = config.vdomparam;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_based_route - computed: false, optional: true, required: false
  private _identityBasedRoute?: string; 
  public get identityBasedRoute() {
    return this.getStringAttribute('identity_based_route');
  }
  public set identityBasedRoute(value: string) {
    this._identityBasedRoute = value;
  }
  public resetIdentityBasedRoute() {
    this._identityBasedRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityBasedRouteInput() {
    return this._identityBasedRoute;
  }

  // portal_addr - computed: false, optional: true, required: false
  private _portalAddr?: string; 
  public get portalAddr() {
    return this.getStringAttribute('portal_addr');
  }
  public set portalAddr(value: string) {
    this._portalAddr = value;
  }
  public resetPortalAddr() {
    this._portalAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAddrInput() {
    return this._portalAddr;
  }

  // portal_addr6 - computed: false, optional: true, required: false
  private _portalAddr6?: string; 
  public get portalAddr6() {
    return this.getStringAttribute('portal_addr6');
  }
  public set portalAddr6(value: string) {
    this._portalAddr6 = value;
  }
  public resetPortalAddr6() {
    this._portalAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAddr6Input() {
    return this._portalAddr6;
  }

  // proxy_auth - computed: true, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
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

  // groups - computed: false, optional: true, required: false
  private _groups = new FirewallAuthportalGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: FirewallAuthportalGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      identity_based_route: cdktf.stringToTerraform(this._identityBasedRoute),
      portal_addr: cdktf.stringToTerraform(this._portalAddr),
      portal_addr6: cdktf.stringToTerraform(this._portalAddr6),
      proxy_auth: cdktf.stringToTerraform(this._proxyAuth),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      groups: cdktf.listMapper(firewallAuthportalGroupsToTerraform, true)(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      identity_based_route: {
        value: cdktf.stringToHclTerraform(this._identityBasedRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_addr: {
        value: cdktf.stringToHclTerraform(this._portalAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_addr6: {
        value: cdktf.stringToHclTerraform(this._portalAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_auth: {
        value: cdktf.stringToHclTerraform(this._proxyAuth),
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
      groups: {
        value: cdktf.listMapperHcl(firewallAuthportalGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallAuthportalGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
