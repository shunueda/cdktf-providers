// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * User defined name of the role. Name cannot be changed once created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Map of project tags filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#project_tags Role#project_tags}
  */
  readonly projectTags?: { [key: string]: string };
  /**
  * State of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#state Role#state}
  */
  readonly state?: string;
  /**
  * User defined title of the role. Title can be changed anytime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#title Role#title}
  */
  readonly title: string;
  /**
  * Type of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#type Role#type}
  */
  readonly type: string;
  /**
  * scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#scopes Role#scopes}
  */
  readonly scopes: RoleScopes[] | cdktf.IResolvable;
}
export interface RoleRevision {
}

export function roleRevisionToTerraform(struct?: RoleRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function roleRevisionToHclTerraform(struct?: RoleRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RoleRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RoleRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class RoleRevisionList extends cdktf.ComplexList {

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
  public get(index: number): RoleRevisionOutputReference {
    return new RoleRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleScopes {
  /**
  * Application access permission, this will be deprecated in further release - please use accessEdgeApp and accessAppInstance for granular permission access scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_app Role#access_app}
  */
  readonly accessApp?: string;
  /**
  * Application Instance access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_app_instance Role#access_app_instance}
  */
  readonly accessAppInstance?: string;
  /**
  * Device access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_device Role#access_device}
  */
  readonly accessDevice?: string;
  /**
  * Edge app access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_edge_app Role#access_edge_app}
  */
  readonly accessEdgeApp?: string;
  /**
  * Enterprise access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_enterprise Role#access_enterprise}
  */
  readonly accessEnterprise?: string;
  /**
  * Storage access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_storage Role#access_storage}
  */
  readonly accessStorage?: string;
  /**
  * User access permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#access_user Role#access_user}
  */
  readonly accessUser?: string;
  /**
  * List of enterprise filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#enterprise_filter Role#enterprise_filter}
  */
  readonly enterpriseFilter?: string[];
  /**
  * List of project filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#project_filter Role#project_filter}
  */
  readonly projectFilter?: string[];
}

export function roleScopesToTerraform(struct?: RoleScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_app: cdktf.stringToTerraform(struct!.accessApp),
    access_app_instance: cdktf.stringToTerraform(struct!.accessAppInstance),
    access_device: cdktf.stringToTerraform(struct!.accessDevice),
    access_edge_app: cdktf.stringToTerraform(struct!.accessEdgeApp),
    access_enterprise: cdktf.stringToTerraform(struct!.accessEnterprise),
    access_storage: cdktf.stringToTerraform(struct!.accessStorage),
    access_user: cdktf.stringToTerraform(struct!.accessUser),
    enterprise_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enterpriseFilter),
    project_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectFilter),
  }
}


export function roleScopesToHclTerraform(struct?: RoleScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_app: {
      value: cdktf.stringToHclTerraform(struct!.accessApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_app_instance: {
      value: cdktf.stringToHclTerraform(struct!.accessAppInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_device: {
      value: cdktf.stringToHclTerraform(struct!.accessDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_edge_app: {
      value: cdktf.stringToHclTerraform(struct!.accessEdgeApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_enterprise: {
      value: cdktf.stringToHclTerraform(struct!.accessEnterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_storage: {
      value: cdktf.stringToHclTerraform(struct!.accessStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_user: {
      value: cdktf.stringToHclTerraform(struct!.accessUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enterpriseFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessApp = this._accessApp;
    }
    if (this._accessAppInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAppInstance = this._accessAppInstance;
    }
    if (this._accessDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDevice = this._accessDevice;
    }
    if (this._accessEdgeApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessEdgeApp = this._accessEdgeApp;
    }
    if (this._accessEnterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessEnterprise = this._accessEnterprise;
    }
    if (this._accessStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStorage = this._accessStorage;
    }
    if (this._accessUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessUser = this._accessUser;
    }
    if (this._enterpriseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseFilter = this._enterpriseFilter;
    }
    if (this._projectFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectFilter = this._projectFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessApp = undefined;
      this._accessAppInstance = undefined;
      this._accessDevice = undefined;
      this._accessEdgeApp = undefined;
      this._accessEnterprise = undefined;
      this._accessStorage = undefined;
      this._accessUser = undefined;
      this._enterpriseFilter = undefined;
      this._projectFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessApp = value.accessApp;
      this._accessAppInstance = value.accessAppInstance;
      this._accessDevice = value.accessDevice;
      this._accessEdgeApp = value.accessEdgeApp;
      this._accessEnterprise = value.accessEnterprise;
      this._accessStorage = value.accessStorage;
      this._accessUser = value.accessUser;
      this._enterpriseFilter = value.enterpriseFilter;
      this._projectFilter = value.projectFilter;
    }
  }

  // access_app - computed: false, optional: true, required: false
  private _accessApp?: string; 
  public get accessApp() {
    return this.getStringAttribute('access_app');
  }
  public set accessApp(value: string) {
    this._accessApp = value;
  }
  public resetAccessApp() {
    this._accessApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAppInput() {
    return this._accessApp;
  }

  // access_app_instance - computed: false, optional: true, required: false
  private _accessAppInstance?: string; 
  public get accessAppInstance() {
    return this.getStringAttribute('access_app_instance');
  }
  public set accessAppInstance(value: string) {
    this._accessAppInstance = value;
  }
  public resetAccessAppInstance() {
    this._accessAppInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAppInstanceInput() {
    return this._accessAppInstance;
  }

  // access_device - computed: false, optional: true, required: false
  private _accessDevice?: string; 
  public get accessDevice() {
    return this.getStringAttribute('access_device');
  }
  public set accessDevice(value: string) {
    this._accessDevice = value;
  }
  public resetAccessDevice() {
    this._accessDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDeviceInput() {
    return this._accessDevice;
  }

  // access_edge_app - computed: false, optional: true, required: false
  private _accessEdgeApp?: string; 
  public get accessEdgeApp() {
    return this.getStringAttribute('access_edge_app');
  }
  public set accessEdgeApp(value: string) {
    this._accessEdgeApp = value;
  }
  public resetAccessEdgeApp() {
    this._accessEdgeApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEdgeAppInput() {
    return this._accessEdgeApp;
  }

  // access_enterprise - computed: false, optional: true, required: false
  private _accessEnterprise?: string; 
  public get accessEnterprise() {
    return this.getStringAttribute('access_enterprise');
  }
  public set accessEnterprise(value: string) {
    this._accessEnterprise = value;
  }
  public resetAccessEnterprise() {
    this._accessEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEnterpriseInput() {
    return this._accessEnterprise;
  }

  // access_storage - computed: false, optional: true, required: false
  private _accessStorage?: string; 
  public get accessStorage() {
    return this.getStringAttribute('access_storage');
  }
  public set accessStorage(value: string) {
    this._accessStorage = value;
  }
  public resetAccessStorage() {
    this._accessStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStorageInput() {
    return this._accessStorage;
  }

  // access_user - computed: false, optional: true, required: false
  private _accessUser?: string; 
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }
  public set accessUser(value: string) {
    this._accessUser = value;
  }
  public resetAccessUser() {
    this._accessUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUserInput() {
    return this._accessUser;
  }

  // enterprise_filter - computed: false, optional: true, required: false
  private _enterpriseFilter?: string[]; 
  public get enterpriseFilter() {
    return this.getListAttribute('enterprise_filter');
  }
  public set enterpriseFilter(value: string[]) {
    this._enterpriseFilter = value;
  }
  public resetEnterpriseFilter() {
    this._enterpriseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseFilterInput() {
    return this._enterpriseFilter;
  }

  // project_filter - computed: false, optional: true, required: false
  private _projectFilter?: string[]; 
  public get projectFilter() {
    return this.getListAttribute('project_filter');
  }
  public set projectFilter(value: string[]) {
    this._projectFilter = value;
  }
  public resetProjectFilter() {
    this._projectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectFilterInput() {
    return this._projectFilter;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class RoleScopesList extends cdktf.ComplexList {
  public internalValue? : RoleScopes[] | cdktf.IResolvable

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
  public get(index: number): RoleScopesOutputReference {
    return new RoleScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role zedcloud_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/role zedcloud_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_role',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._projectTags = config.projectTags;
    this._state = config.state;
    this._title = config.title;
    this._type = config.type;
    this._scopes.internalValue = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_tags - computed: false, optional: true, required: false
  private _projectTags?: { [key: string]: string }; 
  public get projectTags() {
    return this.getStringMapAttribute('project_tags');
  }
  public set projectTags(value: { [key: string]: string }) {
    this._projectTags = value;
  }
  public resetProjectTags() {
    this._projectTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTagsInput() {
    return this._projectTags;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new RoleRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes = new RoleScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: RoleScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._projectTags),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      scopes: cdktf.listMapper(roleScopesToTerraform, true)(this._scopes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projectTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
      scopes: {
        value: cdktf.listMapperHcl(roleScopesToHclTerraform, true)(this._scopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleScopesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
