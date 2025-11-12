// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSsoRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#name OrgSsoRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#org_id OrgSsoRole#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#privileges OrgSsoRole#privileges}
  */
  readonly privileges: OrgSsoRolePrivileges[] | cdktf.IResolvable;
}
export interface OrgSsoRolePrivileges {
  /**
  * access permissions. enum: `admin`, `helpdesk`, `installer`, `read`, `write`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#role OrgSsoRole#role}
  */
  readonly role: string;
  /**
  * enum: `org`, `site`, `sitegroup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#scope OrgSsoRole#scope}
  */
  readonly scope: string;
  /**
  * Required if `scope`==`site`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#site_id OrgSsoRole#site_id}
  */
  readonly siteId?: string;
  /**
  * Required if `scope`==`sitegroup`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#sitegroup_id OrgSsoRole#sitegroup_id}
  */
  readonly sitegroupId?: string;
  /**
  * Custom roles restrict Org users to specific UI views. This is useful for limiting UI access of Org users. Custom roles restrict Org users to specific UI views. This is useful for limiting UI access of Org users.  
  * You can define custom roles by adding the `views` attribute along with `role` when assigning privileges.  
  * Below are the list of supported UI views. Note that this is UI only feature.  
  * 
  *   | UI View | Required Role | Description |
  *   | --- | --- | --- |
  *   | `reporting` | `read` | full access to all analytics tools |
  *   | `marketing` | `read` | can view analytics and location maps |
  *   | `super_observer` | `read` | can view all the organization except the subscription page |
  *   | `location` | `write` | can view and manage location maps, can view analytics |
  *   | `security` | `write` | can view and manage site labels, policies and security |
  *   | `switch_admin` | `helpdesk` | can view and manage Switch ports, can view wired clients |
  *   | `mxedge_admin` | `admin` | can view and manage Mist edges and Mist tunnels |
  *   | `lobby_admin` | `admin` | full access to Org and Site Pre-shared keys |
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#views OrgSsoRole#views}
  */
  readonly views?: string[];
}

export function orgSsoRolePrivilegesToTerraform(struct?: OrgSsoRolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    scope: cdktf.stringToTerraform(struct!.scope),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    sitegroup_id: cdktf.stringToTerraform(struct!.sitegroupId),
    views: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.views),
  }
}


export function orgSsoRolePrivilegesToHclTerraform(struct?: OrgSsoRolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sitegroup_id: {
      value: cdktf.stringToHclTerraform(struct!.sitegroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    views: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.views),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSsoRolePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSsoRolePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._sitegroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitegroupId = this._sitegroupId;
    }
    if (this._views !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSsoRolePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._scope = undefined;
      this._siteId = undefined;
      this._sitegroupId = undefined;
      this._views = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._scope = value.scope;
      this._siteId = value.siteId;
      this._sitegroupId = value.sitegroupId;
      this._views = value.views;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // sitegroup_id - computed: false, optional: true, required: false
  private _sitegroupId?: string; 
  public get sitegroupId() {
    return this.getStringAttribute('sitegroup_id');
  }
  public set sitegroupId(value: string) {
    this._sitegroupId = value;
  }
  public resetSitegroupId() {
    this._sitegroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdInput() {
    return this._sitegroupId;
  }

  // views - computed: true, optional: true, required: false
  private _views?: string[]; 
  public get views() {
    return this.getListAttribute('views');
  }
  public set views(value: string[]) {
    this._views = value;
  }
  public resetViews() {
    this._views = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views;
  }
}

export class OrgSsoRolePrivilegesList extends cdktf.ComplexList {
  public internalValue? : OrgSsoRolePrivileges[] | cdktf.IResolvable

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
  public get(index: number): OrgSsoRolePrivilegesOutputReference {
    return new OrgSsoRolePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role mist_org_sso_role}
*/
export class OrgSsoRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_sso_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgSsoRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgSsoRole to import
  * @param importFromId The id of the existing OrgSsoRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgSsoRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_sso_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_sso_role mist_org_sso_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSsoRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OrgSsoRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_sso_role',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._orgId = config.orgId;
    this._privileges.internalValue = config.privileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges = new OrgSsoRolePrivilegesList(this, "privileges", false);
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: OrgSsoRolePrivileges[] | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      privileges: cdktf.listMapper(orgSsoRolePrivilegesToTerraform, false)(this._privileges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(orgSsoRolePrivilegesToHclTerraform, false)(this._privileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgSsoRolePrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
